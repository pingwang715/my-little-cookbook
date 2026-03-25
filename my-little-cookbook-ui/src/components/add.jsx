import React, { useState, useRef, useEffect } from "react";
import PageTitle from "./PageTitle";
import apiClient from "../api/apiClient";
import { useNavigation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faTrash,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "../api/photoService";

export default function Add() {
  const formRef = useRef(null);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [totalTime, setTotalTime] = useState("");

  useEffect(() => {
    if (prepTime && cookTime) {
      setTotalTime(String(parseInt(prepTime) + parseInt(cookTime)));
    }
  }, [prepTime, cookTime]);

  const navigate = useNavigate();

  const [ingredients, setIngredients] = useState([
    { id: Date.now(), name: "", quantity: "", unit: "", notes: "" },
  ]);

  const [instructions, setInstructions] = useState([
    {
      id: Date.now(),
      stepNumber: 1,
      description: "",
    },
  ]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const addIngredient = () => {
    setIngredients((prev) => [
      ...prev,
      { id: Date.now(), name: "", quantity: "", unit: "", notes: "" },
    ]);
  };

  const removeIngredient = (id) => {
    if (ingredients.length === 1) return; // keep at least one row
    setIngredients((prev) => prev.filter((ing) => ing.id !== id));
  };

  const handleIngredientChange = (id, field, value) => {
    setIngredients((prev) =>
      prev.map((ing) => (ing.id === id ? { ...ing, [field]: value } : ing)),
    );
  };

  const addInstruction = () => {
    setInstructions((prev) => [
      ...prev,
      { id: Date.now(), stepNumber: prev.length + 1, description: "" },
    ]);
  };

  const removeInstruction = (id) => {
    if (instructions.length === 1) return;
    setInstructions((prev) => {
      const filtered = prev.filter((ins) => ins.id !== id);
      return filtered.map((ins, index) => ({ ...ins, stepNumber: index + 1 }));
    });
  };

  const handleInstructionChange = (id, value) => {
    setInstructions((prev) =>
      prev.map((ins) => (ins.id === id ? { ...ins, description: value } : ins)),
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userConfirmed = window.confirm(
      "Are you sure you want to submit the recipe?",
    );
    if (!userConfirmed) {
      toast.info("Recipe submission cancelled.");
      return;
    }

    const data = new FormData(formRef.current);

    for (let [key, value] of data.entries()) {
      console.log(key, value);
    }

    const name = data.get("name");
    const country = data.get("country");
    const type = data.get("type");
    const prepTime = data.get("prepTime");
    const cookTime = data.get("cookTime");
    const totalTime = data.get("totalTime");
    const servings = data.get("servings");
    const image = data.get("image");
    console.log("Image:", image); // should be a File object, not null

    const ingredients = [];
    let i = 0;
    while (data.get(`ingredients[${i}].name`)) {
      ingredients.push({
        name: data.get(`ingredients[${i}].name`),
        quantity: parseFloat(data.get(`ingredients[${i}].quantity`)),
        unit: data.get(`ingredients[${i}].unit`) || null,
        notes: data.get(`ingredients[${i}].notes`) || null,
      });
      i++;
    }

    const instructions = [];
    let j = 0;
    while (data.get(`instructions[${j}].description`)) {
      instructions.push({
        stepNumber: Number(data.get(`instructions[${j}].stepNumber`)),
        description: data.get(`instructions[${j}].description`),
      });
      j++;
    }

    const payload = new FormData();

    // ✅ Blob with explicit type so Spring sees Content-Type: application/json on this part
    payload.append(
      "recipe",
      new Blob(
        [
          JSON.stringify({
            name,
            country,
            type,
            prepTime: prepTime ? parseInt(prepTime) : null,
            cookTime: cookTime ? parseInt(cookTime) : null,
            totalTime: totalTime ? parseInt(totalTime) : null,
            servings: servings ? parseInt(servings) : null,
            ingredients,
            instructions,
          }),
        ],
        {
          type: "application/json",
        },
      ),
    );
    payload.append("image", imageFile);

    const recipeJson = {
      name,
      country,
      type,
      prepTime,
      cookTime,
      totalTime,
      servings,
      ingredients,
      instructions,
    };

    console.log("Sending payload:", JSON.stringify(recipeJson, null, 2)); // ← add this
    console.log("Image:", imageFile);

    try {
      await apiClient.post("/recipes", payload, {
        headers: {
          "Content-Type": undefined,
        },
      });
      // formRef.current?.reset();
      setIngredients([
        { id: Date.now(), name: "", quantity: "", unit: "", notes: "" },
      ]);
      setInstructions([{ id: Date.now(), stepNumber: 1, description: "" }]);
      setImagePreview(null);
      setImageFile(null);
      toast.success("Your recipe has been submitted successfully!");
      navigate("/home");
    } catch (error) {
      throw new Response(
        error.message || "Failed to submit your recipe. Please try again.",
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
      <PageTitle title="New Recipe" />

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-6 max-w-[768px] mx-auto"
      >
        <div>
          <label htmlFor="name" className={labelStyle}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Recipe Name"
            className={textFieldStyle}
            required
            minLength={3}
            maxLength={30}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="country" className={labelStyle}>
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              placeholder="Recipe Country"
              required
              className={textFieldStyle}
            />
          </div>
          <div>
            <label htmlFor="type" className={labelStyle}>
              Type
            </label>
            <select name="type" id="type" className={textFieldStyle} required>
              <option value="meal">meal</option>
              <option value="dessert">dessert</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <label htmlFor="prepTime" className={labelStyle}>
              Prep time
            </label>
            <input
              id="prepTime"
              name="prepTime"
              type="number"
              placeholder="minutes"
              required
              className={textFieldStyle}
              min={0}
              value={prepTime}
              onChange={(e) => setPrepTime(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cookTime" className={labelStyle}>
              Cook time
            </label>
            <input
              id="cookTime"
              name="cookTime"
              type="number"
              placeholder="minutes"
              required
              className={textFieldStyle}
              min={0}
              value={cookTime}
              onChange={(e) => setCookTime(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="prepTime" className={labelStyle}>
              Total time
            </label>
            <input
              id="totalTime"
              name="totalTime"
              type="number"
              placeholder="minutes"
              required
              className={`${textFieldStyle} opacity-60`}
              min={0}
              value={totalTime}
              readOnly
            />
          </div>
        </div>

        <div>
          <label htmlFor="servings" className={labelStyle}>
            Servings
          </label>
          <input
            type="number"
            id="servings"
            name="servings"
            placeholder="1"
            className={textFieldStyle}
            min="1"
            max="20"
          />
        </div>

        <div className="gap-6">
          {/* Ingredients */}
          <div>
            <label className={labelStyle}>Ingredients</label>

            <div className="space-y-3">
              {ingredients.map((ing, index) => (
                <div
                  key={ing.id}
                  className="grid grid-cols-4 gap-3 items-center"
                >
                  <input
                    name={`ingredients[${index}].name`}
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
                    name={`ingredients[${index}].quantity`}
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
                    name={`ingredients[${index}].unit`}
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
                      name={`ingredients[${index}].notes`}
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
            </div>

            {/* Add row button */}
            <button
              type="button"
              onClick={addIngredient}
              className="mt-3 flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:opacity-75 transition"
            >
              <FontAwesomeIcon icon={faPlusCircle} />
              <span>Add Ingredient</span>
            </button>
          </div>
        </div>
        <div>
          <label className={labelStyle}>Instructions</label>

          <div className="space-y-3">
            {instructions.map((ins, index) => (
              <div key={ins.id} className="flex gap-3 items-center">
                {/* Step number badge */}
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

        <div>
          <label className={labelStyle}>Image</label>
          <label
            htmlFor="image"
            className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed
              border-primary dark:border-light rounded-md cursor-pointer
              hover:bg-gray-50 dark:hover:bg-gray-700 transition overflow-hidden"
          >
            {imagePreview ? (
              // Preview
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              // Placeholder
              <div className="flex flex-col items-center gap-2 text-primary dark:text-light opacity-60">
                <FontAwesomeIcon icon={faImage} className="text-4xl" />
                <span className="text-sm">Click to upload image</span>
              </div>
            )}
          </label>
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="hidden"
          />
          {/* Show filename + clear button */}
          {imagePreview && (
            <div className="mt-2 flex items-center justify-between text-sm text-gray-500 dark:text-gray-300">
              <span>Image selected</span>
              <button
                type="button"
                onClick={() => {
                  setImagePreview(null);
                  setImageFile(null);
                  document.getElementById("image").value = "";
                }}
                className="text-red-400 hover:text-red-600 transition"
              >
                Remove
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
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
