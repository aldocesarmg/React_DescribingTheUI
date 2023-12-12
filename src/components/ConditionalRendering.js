function Task({name, isCompleted}) {
    // return <li>{name}</li>;

    /* WITH IF SENTENCE:
    if (!isCompleted) {
        return <li className="item">{name}</li>;
    } else {
        return null;
    }
    */

    /* WITH &&
    return(<li>{isCompleted && <strong>Completed: </strong>} {name}</li>);
    */

    return(<li>{!isCompleted ? name : <del>{name}</del>}</li>);
}

export default function TaskList() {
    return(
        <section>
            <h1>Task List</h1>
            <h2>Pending tasks</h2>
            <ul>
                <Task isCompleted={true} name='Wash the dishes'/>
                <Task isCompleted={true} name='Clean the house'/>
                <Task isCompleted={false} name='Do my homework'/>
                <Task isCompleted={true} name='Clear my desk'/>
                <Task isCompleted={false} name='Mow the lawn'/>
            </ul>
        </section>
    );
}