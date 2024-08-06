import { ROUTES_PATH } from '../routes/constants';

/**
 * @description give first
 */
export async function getProductById(id) {

    try {
        let data = await fetch(ROUTES_PATH.PRODUCTS + `/${id}`)
        return data.json();
    } catch (err) {
        return []
    }
}