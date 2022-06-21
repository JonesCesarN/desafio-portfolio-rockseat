import "./App.scss";
import Footer from "components/layouts/Footer/Footer";
import Info from "components/layouts/Info/Info";
import Contents from "components/layouts/Contents/Contents";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRepoThunk } from "redux/slices/gitHubThunk";
import { selectRepoGitHub } from "redux/slices/gitHubSlice";

function App() {
  const dispatch = useDispatch();
  const dataStatus = useSelector(selectRepoGitHub);

  useEffect(() => {
    dispatch(fetchUserRepoThunk());
  }, [dispatch]);

  if (dataStatus.error) {
    return (
      <h1
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Erro na requisição
      </h1>
    );
  }
  return (
    <div className="wrapper">
      <Info />
      <Contents />
      <Footer />
    </div>
  );
}

export default App;
