
document.addEventListener("DOMContentLoaded", function(){
    //input style
    $(".input_st > input").on("focus",function(){
        $(this).parent().addClass("active");
    })
    $(".input_st > input").on("blur",function(){
        var va = this.value;
        if (va){
        } else {
            $(this).parent().removeClass("active");
        }
    })
});