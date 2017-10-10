
class PageScaler
{
    private _sellector: string = "";

    constructor(selector: string)
    {
        this._sellector = selector;

        this.update();
        window.addEventListener("resize", () => { this.update(); });
    }

    private update()
    {
        let _value: number = (window.innerWidth > window.innerHeight) ? window.innerHeight : window.innerWidth;

        $(this._sellector).width(_value);
        $(this._sellector).height(_value);
    }
}
