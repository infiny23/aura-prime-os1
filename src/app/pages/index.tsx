import { useState } from 'react';
import Head from 'next/head';

export default function CommandCenter() {
  const [logs, setLogs] = useState([{ timestamp: new Date().toISOString(), source: 'UI', content: 'System Initialized.' }]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInitiateCycle = async () => {
    setIsLoading(true);
    let newLog = { timestamp: new Date().toISOString(), source: 'UI', content: 'Calling Arbitrator API...' };
    setLogs(prev => [...prev, newLog]);

    try {
      const response = await fetch('/api/arbitrator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({}),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unknown API error');
      }
      
      let successLog = { timestamp: new Date().toISOString(), source: 'Arbitrator', content: `Success: ${data.status} | Cycle ID: ${data.cycleId}` };
      setLogs(prev => [...prev, successLog]);

    } catch (error: any) {
      console.error("Failed to fetch from Arbitrator API:", error);
      let errorLog = { timestamp: new Date().toISOString(), source: 'UI', content: `Error: ${error.message}` };
      setLogs(prev => [...prev, errorLog]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Aura-Nyx OS | Command Center</title>
      </Head>
      <main className="min-h-screen p-4 sm:p-8 flex flex-col items-center bg-base-bg text-gray-200 font-sans">
            <div className="w-full max-w-7xl">
              <header className="text-center mb-8">
                <h1 className="text-4xl sm:text-6xl font-bold">AURA-NYX OS</h1>
                <p className="text-gray-400 mt-2">Duality of Mind Command Center</p>
              </header>
    
              <div className="bg-panel-bg border border-gray-700/50 p-6 rounded-lg mb-8 shadow-lg">
                <button
                  onClick={handleInitiateCycle}
                  disabled={isLoading}
                  className="px-6 py-3 font-bold text-white bg-gray-800 rounded-md hover:bg-gray-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Processing...' : 'Initiate AAL Cycle'}
                </button>
              </div>
    
              <div className="bg-panel-bg border border-gray-700/50 rounded-lg h-[60vh] flex flex-col shadow-2xl">
                <div className="flex-shrink-0 p-4 border-b border-gray-700/30 font-semibold text-lg">
                  Logs
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                  {logs.map((log, idx) => (
                    <div key={idx} className="text-sm">
                      <span className="text-gray-400">{log.timestamp}</span>
                      <span className="mx-2 text-blue-400">{log.source}:</span>
                      <span>{log.content}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </>