import {IProduct} from "./IProduct";

function Product(_name: string): IProduct {
    const name = _name;
    return { name };
}

export default Product;