$(".choose").click(function() {
  $(".choose").addClass("active");
  $(".pay").removeClass("active");
  $(".wrap").removeClass("active");
  $(".ship").removeClass("active");
  $(".ctact").removeClass("active");
  $("#line").addClass("one");
  $("#line").removeClass("two");
  $("#line").removeClass("three");
  $("#line").removeClass("four");
  $("#line").removeClass("five");
})

$(".pay").click(function() {
  $(".pay").addClass("active");
  $(".ctact").removeClass("active");
  $(".choose").removeClass("active");
  $(".wrap").removeClass("active");
  $(".ship").removeClass("active");
  $("#line").addClass("two");
  $("#line").removeClass("one");
  $("#line").removeClass("three");
  $("#line").removeClass("four");
   $("#line").removeClass("five");
})

$(".wrap").click(function() {
  $(".wrap").addClass("active");
  $(".pay").removeClass("active");
  $(".ctact").removeClass("active");
  $(".choose").removeClass("active");
  $(".ship").removeClass("active");
  $("#line").addClass("three");
  $("#line").removeClass("two");
  $("#line").removeClass("one");
  $("#line").removeClass("four");
   $("#line").removeClass("five");
})

$(".ship").click(function() {
  $(".ship").addClass("active");
  $(".ctact").removeClass("active");
  $(".pay").removeClass("active");
  $(".wrap").removeClass("active");
  $(".choose").removeClass("active");
  $("#line").addClass("four");
  $("#line").removeClass("two");
  $("#line").removeClass("five");
  $("#line").removeClass("three");
  $("#line").removeClass("one");
})

$(".ctact").click(function() {
  $(".ctact").addClass("active");
  $(".pay").removeClass("active");
  $(".wrap").removeClass("active");
  $(".choose").removeClass("active");
  $("#line").addClass("five");
  $("#line").removeClass("four");
  $("#line").removeClass("two");
  $("#line").removeClass("three");
  $("#line").removeClass("one");
})

$(".choose").click(function() {
  $("#home").addClass("active");
  $("#about").removeClass("active");
  $("#resume").removeClass("active");
  $("#portfolio").removeClass("active");
  $("#contact").removeClass("active");
})

$(".pay").click(function() {
  $("#home").removeClass("active");
  $("#about").addClass("active");
  $("#resume").removeClass("active");
  $("#portfolio").removeClass("active");
  $("#contact").removeClass("active");
})

$(".wrap").click(function() {
  $("#home").removeClass("active");
  $("#about").removeClass("active");
  $("#resume").addClass("active");
  $("#portfolio").removeClass("active");
  $("#contact").removeClass("active");
})

$(".ship").click(function() {
  $("#home").removeClass("active");
  $("#about").removeClass("active");
  $("#resume").removeClass("active");
  $("#portfolio").addClass("active");
  $("#contact").removeClass("active");
})

$(".ctact").click(function() {
  $("#home").removeClass("active");
  $("#about").removeClass("active");
  $("#resume").removeClass("active");
  $("#portfolio").removeClass("active");
  $("#contact").addClass("active");
})