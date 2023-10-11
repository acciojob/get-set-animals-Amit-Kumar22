//complete this code
class Animal {
	constructor(species){
    this._species=species;
  }
 get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
	}

class Dog extends Animal {
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
const cat1 = new Cat("Siamese");
cat1.makeSound();
cat1.purr();
const dog1 = new Dog("Golden Retriever");
dog1.makeSound();
dog1.bark();