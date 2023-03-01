import {  deleteNews } from "../../actions/actions";

const deleteNewsData = (id) => {
  return async (dispatch, getstate) => {
    const res = await fetch(`https://tech-news-server-aamiraj.vercel.app/news/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(deleteNews(id));
    }
  };
};

export default deleteNewsData;
