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

    const randomPoem = poems[Number(randomValue.trim())];

    return NextResponse.json(randomPoem);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
