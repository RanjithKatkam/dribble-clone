import "./index.css";

function OtherRatings() {
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
