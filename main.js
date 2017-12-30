
///Calculating exact height for Code Container
var windowHeight = $(window).height();
var menueBarHeight = $('#menuBar').height();

var codeContainerHeight = windowHeight - menueBarHeight;
$(".codeContainer").height(codeContainerHeight+'px');


$(".toggle").click(function (){

	$(this).toggleClass("selected");

	var activeDiv = $(this).html();

	$('#'+activeDiv+'Container').toggle();
	var showingDiv = $('.codeContainer').filter(function (){

		return ($(this).css('display')!='none');
	}).length;

	var width = 100/showingDiv;

	$('.codeContainer').width(width+'%');



});
$('#runButton').click(function(){

		$("iframe").contents().find("html").html('<style>'+$("#cssCode").val()+'</style>'+$("#htmlCode").val());
          // document.getElementById('resultFrame').contentWindow.eval($('#jsCode').val());
	});

