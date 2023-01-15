import React from "react";
import { useHistory } from "react-router-dom";
import { renderStrAge } from "../../utils/getAge";
const UserCard = ({ parsedUser }) => {
    const history = useHistory();
    const handleToEdit = () => {
        history.push("/edit");
    };

    return (
        <>
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
                {`${parsedUser.bYear} (${renderStrAge(parsedUser.bYear)})`}
            </p>
            <p>
                <b>Портфолио: </b>
                <a href={parsedUser.portfolio} rel="noreferrer" target="_blank">
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
        </>
    );
};

export default UserCard;
