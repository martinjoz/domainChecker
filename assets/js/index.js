$(document).ready(function() {

    $("#search").on('click', function(e) {
        var data = $("#val").val();
        if ((data.slice(-2)) != 'ke' && data.slice(-3) != 'com') {
            e.preventDefault();
            alert('The URL should contain a .com or .ke In Lower Case: e.g example.com');
        } else {
           
        }
        
    });

});