import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import React from "react";
import "./index.css";

function DoesThis() {
    let doesThisHeading = useRef(null);
    let doesThisImg = useRef(null);
    const cardsContainerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".does-this-heading", {
            opacity: 0,
            duration: 1,
            x: "-100px",
            scrollTrigger: {
                trigger: ".does-this-heading",
                start: "top 70%",
                end: "bottom 10%",
                // markers: true,
                scroller: ".hero",
            },
        });

        gsap.fromTo(
            ".ghost-img",
            {
                rotation: -90,
                duration: 2,
                opacity: 0,
            },
            {
                x: "-600px",
                rotation: 0,
                duration: 1,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".ghost-img",
                    start: "top 70%",
                    end: "bottom 10%",
                    // markers: true,
                    scroller: ".hero",
                },
            }
        );

        gsap.to("#rotate", {
            rotate: "-8%",
            scrollTrigger: {
                trigger: "#rotate",
                scroller: ".hero",
                start: "top 70%",
                end: "bottom 10%",
            },
        });
    }, []);

    return (
        <>
            <div className="does-this-section">
                <h1 ref={doesThisHeading} className="does-this-heading">
                    Does this sound familiar...
                </h1>
                <img
                    ref={doesThisImg}
                    className="ghost-img"
                    src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708274239/ghost_uzvgpz.png"
                    alt="does"
                />
            </div>
            <div className="cards-section" ref={cardsContainerRef}>
                <div className="cards-main-section">
                    <div className="card a">
                        <h1>😠</h1>
                        <h2>You argue with a colleague</h2>
                        <p className="card-p2">You get angry and defensive, instead Of staying open and working towards common ground.</p>
                    </div>
                    <div className="card b">
                        <h1>😯</h1>
                        <h2>You get a promotion at work</h2>
                        <p>
                            You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself &
                            your abilities..
                        </p>
                    </div>
                    <div id="rotate" className="card c">
                        <h1>🫤</h1>
                        <h2>You attend a class reunion</h2>
                        <p>
                            You compare yourself with others. when they'll realize you're an unqualified imposter, instead of trusting yourself &
                            your abilities..
                        </p>
                    </div>
                    <div className="card d">
                        <h1>😏</h1>
                        <h2>You argue with a colleague</h2>
                        <p>You get angry and defensive, instead Of staying open and working towards common ground.</p>
                    </div>
                    <div className="card a">
                        <h1>🤨</h1>
                        <h2>You argue with a colleague</h2>
                        <p>You get angry and defensive, instead Of staying open and working towards common ground.</p>
                    </div>
                    <div className="card b">
                        <h1>😠</h1>
                        <h2>You argue with a colleague</h2>
                        <p>You get angry and defensive, instead Of staying open and working towards common ground.</p>
                    </div>
                    <div className="card c">
                        <h1>😯</h1>
                        <h2>You get a promotion at work</h2>
                        <p>
                            You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself &
                            your abilities..
                        </p>
                    </div>
                    <div className="card d">
                        <h1>😠</h1>
                        <h2>You argue with a colleague</h2>
                        <p>You get angry and defensive, instead Of staying open and working towards common ground.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DoesThis;
