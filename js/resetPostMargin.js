function resetMargin(){
    var leftPosts = $("#left .post");
    var rightPosts = $("#right .post")
    leftPosts.each(function(index, element){
       $(element).css("margin-top", 0);    
    });
    rightPosts.each(function(index, element){
       $(element).css("margin-top", 0);    
    });
}
