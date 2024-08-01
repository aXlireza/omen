import Head from 'next/head';
import PoemCard from '@/components/PoemCard';
import { chehraziCSV, parseCSV } from '@/lib/csvParser';
import ChehraziCard from '@/components/ChehraziCard';

export default function Poem({params}: any) {
  const records = chehraziCSV();

  const { episode, title, opening, content } = records.find(record => record.episode === params.code)!
  
  console.log(opening.split('.'));
  
  return (<>
    <Head>
      <title>{title}</title>
      <meta name="description" content={opening}></meta>
    </Head>
    <ChehraziCard title={title} opening={opening} content={content} />
  </>
  )
}

export async function generateStaticParams() {
  const records = chehraziCSV();
  
  return records.map(({episode}) => ({
    slug: episode,
  }))
}