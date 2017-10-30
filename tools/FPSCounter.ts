
class FPSCounter
{
    private _stats: Stats = null;

    constructor(container: string)
    {
        this._stats = new Stats();
        $(container).append(this._stats.domElement);
    }

    public update()
    {
        if (this._stats)
        {
            this._stats.update();
        }
    }
}
