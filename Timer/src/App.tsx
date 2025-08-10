import { useEffect, useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [repe, setRepe] = useState(0);
  const [isNegative, setIsNegative] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    setIsNegative(repe <= 0);
  }, [repe]);

  useEffect(() => {
    const savedRepe = localStorage.getItem('repe');
    const savedTimer = localStorage.getItem("timer")

    if(savedRepe && savedTimer) {
        setRepe(Number(savedRepe))
        setTimer(Number(savedTimer))
    }
  }, []);

  const startTimer = () => {
    if (intervalRef.current || timer <= 0) return;
    setIsTimerRunning(true);
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer - 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current ?? undefined);
    intervalRef.current = null;
    setIsTimerRunning(false);
  };

  const resetTimer = () => {
    stopTimer();
    setTimer(0);
  };

  const resetBoth = () => {
    setRepe(0);
    resetTimer();
  };

  const saveToLocalStorage = () => {
    localStorage.setItem('repe', String(repe));
    localStorage.setItem("timer", String(timer))
    toast.success("Settings saved successfully")  
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current ?? undefined);
    };
  }, []);

  useEffect(() => {
    if (timer <= 0 && isTimerRunning) {
      stopTimer();
    }
  }, [timer, isTimerRunning]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-8">
        <Toaster
          position="bottom-center"
          reverseOrder={false}
        />
      <div className="bg-gray-800 border border-gray-700 shadow-2xl p-10 rounded-3xl w-full max-w-4xl font-mono text-white relative">
        <div className="absolute top-4 left-4 text-sm text-gray-500">CLASSIC CONSOLE</div>
        <div className="absolute top-4 right-4 text-sm text-gray-500">VER 1.0</div>
        
        {/* Main Content Sections */}
        <div className="flex flex-col md:flex-row gap-10 mt-8">
          
          {/* Counter Section */}
          <div className="flex-1 p-8 bg-gray-700 rounded-xl flex flex-col items-center justify-center shadow-inner-lg border border-gray-600">
            <h2 className="text-3xl font-semibold text-gray-200 mb-4 tracking-wider">COUNTER</h2>
            <div className="text-8xl font-bold text-yellow-300 mb-8 bg-black p-4 rounded-lg min-w-[200px] text-center shadow-inset">
              {repe}
            </div>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setRepe(repe => repe + 1)}
                className="w-16 h-16 rounded-full bg-blue-600 text-white text-4xl font-bold flex items-center justify-center shadow-bevel hover:bg-blue-700 active:shadow-inset"
                aria-label="Increment counter"
              >
                +
              </button>
              <button
                onClick={() => setRepe(repe => repe - 1)}
                disabled={isNegative}
                className={`w-16 h-16 rounded-full text-white text-4xl font-bold flex items-center justify-center shadow-bevel transition-all ${
                  isNegative
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 active:shadow-inset'
                }`}
                aria-label="Decrement counter"
              >
                -
              </button>
            </div>
          </div>

          {/* Timer Section */}
          <div className="flex-1 p-8 bg-gray-700 rounded-xl flex flex-col items-center justify-center shadow-inner-lg border border-gray-600">
            <h2 className="text-3xl font-semibold text-gray-200 mb-4 tracking-wider">TIMER</h2>
            <input
              type="number"
              value={timer}
              onChange={e => setTimer(Number(e.target.value))}
              className="text-8xl font-bold text-red-400 mb-8 bg-black p-4 rounded-lg min-w-[200px] text-center shadow-inset outline-none appearance-none bg-opacity-70"
              style={{ width: `${String(timer).length > 0 ? String(timer).length * 40 : 80}px`}}
            />
            <div className="flex items-center gap-4">
              <button
                onClick={startTimer}
                disabled={timer <= 0 || isTimerRunning}
                className={`px-8 py-3 rounded-full font-bold text-xl shadow-bevel transition-all ${
                  timer <= 0 || isTimerRunning
                    ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 active:shadow-inset text-white'
                }`}
              >
                START
              </button>
              <button
                onClick={stopTimer}
                className="px-8 py-3 rounded-full font-bold text-xl bg-yellow-500 text-black shadow-bevel hover:bg-yellow-600 active:shadow-inset"
              >
                STOP
              </button>
              <button
                onClick={resetTimer}
                className="px-8 py-3 rounded-full font-bold text-xl bg-red-600 text-white shadow-bevel hover:bg-red-700 active:shadow-inset"
              >
                RESET
              </button>
            </div>
          </div>
        </div>
        
        {/* Reset All Button */}
        <div className="mt-10 gap-10 flex justify-center">
          <button
            onClick={resetBoth}
            className="px-12 py-4 rounded-full bg-gray-600 text-lg text-white font-bold tracking-widest shadow-bevel-lg hover:bg-gray-700 active:shadow-inset-lg"
          >
            RESET ALL
          </button>
          <button
            onClick={saveToLocalStorage}
            className="px-12 py-4 rounded-full bg-gray-600 text-lg text-white font-bold tracking-widest shadow-bevel-lg hover:bg-gray-700 active:shadow-inset-lg"
          >
            SAVE TO LOCAL STORAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;