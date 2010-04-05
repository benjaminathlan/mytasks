$(document).ready(function() {
	
	
	//Iphone style checkbox
	$(":checkbox").iButton({
		labelOn: "DONE"
		, labelOff: "unDONE"
		, change: function ($input){	//changing statemenet
			var li = $input.parents("li");
			var id = li.attr('rel');
			$("#send-email").html($input.is(":checked") ? "Yes, send me more e-mail!" : "Ugh... no more e-mail already!");
			$.post('/tasks/switch/'+id, function(data){
				$input.is(":checked") ?	li.addClass('task_done') : li.removeClass('task_done')
			 })
	    }
	  });
	
	//appearing Delete button
	$('.task').hover(
		function(){
			var id = $(this).attr('rel');
			var button = $(this).children('span.button[rel="'+id+'"]');
			button.fadeIn(100);
	}, function(){
			var id = $(this).attr('rel');
			var button = $(this).children('span.button[rel="'+id+'"]');
			button.fadeOut(100)
	});
	
	
	//DELETE BUTTON
	$(".btn_del").click(function(){
		var id = $(this).attr('rel');
		var ul = $(this).parents('ul').hide(500).fadeOut(1000);
		$.delete_('/tasks/'+id);
	});


	//Old picto click to switch statement
	$('.picto').bind('click', function(event){
		var li = $(event.currentTarget).parent('li');
		var id = li.attr('rel');

		$.post('/tasks/switch/'+id, function(data){
			console.log(data);
			if (data=="true") {
				li.addClass('task_done');
			}else{
				li.removeClass('task_done');
			};
		 })
		
		
	})
})



function _ajax_request(url, data, callback, type, method) {
    if (jQuery.isFunction(data)) {
        callback = data;
        data = {};
    }
    return jQuery.ajax({
        type: method,
        url: url,
        data: data,
        success: callback,
        dataType: type
        });
}

jQuery.extend({
    put: function(url, data, callback, type) {
        return _ajax_request(url, data, callback, type, 'PUT');
    },
    delete_: function(url, data, callback, type) {
        return _ajax_request(url, data, callback, type, 'DELETE');
    }
});