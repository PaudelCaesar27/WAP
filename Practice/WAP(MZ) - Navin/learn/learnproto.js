let animal = {
    eats: true,
    walk: function() {
        console.log("Animal walk");
    }
};
let rabbit = {
    jumps: true,
    __proto__: animal
};
let longEar = {
    earLength: 10,
    __proto__: rabbit
};
console.log(longEar.walk());