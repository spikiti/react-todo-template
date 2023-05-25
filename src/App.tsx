import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { FilterProvider, TodosProvider } from "./context";

const App = () => {
  return (
    <TodosProvider>
      <div className="flex flex-col gap-2">
        <Header />
        <FilterProvider>
          <TodoList />
          <Footer />
        </FilterProvider>
      </div>
    </TodosProvider>
  );
};

export default App;
