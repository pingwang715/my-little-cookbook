import {
  createContext,
  useEffect,
  useContext,
  useReducer,
} from "react";

export const LikeContext = createContext();

export const useLike = () => useContext(LikeContext);

const ADD_TO_LIKE = "ADD_TO_LIKE";
const REMOVE_FROM_LIKE = "REMOVE_FROM_LIKE";

const likeReducer = (prevLike, action) => {
  const recipe  = action.payload;
  switch (action.type) {
    case ADD_TO_LIKE: {

      const existingItem = prevLike.some(
        (item) => item.recipeId === recipe.recipeId
      );

      if (existingItem) {
        return prevLike;
      }
      return [...prevLike, recipe];
    }

    case REMOVE_FROM_LIKE:
      return prevLike.filter(
        (item) => item.recipeId !== action.payload
      );
    default:
      return prevLike;
  }
};

export const LikeProvider = ({ children }) => {
  const initialLikeState = (() => {
    try {
      const storedLike = localStorage.getItem("like");
      return storedLike ? JSON.parse(storedLike) : [];
    } catch (error) {
      console.error("Failed to parse like from localStorage:", error);
      return [];
    }
  })();

  const [like, dispatch] = useReducer(likeReducer, initialLikeState);

  useEffect(() => {
    try {
      localStorage.setItem("like", JSON.stringify(like));
    } catch (error) {
      console.error("Failed to save like to localStorage:", error);
    }
  }, [like]);

  const addToLike = recipe => {
    dispatch({ type: ADD_TO_LIKE, payload: recipe })
  }

  const removeFromLike = (recipeId) => {
    dispatch({ type: REMOVE_FROM_LIKE, payload: recipeId })
  }

  const isLiked = (recipeId) => {
    return like.some((item) => item.recipeId === recipeId)
  }

  return (
    <LikeContext.Provider
      value={{ like, addToLike, removeFromLike, isLiked }}
    >
      {children}
    </LikeContext.Provider>
  );

};
