import "./index.css";

const Navbar = () => {
    return (
        <div className="navbar-main-container">
            <img src="https://res.cloudinary.com/dwgg5pyqk/image/upload/v1708274245/logo_yiu97k.png" alt="logo" />
            <div className="nav-list">
                <p>Emotions</p>
                <p>Manifesto</p>
                <p>Self-awareness</p>
                <p>Work With Us</p>
            </div>
            <button>Download App</button>
        </div>
    );
};

export default Navbar;
