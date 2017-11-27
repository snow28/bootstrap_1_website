$(document).ready(function(){
    function refreshSwatch() {
        var hex="#10c9c";
        $( "#swatch" ).css( "background-color",  hex );
    }
    $( ".slider-1-js" ).slider({
        orientation: "horizontal",
        range: "min",
        max: 100,
        value: 75,
        slide: refreshSwatch,
        change: refreshSwatch
    });
    $( ".slider-2-js" ).slider({
        orientation: "horizontal",
        range: "min",
        max: 100,
        value: 90,
        slide: refreshSwatch,
        change: refreshSwatch
    });
    $( ".slider-3-js" ).slider({
        orientation: "horizontal",
        range: "min",
        max: 100,
        value: 65,
        slide: refreshSwatch,
        change: refreshSwatch
    });




});