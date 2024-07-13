import Head from 'next/head';
import { parseCSV } from '../../../../lib/csvParser';
import PoemCard from '@/components/PoemCard';

export default function Poem({params}: any) {
  const records = parseCSV();
  
  const { poem, interpreted } = records[Number(params.code)]
  return (<>
    <Head>
      <title>Poem</title>
    </Head>
    <PoemCard poem={poem} interpreted={interpreted} />
  </>
  )
}

export async function generateStaticParams() {
  const records = parseCSV();
  
  return records.map((post, index: number) => ({
    slug: index,
  }))
}
