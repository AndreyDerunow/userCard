import React from "react";
import { useHistory } from "react-router-dom";

const PopUp = () => {
    const history = useHistory();
    const handletoUser = () => {
        history.push("/");
    };

    return (
        <>
            <div
                className="modal fade "
                id="exampleModal"
                tabIndex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content mt-5">
                        <div className="modal-body">Обновлено!</div>
                        <div className="modal-footer">
                            <a
                                href="#"
                                onClick={handletoUser}
                                data-bs-dismiss="modal"
                            >
                                Close
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PopUp;
