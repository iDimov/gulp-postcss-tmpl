var animation = {

  init: function () {
      this.addEvents();
      this.createTimeLine();

      this.mainTimeLine.tweenFromTo('section' + 0, 'section' + 1)
      TweenLite.to(this['NUM1Timeline'], 3, { progress: 1, ease: Power2.easeIn });
  },

  beginningAnimationTL: new TimelineMax({ paused: true }),

  NUM2Timeline: new TimelineMax({ paused: true }),
  NUM1Timeline: new TimelineMax({ paused: true }),
  NUM2Timeline: new TimelineMax({ paused: true }),
  NUM3Timeline: new TimelineMax({ paused: true }),
  NUM4Timeline: new TimelineMax({ paused: true }),
  NUM5Timeline: new TimelineMax({ paused: true }),
  NUM6Timeline: new TimelineMax({ paused: true }),

  mainTimeLine: new TimelineMax({ paused: true }),

  createTimeLine: function () {

      //Beginning Animations

      this.beginningAnimationTL.staggerFrom(".circleSmall", 0.4, { opacity: 0, svgOrigin: "250 250", scale: 0, ease: Back.easeOut }, 0.04)
      this.beginningAnimationTL.play();

      //Number Animations

      this.coinAnimation = new TimelineMax({ paused: true });

      this.coinAnimation.from(".blk10", 1, { transformOrigin: "50% 50%", scale: 0, opacity: 0, ease: Back.easeOut }, 2.2)
          .from("#notext", 1, { transformOrigin: "50% 50%", scale: 0, opacity: 0, ease: Back.easeOut }, 2.2);;


      this.NUM1Timeline.add(function () {
          animation.coinAnimation.progress(0).play();
      }).staggerFrom(".SET1>g", 0.8, { opacity: 0, }, 0.18)
          .from(".top1", 2.4, { x: '-22%', y: '22%', opacity: 1, }, 0.0)
          .from(".shd1", 6, { opacity: 0, }, 0)


      this.NUM2Timeline.add(function () {
          animation.coinAnimation.progress(0).play();
      }).staggerFrom(".SET2>g", 0.8, { opacity: 0, }, 0.18)
          .from(".top2", 2.4, { x: '-22%', y: '22%', opacity: 1, }, 0.0)
          .from(".shd2", 6, { opacity: 0 }, 0)

      this.NUM3Timeline.add(function () {
          animation.coinAnimation.progress(0).play();
      }).staggerFrom(".SET3>g", 0.8, { opacity: 0, }, 0.18)
          .from(".top3", 2.4, { x: '-22%', y: '22%', opacity: 1, }, 0.0)
          .from(".shd3", 6, { opacity: 0 }, 0)
      this.NUM4Timeline.add(function () {
          animation.coinAnimation.progress(0).play();
      }).staggerFrom(".SET4>g", 0.8, { opacity: 0, }, 0.18)
          .from(".top4", 2.4, { x: '-22%', y: '22%', opacity: 1, }, 0.0)
          .from(".shd4", 6, { opacity: 0 }, 0)

      this.NUM5Timeline.add(function () {
          animation.coinAnimation.progress(0).play();
      }).staggerFrom(".SET5>g", 0.8, { opacity: 0, }, 0.18)
          .from(".top5", 2.4, { x: '-22%', y: '22%', opacity: 1, }, 0.0)
          .from(".shd5", 6, { opacity: 0 }, 0)

      this.NUM6Timeline.add(function () {
          animation.coinAnimation.progress(0).play();
      }).staggerFrom(".SET6>g", 0.8, { opacity: 0, }, 0.18)
          .from(".top6", 2.4, { x: '-22%', y: '22%', opacity: 1, }, 0.0)
          .from(".shd6", 6, { opacity: 0 }, 0)

      //Main Timeline

      this.mainTimeLine.to('#Section' + 1 + ' .circleLarge', 0, { transformOrigin: "50% 50%", svgOrigin: "none", opacity: 1, scale: 1.7, ease: Back.easeOut }, '-=0.8')

      that = this;
      this.mainTimeLine.addCallback(function (x) {


          that.isAnimating = false;
      
      }, null, [x])

      this.mainTimeLine.add('section1');

      for (var x = 2; x < 8; x++) {

          that = this;

          this.mainTimeLine.add('section' + x);

          this.mainTimeLine.staggerTo('#Section' + x + ' .circleSmall', 1, { transformOrigin: "50% 50%", svgOrigin: "none", opacity: 1, scale: 1.7, ease: Back.easeOut, rotation: 360 }, 0.05);

          this.mainTimeLine.to('#Section' + x + ' .circleLarge', 1, { transformOrigin: "50% 50%", svgOrigin: "none", opacity: 1, scale: 1.7, ease: Back.easeOut }, '-=0.8')

          this.mainTimeLine.addCallback(function (x) {

              if (that.currentSection == x + 1) {
                  that.isAnimating = false;

              }

          }, null, [x])

      }
  },

  currentSection: 2,

  changeSection: function (section) {

      if (!this.isAnimating) {
          that = this;
          if (section == 2 || section == 8) {
              section = 2;
              
              this.mainTimeLine.tweenFromTo('section' + that.currentSection, 'section' + 1, { onComplete: function () { that.mainTimeLine.tweenFromTo('section' + 0, 'section' + 1) } });

              $(".number-section").animate({ opacity: 0 }, 1000, function () {
                  $(".number-section").eq(0).css('opacity', '1');
              });

              this['NUM1Timeline'].progress(0)

              setTimeout(function () {
                  TweenLite.to(that['NUM1Timeline'], 3, { progress: 1, ease: Power2.easeIn });
              }, 1000)

              this.isAnimating = true;
              this.currentSection = section;
          } else if (section >= 2) {
              this.mainTimeLine.tweenFromTo('section' + that.currentSection, 'section' + section);

              setTimeout(function () {
                  that['NUM' + (section - 1) + 'Timeline'].progress(0)
                  TweenLite.to(that['NUM' + (section - 1) + 'Timeline'], 3, { progress: 1, ease: Power2.easeIn });
              }, 1000)


              $(".number-section , #number_coin").animate({ opacity: 0 }, 1000, function () {
                  $(".number-section").eq(section - 2).css('opacity', '1');
                 $("#number_coin").css('opacity', '1');
                 
          });



              this.isAnimating = true;
              this.currentSection = section;
          }

      }
  },

  addEvents: function () {

      that = this;

      $('.circleLarge').on('click', function () {

          section = $(this).parent().parent().index() - 2;

          $(this).removeClass('circleLargeNotActive');
          $(this).off("mouseleave");

          that.changeSection(section);



      })



      $(window).bind('mousewheel DOMMouseScroll MozMousePixelScroll"', function (event) {
          if(event.originalEvent.wheelDelta == undefined) {
              event.originalEvent.wheelDelta = -event.originalEvent.detail;
          }
          
          if (event.originalEvent.wheelDelta >= 0) {
              section = that.currentSection - 1;
              that.changeSection(section);
          } else {
              section = that.currentSection + 1;
              that.changeSection(section);
          }


      });
  }
};




$(document).ready(function () {
  animation.init();
})