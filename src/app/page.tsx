"use client";

import dynamic from 'next/dynamic';

const Calculator = dynamic(() => import('@/components/three/calculator').then(mod => mod.Calculator), { ssr: false });

export default function Page() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full h-full max-w-2xl max-h-2xl">
        <Calculator key="calculator-3d" />
      </div>
    </main>
  );
}
