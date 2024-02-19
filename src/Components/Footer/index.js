import "./index.css";

function Footer() {
    return (
        <div className="footer">
            <img className="logo" alt="i" src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708274245/logo_yiu97k.png" />
            <h1 className="footer-heading">ahead</h1>
            <div className="location-mail-div">
                <div className="details-loc">
                    <div className="loc-circle-div">
                        <img
                            alt="i"
                            src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708369313/1564524_adress_gps_location_pin_position_icon_ra9gzp.png"
                        />
                    </div>
                    <p>Kukatpally, Hyderabad, 500091</p>
                </div>
                <div className="details-loc">
                    <div className="loc-circle-div">
                        <img
                            alt="i"
                            src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708369313/8665305_envelope_email_icon_nllty2.png"
                        />
                    </div>
                    <p>ranjithkatkam68@gmail.com</p>
                </div>
            </div>
            <div className="playstore-button-footer">
                <img src="https://th.bing.com/th/id/OIP.QukU7GnxTAM5UCY8FaN6oAAAAA?rs=1&pid=ImgDetMain" alt="apple" />
                <div className="app-store">
                    <p>Download on the</p>
                    <p>APP STORE</p>
                </div>
            </div>
            <p className="copy-right">© 2024 Ahead app. All right reserved</p>
        </div>
    );
}

export default Footer;
