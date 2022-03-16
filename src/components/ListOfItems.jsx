import React from "react";

export const ListOfItems = ({
    title,
    keyIndex,
    keyChecked,
    checkedHandler,
    deleteElement,
}) => {
    return (
        <li className="list-group-item p-3 note" key={keyIndex}>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    key={"checkbox-" + keyIndex}
                    checked={keyChecked}
                    onChange={() => checkedHandler(keyIndex)}
                />
                <label
                    className="form-check-label"
                    htmlFor={"checkbox-" + keyIndex}
                ></label>
            </div>

            <div className={keyChecked ? "checkOn" : ""}>
                {title}
                <span className="date-item">
                    {new Date().toLocaleDateString()}
                </span>
            </div>

            <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => deleteElement(keyIndex)}
            >
                &times;
            </button>
        </li>
    );
};
