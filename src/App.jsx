import Main from "./appComponents/main";
import { Sun,Cloud,CloudRain } from "lucide-react";
import React from "react";
import { Toaster } from "sonner";

function App() {
  const emojis= {
    happy: "😊",
    neutral: "😐",
    sad: "😔",
    angry: "😠",
    tired: "😪",
  }
  
  const weatherIcons = {
    sunny: <Sun className="h-5 w-5 text-yellow-400" />,
    cloudy: <Cloud className="h-5 w-5 text-gray-400" />,
    rainy: <CloudRain className="h-5 w-5 text-blue-400" />,
  }
  
  

  return (
    <div>
        <Main emojis={emojis} weatherIcons={weatherIcons}/>

    </div>
  )
}

export default App;
