var Model = (function () {
    function Model() {
		console.log('init model');
		this.colors = {
			red: true,
			yellow: false,
			green: false
		}
	}
	
	Model.prototype.get = function () {
		return this.colors;
	}


	Model.prototype.setColor = function (color){
		for(var key in this.colors) {
			this.colors[key] = false;
		}
		this.colors[color] = true;
	};
	
    return Model;
})();