
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-white">Canva</div>
        <nav className="hidden md:flex space-x-8 text-white">
          <a href="#" className="hover:underline">Design</a>
          <a href="#" className="hover:underline">Product</a>
          <a href="#" className="hover:underline">Plans</a>
          <a href="#" className="hover:underline">Business</a>
          <a href="#" className="hover:underline">Education</a>
          <a href="#" className="hover:underline">Help</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-white font-semibold py-2 px-4 rounded-lg bg-purple-600 hover:bg-purple-700">Sign up</button>
          <button className="text-black font-semibold py-2 px-4 rounded-lg bg-white hover:bg-gray-200">Log in</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          A new era
        </h1>
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          of imagination
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-10">
          Discover a whole new world of skills and tools designed to put your imagination to work.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="bg-white text-black font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition duration-300">
            Start designing for free
          </button>
          <button className="bg-gray-800 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-700 transition duration-300">
            Explore our launches
          </button>
        </div>
      </main>

      {/* Footer - can be added later */}
      <footer className="p-4 text-center text-white">
        {/* Footer content can go here */}
      </footer>
    </div>
  );
}
