$("#newPostEditor").click(function(){
    if($(".postEditor").length==0){
        setOptListeners(addEditPost(createEditPost(selecPostColor()), $(".left").first()));
        setMarginOfYears($(".year"),60);
    }
});
function addEditPost(post, local){
    local.prepend(post);
    return post;
}
function createEditPost(color){
    var postTop = document.createElement("div");
    var h1 = document.createElement("h1");
    h1.setAttribute("contenteditable","true");
    postTop.className = "postTop "+ color;
    postTop.appendChild(createPostDay());
    postTop.appendChild(h1);

    var postBody = document.createElement("div");
    var postContent = document.createElement("div");
    postContent.className = "postContent";
    postContent.setAttribute("contenteditable","true");
    postBody.className = "postBody";
    postBody.appendChild(postContent);

    var postEditorOptions = document.createElement("div");
    postEditorOptions.className = "postEditorOptions";
    postEditorOptions.appendChild(createPostEditorOptionsChilds());

    var post = document.createElement("div");
    post.className = "post postEditor";
    post.appendChild(postTop);
    post.appendChild(postBody);
    post.appendChild(postEditorOptions);
    return post;
}
function createPostEditorOptionsChilds(){
    var ul= document.createElement("ul");
    ul.appendChild(cretatePostEditorOption("img/send.png", "Postar", "postar"));
    ul.appendChild(cretatePostEditorOption("img/cancel.png", "Cancelar", "cancelar"));
    return ul;
}
function cretatePostEditorOption(imgUrl, text, classLi){
    var li = document.createElement("li");
    var img = document.createElement("img");
    var span = document.createElement("span");
    span.innerHTML = text;
    li.setAttribute("class", classLi);
    img.setAttribute("src", imgUrl);
    li.appendChild(img);
    li.appendChild(span);
    return li;
}
function createPostDay(){
    var curDate = new Date();
    var curDay = curDate.getDay();
    var curMonth = curDate.getMonth();
    var postDay = document.createElement("div");
    var spanText =  curDay>9?curDay: "0"+curDay;
    spanText+="/";
    spanText+=curMonth>9? curMonth:"0"+curMonth;
    var day = document.createElement("div");
    day.className="day";
    postDay.className = "postDay";
    postDay.appendChild(day);
    postDay.appendChild(document.createElement("span"));
    $(postDay).find(">span").html(spanText);
    return postDay;
}
function selecPostColor(){
    return "green";
}