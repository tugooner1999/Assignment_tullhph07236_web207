import instance from "./instance";

export const get_allUser = () => {
    const url =`/users`;
    return instance.get(url);
}

export const getDetailUser = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
}

export const remove_user = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url);
}