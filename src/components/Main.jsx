import React, { useState, useEffect } from "react";
import { ListOfItems } from "./ListOfItems";
import { Input } from "./Input";
import { Header } from "./Header";

export const Main = () => {
    const [state, setState] = useState([
        { key: "1", title: "number 1", checked: false },
        { key: "2", title: "number 2", checked: false },
        { key: "3", title: "number 3", checked: false },
    ]);
    const [counter, setCounter] = useState({
        done: 0,
        undone : 0,
    })
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                let done = 0;
                let undone = 0;
                const tasks = json.map((elem) => {
                    elem.completed ? done++ : undone++;
                    return {
                        key: elem.id,
                        title: elem.title,
                        checked: elem.completed,
                    };
                });
                setCounter({done, undone})
                setState(tasks);
            });
    }, []);

    const checkedHandler = (keyId) => {
        const tasks = state.map((element) => {
            if (keyId === element.key) {
                element.checked = !element.checked;
            }
            return element;
        });
        setState(tasks);
    };

    const deleteElement = (keyId) => {
        const deleteTask = state.filter((element) => element.key != keyId);
        setState(deleteTask);
    };

    return (
        <>
            <Header done={counter.done} undone={counter.undone} />
            <div className="container-xl p-3">
                <Input tasks={state} newTask={setState} />
                <hr />
                <ul className="list-group">
                    {state.map((element) => (
                        <ListOfItems
                            keyIndex={element.key}
                            title={element.title}
                            keyChecked={element.checked}
                            checkedHandler={checkedHandler}
                            deleteElement={deleteElement}
                        ></ListOfItems>
                    ))}
                </ul>
            </div>
        </>
    );
};
