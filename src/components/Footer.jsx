import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "./Logo.jsx";

const menus = [
  { title: "Kategori", links: ["Digital & Teknologi", "Pemasaran", "Manajemen Bisnis", "Pengembangan Diri", "Desain"] },
  { title: "Perusahaan", links: ["Tentang Kami", "FAQ", "Kebijakan Privasi", "Ketentuan Layanan", "Bantuan"] },
  { title: "Komunitas", links: ["Tips Sukses", "Blog"] },
];

const socials = [
  { name: "LinkedIn", icon: <FaLinkedinIn /> },
  { name: "Facebook", icon: <FaFacebookF /> },
  { name: "Instagram", icon: <FaInstagram /> },
  { name: "Twitter", icon: <FaTwitter /> },
];

function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="flex max-w-sm flex-col gap-3">
            <Logo />
            <p className="font-semibold">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
            <p className="text-muted">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p className="text-muted">+62-877-7123-1234</p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {menus.map((menu) => (
              <div key={menu.title}>
                <h3 className="font-semibold">{menu.title}</h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {menu.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted hover:text-ink">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse gap-4 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-muted">@2023 Gerobak Sayur All Rights Reserved.</p>
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted hover:text-ink"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
