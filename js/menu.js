
$("#menu > ul >li:last-child").click(function toggleClick(){
    var items = $("#menu > ul > li");
    if(toggleClick.showed =='undefined')
        toggleClick.showed = false;
    if(toggleClick.showed==true){
        resetLiBottom(items, 200);
        setToggleToOpen($(this), "img/open.png");
        toggleClick.showed=false;
    }
    else{
        setLiBottom(items, items.first().height(), 3, 200);
        setToggleToClose($(this), "img/close.png");
        toggleClick.showed=true;
    }
});
function setToggleToClose(toggle, closeImg){
    $(toggle).find("> img").css("content", "url("+closeImg+")");
    return toggle;
}
function setToggleToOpen(toggle, openImg){
    $(toggle).find("> img").css("content", "url("+openImg+")");
    return toggle;
}
function setLiBottom(items, offset, margin, animTime){
    return items.each(function(index, item){
        $(item).animate({
            bottom: index*(offset+margin).toString()
        }, animTime,function(){});
    });
}
function resetLiBottom(items, animTime){
    return items.each(function(index, item){
        $(item).animate({
            bottom: 0
        }, animTime, function(){});
    });
}