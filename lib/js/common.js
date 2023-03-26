
document.addEventListener("DOMContentLoaded", function(){
    const left_wrap_event = document.querySelector('.left_wrap');
    const left_menu_event = document.querySelectorAll('.left_wrap_list > li');
    const left_2dep_event = document.querySelectorAll('.left_2dep_wrap > .left_2dep_inner');
    const contains_inner = document.querySelector('.content_inner');
    const toggle = document.querySelector('.toggle');
    const toggle_element = document.querySelector('.menu_options');
    function on(element) {
        element.classList.add('active');
    }

    function off(element) {
        element.classList.remove('active');
    }

    //left_menu event
    left_menu_event.forEach(function(element, index){
        element.addEventListener("click", function(){
            let attrId = element.dataset.d_index;
            const siblings = Array.from(element.parentNode.children).filter((child) => child !== element);
            const siblings2 = Array.from(left_2dep_event[attrId].parentNode.children).filter((child) => child !== left_2dep_event);

            on(element);
            siblings.forEach((sibling) => {
            if (sibling.classList.contains('active')) {
                off(sibling);
            }
            });

            if(attrId){
                left_2dep_event.forEach((siblings2) =>{
                    if(siblings2.classList.contains('active')){
                    off(siblings2);
                    }
                });
            }
            left_2dep_event[attrId].classList.add('active');

            left_wrap_event.classList.add('active');
        });
    });

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

    //toggle_event
    toggle.addEventListener("click",function(){
        
        if(toggle_element.classList.contains('active')){
            toggle_element.style.maxHeight = 0+'px';
        }else{
            toggle_element.style.maxHeight = toggle_element.scrollHeight+'px';
        }

        toggle_element.classList.toggle('active');
    });

    //inner 누르면 모든 active들이 사라짐
    contains_inner.addEventListener("click",function(){
        let all_remove = document.getElementsByClassName("active");
        for (let i = 0; i < all_remove.length; i++) {
            all_remove[i].classList.remove('active');
        }
    });
    
});

 

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

//login_page
function login_btn(){
    var admin_id = 'admin';
    var admin_pw = '1234';
    var id = document.getElementById('id').value;
    var pw = document.getElementById('password').value;

    if( id == '' || pw == '' ){
        alert('아이디 혹은 패스워드를 입력해주세요.')
    }else if(admin_id == id && admin_pw == pw){
        location.replace('sub_page/main.html');
    }else{
        alert('아이디 혹은 패스워드가 다릅니다.');
    }
}

function modal(v,e){
    let modal_info = e;
    $('.modal_wrap').addClass('on');
    $('.modal_inner').addClass(`${modal_info}`);
    $('body').css('overflow','hidden');
    resizeModal();
        switch (e){
        case 'photo' :
            
        break;

        case 'video' :

        break;

        case 'setting' :
            
        break;

        case 'close' :
            $('.modal_wrap').removeClass('on');
            $('body').css('overflow','auto');
        break;
    }
}
function resizeModal() {
    const modal = document.querySelector('.modal_wrap');
    const modalInner = modal.querySelector('.modal_inner');
    const modalImg = modal.querySelector('.modal_media_body img');
    const modalComment = modal.querySelector('.modal_media_comment');
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const maxHeight = windowHeight - 120; // 120 is the sum of header and footer height
    const maxWidth = windowWidth - 160;

    // Reset the image width and height to its original values
    modalImg.style.width = '';
    modalImg.style.height = '';

    let inner_width = modalInner.offsetWidth;
    let img_width = inner_width - modalComment.offsetWidth;
    modalImg.style.width = `${img_width}px`

    // Check if the image height is greater than maxHeight
    if (modalImg.height > maxHeight) {
        modalImg.style.height = maxHeight + 'px';
        modalImg.style.width = 'auto';
    }
    // Check if the image width is greater than maxWidth
    if (modalImg.width > maxWidth) {
        modalImg.style.width = maxWidth + 'px';
        modalImg.style.height = 'auto';
    }
    
    // Adjust the modal body height based on the image height
    modalInner.style.width = '100%'
    modalInner.style.height = `${modalImg.height}px`;

    //한번만 실행되는함수.
    function setModalMaxWidth() {
        const innermaxWidth = modalImg.width + modalComment.offsetWidth;
        modalInner.style.maxWidth = `${innermaxWidth}px`;

        
    }
    if (!modalInner.style.maxWidth) {
        setModalMaxWidth();
    }
}

window.addEventListener('resize', resizeModal);

function icon_click(e, i){
    
    let parent = $(e).parents('li').index()+1;
    let select = $(e).attr('class');

    console.log(select);

    $(e).toggleClass('on');
}