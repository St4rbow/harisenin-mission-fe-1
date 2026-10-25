import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Button from "../components/Button.jsx";
import CourseCard from "../components/CourseCard.jsx";
import { IMAGE_BASE, categories, courses } from "../data/courses.js";

function Home() {
  const [active, setActive] = useState("Semua Kelas");
  const filtered = active === "Semua Kelas" ? courses : courses.filter((course) => course.category === active);

  return (
    <>
      <Navbar showMenu />

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pt-7 md:pt-16">
          <div className="rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${IMAGE_BASE}/hero-belajar/1200/500)` }}>
            <div className="flex flex-col items-center gap-4 rounded-xl bg-ink/80 px-4 py-14 text-center text-surface md:px-24 md:py-24">
              <h1 className="text-2xl font-bold md:text-5xl">
                Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
              </h1>
              <p className="max-w-2xl text-sm md:text-base">
                Temukan ilmu baru yang menarik dan mendalami melalui koleksi video pembelajaran berkualitas tinggi.
                Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan
                pemahaman Anda.
              </p>
              <Button href="#kategori" className="mt-2 max-sm:px-3 max-sm:text-xs">
                Temukan Video Course untuk Dipelajari!
              </Button>
            </div>
          </div>
        </section>

        {/* Koleksi kelas */}
        <section id="kategori" className="mx-auto max-w-6xl px-5 py-10 md:py-16">
          <h2 className="text-2xl font-semibold md:text-3xl">Koleksi Video Pembelajaran Unggulan</h2>
          <p className="mt-2 text-muted">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>

          <div className="mt-6 flex gap-6 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                aria-pressed={active === category}
                className={`border-b-4 pb-2 whitespace-nowrap ${
                  active === category ? "border-accent font-semibold text-accent" : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="mx-auto max-w-6xl px-5 pb-16">
          <div className="rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${IMAGE_BASE}/newsletter-belajar/1200/400)` }}>
            <div className="flex flex-col items-center gap-3 rounded-xl bg-ink/80 px-5 py-14 text-center text-surface md:py-20">
              <p className="text-sm tracking-widest text-line uppercase">Newsletter</p>
              <h2 className="text-2xl font-semibold md:text-3xl">Mau Belajar Lebih Banyak?</h2>
              <p className="max-w-xl text-sm md:text-base">
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik
                hariesok.id
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.target.reset();
                }}
                className="mt-4 flex w-full max-w-lg flex-col gap-3 md:flex-row md:rounded-lg md:bg-surface md:p-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Masukkan Emailmu"
                  aria-label="Email"
                  className="rounded-lg bg-surface px-4 py-3 text-ink md:flex-1 focus-visible:outline-2 focus-visible:outline-focus"
                />
                <Button type="submit" variant="yellow">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
