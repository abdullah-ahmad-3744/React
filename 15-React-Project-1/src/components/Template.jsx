import './Template.css'

function Template () {
    return (
        // Template for the common elements of the Login and SignUp components
        <div className="template-container">
            {/* left Part of the template */}
            <div className="left-part">

                <div className="title">
                    <h1>Title</h1>
                </div>

                <div className="description">
                    <p>description 1</p>
                    <p>description 2</p>
                </div>

                <div className="sign-in-button">
                    <button>Sign In</button>
                </div>

                <p>OR</p>

                <div className="login-with-google">
                    <button> <img src={""} alt="" />Sign With Google</button>
                </div>

            </div>
            {/* Right part of the template */}
            <div className="right-part">
                <div className="filter"> <h1>Filter Image</h1></div>
                <div className="image"><img src={""} alt="" srcset="" />Template Image</div>
            </div>
        </div>
    )
}
export default Template