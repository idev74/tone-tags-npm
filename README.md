# tone-tags


[![npm version](https://img.shields.io/npm/v/tone-tags.svg)](https://www.npmjs.com/package/tone-tags)
[![npm downloads](https://img.shields.io/npm/dt/tone-tags.svg)](https://www.npmjs.com/package/tone-tags)

[Package available on NPM](https://www.npmjs.com/package/tone-tags)

A simple node module that adds and can decipher tone tags on a  piece of text!

## Installation:
``` 
npm install tone-tags 
```

## Usage:
```javascript
const tag = require('tone-tags');

console.log(tone.tagify('This is a joking statement that might be confusing to  decipher over text (joking) (sarcastic) (light-hearted)'));
// Output: This is a joking statement that might be confusing to  decipher over text /j /s /lh

console.log(tone.decode('What do these tags even mean?? /ly /pos /neg /hyp'));
// Output: What do these tags even mean?? (lyrics) (positive) (negative) (hyperbole)
```

## What are tone tags/indicators?
Tone tags or tone indicators are symbols that can accompany social media posts, comments, and messages. Their purpose is to explicitly state the intent and tone behind the text, often to prevent miscommunication.