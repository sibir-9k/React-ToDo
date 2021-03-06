import React from "react";
import logo from "../img/logo512.png";

export const Header = ({ done, undone }) => {
    return (
        <nav className="navbar navbar-light bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <div className="d-flex align-items-center">
                        <img
                            src={logo}
                            width="100"
                            height="100"
                            className="d-inline-block "
                            alt=""
                            loading="lazy"
                        />
                        <h2 className="text-light ">React-ToDo</h2>
                    </div>
                </a>
                <div className="counter">
                    <div className="allCounter">Всего: {done + undone}</div>
                    <div className="doneCounter">Выполнено: {done}</div>
                    <div className="undoneCounter">Не выполненно: {undone}</div>
                </div>
            </div>
        </nav>
    );
};
