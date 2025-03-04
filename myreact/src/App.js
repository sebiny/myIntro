import { MyIntro } from "./components/MyIntro.js";
import { MyMbti } from "./components/MyMbti.js";
import { MyName } from "./components/MyName.js";
import { LikeImg } from "./components/LikeImg.js";
function App() {
  return (
    <div>
      <MyMbti />
      <MyIntro />
      <MyName />
      <LikeImg />
    </div>
  );
}

export default App;
