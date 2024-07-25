import Head from 'next/head';
import PoemCard from '@/components/PoemCard';
import { parseCSV } from '@/lib/csvParser';

export default function Poem({params}: any) {
  const records = parseCSV();
  
  const { poem, interpreted } = records[Number(params.code)]
  return (<>
    <Head>
      <title>{poem[0][0]}</title>
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
