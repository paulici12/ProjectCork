
class Render
{
    private readonly canvas: HTMLCanvasElement;
    private readonly gl: WebGLRenderingContext | null;

    constructor(canvas: string)
    {
        this.canvas = (document.getElementById(canvas) as HTMLCanvasElement);
        this.gl = this.canvas.getContext("webgl", { /*options*/ });

        // If aquiring the webgl context failed, terminate

        if (!this.gl)
        {
            console.error("Unable to aquire webgl context");
        }
    }

    context(): WebGLRenderingContext | null
    {
        return this.gl;
    }

    clear(r: number, g: number, b: number, a: number): void
    {
        if (this.gl)
        {
            this.gl.clearColor(r, g, b, a);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        }
    }

    update(delta: number, then: number): void
    {

    }














    test() 
    {
        this.clear(0.0, 0.0, 0.0, 0.5);

    }
}