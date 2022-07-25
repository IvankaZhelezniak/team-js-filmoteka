var scrolling;
$(window).scroll(function() {
    clearTimeout(scrolling);//clear any existing timeout
    $("#footer").hide(2000);
    scrolling = setTimeout(function(){$("#footer").show();},2000);//set the timeout to hide the footer (will be cancelled if scrolling continues)
})
