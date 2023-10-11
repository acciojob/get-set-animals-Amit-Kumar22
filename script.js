//complete this code
class Animal {
	constructor(species){
    this._species=species;
  }
 get species() {
    return this._species;
  }

  makeSound() {
    console.log("The animal makes a sound");
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
const cat1 = new Cat("miccymouse");
cat1.makeSound();
cat1.purr();
const dog1 = new Dog("tommy");
dog1.makeSound();
dog1.bark();