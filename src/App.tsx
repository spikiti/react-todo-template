import { proxy, useSnapshot } from "valtio";

import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { Filter, Todo } from "./types";

const state = proxy({ count: 0, text: "hello" });

function App() {
  const snap = useSnapshot(state);

  return (
    <div className="flex flex-col gap-2">
      <h1>{snap.count}</h1>
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
