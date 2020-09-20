class A
{
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

var b=new B();
b.display();