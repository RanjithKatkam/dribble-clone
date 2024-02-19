import "./index.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DoesThis from "../DoesThis";
import MeetBox from "../MeetBox";
import SelfImprovment from "../SelfImprovment";
import OtherRatings from "../OtherRatings";
import TestSection from "../TestSection";
import WorkSection from "../WorkSection";
import Careers from "../Careers";
import Footer from "../Footer";
gsap.registerPlugin(ScrollTrigger);

function Body() {
    useGSAP(() => {
        gsap.from(".brand-name", {
            x: "-500",
            delay: 0.4,
            duration: 0.5,
            opacity: 0,
            stagger: 0.1,
        });
        gsap.to(".meet-star-img, .meet-star-img2, .leaf, .leaf2", {
            rotate: "360",
            duration: 1,
            repeat: 2,
            scrollTrigger: {
                trigger: ".meet-star-img",
                start: "top 80%",
                scroller: ".hero",
                scrub: 10,
            },
        });
        gsap.fromTo(
            ".self-ghost",
            {
                rotation: -90,
                duration: 3,
                x: "800px",
                opacity: 0,
            },
            {
                rotation: 0,
                x: "90px",
                duration: 2,
                opacity: 1,
                scrollTrigger: {
                    trigger: ".self-ghost",
                    scroller: ".hero",
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <div className="body-main-container">
            <div className="landing-page">
                <div className="font-section">
                    <p className="brand-name">Ahead App</p>
                    <h1 className="brand-name">Master your life</h1>
                    <h1 className="brand-name">by mastering</h1>
                    <h1 className="brand-name">emotions</h1>
                    <div className="palystore-section">
                        <div className="playstore-button">
                            <img src="https://th.bing.com/th/id/OIP.QukU7GnxTAM5UCY8FaN6oAAAAA?rs=1&pid=ImgDetMain" alt="apple" />
                            <div className="app-store">
                                <p>Download on the</p>
                                <p>APP STORE</p>
                            </div>
                        </div>
                        <div className="rating-section">
                            <div className="stars">
                                <img
                                    src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708280280/2792947_star_xmas_icon_ocq9zr.png"
                                    alt="rating"
                                />
                                <img
                                    src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708280280/2792947_star_xmas_icon_ocq9zr.png"
                                    alt="rating"
                                />
                                <img
                                    src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708280280/2792947_star_xmas_icon_ocq9zr.png"
                                    alt="rating"
                                />
                                <img
                                    src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708280280/2792947_star_xmas_icon_ocq9zr.png"
                                    alt="rating"
                                />
                                <img
                                    src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708280280/2792947_star_xmas_icon_ocq9zr.png"
                                    alt="rating"
                                />
                            </div>
                            <p>100+ App Store Reviews</p>
                        </div>
                    </div>
                </div>
                <div className="image-section"></div>
            </div>
            <div className="eq-beats-section">
                <h1>EQ beats IQ</h1>
                <div className="eq-div">
                    <p>
                        People with high emotional intelligence EQ are adept at understanding and managing their own emotions, leading to greater
                        self-awareness and resilience. Additionally, they excel in empathizing with others, fostering deeper connections and
                        resolving conflicts effectively.
                    </p>
                </div>
                <div className="eq-div">
                    <p>
                        They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a
                        year.Furthermore, individuals with high emotional intelligence demonstrate greater adaptability and creativity, enabling
                        them to navigate challenges with grace and innovation.
                    </p>
                </div>
            </div>
            <DoesThis />
            <div className="meet-box">
                <img
                    className="meet-star-img"
                    src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708336492/3d-fluency-flower-1_hop9xs.png"
                    alt="star"
                />
                <MeetBox />
            </div>
            <div className="self-improvment-section">
                <div className="self-improvment-heading-section">
                    <div>
                        <p>Wrong with self-improvement & how we're fixing it.</p>
                        <h1> Self-improvement. Ugh.</h1>
                    </div>
                    <img
                        src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708278905/halloween-ghost-7291015_1280_ccplpu.png"
                        alt="ghost"
                        className="self-ghost"
                    />
                </div>
                <SelfImprovment />
            </div>
            <div className="eq-beats-section-2">
                <h1>Be the best you with EQ</h1>
                <div className="eq-div-2">
                    <p>
                        Not having your own emotions under control might be holding you back.Additionally, not understanding those of others
                        stops you from being parent, friend you can be.
                    </p>
                </div>
                <div className="eq-div-2">
                    <p>
                        Additionally, not understanding those of others stops you from being parent, friend you can be.Not having your own
                        emotions under control might be holding you back.
                    </p>
                </div>
            </div>
            <div className="others-ratings-section">
                <OtherRatings />
            </div>
            <div className="test-section">
                <TestSection />
            </div>
            <div className="work-section">
                <WorkSection />
            </div>
            <div className="career-section">
                <Careers />
            </div>
            <div className="footer-section">
                <Footer />
            </div>
        </div>
    );
}

export default Body;
