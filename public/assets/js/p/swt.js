//商务通 CSS 开始
document.writeln("<style type=\"text/css\">");
document.writeln("body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, ");
document.writeln("input, textarea, th, td, img {");
document.writeln("	border:medium none;");
document.writeln("	margin: 0;");
document.writeln("	padding: 0;");
document.writeln("}");
document.writeln("#LRdiv0,#LRdiv1,#LRdiv2,#LRfloater0,#divM,#LR_Flash,#BDBridgeWrap{ display: none;}");
document.writeln("#divM,#divL,#divR,#divM_suoxiao{position: fixed;z-index: 214748364;}");
document.writeln("#divL,#divR{top:150px;_position: absolute;_top:expression(offsetParent.scrollTop+200);}");
document.writeln("#divL{ left: 5px;width:140px; height:140px;}");
document.writeln("#divR {width:50px;height:280px;right:0;}");
document.writeln("	#divR a {display:block;width:50px;height:55px;float:left;margin-bottom:1px;}");
document.writeln("	.divRzx { background:url(/images/youce_icon.png) no-repeat -39px 0;position:relative;}");
document.writeln("	.divRzx:hover { background-position:-129px 0;}");

document.writeln("	.divRzx2 { background:url(/img/jindu1.png) no-repeat;position:relative;}");
document.writeln("	.divRzx2:hover { background:url(/img/jindu2.png) no-repeat;}");

document.writeln("	#divRsjs { background-color: #FF0000;border-radius: 45%;color: #FFFFFF;display: block;font-family: arial;font-size: 12px;");
document.writeln("font-style: normal;height: 16px;line-height: 16px;position: absolute;right: 4px;text-align: center;top: 4px;width: 20px;");
document.writeln("}");
document.writeln("	.divRtell {width:50px;height:55px;position:relative;float:left;margin-bottom:1px;}");
document.writeln("	.divRtell_inner {width:252px;height:55px;position:absolute;left:0px;top:0;z-index:10;}");
document.writeln("	.divRtell a{ background:url(/images/youce_icon.png) no-repeat -39px -56px;float:left;margin-bottom:0;}");
document.writeln("	.divRtell a:hover,.divRtell a.active { background-position:-129px -56px;}");

document.writeln("	.divRtell1 {width:50px;height:55px;position:relative;float:left;margin-bottom:1px;}");
document.writeln("	.divRtell_inner1 {width:252px;height:155px;position:absolute;left:0px;top:0;z-index:10;}");
document.writeln("	.divRtell1 a{ background:url(/images/youce_icon.png) no-repeat -39px -56px;float:left;margin-bottom:0;}");
document.writeln("	.divRtell1 a:hover,.divRtell a.active { background-position:-129px -56px;}");

document.writeln("	.divRqq { background:url(/images/youce_icon.png) no-repeat -39px -112px;}");
document.writeln("	.divRqq:hover { background-position:-129px -112px;}");
document.writeln("	.divRaddre { background:url(/images/youce_icon.png) no-repeat -39px -168px;}");
document.writeln("	.divRaddre:hover { background-position:-129px -168px;}");
document.writeln("	.backto_top { background:url(/images/youce_icon.png) no-repeat -39px -224px;cursor:pointer;}");
document.writeln("	.backto_top:hover { background-position:-129px -224px;}");
document.writeln("	.tell_form {width:142px;height:55px;line-height:55px;font-size:16px;color:#fff;font-weight:bold;background-color:#1ea1da;float:left;}");

document.writeln("	#sub_btn {background:url(/images/youce_icon.png) no-repeat -116px -337px;}");
document.writeln("	#sub_btn:hover {background:url(/images/youce_icon.png) no-repeat -39px -337px;}");
document.writeln("#divM {width: 466px;height: 245px;background:url(/images/tc.jpg) no-repeat; right: 50%;bottom: 50%;margin-right: -233px;margin-bottom: -115px;_position: absolute;_bottom: expression(offsetParent.scrollTop+242);box-shadow: 0 0 35px #000;-webkit-box-shadow: 0 0 35px #000;-moz-box-shadow: 0 0 35px #000;}");
document.writeln("#divM_suoxiao{width:219px; height:130px;right:-232px;bottom:-186px;_position: absolute;_bottom: expression(offsetParent.scrollTop+242);overflow:hidden;background:url(/images/dwzx.png) -1px 0 no-repeat;opacity:0}");
document.writeln("#divM_suoxiao:hover,#divM_suoxiao.divM_suoxiaobg2{background:url(/images/dwzx.png) -287px 0 no-repeat}");
document.writeln("#divM_suoxiao a{position:absolute;background:none}");
document.writeln("#divM_suoxiao a:hover{background:none}");
document.writeln("#divM_suoxiao #divM_suoxiao_a{width:219px; height:131px;z-index: 1;}");
document.writeln("#divM_suoxiao #divM_suoxiao_b{width:24px; height:24px;top: auto;right:11px; bottom:0px;z-index: 2;}");
document.writeln("#divM a{position:absolute;display: block; width:200px; height:40px;top:150px;}");
document.writeln("#divM #divMagb{ right:4px;top:4px; width:20px; height:20px}");
document.writeln("#divM #divMa1{left:25px}");
document.writeln("#divM #divMa2{left:240px}");
document.writeln("#divM #divMagb:hover{background:none}");
document.writeln("#divM #divMa1:hover{background-position:-227px -255px}");
document.writeln("#divM #divMa2:hover{background-position:-331px -255px}");
document.writeln("</style>");
//商务通 CSS 结束

/************************右侧***********************/
/*返回顶部*/
function pageScroll(){
    //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    window.scrollBy(0,-100);
    //延时递归调用，模拟滚动向上效果速度
    scrolldelay = setTimeout('pageScroll()',10);
	//获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if(sTop==0) clearTimeout(scrolldelay);
}


/*悬浮*/
document.writeln("<div id=\"divR\">");
document.writeln("<a title=\"进度查询\" class=\"divRzx2\" href=\"#\" onclick=\"show_login()\"></a>");
document.writeln("    </div>");




document.writeln("<div class=\'login_fixed\' style=\'display: none\'>");
document.writeln("        <div class=\' tab\' style=\'border-bottom: 2px solid #e2383a\'>");
document.writeln("            <ul class=\'menu22\'>");
document.writeln("                <li class=\'active\'>员工登录</li>");
document.writeln("                <li>代理记账进度查询</li>");
document.writeln("            </ul>");
document.writeln("            <div class='guanbi2' onclick=\"show_login()\"></div>");
document.writeln("        </div>");
document.writeln("        <div class=\'loginqh\'>");
document.writeln("            <form class=\'login_form\' action=\'\'>");
document.writeln("            <div class=\'login_row\'>");
document.writeln("                <span>账号:</span>");
document.writeln("                <input type=\'text\' id=\'txt_uid\' placeholder=\'手机号/登录帐号\' autocomplete=\'off\' />");
document.writeln("            </div>");
document.writeln("            <div class=\'login_row\'>");
document.writeln("                <span>密码:</span>");
document.writeln("                <input type=\'password\' id=\'txt_pwd\' placeholder=\'请输入密码\' autocomplete=\'off\' />");
document.writeln("            </div>");
document.writeln("            <div class=\'login_row login_action_center\'>");
document.writeln("                <a href=\'javascript:void(0);\' id=\'btn_login_yh\' class=\'login_action\'>登录</a>");
document.writeln("            </div>");
document.writeln("            </form>");
document.writeln("        </div>");
document.writeln("        <div class=\'loginqh\' style=\'display: none;\'>");
document.writeln("            <form class=\'login_form\' action=\'\'>");
document.writeln("            <div class=\'login_row\'>");
document.writeln("                <span>手机号:</span>");
document.writeln("                <input type=\'text\' id=\'phone\' placeholder=\'手机号\' autocomplete=\'off\' />");
document.writeln("            </div>");
document.writeln("            <div class=\'login_row\'>");
document.writeln("                <span>密码:</span>");
document.writeln("                <input type=\'password\' id=\'pwd\' placeholder=\'请输入密码\' autocomplete=\'off\' />");
document.writeln("            </div>");
document.writeln("            <div class=\'login_row login_action_center\'>");
document.writeln("                <a href=\'#\' id=\'btn_login_kh\' class=\'login_action\'>登录</a>");
document.writeln("            </div>");
document.writeln("            </form>");
document.writeln("        </div>");
document.writeln("    </div>");



    function show_login() {
        $(".login_fixed").toggle();
        $(".login_fixed").animate({
            top: "50%"
        });
    }
    function clearinput() {
        $("#txt_uid").val("");
        $("#txt_pwd").val("");
        $("#phone").val("");
        $("#pwd").val("");
    }
    $(function () {
        //tab切换
        $('.tab ul.menu22 li').click(function () {
            clearinput();
            //获得当前被点击的元素索引值
            var Index = $(this).index();
            //给菜单添加选择样式
            $(this).addClass('active').siblings().removeClass('active');
            //显示对应的div
            $('.loginqh').hide();
            $('.loginqh').eq(Index).show();

            $('.imgcode').eq(Index).click();
            $(".login_fixed").css("height", "250px");


        });
        //企业登录
        $("#btn_login_yh").click(function () {
            var qyh = 'G0038'; //客户企业号
            var uid = $.trim($('#txt_uid').val());
            if (uid == '') {
                alert('请输入账号');
                $('#txt_uid').addClass('error_input');
                return;
            }
            else {
                $('#txt_uid').removeClass('error_input');
            }
            var pwd = $.trim($('#txt_pwd').val());
            if (pwd == '') {
                alert('请输入密码');
                $('#txt_pwd').addClass('error_input');
                return;
            }
            else {
                $('#txt_pwd').removeClass('error_input');
            }

            window.open("http://168.yundaizhang.com/entrance.html?action=serviceqy&qyh=" + qyh + "&uid=" + uid + "&pwd=" + pwd + "&url=" + window.location.href);
            show_login();
            clearinput();
        });
        //客户登录
        //客户登录
        $("#btn_login_kh").click(function () {
            var phone = $.trim($('#phone').val());
            if (phone == '') {
                alert('请输入手机号');
                $('#phone').addClass('error_input');
                return;
            }
            else {
                $('#phone').removeClass('error_input');
            }
            var pwd = $.trim($('#pwd').val());
            if (pwd == '') {
                alert('请输入密码');
                $('#pwd').addClass('error_input');
                return;
            }
            else {
                $('#pwd').removeClass('error_input');
            }
            window.open("http://168.yundaizhang.com/entrance.html?action=servicekh&accounts=" + phone + "&password=" + pwd + "&url=" + window.location.href);
            show_login();
            clearinput();
        });

        $('.guanbi1').click(function () {
            $('.login_fixed').css('display','none');
        });
    });




document.writeln("<div id=\"divRsjs2\" style=\"display:none\"></div>"); 

