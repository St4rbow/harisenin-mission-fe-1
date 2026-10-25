import { useNavigate } from "react-router";
import Navbar from "../components/Navbar.jsx";
import AuthCard from "../components/AuthCard.jsx";
import Input from "../components/Input.jsx";
import AuthButtons from "../components/AuthButtons.jsx";

function Register() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <>
      <Navbar />
      <main className="px-5 py-10 md:py-16">
        <AuthCard title="Pendaftaran Akun" subtitle="Yuk, daftarkan akunmu sekarang juga!">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input label="Nama Lengkap" id="name" />
            <Input label="E-Mail" id="email" type="email" />
            <Input label="No. Hp" id="phone" type="tel" prefix="+62" />
            <Input label="Kata Sandi" id="password" type="password" />
            <Input label="Konfirmasi Kata Sandi" id="confirmPassword" type="password" />
            <a href="#" className="self-end text-sm text-muted hover:text-ink">
              Lupa Password?
            </a>
            <AuthButtons mainText="Daftar" altText="Masuk" altTo="/login" googleText="Daftar dengan Google" />
          </form>
        </AuthCard>
      </main>
    </>
  );
}

export default Register;
