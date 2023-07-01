const tags = {
    "joking": "/j",
    "half-joking": "/hj",
    "serious": "/srs",
    "sarcastic": "/s",
    "light-hearted": "/lh",
    "genuine question": "/genq",
    "genuine": "/gen",
    "positive": "/pos",
    "negative": "/neg",
    "neutral": "/neu",
    "not mad": "/nm",
    "platonic": "/p",
    "romantic": "/r",
    "copypasta": "/c",
    "lyrics": "/ly",
    "hyperbole": "/hyp",
    "metaphor": "/m",
    "rhetorical": "/rh",
}

function tagify(text) {
    let newText = text;
    Object.keys(tags).forEach(tag => {
        const tagRegex = new RegExp(`\\(${tag}\\)`, "g");
        newText = newText.replace(tagRegex, tags[tag]);
    });
    return newText;
}

function decode(text) {
    let newText = text;
    Object.keys(tags).forEach(tag => {
        decodeRegex = new RegExp(tags[tag], "gi");
        newText = newText.replace(decodeRegex, `(${tag})`);
    });
    return newText;
}

module.exports = {
    tagify,
    decode
}

