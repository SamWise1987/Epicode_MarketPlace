const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/"
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAzMTI0YWU2MDQ3YjAwMTlmYTVmZmYiLCJpYXQiOjE3MTE0NzczMjIsImV4cCI6MTcxMjY4NjkyMn0.vDDFkZcNAhcg6Ybf_Zp03krPWfYkaC8GWh9BCwqmn5o"
const defaultHeaders = {
    "Authorization": KEY,
    "Content-type": "application/json",
}

const formData = {
    name: "prova",
    description: "lallero",
    brand: "fiattolo",
    amgeUrl: "",
    price: "687",
}

const hideSpinner = () =>{
    const spinner = document.querySelector("#spinner")
    spinner.classList.add("d-none")
}

const showSpinner = () =>{
    const spinner = document.querySelector("#spinner")
    spinner.classList.remove("d-none")
}

const abstractFetch = async (url, option = {}, manageSpinner = false) => {
   
    const requestOptions = {
        method: option.method || "GET",
        headers: { ...defaultHeaders, ...option.header},
        ...option
    }
    manageSpinner
    ? showSpinner()
    : null;
    if(requestOptions.body){
        requestOptions.body = JSON.stringify(option.body)//proverò il ternario in seguito
    }
    try {
        const response = await fetch(url, requestOptions)
        if(! response.ok){
            throw new Error(`${option.method} Response from fetch not ok`)
        }
        return await response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }finally {
       
        if (manageSpinner){
            hideSpinner();
        }
    }
}
abstractFetch(ENDPOINT, {}).then(res => console.log(res));
//abstractFetch(ENDPOINT, {method: "POST", headers:{"Content-type": "application/json"}, body: obj}).then(res => console.log(res));

const getProduct = async (headers, method, body) => {
    try {
        const response = await fetch(ENDPOINT); 
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error("[GET] Response from fetch not ok")
        }
    } catch (error) {
    }
}



