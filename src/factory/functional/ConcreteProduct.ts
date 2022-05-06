import ConcreteProductA from "./ConcreteProductA";
import ConcreteProductB from "./ConcreteProductB";
import ConcreteProductC from "./ConcreteProductC";
import {IProduct} from "./IProduct";

function ConcreteProduct () {
    return{
        getProduct(product: string): IProduct {
            if(product === "A") {
                return ConcreteProductA();
            } else if (product === "B") {
                return ConcreteProductB();
            } else {
                return ConcreteProductC();
            }
        }
    }
}

export default ConcreteProduct;