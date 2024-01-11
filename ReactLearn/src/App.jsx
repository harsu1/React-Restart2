import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg gap-3 bg-white py-2 rounded-3xl">
          <button className="outline-none px-4 bg-red-600"> Red</button>
        </div>
      </div>
    </div>
  );
}

export default App;
