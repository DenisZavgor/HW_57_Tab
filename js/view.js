
var View = (function () {
    function View() {
		console.log('init view');
		this.tamplate = '<div class="circle COLOR IS_ACTIVE" data-id="COLOR"></div><div class="circle COLOR IS_ACTIVE" data-id="COLOR"></div> <div class="circle COLOR IS_ACTIVE" data-id="COLOR"></div>';
		this.drawn = '';
		this.container = $('#lighter');
	}
	View.prototype.render = function(model){
		var isActive = null;
		this.drawn = '';
		for (var key in model){
			// isActive = model[key] ? 'active': '';
			this.drawn = this.drawn + this.tamplate.replace('COLOR', key).replace('COLOR', key).replace('IS_ACTIVE', isActive);
			
		}

		$(this.container).html(this.drawn);
	};
	

	
	
	
    return View;
})();