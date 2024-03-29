import { useGSAP } from "@gsap/react";
import "./index.css";
import gsap from "gsap";

function TestSection() {
    useGSAP(() => {
        gsap.from(".test-button, .takes", {
            opacity: 0,
            duration: 1,
            y: "100px",
            scale: 0,
            scrollTrigger: {
                trigger: ".test-button",
                scroller: ".hero",
                start: "top 80%",
            },
        });
    }, []);
    return (
        <div className="test-section-div">
            <h4>We take privacy seriously</h4>
            <p>Before you get started</p>
            <h3>"We won't share your answers with anyone (and won't ever tell you which friends said what about you)"</h3>
            <h2>
                with love, <span>Ranjith Katkam</span>
            </h2>
            <button className="test-button">Start a test</button>
            <h5 className="takes">Takes only 5 minutes.</h5>
        </div>
    );
}

export default TestSection;
