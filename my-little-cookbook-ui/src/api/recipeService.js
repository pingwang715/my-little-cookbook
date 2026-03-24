import apiClient from "./apiClient";

export const getRecipeDetail = async (id) => {
  const response = await apiClient.get(`/recipes/${id}`);
  return response.data;
}

export const updateRecipe = async (id, data) => {
  try {
    const response = await apiClient.patch(`/recipes/${id}/edit`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    return response.data;
  } catch (error) {
    console.error("Error updating: ", error);
    throw error;
  }
}

export const deleteRecipe = async (id) => {
  const response = await apiClient.delete(`/recipes/${id}`);
  return response.data;
}
