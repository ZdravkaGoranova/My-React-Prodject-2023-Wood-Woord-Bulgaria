import '../css/register-login.css'
import '../css/site.css'

export default function Login() {
    return (
        <section id="login-container">
            <div class="container">

                <img src="/img/23.jpg" alt="image" />

                <form method="POST" class="container-text">
                    <h2>Login</h2>
                    <p>Welcome, see the new masterpieces!</p>

                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" placeholder="ivan_00" name="username" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="*****" name="password" />

                    <button class="login-btn">Login</button>
                    <div class="card-no-account">
                        <p>Don't have an account? <a href="/register">Sign up</a>.</p>
                    </div>

                </form>
            </div>
        </section>
    )
}