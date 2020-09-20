class A
{
    constructor(name, rollNo){
        var name;
        var rollNo;
    }
    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
    }

    get rollNo() {
        return this.rollNo;
    }

    set rollNo(rollNo) {
        this.rollNo = rollNo;
    }


    display()
    {
        console.log("A is invoked<br>");
    }
}
class B extends A
{
    display()
    {
        console.log("B is invoked");
    }
}

let a = new A();
a.name = "navin";
console.log(a);