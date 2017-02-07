function modifyPostMarginOppSide(minOppositePostsDistance){
    var leftPosts = $("#left .post");
    var rightPosts = $("#right .post")
    var currentLeftPost;
    var currentRightPost;
    var currentOpossitePostsDistance;
    var smallerPostContainer = leftPosts.length >=rightPosts.length? rightPosts:leftPosts;
    smallerPostContainer.each(function(index, element){
        currentLeftPost = leftPosts[index];
        currentRightPost = rightPosts[index];
        currentOpossitePostsDistance = Math.abs(currentLeftPost.offsetTop - currentRightPost.offsetTop);
        if(currentOpossitePostsDistance < minOppositePostsDistance){
            $(currentRightPost).css("margin-top", minOppositePostsDistance - currentOpossitePostsDistance);
        }
    });
}
