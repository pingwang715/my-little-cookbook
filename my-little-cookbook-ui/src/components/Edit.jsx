import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipeDetail, updateRecipe } from "../api/recipeService";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faTrash,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import PageTitle from "./PageTitle";

const BASE_URL = "http://localhost:8080";
const generateId = () =>
  Math.random().toString(36).substring(2) + Date.now().toString(36);

export default function Edit() {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const formRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Pre-filled form state
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);

  // Load existing recipe data
  useEffect(() => {
    getRecipeDetail(recipeId).then((data) => {
      setName(data.name);
      setCountry(data.country);
      setType(data.type);
      setImagePreview(`${BASE_URL}${data.imageUrl}`);
      setIngredients(
        (data.ingredients ?? []).map((ing) => ({
          ...ing,
          id: generateId(),
          unit: ing.unit ?? "",
          notes: ing.notes ?? "",
        })),
      );
      setInstructions(
        (data.instructions ?? []).map((ins) => ({
          ...ins,
          id: generateId(),
          description: ins.description ?? "",
        })),
      );
    });
  }, [recipeId]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Ingredient handlers
  const addIngredient = () => {
    setIngredients((prev) => [
      ...prev,
      { id: generateId(), name: "", quantity: "", unit: "", notes: "" },
    ]);
  };

  const removeIngredient = (id) => {
    if (ingredients.length === 1) return;
    setIngredients((prev) => prev.filter((ing) => ing.id !== id));
  };

  const handleIngredientChange = (id, field, value) => {
    setIngredients((prev) =>
      prev.map((ing) => (ing.id === id ? { ...ing, [field]: value } : ing)),
    );
  };

  // Instruction handlers
  const addInstruction = () => {
    setInstructions((prev) => [
      ...prev,
      { id: generateId(), stepNumber: prev.length + 1, description: "" },
    ]);
  };

  const removeInstruction = (id) => {
    if (instructions.length === 1) return;
    setInstructions((prev) => {
      const filtered = prev.filter((ins) => ins.id !== id);
      return filtered.map((ins, index) => ({
        ...ins,
        stepNumber: index + 1,
      }));
    });
  };

  const handleInstructionChange = (id, value) => {
    setInstructions((prev) =>
      prev.map((ins) => (ins.id === id ? { ...ins, description: value } : ins))
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userConfirmed = window.confirm("Save changes to this recipe?");
    if (!userConfirmed) return;

    const payload = new FormData();
    payload.append(
      "recipe",
      new Blob(
        [
          JSON.stringify({
            name,
            country,
            type,
            ingredients: ingredients.map(({ name, quantity, unit, notes }) => ({
              name,
              quantity: quantity ? parseFloat(quantity) : null,
              unit,
              notes,
            })),
            instructions: instructions.map(({ stepNumber, description }) => ({
              stepNumber,
              description,
            })),
          }),
        ],
        { type: "application/json" },
      ),
    );

    if (imageFile) {
      payload.append("image", imageFile);
    }

    try {
      setIsSubmitting(true);
      await updateRecipe(recipeId, payload);
      toast.success("Recipe updated successfully!");
      navigate(`/recipes/${recipeId}`);
    } catch (error) {
      console.error("Full error object:", error);
      console.error("Error response data:", error.response?.data);
      console.error("Error response status:", error.response?.status);
      console.error("Error response headers:", error.response?.headers);

      // Show the actual error message from the server
      const errorMessage = error.response?.data?.message ||
                          error.response?.data?.error ||
                          error.response?.data ||
                          error.message ||
                          "Failed to update your recipe. Please try again.";

      toast.error(typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage));
      setIsSubmitting(false);
        throw new Response(
          error.message || "Failed to update your recipe. Please try again.",
          { status: error.status || 500 },
        );
    }
  };

  const labelStyle =
    "block text-lg font-semibold text-primary dark:text-light mb-2";
  const textFieldStyle =
    "w-full px-4 py-2 text-base border rounded-md transition border-primary dark:border-light focus:ring focus:ring-dark dark:focus:ring-lighter focus:outline-none text-gray-800 dark:text-lighter bg-white dark:bg-gray-600 placeholder-gray-400 dark:placeholder-gray-300";

  return (
    <div className="max-w-[1152px] min-h-[852px] mx-auto px-6 py-8 font-primary bg-normalbg dark:bg-darkbg">
      <PageTitle title="Edit Recipe" />

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-6 max-w-[768px] mx-auto"
      >
        <div>
          <label className={labelStyle}>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={textFieldStyle}
            type="text"
            required
            minLength={3}
            maxLength={30}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className={labelStyle}>Country</label>
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className={textFieldStyle}
              type="text"
              required
            />
          </div>
          <div>
            <label className={labelStyle}>Type</label>
            <input
              value={type}
              onChange={(e) => setType(e.target.value)}
              className={textFieldStyle}
              type="text"
              required
            />
          </div>
        </div>

        {/* Ingredients */}
        <div className="gap-6">
          <div>
            <label className={labelStyle}>Ingredients</label>
            <div className="space-y-3 gap-6">
              {ingredients.map((ing, index) => (
                <div
                  key={ing.id}
                  className="grid grid-cols-4 gap-3 items-center"
                >
                  <input
                    type="text"
                    placeholder="Ingredient"
                    value={ing.name}
                    onChange={(e) =>
                      handleIngredientChange(ing.id, "name", e.target.value)
                    }
                    className={textFieldStyle}
                    required
                  />
                  <input
                    type="text"
                    placeholder="1, 2 ..."
                    value={ing.quantity}
                    onChange={(e) =>
                      handleIngredientChange(ing.id, "quantity", e.target.value)
                    }
                    className={textFieldStyle}
                    required
                  />
                  <input
                    type="text"
                    placeholder="g, tbsp ..."
                    value={ing.unit}
                    onChange={(e) =>
                      handleIngredientChange(ing.id, "unit", e.target.value)
                    }
                    className={textFieldStyle}
                  />
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="sliced ..."
                      value={ing.notes}
                      onChange={(e) =>
                        handleIngredientChange(ing.id, "notes", e.target.value)
                      }
                      className={textFieldStyle}
                    />
                    <button
                      type="button"
                      onClick={() => removeIngredient(ing.id)}
                      className="text-red-400 hover:text-red-600 disabled:opacity-30"
                      disabled={ingredients.length === 1}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addIngredient}
                className="mt-3 flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:opacity-75 transition"
              >
                <FontAwesomeIcon icon={faPlusCircle} />
                <span>Add Ingredient</span>
              </button>
            </div>

            {/* Instructions */}
            <div className="mt-6">
              <label className={labelStyle}>Instructions</label>

              <div className="space-y-3">
                {instructions.map((ins, index) => (
                  <div key={ins.id} className="flex gap-3 items-center">
                    <span
                      className="flex-shrink-0 w-8 h-8 flex items-center justify-center
                  rounded-full bg-primary dark:bg-light text-white text-sm font-bold"
                    >
                      {ins.stepNumber}
                    </span>

                    <input
                      name={`instructions[${index}].stepNumber`}
                      type="hidden"
                      value={ins.stepNumber}
                    />
                    <input
                      name={`instructions[${index}].description`}
                      type="text"
                      placeholder={`Step ${ins.stepNumber}...`}
                      value={ins.description}
                      onChange={(e) =>
                        handleInstructionChange(ins.id, e.target.value)
                      }
                      className={`${textFieldStyle} flex-1`}
                      required
                    />

                    <button
                      type="button"
                      onClick={() => removeInstruction(ins.id)}
                      className="text-red-400 hover:text-red-600 disabled:opacity-30 flex-shrink-0"
                      disabled={instructions.length === 1}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={addInstruction}
                className="mt-3 flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:opacity-75 transition"
              >
                <FontAwesomeIcon icon={faPlusCircle} />
                <span>Add Step</span>
              </button>
            </div>

            {/* Image */}
            <div className="mt-6">
              <label className={labelStyle}>Image</label>
              <label
                htmlFor="image"
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed
            border-primary dark:border-light rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition overflow-hidden"
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-primary dark:text-light opacity-60">
                    <FontAwesomeIcon icon={faImage} className="text-4xl" />
                    <span className="text-sm">Click to change image</span>
                  </div>
                )}
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              {imageFile && (
                <div className="mt-2 flex items-center justify-between text-sm text-gray-500 dark:text-gray-300">
                  <span>New image selected</span>
                  <button
                    type="button"
                    onClick={() => {
                      setImageFile(null);

                    }}
                  >
                    Revert
                  </button>
                </div>
              )}
            </div>

            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 text-white dark:text-black text-xl rounded-md transition duration-200 bg-primary dark:bg-light hover:bg-dark dark:hover:bg-lighter"
              >
                {isSubmitting ? "Saving..." : "Save changes"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
