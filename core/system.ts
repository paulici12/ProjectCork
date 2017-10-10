
var system: System = null;

class System
{
    private _canvas: HTMLCanvasElement = null;
    private _gl: WebGL2RenderingContext = null;

    private _pageScaler: PageScaler = null;
    private _stats: Stats = null;

    constructor()
    {
        this.init();
    }

    init()
    {
        this._pageScaler = new PageScaler("#cork_canvas");

        this.setupStats();

        this._canvas = <HTMLCanvasElement>document.getElementById("cork_canvas");

        this._gl = this._canvas.getContext("webgl2", { /*options*/ })

        this._gl.clearColor(0.0, 0.0, 0.0, 0.5);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT);
    }

    private setupStats()
    {
        this._stats = new Stats();
        $("#stats").append(this._stats.domElement);
    }
}
