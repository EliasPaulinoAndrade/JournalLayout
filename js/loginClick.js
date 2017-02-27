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