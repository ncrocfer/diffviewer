jQuery(document).ready(function($) {

	// Make fade out menu when scrolling
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop != 0)
            $('.navbar').stop().animate({
                'opacity':'0.6'
            },200);
        else
            $('.navbar').stop().animate({
                'opacity':'1'
            },200);
    });

    $('.navbar').hover(
        function (e) {
            var scrollTop = $(window).scrollTop();
            if(scrollTop != 0){
                $('.navbar').stop().animate({
                    'opacity':'1'
                },200);
            }
        },
        function (e) {
            var scrollTop = $(window).scrollTop();
            if(scrollTop != 0){
                $('.navbar').stop().animate({
                    'opacity':'0.6'
                },200);
            }
        }
    );

    var editor1 = CodeMirror.fromTextArea(document.getElementById("editor1"), {
        lineNumbers: true,
        viewportMargin: Infinity,
        theme: "ambiance",
        styleActiveLine: true
  	});

  	var editor2 = CodeMirror.fromTextArea(document.getElementById("editor2"), {
        lineNumbers: true,
        viewportMargin: Infinity,
        theme: "ambiance",
        styleActiveLine: true
  	});

});