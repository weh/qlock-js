$(document).ready(function() {

  updateTime();
  window.setInterval(updateTime, 6000);
  

  function updateTime() {
	  var currentTime = new Date()
	  
	  var hour = currentTime.getHours()
      hour = hour+1;
	  if (hour > 12) {
		  hour = hour -12;
	  }
	  

	  var minute = currentTime.getMinutes()


	  /* Minute selector - reset all, set the current */
	  $(".m").removeClass('active');

	  if (minute < 10) {
		$(".m5").addClass('active');
	  } else if (minute < 15) {
		$(".m10").addClass('active');
	  } else if (minute < 20) {
		$(".m15").addClass('active');
	  } else if (minute < 25) {
		$(".m20").addClass('active');
	  } else if (minute < 30) {
		$(".m5").addClass('active');
		$(".m30").addClass('active');
	  } else if (minute < 35) {
		$(".m30").addClass('active');
	  } else if (minute < 40) {
		$(".m5").addClass('active');
		$(".m30").addClass('active');
	  } else if (minute < 45) {
		$(".m20").addClass('active');
	  } else if (minute < 50) {
		$(".m15").addClass('active');
	  } else if (minute < 55) {
		$(".m10").addClass('active');
	  } else if (minute < 59) {
		$(".m5").addClass('active');
	  }

	  
	  /* pre / post switch */
	  $(".pre").removeClass('active');
	  $(".post").removeClass('active');
	  if (minute < 25) {
		$(".post").addClass('active');
	  } else if (minute < 30) {
		$(".pre").addClass('active');
	  } else if (minute < 35) {
		// nothing
	  } else if (minute < 59) {
		$(".pre").addClass('active');
	  }
	  

	  /* Hour selector - reset all, set the current */
	  $(".h").removeClass('active');
	  $(".h"+hour).addClass('active');
	  if (hour == 0) {
		$(".h12").addClass('active');
	  }

  }

});
