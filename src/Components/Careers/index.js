import "./index.css";

function Careers() {
    return (
        <div className="careers-div">
            <h1>Open vacancies</h1>
            <div className="positions-div">
                <div className="position">
                    <h1>Senior Full-Stack Engineer</h1>
                    <p>• Full-time position</p>
                    <p>• Berlin or remote</p>
                    <p>• €65-85k, 0.5-180% equity share options</p>
                    <button>See details</button>
                </div>
                <div className="position">
                    <h1>Senior Designer</h1>
                    <p>• Full-time position</p>
                    <p>• Berlin or remote</p>
                    <p>• €40-55k. 0.25-0.50% equity share options</p>
                    <button>See details</button>
                </div>
                <div className="position">
                    <h1>Superstar Intern</h1>
                    <p>• Full-time position</p>
                    <p>• Berlin or remote</p>
                    <p>• €20-24k, 0.5-1.50% equity share options</p>
                    <button>See details</button>
                </div>
            </div>
        </div>
    );
}

export default Careers;
