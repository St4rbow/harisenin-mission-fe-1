import { useNavigate } from "react-router";
import Navbar from "../components/Navbar.jsx";
import AuthCard from "../components/AuthCard.jsx";
import Input from "../components/Input.jsx";
import AuthButtons from "../components/AuthButtons.jsx";

function Login() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <>
      <Navbar />
      <main className="px-5 py-10 md:py-16">
        <AuthCard title="Masuk ke Akun" subtitle="Yuk, lanjutin belajarmu di videobelajar.">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input label="E-Mail" id="email" type="email" />
            <Input label="Kata Sandi" id="password" type="password" />
            <a href="#" className="self-end text-sm text-muted hover:text-ink">
              Lupa Password?
            </a>
            <AuthButtons mainText="Masuk" altText="Daftar" altTo="/register" googleText="Masuk dengan Google" />
          </form>
        </AuthCard>
      </main>
    </>
  );
}

export default Login;
