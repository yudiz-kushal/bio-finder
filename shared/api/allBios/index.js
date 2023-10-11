import axiosInstance from "../url";

export async function allBios({ pageNumber, type, size, platFormType }) {
    return await axiosInstance.get(`useinfo?pageNumber=${pageNumber}&type=${type}&size=${size}&platFormType=${platFormType}`)
}
