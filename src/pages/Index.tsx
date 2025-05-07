
import JobListingApp from '@/components/JobListingApp';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b py-4">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold text-blue-600">JobFinder</h1>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 container max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg border shadow-sm h-[calc(100vh-8rem)]">
          <JobListingApp />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t py-4">
        <div className="container max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          © 2025 JobFinder — Find your dream job today
        </div>
      </footer>
    </div>
  );
};

export default Index;
