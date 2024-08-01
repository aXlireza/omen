import { chehraziCSV, parseCSV } from "@/lib/csvParser";
import Link from "next/link";


export default function Poems() {
  const records = chehraziCSV();

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {records.map((episode, key) => (
        <Link href={`/chehrazi/${episode.episode}`} key={key} className="flex gap-x-6 py-5 px-24">
          <div className="flex min-w-0 gap-x-4">
            {/* <Image alt="" src={person.imageUrl} className="h-12 w-12 flex-none rounded-full bg-gray-50" /> */}
            <div className="min-w-0 flex-auto">
              <h1 style={{fontFamily: 'Morabba'}} className="text-right text-lg font-semibold leading-6 text-gray-900 dark:text-white text-right">{episode.title}</h1>
              <p style={{fontFamily: 'Morabba'}} className="mt-1 truncate text-md leading-5 text-gray-500 dark:text-white text-right">{episode.opening}</p>
            </div>
          </div>
          {/* <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{person.role}</p>
            {person.lastSeen ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )}
          </div> */}
        </Link>
      ))}
    </ul>
  )
}
