$(function(){
	$("li.bIntro").click(function(){
		$("div.about_info").eq($(this).index()).show().siblings().hide();
	});
});