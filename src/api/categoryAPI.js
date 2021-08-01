import instance from "./instance";

export const getAllCate = () => {
    const url = `/category`;
    return instance.get(url);
};

export const getDetailCate = (id) => {
    const url =`/category/${id}`;
    return instance.get(url);
}

export const addCate = (item) => {
    const url = `/category`;
    return instance.post(url, item);
};

export const removeCate = (id) => {
    const url = `/category/${id}`;
    return instance.delete(url);
}

export const updateCate = (item) => {
    const url = `/category/${item.id}`;
    return instance.put(url, item);
}