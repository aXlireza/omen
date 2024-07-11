import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

type PoemData = {
  poem: string[];
  interpreted: string[];
};

// Promisify the Papa Parse function
const parseCSV = (fileContent: string) => {
  return new Promise<Papa.ParseResult<any>>((resolve, reject) => {
    Papa.parse(fileContent, {
      header: true,
      complete: (results) => resolve(results),
      error: (error: Error) => reject(error),
    });
  });
};

export async function GET(req: NextRequest) {
  try {
    const csvFilePath = path.resolve('./public/poems.csv');
    const fileContent = fs.readFileSync(csvFilePath, 'utf8');

    const results = await parseCSV(fileContent);

    const poems = results.data.slice(0, results.data.length - 1).map((row: any) => {
      return {
        poem: JSON.parse(row.Poem.replace(/'/g, '"')),
        interpreted: JSON.parse(row.Interpreted.replace(/'/g, '"')),
      };
    });

    const response = await fetch(`https://www.random.org/integers/?num=1&min=0&max=${poems.length - 1}&col=1&base=10&format=plain&rnd=new`, { cache: 'no-store' });
    const randomValue = await response.text();

    const randomPoem = poems[Number(randomValue.trim())];

    return NextResponse.json(randomPoem);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
