'use strict'

const state = {
    burger:true
}


function main() {
    handleScroll()
    handleHamburger()
}

function handleScroll(){ 
    $("nav").find("a").click(function(e) {
        e.preventDefault();
        var section = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section).offset().top-115
        });
    });

}

function handleHamburger() {
    $("i.fa-bars").click(function(e) {
        e.preventDefault();
        $("ul.menu").toggleClass("hidden-s");
    })
}




$(main);