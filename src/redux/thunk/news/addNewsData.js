import { addNews } from "../../actions/actions";

const addNewsData = (newsData) => {
  return async (dispatch, getstate) => {
    const res = await fetch("https://tech-news-server-aamiraj.vercel.app/news", {
      method: "POST",
      body: JSON.stringify(newsData),
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(addNews({ _id: data.insertedId, ...newsData }));
    }
  };
};

export default addNewsData;
