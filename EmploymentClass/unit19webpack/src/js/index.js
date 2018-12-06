import '../css/reset.css';
import '../plug/css/swiper.min.css';
import '../webfont/iconfont.css';
import '../css/meituanIndex.css';

getData();
function getData(){
    var url = "http://localhost:8080/api/list.json";
    $.ajax({
        type:'GET',
        url:url,
        success:addDom,
        error:function(){
            console.log('error');
        }
    })
};
function addDom(data){
    console.log(data);
    var str = '';
    data.list.forEach(function(ele,index){
        str += '<li class="foodspic">\
        <a href="http://localhost:8080/meituan-detail.html?id='+ele.id +'" class="clearfix">\
            <img src="'+ ele.info.imgurl +'" alt="">\
            <dl><dt>'+ele.info.name +'</dt><dd>\
                    <p class="foodtitle">'+ele.info.des+'</p>\
                    <p class="price">\
                        <span><strong>'+ ele.info.price +'</strong><i>元</i></span>\
                        <span>'+ele.info.newUser+'</span>\
                        <span>'+ele.info.sale+'</span>\
                    </p>\
                </dd>\
            </dl>\
        </a>\
    </li>' 
    });
    $('.guess-foodlist .list').html(str);
}

$(window).on('scroll',function(){
    var top = $(window).scrollTop();
    if(top >= 500){
        $('#gotop').slideDown();
    }else {
        $('#gotop').slideUp();
    }
});
$('#gotop').click(function(){
    $('html,body').animate({
        scrollTop:0
    });
})