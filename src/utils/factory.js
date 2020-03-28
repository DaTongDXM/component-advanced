// function () {
//   console.log('factory')
// }

class Man {
  constructor (name) {
    this.name = name
  }

  console () {
    console.log(this.name)
  }
}

class Factory {
  static create (name) {
    return new Man(name)
  }
}

export {Factory}
