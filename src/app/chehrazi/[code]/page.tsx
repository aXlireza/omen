import Head from 'next/head';
import PoemCard from '@/components/PoemCard';
import { chehraziCSV, parseCSV } from '@/lib/csvParser';
import ChehraziCard from '@/components/ChehraziCard';

export default function Poem({params}: any) {
  const records = chehraziCSV();
  const { episode, title, opening, content, quoutes } = records.find(record => Number(record.episode) === Number(params.code))!
  
  console.log(opening.split('.'));
  
  return (<>
    <Head>
      <title>{title}</title>
      <meta name="description" content={opening}></meta>
    </Head>
    <ChehraziCard episode={episode} title={title} opening={opening} content={content} quoutes={quoutes} />
  </>
  )
}

export async function generateStaticParams() {
  const records = chehraziCSV();
  
  return records.map(({episode}) => ({
    slug: episode,
  }))
}
