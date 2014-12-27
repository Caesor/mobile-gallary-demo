var checkForm = {
	dis_warn:function(obj){
		obj.removeClass("form_warning");
	},
	check_warn:function(obj){
		var suc = true;
		obj.find(".check_required").each(function(){
			if( $(this).val() == '' ){
				$(this).addClass("form_warning");
				suc = false;
			}
		})
		return suc;
	}
}

$(function(){
	if($(".userCenter").height() < $(window).height()){
		$(".userCenter").height($(window).height() - $(".top_bar").height());
	}
	$(".black_bg").height($(window).height() - $(".top_bar").height());

	//topbar controller back btn
	$('.back_btn').click(function(){
		event.preventDefault();
		history.back(1);
	})
})