import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./index.css";

function MeetBox() {
    useGSAP(() => {
        gsap.from(".built, .meet", {
            x: "-200px",
            duration: 1,
            opacity: 0,
            scrollTrigger: {
                trigger: ".buitl, .meet",
                scroller: ".hero",
                start: "top 80%",
            },
        });
    }, []);

    return (
        <div className="meet-box-div">
            <div className="meet-div-1">
                <p className="built">Built out of frustration</p>
                <h1 className="meet">Meet the ahead app</h1>
                <div className="meet-inner-div">
                    <img
                        className="meet-ghost"
                        src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708274239/ghost_uzvgpz.png"
                        alt="ghost"
                    />
                </div>
                <img
                    className="leaf2"
                    alt="leaf"
                    src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708337127/macaroni-leaf-8_ounw9b.png"
                />
                <img
                    className="meet-star-img2"
                    src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708336492/3d-fluency-flower-1_hop9xs.png"
                    alt="star"
                />
            </div>
            <div className="meet-div-2">
                <img
                    className="leaf"
                    alt="leaf"
                    src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708337127/macaroni-leaf-8_ounw9b.png"
                />
                <p className="para1">
                    A personalized pocket coach that provides bite- sized, science-driven tools to boost emotional intelligence.
                </p>
                <p className="para2">Think of it as a pocket cheerleader towards a better, more fulfilling.</p>
            </div>
        </div>
    );
}

export default MeetBox;
