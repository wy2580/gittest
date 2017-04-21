$("#back").on("tap",function(){
    window.location.href=history.go(-1);
})
$(".gz").on("tap",function(){   
    var htm = $(this).html();
    if (/[已]/.test(htm)) {
        $(this).html("&#xe610;<span>关注</span>").css({"color":"#fe2d63","border-color":"#fe2d63"})
    }else{
        $(this).text("已关注").css({"color":"#ccc","border-color":"#ccc"});
    }
})