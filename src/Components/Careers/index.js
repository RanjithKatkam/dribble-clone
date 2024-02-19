import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Careers() {
    useGSAP(() => {
        gsap.from("#open", {
            x: "-200px",
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: "#open",
                scroller: ".hero",
                start: "top 80%",
            },
        });
        gsap.from(".positions-div", {
            y: "100px",
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".positions-div",
                scroller: ".hero",
                start: "top 80%",
            },
        });
    }, []);
    return (
        <div className="careers-div">
            <h1 id="open">Open vacancies</h1>
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
