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
        const highlight = {
            name: 'highlight',
            level: 'inline',
            start(src) {
                let index = src.match(/\=/)?.index;
                return index;
            },
            tokenizer(src, tokens) {
                const rule = /^\=\=((\\.|[^\=\\])+)\=\=/;
                let match = rule.exec(src);
                if (match) {
                    return {
                        type: "highlight",
                        raw: match[0],
                        text: this.lexer.inlineTokens(match[1].trim()),
                    };
                }
            },
            renderer(token) {
                return `<mark>${this.parser.parseInline(token.text)}</mark>`
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
        newMarked.use({ extensions: [highlight] });

        return newMarked;
    }
    window.$docsify.markdown = newMarkdown;
})();

