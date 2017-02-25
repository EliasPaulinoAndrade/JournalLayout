
$("#menu > ul >li:last-child").click(function toggleClick(){
    var items = $("#menu > ul > li");
    if(toggleClick.showed =='undefined')
        toggleClick.showed = false;
    if(toggleClick.showed==true){
        if($(window).height()<=200)
            resetLiRight(items, 200);
        else
            resetLiBottom(items, 200);
        setToggleToOpen($(this), "img/open.png");
        toggleClick.showed=false;
    }
    else{
        if($(window).height()<=200)
            setLiRight(items, items.first().height(), 3, 200);
        else
            setLiBottom(items, items.first().height(), 3, 200);
        setToggleToClose($(this), "img/close.png");
        toggleClick.showed=true;
    }
});
function setToggleToClose(toggle, closeImg){
    $(toggle).find("> img").attr("src", closeImg);
    return toggle;
}
function setToggleToOpen(toggle, openImg){
    $(toggle).find("> img").attr("src", openImg);
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
function setLiRight(items, offset, margin, animTime){
    return items.each(function(index, item){
        $(item).animate({
            right: index*(offset+margin).toString()
        }, animTime,function(){});
    });
}
function resetLiRight(items, animTime){
    return items.each(function(index, item){
        $(item).animate({
            right: 0
        }, animTime, function(){});
    });
}