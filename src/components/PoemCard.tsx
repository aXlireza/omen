"use client"

type PoemData = {
  poem: string[];
  interpreted: string[];
};

export default function PoemCard({ poem, interpreted }:PoemData) {
  // console.log(poem);
  
  return (<div className={`min-h-screen flex items-center justify-center text-white transition-all duration-1000 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-1`}>
    <div className="text-center max-w-4xl mx-auto p-6 z-3 relative">
      <div className={``}>
        <div className={`mb-8 transition-opacity duration-1000 opacity-100`} style={{ transitionDelay: '200ms' }}>
          <h1 style={{fontFamily: 'Morabba'}} className="text-7xl font-semibold mb-4 text-stone-700">شعر</h1>
          {poem.map((line, key) => <p key={key} style={{fontFamily: 'Morabba'}} className="font-medium text-2xl text-stone-700 leading-9">
            <span>{line[0]} </span>
            <span>{line[1]}</span>
          </p>) || ''}
        </div>
        <div className={`mb-8 transition-opacity duration-1000 opacity-100`} style={{ transitionDelay: '300ms' }}>
          <h1 style={{fontFamily: 'Morabba'}} className="text-7xl font-semibold mb-4 text-stone-700">تفسیر</h1>
          {interpreted.map((line, key) => <p key={key} style={{fontFamily: 'Morabba'}} className="font-medium text-2xl text-stone-700 leading-9">{line}</p>) || ''}
        </div>
      </div>
    </div>
  <style jsx global>{`
    body {
      font-family: 'Vazir', sans-serif;
    }
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    @keyframes gradient2 {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    .bg-gradient-to-r {
      background: linear-gradient(270deg, #ff7e5f, #feb47b, #86a8e7, #91eac9);
      background-size: 800% 800%;
      animation: gradient 100s ease infinite;
    }
    .bg-gradient-to-bl {
      background: linear-gradient(135deg, #6b2d5c, #452b52, #282439);
      background-size: 800% 800%;
      animation: gradient2 100s ease infinite;
    }
  `}</style>
  </div>)
}