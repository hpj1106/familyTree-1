$(function(){
	_bindSlider();
	
	_bindSearch();
	_bindLogin();
});

/**轮播图**/
function _bindSlider(){
	$('#slider1').bxSlider({ //slider1是需要展示的横向流布局的DIV
		/*slideWidth: 200,*/   //每个横向流布局图片的团度
		minSlides: 1,		//每隔横向流布局最少要有几个图片
		maxSlides: 1,      //每个横向流布局最多展示几个图片
		slideMargin: 3,	//每个很想流布局之间的宽度
		autoDelay: true,
		auto:true
	 });
}

/**搜索按钮**/
function _bindSearch(){
	$("#search_button").click(function(){
		window.location.href="searResult.html";
	});
}
/**登陆按钮**/
function _bindLogin(){
	$('#login').on('hidden.bs.modal', function (e) {
		// 处理代码...
	});
	//$("#mymodal").modal("show");
}