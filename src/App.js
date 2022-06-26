import "./scss/App.scss";
import Register from "./components/register/Register";
import Card from "./components/card/Card";
function App() {
  return (
    <>
      <div className="container">
        <Register />
        <Card />
      </div>
    </>
  );
}

export default App;
