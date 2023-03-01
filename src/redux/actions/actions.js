import {
  ADD_NEWS,
  ADD_TO_HISTORY,
  DELETE_NEWS,
  FILTER_BY_TAG,
  LOAD_NEWS,
  SORT_BY,
  UPDATE_NEWS,
} from "../actionTypes/actionTypes";

export const addNews = (data) => {
  return { type: ADD_NEWS, payload: data };
};
export const deleteNews = (id) => {
  return { type: DELETE_NEWS, payload: id };
};
export const updateNews = (data) => {
  return { type: UPDATE_NEWS, payload: data };
};
export const loadNews = (data) => {
  return { type: LOAD_NEWS, payload: data };
};
export const sortByUpload = (data) => {
  return { type: SORT_BY, payload: data};
};
export const filterByTag = (tag) => {
  return { type: FILTER_BY_TAG, tags: tag };
};
export const addToHistory = (data) => {
  return { type: ADD_TO_HISTORY, payload: data };
};
