(function () {
	let oldMarkdown = window.$docsify.markdown;
	let newMarked = marked.parse; // version above 2.1.0
	function newMarkdown(originMarked, originRenderer) {
		// in docsify.js: `window.marked = marked;`
		// this will overwrite the marked
		// here `let newMarked = marked;` will not right
		function isFn(obj) {
			return typeof obj === "function";
		}
		const noteExtension = {
			name: "note",
			level: "block",
			start(src) {
				let index = src.match(/^!!! /)?.index;
				return index;
			},
			tokenizer(src, tokens) {
				// const Rule = /^!!! note(.*?)\n(.+?)\n\n[^ ]/s;
                const Rule = /^!!! note(.*?)\n((?:(?:(?:    |\t).*?\n)|\n)*)/;
				let match;
				if ((match = Rule.exec(src))) {
					if (match[1] == null || match[1].trim() == "") {
						match[1] = "Note";
					}
					// match[2] = match[2].replace(/\n {4}/g, "\n");
					return {
						type: "note",
						raw: match[0],
						header: match[1].trim(),
						text: this.lexer.inlineTokens(match[2]),
					};
				}
			},
			renderer(token) {
				// return `<mark>${this.parser.parseInline(token.text)}</mark>`;
				return `<div class="admonition note">
                            <p class="admonition-title">${token.header}</p>
                            <p>
                            ${this.parser.parseInline(token.text)}
                            </p>
                        </div>`;
			},
		};
		const merge =
			Object.assign ||
			function (to) {
				for (let i = 1; i < arguments.length; i++) {
					const from = Object(arguments[i]);
					for (const key in from) {
						if (hasOwn.call(from, key)) {
							to[key] = from[key];
						}
					}
				}
				return to;
			};

		let opts = oldMarkdown || {};

		if (isFn(oldMarkdown)) {
			opts = oldMarkdown(
                originMarked,
                originRenderer
            ).defaults;
		} else {
			opts = merge(opts, {
				renderer: merge(originRenderer, opts.renderer),
			});
		}
		newMarked.setOptions(opts);
		newMarked.use({ extensions: [noteExtension] });

		return newMarked;
	}
	window.$docsify.markdown = newMarkdown;
})();
