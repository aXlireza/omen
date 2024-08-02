import Papa from 'papaparse';
import fs from 'fs';
import path from 'path';

interface CSVRecord {
  code: string;
  description: string;
}

export function parseCSV() {
  const csvFilePath = path.resolve('./public/poems.csv');
  const fileContent = fs.readFileSync(csvFilePath, 'utf8');

  const results = Papa.parse(fileContent, {
    header: true,
  });

  const poems = results.data.slice(0, results.data.length - 1).map((row: any) => {
    return {
      poem: JSON.parse(row.Poem.replace(/'/g, '"')),
      interpreted: JSON.parse(row.Interpreted.replace(/'/g, '"')),
    };
  });

  return poems;
}

type chehrazi = {
  episode: number;
  title: string;
  opening: string;
  content: string;
  quoutes: string[][]
};

export function chehraziCSV(): chehrazi[] {
  const csvFilePath = path.resolve('./public/chehrazi.csv');
  const fileContent = fs.readFileSync(csvFilePath, 'utf8');

  const results = Papa.parse(fileContent, {
    header: true,
  });

  // Map the results to the chehrazi type
  const data: chehrazi[] = results.data.slice(0, results.data.length - 1).map(item => {
    // Cast item to any to access properties, then convert to chehrazi type
    const raw = item as any;
    const quoutes = raw.quoutes ? JSON.parse(raw.quoutes.replace(/'/g, '"')) : [[]]
    
    return {
      episode: Number(raw.episode), // Convert string to number if necessary
      title: String(raw.title),
      opening: String(raw.opening),
      content: String(raw.content),
      quoutes: quoutes
    };
  });

  return data;
}