console.log('linked')

$(document).ready(function () {

  //Set up controller
  var controller = new ScrollMagic.Controller()

  //Scroll Block
  $('.scroll-blocks').each(function(){
    var itemScroll = $(this).find('.highlight-block');
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 'onEnter',
      offset: '-150',
      duration: '180%'
    })
    .setTween(TweenMax.to(itemScroll, 1, {y: '-100%', ease:Linear.easeNone}))
    .addTo(controller)
  })

  // Side Blocks - Enter
  $('.side-blocks').each(function(){
    var itemRight = $(this).find('.right-block')
    var itemLeft = $(this).find('.left-block')

    var tweenSlideIn = new TimelineMax()
    var itemLeft = TweenMax.from(itemLeft, 1,{ x: '-30%' , opacity: 0});
    var itemRight = TweenMax.from(itemRight, 1,{ x: '30%' , opacity: 0});
      tweenSlideIn
        .add(itemLeft)
        .add(itemRight, 0.2);

    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 'onEnter',
      reverse: true,
      duration: '120%'
    })
    .setTween(tweenSlideIn)
    .addTo(controller)
  })


})
