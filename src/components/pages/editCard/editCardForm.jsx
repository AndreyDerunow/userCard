import React, { useEffect, useState } from "react";
import * as yup from "yup";
import TextField from "../../common/textField";
import { useHistory } from "react-router-dom";
import PopUp from "../../common/popUp";

const EditCardForm = () => {
    const [data, setData] = useState({
        name: "",
        surname: "",
        bYear: 0,
        portfolio: ""
    });
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            setData(JSON.parse(user));
        }
    }, []);
    const [errors, setErrors] = useState({});
    const history = useHistory();
    yup.addMethod(yup.number, "requiredNumber", function (value) {
        if (value === 0) return false;
    });
    const validateScheme = yup.object().shape({
        portfolio: yup
            .string()
            .required("Поле 'Портфолио' обязательно для заполнения")
            .url("Значение должно быть ссылкой"),
        bYear: yup
            .number("Поле 'Год рождения' заполнено некорректно")

            // .positive("Поле 'Год рождения' обязательно для заполнения")
            .integer("Поле 'Год рождения' заполнено некорректно")
            .max(
                new Date(Date.now()).getFullYear(),
                "Поле 'Год рождения' заполнено некорректно"
            )
            .min(1000, "Поле 'Год рождения' заполнено некорректно"),
        surname: yup
            .string()
            .required("Поле 'Фамилия' обязательно для заполнения"),
        name: yup.string().required("Поле 'Имя' обязательно для заполнения")
    });

    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        if (data.bYear === 0 && data.name !== "" && data.surname !== "") {
            setErrors({
                bYear: "Поле 'Год рождения' обязательно для заполнения"
            });
            return;
        }
        validateScheme
            .validate(data)
            .then(() => setErrors({}))
            .catch((error) => setErrors({ [error.path]: error.message }));

        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleChange = ({ target }) => {
        if (target.id !== "bYear") {
            setData((prev) => ({ ...prev, [target.id]: target.value }));
        } else {
            if (target.value === "") {
                setData((prev) => ({ ...prev, [target.id]: 0 }));
            } else {
                setData((prev) => ({ ...prev, [target.id]: target.value }));
            }
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid) return;
        localStorage.setItem("user", JSON.stringify(data));
    };
    const handletoUser = () => {
        history.push("/");
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <form onSubmit={handleSubmit}>
                            <TextField
                                type="text"
                                label="Имя"
                                id="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                type="text"
                                label="Фамилия"
                                id="surname"
                                value={data.surname}
                                onChange={handleChange}
                                error={errors.surname}
                            />
                            <TextField
                                type="number"
                                label="Год рождения"
                                id="bYear"
                                value={+data.bYear}
                                onChange={handleChange}
                                error={errors.bYear}
                            />
                            <TextField
                                type="text"
                                label="Портфолио"
                                id="portfolio"
                                onChange={handleChange}
                                value={data.portfolio}
                                error={errors.portfolio}
                            />

                            <div className="d-flex gap-2 justify-content-start">
                                <button
                                    type="button"
                                    onClick={handletoUser}
                                    className="btn btn-secondary mr-2"
                                >
                                    Назад
                                </button>
                                <button
                                    type="submit"
                                    disabled={!isValid}
                                    className="btn btn-primary"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Обновить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <PopUp />
        </>
    );
};

export default EditCardForm;
