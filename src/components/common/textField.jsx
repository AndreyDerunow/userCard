import React from "react";
import PropTypes from "prop-types";
const TextField = ({ type, label, id, onChange, value, error }) => {
    const getInputClasses = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    return (
        <>
            <div className="mb-3">
                <label htmlFor={id} className="form-label">
                    {label}
                </label>
                <div className="input-group has-validation">
                    <input
                        type={type}
                        className={getInputClasses()}
                        id={id}
                        onChange={onChange}
                        value={value === 0 && id === "bYear" ? "" : value}
                    />
                    {error && <div className="invalid-feedback">{error}</div>}
                </div>
            </div>
        </>
    );
};

TextField.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.string
};

export default TextField;
