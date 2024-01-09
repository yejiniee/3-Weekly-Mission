import { useEffect, useState } from "react";
import { getLinkData } from "../apis/api";

export function useLinkData() {
  const [linkData, setLinkData] = useState(null);

  //초기데이터 설정
  useEffect(() => {
    //폴더 데이터 가져오기
    const handleLoadFolder = async () => {
      try {
        const { data } = await getLinkData();
        setLinkData(data);
      } catch (e) {
        console.log(e);
      }
      console.log(linkData);
    };

    handleLoadFolder();
  }, []);

  return { linkData };
}
