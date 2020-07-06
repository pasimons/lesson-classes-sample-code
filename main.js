const pumpernickel = new User("Pumpernickel Blake")
const sherbert = new User("Sherbert Aurelius Bagphone")

pumpernickel.greet()
sherbert.greet()

pumpernickel.logCreationDate()
sherbert.logCreationDate()



const Muriel = new User('Muriel ')
const Bagge = new User('Muriel Bagge')

Muriel.greet()
Bagge.greet()

Muriel.logCreationDate()
Bagge.logCreationDate()


class Users {
    constructor (Courage) {
        this.name = Courage
        this.creationDate = new Date()
    }
    greet () {
        console.log("Hello, " + this.Courage + "!")
    }
}