const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/"
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAzMTI0YWU2MDQ3YjAwMTlmYTVmZmYiLCJpYXQiOjE3MTE0NzczMjIsImV4cCI6MTcxMjY4NjkyMn0.vDDFkZcNAhcg6Ybf_Zp03krPWfYkaC8GWh9BCwqmn5o"


let params = new URLSearchParams(window.location.search);
let productId = searchParams.get('id');

const submitButton = document.querySelector('#submitButton');

submitButton.addEventListener('click', async (event) => {
    event.preventDefault();

    // Creo un oggetto con i dati del form
    const formData = {
        name: document.querySelector('#inputName').value,
        description: document.querySelector('#inputDescription').value, 
        brand: document.querySelector('#inputBrand').value,
        imageUrl: document.querySelector('#inputImageUrl').value,
        price: document.querySelector('#inputPrice').value,
    };

    // Invio i dati con una richiesta PUT
    try {
        const response = await abstractFetch(ENDPOINT + productId , {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        }, true);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
});