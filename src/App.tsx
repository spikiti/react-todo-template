import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { AppContext } from "./machine";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <AppContext.Provider>
        <Header />
        <TodoList />
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
