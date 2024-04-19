import { useEffect,useState } from "react";
import { FETCH_RES_INFO_URL } from "../config";
const useResturant = (id) => {
  const [resturantInfo, setResturantInfo] = useState([]);

  useEffect(() => {
    getResturantinfo();
  }, []);
  async function getResturantinfo() {
    const data = await fetch(
      `${FETCH_RES_INFO_URL}${id}`
    );
    const json = await data.json();
    // console.log(json);
    setResturantInfo(json);
  }
  return resturantInfo;
};

export default useResturant;
