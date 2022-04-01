import ConcreteProductA from "./ConcreteProductA";
import ConcreteProductB from "./ConcreteProductB";
import ConcreteProductC from "./ConcreteProductC";
import {IProduct} from "./IProduct";

class ConcreteProduct {
    static getProduct(product: string): IProduct {
        if(product === "A") {
            return new ConcreteProductA();
        } else if (product === "B") {
            return new ConcreteProductB();
        } else {
            return new ConcreteProductC();
        }
    }
}

export default ConcreteProduct;