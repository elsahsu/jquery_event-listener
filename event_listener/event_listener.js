/*
Use jQuery to set up an event listener. Your event listener must:
    1. listen to the #my-button element
    2. listen for a `click` event
    3. perform the following actions when the button is clicked:
        a. remove the #my-button element from the DOM
        b. add the `success` class to the body
*/
$('#my-button').on('click', function(evt){
    console.log(evt);
    $('#my-button').remove();
    $('body').toggleClass('success');
});
