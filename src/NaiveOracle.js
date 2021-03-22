

class Oracle {
  matchRuleWithStack(stack, rule) {
    
  }

  nextAction(stack, symbols) {
    grammar.rules.forEach(rule => {
      if (this.matchRuleWithStack(stack, rule)) {
        return {
          action: 'REDUCE',
          rule: rule
        }
      } else {
        return {
          action: 'SHIFT'
        }
      }
    });

  }

}

module.exports = Oracle
