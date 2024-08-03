import { ROUTES_PATH } from '../routes/constants';

/**
 * @description give first 30 products
 */
export async function getProductList() {

    try {

        let data = await fetch(ROUTES_PATH.PRODUCTS)
        return data.json();
    } catch (err) {
        return []
    }
}