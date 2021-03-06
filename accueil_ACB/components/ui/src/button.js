(function($) {    

    $.anwidget("an.Button", {
        options: {
			'visible': true,
			'disabled': false,
			'text': "",
			// 'position': 'absolute'
		},
		// "width", "height",
		_props: [ ],
		_attrs: ["id", "disabled", "class"],
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "button" + _widgetID++ });
		},
		getCreateString: function() {
			return "<button type='button'>";
		},
		getProperties: function() {
			return this._props;
		},
		getAttributes: function() {
			return this._attrs;
		},
		update: function(force) {
			this._superApply(arguments);
			if(force || this._dirty["text"]) {
				this._$this.text(this._options["label"]);	
				this._dirty["text"] = true;				
			}
		}
    });   
})(jQuery);