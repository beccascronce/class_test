$("#circle").click(function() {
	$(".square").css('background-color', 'purple');
	$("p").append(" name");
	value = $("input").val();
	$("p").prepend(value);
	$("p").after("<div></div>")
	$("p").before("<div></div>")

});

$(".square").click(function() {
	$(this).css('background-color', 'yellow');
	$(this).toggleClass("shadow");
});

// $(".square").hover(function() {
// 	console.log(this);
// 	$(this).css('width', '100px');
// });


// this is the same function as ^^^^^^^^^

$(".square").mouseover(function() {
	// console.log(this);
	$(this).css('width', '100px');
});


$(".square").mouseout(function() {
	// console.log(this);
	$(this).css('width', '50px');
});


console.log(
	$("input").val()
)