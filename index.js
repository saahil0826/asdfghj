
$(document).ready(function () {
    //Disable full page
    $("body").on("contextmenu",function(e){
        return false;
    });

    $('body').bind('cut copy paste', function (e) {
        e.preventDefault();
    });

    //Disable part of page
    $("#id").on("contextmenu",function(e){
        return false;
    });
});
