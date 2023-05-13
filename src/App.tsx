import "./App.css";

function App() {
  return (
    <div className="mt-72 flex flex-col items-center justify-center">
      <div className="w-4/12 flex flex-col items-center justify-center text-base">
        <input
          className="p-2 w-full border placeholder:italic"
          type="text"
          pattern="w+"
          placeholder="Lookup a movie..."
        />
        <button className="p-2 mt-5 rounded-md w-full bg-sky-400 text-white">
          <span>Search</span>
        </button>
      </div>
    </div>
  );
}

export default App;
