import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
}

export default App;
