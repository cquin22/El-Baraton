/**
 * Category
 *
 * @description :: Category object
 * @author:: Cristian Quintero <cristianqr22@gmail.com>
*/

export class Category{

    public id : number;

    public name: string;

    public sublevels: Array<Category> = [];
    
}