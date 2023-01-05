class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;


    }

    tellMyName() {
        console.log(`I am ${this.name}`);
    }

    tellMyAge() {
        console.log(`I am ${this.age} years old`);
    }


}
const obj = new Person("John", 40);
const obj2 = new Person("Marie", 35);

obj.tellMyName();
obj.tellMyAge();

obj2.tellMyAge();
obj2.tellMyName();

