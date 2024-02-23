import { useEffect, useState } from "react";
import { getFolderData } from "@/api/api";
import { Folder } from "@/@types/api/interface";

export function useFolderData() {
  const [folderData, setFolderData] = useState<Folder[] | null>(null);

  useEffect(() => {
    //폴더 데이터 가져오기
    const handleLoadFolder = async () => {
      try {
        const { data } = await getFolderData();
        setFolderData(data);
      } catch (e) {
        console.error(e);
        return;
      } finally {
      }
    };

    handleLoadFolder();
  }, []);

  return { folderData };
}
