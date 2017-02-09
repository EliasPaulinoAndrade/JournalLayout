function setOptListeners(post){
    $(post).find(".postEditorOptions .postar").click(function(){
        sendPostToServer();      
        $(post).remove(); 
        setMarginOfYears($(".year"),60);
    });
}
$(document).keydown(function(e) {
    setMarginOfYears($(".year"),60);
});

function sendPostToServer(){
    
}