console.log('linked')

$(document).ready(function () {

  //Set up controller
  var controller = new ScrollMagic.Controller()

  //Left blocks scroll
  $('.scroll-blocks .left-content').each(function(){
    var itemScroll = this;
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 'onEnter',
      offset: '150',
      duration: '150%'
    })
    .setTween(TweenMax.to(this, 1, {y: '-40%', ease:Power0.easeNone}))
    .addTo(controller)
  })

  //Right blocks scroll
  $('.scroll-blocks .right-content').each(function(){
    var itemScroll = this;
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 'onEnter',
      offset: '150',
      duration: '150%'
    })
    .setTween(TweenMax.to(this, 1, {y: '-20%', ease:Power0.easeNone}))
    .addTo(controller)
  })

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
