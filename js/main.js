console.log('linked')

$(document).ready(function () {


  //Set up controller
  var controller = new ScrollMagic.Controller()

  //Header Block
  $('.header').each(function(){
    var itemScroll = $(this).find('.header-highlight');
    var timeline = new TimelineMax()
    fadeTop = TweenMax.to(this, 1,{  backgroundColor: 'rgba(236,236,236, 0)'})
    scrollBlock = TweenMax.to(itemScroll, 1, {y: '-60%', ease:Linear.easeNone})
    timeline.add(fadeTop).add(scrollBlock, 0)
    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 'onLeave',
      duration: '100%'
    })
    .setTween(timeline)
    .addTo(controller)
  })

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

    if (window.innerWidth > 768) {
    var timelines = new TimelineMax()
    var itemLeft = TweenMax.from(itemLeft, 1,{ x: '-30%' , opacity: 0});
    var itemRight = TweenMax.from(itemRight, 1,{ x: '30%' , opacity: 0});
      timelines.add(itemLeft).add(itemRight, 0);

    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 'onEnter',
      duration: '120%'
    })
    .setTween(timelines)
      // to run in one direction
    // .on('enter', function(event){
    //   if (event.scrollDirection != 'REVERSE') {
    //     // scene.setTween(itemLeft, 1, {x:'0%', opacity: 1})
    //     scene.setTween(SlideIn)
    //   }
    //   else {
    //       scene.setTween(itemLeft, 1, {x:'0%', opacity: 1})
    //   }
    // })
    .addTo(controller)
  }

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
