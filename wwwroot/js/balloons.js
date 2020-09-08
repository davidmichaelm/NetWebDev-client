$(function(){
    $('#birthday').pickadate({ format: 'mmmm, d' });
    
    let allCheckboxes = $('.form-check-input');
    let regularCheckboxes = allCheckboxes.not("#allBalloons");
    
    // uncheck all checkboxes (FireFox)
    allCheckboxes.each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    allCheckboxes.on('change', function () {
        
        if (this.id === "allBalloons") {
            // check / uncheck all balloons with a single click
            allCheckboxes.prop("checked", this.checked);
            allCheckboxes.not("#allBalloons").trigger("change");
        } else {
            // uncheck select all button if one is unselected
            if (!$(this).is(':checked')) {
                $("#allBalloons").prop("checked", false);
            }
            
            // check select all button if this change causes all buttons to be checked
            if (regularCheckboxes.length === regularCheckboxes.filter(":checked").length) {
                $("#allBalloons").prop("checked", true);
            }
            
            // make the image visible
            $('#' + this.id + 'Img').css('visibility', 'visible');
            // animate balloon in/out based on checkbox
            $(this).is(':checked') ?
                $('#' + this.id + 'Img').removeClass().addClass('animated bounceInDown') :
                $('#' + this.id + 'Img').addClass('animated bounceOutUp');
        }
    });
    
    // hovering over a balloon label changes the color of the Happy Birthday heading
    let balloonLabels = $(".form-check-label").not("[for=allBalloons]");
    
    balloonLabels.on("mouseenter", function() {
        $("#happy-birthday").css("color", this.htmlFor);
    });
    
    balloonLabels.on("mouseleave", function() {
        $("#happy-birthday").css("color", "initial");
    });
    
    // Randomize attention seeker
    let animations = ["bounce", "flash", "pulse", "rubberBand", "headShake", "swing", "tada", "wobble", "jello", "heartBeat"];
    let randomNumber = Math.floor(Math.random() * 8);
    
    $("#happy-birthday").addClass(animations[randomNumber]);

    // Create toast on submit when no balloons are selected
    $("#submit").on("click", function() {
        let checkboxes = $(".form-check-input:checked");
        if (checkboxes.length === 0) {
            $('#toast').toast({ autohide: false }).toast('show');
        }
    });
});