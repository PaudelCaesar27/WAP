var counts = (function () {

    var counter = 0;

    var make_adder = function(inc){
        var add = function(){
            counter = counter+inc;
            console.log(counter);
            return counter;
        }
        return add;
    }
    return {
        make_adder: make_adder
    };
})();
let add5 = counts.make_adder(5);
add5();
add5();
add5();