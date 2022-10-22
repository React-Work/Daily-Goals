import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./GoalInput.css";

const FormControl = styled.div`
    margin: 0.5rem 0;
    & label {
        font-weight: bold;
        display: block;
        color: ${props => props.inValid ? "red" : "black"};
        margin-bottom: 0.5rem;
    }

    & input {
        display: block;
        width: 100%;
        border: 1px solid ${props => props.inValid ? "red" : "#ccc"};
        background: ${props => props.inValid ? "#ffd7d7" : ""};
        font: inherit;
        line-height: 1.5rem;
        padding: 0 0.25rem;
    }

    & input:focus {
        outline: none;
        background: #fad0ec;
        border-color: #8b005d;
    }
`;

const GoalInput = (props) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = (event) => {
        if (!isValid && enteredValue.trim().length > 0) {
            setIsValid(true);
            return;
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);
        setEnteredValue("");
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <FormControl inValid={!isValid}>
                <label>Daily Goal</label>
                <input
                    type="text"
                    value={enteredValue}
                    onChange={goalInputChangeHandler}
                />
            </FormControl>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default GoalInput;
