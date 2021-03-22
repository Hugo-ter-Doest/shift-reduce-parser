

class Grammar {
  constructor(grammarText) {
    super()
    this.grammar = parse(grammarText)
  }
}

module.exports = Grammar
