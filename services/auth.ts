//@ts-ignore
import api from "@/util/api";

export const login = async (body: any) => {
    try {
      const response = await api.post(`/auth/login`, body);
      return { data: response.data };
    } catch (error) {
      return error.response;
    }
  };