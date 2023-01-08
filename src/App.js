import RecursiveComponent from "./components/RecursiveComponent";

import data from './data/data';


const App = () => {

  return (
    <div>
      <RecursiveComponent data={data} />
    </div>
  );
}

export default App;
