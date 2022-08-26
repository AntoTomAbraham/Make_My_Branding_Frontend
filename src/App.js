import Landing from "./components/Landing";
import FeatureScreen from "./components/FeatureScreen";
import Works from "./components/Works";


function App() {
  let component
switch(window.location.pathname){
  case "/":
  return (
    <div className="App dark:bg-slate-800">
      <Landing />
      <FeatureScreen />
    </div>
  );
  case "/works":
    return (
      <div className="App dark:bg-slate-800">
        <Works />
      </div>
    );

}
}

export default App;
