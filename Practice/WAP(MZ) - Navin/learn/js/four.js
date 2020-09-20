var x=9;
function myFunction(){
    return x*x;
}
document.write(myFunction());
x=5;
document.write(myFunction());

var foo=1
function bar(){
    if(!foo){
        var foo=10;
    }
    document.write(foo);
}
bar();

var a=10;
function add() {
        sum = a+ 10;
    document.write(sum);
        function number(){
            let sum1 = a+15;
            document.write(sum1);
        }
        number();
}
add()