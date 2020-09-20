let employee1 = (function(){

    var name = "Navin";
    var age = 0;
    var salary = 0;

    function setAge(newAge){
        age = newAge;
    }
    function setSalary(newSalary){
        salary = newSalary;
    }
    function setName(newName){
        name = newName;
    }
    function getAge(){
        return age;
    }
    function getSalary(){
        return salary;
    }
    function getName(){
        return name;
    }

    function increaseSalary() {
        console.log(getSalary() + 1000);
    }

    function incrementAge() {
        console.log(getAge()+ 2);
    }

    return {
        setAge: setAge,
        setSalary: setSalary,
        setName: setName,
        increaseSalary:increaseSalary,
        incrementAge:incrementAge
    };
})();

(function() {
    var address = "ottumwa";
    employee1.getAddress = function() {
        console.log(address);
        return address;
    };
    employee1.setAddress = function(newAddress) {
        address = newAddress;
    };
})();
employee1.setAge(20);
employee1.setSalary(20000);
employee1.setName("will");
employee1.increaseSalary();
employee1.incrementAge();
employee1.getAddress();
employee1.setAddress("Fairfield, Iowa");
employee1.getAddress();
employee1.address="1000N, 4th street";
employee1.getAddress();
employee1.setAddress("Fairfield");
employee1.getAddress();

