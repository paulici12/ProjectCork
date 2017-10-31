
class PageScaler
{
    private readonly sellector: string = "";

    constructor(selector: string)
    {
        this.sellector = selector;

        this.update();
        window.addEventListener("resize", () => { this.update(); });
    }

    private update()
    {
        const value = (window.innerWidth > window.innerHeight) ? window.innerHeight : window.innerWidth;

        $(this.sellector).width(value);
        $(this.sellector).height(value);
    }
}
