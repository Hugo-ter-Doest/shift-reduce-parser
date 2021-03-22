

class Stack {
  constructor(initialStack) {
    if (initialStack) {
      this.stack = initialStack
    } else {
      this.stack = []
    }
  }

  push(elt) {
    this.stack.push(elt)
  }

  pop(elt) {
    return this.stack.pop()
  }

}

module.exports = Stack
