import apiClient from "./apiClient";

export const getRecipeDetail = async (id) => {
  const response = await apiClient.get(`/recipes/${id}`);
  return response.data;
}
