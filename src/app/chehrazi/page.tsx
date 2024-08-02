import { chehraziCSV, parseCSV } from "@/lib/csvParser";
import Link from "next/link";


export default function Poems() {
  const records = chehraziCSV();

  return (
    <ul role="list" className="divide-y divide-gray-100 transition-all duration-1000 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      {records.map((episode, key) => (
        <Link href={`/chehrazi/${episode.episode}`} key={key} className="flex gap-x-6 py-5 px-24">
          <div className="flex min-w-0 gap-x-4">
            {/* <Image alt="" src={person.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" /> */}
            <div className="min-w-0 flex-auto">
              <h1 style={{fontFamily: 'Morabba'}} className="text-right text-lg font-semibold leading-6 text-stone-700 text-right">{episode.title}</h1>
              <p style={{fontFamily: 'Morabba'}} className="mt-1 truncate text-md leading-5 text-stone-700 text-right">{episode.opening}</p>
              {episode.quoutes.map((quote, key2) => <Link key={key2} className="text-blue-500 font-light py-2 px-4 flex items-center justify-center mx-auto space-x-2 hover:text-gray-200 transition-opacity duration-1000 outline-offset-0" href={`/chehrazi/${episode.episode}/${key2}`}>{quote}</Link>)}
            </div>
          </div>
        </Link>
      ))}
    </ul>
  )
}
