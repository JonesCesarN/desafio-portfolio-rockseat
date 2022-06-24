import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectRepoGitHub } from '../store/github/gitHubSlice'
import BranchSvg from './svgs/BranchSvg'
import FolderSvg from './svgs/FolderSvg'
import StartSvg from './svgs/StartSvg'
import { format, formatDistance, parseISO } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const Projects = () => {
  const dataStatus = useSelector(selectRepoGitHub);
  const { data, loading } = dataStatus;

  return (
    <div className='flex flex-col gap-15'>
      <div className='card flex items-center justify-between'>

        <span className='text-xl font-bold capitalize'>projetos recentes</span>

        <a
          href={data.userInfo?.repos_url} target="_blank"
          className='text-xs text-green-400 hover:animate-pulse transition-all'
        >
          Veja todos {loading ? '' : `(${data.userInfo?.public_repos})`}
        </a>

      </div>
      <section className='grid md:grid-cols-2 w-full gap-15'>
        {loading
          ? (
            <>
              <div className='card flex flex-col gap-[25px] justify-between animate-pulse'>
                <div className='bg-zinc-800 w-[60%] h-2 card'></div>
                <div className='flex flex-col gap-[5px]'>
                  <div className='bg-zinc-800 w-[100%] h-2 '></div>
                  <div className='bg-zinc-800 w-[100%] h-2 '></div>
                  <div className='bg-zinc-800 w-[100%] h-2 '></div>
                </div>
                <div className='flex flex-row gap-[5px] justify-between'>
                  <div className='bg-zinc-800 w-[10%] h-2'></div>
                  <div className='bg-zinc-800 w-[10%] h-2'></div>
                </div>
                <div className='flex flex-row gap-[5px] justify-center'>
                  <div className='bg-zinc-800 w-[40%] h-2'></div>
                </div>
              </div>
              <div className='card flex flex-col gap-[25px] justify-between animate-pulse'>
                <div className='bg-zinc-800 w-[60%] h-2 card'></div>
                <div className='flex flex-col gap-[5px]'>
                  <div className='bg-zinc-800 w-[100%] h-2 '></div>
                  <div className='bg-zinc-800 w-[100%] h-2 '></div>
                  <div className='bg-zinc-800 w-[100%] h-2 '></div>
                </div>
                <div className='flex flex-row gap-[5px] justify-between'>
                  <div className='bg-zinc-800 w-[10%] h-2'></div>
                  <div className='bg-zinc-800 w-[10%] h-2'></div>
                </div>
                <div className='flex flex-row gap-[5px] justify-center'>
                  <div className='bg-zinc-800 w-[40%] h-2'></div>
                </div>
              </div>
            </>
          )
          : data.githubdata?.map(repo => {
            return (
              <a
                href={repo.html_url} target="_blank"
                className='card flex flex-col gap-15 border-l-8 border-bgd-card hover:border-green-400 justify-between'
                key={repo._id}
              >
                <div className='flex items-baseline gap-15'>
                  <FolderSvg width={20} />
                  <span className='text-subtitle16 font-bold'>
                    {repo.name}
                  </span>
                </div>
                <p className='text-despt14 font-thin'>
                  {repo.description}
                </p>
                <div className='text-despt14 flex justify-between'>
                  <div className='flex gap-4'>
                    <span className='flex justify-center gap-2'>
                      <StartSvg width={20} />
                      <p>{repo.stargazers_count}</p>
                    </span>
                    <span className='flex justify-center gap-2'>
                      <BranchSvg width={20} />
                      <p>{repo.branches}</p>
                    </span>
                  </div>
                  <div className='lang_color flex items-center' style={{ "--my-color-var": repo.color }}>
                    {repo.language}
                  </div>
                </div>
                <span className='text-[10px] text-center'>
                  ultima atualização {formatDistance(parseISO(repo.updated_at), new Date(), { addSuffix: true, locale: ptBR })}
                </span>

              </a>
            )
          })
        }

      </section>
    </div>

  )


}
