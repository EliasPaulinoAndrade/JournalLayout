$(document).ready(function(){
    isMiddleSize()? movePostsFromPile($(window).width(), true, "#center") : movePostsFromPile($(window).width(), false, "#center");
    setMarginOfYears($(".year"),60);
});
window.onresize = function(){
    if(isMiddleSize() && $("#center .middle").length==0)
        movePostsFromPile($(window).width(), true, "#center");
    if(!isMiddleSize() && $("#center .middle").length!=0)
        movePostsFromPile($(window).width(), false, "#center");
    setMarginOfYears($(".year"),60);
};
function isMiddleSize(){
    return $(window).width()<768 ? true : false;
}
function setMarginOfYears(years, minDistance){
    return years.each(function(index, year){
        setMargin(postSort(resetMargin($(year).find(".post"))), minDistance);
    });
}
function setMargin(posts, minDistance){
    return posts.each(function(index, post){
        if(posts.length <= index+1)
            return ;
        if(posts[index+1].offsetTop - post.offsetTop < minDistance){
            incPostMargin(posts[index+1], minDistance - (posts[index+1].offsetTop - post.offsetTop));
            posts = postSort(posts);
        }
   });
}
function incPostMargin(post, size){
    return $(post).css("margin-top", function(index, value){
        return parseInt(value) + size; 
    });
}
function postSort(posts){
    return  posts.sort(function(post, otherPost){
       return post.offsetTop > otherPost.offsetTop ? 1 : -1;
   });
}
function resetMargin(posts){
    return posts.each(function(index, post){
        $(post).css("margin-top", 0);
    });
}
