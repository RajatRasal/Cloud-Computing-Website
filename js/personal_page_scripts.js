  const X = $("#sideMenu").offset().top - 100;
  console.log(X);
  console.log($(window).scrollTop());

  /*try {
  } catch(err) {
    const X = 10;
  }*/

  const h = $(window).height();
  const w = $(window).width();
  console.log("height " + h);
  console.log("width " + w);

  /*
  var sideMenuFix = function() {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 150 && $(window).scrollTop() <= h) {
      console.log('here');
      $("#sideMenu").css({
        position: 'relative',
        top: $(window).scrollTop() - X
        //top: '40px'
        });
      console.log("now");
    } else if ($(window).scrollTop() > h) {
      $("#sideMenu").css({
        position: 'relative',
        top: h - X - 100
        //top: '40px'
        });
    } else {
      console.log('there');
      $("#sideMenu").css({
        //position: 'relative',
        //top: X
        top: 0
        });
    }
  };


  sideMenuFix();

  $(window).scroll(sideMenuFix);
  */

  var sideMenuFix = function() {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > (X + (w / 40)) && $(window).scrollTop() <= h) {
      console.log('here');
      $("#sideMenu").css({
        position: 'relative',
        top: $(window).scrollTop() - (X + (w / 40))
        });
      console.log("now");
    } else if ($(window).scrollTop() > h) {
      $("#sideMenu").css({
        position: 'relative',
        });
      /*$(window).css({
        overflow: 'hidden'
        });*/
    } else {
      console.log('there');
      $("#sideMenu").css({
        top: 0
        });
    }
  };


  sideMenuFix();

  $(window).scroll(sideMenuFix);
