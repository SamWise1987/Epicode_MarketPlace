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


const home = document.querySelector("#home");
const card = el(
    "div",
    { id: "card", class: "card" },
    el("img", { class: "card-img-top", src: "image_url", alt: "Card image" }),
    el("div", { class: "card-body" },
        el("h5", { class: "card-title" }, "Titolo"),
        el("p", { class: "card-text" }, "Brand"),
        el("p", { class: "card-text" }, "URL dell'immagine"),
        el("p", { class: "card-text" }, "Prezzo")
    )
);

home.appendChild(card);



