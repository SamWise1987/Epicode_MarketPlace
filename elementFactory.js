const el = (type, attributes, ...childrens) => {
 const element = document.createElement(type);

Object.keys(attributes).forEach(key => {
    element.setAttribute(key, attributes[key]);

})
childrens.forEach(child => {
    if ( typeof child === "string"){
        element.appendChild(document.createTextNode(child))
    }else{
        element.appendChild(child);
    }
})
return element;
};
 const addProductCard = (product) => {
    const home = document.querySelector("#home");
    const productCard = el(
        "div",
        { id: "card", class: "card", style: "width: 18rem;" },
        el("img", { class: "card-img-top", src: product.imageUrl || "", alt: product.name }),
        el("div", { class: "card-body" },
            el("h5", { class: "card-title" }, "Titolo"),
            el("p", { class: "card-text" }, `Brand: ${product.name}`),
            el("p", { class: "card-text" }, `Prezzo: ${product.price}`),
        )
    );
    
    home.appendChild(productCard);
}

//export {addProductCard};

