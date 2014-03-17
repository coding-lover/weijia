$(function(){
	var menu = $("div.menu");  //��ȡ�˵�����
	var menu_li = $("#right_ul>.li_tip");
	var float_tip = $("li.left_tip")
	var x = 10;
	var y = 20;
	var f_x = -120;  //�ұ߸�����ʾ��
	var f_y = -25;
	var h_flag = 0;
	//var body = $("body");  //�����ĵ�����
	var tip_content = ["΢�˵� - �Զ���˵���ɵ�ϻ����ơ�", " ΢���� - ���߽�վ����˼� ","΢ͳ�� - ʵʱͳ���û���ע���"," ΢��Ա- ����Я��������ʧ��"," ΢�̳�- �ƶ��˵��Ա���С�Ǵ��� "," ΢�-����ķ�˿������������"];
	var scroll = [0,500, 1082, 1631, 2164, 2721, 3278, 3742, 4353, 4845];  //�������˵�ʱ����������������
	var scroll_t = [320,817,1344,1848,2359,2871,3375,3820,4845];   //�ƶ�������ʱ���л��ұ߲˵������Ĳ���

	
	$(".free_tip").mouseover(function(){
		//alert(document);
		//alert(doc.scrollTop());
		//alert($("body").scrollTop());
	});
	
	
	menu.hover(function(e){
		//��������ʾ״̬
		//$(this).css({'z-index': '1000'});
		//$("#block").show();
		$(this).css("opacity","1").siblings().css("opacity","0.3");
		$(this).parents("div.divRow").siblings().find("div.menu").css("opacity","0.3");
		
		this.mytitle = 'hhahahahh';  //��ʾ����
		this.title = '';
		//var tooltip = "<div id='tooltip'>" + this.mytitle + "</div>";
		//$("body").append(tooltip);
		//$("#tooltip").css({"top" : (e.pageY + y) + "px", "left" : (e.pageX + x) + "px", "position":'absolute',"background":"gray"}).show("fast");
		
	},function(){
		//����Ƴ���ʾ״̬
		menu.css("opacity","1");
		
		//this.title = this.mytitle;
		//$("#tooltip").remove();  //�Ƴ�
		
	}).mousemove(function(e){   //��ǩ������ƶ�
		//$("#tooltip").css({"top" : (e.pageY + y) + "px", "left" : (e.pageX + x) + "px", "position":'absolute'});
	});
	
	//��Ӳ˵��ĵ���¼�
	$("#f_caidan").click(function(){
		h_flag = 1;
		$("body,html").animate({"scrollTop":scroll[h_flag]},500);
		
	});
	
	$("#f_guanwang").click(function(){
		h_flag = 2;
		$("body,html").animate({"scrollTop":scroll[h_flag]},500);
	});
	
	$("#f_huiyuan").click(function(){
		h_flag = 3;
		$("body,html").animate({"scrollTop":scroll[h_flag]},500);
	});
	
	$("#f_huodong").click(function(){
		h_flag = 4;
		$("body,html").animate({"scrollTop":scroll[h_flag]},500);
	});
	
	$("#f_shangcheng").click(function(){
		h_flag = 5;
		$("body,html").animate({"scrollTop":scroll[h_flag]},500);
	});
	
	$("#f_tongji").click(function(){
		h_flag = 6;
		$("body,html").animate({"scrollTop":scroll[h_flag]},500);
	});
	
	$("#f_anli").click(function(){
		h_flag = 7;
		$("body,html").animate({"scrollTop":scroll[h_flag]},500);
	});
	
	$("#f_aboutUs").click(function(){
		h_flag = 8;
		$("body,html").animate({"scrollTop":scroll[h_flag]},500);
	});
	
	$("#goBack").click(function(){
		$("body,html").animate({"scrollTop":0},500);
	});
	$("#goBack").hover(function(){
		//alert($(document).scrollTop());
	}, function(){});
	
	$("li.li_tip").click(function(){
		h_flag = $(this).index();
		if(h_flag == 0){
			$("body,html").animate({"scrollTop":0},500);
		}else{
			$("body,html").animate({"scrollTop":scroll[h_flag]},500);
		}
		
		//$("div.body_menu").eq($(this).index()).show().siblings().not($("#nav,#header")).hide();
	});
	
	$("li.li_tip").hover(function(e){
		var index = $(this).index();
		//alert(index);
		float_tip.eq(index).show();
		menu_li.eq(index).addClass("curr_bk");
		
	
	
	},function(){
		var index = $(this).index();
		float_tip.eq($(this).index()).hide();
		if(index != h_flag){
			menu_li.eq(index).removeClass("curr_bk");
		}
		
	});
	
	$("li.thelast").hover(function(){
		//alert($("li.thefirst").is(":visible"));
		
		var index = $(this).index();
		float_tip.eq(index).show();
		
		//alert($(document).scrollTop());
	},function(){
		var index = $(this).index();
		//alert(index);
		float_tip.eq(index).hide();
	});
	
	
	//�����¼�
	$(window).scroll(function(){
		var scroll_top = $(document).scrollTop();
		/*if(scroll_top >= scroll_t[0]){
			$("#menu_right").show();
			$("#right_ul>li.li_tip").show();
			
		}else{
			//$("#menu_right").hide();
			//$("#right_ul>li.li_tip").hide();
			
		}*/
		if(scroll_top < 309){
			//$("#right_ul>li.li_tip").not("li.thelast").hide();
			menu_li.eq(0).addClass("curr_bk").siblings().removeClass("curr_bk");
			h_flag = 0;
			
		}
		for(var i=0; i < scroll.length; i++){
			if(scroll_t[i] <= scroll_top && scroll_t[i+1] >= scroll_top){
				h_flag = i+1;
				menu_li.eq(i+1).addClass("curr_bk").siblings().removeClass("curr_bk");
				//float_tip.eq(i).show().siblings().hide();
				break;
			}
		}
		if(scroll_top >= 3788){
			$("li.thelast").addClass("curr_bk").siblings().removeClass("curr_bk");
			
		}
	});
});



















