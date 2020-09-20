let employee = (function(){

    let name = "Navin";
    let age = 0;
    let salary = 0;

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
employee.setAge(20);
employee.setSalary(20000);
employee.setName("will");
employee.increaseSalary();
employee.incrementAge();



