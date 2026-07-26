import Counter from '@/components/Counter';

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <Counter className="text-center" />
    </main>
  );
}