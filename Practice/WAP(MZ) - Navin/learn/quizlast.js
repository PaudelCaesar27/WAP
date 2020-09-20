"use strict";
/**
 *
 * @param {String} ram      in the computer
 * @param {String} cpu      in the computer
 * @param {String} storage  in the computer
 * @returns {Computer} from constructor
 */
function Computer(ram, cpu, storage) {
    this.ram = ram;
    this.cpu = cpu;
    this.storage = storage;
}

Computer.prototype.runProgram = function(program) {
    console.log("Running program" + program);
};

/**
 *
 * @param {String} ram in the computer
 * @param {String} cpu in the computer
 * @param {String} storage in the computer
 * @param {String} battery in the laptop
 * @returns {Laptop} from constructor
 */
function Laptop(ram, cpu, storage, battery) {
    this.ram = ram;
    this.cpu = cpu;
    this.storage = storage;
    this.battery = battery;
}
// Laptop.prototype.__proto__ = Computer.prototype;
Laptop.prototype.__proto__ = new Computer();
Laptop.prototype.carryAround = function() {
    console.log("carrying laptop: cpu " + this.cpu +" ram: " + this.ram + " storage: " + this.storage + " battery: " + this.battery);
};

// make sure it works
let laptop = new Laptop("1.6Ghz", "8GB", "1TB", "75%");
laptop.runProgram("Visual Studio Code");
laptop.carryAround();