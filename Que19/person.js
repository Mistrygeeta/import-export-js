//Create a module that exports a class Person. Import it in another file, create an instance, and use its methods.

class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    getName(){
        return this.name ;
    }

    getAge(){
        return this.age ;
    }

    introduce(){
        console.log(`hello i'm ${this.name} and i'm ${this.age} year old`)
    }
}

module.exports = person