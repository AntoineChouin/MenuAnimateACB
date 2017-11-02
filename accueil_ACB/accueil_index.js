(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib = {};
	var ss = {};
	var img = {};
	lib.ssMetadata = [];


	// symbols:



	(lib.an_Label = function (options) {
		this._element = new $.an.Label(options);
		this._el = this._element.create();
		var $this = this;
		this.addEventListener('added', function () {
			$this._lastAddedFrame = $this.parent.currentFrame;
			$this._element.attach($('#dom_overlay_container'));
		});
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 100, 22);

	p._tick = _tick;
	p._handleDrawEnd = _handleDrawEnd;
	p._updateVisibility = _updateVisibility;



	(lib.an_CSS = function (options) {
		this._element = new $.an.CSS(options);
		this._el = this._element.create();
		var $this = this;
		this.addEventListener('added', function () {
			$this._lastAddedFrame = $this.parent.currentFrame;
			$this._element.attach($('#dom_overlay_container'));
		});
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 100, 22);

	p._tick = _tick;
	p._handleDrawEnd = _handleDrawEnd;
	p._updateVisibility = _updateVisibility;



	(lib.an_Button = function (options) {
		this._element = new $.an.Button(options);
		this._el = this._element.create();
		var $this = this;
		this.addEventListener('added', function () {
			$this._lastAddedFrame = $this.parent.currentFrame;
			$this._element.attach($('#dom_overlay_container'));
		});
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 100, 22);

	p._tick = _tick;
	p._handleDrawEnd = _handleDrawEnd;
	p._updateVisibility = _updateVisibility;



	// stage content:
	(lib.accueil = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});

		// Layer_3
		this.instance = new lib.an_Label({
			'id': 'label1',
			'label': 'Venez jouez avec moi',
			'disabled': false,
			'visible': true,
			'class': 'ui-label'
		});

		this.instance.setTransform( 50, 11);

		this.instance_11 = new lib.an_Label({
			'id': 'label2',
			'label': "C'est bien, très bien, tu sais!",
			'disabled': false,
			'visible': true,
			'class': 'ui-label'
		});

		this.instance.setTransform( 0, 0);

		this.css_snippet = new lib.an_CSS({
			'id': 'css_snippet',
			'href': 'assets/main.css'
		});

		this.css_snippet.setTransform(487, 206, 2, 2, 0, 0, 0, 50, 11);

		this.instance_1 = new lib.an_Button({
			'id': 'instance-btn_1',
			'label': 'Viens jouer avec moi!',
			'disabled': false,
			'visible': true,
			'class': 'ui-button text1'
		});

		this.instance_1.setTransform( 0, 0);

	

		this.timeline.addTween(cjs.Tween.get({}).to({
			state: [{
				t: this.instance_1
			}, {
				t: this.css_snippet
			}, {
				t: this.instance
			},
			{
				t: this.instance_11
			},
			
		]
		}).wait(1));

	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(504.5, 243.6, 308, 268);
	// library properties:
	lib.properties = {
		id: '350FAD044AEF46C7B90D507779BE1D40',
		width: 550,
		height: 400,
		fps: 24,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [{
				src: "https://code.jquery.com/jquery-2.2.4.min.js",
				id: "lib/jquery-2.2.4.min.js"
			},
			{
				src: "components/sdk/anwidget.js",
				id: "sdk/anwidget.js"
			},
			{
				src: "components/ui/src/label.js",
				id: "an.Label"
			},
			{
				src: "components/ui/src/css.js",
				id: "an.CSS"
			},
			{
				src: "components/ui/src/button.js",
				id: "an.Button"
			}
		],
		preloads: []
	};



	// bootstrap callback support:

	(lib.Stage = function (canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();

	p.setAutoPlay = function (autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function () {
		this.tickEnabled = true;
		this.getChildAt(0).gotoAndPlay(this.getTimelinePosition())
	}
	p.stop = function (ms) {
		if (ms) this.seek(ms);
		this.tickEnabled = false;
	}
	p.seek = function (ms) {
		this.tickEnabled = true;
		this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000);
	}
	p.getDuration = function () {
		return this.getChildAt(0).totalFrames / lib.properties.fps * 1000;
	}

	p.getTimelinePosition = function () {
		return this.getChildAt(0).currentFrame / lib.properties.fps * 1000;
	}

	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if (!an.bootstrapListeners) {
		an.bootstrapListeners = [];
	}

	an.bootstrapCallback = function (fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if (an.bootcompsLoaded.length > 0) {
			for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};

	an.compositions = an.compositions || {};
	an.compositions['350FAD044AEF46C7B90D507779BE1D40'] = {
		getStage: function () {
			return exportRoot.getStage();
		},
		getLibrary: function () {
			return lib;
		},
		getSpriteSheet: function () {
			return ss;
		},
		getImages: function () {
			return img;
		}
	};

	an.compositionLoaded = function (id) {
		an.bootcompsLoaded.push(id);
		for (var j = 0; j < an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}

	an.getComposition = function (id) {
		return an.compositions[id];
	}

	function _updateVisibility(evt) {
		if ((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
			this._element.detach();
			stage.removeEventListener('drawstart', this._updateVisibilityCbk);
			this._updateVisibilityCbk = false;
		}
	}

	function _handleDrawEnd(evt) {
		var props = this.getConcatenatedDisplayProps(this._props),
			mat = props.matrix;
		var tx1 = mat.decompose();
		var sx = tx1.scaleX;
		var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1;
		var w = this.nominalBounds.width * sx;
		var h = this.nominalBounds.height * sy;
		mat.tx /= dp;
		mat.ty /= dp;
		mat.a /= (dp * sx);
		mat.b /= (dp * sx);
		mat.c /= (dp * sy);
		mat.d /= (dp * sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX * mat.a + this.regY * mat.c - this.regX);
		var y = (mat.ty + this.regX * mat.b + this.regY * mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}

	function _tick(evt) {
		var stage = this.getStage();
		stage && stage.on('drawend', this._handleDrawEnd, this, true);
		if (!this._updateVisibilityCbk) {
			this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
		}
	}


})(createjs = createjs || {}, AdobeAn = AdobeAn || {});
var createjs, AdobeAn;