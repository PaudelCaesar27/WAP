"use strict";
$(() => {
    $("btns").click(function () {
        $.ajax({
            type:'Get',
            uri:'https://github.com/paudelnavin/demo/blob/master/db.json',
            success: function (data) {
                $("#cpuSpeed").text(data.cpu);
                $("#ramAmount").text(data.ram);
                $("#storage").text(data.storage);
                $("#price").text(data.price);
            },
            error: function () {
                alert("error loading computer details");
            }
        });
        // $.get("computers.json", { "id": $(this).text() })
        //     .done(function (data) {
        //         $("#cpuSpeed").text(data.cpu);
        //         $("#ramAmount").text(data.ram);
        //         $("#storage").text(data.storage);
        //         $("#price").text(data.price);
        //     });
    });
});