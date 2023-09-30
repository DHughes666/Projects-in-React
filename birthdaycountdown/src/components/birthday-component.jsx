import { useState, useEffect } from "react";
import CountDown from "./countdown-component";
import { Link } from "react-router-dom";

const Birthday = ({name, day, month}) => {
    // useState Hooks
    const [state, setState] = useState({
        seconds: 0,
        hours: 0,
        minutes: 0,
        days: 0,
        isItBday: false,
    });

    if (name === undefined || day === undefined || month === undefined) {
        // This is if not enough parameters are provided
        name = 'Chabbawaukee'; // Name of the person
        month = 11;
        day = 25
    }

    // get current time
    const currentTime = new Date();

    // get the current year
    const currentYear = currentTime.getFullYear();

    const isItBday = 
        currentTime.getDate() === day && currentTime.getMonth() === month - 1;

    useEffect(() => {
        setInterval(() => {
            const coundown = () => {
                // Getting the Current Date
                const dateAtm = new Date();

                // if the Birthday has passed
                // then set the Birthday coundown for next year
                let birthdayDay = new Date(currentYear, month - 1, day);
                if (dateAtm > birthdayDay) {
                    birthdayDay = new Date(currentYear + 1, month - 1, day);
                } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
                    birthdayDay = new Date(currentYear, month - 1, day);
                }

                // Getting the Current Time
                const currentTime = dateAtm.getTime();
                // Getting Birthdays Time
                const birthdayTime = birthdayDay.getTime();
                // Time remaining for the Birthday
                const timeRemaining = birthdayTime - currentTime;

                let seconds = Math.floor(timeRemaining / 1000);
                let minutes = Math.floor(seconds / 60);
                let hours = Math.floor(minutes / 60);
                let days = Math.floor(hours / 24);

                seconds %= 60;
                minutes %= 60;
                hours %= 24;

                // Setting States
                setState((prevState) => ({
                    ...prevState,
                    seconds, minutes, hours, days, isItBday
                }));
            } 
            if (!isItBday) {
                coundown();
            } else {
                setState((prevState) => ({
                    ...prevState,
                    isItBday: true,
                }));
            }
        }, 1000);
    }, [currentYear, day, isItBday, month - 1, day]);

    let birth = new Date(currentYear, month - 1, day);
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    let monthBday = monthNames[birth.getMonth()];

    return (
        <div className="page">
            <CountDown countDownData={state} name={name}/>
            {!isItBday && (
                <>
                    <div className="birthdate">
                        Birth-Date: {day} {monthBday} {currentYear} 
                    </div>
                    <div className="credits">
                        <h1><b>Hurray!!!</b></h1>
                    </div>
                    <Link to='/generate'>Generate Here</Link>
                </>
            )}
        </div>
    )
}

export default Birthday;