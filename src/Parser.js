
const Sentence = require('./Sentence')
const Stack = require('./Stack')

const DEBUG = true

class Parser {
  constructor(grammer, oracle, lookahead) {
    this.grammar = grammer
    this.oracle = oracle
    this.lookahead = lookahead
    this.stack = new Stack()
  }

  lookaheadSymbols(sentence, cursor) {
    let symbols = []
    for (let i = cursor; cursor < sentence.length; i++) {
      symbols.push(sentence[i])
    }
  }

  reduceByRule(rule) {
    const LHS = rule[0]
    const RHS = rule[1]
    RHS.foreach((symbol, index) => {
      const poppedSymbol = this.stack.pop()
      if (poppedSymbol === RHS[RHS.length - index - 1]) {
        DEBUG && console.log('reduceByRule: matched symbol: ' + poppedSymbol)
      }
      else {
        DEBUG && console.log('reduceByRule: mismatched symbol: ' + poppedSymbol)
      }
    })
    this.stack.push(LHS)
  }

  parse(sentence) {
    let cursor = 0;
    let step = 0;

    while (cursor < sentence.length) {
      const action = this.oracle.nextAction(this.stack, lookaheadSymbols(sentence))
      if (action.name === SHIFT) {
        this.stack.push(sentence[cursor])
        cursor++
      } else { // REDUCE
        reduceByRule(action.rule)
      }
      DEBUG && console.log(step + '\t' +
        this.stack.print() + '\t' +
        sentence[cursor].token + '\t' +
        action.name
      )
      step++
    }
  }

  setOracle(oracle) {
    this.oracle = oracle
  }

}

module.exports = Parser
