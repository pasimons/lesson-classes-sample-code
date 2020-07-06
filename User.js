class User {

    constructor (name) {
        this.name = name
        this.creationDate = new Date()
    }

    greet () {
        const main = document.querySelector("main")
        const h1 = document.createElement("h1")

        h1.append("Hello, " + this.name + "!")
        main.append(h1)
    }

    logCreationDate () {
        console.log(this.name + ": " + this.creationDate)
    }

}