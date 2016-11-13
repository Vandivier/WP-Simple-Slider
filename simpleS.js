var j,a,b,c;

jQuery(".imgSlide:not(.currentSlide)").hide();

setInterval(function(){ cycleSlider() }, 3500);

function cycleSlider() {
  b = jQuery('.imgSlide').length - 1;
  for (j = 0; j < b+1; j++) {
    if (jQuery('.imgSlide' + j).hasClass('currentSlide')) {
      cycleStep1(j);
      a = eval(j+1);
      if (a > b) { cycleStep2('0'); cycleStep3('1'); }
	  else { cycleStep2(a); c = eval(j+2); c > b ? cycleStep3('0') : cycleStep3(c); }
      return false;
    }
  }
}
function cycleStep1(which) {
  jQuery('.imgSlide' + which).toggle('slide',{direction:'left'},1000).removeClass('currentSlide');
}
function cycleStep2(which) {
  jQuery('.imgSlide' + which).toggle('slide',{direction:'right'},1000).removeClass('nextIn').addClass('currentSlide');
}
function cycleStep3(which) {
  jQuery('.imgSlide' + which).addClass('nextIn');
}
