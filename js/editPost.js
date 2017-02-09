$("#newPostEditor").click(function(){
    addEditPost(createEditPost(selecPostColor()), $(".left").first());
});
function addEditPost(post, local){
    $("<div>kkkk</div>",{
        "class":"post"
    });
}
function createEditPost(color){

}
function selecPostColor(){
    return "green";
}