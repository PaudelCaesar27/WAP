var count = (function () {
    var counter = 0;  // closure variable

    function add(){
        return counter+=1;
    }

    function reset(){
        console.log( "counter value prior to reset: " + counter );
        counter = 0;
    }

    return {
        add: add,
        reset: reset
    };
})();
count.add();
count.reset();