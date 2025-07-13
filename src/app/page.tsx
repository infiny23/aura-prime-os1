import Head from 'next/head';

export default function CommandCenter() {
  return (
    <>
      <Head>
        <title>Aura-Nyx OS | Command Center</title>
      </Head>
      <main className="min-h-screen p-4 sm:p-8 flex flex-col items-center bg-base-bg text-gray-200 font-sans">
        <div className="w-full max-w-7xl">
          {/* Header */}
          <header className="text-center mb-8">
            <h1 className="text-4xl sm:text-6xl font-bold neon-metallic-text">
              AURA-NYX OS
            </h1>
            <p className="text-gray-400 mt-2">Duality of Mind Command Center</p>
          </header>

          {/* Control Panel */}
          <div className="bg-panel-bg border border-accent-cyan/20 p-6 rounded-lg mb-8 shadow-lg shadow-accent-cyan/5">
            <button
              className="px-6 py-3 font-bold text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-cyan"
            >
              Initiate AAL Cycle
            </button>
          </div>

          {/* Chronicler Log Display */}
          <div className="bg-panel-bg border border-gray-700/50 rounded-lg h-[60vh] flex flex-col shadow-2xl">
            <div className="flex-shrink-0 p-3 bg-gray-800/50 border-b border-gray-700/50">
              <h3 className="text-lg font-semibold">The Chronicler - System Log Stream</h3>
            </div>
            <div className="flex-grow p-4 font-mono text-sm overflow-y-auto">
              {/* Log entries will be displayed here */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}