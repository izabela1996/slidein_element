$(document).ready(function(){
	var animation_elements = $.find('.animation-item');
	var web_window = $(window);
	
	function check_if_in_view(){
		var window_height = web_window.height();
		var window_top_position = web_window.scrollTop();
		var window_bottom_position = (window_top_position + window_height);
		
		$.each(animation_elements, function(){
			var element = $(this);
			var element_height = $(element).outerHeight();
			var element_top_position = $(element).offset().top;
			var element_bottom_position = (element_top_position + element_height);
			
			if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)){
				element.addClass('item-in-view');
				} else{
					element.removeClass('item-in-view');
					}
			});
		}
		$(window).on('scroll resize', function(){
			check_if_in_view()
			})
	$(window).trigger('scroll');
	});
