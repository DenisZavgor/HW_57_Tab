var Controller = (function () {
    function Controller(model, view) {
        console.log('init Controller');
		var self = this;
		this.view = view;
		this.model = model;
		this.view.render(this.model.get());
		this.view.turnTheLight(function (color){
			self.changeColor(color);
		})
	}
	
	Controller.prototype.changeColor = function (color) {
        this.model.setColor(color);
        this.view.render(this.model.get());
        
    };
    return Controller;
	
})();