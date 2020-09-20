function Person() {
    console.log(this);
    this.university = "MUM";
    this.year = '2016';
}
const faculty1 = new Person();
Person.prototype.greet = function() {
    return 'Hi ' + this.university;
}
const greeting = faculty1.greet();
console.log(greeting); // "Hi MUM“