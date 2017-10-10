$(document).ready(function () {
    system = new System();
});
//window.onload = () =>
//{
//    const canvas: HTMLCanvasElement = document.createElement("canvas");
//    const gl: WebGL2RenderingContext | null = canvas.getContext("webgl2", { antialias: false });
//    if (gl === null)
//    {
//        console.log("WebGL2 not available");
//        return;
//    }
//    const maxsize = gl.getParameter(gl.MAX_3D_TEXTURE_SIZE);
//    console.log("Attempting to create super useful, empty, NPOT 3D texture of size ${maxsize} x 13 x 5...");
//    const texture = gl.createTexture();
//    gl.activeTexture(gl.TEXTURE0);
//    gl.bindTexture(gl.TEXTURE_3D, texture);
//    gl.texImage3D(gl.TEXTURE_3D, 0, gl.R32F, maxsize, 13, 5, 0, gl.RED, gl.FLOAT, null);
//    if (gl.getError() !== gl.NO_ERROR)
//    {
//        console.log("Oh noes!");
//    } else
//    {
//        console.log("Success!");
//    }
//    gl.deleteTexture(texture);
//}; 
var PageScaler = /** @class */ (function () {
    function PageScaler(selector) {
        var _this = this;
        this._sellector = "";
        this._sellector = selector;
        this.update();
        window.addEventListener("resize", function () { _this.update(); });
    }
    PageScaler.prototype.update = function () {
        var _value = (window.innerWidth > window.innerHeight) ? window.innerHeight : window.innerWidth;
        $(this._sellector).width(_value);
        $(this._sellector).height(_value);
    };
    return PageScaler;
}());
var system = null;
var System = /** @class */ (function () {
    function System() {
        this._canvas = null;
        this._gl = null;
        this._pageScaler = null;
        this._stats = null;
        this.init();
    }
    System.prototype.init = function () {
        this._pageScaler = new PageScaler("#cork_canvas");
        this.setupStats();
        this._canvas = document.getElementById("cork_canvas");
        this._gl = this._canvas.getContext("webgl2", {});
        this._gl.clearColor(0.0, 0.0, 0.0, 0.5);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT);
    };
    System.prototype.setupStats = function () {
        this._stats = new Stats();
        $("#stats").append(this._stats.domElement);
    };
    return System;
}());
//# sourceMappingURL=cork.js.map