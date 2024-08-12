import { Body } from "./components/Body.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Input } from "./components/Input.js";
import "./App.css";
import { useState } from "react";

export function App() {
  const [tasks, settasks] = useState([
    { id: 1238, name: "my first task", done: false },
    { id: 1239, name: "my second task", done: true },
    { id: 1240, name: "my third task", done: false },
    { id: 1241, name: "my fourth task", done: true },
    { id: 1242, name: "my fifth task", done: false },
    { id: 1243, name: "my sixth task", done: true },
    { id: 1244, name: "my seventh task", done: false },
    { id: 1245, name: "my eighth task", done: true },
  ]);
  return (
    <div>
      <Footer />
      <main>
        <Input tasks={tasks} settasks={settasks} />
        <Body tasks={tasks} settasks={settasks} />
      </main>

      <Header />
    </div>
  );
}
