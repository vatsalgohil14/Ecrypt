import React, { useState, useEffect } from "react";
import LoginId from "../loginIdsComponent/LoginId";
import Card from "../cardComponent/Card";
import Document from "../docsComponent/Document";
import { getCardType } from "../cardComponent/CardLogo";

const SearchItem = ({
  item,
  setImageData,
  setMaximizeOrNot,
  currEditId,
  setCurrEditId,
  showEditButton,
  setEditButton,
  setShowHeaderFooter,
}) => {
  useEffect(() => {}, [item]);
  const [maximize, setEnlarge] = useState(false);
  const [editId, setEditId] = useState(null);

  let formattedCardNo;
  let cNo;
  let cardType;
  if (item.bank) {
    formattedCardNo = item.cardNo.toString().replace(/\d{4}(?=.)/g, "$& ");
    let cardNumber = item.cardNo;
    cNo = cardNumber.toString();
    cardType = getCardType(cNo);
  }
  // console.log("number hai", cardType);

  return (
    <>
      {item.website ? (
        <LoginId
          loginId={item}
          setCurrEditId={setCurrEditId}
          currEditId={currEditId}
        />
      ) : item.bank ? (
        <Card
          card={item}
          setEditButton={setEditButton}
          showEditButton={showEditButton}
        />
      ) : (
        item.imageName && (
          <Document
            doc={item}
            setImageData={setImageData}
            setMaximizeOrNot={setMaximizeOrNot}
            setShowHeaderFooter={setShowHeaderFooter}
          />
        )
      )}
    </>
  );
};

export default SearchItem;

// return (
//   <>
//     {item.website ? (
//       <>
//         <div className={loginsStyles.loginContainer}>
//           <div className={loginsStyles.logoDiv}>
//             <LoginIdLogo website={item.website} />
//           </div>
//           <div className={loginsStyles.infoDiv}>
//             <div className={loginsStyles.websiteDiv}>
//               <p className={loginsStyles.websiteText} color="gray">
//                 {item.website}
//               </p>
//             </div>
//             <div className={loginsStyles.usernameDiv}>
//               <FaUserAlt fontSize="12px" color="gray" />
//               <p className={loginsStyles.passwordText}>{item.username}</p>
//             </div>
//             <div className={loginsStyles.passwordDiv}>
//               <FaLock fontSize="12px" color="gray" />
//               <p className={loginsStyles.passwordText}>{item.password}</p>
//             </div>
//           </div>
//         </div>
//       </>
//     ) : item.bank ? (
//       <>
//         <div
//           className={`${cardStyles.cardContainer} ${
//             cardType === "MASTER"
//               ? cardStyles.cardMaster
//               : cardType === "VISA"
//               ? cardStyles.cardVisa
//               : cardType === "RUPAY"
//               ? cardStyles.cardRupay
//               : cardType === "MAESTRO"
//               ? cardStyles.cardMaestro
//               : cardType === "AMEX"
//               ? cardStyles.cardAmex
//               : cardType === "JCB"
//               ? cardStyles.cardJcb
//               : cardType === "HIPERCARD"
//               ? cardStyles.cardHiper
//               : cardType === "UNIONPAY"
//               ? cardStyles.cardUnion
//               : cardType === "DISCOVERY"
//               ? cardStyles.cardDiscovery
//               : cardType === "DINERS"
//               ? cardStyles.cardDiners
//               : null
//           }`}
//         >
//           <div className={cardStyles.cardLogo}>
//             <CardLogo className={cardStyles.logo} cardNo={item.cardNo} />
//           </div>
//           <div className={cardStyles.bankName}>
//             <p className={cardStyles.cardBankText}>{item.bank}</p>
//           </div>

//           <div className={cardStyles.cardNo}>
//             <p className={cardStyles.cardNoText}>{formattedCardNo}</p>
//           </div>

//           <div className={cardStyles.cvv}>
//             <p className={cardStyles.cvvLabel}>CVV </p>
//             <p className={cardStyles.cvvText}>{item.cvv}</p>
//           </div>
//           <div className={cardStyles.cardUser}>
//             <p className={cardStyles.cardUserText}>{item.user}</p>
//           </div>
//           <div className={cardStyles.cardExpiry}>
//             <p className={cardStyles.expiryLabel}>VALID UPTO</p>
//             <p className={cardStyles.expiryText}>{item.expiry}</p>
//           </div>
//           <h1 className={cardStyles.overlayFont}>{cardType.toLowerCase()}</h1>
//           <div className={styles.overlayDiv}>
//             <div className={styles.ring}>
//               <div></div>
//             </div>
//             <div className={styles.square}></div>
//             <h1 className={styles.overlayFont}>{cardType}</h1>
//           </div>
//         </div>
//       </>
//     ) : item.imageName ? (
//       <>
//         <div className={docStyles.documentCard}>
//           <div className={docStyles.imageContainer}>
//             <LazyLoad offset={0}>
//               <img
//                 src={item.imageUrl}
//                 onClick={() => {
//                   handleMaximize(item);
//                 }}
//               ></img>
//             </LazyLoad>
//           </div>

//           <div className={docStyles.titleDiv}>
//             <p className={docStyles.titleText}>{item.imageName}</p>
//           </div>
//         </div>
//       </>
//     ) : null}
//   </>
// );
