interface ToolOutput { structuredContent?: any; }
declare global { interface Window { openai?: { toolOutput?: ToolOutput; }; } }

function App() {
  const data = window.openai?.toolOutput?.structuredContent;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Hello World
        </h1>
        <p className="text-gray-600 text-center text-lg">
          Welcome to your React widget!
        </p>
        {data && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm font-semibold text-gray-700 mb-2">Data received:</p>
            <pre className="text-xs text-gray-600 overflow-auto">{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;