$('.filter button').click(function(){
    f = $(this).data("year");
    $(f).fadeToggle(SLOW);
})