import axiosInstance from './axiosInstance'

export async function postImage(payload) {
  try {
    let response = axiosInstance.post("/api/image", payload);

    return response;
  } catch (error) {
    console.error(error);
  }
}

export async function getImage(page = 1, perPage = 10) {
  try {
    let response = axiosInstance.get(
      `/api/images?page=${page}&per_page=${perPage}`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
}
