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
      complete: (results: Papa.ParseResult<any>) => {
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
        
        randomPoem = poems[Math.floor(Math.random() * poems.length)];
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