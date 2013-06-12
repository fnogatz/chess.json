# Note: Chess.json has been replaced by the [Chess Tournament Exchange (CTX)](https://github.com/fnogatz/CTX) format and is no longer developed.

## Chess.json: JSON Schema for Chess Tournaments

Chess.json is a collection of [JSON Schemata](http://json-schema.org/) for saving chess tournaments in an open format.

### Purpose

There are many tools to manage chess tournaments but no open exchange format. In German-spoken countries, the proprietary SWT format for [Swiss-Chess](http://www.swiss-chess.de/) is the quasi-standard. Though it might be possible to parse it, it isn't documented anywhere and has some disadvantages.
The aim of Chess.json is to strictly separate the pure tournament information like the round dates, players and their results from the settings for managing the tournament (pairing modus, ranking system, etc.).

### Schemata

There are currently the following JSON Schemata:

*	Team-Tournament (draft-02)

### Usage

You can use any JSON Schema validator like [JSV](https://github.com/garycourt/JSV) to validate your chess tournament files.

### ToDo

*	Parser: [SWT](http://www.swiss-chess.de/) to Chess.json
