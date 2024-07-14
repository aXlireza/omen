import { NextRequest, NextResponse } from 'next/server';
import { parseCSV } from '../../../../lib/csvParser';

type PoemData = {
  poem: string[];
  interpreted: string[];
};

export async function GET(req: NextRequest) {
  try {
    const poems = parseCSV();

    const response = await fetch(`https://www.random.org/integers/?num=1&min=0&max=${poems.length - 1}&col=1&base=10&format=plain&rnd=new`, { cache: 'no-store' });
    const randomValue = await response.text();

    // Number(randomValue.trim())
    const randomPoem = poems[Number(randomValue.trim())];
    // console.log(Number(randomValue.trim()));
    
    // console.log(randomPoem.poem[0]);
    
    return NextResponse.json({poem: randomPoem, index: Number(randomValue.trim())});
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
