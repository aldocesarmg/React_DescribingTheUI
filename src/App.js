import './App.css';

// 1   2                1    3    
import MyFirstComponent from './components/MyFirstComponent';
// 1   4                                       1    3
import { FirstNamedExport, SecondNamedExport } from './components/NamedExport';

function App() {
  return (
    <div className="App">
      <MyFirstComponent />
      <FirstNamedExport />
      <SecondNamedExport />
    </div>
  );
}

export default App;

/*
1. import ... from: To import a component.
2. MyFirstComponent: The name of the component.
3. './components/MyFirstComponent': The local path of the component.
4. { FirstNamedExport, SecondNamedExport }: The names of the two components to be imported, always enclosed by {}.
*/