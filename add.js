
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.tellMyName = function () {
        console.log("I am ".concat(this.name));
    };
    Person.prototype.tellMyAge = function () {
        console.log("I am ".concat(this.age, " years old"));
    };
    return Person;
}());
var obj = new Person("John", 40);
var obj2 = new Person("Marie", 35);
obj.tellMyName();
obj.tellMyAge();
obj2.tellMyAge();
obj2.tellMyName();
