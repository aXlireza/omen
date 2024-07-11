// app/api/read-csv/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';

type PoemData = {
  poem: string[];
  interpreted: string[];
};

export async function GET(req: NextRequest) {
  try {
    const csvFilePath = path.resolve('./public/poems.csv');
    const fileContent = fs.readFileSync(csvFilePath, 'utf8');

    let randomPoem: PoemData | null = null;

    Papa.parse(fileContent, {
      header: true,
      complete: async (results: Papa.ParseResult<any>) => {
        // console.log(results.data.length);
        
        const poems = results.data.slice(0, results.data.length-1).map((row: any, index:number) => {
          // console.log(row.Interpreted.replace(/'/g, '"'));
          // console.log(index);
          
          return ({
            poem: JSON.parse(row.Poem.replace(/'/g, '"')),
            interpreted: JSON.parse(row.Interpreted.replace(/'/g, '"')),
          })
        });
        // console.log(poems);
        const response = await fetch(`https://www.random.org/integers/?num=1&min=0&max=${results.data.length}&col=1&base=10&format=plain&rnd=new`);
        const randomValue = await response.text();

        const therandom = Math.floor(Number(randomValue.trim()) * poems.length)
        console.log(therandom, poems.length);
        randomPoem = poems[Number(randomValue.trim())];
      },
      error: (error: { message: any; }) => {
        return NextResponse.json({ error: error.message }, { status: 500 });
      },
    });
    // console.log(randomPoem);
    
    return NextResponse.json(randomPoem);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
