function movePostsFromPile(width, limite, destiny){
    resetDestiny(destiny);
    if(width<=limite)
        movePostsToMiddle($("#postPile"), destiny);
    else
        movePostsToLeftRight($("#postPile"), destiny);
}
function movePostsToMiddle(pile, destiny){
    addDivisor(destiny);
    $(pile).children().clone(true, true).each(function(index, year){
            $(year).find(".postContainer").addClass('middle').removeClass('postContainer');
    }).appendTo(destiny);
}
function movePostsToLeftRight(pile, destiny){
    addDivisor(destiny);
    $(pile).children().clone(true, true).each(function(index, year){
        $(year).append("<div class='left'></div>");
        $(year).append("<div class='right'></div>");
        $(year).find(".postContainer").first().find(".post").each(function(indexP, post){
            /*var left = $(year).find(".left");
            var right = $(year).find(".right");*/
            console.log($(post).height());
            if(indexP%2==0)
                $(year).find(".left").append(post);
            else
                $(year).find(".right").append(post);
            /*alert($(left).first().height()+" "+ $(right).first().height());
            if($(left).height() > $(right).height()){
                $(right).append(post);
            }
            else{
                $(left).append(post);
            }*/
        });
        $(year).find(".postContainer").remove();
    }).appendTo(destiny);
}
function addDivisor(destiny){
    $(destiny).append("<div class='divisor'></div>");
}
function resetDestiny(destiny){
    $(destiny).empty();
}