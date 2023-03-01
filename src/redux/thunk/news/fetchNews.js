import { loadNews } from "../../actions/actions";

const fetchNewsData = () => {
  return async function (dispatch, getstate) {
    const res = await fetch("https://tech-news-server-aamiraj.vercel.app/news");
    const data = await res.json();

    if (data.length) {
      dispatch(loadNews(data));
    }
  };
};

export default fetchNewsData;
