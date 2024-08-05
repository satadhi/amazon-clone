export const setLoggedIn = (token) => {
    localStorage.setItem("authToken", token)
}

export const clearLoggedIn = () => {
    console.log("clear login")
    localStorage.clear();
}

export const getAuthToken = () => {
    return localStorage.getItem("authToken")
}

export const setCheckoutProductList = (newProduct) => {

    let productList = JSON.parse(localStorage.getItem('checkoutProductList')) || [];
    localStorage.setItem("checkoutProductList", JSON.stringify([newProduct, ...productList]))

}

export const getCheckoutProductList = () => {
    let list = localStorage.getItem('checkoutProductList');
    console.log("itemDetail itemDetail", list)
    if (list)
        return JSON.parse(list)
    else
        return []

}
