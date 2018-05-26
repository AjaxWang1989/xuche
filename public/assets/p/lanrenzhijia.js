/* ������������֮�� www.lanrenzhijia.com ת����ע������ */
$(document).ready(function() {
//	/* Bootstraping variable */
//	menu				= $('.menu_se li');
//	submenuWrapper	= $('#submenu-wrapper'); 
//	submenu			= submenuWrapper.children('div.submenu');
//	firstSubmenu 	= submenu.eq(0);
//	/* When menu on mouse over and out */
//	menu.hover(
//		function() {
//			var moveTo = $(this).index() * 390;
//			showsubmenu(submenuWrapper);
//			firstSubmenu.stop().animate({'marginTop' : '-'+moveTo+'px' });
//			$('.menu_se li a').removeClass('selected');
//			//$(this).find('a').css({"color":"blue"});
//		},
//		function() { hidesubmenu(submenuWrapper); $(this).find('a').addClass('selected');
//		});
//	/* When sub menu wrapper on mouse over and out */
//	submenuWrapper.hover(
//		function() { showsubmenu($(this)); 	},
//		function() { hidesubmenu($(this));
//	});
//	/* Add focus on selected li */
//	submenu.children('li').hover(	function() { $(this).siblings().stop().animate({'opacity':'0.5'}); },
//					function() { $(this).siblings().stop().animate({'opacity':'1'});});
//	
//	/* Add focus on selected parent li */
//	submenu.hover(	function() { menu.eq($(this).index()).addClass('selected');  },
//					function() { menu.eq($(this).index()).removeClass('selected');});
//	/* Function to show sub menu */
//	function showsubmenu(item) {
//		if(!item.hasClass('show'))
//			item.addClass('show').stop().animate({'marginTop' : '0'});
//	}
//	/* Function to hide sub menu */
//	function hidesubmenu(item) {item.removeClass('show').stop().animate({'marginTop' : '-0em'});}


			$('.menu_se li a').hover(function(){
				$(this).siblings("i").show().parent().siblings().children('i').hide();
				$(this).addClass('selected').parent().siblings().children().removeClass('selected');
				$("#submenu-wrapper .submenu").eq($(".menu_se li a").index(this)).show().siblings('.submenu').hide();
			})
});