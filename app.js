$(document).ready(function() {

    $car = $('.car');


    $(document).on('keypress', function(myParam) {
        if(myParam.which == 13){
            $($car).toggleClass('startAnimation');

        }
        if(myParam.which == 32){
            $($car).toggleClass('jumpCar');
        }
    })
});





