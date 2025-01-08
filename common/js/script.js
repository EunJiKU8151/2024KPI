const commonScript = (function () {
  return {
    commonFn: function () {
      var parallaxMotion = gsap.timeline({
        scrollTrigger: {
          trigger: ".sec2 .inner",
          endTrigger: ".sec2",
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: 1,
          // markers: true,
        }
      });

      $(".bg-item").each((idx, item) => {
        $(item).css("z-index", $(".bg-item").length - idx);

        const delay = idx * 0.3;
        
        parallaxMotion.fromTo(item, {height: "100vh"}, {height: 0, delay: delay, onComplete: function() {
          console.log("Dddas");
            $(".text-list .text-item.on").removeClass("on");
            $(".text-list .text-item").eq(idx + 1).addClass("on");
          },
          onReverseComplete: function() {
            console.log("D");
            $(".text-list .text-item.on").removeClass("on");
            $(".text-list .text-item").eq(idx).addClass("on");
          }
        })
          .fromTo($(".bg-item").eq(idx + 1), {scale: 1.3}, {scale: 1}, "<")
      });
    },
  };
})();

$(window).on("load", function () {
  commonScript.commonFn();
});
