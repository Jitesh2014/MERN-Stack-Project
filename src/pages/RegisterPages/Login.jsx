
import Template from "./Template"

function Login() {
  return (
    <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={"/media/image/coin.png"}
      formType="login"
    />
  )
}

export default Login
