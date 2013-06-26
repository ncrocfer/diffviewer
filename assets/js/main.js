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


    function isFullScreen(cm) {
      return /\bCodeMirror-fullscreen\b/.test(cm.getWrapperElement().className);
    }
    function winHeight() {
      return window.innerHeight || (document.documentElement || document.body).clientHeight;
    }
    function setFullScreen(cm, full) {
      var wrap = cm.getWrapperElement();
      if (full) {
        wrap.className += " CodeMirror-fullscreen";
        wrap.style.height = winHeight() + "px";
        document.documentElement.style.overflow = "hidden";
      } else {
        wrap.className = wrap.className.replace(" CodeMirror-fullscreen", "");
        wrap.style.height = "";
        document.documentElement.style.overflow = "";
      }
      cm.refresh();
    }
    CodeMirror.on(window, "resize", function() {
      var showing = document.body.getElementsByClassName("CodeMirror-fullscreen")[0];
      if (!showing) return;
      showing.CodeMirror.getWrapperElement().style.height = winHeight() + "px";
    });

    var editor1 = CodeMirror.fromTextArea(document.getElementById("editor1"), {
        lineNumbers: true,
        viewportMargin: Infinity,
        theme: "ambiance",
        styleActiveLine: true,
        extraKeys: {
	        "F11": function(cm) {
	        	setFullScreen(cm, !isFullScreen(cm));
	        },
	        "Esc": function(cm) {
	        	if (isFullScreen(cm)) setFullScreen(cm, false);
	        }
      	}
  	});

  	var editor2 = CodeMirror.fromTextArea(document.getElementById("editor2"), {
        lineNumbers: true,
        viewportMargin: Infinity,
        theme: "ambiance",
        styleActiveLine: true,
        extraKeys: {
	        "F11": function(cm) {
	        	setFullScreen(cm, !isFullScreen(cm));
	        },
	        "Esc": function(cm) {
	        	if (isFullScreen(cm)) setFullScreen(cm, false);
	        }
      	}
  	});

});