import { useGSAP } from "@gsap/react";
import "./index.css";
import gsap from "gsap";

function WorkSection() {
    useGSAP(() => {
        gsap.from("#work", {
            x: "-200px",
            duration: 1,
            opacity: 0,
            scale: 0,
            scrollTrigger: {
                trigger: "#work",
                scroller: ".hero",
                start: "top 80%",
            },
        });
        gsap.from("#ahead", {
            x: "200px",
            duration: 1,
            opacity: 0,
            scale: 0,
            scrollTrigger: {
                trigger: "#work",
                scroller: ".hero",
                start: "top 80%",
            },
        });
        gsap.fromTo(
            "#imgg",
            {
                rotation: 20,
                repeat: "-1",
                duration: 3,
            },
            {
                rotation: -20,
                repeat: "-1",
                duration: 3,
            }
        );
    }, []);
    return (
        <div className="work-section-div">
            <div className="work-heading-section">
                <h1 id="work">Work with us</h1>
                <h2 id="ahead">ahead</h2>
            </div>
            <div className="work-main-div">
                <div className="work-div1">
                    <div className="about-div">
                        <img id="imgg" src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708274239/ghost_uzvgpz.png" alt="i" />
                        <h2>About</h2>
                        <p>
                            At ahead our goal is to make self- improvement fun and lasting. We know there's a way how to make it work. And that's
                            what aHead is all about!
                        </p>
                        <div className="about-inner-div">
                            <h2>Product</h2>
                            <p>
                                Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or
                                manager - like we did...
                            </p>
                        </div>
                    </div>
                </div>
                <div className="work-div2">
                    <ul className="work-cards-div">
                        <li className="work-card">
                            <h3>Power through, even when the going gets tough</h3>
                            <p>We help you spot and work around whatever stands in the way. be it bad habits, fears. etc.</p>
                        </li>
                        <li className="work-card">
                            <h3>Learn more about who you are and where you want to go</h3>
                            <p>We ask the right questions to help you better understand why you do things the way you do.</p>
                        </li>
                        <li className="work-card">
                            <h3>Play and grow together with others on the same journey</h3>
                            <p>Ahead feels like a game. not like a chore. See yourself grow every day towards achieving your goals!</p>
                        </li>
                        <li className="work-card">
                            <h3>Power through, even when the going gets tough</h3>
                            <p>We help you spot and work around whatever stands in the way. be it bad habits, fears. etc.</p>
                        </li>
                        <li className="work-card">
                            <h3>Learn more about who you are and where you want to go</h3>
                            <p>We ask the right questions to help you better understand why you do things the way you do.</p>
                        </li>
                        <li className="work-card">
                            <h3>Play and grow together with others on the same journey</h3>
                            <p>Ahead feels like a game. not like a chore. See yourself grow every day towards achieving your goals!</p>
                        </li>
                        <li className="work-card">
                            <h3>Learn more about who you are and where you want to go</h3>
                            <p>We ask the right questions to help you better understand why you do things the way you do.</p>
                        </li>
                        <li className="work-card">
                            <h3>Power through, even when the going gets tough</h3>
                            <p>We help you spot and work around whatever stands in the way. be it bad habits, fears. etc.</p>
                        </li>
                        <li className="work-card">
                            <h3>Play and grow together with others on the same journey</h3>
                            <p>Ahead feels like a game. not like a chore. See yourself grow every day towards achieving your goals!</p>
                        </li>
                        <li className="work-card">
                            <h3>Power through, even when the going gets tough</h3>
                            <p>We help you spot and work around whatever stands in the way. be it bad habits, fears. etc.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WorkSection;
