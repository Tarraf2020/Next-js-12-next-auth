//@ts-ignore
import api from "@/util/api";

export const getAllData = async (bucket: string) => {
  try {
    const response = await api.get(`/archive/redis`);
    return { data: response.data };
  } catch (error) {
    return error.response;
  }
};

export const getOneData = async (blob: string) => {
  try {
    let response = await api.get(`/archive/redis/${blob}`);
    return { data: response.data };
  } catch (error) {
    return error.response;
  }
};

export const getAutocomplete = async (blob: string) => {
  try {
    let response = await api.get(`/search/autocomplete/${blob}`);
    return { data: response.data };
  } catch (error) {
    return error.response;
  }
};

export const getSearchedData = async (blob: string) => {
  try {
    let response = await api.get(`/search/query/${blob}`);
    return { data: response.data };
  } catch (error) {
    return error.response;
  }
};

export const getAllArchive = async () => {
  try {
    const response = await api.get(`/admin/archive`);

    return { data: response.data };
  } catch (error) {
    return error.response;
  }
};

export const getOneArchive = async (blob: string) => {
  try {
    const response = await api.get(`/admin/archive/${blob}`);
    return { data: response.data };
  } catch (error) {
    return error.response;
  }
};

export const editArchive = async (body: any) => {
  const { name, newName, blob } = body;
  try {
    const response = await api.put(`/admin/archive/${name}`, {
      name: newName,
      blob,
    });
    return { data: response.data };
  } catch (error) {
    return error.response;
  }
};

export const addArchive = async (body: any) => {
  try {
    const response = await api.post(`/admin/archive`, body);
    return { data: response.data };
  } catch (error) {
    return error.response;
  }
};

export const deleteArchive = async (name: any) => {
  try {
    const response = await api.delete(`/admin/archive/${name}`);
    return { data: response.data };
  } catch (error) {
    return error.response;
  }
};

export const getMetaData = async (blob: string) => {
  try {
    const response = await api.get(`archive/metadata/${blob}`);
    return { data: response.data };
  } catch (error) {
    return error.response;
  }
};

export const postMetaData = async (data: any) => {
  const { metaData, bucketName } = data;
  try {
    const response = await api.post(`archive/metadata/${bucketName}`, {
      data: metaData,
    });
    return { data: response.data };
  } catch (error) {
    return error.response;
  }
};

export const getCloudUrls = async (data: any) => {
  try {
    const response = await api.post(`archive/cloudstorage`, data);

    return { data: response.data };
  } catch (error) {
    return error.response;
  }
};