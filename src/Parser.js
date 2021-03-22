
const Sentence = require('./Sentence')

class Parser {
  constructor(grammer, oracle, lookahead) {
    super()
    this.grammar = grammer
    this.oracle = oracle
    this.lookahead = lookahead
    this.stack = new Stack()
  }

  lookaheadSymbols(sentence, cursor) {

  }

  parse(sentence) {
    let cursor = 0;

    while (cursor < sentence.length) {
      const action = this.oracle(this.stack, lookaheadSymbols(sentence))
      if (action === SHIFT) {
        this.stack.push(sentence[cursor])
        cursor++
      } else { // REDUCE

      }
    }
  }

  setOracle(oracle) {
    this.oracle = oracle
  }

}

module.exports = Parser
