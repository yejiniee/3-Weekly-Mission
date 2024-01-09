import { useState } from "react";
import FolderButton from "./FolderButton";
import CardList from "../CardList/CardList";
import styled from "styled-components";

const FolderListBar = styled.div`
  display: flex;
  width: 1060px;
  justify-content: space-between;
  align-items: center;
`;
const FolderButtons = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const Text = styled.span`
  color: #6d6afe;
  text-align: center;
  font-family: Abel;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;
const Img = styled.img``;
function FolderList({ folderData, folderId }) {
  const [selectedFolderId, setSelectedFolderId] = useState(folderId);

  const handleFolderClick = (folderId) => {
    setSelectedFolderId(folderId);
  };

  return (
    <>
      <FolderListBar>
        <FolderButtons>
          {folderData &&
            folderData.map((item) => (
              <FolderButton
                key={item.id}
                item={item}
                onClick={() => handleFolderClick(item.id)}
                isSelected={item.id === selectedFolderId}
              />
            ))}
        </FolderButtons>
        {/* <Text>폴더추가</Text> */}
        <Img src="/assets/add-icon.svg" />
      </FolderListBar>
      <CardList selectedFolderId={selectedFolderId}></CardList>
    </>
  );
}

export default FolderList;
