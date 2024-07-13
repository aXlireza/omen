"use client"

// pages/index.js
import { useState } from 'react';
import Head from 'next/head';

type PoemData = {
  poem: string[];
  interpreted: string[];
};

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PoemData | null>(null);

  const handleClick = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    fetch('/api/random-poem')
      .then((response) => response.json())
      .then((data: PoemData) => setData(data))
      .then(() => setLoading(false))
      .catch((error) => console.error('Error fetching CSV data:', error));
  };

  return (
    <div className={`min-h-screen flex items-center justify-center text-white transition-all duration-1000 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-1`}>
      <div className={`transition-opacity duration-1000 bg-gradient-to-bl from-purple-700 via-purple-800 to-purple-900 ${loading ? 'opacity-100' : 'opacity-0'} h-full min-w-full top-0 left-0 fixed z-2`}></div>
      <Head>
        <title>Make a Wish</title>
      </Head>
      <div className="text-center max-w-2xl mx-auto p-6 z-3 relative">
        {!data && !loading ? (
          <button onClick={handleClick} className={`bg-white text-blue-500 font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
            Make a Wish
          </button>
        ) : !data && loading ? (
          <button className={`bg-white text-blue-500 font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gray-200 transition-opacity duration-1000 opacity-0`}>
            Make a Wish
          </button>
        ) : ''}
        <div className={`${!data ? 'max-h-0 opacity-0 mb-0' : ''}`}>
          <button onClick={handleClick} className="text-blue-500 font-light py-2 px-4 flex items-center justify-center mx-auto space-x-2 hover:text-gray-200 transition-opacity duration-1000 opacity-0 outline-offset-0" style={{ transitionDelay: '100ms', opacity: !loading ? 1 : 0 }}>
            <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons/icons/arrow-clockwise.svg" alt="reload" className="w-4 h-4 text-blue-500" />
            <span>Another Wish</span>
          </button>
          <div className={`mb-8 transition-opacity duration-1000 ${!loading ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <h1 style={{fontFamily: 'Morabba'}} className="font-semibold text-7xl text-stone-700">{data?.poem[0]}</h1>
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
    </div>
  )
}
