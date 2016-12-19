var designWidth=414;
    var fontSize=100;
    function reSize(){
        var deviceWidth=document.documentElement.clientWidth;
        var ratio=deviceWidth/designWidth;
        var newFontSize=ratio<1?fontSize*ratio:100;
        document.documentElement.style.fontSize=newFontSize+'px';
    }
    reSize();
    window.onresize=reSize;
 