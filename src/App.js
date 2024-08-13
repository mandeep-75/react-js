import { Body } from "./components/Body.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Input } from "./components/Input.js";
import "./App.css";
import { useState } from "react";

export function App() {
  const [tasks, settasks] = useState([]);
  const [doneft, setdoneft] = useState(false);
  return (
    <div>
      <Footer />
      <main>
        <Input
          tasks={tasks}
          settasks={settasks}
          setdoneft={setdoneft}
          doneft={doneft}
        />
        <Body tasks={tasks} settasks={settasks} />
      </main>

      <Header />
    </div>
  );
}
