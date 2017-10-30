
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

    private init()
    {
        this._pageScaler = new PageScaler("#cork_canvas");

        this.setupStats();

        this._canvas = <HTMLCanvasElement>document.getElementById("cork_canvas");

        this._gl = this._canvas.getContext("webgl2", { /*options*/ })

        this._gl.clearColor(0.0, 0.0, 0.0, 0.5);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT);

        renderLoop();
    }

    private setupStats()
    {
        this._stats = new Stats();
        $("#stats").append(this._stats.domElement);
    }

    public update(delta: number, then: number): void
    {
        if (this._stats)
        {
            this._stats.update();
        }
    }
}

function renderLoop()
{
    let fps: number = 60;
    let now: number = 0;
    let then: number = Date.now();
    let interval: number = 1000 / fps;
    let delta: number = 0;

    function draw()
    {
        requestAnimationFrame(draw);

        now = Date.now();
        delta = now - then;

        if (delta > interval)
        {
            // update time stuffs

            // Just `then = now` is not enough.
            // Lets say we set fps at 10 which means
            // each frame must take 100ms
            // Now frame executes in 16ms (60fps) so
            // the loop iterates 7 times (16*7 = 112ms) until
            // delta > interval === true
            // Eventually this lowers down the FPS as
            // 112*10 = 1120ms (NOT 1000ms).
            // So we have to get rid of that extra 12ms
            // by subtracting delta (112) % interval (100).
            // Hope that makes sense.

            then = now - (delta % interval);

            // ... Code for Drawing the Frame ...
            system.update(delta, then);
        }
    }

    draw();
}
