//打开封面
function downpage(){
	 $('#section1').animate({ top:'-1000px'},1000);
	 $('#section2').css('display','block');
}
function uppage(){
	 $('#section1').animate({ top:'0px'},1000,function(){
	 $('#section2').fadeOut();})//回调函数
}
$(document).ready(function(){
	//加载特效
    $('#main_top').animate({ opacity: '1',paddingTop:'10%'},1000);
	/*****展开左边侧栏*******/
	$('#leftbtn').click(function(){
		$('#cover').fadeIn();
		$('#leftbar').css('left',0);
		$('#leftbar').css('opacity',1);
		$('#header').css('top',-200);
	
	})
	/*****收起左边侧栏*******/
	$('#leftnone').click(function(){
		$('#cover').fadeOut();
		$('#leftbar').css('left',-350);
		$('#leftbar').css('opacity',0);
		$('#header').css('top',0);
	
	})
	/*****展开右边边侧栏*******/
	$('#rightbtn').click(function(){
		$('#cover').fadeIn();
		$('#rightbar').css('right',0);
		$('#header').css('top',-200);
	
	})
	/*****收起右边侧栏*******/
	$('#rightnone').click(function(){
		$('#cover').fadeOut();
		$('#rightbar').css('right',-300);
		$('#header').css('top',0);
	
	})
	$(window).resize(function(){
        if($(window).width()>900){
		   $('#leftbar').css('left',0);
		   $('#leftbar').css('opacity',1);
		 }else if($(window).width()<900){
		   $('#leftbar').css('left',-350);
		   $('#leftbar').css('opacity',0);
		}
    })
	/*****返回顶部*******/
	$('#backbtn').click(function(){
		$('html,body').animate({
		scrollTop:0
		},800)
	})
	$(window).scroll(function(){
		if($(window).scrollTop()>$(window).height()){
		  $('#backbtn').fadeIn();
		 }else if($(window).scrollTop()<$(window).height()){
		   $('#backbtn').fadeOut();
		}
	})
	$(window).trigger('scroll');
	//文章页点赞
	$('#lovebtn').click(function(){
		$(this).toggleClass("loved");
	})
	//输入框拉长
	$('textarea').focus(function(){
	    $(this).animate({
		minHeight:160
		},800)
	})
	$('textarea').blur(function(){
	    $(this).animate({
		minHeight:80
		},800)
	})
});








