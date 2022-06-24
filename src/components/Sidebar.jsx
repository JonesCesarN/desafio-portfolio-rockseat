import React from "react";
import { selectRepoGitHub } from "../store/github/gitHubSlice";
import { useSelector } from "react-redux";
import GithubSvg from "./svgs/GithubSvg";
import MapPinSvg from "./svgs/MapPinSvg";
import BriefcaseSvg from "./svgs/BriefcaseSvg";
import LinkedinSvg from "./svgs/LinkedinSvg";
import TwitterSvg from "./svgs/TwitterSvg";
import GlobeSvg from "./svgs/GlobeSvg";
import EmailSvg from "./svgs/EmailSvg";
import { selectWidthPage } from "../store/widthPage/widthPage";


export const Sidebar = () => {
  const widthPage = useSelector(selectWidthPage);
  const dataStatus = useSelector(selectRepoGitHub);
  const { data, loading } = dataStatus;

  return (
    <div className="flex flex-col lg:w-[350px] gap-[30px] ">
      {widthPage > 1024 ? layoutDefault(loading, data) : layoutMobile(loading, data, widthPage)}
    </div>
  )
};

function layoutMobile(loading, data, widthPage) {
  return (
    <>
      <div className="card grid grid-areas-sm_aside md:grid-areas-md_aside items-center gap-[15px]">
        {/* <div className="grid-in-photo w-full flex justify-center"> */}
        {loading
          ? <img src="https://www.politicaemdados.com.br/images/avatar_placeholder.png" className="mx-auto grid-in-photo flex justify-center w-[128px] rounded-[50%] animate-pulse" />
          : <img src={data.userInfo?.avatar_url} alt="profile" className="mx-auto grid-in-photo flex justify-center rounded-[50%] w-[128px] border-[2px] border-green-500" />
        }
        {/* </div> */}
        <div className="grid-in-name text-center">
          <span className="text-2xl font-bold">Jones Cesar N</span>
          <p className="text-sm font-light">Full Stack Developer</p>
        </div>
        <div className="grid-in-info">
          <ul className="flex flex-wrap gap-[2px] gap-x-[20px] items-center justify-evenly">
            <li className="flex items-center font-[13px] gap-[5px]">
              <GithubSvg width="20px" className="text-green-400" />
              <p>JonesCesarN</p>
            </li>
            <li className="flex items-center font-[13px] gap-[5px]">
              <LinkedinSvg width="20px" className="text-green-400" />
              <p>jonescesarn</p>
            </li>
            <li className="flex items-center font-[13px] gap-[5px]">
              <TwitterSvg width="20px" className="text-green-400" />
              <p>jonescesarn</p>
            </li>
            <li className="flex items-center font-[13px] gap-[5px]">
              <GlobeSvg width="20px" className="text-green-400" />
              <p>https://jonescesarn.dev</p>
            </li>
            <li className="flex items-center font-[13px] gap-[5px]">
              <EmailSvg width="20px" className="text-green-400" />
              <p>jonescesarn.dev@gmail.com</p>
            </li>
          </ul>
        </div>
        <ul className="flex flex-wrap gap-[5px] justify-center text-[10px] uppercase text-black font-bold grid-in-techs">
          <li className="bg-bgd-techs min-w-[75px] text-center p-[2px] rounded-[20px]">javascript</li>
          <li className="bg-bgd-techs min-w-[75px] text-center p-[2px] rounded-[20px]">reactjs</li>
          <li className="bg-bgd-techs min-w-[75px] text-center p-[2px] rounded-[20px]">nodejs</li>
          <li className="bg-bgd-techs min-w-[75px] text-center p-[2px] rounded-[20px]">git</li>
          {widthPage > 400
            ? (
              <>
                <li className="bg-bgd-techs min-w-[75px] text-center p-[2px] rounded-[20px]">html</li>
                <li className="bg-bgd-techs min-w-[75px] text-center p-[2px] rounded-[20px]">css</li>
              </>
            )
            : ''
          }
          {widthPage > 513
            ? (
              <>
                <li className="bg-bgd-techs min-w-[75px] text-center p-[2px] rounded-[20px]">github</li>
                <li className="bg-bgd-techs min-w-[75px] text-center p-[2px] rounded-[20px]">express</li>
              </>
            )
            : ''
          }


        </ul>
      </div>
    </>
  );
}

function layoutDefault(loading, data) {
  return (
    <>
      <div className="items-center text-center gap-[30px] flex flex-col bg-bgd-card rounded-3xl p-7 shadow-md">
        {loading
          ? <img src="https://www.politicaemdados.com.br/images/avatar_placeholder.png" className="w-[128px] rounded-[50%] animate-pulse " />
          : <img src={data.userInfo?.avatar_url} alt="profile" className="rounded-[50%] w-[128px] border-[2px] border-green-500" />
        }
        <div>
          <span className="text-2xl font-bold">Jones Cesar N</span>
          <p className="text-sm font-light">Full Stack Developer</p>
        </div>
      </div>

      <div className="gap-[20px] flex flex-col card">
        <ul className="flex flex-col gap-[20px]">
          <li className="flex items-center font-[13px] gap-[20px]">
            <MapPinSvg width="20px" className="text-green-400" />
            <p>Brasil</p>
          </li>
          <li className="flex items-center font-[13px] gap-[20px]">
            <BriefcaseSvg width="20px" className="text-green-400" />
            <p>Rocketseat</p>
          </li>
          <li className="flex items-center font-[13px] gap-[20px]">
            <GithubSvg width="20px" className="text-green-400" />
            <p>JonesCesarN</p>
          </li>
          <li className="flex items-center font-[13px] gap-[20px]">
            <LinkedinSvg width="20px" className="text-green-400" />
            <p>jonescesarn</p>
          </li>
          <li className="flex items-center font-[13px] gap-[20px]">
            <TwitterSvg width="20px" className="text-green-400" />
            <p>jonescesarn</p>
          </li>
          <li className="flex items-center font-[13px] gap-[20px]">
            <GlobeSvg width="20px" className="text-green-400" />
            <p>https://jonescesarn.dev</p>
          </li>
          <li className="flex items-center font-[13px] gap-[20px]">
            <EmailSvg width="20px" className="text-green-400" />
            <p>jonescesarn.dev@gmail.com</p>
          </li>
        </ul>

      </div>

      <div className="gap-[20px] flex flex-col card">
        <span className="text-[20px] font-bold">Tecnologias</span>
        <ul className="flex flex-wrap gap-[15px] justify-between text-[10px] uppercase text-black font-bold">
          <li className="bg-bgd-techs min-w-[75px] text-center p-[6px] rounded-[20px]">javascript</li>
          <li className="bg-bgd-techs min-w-[75px] text-center p-[6px] rounded-[20px]">reactjs</li>
          <li className="bg-bgd-techs min-w-[75px] text-center p-[6px] rounded-[20px]">nodejs</li>
          <li className="bg-bgd-techs min-w-[75px] text-center p-[6px] rounded-[20px]">git</li>
          <li className="bg-bgd-techs min-w-[75px] text-center p-[6px] rounded-[20px]">github</li>
          <li className="bg-bgd-techs min-w-[75px] text-center p-[6px] rounded-[20px]">html</li>
          <li className="bg-bgd-techs min-w-[75px] text-center p-[6px] rounded-[20px]">css</li>
          <li className="bg-bgd-techs min-w-[75px] text-center p-[6px] rounded-[20px]">sass</li>
          <li className="bg-bgd-techs min-w-[75px] text-center p-[6px] rounded-[20px]">express</li>
        </ul>
      </div>

      <div className="gap-[20px] flex flex-col card">
        <span className="text-[20px] font-bold">Experiências</span>
        <ul className="flex flex-col gap-[15px]">
          <li className="ml-[40px] list-disc">
            <span className="text-[14px] font-bold">Rocketseat</span>
            <p className="text-[12px] font-light">2019 - Atualmente</p>
            <span className="text-[12px] font-[700] block">Community Experience</span>
          </li>
          <li className="ml-[40px] list-disc">
            <span className="text-[14px] font-bold">Rocketseat</span>
            <p className="text-[12px] font-light">2019 - Atualmente</p>
            <span className="text-[12px] font-[700] block">Community Experience</span>
          </li>
          <li className="ml-[40px] list-disc">
            <span className="text-[14px] font-bold">Rocketseat</span>
            <p className="text-[12px] font-light">2019 - Atualmente</p>
            <span className="text-[12px] font-[700] block">Community Experience</span>
          </li>
          <li className="ml-[40px] list-disc">
            <span className="text-[14px] font-bold">Rocketseat</span>
            <p className="text-[12px] font-light">2019 - Atualmente</p>
            <span className="text-[12px] font-[700] block">Community Experience</span>
          </li>
        </ul>
      </div>

      <div className="gap-[20px] flex flex-col card">
        <span className="text-[20px] font-bold">Educação</span>
        <ul className="flex flex-col gap-[15px]">
          <li className="ml-[40px] list-disc">
            <span className="text-[14px] font-bold">Rocketseat</span>
            <p className="text-[12px] font-light">2019 - 2019</p>
            <span className="text-[12px] font-[700] block">GoStack</span>
          </li>
          <li className="ml-[40px] list-disc">
            <span className="text-[14px] font-bold">Rocketseat</span>
            <p className="text-[12px] font-light">2019 - 2019</p>
            <span className="text-[12px] font-[700] block">Ignite</span>
          </li>
          <li className="ml-[40px] list-disc">
            <span className="text-[14px] font-bold">Rocketseat</span>
            <p className="text-[12px] font-light">2019 - 2019</p>
            <span className="text-[12px] font-[700] block">Ignite Pro</span>
          </li>
          <li className="ml-[40px] list-disc">
            <span className="text-[14px] font-bold">Rocketseat</span>
            <p className="text-[12px] font-light">2019 - 2019</p>
            <span className="text-[12px] font-[700] block">Ignite Pro</span>
          </li>
        </ul>
      </div>

    </>
  );
}
