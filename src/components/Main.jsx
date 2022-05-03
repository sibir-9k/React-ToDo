import React, { useState, useEffect } from "react";
import { ListOfItems } from "./ListOfItems";
import { Input } from "./Input";
import { Header } from "./Header";

export const Main = () => {
    const [state, setState] = useState([]);

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

    const done = state.filter((item) => item.checked).length;
    const undone = state.filter((item) => !item.checked).length;

    return (
        <>
            <Header done={done} undone={undone} />
            <div className="container-xl p-3">
                <Input tasks={state} newTask={setState} />
                <hr />
                <ul className="list-group">
                    {state.map((element) => (
                        <ListOfItems
                            keyIndex={element.key}
                            title={element.title}
                            keyChecked={element.checked}
                            key={element.key}
                            checkedHandler={checkedHandler}
                            deleteElement={deleteElement}
                        ></ListOfItems>
                    ))}
                </ul>
            </div>
        </>
    );
};
