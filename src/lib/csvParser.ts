import Papa from 'papaparse';
import fs from 'fs';
import path from 'path';

interface CSVRecord {
  code: string;
  description: string;
}

export function parseCSVAsync() {
  const csvFilePath = path.resolve('./public/poems.csv');
  const fileContent = fs.readFileSync(csvFilePath, 'utf8');
  return new Promise<Papa.ParseResult<any>>((resolve, reject) => {
    Papa.parse(fileContent, {
      header: true,
      complete: (results) => resolve(results),
      error: (error: Error) => reject(error),
    });
  })
  .then(data => data.data.slice(0, data.data.length - 1).map((row: any) => {
    return {
      poem: JSON.parse(row.Poem.replace(/'/g, '"')),
      interpreted: JSON.parse(row.Interpreted.replace(/'/g, '"')),
    };
  }));
};

export function parseCSV() {
  const csvFilePath = path.resolve('./public/poems.csv');
  const fileContent = fs.readFileSync(csvFilePath, 'utf8');

  const results = Papa.parse(fileContent, {
    header: true,
  });

  // console.log(JSON.parse(results.data[0]['Poem']))

  const poems = results.data.slice(0, results.data.length - 1).map((row: any) => {
    return {
      poem: JSON.parse(row.Poem.replace(/'/g, '"')),
      interpreted: JSON.parse(row.Interpreted.replace(/'/g, '"')),
    };
  });

  // console.log(poems[0].poem);
  

  return poems;
}