import {IProduct} from "./IProduct";

class Product implements IProduct {
    name = "";

    createObject(): IProduct {
        return this;
    }
}

export default Product;