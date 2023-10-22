import "./App.css";
import Abilities from "./components/Abilities/Abilities";
import Experiences from "./components/Experiences/Experiences";
import Me from "./components/Me";

function App() {
  return (
    <main className="p-5 flex flex-col gap-5">
      <Me />
      <Abilities />
      <Experiences />
    </main>
  );
}

export default App;
