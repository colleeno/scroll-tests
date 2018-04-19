console.log('linked')

$(document).ready(function () {

  //Set up controller
  var controller = new ScrollMagic.Controller()

  //Scroll Block
  $('.scroll-blocks').each(function(){
    var itemScroll = $(this).find('.left-content');
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 'onEnter',
      offset: '-150',
      duration: '180%'
    })
    .setTween(TweenMax.to(itemScroll, 1, {y: '-100%', ease:Power0.easeNone}))
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
      duration: '100%'
    })
    .setTween(tweenSlideIn)
    .addTo(controller)
  })

  // //Right blocks scroll
  // $('.scroll-blocks .right-content').each(function(){
  //   var itemScroll = this;
  //   var scene = new ScrollMagic.Scene({
  //     triggerElement: this,
  //     triggerHook: 'onEnter',
  //     offset: '150',
  //     duration: '150%'
  //   })
  //   .setTween(TweenMax.to(this, 1, {y: '-20%', ease:Power0.easeNone}))
  //   .addTo(controller)
  // })

  // //Set up scene
  // var blockScroll = new ScrollMagic.Scene({
  //   //element used to start animation
  //   triggerElement: ".scroll-blocks",
  //     //where on screen it should start
  //   triggerHook: 'onCenter',
  //   duration: '100%'
  //  })
  //  .setTween(TweenMax.to('.scroll-blocks .left-content', 1, {y: '-80%', ease:Power0.easeNone}))
  //  .addTo(controller)

})
