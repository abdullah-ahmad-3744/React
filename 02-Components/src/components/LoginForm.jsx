import "./LoginForm.css"
function SignUpForm () {
    return (
        <>
        <div class="signup-container">
        <h2>Create an Account</h2>
        <form id="signupForm" action="#" method="POST">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>
        </>
    )
}
export default SignUpForm