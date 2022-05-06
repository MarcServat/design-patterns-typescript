import ConcreteProduct from "./ConcreteProduct";

function retrieveProduct() {
    const start = performance.now();
    const product = ConcreteProduct().getProduct("A");
    const end = performance.now();
    return {product, time: end - start};
}

export default retrieveProduct;