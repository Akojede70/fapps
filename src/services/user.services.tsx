import api from "./api";

export const fetchUsers = async () => {
    try {
        const data = await api.req('/users')
        return data;
    } catch (error: any) {
        console.log("error in fetching users: ", error.message)
    }
}