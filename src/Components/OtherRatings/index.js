import { useGSAP } from "@gsap/react";
import "./index.css";
import gsap from "gsap";

function OtherRatings() {
    const tl = gsap.timeline();
    useGSAP(() => {
        tl.from(".sun", {
            opacity: 0,
            scale: 0,
            duration: 1,
            delay: 0,
            scrollTrigger: {
                trigger: ".sun",
                scroller: ".hero",
                start: "top 75%",
            },
        });
        tl.from(".p1, .p2, .p3", {
            duration: 1,
            opacity: 0,
            y: "120",
            scrollTrigger: {
                trigger: ".sun",
                scroller: ".hero",
                start: "top 75%",
            },
        });
        gsap.from(".c1, .you3", {
            x: "-300px",
            y: "-45px",
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".sun",
                scroller: ".hero",
                start: "top 75%",
            },
        });
        gsap.from(".c2, .you4", {
            x: "100px",
            y: "245px",
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".sun",
                scroller: ".hero",
                start: "top 75%",
            },
        });
        gsap.from(".c3, .you2", {
            x: "-200px",
            y: "145px",
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".sun",
                scroller: ".hero",
                start: "top 75%",
            },
        });
        gsap.from(".c4, .you1", {
            x: "200px",
            y: "65px",
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".sun",
                scroller: ".hero",
                start: "top 75%",
            },
        });
    }, []);

    return (
        <div className="other-ratings-div">
            <div className="other-ratings-heading-section">
                <p>Let your friends, family, and co-workers (anonymously) rate your social skills. </p>
                <h1>Ever wondered what others think of you?</h1>
            </div>
            <div className="timeline-section">
                <div className="sun">1</div>
                <p>--------------------- ------------------------------</p>
                <div className="sun">2</div>
                <p>---------------------------------------------------</p>
                <div className="sun">3</div>
            </div>
            <div className="timeline-section-headings">
                <p className="p1">Answer questions on your social skills</p>
                <p className="p2">Let others anonymously answer the same questions about you</p>
                <p className="p3">Find out where you and others see things the same way - and where not!</p>
            </div>
            <div className="ratings-view-section">
                <div className="ratings-view-div">
                    <div className="circle c1"></div>
                    <p>———————————</p>
                    <div className="circle c2"></div>
                    <p>———————————</p>
                    <div className="circle c3"></div>
                    <p>———————————</p>
                    <div className="circle c4"></div>
                </div>
                <div className="you1">You</div>
                <div className="you2">Anonymonos 1</div>
                <div className="you3">Anonymonos 2</div>
                <div className="you4">Anonymonos 3</div>
            </div>
        </div>
    );
}

export default OtherRatings;
