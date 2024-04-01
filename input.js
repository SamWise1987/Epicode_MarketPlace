

let params = new URLSearchParams(window.location.search);
let productId = params.get('id');
const isEdit = !!productId;

const submitButton = document.querySelector('#submitBtn');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const formData = {
        name: document.querySelector('#inputName').value,
        description: document.querySelector('#inputDescription').value,
        brand: document.querySelector('#inputBrand').value,
        imageUrl: document.querySelector('#inputImageUrl').value,
        price: document.querySelector('#inputPrice').value,
    };

    try {
        if (isEdit) {
             updateProduct(formData, productId);
        } else {
             createProduct(formData);
        }
    } catch (error) {
        console.log(error);
    }
});
      
window.onload = async () => {
    //if (!productId) return;

    document.querySelector('#submitBtn').innertext = 'Update product'

    const response = abstractFetch("https://dummyjson.com/products")
    console.log(response);


    document.querySelector('#inputName').value = data.name;
    document.querySelector('#inputDescription').value = data.description;;
    document.querySelector('#inputBrand').value = data.brand;
    document.querySelector('#inputImageUrl').value = data.imageUrl;
    document.querySelector('#inputPrice').value = data.price;

}


