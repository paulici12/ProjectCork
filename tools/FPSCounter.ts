
class FpsCounter
{
    private readonly  stats: Stats;

    constructor(container: string)
    {
        this.stats = new Stats();
        $(container).append(this.stats.domElement);
    }

    update()
    {
        if (this.stats)
        {
            this.stats.update();
        }
    }
}
