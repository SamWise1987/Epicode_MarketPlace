

//const formData = {
// name: "prova",
// description: "lallero",
//brand: "fiattolo",
//imgeUrl: "",
//price: "687",
//}


//abstractFetch(ENDPOINT, {}).then(res => console.log(res));
//abstractFetch(ENDPOINT, {method: "POST", headers:{"Content-type": "application/json"}, body: obj}).then(res => console.log(res));




window.onload = async () =>{
    const response = await abstractFetch("https://dummyjson.com/products", {method: "POST"})
    console.log(response.products);
    response.products.map((product) => addProductCard(product))

}




abstractFetch("https://dummyjson.com/products", {method: "PUT", body: formData}, true)