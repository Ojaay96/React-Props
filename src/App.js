import NavComponent from "./components/NavComponent";
import Card1Component from "./components/Card1Component";
import Card2Component from "./components/Card2Component";

const App = () => {
  return (
    <>
      <div className="App">
        <NavComponent />
        <Card2Component />
        <Card1Component />
      </div>
    </>
  );
};

export default App;
