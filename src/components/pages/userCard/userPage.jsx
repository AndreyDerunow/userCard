import React from "react";
import { useHistory } from "react-router-dom";

import UserCard from "../../ui/userCard";
const UserPage = () => {
    const history = useHistory();
    const user = localStorage.getItem("user");
    const handleToEdit = () => {
        history.push("/edit");
    };

    const parsedUser = JSON.parse(user);
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <h1>Карточка студента</h1>
                        {user ? (
                            <UserCard parsedUser={parsedUser} />
                        ) : (
                            <>
                                <p>Нет данных</p>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleToEdit}
                                >
                                    Добавить
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserPage;
