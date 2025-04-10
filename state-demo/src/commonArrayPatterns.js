// Common patterns for updating arrays in state
// PROBLEM: We can't mutate arrays, we copy and change.
const shoppingCart = [
    { id: 1, product: "HDMI Cable", price: 4},
    { id: 2, product: "USB-C Cable", price: 6},
    { id: 3, product: "HDMI to VGA Adapter", price: 10},
    { id: 4, product: "HDMI to DVI Adapter", price: 12},
    { id: 5, product: "USB-C to HDMI Adapter", price: 15},
    { id: 6, product: "USB-C to VGA Adapter", price: 18},
    { id: 7, product: "USB-C to DVI Adapter", price: 20},
    { id: 8, product: "HDMI Splitter", price: 25},
    { id: 9, product: "HDMI Switch", price: 30},
    { id: 10, product: "USB-C Hub", price: 35},
];

// Adding to an Array
const addedCart = [...shoppingCart, { id: 11, product: "Apple", price: 1 }];

// Removing an Element
const filteredCart = shoppingCart.filter((item) => item.id !== 2);

// Updating all elements in an Array
const updatedCart = shoppingCart.map((item) => {
    return {
        ...item,
        product: item.product.toLowerCase(),
    };
});