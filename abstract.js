const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/"
const KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAzMTI0YWU2MDQ3YjAwMTlmYTVmZmYiLCJpYXQiOjE3MTE0NzczMjIsImV4cCI6MTcxMjY4NjkyMn0.vDDFkZcNAhcg6Ybf_Zp03krPWfYkaC8GWh9BCwqmn5o"
const defaultHeaders = {
    "Authorization": KEY,
    "Content-type": "application/json",
}

const hideSpinner = () => {
    const spinner = document.querySelector("#spinner")
    spinner.classList.add("d-none")
}

const showSpinner = () => {
    const spinner = document.querySelector("#spinner")
    spinner.classList.remove("d-none")
}

const abstractFetch = async (url, option = {}, manageSpinner = false) => {

    const requestOptions = {
        method: option.method || "GET",
        headers: { ...defaultHeaders, ...option.headers },
        ...option
    }
    manageSpinner
        ? showSpinner()
        : null;
    if (requestOptions.body) {
        requestOptions.body = JSON.stringify(option.body)//proverò il ternario in seguito
    }
    try {
        const response = await fetch(url, requestOptions)
        if (!response.ok) {
            throw new Error(`${option.method} Response from fetch not ok`)
        }
        return await response.json();
    } catch (error) {
        console.log(error);
        throw error;
    } finally {

        if (manageSpinner) {
            hideSpinner();
        }
    }
}