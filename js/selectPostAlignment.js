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
function uploadDestiny(){
    if($("#center .middle").length!=0){
        console.log("pequeno");
        updatePostsFromDestiny($("#postPile"), $("#center"), true);
    }
    if($("#center .middle").length==0){
        console.log("grande");
        updatePostsFromDestiny($("#postPile"), $("#center"), false);
    }
}
function updatePostsFromDestiny(pile, destiny, which){//function intended to insert new posts or years when the user scrool down the screen
    var destinyYears = $(destiny).find(".year");
    var pileYears = $(pile).find(".year");
    var lastUsedYear =  pileYears.get(destinyYears.length - 1);//the last year moved from pile
    var lastMovedYear = destinyYears.last()//the last year moved to destiny
    
    if($(lastUsedYear).find(".post").length > lastMovedYear.find(".post").length){//test if some new post was added on the older last year of pile
        console.log("yearvariance");
        adjustYearsVariance(lastMovedYear, lastUsedYear, which);
    }
    if(pileYears.length > destinyYears.length){ //test if a new year was added to end of posts pile 
        console.log("destivariance");
        adjustPileToDestinyVariance(destiny, pile, which);  
    } 
}
function adjustYearsVariance(olderLastYear, newLastYear, which){
    which? adjustYearsVarianceMiddle(olderLastYear, newLastYear) : adjustYearsVarianceRightLeft(olderLastYear, newLastYear) ;
}
function adjustPileToDestinyVariance(destiny,pile, which){
    which? adjustPileToDestinyVarianceMiddle(destiny, pile) : adjustPileToDestinyVarianceRightLeft(destiny, pile);
}
function adjustYearsVarianceRightLeft(olderLastYear, newLastYear){
    var lastPosts = $(olderLastYear).find(".post");
    var newPosts = $(newLastYear).find(".post");
    newPosts.slice(lastPosts.length).clone(true, true).each(function(index, post){
        console.log($(olderLastYear.find(".left")));
        insertOnLeftOrRight(olderLastYear.find(".left"), olderLastYear.find(".right")).append(post);
    });
}
function adjustPileToDestinyVarianceRightLeft(destiny, pile){
    var lastYears = destiny.find(".year");
    movePostsToLeftRight(pile.slice(lastYears.length), destiny);
}
function adjustYearsVarianceMiddle(olderLastYear, newLastYear){
    var lastPosts = olderLastYear.find(".post");
    var newPosts = newLastYear.find(".post");
    newPosts.slice(lastPosts.length).clone(true, true).each(function(index, post){
        lastPosts.find(".middle").append(post);
    });
}
function adjustPileToDestinyVarianceMiddle(destiny, pile){
    var lastYears = destiny.find(".year");
    movePostsToMiddle(pile.slice(lastYears.length), destiny);
}
function addDivisor(destiny){
    $(destiny).append("<div class='divisor'></div>");
}
function addMoreButton(destiny){
    var button = $("<div id='morePosts'>More</div>").click(moreClick);
    $(destiny).append(button);
}
function resetDestiny(destiny){
    $(destiny).empty();
}
function setDestiny(width, which, destiny){
    addDivisor(destiny);
    which? movePostsToMiddle($("#postPile"), destiny) : movePostsToLeftRight($("#postPile"), destiny);
    addMoreButton(destiny);
}
function insertOnLeftOrRight(left, right){
    return $(left).height() > $(right).height() ? right:left;
}
