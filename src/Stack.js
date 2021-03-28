

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

  print() {
    let s = 'stack: \n'
    this.stack.forEach(elt => {
      S += elt + '\n'
    })
    return s
  }

}

module.exports = Stack
