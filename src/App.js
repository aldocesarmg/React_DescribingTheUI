import './App.css';

// 1   2                1    3    
import MyFirstComponent from './components/MyFirstComponent';
// 1   4                                       1    3
import { FirstNamedExport, SecondNamedExport } from './components/NamedExport';

import MyFather from './components/ComponentInsideComponent';
import TaskList from './components/ConditionalRendering';
import ToDoList from './components/RenderingLists';

function App() {
  return (
    <div className="App">
      <MyFirstComponent />
      <FirstNamedExport />
      <SecondNamedExport />

      <MyFirstComponent> {/* this isn't working because MyFirstComponent is not receiving any Component as a prop, compare MyFirstComponent with Container to see the difference */}
        <SecondNamedExport />
      </MyFirstComponent>

      <MyFather />

      <TaskList />

      <ToDoList />
    </div>
  );
}

export default App;

/*
1. import ... from: To import a component.
2. MyFirstComponent: The name of the component. As this is a default import, even if the name doesn't match, it will work.
3. './components/MyFirstComponent': The local path of the component.
4. { FirstNamedExport, SecondNamedExport }: The names of the two components to be imported, always enclosed by {}.
*/