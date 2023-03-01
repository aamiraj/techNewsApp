import { updateNews } from "../../actions/actions";

const updateNewsData = (newsData, id) => {
  return async (dispatch, getstate) => {
    const res = await fetch(`https://tech-news-server-aamiraj.vercel.app/news/${id}`, {
      method: "PATCH",
      body: JSON.stringify(newsData),
      headers: { "Content-type": "application/json" },
    });
    const data = await res.json();
    console.log(data)

    if (data.acknowledged) {
      dispatch(updateNews({ _id: id, ...newsData }));
    }
  };
};

export default updateNewsData;
