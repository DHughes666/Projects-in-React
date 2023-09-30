import Wish from "./wish-component";

const CountDown = ({countDownData, name}) => {
    if (!countDownData.isItBday) {
        return (
            <div>
                <h1>
                    Countdown to <span className="highlight">{name}'s</span>Birthday
                </h1>
                <div className="coundown-wrapper">
                    <div className="coundown-box">
                        {countDownData.days}
                        <span className="legend">Days</span>
                    </div>
                    <div className="countdown-box">
                        {countDownData.hours}
                        <span className="legend">Hours</span>
                    </div>
                    <div className="countdown-box">
                        {countDownData.minutes}
                        <span className="legend">Minutes</span>
                    </div>
                    <div className="countdown-box">
                        {countDownData.seconds}
                        <span className="legend">Seconds</span>
                    </div>
                </div>
            </div>
            
        )
    } else {
        return <Wish name={name} />;
    }
}

export default CountDown;