import {
  UPDATE_NEWS,
  ADD_NEWS,
  ADD_TO_HISTORY,
  DELETE_NEWS,
  FILTER_BY_TAG,
  LOAD_NEWS,
  SORT_BY,
} from "../actionTypes/actionTypes";

const initialState = {
  news: [],
  tags:"",
  sortBy: "",
  history: [],
};

const newsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEWS:
      const nonUpdatedNews = state.news.filter((n) => n._id !== action.payload._id);

      return {
        ...state,
        news: [action.payload, ...nonUpdatedNews],
      };
    case DELETE_NEWS:
      return {
        ...state,
        news: state.news.filter((n) => n._id !== action.payload),
      };
    case ADD_NEWS:
      return {
        ...state,
        news: [...state.news, action.payload],
      };
    case LOAD_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case SORT_BY:
      return {
        ...state,
        sortBy: action.payload
      }
    case FILTER_BY_TAG:
      return {
        ...state,
        tags: action.tags
      };
    case ADD_TO_HISTORY:
      const prevNews = state.history.find((n) => n._id === action.payload._id);

      if (prevNews) {
        const remainingNews = state.history.filter(
          (n) => n._id !== prevNews._id
        );
        return {
          ...state,
          history: [prevNews, ...remainingNews],
        };
      }
      return {
        ...state,
        history: [action.payload, ...state.history],
      };

    default:
      return state;
  }
};

export default newsReducer;
