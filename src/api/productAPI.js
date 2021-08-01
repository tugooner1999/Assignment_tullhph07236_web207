import instance from "./instance";

export const getAllProduct = () => {
    const url = `/products`;
    return instance.get(url);
}

export const getDetailPro = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
}

export const addProduct = (item) => {
    const url = `/products`;
    return instance.post(url, item);
}

export const removeProduct = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}

export const updateProduct = (item) => {
    const url = `/products/${item.id}`;
    return instance.put(url, item);
}