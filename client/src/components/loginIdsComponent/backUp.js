import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LoginId from "./LoginId";
import styles from "./styles/loginList.module.css";
import FullContentCard from "./FullContentCard";

const LoginIdsList = (
  // { loginIds, currentId, setCurrentId, setHeading }
) => {
  const [formMode, setFormMode] = useState(false);
  const [showEditButton, setEditButton] = useState(true);
  const [currEditId, setCurrEditId] = useState(null);
  const loadState = useSelector((state) => state.loading);
  const { place, isLoading, loginsFetching } = loadState;

  const [displayFullContent, setDisplayFullContent] = useState(false);
  const [fullContentCardData, setFullContentCardData] = useState(
    {
      app: "",
      category: "",
      title: "",
      username: "",
      password: "",
    }
  )
  // useEffect(() => {
  //   setHeading("LoginIds");
  // }, []);

  // SCROLLING BUTTON HIDE__
  // const node = useRef();
  // var timeOut = null;
  // const [isScrolling, setIsScrolling] = useState(false);
  // useEffect(() => {
  //   if (node.current != null) {
  //     node.current.addEventListener("scroll", handleScroll);
  //   }
  //   return () => {
  //     if (node.current != null) {
  //       node.current.removeEventListener("scroll", handleScroll);
  //     }
  //   };
  // }, []);

  // const handleScroll = (e) => {
  //   setIsScrolling(true);
  //   clearTimeout(timeOut);
  //   timeOut = setTimeout(() => {
  //     setIsScrolling(false);
  //   }, 200);
  // };

  // const formToggle = () => {
  //   setFormMode(!formMode);
  // };


  const loginIds = [

    {
      app: "Gpay",
      category: "Finance",
      title: "Google pay",
      username: "andrew.GarF@gmial.com",
      password: "andrew@122",
    },
    {
      app: "Amazon",
      category: "Shopping",
      title: "Amazon shopping app",
      username: "andrew@amz.com",
      password: "andrew@1dsds",
    }
    , {
      app: "Instagram",
      category: "Social",
      title: "Instagram app",
      username: "andrew@facebook.com",
      password: "andrew@1d32",
    }, {
      app: "facebbok",
      category: "Social",
      title: "Facebook.com",
      username: "andrew@facebook.com",
      password: "andrew@1d32",
    }, {
      app: "Gmail",
      category: "Social",
      title: "Gmail primary",
      username: "andrew@facebook.com",
      password: "andrew@1d32",
    }, {
      app: "Github",
      category: "Social",
      title: "Github.com",
      username: "andrew@facebook.com",
      password: "andrew@1d32",
    }, {
      app: "Spotify",
      category: "Social",
      title: "Spotify music app",
      username: "andrew@facebook.com",
      password: "andrew@1d32",
    }

  ]

  const handleContentClick = (loginIData) => {
    setDisplayFullContent(!displayFullContent);
    if (loginIData != undefined) {
      setFullContentCardData({
        app: loginIData.app,
        category: loginIData.category,
        title: loginIData.title,
        username: loginIData.username,
        password: loginIData.password,
      })
    }
  }

  return (
    <div className={styles.loginsList}>
      {
        !displayFullContent ? (
          <div className={styles.contentContainer}>
            {loginIds.map((loginId, index) => (
              <LoginId
                key={index}
                index={index}
                loginId={loginId}
                handleContentClick={handleContentClick}
              />
            ))}
          </div>
        ) :
          <FullContentCard
            fullContentCardData={fullContentCardData}
            handleContentClick={handleContentClick}
          />

      }

    </div >
  );
};

export default LoginIdsList;
{/* <div className={styles.contentContainer} ref={node}>

        {loginsFetching === true && loginIds.length < 1 ? (
          <>
            <LoginIdSkeleton />
            <LoginIdSkeleton />
            <LoginIdSkeleton />
            <LoginIdSkeleton />
            <LoginIdSkeleton />
          </>
        ) : loginsFetching === false && loginIds.length < 1 ? (
          <div className={noContentStyles.messageContainer}>
            <p>No Logins Added</p>

            <div className={noContentStyles.footerDIv}>
              Click
              <FiPlusCircle className={noContentStyles.icon} fontSize="19px" />
              to add
            </div>
          </div>
        ) : (
          loginsFetching === false &&
          loginIds.length > 1 &&
          (
            <>
              {loginIds.map((loginId, index) => (
                <React.Fragment key={loginId._id}>
                  <LoginId
                    index={index}
                    loginId={loginId}
                    setCurrentId={setCurrentId}
                    formMode={formMode}
                    setFormMode={setFormMode}
                    setEditButton={setEditButton}
                    showEditButton={showEditButton}
                    setCurrEditId={setCurrEditId}
                    currEditId={currEditId}
                  />
                </React.Fragment>
              ))}
            </>
          )
        )}
        <Suspense
          fallback={
            <div>
              <CircleSpinner size={12} color="gray" loading={true} />
            </div>
          }
        >
          <LoginIdForm
            currentId={currentId}
            setCurrentId={setCurrentId}
            formMode={formMode}
            setFormMode={setFormMode}
          />
        </Suspense>

        {formMode === false ? (
          <div
            className={
              isScrolling === false
                ? btnStyles.addBtnWrapper
                : btnStyles.addBtnWrapperHidden
            }
            onClick={formToggle}
          >
            <div className={btnStyles.addBtnIconDIv}>
              <HiPlus />
            </div>
            <div className={btnStyles.addBtnTextDiv}>
              <p>Add</p>
            </div>
          </div>
        ) : null}
      </div> */}