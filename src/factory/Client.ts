import ConcreteProduct from "./ConcreteProduct";

function retrieveProduct() {
    const product = ConcreteProduct.getProduct("A");
    return product;
}

export default retrieveProduct;