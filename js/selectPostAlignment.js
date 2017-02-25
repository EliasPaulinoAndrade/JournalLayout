function movePostsFromPile(width, which, destiny){
    resetDestiny(destiny);
    setDestiny(width, which, destiny);
}
function movePostsToMiddle(pile, destiny){
    $(pile).find(".year").clone(true, true).each(function(index, year){
            $(year).find(".postContainer").addClass('middle').removeClass('postContainer');
    }).appendTo(destiny);
}
function movePostsToLeftRight(pile, destiny){
    $(pile).find(".year").clone(true, true).appendTo(destiny).each(function(index, year){
        $(year).append("<div class='left'></div>");
        $(year).append("<div class='right'></div>");
        $(year).find(".post").each(function(indexP, post){
	    $(insertOnLeftOrRight($(year).find(".left"), $(year).find(".right"))).append(post);
        });
        $(year).find(".postContainer").remove();
    });
}
function addDivisor(destiny){
    $(destiny).append("<div class='divisor'></div>");
}
function resetDestiny(destiny){
    $(destiny).empty();
}
function setDestiny(width, which, destiny){
    addDivisor(destiny);
    which? movePostsToMiddle($("#postPile"), destiny) : movePostsToLeftRight($("#postPile"), destiny);
}
function insertOnLeftOrRight(left, right){
    return $(left).height() > $(right).height() ? right:left;
}
