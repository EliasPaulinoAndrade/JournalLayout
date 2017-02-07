function modifyPostMarginSomeSide(minSomeSidePostsDistance){
    setMarginAnySide(minSomeSidePostsDistance, $("#left .post"), $("#right .post"));
    setMarginAnySide(minSomeSidePostsDistance, $("#right .post"), $("#left .post"));
}
function setMarginAnySide(minSomeSidePostsDistance, itPosts, opPosts){
    var itSize = itPosts.length;
    var opSize = opPosts.length;
    var currentPost , nextPost, currentPostBottom, nextPostTop, nextOppossitePost, curSomeSidePostsDistance;
    var hasOpposite;
    itPosts.each(function(index, element){
        hasOpposite=false;
        if(index + 1 >= itSize)
            return ;
        if(opSize > index + 1){
            hasOpposite = true;
            nextOppossitePost = opPosts[index + 1];
        }
        currentPost = itPosts[index];
        nextPost = itPosts[index+1];
        currentPostBottom = currentPost.offsetTop + $(currentPost).height();
        nextPostTop = nextPost.offsetTop;
        curSomeSidePostsDistance =  nextPostTop - currentPostBottom;
        if(curSomeSidePostsDistance < minSomeSidePostsDistance){
            $(nextPost).css("margin-top", function(index, value){
                return parseInt(value) + minSomeSidePostsDistance - curSomeSidePostsDistance;
            });
            if(hasOpposite)
                $(nextOppossitePost).css("margin-top", function(index, value){
                    return parseInt(value) + minSomeSidePostsDistance - curSomeSidePostsDistance;
                });   
        }
    });
}
