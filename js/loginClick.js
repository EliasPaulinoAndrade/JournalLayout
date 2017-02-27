$("#signin").click(function toggleLogin(){
    if(!$(this).hasClass("selectedTopArea")){
        $(this).addClass("selectedTopArea");
        $("#signup").removeClass("selectedTopArea");
        $("#loginArea").animate({left:'-100%'}, 20);
        
    }
});
$("#signup").click(function toggleLogin(){
    if(!$(this).hasClass("selectedTopArea")){
        $(this).addClass("selectedTopArea");
        $("#signin").removeClass("selectedTopArea");
        $("#loginArea").animate({left:'0'}, 20);
    }
});
$('.inputOption').click(function(){
    if(!$(this).hasClass("optionSelected")){
        $("#login").hasClass("femaleColor") ? $("#login").addClass("maleColor").removeClass("femaleColor") : $("#login").addClass("femaleColor").removeClass("maleColor");
        $(this).siblings().removeClass("optionSelected");
        $(this).addClass("optionSelected");
    }
});
$("#imgUpld").change(function(){
    var it = $("#userImageMark");
    if(this.files && this.files[0]){
        var reader = new FileReader();
        reader.readAsDataURL(this.files[0]);
        reader.onload = function(e){
            $("#userImage").css("background-image", "url('"+e.target.result+"')");
        }
    }
});
$("#userImage").mousedown(function(em){
    var parentY = $(this).offset().top;
    var initialPosY= em.pageY - parentY;
    var parentEndY = $(this).height();
    var initialImagePosY = parseInt($(this).css("background-position-y"));

    var parentX = $(this).offset().left;
    var initialPosX= em.pageX - parentX;
    var parentEndX = $(this).width();
    var initialImagePosX = parseInt($(this).css("background-position-x"));
    $(this).mousemove(function(e){
        var atualPosY = e.pageY - parentY;
        var imageOffSetY = atualPosY - initialPosY;
        var newImagePosY = initialImagePosY + imageOffSetY;
        //if( newImagePosX < 0 && newImagePosX > -parentEndX)
        $(this).css("background-position-y", newImagePosY);

        var atualPosX = e.pageX - parentX;
        var imageOffSetX = atualPosX - initialPosX; 
        var newImagePosX = initialImagePosX + imageOffSetX;
        //if( newImagePosX < 0 && newImagePosX > -parentEndX)
        $(this).css("background-position-x", newImagePosX);
    });
});
$("#userImage").mouseup(function(){
    $(this).unbind("mousemove");
});
$("#userImage").mouseout(function(){
    $(this).unbind("mousemove");
});