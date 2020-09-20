function sum(x, y, ...more) {
//"more" is array of all extra passed params
    let total = x + y;
    if (more.length > 0) {
        for (let i = 0; i < more.length; i++) {
            total += more[i];
        }
    }
    console.log("Total: " + total);
    return total;
}
sum(5, 5, 5);
sum(6, 6, 6, 6, 6);

const address = [221, "Baker Street", "London"];
const [ , , city ] = address;
console.log(city)// 221 'London’

const details ={firstName:'Code', lastName:'Burst', age: 22};
const { firstName, age } = details;
console.log(firstName, age);// Code 22