import { PriceRange } from "./price-range.model";
import { QuantityRange } from "./quantity-range.model";

/**
 * Search
 *
 * @description :: Search object
 * @author:: Cristian Quintero <cristianqr22@gmail.com>
*/

export class Search {

    public word: string;

    public available: boolean;

    public priceRange: PriceRange;

    public quantityRange: QuantityRange;

    public sublevelId: number;


}