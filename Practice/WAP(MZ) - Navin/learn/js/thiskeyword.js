/*
- Implicit Binding
- Explicit Binding
- New Binding
- Window Binding
 */

//Implicit Binding
//Left of the dot at the call time

var me ={
    name: "Navin",
    age:30,
    sayName: function(){
        console.log(this.name);
    }
};
me.sayName(); //here this keyword is going to reference me object

var sayNameMixin = function(obj){
    obj.sayName = function () {
        console.log(this.name);
    };
};

var me1={
    name:"Navin",
    age: 30
};
var you={
    name:"paudel",
    age:31
};
sayNameMixin(me1);
sayNameMixin(you);

me.sayName();
you.sayName();

var Person = function(name, age){
    return{
        name:name,
        age:age,
        sayName: function(){
            console.log(this.name);
        },
        mother:{
            name:'Bhagwati',
            sayName:function () {
                console.log(this.name);
            }
        }
    }
};
var jim = Person('jim', 42);
jim.sayName();
jim.mother.sayName(); //here this keyword is refrencing mother

//Explicit binding
// .call, .apply, .bind
var sayName = function (lang1, lang2, lang3) {
    console.log('My name is '+this.name+' and I know '+lang1+', '+lang2+', and '+lang3);
}
var bhagwati = {
    name:'Bhagwati',
    age:44,

};
var languages = ['Javascript', 'Ruby', 'Python'];
sayName.call(bhagwati, languages[0], languages[1], languages[2]);  //here this keyword is going to refrence bhagwati
//First argument we passed here is 'context' and every argument after that is going to be passed to the function
//just as a normal argument
//we are invoking sayName in the context of bhagwati so we are replacing this with bhagwati and we are passing
//along three arguments and we have three parameters in function

sayName.apply(bhagwati, languages); //.apply is excatly same as call but instead of passing in the arguments
//one by one we can pass in an array of arguments and it's going to basically parse it for us in function

var newFn = sayName.bind(bhagwati, languages[0], languages[1], languages[2]);
console.log("Here see below for new function is invoked")
newFn();
//.bind is almost exactly same as .call except one thing that it will not immediately invoke function.
//But its going to return a brand new function that we can invoke it later



//new Binding
var Animal = function (color, name, type) {

    this.color = color;
    this.name = name;
    this.type = type;
};

var zebra = new Animal('black and white', 'Zoro', 'Zebra');
//when we invoke Animal with new keyword, javascript is going to create a brand new object for us and save it
//as 'this'. Here this is just an object and so new binding rule states that when a function is invoked with the
//new keyword then this keyword inside that function is bound to the new object being constructed
console.log(zebra.color);


//window Binding
var sayAge = function () {
    // 'use strict';
    console.log(this.age)
};

var me={
    age:25
};

sayAge(); //if we try to invoke sayAge then we are going to get undefined. If we invoke a function that uses
//of the 'this' keyword but doesnot have anything to the left of the dotthen its not using the new binding
//and we are not using call, apply or bind so this keyword is going to default to the window object
//if we set age for window object and cann sayAge again the its going to show age.

// window.age=35;
// sayAge();

//if we use 'use strict' then javascript wont let this keyword to bound to the window object  or to reference the
//window object