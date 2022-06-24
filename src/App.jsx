import { Sidebar } from "./components/Sidebar";
import "./styles/global.css";
import { useDispatch, useSelector } from "react-redux";
import { selectRepoGitHub } from "./store/github/gitHubSlice";
import { fetchUserRepoThunk } from "./store/github/gitHubThunk";
import { useEffect, } from "react";
import { Projects } from "./components/Projects";
import { setWidth } from "./store/widthPage/widthPage";
import { Posts } from "./components/Posts";

function App() {
  const dispatch = useDispatch();
  const dataStatus = useSelector(selectRepoGitHub);

  useEffect(() => {
    dispatch(fetchUserRepoThunk());
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
  }, [dispatch]);

  if (dataStatus.error) {
    return (
      <h1 className="flex h-screen flex-col items-center justify-center m-6">
        <div className="md:text-2xl text-red-600 font-[700]">Erro na requisição</div>
        <pre className="p-8">
          <code className="text-[10px] md:text-2xl">
            {JSON.stringify(dataStatus, null, 3)}
          </code>
        </pre>

      </h1>
    );
  }

  const updateDimensions = () => {
    const width = window.innerWidth;
    dispatch(setWidth(width));
  };

  return (
    <div className="flex gap-8 p-3 lg:p-[30px] flex-col max-w-[1300px] mx-auto">
      <main className="flex gap-8  flex-col lg:flex-row">
        <Sidebar />
        <div className="flex-1 gap-8 flex flex-col">
          <Projects />
          <Posts />
        </div>
      </main>
      <footer className="text-center text-xs">Feito com 💜 por jonescesarn</footer>
    </div>
  );
}

export default App;
