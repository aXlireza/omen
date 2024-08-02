import Head from 'next/head';
import { chehraziCSV } from '@/lib/csvParser';

export default function Poem({params}: any) {
  const records = chehraziCSV();
  const { episode, title, opening, content, quoutes } = records.find(record => Number(record.episode) === Number(params.code))!
  console.log(quoutes[params.quoute]);
  
  return (<>
    <Head>
      <title>{title}</title>
      <meta name="description" content={opening}></meta>
    </Head>
    <div className={`min-h-screen flex items-center justify-center text-white transition-all duration-1000 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-1`}>
      <div className='mb-8 text-center max-w-2xl mx-auto p-6'>
        {quoutes[params.quoute].map((quoute, key) => <h1 key={key} style={{fontFamily: 'Morabba'}} className="font-semibold text-7xl text-stone-700">{quoute}</h1>)}
      </div>
    </div>
  </>)
}

export async function generateStaticParams() {
  const records = chehraziCSV();
  
  return records.map(episode => episode.quoutes.map((quoute, key) => ({
      slug: episode.episode,
      quoute: key
    })))
}
