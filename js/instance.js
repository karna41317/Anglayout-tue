

jQuery(document).ready(function() {
	$.bookshelfSlider('#bookshelf_slider_1', {
		'item_width': 915,
		'item_height': 170,
		'products_box_margin_left': 30,
		'product_margin': 30,
		'product_show_title': true,
		'show_title_in_popup': true,
		'show_selected_title': true,
		'show_icons': true,
		'buttons_margin': 15,
		'buttons_align': 'center',
		'slide_duration': 800,
		'slide_easing': 'easeInOutExpo',
		'arrow_duration': 800,
		'arrow_easing': 'easeInOutExpo',
		'video_width_height': [500,290],
		'iframe_width_height': [500,330]
		}
	);
});