$.ajax({
    url:'http://139.199.192.48:9090/api/getsitenav',
    type:'get',
    success:function(info){
        var html=template('tpl_nav',info);
        $('nav ul').html(html);
    }
})
$('#getTop').on('click',function(){
    $('html,body').animate({scrollTop: '0px'}, 800);
})