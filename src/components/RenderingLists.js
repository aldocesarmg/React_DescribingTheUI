// In both cases, we need to map the values to a variable.
// The only difference is that for filter, we need to first filter the values before using map.

const myToDoList = ['Do homework', 'Study programming', 'Watch the TV', 'Go to the GYM'];

// With map
function AllThingToDo() {
    const myToDoListIterator = myToDoList.map(myThingToDo => <li>{myThingToDo}</li>);
    return(<ul>{myToDoListIterator}</ul>);
}

// With filter
const myToDoListFiltered = myToDoList.filter(ToDoThing => ToDoThing === 'Do homework' || ToDoThing === 'Watch the TV');

function FilteredThingsToDo() {
    const myToDoListFilteredIterator = myToDoListFiltered.map(myThingToDo => <li>{myThingToDo}</li>)
    return(<ul>{myToDoListFilteredIterator}</ul>);
}

export default function ToDoList() {
    return(
        <div>
            <h2>My ToDo List</h2>
            <AllThingToDo />
            <h2>My Filtered ToDo List</h2>
            <FilteredThingsToDo />
        </div>
    );
}