
const Oracle = require('./NaiveOracle')
const Parser = require('./Parser')
const grammar = require('./grammar.json')

const oracle = new Oracle()
const parser = new Parser(grammar, oracle, 1)
