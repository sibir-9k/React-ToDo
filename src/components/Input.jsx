import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Input = ({ newTask, tasks }) => {
    const [changeHandler, setChandeHandler] = useState("");

    const getInput = (event) => {
        setChandeHandler(event.target.value);
    };

    const handlerEnter = (event) => {
        if (event.key === "Enter" && changeHandler != "") {
            newTask([
                ...tasks,
                { key: uuidv4(), title: changeHandler, checked: false },
            ]);
            setChandeHandler("");
        }
    };

    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control p-3"
                placeholder="Введите название заметки"
                value={changeHandler}
                onInput={getInput}
                onKeyPress={handlerEnter}
            />
        </div>
    );
};
