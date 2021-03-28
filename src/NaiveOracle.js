
const DEBUG = true;

class Oracle {
  matchRuleWithStack(stack, rule) {
    const RHS = rule[1]
    let match = true;
    let index = 0;
    while (match && index < RHS.length) {
      match = match && (RHS[index]  === stack.stack[stack.length - index - 1])
      index++
    }
    DEBUG && console.log('matchRuleWithStack: rule: ' + RHS + ': ' + match)
    return match
  }

  nextAction(stack, symbols) {
    grammar.rules.forEach(rule => {
      if (this.matchRuleWithStack(stack, rule)) {
        return {
          action: 'REDUCE',
          rule: rule
        }
      }
    });
    return {
      action: 'SHIFT'
    }
  }

}

module.exports = Oracle
