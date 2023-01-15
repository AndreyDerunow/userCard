import React from "react";
import { useHistory } from "react-router-dom";
import { renderStrAge } from "../../../utils/getAge";
const UserCard = () => {
    const history = useHistory();
    const user = localStorage.getItem("user");
    const handleToEdit = () => {
        history.push("/edit");
    };
    if (user) {
        const parsedUser = JSON.parse(user);
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 shadow p-4">
                            <h1>Карточка студента</h1>
                            <p>
                                <b>Имя: </b>
                                {parsedUser.name}
                            </p>
                            <p>
                                <b>Фамилия: </b>
                                {parsedUser.surname}
                            </p>
                            <p>
                                <b>Год рождения: </b>
                                {`${parsedUser.bYear} (${renderStrAge(
                                    parsedUser.bYear
                                )})`}
                            </p>
                            <p>
                                <b>Портфолио: </b>
                                <a
                                    href={parsedUser.portfolio}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    {parsedUser.portfolio}
                                </a>
                            </p>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleToEdit}
                            >
                                Редактировать
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <h1>Карточка студента</h1>
                        <p>Нет данных</p>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleToEdit}
                        >
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserCard;
