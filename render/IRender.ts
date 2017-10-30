
interface IRender
{
    clear(r: number, g: number, b: number, a: number): void
    update(delta: number, then: number): void;
}