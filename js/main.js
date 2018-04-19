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
    .setTween(itemScroll, 1, {y: '-100%', ease:Linear.easeNone})
    .addTo(controller)
  })

  // Side Blocks - Enter
  $('.side-blocks').each(function(){
    var itemRight = $(this).find('.right-block')
    var itemLeft = $(this).find('.left-block')

    var SlideIn = new TimelineMax()
    var itemLeft = TweenMax.from(itemLeft, 1,{ x: '-30%' , opacity: 0});
    var itemRight = TweenMax.from(itemRight, 1,{ x: '30%' , opacity: 0});
      SlideIn.add(itemLeft).add(itemRight, 0);

    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 'onEnter',
      duration: '120%'
    })
    .setTween(SlideIn)
    .addTo(controller)

  })

  //Line Animation
  $('.line-wrapper').each(function(){
    var line = $(this).find('.line');
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 'onEnter',
      offset: '200',
      duration: '95%'
    })
    .setTween(line, 1, {scaleY:0, opacity: '0'})
    .addTo(controller)
  })


})
