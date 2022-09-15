let dropDown = false;

function hamAnimation(c) {
    if (dropDown == false) {
        c.classList.toggle("change");
        let dropDown = true;
    }
    else {
        c.classList.toggle("close");
        let dropDown = false;
    }
}


$(function() {

    //Menubar jump
    $(".tag1").click(function() {
        $("html, body").animate({scrollTop: $("#boxOne").offset().top}, 800, "easeOutBack");
    });
    
    $(".tag2").click(function() {
        $("html, body").animate({scrollTop: $("#boxTwo").offset().top}, 800, "easeOutBack");
    });
    
    $(".tag3").click(function() {
        $("html, body").animate({scrollTop: $("#boxThree").offset().top}, 800, "easeOutBack");
    });
    
    $(".tag4").click(function() {
        $("html, body").animate({scrollTop: $("#boxFour").offset().top}, 800, "easeOutBack");
    });
    
});

