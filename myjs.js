var windowHeight = $(window).height();
var menubarHeight = $('#menubar').height();
var codeContainerHeight = windowHeight - menubarHeight;
$('.codeContainer').height(codeContainerHeight+"px");
$('.toggle').click(function(){
  $(this).toggleClass("selected");
  var activeDiv = $(this).html();
  $('#'+activeDiv+"Container").toggle();
  var showingDiv = $('.codeContainer').filter(function(){
    return ($(this).css('display')!='none');
  }).length;
  var width = 100/showingDiv;
  $('.codeContainer').css('width', width+'%');
});
$('#buttonRun').click(function(){
  $('iframe').contents().find('html').html("<style>"+$('#csstextarea').val()+"</style>"+
    $('#htmltextarea').val());
  document.getElementById("resultframe").contentWindow.eval($('#jstextarea').val());
  //$('#resultframe').contentWindow.eval($('#jstextarea').val());
});

