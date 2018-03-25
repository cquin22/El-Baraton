import { PriceRange } from "./price-range.model";
import { QuantityRange } from "./quantity-range.model";


export class Search {

    public word: string;

    public available: boolean;

    public priceRange: PriceRange;

    public quantityRange: QuantityRange;

    public sublevelId: number;


}