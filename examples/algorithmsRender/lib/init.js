// canvas 画布初始化
function initCanvas() {
    var canvas=document.getElementsByTagName("canvas")[0];
    var renderWidth = window.screen.availWidth-100;
    var renderHeight = window.screen.availHeight-200;
    canvas.setAttribute("width", renderWidth)
    canvas.setAttribute("height", renderHeight)

    window.ctx=canvas.getContext("2d");
    window.ctxRect = {};
    window.ctxRect.width = renderWidth;
    window.ctxRect.height = renderHeight;
}
initCanvas();