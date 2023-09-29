function SingUp() {
  return (
    <>
      <div className="singup-card">
        <button className="google-button">Continue With Google</button>
        <form action="#">
          <span>
            <input
              type="text"
              name="firstname"
              placeholder="First Name *"
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name *"
              required
            />
          </span>
          <input
          className="input"
              type="email"
              name="email"
              placeholder="Email *"
              required
            />
          <input
          className="input"
              type="password"
              name="password"
              placeholder="Password *"
              required
            />
        </form>
            <input className="date" type="text" placeholder="(GMT+05:30) india standard Time - Calcutta " readOnly/>
            <button className="singbutton">Signup as a user</button>
            <p className="para">By signing up you agree to our Terms & Conditions and Privacy Policy. and confirm that you are at least 18 years old.</p>
            <button className="singbutton">Signup as a creator</button>
            <p className="para">Already have an account? <a href="#">  Login</a></p>
      </div>
    </>
  );
}
export default SingUp;
