(function () {
	const descriptionList = {
		name: "descriptionList",
		level: "block", // Is this a block-level or inline-level tokenizer?
		start(src) {
			return src.match(/^(?:\w.*?)(?:\n(?:(?: *?|\t+?): .*(?:\n|$))(?:\n)*)+/)?.index;
		}, // Hint to Marked.js to stop and check for a match
		tokenizer(src, tokens) {
			const rule = /^(\w.*?)((?:\n(?:(?: *?|\t+?): .*(?:\n|$))(?:\n)*)+)/;
			const match = rule.exec(src);
			if (match && match.length == 3) {
				const token = {
					// Token to generate
					type: "descriptionList", // Should match "name" above
					raw: match[0], // Text to consume from the source
					header: this.lexer.inlineTokens(match[1].trim()),
					text: match[2].trim(), // Additional custom properties
					tokens: [], // Array where child inline tokens will be generated
				};
				this.lexer.inline(token.text, token.tokens); // Queue this data to be processed for inline tokens
				return token;
			}
		},
		renderer(token) {
			return `<dl>
                        <dt>${this.parser.parseInline(token.header)}</dt>
                        ${this.parser.parseInline(token.tokens)}
                    </dl>`; // parseInline to turn child tokens into HTML
		},
	};

	const description = {
		name: "description",
		level: "inline", // Is this a block-level or inline-level tokenizer?
		start(src) {
			return src.match(/^\n(?: *?|\t+?): /)?.index;
		}, // Hint to Marked.js to stop and check for a match
		tokenizer(src, tokens) {
			const rule = /^\n(?: *?|\t+?): (.+?)(?:\n|$)/; // Regex for the complete token, anchor to string start
			const match = rule.exec(src);
			if (match) {
				return {
					// Token to generate
					type: "description", // Should match "name" above
					raw: match[0], // Text to consume from the source
					// dt: this.lexer.inlineTokens(match[1].trim()), // Additional custom properties, including
					dd: this.lexer.inlineTokens(match[1].trim()), //   any further-nested inline tokens
				};
			}
		},
		renderer(token) {
			return `<dd>${this.parser.parseInline(token.dd)}</dd>`;
		},
		childTokens: ["dd"], // Any child tokens to be visited by walkTokens
	};

	// function walkTokens(token) {
	// 	// Post-processing on the completed token tree
	// 	if (token.type === "strong") {
	// 		token.tokens = this.Lexer.lexInline(token.text);
	// 	}
	// }
	marked.use({ extensions: [descriptionList, description]});
})();
