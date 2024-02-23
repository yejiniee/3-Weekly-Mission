import { useEffect } from "react";
import styles from "./ShareIconBox.module.css";
const DEPLOYED_URL = `localhost:3000`;
import Image from "next/image";

interface Props {
  folderId: number;
}
function ShareIconBox({ folderId }: Props) {
  const SHARE_URL_TEXT = `${DEPLOYED_URL}/shared?user=1&folder=${folderId}`;

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었습니다.");
    } catch (err) {
      console.log(err);
    }
  };

  const handleFacebookClick = () => {
    const sharedLink = encodeURIComponent(DEPLOYED_URL);
    window.open("http://www.facebook.com/sharer.php?u=" + sharedLink);
  };

  const handleKakaoClick = () => {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "linkbrary",
        description: "linkbrary",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: DEPLOYED_URL,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: DEPLOYED_URL,
          },
        },
      ],
    });
  };

  useEffect(() => {
    window.Kakao.cleanup();
    window.Kakao.init(process.env.NEXT_PUBLIC_JavaScript_KEY);
  }, []);

  return (
    <div className={styles.iconBox}>
      <span className={styles.icon}>
        <span className={styles.img} onClick={() => handleKakaoClick()}>
          <Image fill src="/svgs/kakao-round.svg" alt="kakao" />
        </span>
        <span className={styles.iconText}>카카오톡</span>
      </span>
      <span className={styles.icon}>
        <span className={styles.img} onClick={() => handleFacebookClick()}>
          <Image fill src="/svgs/facebook-round.svg" alt="facebook" />
        </span>
        <span className={styles.iconText}>페이스북</span>
      </span>
      <span
        className={styles.icon}
        onClick={() => handleCopyClipBoard(SHARE_URL_TEXT)}
      >
        <span className={styles.img}>
          <Image fill src="/svgs/link-round.svg" alt="share" />
        </span>
        <span className={styles.iconText}>링크 복사</span>
      </span>
    </div>
  );
}

export default ShareIconBox;
