import { Calculator } from '@/components/three/calculator';

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full h-full max-w-2xl max-h-2xl">
        <Calculator />
      </div>
    </main>
  );
}
