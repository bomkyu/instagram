
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

    let login_images = document.querySelectorAll('.login_wrap .img_area img');
    let cnt = 0
    setInterval(function(){
        if(cnt != 4){
            
            login_images.forEach(function(element, index){
                if(element.classList.contains('on')){
                    element.classList.remove('on');
                }
            });
            
            login_images[cnt].classList.add('on');

            cnt++
            
        }else{
            cnt = 0;
        }
    }, 3000);
});