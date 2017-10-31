﻿
class Render implements IRender
{
    private _canvas: HTMLCanvasElement = null;
    private _gl: WebGLRenderingContext = null;

    constructor(canvas: string)
    {
        this._canvas = <HTMLCanvasElement>document.getElementById(canvas);
        this._gl = this._canvas.getContext("webgl", { /*options*/ });

        // If aquiring the webgl context failed, terminate

        if (!this._gl)
        {
            console.error('Unable to aquire webgl context');
        }
    }

    public gl(): WebGLRenderingContext
    {
        return this._gl;
    }

    public clear(r: number, g: number, b: number, a: number): void
    {
        this._gl.clearColor(r, g, b, a);
        this._gl.clear(this._gl.COLOR_BUFFER_BIT);
    }

    public update(delta: number, then: number): void
    {

    }
}