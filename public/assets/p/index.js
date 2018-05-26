$(function(){
	
	if($(window).width()<1000){
		for(var i=0;i<8;i++){
			$('.clients .box ul.items li').eq(i).css({'display':'block'});
		}
		
		var WH=$(window).height();
		$('.csp-list .spname').css({'height':WH+'px'});
		$('.csp-list .spname li').css({'height':WH/5+'px'});
		$('.csp-list .spname li a').css({'line-height':WH/5+'px'});
	}
	

		$('.menu_se li').eq(4).css({'margin-right':'0'});
	var HH=$('.newsdl').length;
	for(var i=0;i<HH;i++){
		$('.newsdl').eq(i).children('dd').eq(2).css({'margin-right':'0'});
		$('.newsdl').eq(i).children('dd').eq(5).css({'margin-right':'0'});
	}
	
	
	var HWin=$(window).height();
	var WIN=$(window).width();
	$('.telcall').css({'width':WIN+'px'});
	$('.telcall').css({'height':HWin+'px'});
	$('a.fincall').click(function(){
		$('.telcall').show();
	})
	$('a.close').click(function(){
		$('.telcall').hide();
	})
	
	
	$('a.fincall_207').click(function(){
		$('.telcall_207').show();
	})
	$('a.close').click(function(){
		$('.telcall_207').hide();
	})
	
	
			$('a.fincall_155').click(function(){
		$('.telcall_155').show();
	})
	$('a.close').click(function(){
		$('.telcall_155').hide();
	})
	
				$('a.fincall_156').click(function(){
		$('.telcall_156').show();
	})
	$('a.close').click(function(){
		$('.telcall_156').hide();
	})
	
					$('a.fincall_153').click(function(){
		$('.telcall_153').show();
	})
	$('a.close').click(function(){
		$('.telcall_153').hide();
	})
	
	
					$('a.fincall_152').click(function(){
		$('.telcall_152').show();
	})
	$('a.close').click(function(){
		$('.telcall_152').hide();
	})
	
	$('a.fincall_151').click(function(){
		$('.telcall_151').show();
	})
	$('a.close').click(function(){
		$('.telcall_151').hide();
	})
	
	$('a.fincall_250').click(function(){
		$('.telcall_250').show();
	})
	$('a.close').click(function(){
		$('.telcall_250').hide();
	})
	
	$('a.fincall_247').click(function(){
		$('.telcall_247').show();
	})
	$('a.close').click(function(){
		$('.telcall_247').hide();
	})
	
	$('a.fincall_248').click(function(){
		$('.telcall_248').show();
	})
	$('a.close').click(function(){
		$('.telcall_248').hide();
	})
	
	$('a.fincall_246').click(function(){
		$('.telcall_246').show();
	})
	$('a.close').click(function(){
		$('.telcall_246').hide();
	})
	
	$('a.fincall_249').click(function(){
		$('.telcall_249').show();
	})
	$('a.close').click(function(){
		$('.telcall_249').hide();
	})
	
	
	$('.fwtj li strong').click(function(){
		$(this).parent().toggleClass('online');
		$(this).siblings('dl').toggle()
	})
	
	/*input 宽度*/
	/*for(var i=0;i<$('.zc_det_leixing .message a').length;i++){
		$($('.zc_det_leixing  .message a')[i]).css('width',$('.zc_det_leixing  .message a')[i].value.length*15);
	}*/
	/*详情页*/
	$('.zc_det_leixing input.zc_inp').click(function () {
		$('.zc_det_leixing input.zc_inp').removeClass('active');
		$(this).addClass('active');
		var this_class =$(this).attr('id').split(" ")[0];
		$('.company_zhuce_img>img').css('display','none');
		$('.company_zhuce_img>img.'+this_class).css('display','block');
		$('.zc_det_price>p').css('display','none');
		$('.zc_det_price>p.'+this_class).css('display','block');
		$('.zc_det_tit>h3').css('display','none');
		$('.zc_det_tit>h3.'+this_class).css('display','block');

	})
	/*我们的产品*/
	$('.ourpro_box1 .ys_a').mouseover(function () {
		var classa = $(this).attr('class').split(' ')[0] + $(this).index();
		$('.ourpro_box1 .ys_a div').removeClass("active");
		$(this).find('div').addClass("active");

		$('.ourpro_box1 .ys_a span').css("display", "none")
		$(this).find('span').css("display", "block");
		$(".ourpro_box2 ." + classa + "").css("display", "block").siblings('div').css("display", "none")
	});
	$('.hidejt span').click(function(){
		$(this).toggleClass('spannext');
		$('.ourpro_box2').toggle();
	})
})



                            
