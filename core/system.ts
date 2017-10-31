
var System: CorkSystem = null;

class CorkSystem
{
    private _fpsCounter: FPSCounter = null;
    private _pageScaler: PageScaler = null;
    private _render: IRender = null;

    private _renderExamples: RenderExamples = null;

    constructor()
    {
        this._fpsCounter = new FPSCounter("#stats");
        this._pageScaler = new PageScaler("#cork_canvas");
        this._render = new Render("cork_canvas");

        this._renderExamples = new RenderExamples();


        //test
        this.test();
    }

    init()
    {
        
    }

    test()
    {
        this._render.clear(0.0, 0.0, 0.0, 1);
        this._renderExamples.test(this._render.gl());
    }

    public fpsCounter(): FPSCounter
    {
        return this._fpsCounter;
    }

    public pageScaler(): PageScaler
    {
        return this._pageScaler;
    }

    public render(): IRender
    {
        return this._render;
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
            System.render().update(delta, then);
            System.fpsCounter().update();
        }
    }

    draw();
}
