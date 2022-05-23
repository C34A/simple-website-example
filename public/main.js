"use strict";

(() => {

    window.addEventListener("load", init);

    function init() {
        console.log({"asdf": 123});
        
        let canvas = document.getElementById("canvas");

        canvas.addEventListener("click", canvasClicked);

        // let ctx = canvas.getContext("2d");

        // ctx.moveTo(0, 0);
        // ctx.lineTo(200, 100);
        // ctx.stroke();
    }

    function canvasClicked(event) {
        let canvas = document.getElementById("canvas");

        let ctx = canvas.getContext("2d");

        ctx.moveTo(0, 0);
        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();

        fetch("/test")
            .then((response) => {console.log(response)});
    }
})();