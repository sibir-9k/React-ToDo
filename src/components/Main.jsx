import React, { useState, useEffect } from "react";
import { ListOfItems } from "./ListOfItems";
import { Input } from "./Input";

export const Main = () => {
    const [state, setState] = useState([
        { key: "1", title: "number 1", checked: false },
        { key: "2", title: "number 2", checked: false },
        { key: "3", title: "number 3", checked: false },
    ]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((json) => {
                const tasks = json.map((elem) => ({
                    key: elem.id,
                    title: elem.title,
                    checked: elem.completed,
                }));
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
    );
};
