jQuery(document).ready(function){
	jQuery('.Tabs_bar a').on('click', function(e)){
		var currentClick = jQuery(this).attr('href');
	}
	jQuery('.Tabs_contain' + currentClick).show().siblings().hide();
}