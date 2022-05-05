function pathPrepare ($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);
}

var $tube = $("path#tube");

// prepare SVG
pathPrepare($tube);

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = new TimelineMax()
  .add(TweenMax.to($tube, 1, { strokeDashoffset: 0, ease: Linear.easeNone }));

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: "#trigger", duration: 5430, offset: 2700, tweenChanges: true})
        .setTween(tween)
        .addTo(controller);