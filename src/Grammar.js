

class Grammar {
  constructor(grammarText) {
    super()
    this.grammar = JSON.parse(grammarText)
  }
}

module.exports = Grammar
