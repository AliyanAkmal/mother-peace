'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, [router]);

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center space-y-6 animate-fade-in">
        <p className="text-3xl font-light text-gray-800 mb-2">Welcome to</p>
        <h1 className="text-5xl font-bold text-[#1E0B1A] mb-8">
          Mother of Peace
        </h1>

        {/* <div className="flex justify-center">
          <img
            src="/assets/logo.png"
            alt="Mother of Peace Logo"
            className="w-64 h-64 object-contain transition-transform hover:scale-105"
          />
        </div> */}

        <p className="text-lg text-gray-600 mt-8 italic">
          "Bringing harmony to the world"
        </p>
      </div>
    </div>
  );
}
