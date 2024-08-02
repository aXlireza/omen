"use client"

import Link from "next/link";

type PoemData = {
  episode: number,
  title: string,
  opening: string,
  content: string,
  quoutes: string[][],
};

export default function ChehraziCard({ episode, title, opening, content, quoutes }:PoemData) {
  // console.log(poem);
  
  return (<div className={`min-h-screen flex items-center justify-center text-white transition-all duration-1000 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-1`}>
    <div className="text-center max-w-4xl mx-auto p-6 z-3 relative">
      <div>
        {quoutes.map((quote, key) => <Link key={key} className="text-blue-500 font-light py-2 px-4 flex items-center justify-center mx-auto space-x-2 hover:text-gray-200 transition-opacity duration-1000 outline-offset-0" href={`/chehrazi/${episode}/${key}`}>{quote}</Link>)}
        <div className={`mb-8 transition-opacity duration-1000 opacity-100`} style={{ transitionDelay: '200ms' }}>
          <h1 style={{fontFamily: 'Morabba'}} className="text-7xl font-bold mb-4 text-stone-700">{title}</h1>
          <h2 style={{fontFamily: 'Morabba'}} className="font-semibold text-4xl text-stone-700 leading-9">{opening}</h2>
        </div>
        <div className={`mb-8 transition-opacity duration-1000 opacity-100`} style={{ transitionDelay: '300ms' }}>
          {content.split('.').map((item, key) => <p key={key} style={{fontFamily: 'Morabba'}} className="font-medium text-2xl text-stone-900 leading-9">{item}</p>)}
        </div>
      </div>
    </div>
  </div>)
}