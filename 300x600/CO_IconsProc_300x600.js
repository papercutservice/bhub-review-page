(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"CO_IconsProc_300x600_atlas_1", frames: [[0,0,301,600]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.icon_bg_300x600 = function() {
	this.initialize(ss["CO_IconsProc_300x600_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.toothsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tooth.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgEAfIAJAAQALAEAHAWQADAMAEAWIAEAWQAHASAOgUQAMgTAGgyQADgSALgQQATgngFgjQgHglgfgNQgVgJgUALQgKAHgMgBQgLABgKgHQgVgLgVAJQgeANgGAlQgGAjATAnQALAQACATQAHAyAMASQAOAUAHgSIAEgWQAEgWADgMQAGgWAMgEgAgnhgQgNACgJALQgJAKgBAO");
	this.shape.setTransform(10.6899,12.5864);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,22.4,26.2);


(lib.stethsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// steth.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABXhBQAAAGAGAAQAFAAAAgFQABgCgCgCQgBgCgDAAIAAAAQgFAAgBAFgABdggQANAAAKgKQAKgJAAgOQAAgNgKgKQgJgKgOAAQgOAAgJAKQgKAJAAAOQAAAOAKAJQAJAKAOAAIAAA2QAAAJgGAHQgHAGgJAAIgkAAQgIABgFAFQgFAGABAIQAAAHAFAGQAFAFAHAAIBFAAQAJAAAGAHQAHAGAAAJQAAAJgHAHQgGAGgJAAIhyAAQgUgBgPgOQgOgOAAgUIAAgyIgGAAQgYAAgSgRQgSgRAAgZIAAhHQAAgFADgDQADgDAFAAIALAAQAAAEADAEQADADAFAAQAEAAAEgDQADgEAAgEQAAgFgDgDQgDgDgFAAQgFAAgDADQgDADAAAFAgQhyQABgFgEgDQgDgDgEAAQgFAAgDADQgDADAAAFQgBAEAEAEQADADAEAAQAFAAADgDQADgEAAgEIALAAQAFAAACADQADADAAAFIAABHQAAAZgQARQgSARgZAAIgFAA");
	this.shape.setTransform(13.075,13.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,27.2,27.2);


(lib.shotsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// shot.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABdgDIgQgRIgNgMIgegfIgOgNIgaAbIgdAcIgcAcIgYAXQAHAVAPAPIAAAAIg3A3AB5g9IgPgOIgegfAAUhMIgRgRAAig/IAqgrIgPgOAAFglIgLgMAgYgKIgLgLAhBBCQAQAPAUAHIAWgXAg1ASIgKgLAAXAiQAGgBAFAAIAAAAQASAAANAMQAMANAAARQAAASgMANQgOAMgRAAQgSAAgNgMQgLgNAAgSQAAgFABgFQADgLAHgJQAJgJALgCIA2g2AANBMIAPAQIAcgfABAggIAqgr");
	this.shape.setTransform(12.55,12.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,26.1,26.1);


(lib.preggosvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// preggo.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAUg3QgRAAgLgLQgLgMAAgRQAAgQALgMQALgMARAAQAQAAAMAMQAMAMAAAQQAAARgMAMQgMALgQAAgAgvBXQgFgCgDgBQgHgDgCgIQgBgCAAgJQAAgQAJgkQAJgmAIgJQAHgJAMgCQAMgCAIAHQADADAMAPQAKANAWANQAIAEACAJQACAIgEAHQgHAOgPgDIAaAfQATAlgjAcAgRAYIgLAhIA2AXQAFACACAEQACAEgBAFQgFAPgMgEQgugOgSgFAg3CIQgFgbANgW");
	this.shape.setTransform(7.0093,14.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,15.1,29.2);


(lib.mhsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mh.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABKgKIAjAAQANABAGgMIAAgBQADgIgEgIQgFgIgJgCIgBAAQAAgJgIgHQgHgGgKAAQgOAAgIANQgEgCgGAAQgGAAgFAEQgFAFAAAGIAAADQgGABgEAEQgEAFAAAFQAAAHAEADQAFAGAIAAIAgAAQgBgQgGgQAAsCGIAAgmQABgTAJgPIABgDQAQgcADgfQAAgFAAgFAAOhTQABgGgDgHQgHgLgMgCIAAgBQgBgNgKgJQgKgJgOAAQgVAAgJASQgHgEgFAAQgKAAgGAGQgHAGgBAJIAAAEQgIABgGAGQgFAHgBAIQAAAJAHAFQAHAIALAAIAFAAAg6g6IAuAAQAQAAAIgPIAAgBQACgEAAgFAAqhHQgJgGgLgEQgEgBgEgBQgMgDgMAAQgeAAgVAOQgQAKgIAPQgFALgCAJQgCAKACALQAAAHgDAFIgOAdQgCAEABAEQADAEAFAAIANACIABAXAgxAFQgEAGgHAAQgHAAgDgGAg5BCQgMAIgNgCQgDABgDgBIABAPQgBAIAGAHQAFAEAGgBQABABACgBIAfgCIAAAn");
	this.shape.setTransform(13.3393,14.6737);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,27.8,30.4);


(lib.masksvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mask.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ABbhXQgCARAHATQAKAagHAUQgFAMgLALIAAAGABbhXQAQAAALgDQAmgKgJgXQgDgIgKAAQgMgBgMAMQgQAOgDATgABjgFQABAHAAAIIABAAQACAxghAkQghAjgwACQgwACgkghQgjghgDgwIABgKQAAgEAAgFQADgXAPgUQANgQAigZQANgKAHgEQADgCACgBQAMgGAPAAQAOAAANAHQAFACAJAHQAFADAGAFQAiAaAMAQQAMAQAEATgABTAJIAAAJAg2g7QASgPAVgCQAVADARAOAiEABQgEgEgDgFQgUghAageQAYgcA+ACAhyASQgKgHgIgKAhyASIAAAGAhyAJIAAAJAhCBEIBkAAAhCgGIBkAAAAahaQAnAEAagBAhTAeICGAA");
	this.shape.setTransform(15.3295,13.7273);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,31.7,28.5);


(lib.devicessvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// devices.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhGAFIAAA3QAAAFgEADQgDAEgFgBIg2AAQgLAAAAgLIAAh4QgBgEAEgDQADgEAEAAIA3AAQAFAAADAEQAEADAAAEIAABBIDbAAAhzAxIAMAA");
	this.shape.setTransform(15.3469,16.4531);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAcBTIBdAAQAHAAAFgFQAFgFAAgHIAAikQAAgHgFgFQgFgFgHAAIjxAAQgHAAgFAFQgFAFAAAHIAABHAAcBTIAFAhAhSBTIBuAA");
	this.shape_1.setTransform(16.45,12.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAxAAIhhAA");
	this.shape_2.setTransform(16.45,23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgCAQIAFgg");
	this.shape_3.setTransform(13.425,21.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,31.7,25.1);


(lib.crossORsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// crossOR.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAuBqIi1AAQgEgPgBgOQADgkAGgaQAEgUACgSIAGhQQAOgDAPADQAGAAACAHIAFANQACAHADACQAEACAHAAQALgBAIgEQAIgEAHAEQABABAJAEQAGACAFgCQAWgKAMgEQAQgGATAAIBBAAQACAAACACIAHAKQADAEgCAFQgDAMgFAO");
	this.shape.setTransform(14.5,11.0432);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAmgSIgaAAIAAgZIgYAAIAAAZIgZAAIAAAYIAZAAIAAAZIAYAAIAAgZIAZAAgAAABeQgSgHgTgQQglgfAAgoIAAhGQAjgWAngBQAoABAjAWIAABGQAAAoglAfQgTAQgTAHg");
	this.shape_1.setTransform(23.775,15.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,32.8,26.2);


(lib.crosshandsvg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// crosshand.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ah5BqIACAAQAKAAAHACIBUAeQAOAEAMgIIBqhAQAGgDACgHQACgHgEgGQgBgCgBAAQgIgKgNAGIgqAXQAAgFgEgEQgEgFgHAAIgBAAIg3AAQgJAAgHgHQgUgRgYABQgTAAgRAJQgDACgFAAAA3hIIggAAIAAghIghAAIAAAhIgiAAIAAAiIAiAAIAAAhIAhAAIAAghIAhAAgABZg3QAAAigZAYQgYAYgjAAQghAAgYgYQgZgYAAgiQAAgjAZgYQAYgYAhAAQAjgBAYAZQAZAYAAAjgAgsBTIBSAAQAHAAAFgEQAFgFAAgHQAAgCAAgB");
	this.shape.setTransform(12.7333,14.4912);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.4,26.5,29.9);


(lib.baby01svg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// baby-01.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgHhEQgTAIgPAQQgOAQgGAUAA+A5QgLANgTgBQgSABgMgN");
	this.shape.setTransform(10.325,13.0784);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,1,1).p("Ah1ghQgIADgFAHQgEAIAAAIQgBAJAHAIQAGAHAKABQAFAAAFgDQAJAjAdAWQAdAVAjgBQAkABAdgWQAdgVAJgjQAEADAGAAQAKgBAGgIQAGgHAAgJQABgKgHgIQgGgHgKgBQgHAAgFAEQgHgVgPgQQgQgQgUgJ");
	this.shape_1.setTransform(14,15.3273);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgMAiQAMABAKgKQAKgKABgPQABgNgGgJQgGgKgKgBQgHAAgHAGQgGAGgBAIIAAABQAAAJADAFQADAGAHABQAFAAADgEQAEgEAAgE");
	this.shape_2.setTransform(13.8036,3.8829);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAgHQAIAAAAAHQAAAIgIAAQgHAAAAgIQAAgHAHAAg");
	this.shape_3.setTransform(17.2,13.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAgHQAIAAAAAHQAAAIgIAAQgHAAAAgIQAAgHAHAAg");
	this.shape_4.setTransform(10.75,13.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.5,28.9,26);


(lib.ICON_circleteal70 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,167,181,0.698)").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A9AABTQAABVg8A8Qg8A8hVAAQhUAAg8g8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICON_circleteal70, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICON_circleblue60 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(36,107,162,0.6)").s().p("AiQCRQg8g8AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A9AABTQAABVg8A8Qg8A8hVAAQhUAAg8g8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICON_circleblue60, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.HS_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#849F4F").s().p("Ap9EXIAHnRINagKIgCh7IGDgCIAZKDgAFdgfQgVAOgIAYQgGAUAAAZQAAAaAGATQAJAZAVAOQAVAOAgAAQAyAAAeggQADgDgEgCIgZgYQgCgDgEADQgSARgZAAQgfAAgHgZIgDgKQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAABAAIBxAAQAEAAAAgEQAAglgGgUQgIgYgVgOQgVgOgfABQgeAAgVANgAgnAvQgVAQAAAdQAAAdASAPQARAOAaAAQAjAAAQgVIABAAIAAANQAAADAEAAIArAAQADAAAAgDIAAh4QAAgjgSgPQgUgRgtABQgqAAgaASQgDACACADIARAeQACADADgDQAQgKAZAAQAWAAAIAEQAIAHAAANIAAAHQAAABAAAAQAAABAAAAQgBAAAAAAQgBABAAAAIghAAQgkAAgUAOgAnMBXIgZAdQgCACACADQAiAdAzAAQAoAAAWgSQAVgRABgeQAAgyg/gGIgUgCQgPgCgGgEQgFgDAAgHQAAgOAYgBQAbAAAXAOQAEADACgDIAVgaQADgDgDgDQgegWguAAQgkgBgVARQgUAQAAAaQAAAzA9AHIAVABQAQACAGAEQAFAEAAAHQAAASgdAAQgfAAgagVIgDgBIgDABgACfgkIAACyQAAADAEAAIAuAAQAEAAAAgDIAAhjQAAgnAdgCQAMAAAPAJQADABACgCIAWgmQACgEgDgCQgNgLgUABQgjgBgOAYIAAAAIAAgPQAAgFgEAAIguAAQgEAAAAAFgAieAiIAABsQAAADAEAAIAuAAQAEAAAAgDIAAh2QAAgegRgTQgRgUgeABQghAAgPAUIgBAAIAAhZQAAgDgEAAIguAAQgEAAAAADIAAD/QAAADAEAAIAuAAQAEAAAAgDIAAhsQAAgPAIgKQAIgJAOAAQAdAAAAAig");
	this.shape.setTransform(25.025,83.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#849F4F").s().p("AgeABQAAgVAgAAIAaAAQABABABAAQAAAAAAAAQABAAAAABQAAAAAAABIAAANQAAAZgiAAQgbgBAAgTg");
	this.shape_1.setTransform(27.15,92.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#849F4F").s().p("AgeATQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAgGACgIQAHgTAXgBQAZABAGATQACAGAAAIQAAABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAg");
	this.shape_2.setTransform(65.075,85.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2788A3").s().p("AqIk4IUcAvIAII0I03AOgAhWAjQgVAQAAAeQgBAdAUAPQAQAOAbAAQAkAAAPgVIAAANQAAADAEAAIArAAQAEAAAAgDIAAh5QAAgjgSgPQgUgRgsAAQgrAAgcATQgCACACADIARAfQACACADgBQARgMAZAAQAWAAAIAGQAHAGAAAMIAAAHQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIghAAQgjAAgVAOgAkagrQgVAOgIAZQgHATAAAZQAAAXAHAWQAIAaAWAOQAVAOAgAAQAzAAAdggQADgDgDgCIgagYQgCgDgDADQgSAQgZAAQgfAAgIgYQgCgDgBgIQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIBxAAQAFAAAAgEQAAgmgGgTQgJgZgUgOQgWgOgfAAQgeAAgVAOgADcgxIAAAhQAAAEAFAAIALAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABIAABUQAAAhAOAPQAOAPAgAAIAUAAQAEAAABgEIAAgnQgBgDgEAAIgJAAQgJAAgDgEQgFgFAAgKIAAhSQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIAYAAQAEAAABgEIAAghQgBgDgEAAIgYAAQAAAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBIAAgyQAAgEgDAAIguAAQgFAAAAAEIAAAyQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgLAAQgFAAAAADgABth9IAADKQAAAfANAPQAOAOAfAAIAVAAQADAAAAgEIAAgnQAAgDgDAAIgIAAQgRAAAAgSIAAjGQAAgEgEAAIgvAAQgDAAAAAEgAHggBQAIAIAAAQIAABsQAAADADAAIAvAAQAEAAAAgDIAAh3QAAgegRgTQgQgUgfAAQghAAgQAWIAAAAIAAhaQAAgEgEAAIguAAQgFAAAAAEIAAEAQAAADAFAAIAuAAQAEAAAAgDIAAhsQAAgQAIgIQAIgKAOAAQAOAAAHAKgAmpgBQAHAIAAAQIAABsQAAADAFAAIAuAAQAEAAAAgDIAAh3QAAgegRgTQgRgUgfAAQghAAgPAWIAAhaQAAgEgEAAIgvAAQgDAAAAAEIAAEAQAAADADAAIAvAAQAEAAAAgDIAAhsQAAgQAIgIQAHgKAOAAQAOAAAIAKg");
	this.shape_3.setTransform(-21.95,31.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2788A3").s().p("AgeABQAAgVAgAAIAbAAQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIAAANQAAAZgiAAQgbgBAAgTg");
	this.shape_4.setTransform(-24.5,39.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2788A3").s().p("AgeASQgBAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgGADgIQAHgUAXAAQAYAAAIAUQACAIAAAGQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_5.setTransform(-45.05,31.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2788A3").s().p("AJdAwIAcgBQABAJANAAQAPABAAgNIAAgIQgIAFgMAAQgRAAgLgMQgKgLAAgSQAAgSAKgLQALgMARAAQANAAAIAHIAAgFIAaAAIAABRQAAARgLALQgLAKgTAAQgmAAgFgggAJ4AAQAAASAPAAQAHgBAEgEQAEgEAAgIIAAgCQAAgHgEgFQgFgEgGAAQgPAAAAARgALLAdQgMgLAAgSQAAgSAMgLQAMgMATAAQATAAAMAMQAMALAAASQAAASgMALQgMAMgTAAQgTAAgMgMgALbAAQAAASAPAAQAPAAAAgSQAAgRgPAAQgPAAAAARgAILAeQgLgLAAgTQAAgSALgLQAMgMASAAQASAAAKAKQALALAAATIAAAIIgzAAQAAANAMAAQAIAAACgHIAcACQgCAMgKAHQgLAHgOAAQgTAAgMgLgAI0gIQgBgMgKAAQgLAAgBAMIAXAAIAAAAgAFOAZQgRgQAAgaQAAgaARgRQAQgQAbAAQAbAAARAQQARARAAAaQAAAagRAQQgRAQgbAAQgbAAgQgQgAFjgpQgIAJAAAPQAAAPAIAJQAIAIAOAAQAOAAAIgIQAJgJAAgPQAAgPgJgJQgIgIgOgBQgOABgIAIgACHAdQgMgLAAgSQAAgSAMgLQAMgMATAAQATAAAMAMQAMALAAASQAAASgMALQgMAMgTAAQgTAAgMgMgACXAAQAAASAPAAQAPAAAAgSQAAgRgPAAQgPAAAAARgAAJAeQgLgLAAgTQAAgSALgLQALgMATAAQARAAALAKQALALAAATIAAAIIgzAAQAAANAMAAQAIAAACgHIAcACQgCAMgLAHQgKAHgPAAQgTAAgLgLgAAygIQgBgMgLAAQgKAAgBAMIAXAAIAAAAgAiVASQAAgWAigCIAJAAIAAgEQAAgIgGAAQgHAAAAAHIgcgBQAAgLAJgJQAKgJAQAAQAiAAAAAhIAAAvIgaAAIAAgFQgHAHgMAAQgaAAAAgXgAh6AQQAAAFAHAAQAEAAACgCQADgDAAgDIAAgEIgHAAQgJABAAAGgAlOAfQgNgKAAgTIAegBQAAAGAFAEQAFAFAHAAQANgBAAgIQAAgHgTgFQgTgFgIgGQgLgHAAgQQAAgQAKgJQALgMAUAAQAUAAAMALQAMAJABASIgeABQAAgNgOAAQgMAAAAAKQAAAEAEACQADADAMADQATAEAIAHQALAJAAANQAAASgMAKQgMAIgTAAQgVAAgNgKgAoUANIAAgdIgOAAIAAgXIAOAAIABgZIAbAAIAAAZIARAAIAAAXIgRAAIAAAWQAAALALAAIAGgBIAAAYIgNABQggAAAAgcgAqjASQAAgWAigCIAKAAIAAgEQAAgIgHAAQgHAAAAAHIgcgBQAAgLAJgJQAKgJAQAAQAiAAAAAhIAAAvIgaAAIAAgFQgHAHgMAAQgaAAAAgXgAqIAQQAAAFAHAAQAEAAACgCQADgDAAgDIAAgEIgHAAQgJABAAAGgAr0AeQgLgLAAgTQAAgSALgLQALgMATAAQARAAALAKQALALAAATIAAAIIgzAAQAAANAMAAQAIAAACgHIAcACQgCAMgLAHQgKAHgOAAQgTAAgMgLgArLgIQgBgMgKAAQgLAAgBAMIAXAAIAAAAgANWAnIAAgpQAAgNgKAAQgLAAAAANIAAApIgcAAIAAhOIAaAAIAAAFQAGgHAOAAQAOAAAIAIQAJAJAAAPIAAAwgAHGAnIAAhOIAbAAIAAAGQAHgHAOAAIAAAbQgJAAgGAFQgFAEAAAGIAAAlgADlAnIAAg3IgOAAIAAgXIAOAAIAAgFQAAgQAKgKQAKgJAQAAIAJAAIAAAZIgGgBQgFAAgDADQgDADAAAEIAAAGIARAAIAAAXIgRAAIAAA3gAg7AnIAAhOIAbAAIAAAGQAGgHAPAAIAAAbQgKAAgFAFQgFAEAAAGIAAAlgAjAAnIAAgpQAAgNgKAAQgLAAAAANIAAApIgcAAIAAh1IAcAAIAAArQAGgGAMAAQAOAAAIAIQAJAJAAAPIAAAwgAmnAnIAAgpQAAgNgKAAQgLAAAAANIAAApIgcAAIAAh1IAcAAIAAArQAHgGALAAQAOAAAIAIQAJAJAAAPIAAAwgApJAnIAAh1IAcAAIAAB1gAstAnIAAgsIgmAAIAAAsIgeAAIAAhwIAeAAIAAAqIAmAAIAAgqIAeAAIAABwg");
	this.shape_6.setTransform(0.175,134.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HS_logo, new cjs.Rectangle(-88.7,0,177.5,143), null);


(lib.HEAD5type = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E6B").s().p("AgTAUQgIgHAAgNQAAgLAIgIQAHgHAMgBQANABAIAHQAHAIAAALQAAANgHAHQgIAIgNAAQgMAAgHgIg");
	this.shape.setTransform(95.25,21.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E6B").s().p("Ag4BeQgPgKgIgRQgIgSAAgXQAAgXAIgRQAIgRAPgKQAOgJATAAQATAAAKAGQAMAHAFANIAAgnIgBgIQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAAAIgMAAIAAgaIAeAAIAWgBIAOgCIAACmQABAGABABQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAKAAIAAAaIg8AAIAAgJIgBgRQgHAOgLAIQgMAIgTAAQgUAAgOgJgAgbgJQgJAKABAXIAAAEQgBAXAJALQAHALAOAAQANAAAIgLQAIgLAAgXIAAgEQAAgXgIgKQgIgLgNAAQgOAAgHALg");
	this.shape_1.setTransform(83.2,13.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E6B").s().p("AgnBDQgSgJgJgSQgJgRAAgXQAAgWAKgSQAJgRASgKQARgJAXAAQAkAAATAVQATAUAAAlIAAAHIhkAAQABATAJAKQAJAKARAAQAPAAAJgHQAIgHAFgLIAZAPQgFALgJAJQgIAJgOAFQgOAFgTAAQgaAAgSgKgAAcgNQgBgUgGgIQgGgJgNAAQgMAAgHAJQgHAJgBATIA1AAIAAAAg");
	this.shape_2.setTransform(66.575,16.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E6B").s().p("AgnBDQgSgJgJgSQgJgRAAgXQAAgWAKgSQAJgRASgKQARgJAXAAQAkAAATAVQATAUAAAlIAAAHIhkAAQABATAJAKQAJAKARAAQAPAAAJgHQAIgHAFgLIAZAPQgFALgJAJQgIAJgOAFQgOAFgTAAQgaAAgSgKgAAcgNQgBgUgGgIQgGgJgNAAQgMAAgHAJQgHAJgBATIA1AAIAAAAg");
	this.shape_3.setTransform(51.175,16.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E6B").s().p("AAJBLIAAgaIAJAAQAAAAABAAQABAAAAAAQABgBAAAAQAAAAAAgBQACgBAAgGIAAg5QAAgOgEgGQgGgGgKAAQgMAAgGAKQgIAJAAAVIAAArQABAGABABQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAJAAIAAAaIhQAAIAAgaIALAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQACgBAAgGIAAhKIgBgIQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAAAIgLAAIAAgaIAdAAIAVgBIAPgDIAAAbQAHgOAMgHQAMgGARAAQAXAAAMAOQANAOAAAcIAAA6QAAAGABABQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIALAAIAAAag");
	this.shape_4.setTransform(34.75,15.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003E6B").s().p("Ag8A+QgMgNAAgdIAAg7QAAgFgBgCQgBgBAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgLAAIAAgaIBCAAIAABdQAAAOAFAGQAFAFAKAAQAMAAAGgJQAHgJAAgTIAAguQAAgFgCgCQAAgBgBAAQAAAAAAAAQgBgBgBAAQAAAAgBAAIgNAAIAAgaIBEAAIAABtQAAAGACACQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAIALAAIAAAaIgeAAIgVABIgPADIAAgaQgHANgMAHQgLAGgRAAIgBAAQgXAAgMgNg");
	this.shape_5.setTransform(10.575,16.3759);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E6B").s().p("AgpBEQgSgKgKgRQgKgSAAgXQAAgWAKgSQAKgRASgKQASgJAYAAQAYAAASAJQARAKAKARQAKASAAAWQAAAXgKASQgKARgSAKQgSAJgYAAQgYAAgRgJgAAXAmQAIgLgBgZIAAgDQABgagIgLQgHgLgQAAQgOAAgIALQgHALAAAaIAAADQAAAZAHALQAHAMAPgBQAQABAHgMg");
	this.shape_6.setTransform(-6.275,16.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003E6B").s().p("AhJBdQgMgKAAgQQAAgMAGgIQAIgHANgBQAJAAAGAGQAGAEABAJQACAIgEAJQAJgCAFgHQAGgIAFgNIAAgCIgzhtIgFgHQgCgBgCAAIgJAAIAAgbIBTAAIAAAbIgJAAQgEAAgBADQgBADACAEIAaA7IAWg7QACgFgBgCQgCgDgEAAIgKAAIAAgbIBCAAIAAAbIgKAAQgDAAgDABIgEAHIgsBrQgIAUgIAOQgIANgLAHQgNAGgRABQgVAAgKgJg");
	this.shape_7.setTransform(-22.8,19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E6B").s().p("AgnBDQgSgJgJgSQgJgRAAgXQAAgWAKgSQAJgRASgKQARgJAXAAQAkAAATAVQATAUAAAlIAAAHIhkAAQABATAJAKQAJAKARAAQAPAAAJgHQAIgHAFgLIAZAPQgFALgJAJQgIAJgOAFQgOAFgTAAQgaAAgSgKgAAcgNQgBgUgGgIQgGgJgNAAQgMAAgHAJQgHAJgBATIA1AAIAAAAg");
	this.shape_8.setTransform(-44.975,16.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003E6B").s().p("AhFBLIAAgaIAKAAQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQABgBAAgGIAAhKQAAgGgBgCQgBAAAAgBQAAAAgBAAQAAAAgBgBQgBAAgBAAIgLAAIAAgaIAeAAIAVgBIAPgDIAAAgQAEgRAKgIQAKgHAOAAQASAAAJALQAKAKAAATQAAAQgIAJQgJAJgOAAQgKAAgGgFQgHgGAAgKQAAgGAEgGQADgFAGgDIgEgCIgFgBQgMAAgHAMQgFALgBAVIAAAoQAAAGACABQAAABABAAQAAAAABABQAAAAAAAAQABAAAAAAIAMAAIAAAag");
	this.shape_9.setTransform(-59.625,15.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003E6B").s().p("AhEBCQgLgKgBgSQABgTANgLQANgKAVgFQAXgGAZgEIAAgIQgBgNgGgGQgHgGgMAAIgJAAIgHABIADAHIAAAHQAAALgGAGQgIAGgLAAQgMAAgIgGQgGgGAAgNQAAgOAJgIQAIgJAQgEQARgEAVAAQAkgBAQAMQAQAMAAAbIAABAIABAHQAAAAABABQAAAAAAAAQABABABAAQAAAAABAAIAKAAIAAAaIg1AAIgHgKIgEgNQgEAHgHAHQgHAGgKAEQgKADgNAAQgUAAgNgLgAgSALQgOAGgBAOQABAIAFAFQAEAEAJAAQAOAAAHgJQAIgKABgQIAAgLQgWADgMAGg");
	this.shape_10.setTransform(-74.65,16.174);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003E6B").s().p("Ag1A5QgVgUAAglQAAgkAWgUQAVgUAlAAQAhAAASANQARANABAYQAAAPgIAJQgIAIgPABQgMgBgHgGQgGgGgBgKQAAgJAGgHQAFgGAJgCQgDgFgGgCQgHgDgKAAQgRAAgJALQgKAMAAAXIAAAFQAAAXAJAMQAJALARAAQAOAAAJgGQAJgGAEgNIAbAOQgHASgQAMQgQALgdAAQgmAAgVgUg");
	this.shape_11.setTransform(-90.275,16.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003E6B").s().p("AgnBDQgSgJgJgSQgJgRAAgXQAAgWAKgSQAJgRASgKQARgJAXAAQAkAAATAVQATAUAAAlIAAAHIhkAAQABATAJAKQAJAKARAAQAPAAAJgHQAIgHAFgLIAZAPQgFALgJAJQgIAJgOAFQgOAFgTAAQgaAAgSgKgAAcgNQgBgUgGgIQgGgJgNAAQgMAAgHAJQgHAJgBATIA1AAIAAAAg");
	this.shape_12.setTransform(109.825,-14.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003E6B").s().p("AAJBlIAAgaIAJAAQABAAAAAAQABAAABAAQAAgBAAAAQABAAAAgBQACgBAAgGIAAg5QAAgNgFgGQgFgHgLAAQgLAAgHAKQgHAJAAAVIAAArQAAAGABABQABABAAAAQABAAAAABQABAAAAAAQABAAABAAIAJAAIAAAaIhRAAIAAgaIALAAQAAAAABAAQABAAAAAAQABgBAAAAQABAAAAgBQACgBAAgGIAAh/QAAgFgCgDQAAAAAAgBQgBAAAAAAQgBAAgBgBQAAAAgBAAIgLAAIAAgaIAeAAIAVgBIAPgCIAABOQAHgNAMgHQALgGARAAQAYAAAMANQAMAOAAAcIAAA7QAAAGACABQAAABABAAQAAAAAAABQABAAABAAQAAAAABAAIAKAAIAAAag");
	this.shape_13.setTransform(93.325,-17.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003E6B").s().p("AgSBVQgLgLAAgbIAAhJIgSAAIAAgYIAJgBQAJgCAFgEQAGgEABgJIADgaIAhAAIAAArIAbAAIAAAbIgcAAIAABJQAAAMAEAEQAFAEAIAAIAIgBIAFgBIAAAbQgFACgHABQgIACgIAAQgaAAgMgMg");
	this.shape_14.setTransform(79.525,-16.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003E6B").s().p("AgSBVQgLgLAAgbIAAhJIgSAAIAAgYIAJgBQAJgCAFgEQAGgEABgJIADgaIAhAAIAAArIAbAAIAAAbIgcAAIAABJQAAAMAEAEQAFAEAIAAIAIgBIAFgBIAAAbQgFACgHABQgIACgIAAQgaAAgMgMg");
	this.shape_15.setTransform(63.575,-16.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003E6B").s().p("AgnBDQgSgJgJgSQgJgRAAgXQAAgWAKgSQAJgRASgKQARgJAXAAQAkAAATAVQATAUAAAlIAAAHIhkAAQABATAJAKQAJAKARAAQAPAAAJgHQAIgHAFgLIAZAPQgFALgJAJQgIAJgOAFQgOAFgTAAQgaAAgSgKgAAcgNQgBgUgGgIQgGgJgNAAQgMAAgHAJQgHAJgBATIA1AAIAAAAg");
	this.shape_16.setTransform(51.375,-14.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003E6B").s().p("Ag4BwQgSgDgIgHQgIgGAAgJQAAgLAJgHQAKgHASgEQgPgDgIgJQgHgHAAgNQAAgLAHgHQAHgIANgDQgLgHgFgKQgGgJAAgOQAAgQAKgMQAJgLAQgHQAQgGAWAAQAMAAALADQALACAJAEQADgNAIgIQAHgHAMAAQAKAAAGAGQAGAGABAJQgBAIgEAFQgFAGgJAAQgFAAgEgCQgFgCgCgFIgDADIgDADQAHAGAEAJQADAIAAAKQAAARgJALQgJAMgQAEQgQAGgVAAIgSAAIgPgEQgFABgCACQgCACAAADQAAAFAEACQAEADAKgBIAVAAIAXAAIAUAAQAZAAAMAMQALALAAAUQAAAagWANQgWAOgtAAQgeAAgSgDgAgwBHQgEAFAAAFQgBAJALACQALAEAZAAQAaAAANgFQAMgFAAgJQABgIgGgDQgFgCgOgBIg4AAQgJADgEAFgAgYhBQgGAGAAAOIAAAFQAAAMAGAHQAGAGALAAQALAAAFgGQAGgHAAgNIAAgFQAAgNgFgHQgGgGgKAAIgCAAQgLAAgFAHg");
	this.shape_17.setTransform(35.6235,-13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003E6B").s().p("AgpBEQgSgKgKgRQgKgSAAgXQAAgWAKgSQAKgRASgKQASgJAYAAQAYAAASAJQARAKAKARQAKASAAAWQAAAXgKASQgKARgSAKQgSAJgYAAQgYAAgRgJgAAXAmQAIgLgBgZIAAgDQABgagIgLQgHgLgQAAQgOAAgIALQgHALAAAaIAAADQAAAZAHALQAHAMAPgBQAQABAHgMg");
	this.shape_18.setTransform(12.275,-14.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003E6B").s().p("AgSBVQgLgLAAgbIAAhJIgSAAIAAgYIAJgBQAJgCAFgEQAGgEABgJIADgaIAhAAIAAArIAbAAIAAAbIgcAAIAABJQAAAMAEAEQAFAEAIAAIAIgBIAFgBIAAAbQgFACgHABQgIACgIAAQgaAAgMgMg");
	this.shape_19.setTransform(-0.875,-16.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003E6B").s().p("AgnBDQgSgJgJgSQgJgRAAgXQAAgWAKgSQAJgRASgKQARgJAXAAQAkAAATAVQATAUAAAlIAAAHIhkAAQABATAJAKQAJAKARAAQAPAAAJgHQAIgHAFgLIAZAPQgFALgJAJQgIAJgOAFQgOAFgTAAQgaAAgSgKgAAcgNQgBgUgGgIQgGgJgNAAQgMAAgHAJQgHAJgBATIA1AAIAAAAg");
	this.shape_20.setTransform(-19.475,-14.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003E6B").s().p("AA3BLIAAgaIAIAAQAAAAABAAQABAAAAAAQABgBAAAAQAAAAABgBQABgBAAgGIAAg2QAAgOgFgHQgEgHgLAAQgMAAgGAJQgFAJAAASIAAAuQAAAGABABQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAIAKAAIAAAaIhNAAIAAgaIAIAAQAAAAABAAQAAAAABAAQABgBAAAAQAAAAABgBQABgBAAgGIAAg4QAAgNgFgHQgFgGgKAAQgMAAgGAJQgFAJAAASIAAAuQAAAGABABQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAIAJAAIAAAaIhQAAIAAgaIALAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABgBQABgBAAgGIAAhKIgBgIQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgLAAIAAgaIAdAAIAVgBIAPgDIAAAcQAHgOALgHQALgHARAAQASAAAKAHQAKAIAEAQQAGgPAMgIQAMgIATAAQAYAAAMAOQANANAAAfIAAA4QAAAGABABQABABAAAAQAAAAABABQABAAAAAAQABAAAAAAIALAAIAAAag");
	this.shape_21.setTransform(-40.425,-15.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003E6B").s().p("AgoBpIAAgaIALAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAIABgHIAAhIQABgHgCgCQgBgDgEAAIgKAAIAAgbIAeAAIAUgBIAPgCIAAByQAAAFABACQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAIALAAIAAAagAgTg7QgIgHAAgMQAAgLAIgIQAHgHAMAAQANAAAHAHQAIAIAAALQAAAMgIAHQgHAHgNAAQgMAAgHgHg");
	this.shape_22.setTransform(-58.025,-18.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003E6B").s().p("AgSBVQgLgLAAgbIAAhJIgSAAIAAgYIAJgBQAJgCAFgEQAGgEABgJIADgaIAhAAIAAArIAbAAIAAAbIgcAAIAABJQAAAMAEAEQAFAEAIAAIAIgBIAFgBIAAAbQgFACgHABQgIACgIAAQgaAAgMgMg");
	this.shape_23.setTransform(-67.225,-16.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#003E6B").s().p("AgkBKQgPgEgLgFIAAgmIAjAAIAAAXIAKACIANABQAKAAAGgEQAHgEAAgIQAAgJgJgEQgIgEgOgDQgMgCgMgEQgMgFgHgIQgIgJAAgQQAAgXARgNQARgNAfAAQASAAAPAEQAPADAIAEIAAAmIghAAIAAgWIgJgCIgLgBQgKAAgHAEQgGAEAAAIQAAAGAEADQAEADAHACIAQAEQAMACAMAFQAMAEAHAIQAIAJAAARQAAAXgRAOQgRANggAAQgSAAgQgDg");
	this.shape_24.setTransform(-84.725,-14.875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#003E6B").s().p("AgXAoIgIgCIAAgXIAHACIAIABQAJAAAEgEQAEgDABgHIgDABIgEAAQgKAAgHgFQgGgFAAgLQAAgLAHgGQAIgHAMAAQAJAAAGAEQAJAFAEAIQAFAIgBALQAAAUgMANQgMAMgUAAIgKgBg");
	this.shape_25.setTransform(-94.65,-23.725);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#003E6B").s().p("AgSBVQgLgLAAgbIAAhJIgSAAIAAgYIAJgBQAJgCAFgEQAGgEABgJIADgaIAhAAIAAArIAbAAIAAAbIgcAAIAABJQAAAMAEAEQAFAEAIAAIAIgBIAFgBIAAAbQgFACgHABQgIACgIAAQgaAAgMgMg");
	this.shape_26.setTransform(-102.875,-16.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003E6B").s().p("AgsBjIAAgaIAMAAQAEABACgDQABgCAAgGIAAh+QAAgFgBgDQgCgBgEAAIgMAAIAAgbIBZAAIAAAbIgMAAQgEAAgCABIAAAIIAAB+IAAAIQACADAEgBIAMAAIAAAag");
	this.shape_27.setTransform(-112.1,-17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD5type, new cjs.Rectangle(-147,-39,294,73.1), null);


(lib.HEAD4type = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E6B").s().p("AgNAOQgGgFAAgJQAAgIAGgFQAFgGAIAAQAJAAAGAGQAFAFAAAIQAAAJgFAFQgGAGgJAAQgIAAgFgGg");
	this.shape.setTransform(59.725,111.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E6B").s().p("AgZAzIgSgFIAAgbIAYAAIAAAQIAHACIAJAAQAHAAAFgDQAEgCAAgGQAAgHgGgCQgGgDgJgCQgJgBgIgEQgIgDgFgFQgGgGAAgLQAAgQAMgKQAMgJAVAAQANAAALADQAKACAGADIAAAaIgXAAIAAgPIgHgCIgIAAQgGAAgFADQgEADAAAFQAAAEADACQACADAGABIAKACQAJACAIADQAIADAFAGQAGAGAAAMQAAAQgMAJQgMAKgWAAQgNAAgLgDg");
	this.shape_1.setTransform(53.05,108.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E6B").s().p("AAmA1IAAgTIAGAAIACgBQACgBAAgEIAAglQAAgLgEgEQgDgFgHAAQgJAAgEAGQgDAHgBAMIAAAgIABAFIADABIAHAAIAAATIg2AAIAAgTIAGAAIACgBQABgBAAgEIAAgnQABgJgEgEQgEgFgGAAQgJAAgEAGQgEAHAAAMIAAAgQAAAEABABIADABIAGAAIAAATIg3AAIAAgTIAHAAIACgBQABgBAAgEIAAgzIAAgGQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgHAAIAAgTIATAAIAQgBIAKgBIAAATQAFgJAHgGQAIgFAMAAQAMAAAHAGQAIAFACAMQAEgLAIgGQAJgGANAAQARAAAIAKQAJAKAAAVIAAAnQAAAEACABIACABIAIAAIAAATg");
	this.shape_2.setTransform(39.4,107.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E6B").s().p("AgvAuQgIgHAAgMQAAgOAJgHQAJgHAPgEQAPgEASgDIAAgFQAAgKgFgEQgEgEgJAAIgGAAIgFABIACAFIABAFQgBAHgEAFQgGAEgHAAQgJAAgFgEQgFgFAAgIQAAgKAGgGQAHgGALgDQALgDAPAAQAZAAALAIQAMAIgBATIAAAtIABAEQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAHAAIAAASIglAAIgFgHIgDgJQgDAFgFAFQgEAEgHADQgIACgIAAQgPAAgIgIgAgNAIQgJAEAAAJQAAAGADADQAEAEAFAAQAKAAAFgHQAGgHAAgLIAAgIQgOACgKAFg");
	this.shape_3.setTransform(24.675,108.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E6B").s().p("AgBAzIAAgSIAGAAQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBQAAAAABAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgMgSIgPASIAAADQAAABAAAAQAAAAAAAAQAAABABAAQAAAAABAAIAGAAIAAASIgsAAIAAgSIAGAAQABAAAAAAQABAAABgBQAAAAAAAAQABAAAAgBIAEgEIAYgbIgYgaIgEgEQAAgBgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAIgFAAIAAgSIA7AAIAAASIgGAAIgCABQAAABAAAAQAAAAAAABQAAAAAAABQABABAAAAIALAPIANgPQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIgGAAIAAgSIAtAAIAAASIgHAAQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABIgEAEIgWAZIAZAcIAEAEQAAAAABABQAAAAAAAAQABABAAAAQABAAAAAAIAFAAIAAASg");
	this.shape_4.setTransform(13.325,108.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003E6B").s().p("AgbAvQgMgHgHgMQgGgMAAgQQAAgPAGgNQAIgMALgGQANgHAPAAQAaAAANAPQANAOAAAaIAAAEIhGAAQABANAHAIQAGAHALAAQALAAAGgFQAGgFADgIIASALQgEAIgFAGQgHAGgKAEQgJADgNAAQgSAAgNgHgAATgJQAAgOgEgGQgEgGgKABQgHgBgFAHQgGAGAAANIAkAAIAAAAg");
	this.shape_5.setTransform(2.4,108.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E6B").s().p("AgbBHIAAgTIAHAAIADgBQACgBAAgEIAAhYIgCgGQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgIAAIAAgTIAWAAIANAAIALgCIAAB0QAAAEABABIADABIAHAAIAAATg");
	this.shape_6.setTransform(-10,106.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003E6B").s().p("AgvAuQgIgHAAgMQAAgOAJgHQAJgHAPgEQAPgEASgDIAAgFQAAgKgFgEQgEgEgJAAIgGAAIgFABIACAFIABAFQgBAHgEAFQgGAEgHAAQgJAAgFgEQgFgFAAgIQAAgKAGgGQAHgGALgDQALgDAPAAQAZAAALAIQAMAIgBATIAAAtIABAEQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAHAAIAAASIglAAIgFgHIgDgJQgDAFgFAFQgEAEgHADQgIACgIAAQgPAAgIgIgAgNAIQgJAEAAAJQAAAGADADQAEAEAFAAQAKAAAFgHQAGgHAAgLIAAgIQgOACgKAFg");
	this.shape_7.setTransform(-18.175,108.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E6B").s().p("AgMA8QgIgIAAgTIAAgzIgNAAIAAgRIAHAAQAGgCAEgDQADgDACgGIACgSIAXAAIAAAeIATAAIAAATIgUAAIAAAzQAAAIADADQADADAGAAIAFgBIAEgBIAAAUIgJACIgLABQgSAAgIgIg");
	this.shape_8.setTransform(-27.3,106.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003E6B").s().p("AAGA1IAAgTIAGAAIADgBQABgBAAgEIAAgnQAAgKgDgEQgEgFgHAAQgIAAgFAHQgEAHgBAOIAAAeQAAAEABABIADABIAHAAIAAATIg4AAIAAgTIAHAAIADgBQABgBAAgEIAAgzIgBgGQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgHAAIAAgTIAUAAIAPgBIAKgBIAAATQAFgKAJgFQAHgFAMAAQARAAAIAKQAJAKAAAUIAAAoQAAAEABABIADABIAHAAIAAATg");
	this.shape_9.setTransform(-36.325,107.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003E6B").s().p("AgbAvQgNgHgGgMQgGgMAAgQQAAgPAGgNQAHgMAMgGQANgHAQAAQAZAAANAPQANAOAAAaIAAAEIhGAAQABANAGAIQAHAHALAAQALAAAGgFQAGgFADgIIASALQgEAIgGAGQgGAGgKAEQgJADgNAAQgSAAgNgHgAAUgJQgBgOgEgGQgFgGgIABQgJgBgFAHQgEAGgBANIAlAAIAAAAg");
	this.shape_10.setTransform(-47.8,108.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003E6B").s().p("AhFBGIAAgTIAJAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAgFIAAhXIgBgGQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgJAAIAAgTIBCAAQAlAAASASQASASAAAhQAAAigTASQgSASgmAAgAgTAzIAQAAQANAAAHgFQAIgEADgLQADgKAAgQIAAgIQAAgRgDgKQgDgLgIgEQgHgFgMAAIgRAAg");
	this.shape_11.setTransform(-60.2493,106.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD4type, new cjs.Rectangle(-155.5,60,305,61.3), null);


(lib.HEAD3type = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E6B").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAFgFAIAAQAJAAAGAFQAFAGAAAHQAAAIgFAGQgGAGgJgBQgIABgFgGg");
	this.shape.setTransform(66.625,81.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E6B").s().p("AgZAzIgSgFIAAgbIAYAAIAAAQIAHACIAJAAQAHAAAFgDQAEgCAAgGQAAgHgGgCQgGgDgJgCQgJgBgIgEQgIgDgGgFQgEgGgBgLQAAgQAMgKQAMgJAWAAQAMAAAKADQALACAGADIAAAaIgXAAIAAgPIgGgCIgJAAQgHAAgEADQgEADAAAFQAAAEACACQAEADAEABIALACQAIACAJADQAIADAGAGQAFAGAAAMQAAAQgMAJQgMAKgWAAQgNAAgLgDg");
	this.shape_1.setTransform(59.95,78.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E6B").s().p("AAGA1IAAgTIAGAAIADgBQABgBAAgEIAAgnQAAgKgDgEQgEgFgHAAQgIAAgFAHQgEAHgBAOIAAAeQAAAEABABIADABIAHAAIAAATIg4AAIAAgTIAHAAIADgBQABgBAAgEIAAgzIgBgGQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgHAAIAAgTIAUAAIAPgBIAKgBIAAATQAFgKAJgFQAHgFAMAAQARAAAIAKQAJAKAAAUIAAAoQAAAEABABIADABIAHAAIAAATg");
	this.shape_2.setTransform(49.475,77.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E6B").s().p("AgdAvQgMgGgHgNQgHgMAAgQQAAgPAHgMQAHgNAMgGQANgHAQAAQARAAANAHQAMAGAHAMQAHANAAAPQgBAQgGAMQgIANgMAGQgMAHgRAAQgRAAgMgHgAAQAbQAFgIAAgRIAAgDQAAgRgFgIQgFgIgLAAQgKAAgFAIQgFAIgBARIAAADQAAARAGAIQAFAIAKgBQALABAFgIg");
	this.shape_3.setTransform(37.7,78.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E6B").s().p("AgcBJIAAgSIAIAAIADgBIABgFIAAgyQAAgFgBgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIgHAAIAAgTIAWAAIANgBIAKgCIAABQIACAFIADABIAHAAIAAASgAgNgpQgGgFAAgIQAAgIAGgFQAFgGAIABQAJgBAFAGQAFAFABAIQgBAIgFAFQgFAFgJABQgIgBgFgFg");
	this.shape_4.setTransform(29.25,75.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003E6B").s().p("AgMA8QgIgIAAgTIAAgzIgNAAIAAgRIAHAAQAGgCAEgDQADgDACgGIACgSIAXAAIAAAeIATAAIAAATIgUAAIAAAzQAAAIADADQADADAGAAIAFgBIAEgBIAAAUIgJACIgLABQgSAAgIgIg");
	this.shape_5.setTransform(23,76.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E6B").s().p("AgvAuQgIgHAAgMQAAgOAJgHQAJgHAPgEQAPgEASgDIAAgFQAAgKgFgEQgEgEgJAAIgGAAIgFABIACAFIABAFQgBAHgEAFQgGAEgHAAQgJAAgFgEQgFgFAAgIQAAgKAGgGQAHgGALgDQALgDAPAAQAZAAALAIQAMAIgBATIAAAtIABAEQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAHAAIAAASIglAAIgFgHIgDgJQgDAFgFAFQgEAEgHADQgIACgIAAQgPAAgIgIgAgNAIQgJAEAAAJQAAAGADADQAEAEAFAAQAKAAAFgHQAGgHAAgLIAAgIQgOACgKAFg");
	this.shape_6.setTransform(14.525,78.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003E6B").s().p("AgvAzIAAgQIA4hFIgTAAQgGAAgDACQgDACgCAEIgBAMIgTAAIABgkIBaAAIAAAQIg3BFIAUAAQAHAAADgCQAEgCABgFIACgLIATAAIgBAkg");
	this.shape_7.setTransform(3.9,78.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E6B").s().p("AgcBJIAAgSIAIAAIADgBIABgFIAAgyQAAgFgBgBQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgIAAIAAgTIAVAAIAOgBIAKgCIAABQIABAFIAEABIAGAAIAAASgAgNgpQgFgFgBgIQABgIAFgFQAFgGAIABQAJgBAGAGQAEAFABAIQgBAIgEAFQgGAFgJABQgIgBgFgFg");
	this.shape_8.setTransform(-3.8,75.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003E6B").s().p("AAGA1IAAgTIAGAAIADgBQABgBAAgEIAAgnQAAgKgDgEQgEgFgHAAQgIAAgFAHQgEAHgBAOIAAAeQAAAEABABIADABIAHAAIAAATIg4AAIAAgTIAHAAIADgBQABgBAAgEIAAgzIgBgGQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgHAAIAAgTIAUAAIAPgBIAKgBIAAATQAFgKAJgFQAHgFAMAAQARAAAIAKQAJAKAAAUIAAAoQAAAEABABIADABIAHAAIAAATg");
	this.shape_9.setTransform(-12.575,77.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003E6B").s().p("AgqArQgJgJAAgUIAAgpIgBgFIgCgBIgIAAIAAgTIAuAAIAABBQABAKADAEQAEAEAHAAQAHAAAFgHQAFgGAAgNIAAggIgBgFIgEgBIgJAAIAAgTIAxAAIAABMIAAAGQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABAAIAJAAIAAATIgWAAIgPAAIgKACIAAgSQgGAKgIAEQgHAFgMAAQgRAAgIgKg");
	this.shape_10.setTransform(-24.8,78.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003E6B").s().p("AAmA1IAAgTIAGAAIADgBQABgBAAgEIAAglQAAgLgDgEQgEgFgIAAQgIAAgEAGQgDAHAAAMIAAAgIAAAFIADABIAHAAIAAATIg2AAIAAgTIAFAAIAEgBQABgBAAgEIAAgnQAAgJgEgEQgDgFgIAAQgIAAgEAGQgEAHAAAMIAAAgQAAAEABABIADABIAGAAIAAATIg4AAIAAgTIAIAAIACgBQABgBAAgEIAAgzIAAgGQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgIAAIAAgTIAUAAIAPgBIALgBIAAATQAFgJAHgGQAIgFAMAAQAMAAAHAGQAHAFADAMQAEgLAJgGQAIgGANAAQARAAAJAKQAIAKABAVIAAAnQAAAEABABIACABIAHAAIAAATg");
	this.shape_11.setTransform(-39.95,77.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003E6B").s().p("AAmA1IAAgTIAGAAIADgBQABgBAAgEIAAglQAAgLgDgEQgEgFgIAAQgIAAgEAGQgDAHAAAMIAAAgIAAAFIADABIAHAAIAAATIg2AAIAAgTIAFAAIAEgBQABgBAAgEIAAgnQAAgJgEgEQgDgFgIAAQgIAAgEAGQgEAHAAAMIAAAgQAAAEABABIADABIAGAAIAAATIg4AAIAAgTIAIAAIACgBQABgBAAgEIAAgzIAAgGQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgIAAIAAgTIAUAAIAPgBIALgBIAAATQAFgJAHgGQAIgFAMAAQAMAAAHAGQAHAFADAMQAEgLAJgGQAIgGANAAQARAAAJAKQAIAKABAVIAAAnQAAAEABABIACABIAHAAIAAATg");
	this.shape_12.setTransform(-58.4,77.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003E6B").s().p("AgfBGIAAgTIAJAAQABAAAAAAQABAAAAAAQABAAAAgBQAAAAABAAQABgBAAgFIAAhXIgBgGQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgJAAIAAgTIA+AAIAAATIgJAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAAAQgCACAAAEIAABXQAAAFACABQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAIAJAAIAAATg");
	this.shape_13.setTransform(-70.9,76.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3type, new cjs.Rectangle(-155.5,30,305,61.3), null);


(lib.HEAD2type = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E6B").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAFgFAIgBQAJABAGAFQAFAGAAAHQAAAIgFAGQgGAGgJgBQgIABgFgGg");
	this.shape.setTransform(73.375,20.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E6B").s().p("AgZAzIgSgFIAAgbIAYAAIAAAQIAHACIAJAAQAHAAAFgDQAEgCAAgGQAAgHgGgCQgGgDgJgCQgJgBgIgEQgIgDgGgFQgEgGgBgLQAAgQAMgKQAMgJAWAAQAMAAAKADQALACAGADIAAAaIgXAAIAAgPIgGgCIgJAAQgHAAgEADQgEADAAAFQAAAEACACQAEADAEABIALACQAIACAJADQAIADAGAGQAFAGAAAMQAAAQgMAJQgMAKgWAAQgNAAgLgDg");
	this.shape_1.setTransform(66.7,17.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E6B").s().p("AgMA8QgIgIAAgTIAAgzIgNAAIAAgRIAHAAQAGgCAEgDQADgDACgGIACgSIAXAAIAAAeIATAAIAAATIgUAAIAAAzQAAAIADADQADADAGAAIAFgBIAEgBIAAAUIgJACIgLABQgSAAgIgIg");
	this.shape_2.setTransform(58.75,16.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E6B").s().p("AgbBJIAAgSIAHAAIADgBIABgFIAAgyQAAgFgBgCQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIgGAAIAAgTIAVAAIANgBIALgCIAABQIABAFIACABIAIAAIAAASgAgNgpQgGgFABgIQgBgIAGgFQAFgGAIABQAJgBAFAGQAGAFAAAIQAAAIgGAFQgFAFgJABQgIgBgFgFg");
	this.shape_3.setTransform(52.85,15.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E6B").s().p("AgZAzIgSgFIAAgbIAYAAIAAAQIAHACIAJAAQAHAAAFgDQAEgCAAgGQAAgHgGgCQgGgDgJgCQgJgBgIgEQgIgDgGgFQgEgGgBgLQAAgQAMgKQAMgJAWAAQAMAAAKADQALACAGADIAAAaIgXAAIAAgPIgGgCIgJAAQgHAAgEADQgEADAAAFQAAAEACACQAEADAEABIALACQAIACAJADQAIADAGAGQAFAGAAAMQAAAQgMAJQgMAKgWAAQgNAAgLgDg");
	this.shape_4.setTransform(45.55,17.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003E6B").s().p("AgbBJIAAgSIAHAAIADgBIABgFIAAgyQAAgFgBgCQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgHAAIAAgTIAUAAIAOgBIALgCIAABQIAAAFIADABIAHAAIAAASgAgNgpQgGgFABgIQgBgIAGgFQAFgGAIABQAJgBAGAGQAFAFAAAIQAAAIgFAFQgGAFgJABQgIgBgFgFg");
	this.shape_5.setTransform(38.2,15.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E6B").s().p("AgMA0IgihOIgDgFIgEgBIgGAAIAAgTIA7AAIAAATIgHAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQgBABABAEIAEALIAHAQIAGARIAIgTIAHgPIAEgKQABgDgBgCQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgHAAIAAgTIAvAAIAAATIgGAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAQgCABgBAEIgiBOg");
	this.shape_6.setTransform(29.725,17.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003E6B").s().p("AgnBBQgLgGgFgNQgGgMAAgQQAAgQAGgMQAGgMAKgGQAKgHANAAQANAAAHAEQAIAFAFAJIAAgbIgBgFQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAIgIAAIAAgSIAUAAIAQgBIAKgBIAAB0QAAAEABABIADABIAGAAIAAASIgpAAIgBgHIgBgLQgDAKgJAFQgHAGgOAAQgOAAgKgHgAgTgGQgGAGAAAQIAAAEQAAAQAGAHQAGAIAKAAQAIAAAFgIQAGgHABgQIAAgEQgBgQgGgGQgFgIgIAAIgCAAQgIAAgGAIg");
	this.shape_7.setTransform(13.65,15.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E6B").s().p("AgbBHIAAgTIAIAAIACgBQABgBAAgEIAAhYIgBgGQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAIgJAAIAAgTIAWAAIAOAAIAKgCIAAB0QAAAEABABIADABIAGAAIAAATg");
	this.shape_8.setTransform(4.65,15.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003E6B").s().p("AgbBJIAAgSIAHAAIADgBIABgFIAAgyQAAgFgBgCQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgHAAIAAgTIAUAAIAOgBIALgCIAABQIAAAFIADABIAHAAIAAASgAgNgpQgGgFABgIQgBgIAGgFQAFgGAIABQAJgBAGAGQAFAFAAAIQAAAIgFAFQgGAFgJABQgIgBgFgFg");
	this.shape_9.setTransform(-0.95,15.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003E6B").s().p("AAHBHIAAgTIAGAAIADgBQABgBAAgEIAAgoQAAgJgEgEQgDgFgHABQgIgBgFAHQgEAGAAAPIAAAeQAAAEAAABQABAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIAGAAIAAATIg3AAIAAgTIAHAAIADgBQAAgBAAgEIAAhYIAAgGQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgIAAIAAgTIAVAAIAPAAIALgCIAAA3QAFgKAHgEQAIgFAMAAQAQAAAJAKQAJAKgBATIAAApQAAAEABABIAEABIAHAAIAAATg");
	this.shape_10.setTransform(-9.8,15.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003E6B").s().p("AglAoQgOgOAAgaQAAgZAPgOQAPgOAaAAQAXAAAMAJQAMAJAAARQAAALgFAGQgGAFgKABQgIgBgFgEQgFgEAAgHQAAgGAEgFQADgEAHgCQgCgDgFgCQgEgCgHAAQgMAAgHAIQgGAIAAARIAAADQAAAQAGAIQAGAIAMAAQAJAAAHgEQAGgFADgJIATAKQgFANgLAIQgLAIgUAAQgbAAgPgOg");
	this.shape_11.setTransform(-20.875,17.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003E6B").s().p("AgbALIAAgVIA3AAIAAAVg");
	this.shape_12.setTransform(-29.025,17.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003E6B").s().p("AgbBHIAAgTIAHAAIADgBQACgBAAgEIAAhYIgCgGQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgIAAIAAgTIAWAAIANAAIALgCIAAB0QAAAEABABIADABIAHAAIAAATg");
	this.shape_13.setTransform(-34.75,15.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003E6B").s().p("AgbBHIAAgTIAIAAIACgBQABgBAAgEIAAhYIgBgGQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAIgJAAIAAgTIAWAAIANAAIALgCIAAB0QAAAEABABIADABIAGAAIAAATg");
	this.shape_14.setTransform(-40.35,15.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003E6B").s().p("AgbAvQgNgHgGgMQgGgMAAgQQAAgPAHgNQAGgMANgGQAMgHAQAAQAZAAANAPQANAOAAAaIAAAEIhFAAQAAANAHAIQAGAHAMAAQAKAAAGgFQAGgFADgIIASALQgDAIgHAGQgGAGgJAEQgKADgOAAQgRAAgNgHgAAUgJQgBgOgEgGQgEgGgJABQgIgBgGAHQgFAGAAANIAlAAIAAAAg");
	this.shape_15.setTransform(-48.4,17.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003E6B").s().p("AAdBGIgdhUIgdBUIgaAAIgkhxIgDgGQAAAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgHAAIAAgTIA+AAIAAATIgIAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQgBACABAEIAVBBIAWhCIAAgFIgDgBIgJAAIAAgTIA9AAIAAATIgJAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAABIAYBCIAUhBQABgEgBgCQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgKAAIAAgTIAzAAIAAATIgIAAQgDAAgCABIgCAGIgkBxg");
	this.shape_16.setTransform(-64.25,15.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2type, new cjs.Rectangle(-152.5,0,305,61.3), null);


(lib.HEAD1type = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003E6B").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAFgFAIgBQAJABAGAFQAFAGAAAHQAAAIgFAGQgGAGgJgBQgIABgFgGg");
	this.shape.setTransform(80.625,20.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E6B").s().p("AgZAzIgSgFIAAgbIAYAAIAAAQIAHACIAJAAQAHAAAEgDQAFgCAAgGQAAgHgGgCQgGgDgJgCQgJgBgIgEQgIgDgFgFQgGgGAAgLQAAgQAMgKQAMgJAVAAQANAAALADQAKACAGADIAAAaIgYAAIAAgPIgGgCIgHAAQgIAAgEADQgEADAAAFQAAAEADACQADADAFABIAKACQAIACAJADQAIADAGAGQAFAGAAAMQAAAQgMAJQgNAKgVAAQgNAAgLgDg");
	this.shape_1.setTransform(73.95,17.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003E6B").s().p("Ag8BHIAAgTIAHAAIACgBQABgBAAgEIAAhXIAAgGQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgIAAIAAgTIAVAAIAPgBIAKgBIAAAVQAEgKAJgGQAIgGANAAQANAAAKAHQAKAHAFAMQAFAMABAQQgBAQgGAMQgFAMgKAHQgLAHgNAAQgMAAgIgGQgHgFgFgJIAAAcQAAAEABABQABAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIAIAAIAAATgAgJgpQgFAIgBAQIAAADQABAPAFAIQAGAHAIAAQAKAAAFgHQAGgIAAgPIAAgDQAAgQgGgIQgFgHgKAAQgIAAgGAHg");
	this.shape_2.setTransform(63.2,19.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003E6B").s().p("AgqArQgJgJAAgUIAAgpIgBgFIgCgBIgHAAIAAgTIAuAAIAABBQAAAKADAEQAEAEAHAAQAHAAAFgHQAFgGAAgNIAAggIgCgFIgDgBIgJAAIAAgTIAwAAIAABMIABAGQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABAAIAJAAIAAATIgWAAIgPAAIgKACIAAgSQgGAKgIAEQgHAFgMAAQgRAAgIgKg");
	this.shape_3.setTransform(51.15,17.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003E6B").s().p("AAGBHIAAgTIAFAAQABAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAIgBgEIgNgVIgOANIAAAHQAAAEABABQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAIAGAAIAAATIg4AAIAAgTIAHAAIADgBQABgBAAgEIAAhYIgBgGQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgIAAIAAgTIAWAAIAOAAIALgCIAABZIAbgaQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgKAAIAAgTIA5AAIAAATIgHAAIgGABIgEADIgRANIAbArIACADIADABIAGAAIAAATg");
	this.shape_4.setTransform(39.2,15.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003E6B").s().p("AglAoQgOgOAAgaQAAgZAPgOQAPgOAaAAQAXAAAMAJQAMAJAAARQAAALgFAGQgGAFgKABQgIgBgFgEQgFgEAAgHQAAgGAEgFQADgEAHgCQgCgDgFgCQgEgCgHAAQgMAAgHAIQgGAIAAARIAAADQAAAQAGAIQAGAIAMAAQAJAAAHgEQAGgFADgJIATAKQgFANgLAIQgLAIgUAAQgbAAgPgOg");
	this.shape_5.setTransform(28.175,17.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003E6B").s().p("AgbAvQgNgHgGgMQgGgMAAgQQAAgPAGgNQAIgMAMgGQAMgHAQAAQAZAAANAPQANAOAAAaIAAAEIhFAAQAAANAGAIQAHAHAMAAQAKAAAGgFQAGgFADgIIASALQgDAIgHAGQgGAGgJAEQgKADgNAAQgSAAgNgHgAAUgJQgBgOgEgGQgFgGgIABQgIgBgGAHQgEAGgBANIAlAAIAAAAg");
	this.shape_6.setTransform(17.65,17.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003E6B").s().p("AAHBHIAAgTIAGAAIADgBQABgBAAgEIAAgoQAAgJgDgEQgEgFgHABQgIgBgFAHQgFAGABAPIAAAeQAAAEABABQAAAAAAABQAAAAAAAAQABAAAAAAQABAAAAAAIAHAAIAAATIg4AAIAAgTIAGAAIAEgBQABgBAAgEIAAhYIgBgGQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIgHAAIAAgTIAVAAIAPAAIALgCIAAA3QAFgKAHgEQAIgFAMAAQAQAAAJAKQAIAKAAATIAAApQAAAEABABIAEABIAGAAIAAATg");
	this.shape_7.setTransform(6.3,15.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003E6B").s().p("AglAoQgOgOAAgaQAAgZAPgOQAPgOAaAAQAXAAAMAJQAMAJAAARQAAALgFAGQgGAFgKABQgIgBgFgEQgFgEAAgHQAAgGAEgFQADgEAHgCQgCgDgFgCQgEgCgHAAQgMAAgHAIQgGAIAAARIAAADQAAAQAGAIQAGAIAMAAQAJAAAHgEQAGgFADgJIATAKQgFANgLAIQgLAIgUAAQgbAAgPgOg");
	this.shape_8.setTransform(-4.775,17.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003E6B").s().p("AgbBHIAAgTIAHAAIAEgBQABgBAAgEIAAhYIgBgGQgBAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgIAAIAAgTIAWAAIANAAIALgCIAAB0QAAAEABABIADABIAHAAIAAATg");
	this.shape_9.setTransform(-17.1,15.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003E6B").s().p("AgvAuQgIgHAAgMQAAgOAJgHQAJgHAPgEQAPgEASgDIAAgFQAAgKgFgEQgEgEgJAAIgGAAIgFABIACAFIABAFQgBAHgEAFQgGAEgHAAQgJAAgFgEQgFgFAAgIQAAgKAGgGQAHgGALgDQALgDAPAAQAZAAALAIQAMAIgBATIAAAtIABAEQAAABABAAQAAAAAAAAQAAABABAAQAAAAABAAIAHAAIAAASIglAAIgFgHIgDgJQgDAFgFAFQgEAEgHADQgIACgIAAQgPAAgIgIgAgNAIQgJAEAAAJQAAAGADADQAEAEAFAAQAKAAAFgHQAGgHAAgLIAAgIQgOACgKAFg");
	this.shape_10.setTransform(-25.275,17.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003E6B").s().p("AgqArQgJgJABgUIAAgpIgBgFIgDgBIgIAAIAAgTIAvAAIAABBQAAAKADAEQAEAEAHAAQAHAAAFgHQAEgGAAgNIAAggIgBgFIgCgBIgJAAIAAgTIAvAAIAABMIABAGQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIAIAAIAAATIgVAAIgPAAIgLACIAAgSQgFAKgHAEQgIAFgMAAQgQAAgJgKg");
	this.shape_11.setTransform(-37,17.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003E6B").s().p("AAGA1IAAgTIAGAAIADgBQABgBAAgEIAAgnQAAgKgDgEQgEgFgHAAQgIAAgFAHQgEAHgBAOIAAAeQAAAEABABIADABIAHAAIAAATIg4AAIAAgTIAHAAIADgBQABgBAAgEIAAgzIgBgGQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgHAAIAAgTIAUAAIAPgBIAKgBIAAATQAFgKAJgFQAHgFAMAAQARAAAIAKQAJAKAAAUIAAAoQAAAEABABIADABIAHAAIAAATg");
	this.shape_12.setTransform(-48.975,17.325);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003E6B").s().p("AAGA1IAAgTIAGAAIADgBQABgBAAgEIAAgnQAAgKgDgEQgEgFgHAAQgIAAgFAHQgEAHgBAOIAAAeQAAAEABABIADABIAHAAIAAATIg4AAIAAgTIAHAAIADgBQABgBAAgEIAAgzIgBgGQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgHAAIAAgTIAUAAIAPgBIAKgBIAAATQAFgKAJgFQAHgFAMAAQARAAAIAKQAJAKAAAUIAAAoQAAAEABABIADABIAHAAIAAATg");
	this.shape_13.setTransform(-61.125,17.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003E6B").s().p("AALBGIAAgSIAHAAQABAAABgBQABAAAAAAQABAAAAAAQABgBAAAAQABgBgCgEIgHgUIgrAAIgIAUQgBAEABABQABAAAAABQAAAAABAAQAAAAABAAQAAABABAAIAJAAIAAASIg0AAIAAgSIAJAAQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIADgFIAshyIAhAAIArByQABAEACABQABAAAAABQABAAAAAAQABAAAAAAQABABABAAIAHAAIAAASgAAKAHIgQguIgRAuIAhAAg");
	this.shape_14.setTransform(-74.725,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1type, new cjs.Rectangle(-152.5,0,305,61.3), null);


(lib.CO_v_color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cor-v-rgb.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003C71").s().p("AgtAwQgUgTAAgdQAAgbATgTQATgTAbAAQAcAAATAUQATATAAAbQAAAbgTATQgTATgcAAQgaAAgTgSgAgqgpQgSARAAAYQAAAaASARQASARAYAAQAZAAASgRQARgRAAgZQAAgZgRgRQgSgSgZAAQgZAAgRASgAAQApQgCgEgBgHIgCgNQgCgIgFgDQgDgCgIAAIgFAAIAAAlIgPAAIAAhSIAbAAQAMAAAGACQAOAFAAAOQAAAPgRAFQAFACACADQADAEACAIQACAQAEAIgAgMgHIAMAAQARAAAAgLQAAgIgGgCQgDgCgLAAIgJAAg");
	this.shape.setTransform(133.7965,88.2038,0.5531,0.5531);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF8200").s().p("ACVJ6QgIgDgMACQgOACgHAAQAAgCgJgCIgMgBQgQABgGgCQAAgCgQABQggAAAAgBIgSgCIgRgCIgQgBQAAgBgPABQgPABAAgDIgMgEQgJgCAAAGQgCAAgEgDQgFgDgCAAQAAAFgIgBIgMgCQgMgCgJABQgPADgWgKIgIgEQgDgBgFABQgBAAgIgEQgHgEAAgBIgVABIgMACQgCAAgEgEQgDgEgCgBIAAAEQgEAAgEgCQgFgCAAgEQgCAGgBAAQAAgDgHgDQgIgCgEAAIgBABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgCABgFgDQgEgDgDABQgEABAAgEIgHgFQgGgEAAAEQgCAAgLgEQgLgFAAgCIgSgJIgBACQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgDABQABADgPgGQgCgCgEAAIgBgEIgCgDIAAAFIgEgDQgFgDAAADIgIgHIgMgCQAAgCgMgFQgMgFAAgCQgJgEgDgJQAAgCgJgBIgMgCIgSgJIAAABIgFgCIAAgCQgEAAgMgJQgKgHgDgHIgJgDIgDgEQAAgCgFAAIgDgFIgBgHQgEgBgCABQgCADgCAAQgBgKgRAAIgNgBIgXgCQgQAFgHgCQAAgBgVgBQgYAAgCgBQAAACgIgCIgMgCQgKAEgDgDQgHgEgGAAQAAACgFgBIgHAAQgDAAgEgCQgEgCgEAAIgNABQAAABgMgEQgGAAgEgGQgCgBgLABIgLAAQgEABgZgCQgZgDAAgBQgKgFgHAAIgUgDQgCgDgZgGQgYgGAAgBQgCAAgDgCQgDgCgDAAQgMADAAgEQgJgEgMAAQAAgEgJgBQgMgBgBgBQgLgEgEgEQgGgFgOgCIgWgEQgDgDgDABIgGACIgFgDIgGgCQAAgDgIgBQgJgBgBgEIAIgCQgBgDgLgFQgKgEAAACIgRgIQgEAAgIgFIgKgGQgNgGgJAAIATATQAAADAGAGQAHAGAAADQADABAGAHQAFAFADABQAKADADAGQAFAAANAHIAHAEIAGAFQAEAAAGADQAGADADAAIAEACQABAAABAAQAAABABAAQAAAAAAAAQABABAAAAIAFACIAEADQACAFAUAEQATADAAADIAVAJQAEAAAFADQAFADADAAIAkAJQACAAAHAEQAHAEADgBQADgBAIADQAKAEADAAQAAgBAPAEIASAEQAEAAAIACIAMADIAbAEQAAAFBFAFQACADAgADQAfADAAABIBHAGQADgBAgAEQAfADAAgBQAHAAAAABQgGAAgKAFIgRAGIgLgBQgKgCAAACQgGADgFgCQAAAGgRABQgSAAAAgDQgPADAAgDQgIAFAAgEIgKgBQgDgBgDgGQgCABgCACQgBABgFAAIgMgBQgVgCgDgBIgEgFIgIABIgLgDQgJgDAAADIgPgCQgBgFgEAAIgIAFQgEACgFgBQAAgDgKgBQgJgCgDABQAAACgUgEIgYgEQAAgCgNgBQgNgBgCgDQgGAAgKgDQgKgDgGgBQgBgCgMAAQgMgBAAgCQgGAAgHgCIgYgHQgMgDAAgBIgMgCQgJgCAAgCQgHAAgNgFQgFAAAAgCQgKAAAPAJQACADAGABQAFACADADIAJACQAAADAKAAIAHADIAJACQAAADAXADQAXAEABAHIgJACQAAgDgVgDQgWgDgCgCQgqgMAAgEIgWgHQgSgHAAgBQgZgGgIgKIgIgEQgHgEAAABQgCAAgHgFQgGgEAAgCQgKAAgNgHQgQgHgCgJQgNgJgFAAIgIgHQgEgFgDgBIgGgIIgHgDQgFgDAAgDQgGgDgGgHQgHgIgCgGQgDAAgEgHQgEgGAAgCQgCAAgDgIQgEgJgDAAQAAgDgDgGQgDgFAAgEQgCAAgEgRIgFgWIgGggQgGggAEAAIgEgSQgDAAAAgWQgDAAAAgMQgBgMgBgBIgIhLIgBgdQAAgZACAAIgBggQgBgcADAAIgCgtQgCgnAFgDQAAgEAJgWQAKgXgBgEQAIAAAFgMQAHgOAFgCQACgBACgFQADgEACgCQAAgFAGgFQAGgFAGgBIgCgEQgBAAAAAAQAAgBAAAAQABAAAAgBQABAAABgBQAFgBAAgDIAGgGIAFgEIAEgDQAEABAEgCQAKgIgHAAQgBgFAFgEQAEgEAEAAIAHgDIAIgCQAJgEAIgIIAPgPIAIgHIAFgDIACgEQABAAANgJQAAgBALgGQAMgFAAgDQAEAAAIgGQAIgGABgDQAFgCAHgGQAHgEAHAAIAKgFIAIABQAFACACgDIAUgDQANgEAAgIQADgBACgEIACgEIAFgEIAEgEIgBAAQAAgFAGACIAJACIAPgCIAHgEIAJgEIAIgEQAGgEACAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIAEgCIAJgCQAGgCAAgDQgGAAAGgGQAGgGADgBIAMgGQAFAAAFgDQAAgDAGgBQAGgCAAgDQAFAAAAACQADAAADgCIAHgCIAIACQAGABACgCQADgBAJgFQAJgFADAAQAAgCAKgDIAMgDQAAgBAHAAQAGAAAAgBQAJAAABgCQACgBAAgGIAFgCIAEgEIAIABIgCAFQADAAAEgEQAAABAAgBQgBAAAAAAQAAAAAAgBQAAgBAAgBQAdAAAGgCQAFgBANADQAKgEgEAAQgDgJARgFQARgGAAAFQALgHAWAAQACgDAIAAQAIAAACgDIAVgDQARgEAAgBIACABIApgJIALAAQAIgBAAgDIAHgBIAGgCIAdgGIAqgHQANAAAdgEQAcgFAPAAQAAgEAigBQAfgBAHABQAAABAGABQAGACAAACQgHAFgVgCIgPAAIgPABQgIAAgQADQgPADgJAAQAAgChOARQAAAFAngFIAsgFIApgFIAYgDQAQgCAIACQAAgBAJAAQAJABABAGQAQAAAAABIAGABQAAAAABAAQAAABAAAAQAAAAAAABQABABAAAAIgHAAQAAADgxACQAAABghAEIgRAAQgQABAAACIgsAHIgiADQAAACgLACQgKACgEAAQgHgBgOAEQgOAEgHAAIgKACQgLACAAABQgDAAgGAEQgGAEgDAAIgQAAQAAACgOACQgOACgBADQgCAJgKADQgNABgHACQAAACgSAGQgEAIgIAFQACAIAeAAQAcABAHgEQADgBAWgEQAVgDAAgCIALgCIALgCQAAgBAGABIAGABQASgDAFAAQAAgBAZgEIAagEIAPgBQAMgCAAgBQAOAAAZgDQAAgCAigCQAjgCAFABQBGgGAAACQALgCAUACIAagBQAQgBAKACQAAACAIACQAJACAAgBIAGAAIAHAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAgBQACAAAJACQAKACAAACQgEABgTABIgTAAIgiABQgCADgUAFQgTAEAAACIgPgBQgNgBAAACIgUAAQAAAEgWABIgbAAQAAACghACQgiABAAAHQAPADAUgDIAjgFQAAABAggBIAhgBQAEAAAKgCQADAAAEACQAEACAEAAIAOAAQAJAAgEAGQgEAHgfACIgdACIgqADQgjACAAACIgSACQgQABAAgBQgGgBgIACIgNADIgPACQgCACgGAAIgJgBQgEABgIAFQgIAGgFAAQAAAEgbAEQAAABgGACQgHADAAABIgRADIgJACQgKABgBACQgOAAgMAKIgOAHIgPAGQAAgCgZAKQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIgGADIAEAAQgBADgLACIAAgDIgHABIgFADQAIAHgRAEQgVADAAACIgRAGIgQAFQAAgCgrAPIgPAFQgPAGgDACQgRAAgCADQgEABgHAEQgFADgEAAQgGAAgFAEQgFAGgEAAQgCgDgFACIgHADIgJAFQgEACgFAAQgBACgKACIgLACQAAAEgJACIgMADQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQgCACgDAAQgEAAgCADQgCAEgDACIgDACQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBgCgFgBQgFgBAAADQgEAAgCAFQgCAGgCABQAAADgIAAQgNAIgCAAQAAABgKADQgKACAAADIgLAGQgHAEAAADIgJAFQgFADgEABQgIAFgDAAIgRAIQgDADgFAAIgPALQAAADgHAEQgHAEAAADQgFADgNACQgBAEgDABIgGAEQgFAAgDAGQgDAHgEABIgKAGQgHAFgDAAQAAAFgGADQgHAEgBAEQgSALgJAKQgEAAgEAGIgIAIQgFAIgFADQAAACgFACQgEACAAADQgCAAgGAIQgGAIgCAAIAAACQgEAAgFAGIgGAJIgHAHIgHAJQgCAGgKAMQgIAJgBAJQADAAAFgGIAJgJQAFgJAEAAQAAgDAGgEQAGgFAAgCQgBAAAJgIIAJgIQAGAAAEgIQADgIADAAIAGgGQAFgEACAAQACgDAGgEIAJgHQAAgCAEgDQAEgEADgBIASgOQADgHASgFQABgCAIgEQAHgEAAgBQAAgDAFgCIAHgEQACAAASgMQADAAAFgEQAGgEACAAQAAgBAOgJIAQgIIAUgJQARgIAAgDQAIgCABgBQADgBABgCQACgCACgBIADgBIAEgCQADgBAJgGIAFgEIAEgCQAAADALgFQAKgFACgCIAGgCQAEgCAAgBQAHAAAMgIQAMgIAHAAQADgEAIgBQAIgCACgDQAEAAAFgDQAFgEADAAQAFgFAHAAIAIgGIAGAAIAFgBIAQgHQAAgBAGgBIAGgCQACgDAKgBQAJgBABgBIAHgEQAHgDAAgCIAOgDQAAgCAKgDIAMgCQAAgFALgBQANgBABgCIAlgKQAegJAAgEQAEAAAPgFQAQgFAAgBIAMgCQAKgCAAgDQAtgGAAgDQAJAAAPgFQARgFAGgBQAAgCAWgEIAYgFQAAgBAagFIAegGQAHgCAMgBQAAAAAAAAQAAAAABAAQAAgBABAAQABAAABAAIAGgBIARgEQALgDAHABQAAAHgUAFIgbAEIgIACQgGACAAABQgDAAgHAFQgGAFgFgBQAAAAAAgBQAAAAAAAAQAAAAgBgBQgBAAAAAAQAAADgXAHQgIAHgFAAQgDADgFABIgLACQgfALgSADIgEACQgDADAAACQgFAAAFADQABABABAAQAAABABAAQAAAAABgBQAAAAAAgBQAVAAAAgEQAcAAgPAFIgGAEIgGAEQgCACgFgCQgFgCgBAGQgIgBgIADQgIAEgIAAQgEAAgGAEQgGAEgDAAQAAADAFAAIAMgEQAAAKgiAFQgBACgGABQgDACgDgBQgEAAgDABIgHADIgHADQgDAEgSACQgJAAgCAFQgDAAgEACQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgFgBIgEAEIgIAEQgMADAAADQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAIABACQgHAEgFgCQAAAGgJAAIgMAAQAGAFgHADQgEABgGAAQAAgCgOAJQgDAFgOAAQAAgDgFACIgEADQAAgBAAAAQgBAAAAAAQgBAAAAABQgBABgBABIgEAGIgFgBQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAQgFADgHgBIgOACQgMADAAACQgDAAgEAEQgEAEgDAAIgYAIQAAABgBAAQAAAAAAABQAAAAAAAAQgBABAAAAIgCACQgEAAgCACQgDACgCAAQAAACgEACIgGABQgEAAgDADQgEAEgDABIgGADIgEADQAAAFgJACIgNABQAAABgFACIgGADQgDABgGAHQgEAHgGgCQgGgBgIAIQgPAEgBACQgGABAAAGIgJgBQABABAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAIgFAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABABABQAAAFgJAAQgCgCgFADIgJAEQgNAFgJAKQgIABgHAEIgOAIQAAADgKAGQgMAGgBAEIgIAEQgGACAAAEIgKAEIgGACQgBAAAAAAQgBABAAAAQgBAAAAABQgBABAAAAIgCADIgDACIgFAEIgEAEQgCAAgCADQgDADgCAAQgHACgDADIgMANQgHAIgIADQAAAFgMAIQgNAJAAAGQgEACANAKQANALgBADQgEAAgFAJQgFAJAAAGQgDAAAOALQANALAAgEQAFAAAHAGQAIAHAAAFQABAEAIACQAKACACABIAKAIQAFABALAFQAJAFAGAAQAAAGAmAAIAJAHQAEADAFAAQAAABAIABQAHAAABACIALAAQAFAAAFADIAHAEIAFAEQAKAFAGgBIATgEIAGADQgCADACACQACABAMgBQALAAABAEIARAAIAIACIAIAAQAAgCANADIARADQADgEAFAAIAJAAQABACAHAAQAGAAACADIAFAJQADAHADgBIABAAIACgCIABgMQAAgEAFAAIAJAAQAAABAdABQAAgCAJADIAKADQAAgEAJgCQAJgBAAAGIAqgFIgBgCQACgCgDgOQgCgNABAAIgFgMQgEgKABAAIAAgGQgBgFgCAAIgBgSIABgPQABgMACAAIAAgDQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBABAAQACAAACgKIABgNQACAAACgGIACgJQAAgEADgGQADgGAAgFIAIgbQABgFAGgKQAEgJAAgFQAEgCACgGQACgHADgCIAEgFIACgGQAKgLgBAAQAFgFADgGQgBgFADAAQAAgCAFgFQAFgFAAgCQACgBAFgGQAEgGABAAQAAgCAFgEIAHgFQACAAADgEQADgDAAgCQANgGAMgMIAFgCQAAAAABAAQAAAAABAAQAAABAAAAQAAABABABIgQALQgEADgFAGQgEAHgBAEQAFAAADgDIAGgHQANgGAAgBQAHgBAMgJQAKgIAJgBIAHAAQADgBADgCQAAgBAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAABgBQAAAAABgBQABAAABAAQAAgDAIgHIALgIQAFgBADgDQAEABADAAIAGgCQABAAABAAQAAAAABgBQAAAAAAAAQABgBAAgBIAHgFQAGgFAAACQAFACAAgKQAGgBAEgDQADgCAIgCQAAgDACgCQACgDACAAQAAgBAKgGIAMgHIACgEQABgCADgBIAGgBIAGgFIAEgBIAFgCQADgDAGgDQAIgDACgCQAEgEADACIAEACQADAGgNAHIgQAIQAAABgRAIQgRAKgCAHQgEABgHAGQgHAFgFABQAAAIgLABIgKAIQgGAFgCAEQgGACgHAHQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAQgDACgEAAQgFACgCAFQgIAFgBAHIgOAOIgOAKQgJAHAAAGQgLAGABALIgDAEIgCAFQgDACgBAJQgCAAgJAJQgIAIAAgDQgCAAgBAHQgBAFgHAAIgDAFIgFADIAAAKIgGAJQgDAFgBAEIgMAJIgDALIgFADQgBABABAFQgBAAgDAGIgEAJQgCABgFAGIgFAGQAAARgIADQgFADAAAIIAAALQgDAAgBAXQgBAWABAAQABgIAHgLQAJgOABgGQADAAAEgGQAEgHAAgCIAJgSQADgBAEgHQADgGAEAAQADgOALgCQgDgIAMgGQAMgNgBAAQABgEAIgHQAIgHAAgEQAFgCAEgHQAFgIAEgCQAAgDAKgIIANgJQAAgDAKgGQAJgGAAgCQAFgEAMgLIANgMQAEAAADgEQADgFADAAQABgEAHgFQAGgEAEgBQABgDAFgDQAFgEACgCQAGAAALgLQAKgKAGAAIAJgHQAHgEAAgCQABAAAAAAQABgBAAAAQABAAAAgBQAAAAABgBQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAHgBgBgFIAFAAQAAgBAPgIIATgJQAAgDAQgJQAQgJAFAAQAGgKASgFQAAgBAJgEIAKgDIATgJQARgIAAgBIAEgEQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABgBIAGAAQAAgCAHgCIAHgCQADgDAHAEQACgJAFAAQAFgFAHAAQAAgCAGgCIAJgCQAEgGAXgGQABgBAFgCQAFgBACgCIAFgCIAHgCQAAgCAFgBQAFgBAAgBIADADIAbgOQAAgBALgCQAKgDAAgBQAUgGAAgBIAJAAQAGgBACgDIAJgEQAHgDAAgBQABAAACAFQAAgDAHgEQAGgDAFAAIAUgHQAPAJgEgGIgCgDQgBAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgCApgIQACgDAVgEQAUgEAAgBIAHgCIAGgCQAAgDAQgBQARgBABgCQACAAADgDQADgCADAAQAAgCAJAAQAjgHADABQAAgCAqgHQAHABALgDIATgFQAUgFAIAAIA8gJIAbgEQARgDAKAAIgCgEIAJAEQAHADAAgGIASgBQA3gGAAACQADAAAXgEQA6AAAAgDIBZgBQAAgCAlAEQAnADAEgBIAJAAQACAEAEgBIAHgCQACAGgDAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQAAABAAAAQgFADgLAAQAAAAgBgBQAAAAAAAAQgBAAgBAAQAAAAgBAAIgFABQgDABgDgCIgFgCQgLAHAAgEQgLACgLgCQAAgCgKABQgLABAAACQgKgBgJABQgCAFgGgCIgIgDQAAADgKAAIgGgDQgEgDgBABQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAIgEABQgDADgFABQgDAAAAAGQgKAAgCAHQgCAIALAAQACACAIABQAJABADACQAAgEAGACIAJADQAAgEAMACQAHABgCABIgFADQgCADgIgBIgLgBQAAABgGAAQgGABAAAFQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAIgBADQgGAAgLACQgJADgGAAIglACQgDAEgKAAIgPAAIgoACQg3AHgHgBQAAAFgugBQAAACgGACIgJABIgLABQgKABAAABIgRACIgfACQAAABgTADIgWADQAAgCgJAGQgJAFAAACIAeAAIAXgEIASACQADAAAEgCIAIgBIANgDQALgCAAACQAFABAHgFIAMABQAAAFAJgHQAKAAAPgDQAAgCAIAAIAKAAQAFACAGgBQAFgBAEABQAAgDAQgDQAPgDAAAEIAVACQASABAAgBIAIABQAGAAAAADQgMAHgDgBQgFgBgJABQgJACAAACQAggDA7ACIAjADQAWADALAAQAiAAAyAJQAnAFAAAEQAwAIAAADIAHABQAEAAABgEQAHgCAFAAQAFAAAFACQAAABAHABQAGACAAACQARAAAYAMQANAQgBAAQAAAGAQAAIgKgJQgHgGAIAAQAGgBAIAFQAIAFAEAAQAmATAEAAQAAACANADQANADAAACQADAAAGADQAHADACAAQAAACAlAMIAWANQAQAJAAAHQADADAFACQAAADAJAGQAIAHAAADQAHALABAAQAAADAEAFQAEAFAAAEQABAAACAHIACAHQADAAAEASQAFARADAAIAHASQAFAKAAAJQABAAADALIACAOQACAAAGAVIAMAsIAGAYQAGAVgCAAIAEAqQABACgCAFIgCAHQgCAAAAAGIABAIQgCAAgDAHIgDAIQgCABgFAOIgFANQgBAEgFgBIgBAFQgBAAAAAAQAAABAAAAQgBABAAAAQAAABABAAQAAABgBAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgHABIABACQAAABAAAAQgBABAAAAQAAABgBAAQgBAAAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBABAAAAQgEABAAAGQgCAAgDAFQgBABAAAAQgBAAAAAAQgBAAAAgBQgBgBAAgBQgIACgEAEQgDAAgCAHQgBAHgDABQAAAGgFADQgFADgGgCQACALgIgCQgLgEgCAEIAAALQgCAAgDADIgCADQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAABAAAAQAAAAAAABIAAAFQAAABAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgIgBIgJAEQgDAAgCADQgCAAgBAFQAAABAAABQAAABAAAAQABABAAAAQAAAAABAAQgBAEgEADQgDACgFAAQAAgCgHgBIgKgBIgFACQgGACAAACQAAADgLACQgDABgJAEQgJAFAAADQgCAAgYAOQgEABgCAHQgCAFgHgCQAAACgCADIACAEIADAFQgHABgJgCQgKgDgEABIABAJQgBAFgEAAQgCgDgDACQgBABAAABQgBAAAAABQAAABAAAAQABAAAAAAQAEABAAADQgDACgNAAQgCAAgGgEQgGgEgFAFIgDAFQAAACgEAAQgIAHgDAAQgBAEgIAAIgOgBQAAAHgHACQgLADgCADQgDAGgCgCQgCgDgDAAQgBAAgBAAQgBAAAAAAQgBABAAAAQAAABAAAAQgBAAgBAAQgBABAAAAQgBAAAAAAQAAABAAAAIgBAFIgKABQgDAAgFAEQgDADgEgGQgDgBgCAEQgDAEAAADQgEAAgEADQgFADAAADIgGAAIgGABIgDAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIAAADQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIgEgBIgOADQgEAGgHABIgOACQAAAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAIgEABQgBACACAGQAAAEgMgEIgGAEQgGAEAAADIgJgBQgEAAgBAGIgJACQgFACgCgEIgMAIIgLAHQAAAFgPgDQgQgDAAAIIgFgCQgBgBgBAAQAAAAgBAAQAAAAgBABQAAAAAAABIgEAEQgDAEgBgBQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIgFAHQgEAEgEgBIgDAAIgFACQAAAAgBABQAAAAgBAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAIgFAEIgIADQgGADABABIAVAAQAOgBAGgDIAcgGQAWgEAAgCQADgBAEAGQAEAFAEgCQgBgCAPgDQACgEAXgDQAAgBAKgDIAKgDQASAAgBgGIAJgDQAGgBABAEIAOgFQAJgDAGABQgQAKgFABIglATQABgGgIABQgIACgDADIADADQgEAAgRAHQgTAHAAACQgPAAAAAFQgFABgEgBIgIgCQgBAIgGAAIgNgBQAAACgHAAQgIAAAAAEIgLAGQgHADgGAAQgTADAAACQgNACAAgDQgDgBgDABIgGACQgVAKAAgHQgCAAgEACQgEABgBACQgDAAgHADIgFACIgKACQgKACAAABQgEAAgFADQgFAEAJABQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAIADABQAAgCAPAAQAPgBAAgCQAFAAAIgCIANgEIAbgDIAggGIATgEQARgDAAABQAHAAALgEIAQgGQgBgCANgDIAPgEQADAAAPgIQAOgGADAFIghAPQgGABgKAFQgKAFgEAAQABAEgJABIgLACQgLAFgIACQAAgBgGADIgFAEQgCAEgDgEIgDgDQgDABgEADQgFADgCAAIgKADQgIABAAADQgEgBgGACQgGACgEAAQAAAIgLgLIgCAGQgDgEgIABQgIADgCAAIgFAHQgFABgDgDQgFgDgDAAQgBAFgFACIgKAEQgVAKgLgKIgOADQAAAHgNAAQAAACgLADQgKACgDgBQAAgDgIAAIgKAAQgCAGgBAAIgGgBQAAACgTgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAIgEgDQAAAEgIAAQAAgHgDAIIgCAEIgJADQAAgDgFABIgIACQgBABgPAAQgMAAgBACIgWAAQgEAAgHgCIgKgEQgHAGgHAAIgPgCQAAABgJACQgJACAAABIgOACQgLACgDgDIgMgBQgOAAgCgBQAAAFgFgBIgJgDQAAADgOABIgFAAQgJAAAAgDgACFJCQAAAAAAABQAAAAABAAQAAAAABAAQAAABABgBIAFgBIAagDQAWgCABAEQABAAAAAAQAAAAABgBQAAAAABAAQAAgBABgBQABgCADgBIADAAIAEAAQADgBAGAAIAIAAIANgFQAIgBAGADQABgFAEADIAEAEQADAAAEgFQAEgFADABIAHACIAGgDIAHgBIAGgCQAFgBABABIABAFQADgBADgEIAJgEIAQgEIAKgBQAGgBADgCIAGgDQAFgCACAAQgEgBgNAEIgSAFIgcADQgSACgPgBQgjAHgBgFIgMACQgKADgIgCQgJgCgMABIgeADIgRAAQgFABgBgEIgJACQgBgCgFgBQgHgCgCgBIgGACIgHABQgKgDgZgBIgXgBQgFAAgIgBIgMgCIgLAAIgJgBIgBABQgBABAAAAQAAAAgBAAQAAABAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBgDgEAAIgHgBQgIgCgWgBIgNgCIgDABIgDABQgLABgGgDQgEgEgGABIgLAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAgBAAIgGAAIgGgBIgHAAQgDAAgDgCIgGgDIgNgDQgIgBgEgEIgGgDQgBABgEAAIgJgBQgFgCgEABQgBgDgLgDIgNgBQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgCgCgDABQgGABgLgGQABACgQgIQgPgGAEgBQgCgBgFAAQgGABgDgCQgHgDAEgBIgQgGQgDAAgNACQgPADgNgBIAlAaQAPgBAKAEIAMAEQAIAAAKAEIALAFQAJADAAACIAGgCQADAAACADIAFAGIAJgCQAIAAABACIgCABIAQAFQAGADAJgBIAQAGIAIACIAIABQAPAEAfADQA5ALAxAEIAZABQAPABAKACIAdABQAEgBAJACIAPABIALgBQAHgBADACQAAAAABAAQAAAAAAAAQABAAAAAAQABgBABAAIABAAIACABgAFWHKQADACACAAIgBgHQAAgCAGgBQABACAHgBQAGgBABgBIANACQAKACAAgEQAEgGAHAEIAMAGQABAAABAAQABAAAAAAQABAAAAgBQAAAAAAgBQgBgDAEgCQAEgDACABQABAAADADQAGgHAPgBIAXABQAAgBAEgCIAGgDQAFAAAKABQAAgCAGAAIAHgBQACAGAEAAQAAgEAHgCQAGgBAAABIAQgDQAAgBABAAQAAAAABgBQAAAAABAAQABAAABAAQADAAABgDQAKgFAHADIAUgDIAEABQABABAAgBQABAAAAAAQAAgBABAAQAAgBAAgBQAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAAAQAEABACAAQAAgCANgDIAPgCQABgCANgFQALgEAEAAQADAAADgCQAEgDADAAQAAgCAGgBIAIAAQAGABAKgHQAFAAAKgFQAJgFAGAAQACgDAMgDQALgEAFAAQABgCAKgDQAKgDAAgBIATgHQADAAAEgCQADgDAEAAIAJgDIAGgDQADgCAEgBQABgCAFgCQAGgBACgCQADAAAIgDQAIgDABgCQAEAAAHgEIAJgHQAEAAAIgEQAIgFAFAAIAVgLQAAgBATgHQAUgIACgDQAEAAAIgFQAIgFAFAAQAEAAAGgFQAGgGADgBQADAAAGgFQAGgFACAAQADAAAGgDIAHgFIAFgEIAFgDQAAgBAFgCQAGgCAAgCQgGAAAFgCIAHgCQAAgDAIgBIAKAAQAAgCACgFQADgEgBgEIAPAAQAAgEAEgCIAGgEQAEgDAJgEQAAgFAKgFQALgFAAgDIANgEQAFgDADgIQAEgCAPgYQAJgFAHgJIACgEQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQADAAAFgJQAEgJAEAAQADgEAAgJQAFgCgCgDQABAAACgLQACgMACAAQAAgBgCgEIgDgGQAAAHgKAAIgHAKQAAADgGAFQgHAEAAADIgFAFIgFAIQgCAAgFAEIgIAFIgEACQgEACAAAEIgHADIgHADIADAAIgBADQABAAgEAEIgFAFQgDADgHAAQgHABgCABQAFAAgFAHQgEAGgDAAQgJAKgMACQgCAHgOAGIgCABQgBABgBAAQAAABAAAAQgBAAAAABQAAAAAAAAIgIABQgDABABAGIgOADQgLADAAAEIgNALQgDAAgFADQgGACgDgBQAAAFgMACQgEgFgEAFQgDAHgBAAQgBADgJAFIgKAFQgFACgHAEQgIAGABADQAAADgLADQgLACgDAAQAAAEgJABQgIACABADQAAABgXAEQAAALggAGQAAgEgNAGIgMAGQgDAAgIADQgHAEAAABQgDAAgHACQgGADgEAAQAAACgIADQgHAEgCgBIgCAFQAAAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAIgDADQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAIgGAEIgFgBQAAACgFABQgFABAAABQgDACgDgBQAAAAgBAAQgBAAAAABQgBAAAAAAQgBABAAAAQgDADgLAAIgHAFQAAABgKADIgLACQgMAGgDAAIgDABQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAIgVAJQgVAGgGADQAAADgKAAIgLAAQgCACgFACQgDABgBAEQgFACgDgBIAAAFIgOAAQAAAHgLgBQgDAAgKAEQgIAEgFgBQAAgBgFACIgGACQgCADgIgBIgKAAQgBABgFACIgGABIgZAHIgMAGQgFACgJAAQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAIgFAEIgJgCQAAAGgMABIgRAAIgHACQgEABgBADIgLgBQgZAKgCgBIgTACQgQACAAADIgaAEIgGACIgFACQgHAAgPACQgSADgDAEQABgBASAAQAAADAWAAQADgEAKABIAOACQAAgDANABIAMABQACAAACADgAnEGuQgCAEgCAAIAMAJQAIAGAEAAIACgDQABgBAAAAQAAgBAAAAQgBgBAAgBQgBAAgBgBQgBgDgFgDIgJgEIgDgCIgCABgAASGFQACADACABIAHABQAFABACgDIACgCQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAgBAHgBQAGgCAAgBQAfgBAAgEIAFABQABABAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAEgBAMADIAIgDQAGgCACADQACADAFgBQAEgBACgCQACgCAEACIAHACIgDgEIACgGIAJgBQAGAGAAgEQAMABAEgBQAFgBAGgGIALAAQAIABACgEQAFgDAQABQACgEAJAAIANABQAAgDAGABIAIADQAAABAJgGIAWAAQAAgHANAAQAAgCAogHQABAEALgBQALAAABgDIADgEQADgEADAEQABABAKAAQgBgHACgCQACgBAHABQABADAGgCIAKgDQACAAAEABIAGACIAIgEQAAgFALgCIAQgCQAHgDADgFQAEgDAOADIAAgFQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQACgDADgBQAEgBAIADQAAgCANgBIAQgBIgCgEIACgBQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABQAJgBAGgEIANgIQAUAAADgEQAMAAABgCQAFAAgDgFIAJgBIAEgGQAAgBABAAQAAgBABAAQAAgBAAAAQABABAAAAQACAAADgCQADgCACABQAAACAHAAQAGAAAAgCQAGAAAEgCQADgBAFgGIAKgBQACgEAEABQAFACACAAIAigNQgBgBAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQACgCAEAAQADADAFgCIAHgDQAAgBAGAAQAGgBAAgDIAGABQAHgDgDAAQgBgEANgDQAOgEAAgCQAHAAAGgDIAMgGQABgCAHABQAHABAAgEIADgDQABgBAEAAQADAAAHgDQAAgBAJgCQAJgCADAAQgBgEAEgDQAGgDABgDQAOABAAgDIAHAAQADABABgDIAJgHQAAgDAHgEQAGgEAEAAIAKAAQAAABARgLQAAgCAHgEQAGgEAAgBQAGAAAHgHQAHgHAEAAQAAADARgMQAGgFAKAAQASgMAAgBIAUgOQAKAAALgHQABgGAFAAQADgDAIgDQAIgDABgDQAFAAADgGQACgGADAAIAJgGQABgDAEgEIAGgFIAFgCQAFgBABgCQAAgEALgGQALgGgBgCQAUgXACgBIAHgNQAEgJgGgDQAAgCgHgDQgHgDgBgDQAAgCgEgCIgGgFQgDgBgFgGIgIgFIgOgHQgMgGAAgDQgFAAgIgEQgJgGgEAAQAAgBgIgFIgJgGIgLgGQgGgEgEAAQAAgBgHgCIgJgBQgTgHgCgDIgOgGIgKAAQgGABgDgBIgFgCIgGgBQgPgKgDAAIgQgFIgJgDQgCgEgFgBIgKgBIgugKQgFgGgUACQgPACgDgDQgDgEgGAAIgNABQgOABAAgCIgRgBQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAgBgBIgDgBQgGgGgHADIgMAFQgHAAgJgDIgPgHQAAAFgUgBQgUAAAAgIQAAgEgEgBQgDgCgFACQgCADgHgDQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAADgIgBQACAGABAEQAFAAADAbQABAYgBAIQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAAAIgBASQgCARgDAAQgBADADACIgHAOIgGAMQgEAHAAAGQgBAAgEANQgFANgGAAIAAAEQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIAAAEQgCAAgCAFQgBAGgDAAIABAEQAAAAgBABQAAAAAAAAQAAABgBAAQAAABgBAAIgEAEIgBAFQgEABAAAEQgBAAgFAHQgGAIgFABQgBADgHADQgHACAAAEIgDAIQAAABgEAEIgFAEQAEAJgQACQgBAFgHAEQgHAFgCADQgFAIgQAHQgCABgDAEIgEAFQgJAAgPAMQgTAPgEACIgMAEQgHAEAAAEQgDABgHAGQgGAEgFABQAAgBgFAEQgEAEABAAIgSAKIgKAEQgKACAAADQgIAAgQAMQgQALgLAAIgJADIgIAEIgIAHQgEAEgFAAQgbAJgEAAQAAACgIAFQgIAEAAgDQgEAAgGADIgJAGQgNABgFAGQgFAAgIAGQgIAFgEAAQgDAFgTAAQgBACgDACIgFADIgFABQgEAAgCgBIgFgDQgGgBgFADIgJAHQgBAFgMADIgKAEQgHAEgDAAQAAABgUAFIgZAGQAAACgXAHQgYAHgDADQgTADgbAKQgIADgLAAQAAAGgOAAQAAABgIADIgKADQAAgGgeAJQgEAAgFADIgJADIgLACIgNAFQgIAFgLACIgTAEIAEABIABAAIAPADQANABABgCQAYAAARADQAoAAAAAEQAFAAApgGQAHgDAHAEIALAGQAAgBAPgCIASgCIAOgBQADABACADgApoFwQgHgLABgBIAGAEIAAAAIgGgEIAAgDIgDgBQgfAEAAgDIgIgBIgHgCQAAgDgNACIgOACQgGAIASACQAUADAAABIASABQAQAAAAACIAQAAIAAAAgApjFsIADACIACgBQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAIgFAAIgCgBIgBAAgAnxFfQgDABAAAEIACAEIAEAEIAHgBQAFABgBgEQAAgDgDgDQgFgEgDAAgAlqFIIAHANIAEAEQAJAAAEACIADgBIAMgCQAIgCAEABIA7gKQAAgCATgDIAWgDQBGgRAHAAQAogLAEAAQAAgCATgDQAVgDABgEQAHAAAJgDIAPgEQAGAAAJgEQAKgEAFAAQACgDAagGQAXgGgBgGQAWgBAAgCQAIgCAQgFQAAgCAHgBQAIgCABgBIAFgCQAAAAABAAQAAgBABAAQAAgBAAAAQABgBAAAAIAFgBIAFABQAAgDAOgEQAMgEAFAAQABgDAJgCQAJgDAAgCQADAAAIgDQAIgDACgCQAFAAAJgEQAJgDAFgEQAEgDAOgEQABgCAMgEQAMgDAAgCQAKgDAOgJIANgEQAKgEACgEQACAAAIgEQAIgEAAgBQADAAAHgDIAKgHQAJAAAMgJQANgJAHgBQACgDASgJQASgIgBgDQgBgBAMgGQAMgGAAgBIAHgFQADgDAEgBQAJACAEgFIADgHQADgIAFAAQAAgBAFgDQAFgDAAgCQAFgBAHgGQAIgGAEgBQADAAABgEQACgFACgBIAIgFIAKgIQADgCAFgHQAFgGADgCQAAgEANgLIAMgQIAGgKQAGgIACAAQABgFAEgHQAFgHAAgDQACAAACgFQABgFABAAIACgGQABgGAAgCQgFAAgIANQgJAOgDACQAAAEgMAJIgJAJQgFAGgEACQAAAFgHAFQgHAGgBACQgBACgIAEQgGAEAAAEQgDABgDADQgCADgEABIgFAFQgDACgCAAIgGAEIgHACQAAACgEADQgEADgBADIgJAFQgHAFgBACQgCAAgIAGIgKAIQgJACgPAMQgNALgLACQgFAFgKAEQgKAEgHAAQAAABgNALQgEAAgGAFQgGAFgDAAQgCADgHABQgHABgDADIgGADIgFADQgCAAgEADIgEADQgCADgIABQgIAAgDAEQgDACgDAAQgCADgHABIgMACQgKgBgGACQgCABgDAGQgDAGgEABQgDAEgFgCQgGgDgCABQAAADgFADQAAAEgUAIIgYAJQgCAAgFADQgEADgDAAIgFACIgHABQgDAEgHACQgHACgFAAQAAACgMADQgMADAAADIgLABQgJACgCACQgFAAgDACIgGAFIgMACIgMACIgUAHQgBABgJACQgIACAAACIgZAGQgEAAgHADQgIADgEAAQgCACgMADQgMADAAABQgDAAgFACQgEADgDAAQgBACgFAAQgFABgBgBQgPAGgDAAQgCADgMACIgLADIgMAEQgHACgEAAQAAADgMgBIgPgBQAAABgJACIgKACQgNAAgLAFQAAAEgKACQgLABAAABIgVAAQgOgBgEAGIgEABIgCADIgIACIgGACQgCADgZAEQgaAEAAACIgIAAgAv9ESQAAgDgGgCIgHgBQAAAGANAAIAAAAgAxrDkIgBAEIANAJIAJACQAFACAEAAQAEAGAZAJQAZAJAAgFQgNAAAAgHIgPgDIgJgFQgJgFAAABQgBAAgEgHQgDgHgGAAQAAgDgJAAIgJgBIgGABgAl3DkQgIADgBADIAEAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAngEIAugFQAAgCAVgEIAYgFQABgCAMgBIAQAAQAEAAAPgFQAMgEAHACQAAgBARgEIAUgDQAAgEAKACQALACAAgFIAJAAQAFAAADgDIAIgDQAEgFAPABQAOABACgEQgHAAAGgEQAFgDAEAAIAMgBIAIACIAQgDQAAgBgBAAQAAAAgBAAQAAAAgBAAQgBAAgBAAIgGABQgCgGAZgGQAVgGAJAAQAAgBAJgCQAKgBACgCIAFgBQAEgBADAAIACADIAFABQgCgDAEAAQgCgEAEgCIAIgBIAJAFQAJAGACgBIgGgDIgDgJIAGgEQADgCAEACQACABALgEQAKgFAAAEQACABAEgCQAEgCAAgCQANgBACgDQAAgJAIAAQACgDAJAAIAMAAQAEgBADgEQACgDADAAIAJgBIAKABIADgIQAEgEADACIAFADQgBgIAFABIAKACQADAAAEgDQAEgDACAAQACgCAIgEQAKgFABABQAAgGASgBQASgBAAgCIAMgCIAEgDIAFgCQADgDAJgCQALgDAAAFQAEABAMgDQAGgEABgEQgEAAAEgHIAEgHQAEgCAAgIIAMgHQAIgEAFAAQABACAJACIALABQAAAEAKgFQAKgFABgDQgHAAAAgLQAEAAALgNQARgEAAgCQAKgCAMgFIAUgJQAFgFAPgGQANgGADgGQAEgCAMgMQALgKAGAAQACgDAFgDIAGgGQABgDAHgFQAGgEAAgEQABAAAFgHQAFgGAAgCQADAAAJgVQAJgUgCgFQgCAAABgLQAAgLgDgBIABgBIgGgOIgDgHIgQgBQAAACgOgDQgNgEAAADQgiAHAAgBQgKABAAgCIgHABQgFABgDgDIgGABIgIABQAAAAgBAAQAAgBAAAAQgBAAgBABQAAAAgBAAIgFABQAAADgLABQgKABgEgBIgOgBIgDAFQAAAAgBAAQAAAAAAAAQgBgBAAgBQAAAAAAgCIgNABQgBAHgMgEQgNgFgFgBQgBACgHABQgFABAAAGIgMAAIgNABQAAADgSABQgSABAAABIgdABQgDABgDACIgBABIgDACIgPAAQAAABgFACIgHABQAAgBgRADQgRACAAACIgKACIgLACIgIAIQAAACgJgFQgCAAgDAHQgBABAAABQAAAAgBAAQAAABgBAAQgBAAAAAAIgGABQAAABgFACIgGABQgBACgEAAQgEABgCADQgDADgFAAQAAgDgFABIgJABQAAAFgUgCQAAAGgIACQgKACgCADQgCAAgDACIgGAEQgEABgCgBIgEgBQAAABgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAIgFgCIgHADIgIACQgCgDgFADIgGACIgDAEQgEADAAACIgCADIgBAEIgDAEIgCAAIgCABQAAABgBAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQgBAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgEAIgTACIgSAKQgIAFgFgDIAAgEQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgKAFQAAAHgCABQgCAAgFgCQgCgBgGADQgGACgCACQgEAAgCADQgDADAAADIgKACQgMADgDAFQgFAAAAAEIAAAFIgPAJQgEAFgHAAIgLgCQACALgFACQgKAEgBACQgLAHAAgFQgFgDgBADIgBADQABADgKAHQgJAGgDAAQAAACgGADIgJAEQAAgGgFAEQgGAEACAAQAAAEgGAIQgGAHgFADQgBAEgFADIgJADQgHADgEgDQgDABgEAFQgEAFAFAAIgCAGIgFAIQgFAGgBgBQgNAJgEAJQgGAAgCADIgDAIQgEABgDAEQgEAGgCABQACAEgXAVIgDADIANgBIAmgFQAAAFAQgGIAEAAIACgCQABAAAAAAQABgBAAAAQABAAAAABQAAAAABAAIADACQABgFAJgDIAIgDQAFAAATgEQARgCADAGQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAABgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAIAKAAQAAgBAGgBIAIAAQAAABAAAAQAAABABAAQAAAAABAAQABAAABgBQAAgJAlAAQAAgDAKgBIAMgBQAAgGAXgBQAWgBAAACQADgBADgDQAEgDABAAQAAgCAHACIAHABQAAAHATgLQAAgCAGgCIAIgDQAFAHAGgBIAQgCIAMgBQAGgBAAgFQgEACgDAAQAAgDADgCQAEgCAAgCIANgCIAFgCQAAgEAKAAIAOAAQAHAHAEgGQAIgJAEgBQALAAAAgCQAFAAACAFQACAEgHAAQAAADAHACQAGADAAgEQgFAAAAgDQAAgEAEAAQAAgCAJAAIAFgDQAEgCAAgCQAGAAAEgDQAAAAAAgBQABAAAAAAQABAAABAAQAAAAABAAIAGAAQADgHAKAAQACACAGgDIAIgEIALgFQAIgEAAAEQAJAAgCgBQgHgEgCgCQgGgBAGgCIAIgBIAEAFQACACAEABQALAAAAgCIAWgJQADAAAJgEQAJgEAFAAQAAgEALgDQAJgDAEAAQABgCAFgBIAGgEIAJgDQAFgBACABQAEABADgDQAFgFACgBIAJgEQAFgDADAEQACADgLAMQgDAAgHAFQgHAEgEAAQAAAFgLAFQgNAGgCADQgCAEgIABQgIABgCAEQgEAAgFAEQgGADgCAEQgZAJAAgBIgJAHIgIAHIgMAEIgJAEQgWAEgHAIQgFgBgFADQgFAEgEAAIgLABQgKABAAAFIgOADQgKACgDAEQgLAFgHABQAAABgIADIgJAEIgEAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAIgEABIgEABQgEAGgIABIABACQgIAEgEAAQgKgCgGADQgSAKAAgCQgIAAgNAFQgOAEgHAAQAAACgUADQgUAEAAACQgaAKAAgDQgDAAgHAEQgHAFgEAAIgOAEQgQADgBACIgVAEQghAJAAgBQgXAAgCAEIgHACIgHABQAAgCgIACIgKADQgTAHgHAAQgJACgFAAIgQAAQgEAFgLAAQgMgBgFAAQAAABgHACIgKACIgBAAIgHACgAx3DdQACgGgGgBQAAgDgJgHQgDAAgGgEQgHgEgDAAQAAgCgHgGQgHgFgDAAQABgCgKgIQgKgHgDAAQABAFAGAHQAFAGAEADIAKAJQAEAFAEAAQAUARAAgCIAGgBQAAAGALAAgAo0CdIAFADQgDABgCADQgCADACADQAFACgDADIgEAEQARgEAAgBQADgBAEABIAHACIADAAIADgDIACgBQAAgBAKgBIgDgWIgCgJQgCgFABgDIACgMQABgHABgEQADAAgBgHQgBgIgGAAQAAACgLAOQAAAEgFAIQgFAIAAAEQgFADgCACIgDAIQgBAAAAAAQgBAAAAABQgBAAAAABQAAABAAAAIgEAFQAAAEgHgGQgBABAGAEgAk9hIIgOAKIgDAEIgDADQAAADgEAEQgDADgCAAIgFAGIgGAFQAAACgIAHQgCADgFABIgGAEQAAACgEACQAAAEgDABIgGAEQgBABAAAEQAAAEgCACQgFABgEAEIgDAFIgEAHQgDAFgCABQAAAFgJAFQgJAGAAAFQABAAgEAPIAAAIQAAAEgDABIAAABIgBABQgFAAgCAIQgEAIgCABIgEATIAAACQgCAAgDASQgDASACACQACgBAFgGIADgIQACgHACAAIAFgJQADgHACAAQAAgCADgEIAEgIQACAAAHgRIAIgGIAGgHQAGAAgBgKQAAAAAAAAQABAAAAAAQABgBAAAAQABgBAAgBQACgDACAAIAIgMQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABgBIABgEQAHgEAGgLQAEAAAFgIQAFgIAFAAQAbgKgMAAQAAgFAEgCIAIgDQAAgFAHgEQAIgEAAgEQAEgBADgEQADgEADgBQACgCALgGQAKgEAAgEQAJgGAFAAQAAgDAHgEQAHgEAAgDIAGgEIAHgDQAEgCACgCQACAAAHgHQAHgGABACIALgGQAHgEABgDQAHgEAAgGIALgBIAGgEIAHgDQAAAGALgHIANgJQAFAAAJgJQABgBAHgCIAHgDQACAAAOgFQAOgFAAgBIAMgFQAHgDAGAAQABgDAEACQAGABADgHIAFgCIAIgEQACgCANgDQALgDAAgBIAIgEQAGgCAAgDQAMAAACgDIAIgBQAGgCAAgBQAFAAAJgEQAKgEAFgBQAAgBAHgCIAKgCQAwgPAEAAIAbgHQASABAAgGQAEAAAKgDQAJgDAFAAIAcgHQAAgBALgCIANgBQAAgBAKgCQAMgBAAgCIAJgCQAGgCAEAAIALAAQAGAAADgDIAegEQAAgEAsgDQADgFAbAAQATAAANgDQAAgEAygBIA4gBQAAgCAFABQABAAABAAQABAAAAgBQABAAAAgBQAAAAAAgBIADAAIgBgBQgEAAgEgHQgEgIgCAAQAAgCgHgHQgHgGAAgDQAHgCAIADQAKADAAAHQAEABAFAEQAEADABAEQADACAAAEQAAABAAAAQABAAAAAAQAAAAABAAQAAAAABAAIACACIADACIAIAAQAFABALAAIARgBIAjACQAdABAAABIAOAAQAAgCASACIAWACQAnADAAABIAuAEQAnAFAAAFQAJAAASAEQATAEAJAAQAAACAOACQANACAAACQAGAAAIAEIAPAEIAJAEQAGADADAAQAAACAIAAQAJABABACIAZAIQADAAAIAEQAIADACADIAGADQAGACAAgCIAFADQAEAAAKAFQAKAFAAACQADAAAIAFQAIAFAEAAQAAABAGAEQAGAEACAAIAHADQAHADABADQADACAIAFQAIAEACAEQAHAAgGgIQgGgJgEAAIgEgEQgEgDAAgCQgGAAgHgJQgDAAgKgIQgKgIAAgDQgPAAAAgHIgDgCIgGAAQgEgGgFgCIgMgHQgGgDgGAAQgEgFgIgCQgEgBgBgCIgEgEQAAgCgQAAQAAgEgKgDIgOgCQgFAAgHgCQgHgDAAgEQgIAAgLgJQgMgIgGAAQAAgCgJgBIgJgBQgXgGAAgCQgSgGgGAAQAAgEgagEQgXgFgIAAQAAgBgNAAQgOgBAAgDIgUgEQAAgBgZgDIgYgDIgRgBIgQgBQAAgBgLgBQgLgBgBgBIgYAAQAAACgkgCQgBgCgMAAQgNAAAAACQgCABgFgBIgIgBQgPABgHAAIgJACQAAABgJAAIgLgBQAAADgTABQgTACgEgCIhfAIQgEAAgWADQgWAEAAACIgLABQgKAAAAABIgSADQAAAFgtACQAAADgOADIgTADQgBACgIAAQgIAAgDAEIgSABQAAADgMAAQgNABAAADIgbAIQgPAFgLAAIgaAIQgaAIgDAAQAAADgLACQgNACgBADIgMAEIgMADQAAABgFACIgIACQAAABgJADIgNADQgDAEgJADQgKADgCADQgEAAgFADIgJAEQgSADgGAHQgEAAgIAFQgHAGgFAAIgJAHQgGADgDAAQgDADgNAHQgDAAgIAGQgHAGgHgBQgBAEgIAAQgBADgHACQgLAEgHAGQgSAMgJAFIgIAGQgEAFgFAAIgIAFQAAAGgVANQgKAKgJAEQAAABgEADIgFADQABADgIAAQgBAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgBAAIgCABgAv4lvQgDABgBACIgDAFQgFAAgCADQgCAAgFACQgFADgCACQgIAFgEAAQgGAHgQAFQgCAEgJABQgJACgBACIgGAGQgGAEAAABQgMAAgBAGIgRANIgQAIQgJAGgEAGIgHAGQgEADgCADQAAAFgIAEQgIAEgBAFQgCAAgCAFQgCAEgDABQgBACgFAEQgFAEAAADIgIAHIgIALIgCABQABACAhgZQAjgaAHgBIAGgDQADgDADAAQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAABgBQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQgCgCAAgDIAKgBQAHgBACgCIADgCQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQABgCAFgDIAGgDQACgCAKgEQAIgEACgDQADAAAEgEQAFgEABgDQAKgBACgDQADAAAHgEIAKgEQACgCAGAAQAEABAAgFQABgHAMAAIAGgIQACgCAFAAQAEABACgCIAHgEIAJgFQAAgCAOgGQAPgHADABIgBgEQAFgBAHgDQAGgEAEgBIAKgEQAHgDACgDIAGgCQAFgDACAAQADgDAKACQACgEADgCQAFgGAOgDIAVgDQACgDAHgCIALgDQAAgDAHACQAEABAHgFIAHgEQAEgCADAAQADgFANgDIAUgFIAPgDQANgEAAgCIAGgCIAEgCIAIAAQAFgBAAgEQgBAAAAAAQgBgBAAAAQAAAAAAgBQABAAAAgBIACgDIgGgCIgqAKIgCgBQAAACgJACQgKABAAABQgGAAgKAFQgKAGgFAAIAAgCQgFAAgIADQgIADgFgBQgEAAgCACIgEAEQgEAEgBgBIgHgCIgHADQgIAEAAADIACAAQgBADgEAAQgDABABgEQgDAAgGADQgGACgDAAIgLAHQgEAGgFgCQgBAGgNAFQAAAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAQgBAAgBAAQgBABAAAAQgBAAAAAAQAAAAAAAAIgKACQgEABgCAGIgDABQgBABAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBQgJAAAAgCQgCAAgDADIgGADIgMAGQgMAHACABIgMAGIgMgCIgCAAgAkwkoQgEgDAIgFIAKgHQAIgCAAgBQAAAAABgBQABAAAAAAQABABAAAAQAAAAABABQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAAAQgQAPgIAAIgDgBg");
	this.shape_1.setTransform(7.054,28.9818,0.5531,0.5531);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003C71").s().p("ABlDQIAAj8QAAgtgYgbQgYgbgpAAQgcAAgaAOQgaANggAgIAAEkIhaAAIAAmXIBaAAIAAA2IACAAQAagdAkgRQAjgQAlAAQBEAAAqAoQAtAsAABQIAAD7g");
	this.shape_2.setTransform(117.8935,95.8372,0.5531,0.5531);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003C71").s().p("AiuCXQhEg9AAhdQAAhYBFg8QBGg8BlAAQBqAABFA7QBGA6AABbQAABfhEA8QhEA8htAAQhoAAhEg9gAhshkQgqAmAAA7QAAA/ApAoQApAnBBAAQBHAAApgmQAqgmAAhBQAAg8gsgmQgrgmhDAAQg/AAgqAmg");
	this.shape_3.setTransform(90.1256,96.0584,0.5531,0.5531);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003C71").s().p("AiZERQg7giAAg3QAAgsAbgcQAdgbA7gNQgugYAAgcQAAgTATgPQAUgQAhgGIAAgCQgygTgaghQgYggAAgtQAAhAA1gmQA1gmBbAAIC7AAIAAA/IhdAAQAbAXAKAUQALATgBAbQAAAXgMAbQgNAagRAPQgeAdhVANQhEAMAAAWQAAARAjAMQAdALBKANQCDAXAABbQAAA8g5AiQg5AjhkAAQhbAAg7gjgAhiCJQgdARAAAbQAAAfAgAPQAhAQA+ABQA6AAAhgQQAhgPAAgdQAAgig1gRQgpgNg2gBQgtAAgdASgAhAjXQgaAVAAAfQAAAhAYAUQAaAVAoAAQAmAAAYgWQAYgVAAgiQAAgcgZgWQgbgVgiAAQgmAAgaAWg");
	this.shape_4.setTransform(64.0032,101.825,0.5531,0.5531);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003C71").s().p("AiTCRQg5g9AAhYQAAhcA7g6QA7g5BeAAQBcAAAzA4QA2A6AABtIk/AAQAWB7CCAAQBMAABTgxIAABOQgrAZgnALQgrAMg4AAQhlAAg+hDgAhIhzQgfAagJAxIDkAAQgCgvgdgbQgcgbgvAAQgyAAggAag");
	this.shape_5.setTransform(39.1255,96.0584,0.5531,0.5531);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003C71").s().p("AilDQIAAmXIBaAAIAABeIACAAQBAhmBCAAQA2AAA3AvIgvBGQgVgRgYgMQgXgLgQAAQguAAggAlQggAkAAA0IAADVg");
	this.shape_6.setTransform(19.1984,95.8372,0.5531,0.5531);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003C71").s().p("AjcC1QhShKABhrQgBhrBThKQBWhNCFAAQCIAABVBNQBSBJgBBsQAABrhRBKQhVBOiJAAQiFAAhWhOgAiciJQg+A3AABSQAABTA+A3QA+A3BeAAQBeAAA/g3QA/g3AAhTQAAhSg/g3Qg/g2heAAQheAAg+A2g");
	this.shape_7.setTransform(-10.5886,93.348,0.5531,0.5531);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003C71").s().p("AiTCRQg5g9AAhYQAAhcA7g6QA7g5BeAAQBcAAAzA4QA2A6AABtIk/AAQAWB7CCAAQBMAABTgxIAABOQgrAZgnALQgrAMg4AAQhlAAg+hDgAhIhzQgfAagJAxIDkAAQgCgvgdgbQgcgbgvAAQgyAAggAag");
	this.shape_8.setTransform(-42.7955,96.0584,0.5531,0.5531);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003C71").s().p("AilDQIAAmXIBaAAIAABeIACAAQBAhmBDAAQA1AAA3AvIgwBGQgUgRgYgMQgXgLgRAAQgtAAggAlQggAkAAA0IAADVg");
	this.shape_9.setTransform(-62.3631,95.8372,0.5531,0.5531);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003C71").s().p("AA9DKQgQgKgGgWQg6AqhAAAQgwAAgggeQgfgdAAgpQAAg1AyghQAcgSBNgYIBPgZIAAgWQAAgmgVgRQgTgRgpAAQhQAAhABDIAAhYQA1g3BiAAQBIAAAsAhQAwAjAABCIAADRQAAAVARAAQAPAAAhgWIAAAxQggATgRAGQgSAHgUAAQgeAAgRgKgAg8ApQgrAYAAAgQAAAaASAQQATAQAcAAQAnAAAngiIAAh3QhHAWgdARg");
	this.shape_10.setTransform(-85.8579,96.0584,0.5531,0.5531);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003C71").s().p("Ai0CtQhJhJAAhdQAAhyBXhMQBYhLCFAAQBUAABtApIAABOQg0gbgvgNQgugNgxAAQhfAAhAA3QhBA4ABBSQgBBVBAA1QA/A2BkAAQBiAABjg6IAABQQguAVgsALQg0AMg+AAQiRAAhVhWg");
	this.shape_11.setTransform(-114.2758,93.6246,0.5531,0.5531);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CO_v_color, new cjs.Rectangle(-128.3,-6.3,265.8,125.2), null);


(lib.BUTTONbkgd = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FB8202").s().p("AmyCvQhIAAgzg0QgzgzAAhIQAAhHAzgzQAzg0BIAAINlAAQBIAAAzA0QAzAzAABHQAABIgzAzQgzA0hIAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.9,-17.4,121.8,34.9);


(lib.ICONxOR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.crossORsvg("synched",0);
	this.instance.setTransform(-0.05,0.05,1,1,0,0,0,15.8,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleteal70();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONxOR, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONxhandteal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.crosshandsvg("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,12.7,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleteal70();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONxhandteal, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONtoothblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.toothsvg("synched",0);
	this.instance.setTransform(0.05,0.05,1,1,0,0,0,10.7,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleblue60();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONtoothblue, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONstethteal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.stethsvg("synched",0);
	this.instance.setTransform(0.05,0,1,1,0,0,0,13.1,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleteal70();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONstethteal, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONstethblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.stethsvg("synched",0);
	this.instance.setTransform(0.05,0,1,1,0,0,0,13.1,13.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleblue60();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONstethblue, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONshotteal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.shotsvg("synched",0);
	this.instance.setTransform(0.05,0.05,1,1,0,0,0,12.6,12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleteal70();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONshotteal, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONpreggoblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.preggosvg("synched",0);
	this.instance.setTransform(0,0.05,1,1,0,0,0,7,14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleblue60();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONpreggoblue, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONmhteal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.mhsvg("synched",0);
	this.instance.setTransform(-0.05,0.05,1,1,0,0,0,13.3,14.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleteal70();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONmhteal, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONmaskteal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.masksvg("synched",0);
	this.instance.setTransform(0,1,1,1,0,0,0,15.3,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleteal70();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONmaskteal, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONdevicesteal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.devicessvg("synched",0);
	this.instance.setTransform(-0.05,0.05,1,1,0,0,0,15.3,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleteal70();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONdevicesteal, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.ICONbabyblue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.baby01svg("synched",0);
	this.instance.setTransform(0,0,1,1,0,0,0,14,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.ICON_circleblue60();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ICONbabyblue, new cjs.Rectangle(-20.5,-20.5,41,41), null);


(lib.HEAD5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HEAD5type();
	this.instance.setTransform(0,24,1,1,0,0,0,0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD5, new cjs.Rectangle(-147,-39,294,73.1), null);


(lib.HEAD4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HEAD4type();
	this.instance.setTransform(0,36,1,1,0,0,0,0,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD4, new cjs.Rectangle(-155.5,60,305,61.3), null);


(lib.HEAD3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HEAD3type();
	this.instance.setTransform(0,36,1,1,0,0,0,0,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD3, new cjs.Rectangle(-155.5,30,305,61.3), null);


(lib.HEAD2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HEAD2type();
	this.instance.setTransform(0,66,1,1,0,0,0,0,36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD2, new cjs.Rectangle(-152.5,30,305,61.3), null);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HEAD1type();
	this.instance.setTransform(0,24,1,1,0,0,0,0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(-152.5,0,305,61.3), null);


(lib.BUTTON = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIAkIAggkIgggjIAbAAIAgAjIggAkgAgyAkIAggkIgggjIAcAAIAfAjIgfAkg");
	this.shape.setTransform(39.1,2.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRAvQgKgDgHgHQgHgHgEgJQgEgJAAgMQAAgKADgJQAEgJAHgHQAHgHAJgEQAKgEAKAAQALAAAJAEQAJAEAGAHQAHAHAEAKQADAKAAALIAAAHIhDAAQABAHAGAFQAGAFAKAAIAGgBIAGgBIAHgDIAFgDIANATQgIAGgKADQgLAEgMAAQgKAAgJgEgAgHgYIgGAEIgDAFIgCAGIAnAAIgCgGQgBgDgCgCQgCgDgEgBQgEgCgFAAQgEAAgEACg");
	this.shape_1.setTransform(25.375,2.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeAxIAAhfIAeAAIAAAMIAGgGIAIgFIAIgDIAJgBIAAAeIgEgBIgEAAIgGAAIgGACIgGAEIgFADIAAA8g");
	this.shape_2.setTransform(17,2.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAxQgFgCgFgEQgFgEgDgGQgDgGAAgIQAAgJADgGQADgFAFgDQAFgEAFgCIAMgBQAKAAAHADQAIADAEAFIAAgMQAAgGgFgEQgFgEgIAAQgIAAgHADQgHADgGAFIgLgUQAJgIAMgDQAMgEAKAAIARACQAIACAGAEQAHAFADAHQAEAIAAALIAAA7IgfAAIAAgJQgEAFgJADQgGAEgKAAQgGAAgGgCgAgLALQgEACgBAGQABAGAEADQAEACAHAAIAJgBQAFgCACgEIAAgIQgCgEgFgBIgJgCQgHAAgEADg");
	this.shape_3.setTransform(8.05,2.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVBAQgNgFgJgJQgKgKgGgMQgFgNAAgPQAAgOAFgNQAGgNAKgJQAJgJANgFQAOgFAOAAQAMAAAJADQAKADAHAFQAHAFAFAGIAIAOIgdANQgCgEgDgDIgHgGIgIgFIgJgBQgHAAgHAEQgHACgFAGQgFAEgCAIQgDAGAAAIQAAAIADAHQACAHAFAGQAFAEAHAEQAHADAHAAIAJgCIAIgEIAHgGQADgEACgEIAdAOQgDAGgFAHQgFAHgHAEQgHAFgKAEQgJADgMAAQgOAAgOgFg");
	this.shape_4.setTransform(-3.575,0.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKA3QgHgHgBgOIAAgrIgQAAIAAgaIAQAAIAAgbIAeAAIAAAbIAUAAIAAAaIgUAAIAAAjQAAAEADADQABACAFAAIAEAAIADgCIAGAXQgCADgGACQgGACgIAAQgOAAgIgIg");
	this.shape_5.setTransform(-18.2,1.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAvQgKgDgHgHQgHgHgEgJQgEgJAAgMQAAgKADgJQAEgJAHgHQAHgHAJgEQAKgEAKAAQALAAAJAEQAJAEAGAHQAHAHAEAKQADAKAAALIAAAHIhDAAQABAHAGAFQAGAFAKAAIAGgBIAGgBIAHgDIAFgDIANATQgIAGgKADQgLAEgMAAQgKAAgJgEgAgHgYIgGAEIgDAFIgCAGIAnAAIgCgGQgBgDgCgCQgCgDgEgBQgEgCgFAAQgEAAgEACg");
	this.shape_6.setTransform(-26.725,2.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBAQgNgEgJgKQgKgIgGgNQgGgNAAgQQAAgPAGgNQAGgNAKgJQAJgJANgFQAOgEAOAAQALAAAJACQAJADAHAEQAHAFAFAGIAJAMIgdAPQgEgHgHgEQgIgGgJAAQgIAAgGAEQgHACgFAGQgFAEgDAIQgDAGAAAIQAAAIADAHQADAHAFAGQAFAEAHAEQAGADAIAAQAHgBAHgCQAHgDADgDIAAgKIgeAAIAAgdIBBAAIAAA0QgLAMgPAHQgOAHgTAAQgOAAgOgFg");
	this.shape_7.setTransform(-39.125,0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.instance = new lib.BUTTONbkgd();
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BUTTON, new cjs.Rectangle(-64,-17.4,126.2,34.9), null);


(lib.StripFade = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_341 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(341).call(this.frame_341).wait(1));

	// mh3
	this.instance = new lib.ICONmhteal();
	this.instance.setTransform(793.7,141.25,2.4844,2.4844,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,x:331.55},341,cjs.Ease.sineInOut).wait(1));

	// baby2
	this.instance_1 = new lib.ICONbabyblue();
	this.instance_1.setTransform(768.65,69.5,2.7049,2.7049,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:262.6},341,cjs.Ease.sineInOut).wait(1));

	// devices
	this.instance_2 = new lib.ICONdevicesteal();
	this.instance_2.setTransform(608.95,142.15,3.0577,3.0577);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:173.45},341,cjs.Ease.sineInOut).wait(1));

	// preggo2
	this.instance_3 = new lib.ICONpreggoblue();
	this.instance_3.setTransform(560.3,64,2.6756,2.6756);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:95.35},341,cjs.Ease.sineInOut).wait(1));

	// tooth
	this.instance_4 = new lib.ICONtoothblue();
	this.instance_4.setTransform(519.4,140.95,2.4991,2.4991,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:31.05},341,cjs.Ease.sineInOut).wait(1));

	// xhand
	this.instance_5 = new lib.ICONxhandteal();
	this.instance_5.setTransform(423.95,57,2.3374,2.3374,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-11.45},341,cjs.Ease.sineInOut).wait(1));

	// mh2
	this.instance_6 = new lib.ICONmhteal();
	this.instance_6.setTransform(400.95,140.95,2.4844,2.4844,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:-0.1,x:-90.4},341,cjs.Ease.sineInOut).wait(1));

	// mask
	this.instance_7 = new lib.ICONmaskteal();
	this.instance_7.setTransform(337,51.35,2.4844,2.4844,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-171.8},341,cjs.Ease.sineInOut).wait(1));

	// preggo1
	this.instance_8 = new lib.ICONpreggoblue();
	this.instance_8.setTransform(272.3,143.75,2.6756,2.6756);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-223.2},341,cjs.Ease.sineInOut).wait(1));

	// xOR
	this.instance_9 = new lib.ICONxOR();
	this.instance_9.setTransform(200.4,55.8,3.1607,3.1607,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:0,regY:0,x:-265.95,y:55.5},341,cjs.Ease.sineInOut).wait(1));

	// baby1
	this.instance_10 = new lib.ICONbabyblue();
	this.instance_10.setTransform(151.8,145.4,2.7049,2.7049,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:0,regY:0,x:-505.6,y:145.15},341,cjs.Ease.sineInOut).wait(1));

	// steth
	this.instance_11 = new lib.ICONstethblue();
	this.instance_11.setTransform(67.9,64.25,3.293,3.293);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:-480.55,y:62.75},341,cjs.Ease.sineInOut).wait(1));

	// mh1
	this.instance_12 = new lib.ICONmhteal();
	this.instance_12.setTransform(-26.15,139.5,2.4844,2.4844,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:-316.1},341,cjs.Ease.sineInOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-561.2,-9.3,1405.6,214.20000000000002);


// stage content:
(lib.CO_IconsProc_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,393];
	// timeline functions:
	this.frame_0 = function() {
		//if(!this.alreadyyExecuted){
		//this.alreadyyExecuted=true;
		//	this.clickthru_btn.on("click", function(evt){
		//  window.open(clickTag, "_blank");
		//});
		//} else {
		//gotoAndPlay(2);
		//}
	}
	this.frame_393 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(393).call(this.frame_393).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(394));

	// ICON1
	this.instance = new lib.ICONstethteal();
	this.instance.setTransform(318.75,252.2,3.3749,3.3749);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:150,alpha:1,mode:"synched",startPosition:0},43,cjs.Ease.quartOut).to({x:-18.75,alpha:0,mode:"independent"},44,cjs.Ease.quartIn).to({_off:true},1).wait(306));

	// HEAD1
	this.instance_1 = new lib.HEAD1();
	this.instance_1.setTransform(150,369,1,1,0,0,0,0,24);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},8).wait(299).to({alpha:0},8).to({_off:true},2).wait(77));

	// ICON2
	this.instance_2 = new lib.ICONbabyblue();
	this.instance_2.setTransform(318.75,252.2,3.3749,3.3749);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79).to({_off:false},0).to({x:150,alpha:1,mode:"synched",startPosition:0},43,cjs.Ease.quartOut).to({x:-18.75,alpha:0,mode:"independent"},45,cjs.Ease.quartIn).to({_off:true},1).wait(226));

	// HEAD2
	this.instance_3 = new lib.HEAD2();
	this.instance_3.setTransform(156,381,1,1,0,0,0,0,36);
	this.instance_3.alpha = 0;
	this.instance_3.shadow = new cjs.Shadow("rgba(0,163,181,1)",0,0,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({_off:false},0).to({alpha:1},8).wait(220).to({alpha:0},8).to({_off:true},2).wait(77));

	// ICON3
	this.instance_4 = new lib.ICONshotteal();
	this.instance_4.setTransform(318.75,252.2,3.3749,3.3749);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(151).to({_off:false},0).to({x:150,alpha:1,mode:"synched",startPosition:0},42,cjs.Ease.quartOut).to({x:-18.75,alpha:0,mode:"independent"},44,cjs.Ease.quartIn).to({_off:true},1).wait(156));

	// HEAD3
	this.instance_5 = new lib.HEAD3();
	this.instance_5.setTransform(156,369,1,1,0,0,0,0,24);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(151).to({_off:false},0).to({alpha:1},8).wait(148).to({alpha:0},8).to({_off:true},2).wait(77));

	// ICON4
	this.instance_6 = new lib.ICONtoothblue();
	this.instance_6.setTransform(318.75,252.2,3.3749,3.3749);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(230).to({_off:false},0).to({x:150,alpha:1,mode:"synched",startPosition:0},42,cjs.Ease.quartOut).to({x:-18.75,alpha:0,mode:"independent"},44,cjs.Ease.quartIn).to({_off:true},1).wait(77));

	// HEAD4
	this.instance_7 = new lib.HEAD4();
	this.instance_7.setTransform(156,369,1,1,0,0,0,0,24);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(230).to({_off:false},0).to({alpha:1},8).wait(69).to({alpha:0},8).to({_off:true},2).wait(77));

	// ICON5
	this.instance_8 = new lib.ICONxhandteal();
	this.instance_8.setTransform(318.75,257.3,3.3749,3.3749);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(329).to({_off:false},0).to({x:150,alpha:1},35,cjs.Ease.quartOut).wait(30));

	// HEAD5
	this.instance_9 = new lib.HEAD5();
	this.instance_9.setTransform(150,423,1,1,0,0,0,0,24);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(329).to({_off:false},0).to({alpha:1},8).wait(57));

	// StripFade
	this.instance_10 = new lib.StripFade();
	this.instance_10.setTransform(272.8,62.3,0.8,0.8,0,0,0,272.8,57.9);
	this.instance_10.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(394));

	// HS logo
	this.instance_11 = new lib.HS_logo();
	this.instance_11.setTransform(72.15,543.05,0.4305,0.4305,0,0,0,0.8,71.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(394));

	// CO logo
	this.instance_12 = new lib.CO_v_color();
	this.instance_12.setTransform(204.1,540.85,0.486,0.486,0,0,0,0.2,55.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(394));

	// CTA
	this.instance_13 = new lib.BUTTON();
	this.instance_13.setTransform(150.1,466.05,1,1,0,0,0,-0.8,0.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(386).to({_off:false},0).to({alpha:1},7).wait(1));

	// Layer_1
	this.instance_14 = new lib.icon_bg_300x600();

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(394));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(62.1,299.5,668,301);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 600,
	fps: 36,
	color: "#999999",
	opacity: 1.00,
	manifest: [
		{src:"images/CO_IconsProc_300x600_atlas_1.jpg", id:"CO_IconsProc_300x600_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;