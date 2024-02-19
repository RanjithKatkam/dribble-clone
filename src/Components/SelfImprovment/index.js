import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./index.css";

function SelfImprovment() {
    useGSAP(() => {
        gsap.to(".self-circle", {
            top: "35%",
            left: "-1.5%",
            duration: 1,
        });
        gsap.to(".self-circle", {
            top: "35%",
            left: "-1.5%",
            duration: 1,
        });
        gsap.to(".self-circle", {
            top: "56%",
            left: "-1.5%",
            duration: 1,
        });
        gsap.to(".self-circle", {
            top: "86%",
            left: "-1.5%",
            duration: 1,
            scrollTrigger: {
                trigger: ".self-circle",
                scroller: ".hero",
                start: "top 55%",
            },
        });
    }, []);
    return (
        <div className="self-improvment-div">
            <ul className="details-list">
                <li className="list">
                    <p>It's not as easy as 1-2-3.</p>
                    <h4>
                        The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know
                        (and nothing else).
                    </h4>
                </li>
                <li className="list">
                    <p>Old habits are hard to break.</p>
                    <h4>And bad behaviors die hard. Fortunately, we give you great, science- backed techniques to use.</h4>
                </li>
                <li className="list">
                    <p> You and your motivation don't have a long-term relationship.</p>
                    <h4>
                        Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exerciseswill help you
                        stick to your goals.
                    </h4>
                </li>
                <li className="list">
                    <p>Books just don't offer practical solutions.</p>
                    <h4>Remember when you learn to ride a bike just by reading? yeah we don't eaither.</h4>
                </li>
            </ul>
            <img
                className="self-circle"
                src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708347380/bendy-circle-button_z3wiri.png"
                alt="circle"
            />
        </div>
    );
}

export default SelfImprovment;
