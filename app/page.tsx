import Link from "next/link";
import { FaClipboardList, FaInstagram, FaPhoneAlt } from "react-icons/fa"

export default function Home() {
  const noWA = "6287816251817";
  const message = `Halo admin UKM Taekwondo Gunadarma, saya ingin bertanya tentang pendaftaran anggota baru.
Nama:
NPM:
Fakultas/Jurusan:
Kelas:`;

  const waLink = `https://wa.me/${noWA}?text=${encodeURIComponent(message)}`;
  return (
    <>
    <div className="page-wrapper">
        <div className="card-box">
          <div className="image">
            <img src="/logo.jpeg" alt="logoUkm" width={120} height={120} className="avatar"></img>
          </div>
          <div className="tittle">
            <h2>UKM Taekwondo</h2>
            <h3>Universitas Gunadarma</h3>
          </div>
          <div className="nav-bar">

              <Link href="https://forms.gle/kEmxXphycz6mrsRY6" className="gls-btn" target="_blank" rel="noopener noreferrer">
                <FaClipboardList className="btn-icon"/>
                <span>Registrasi</span>
              </Link>


              <Link href="https://www.instagram.com/taekwondo_ug/" className="gls-btn" target="_blank" rel="noopener noreferrer">
                < FaInstagram className="btn-icon" />
                <span>Instagram</span>
              </Link>


              <Link href={waLink} className="gls-btn" target="_blank" rel="noopener noreferrer">
                <FaPhoneAlt className="btn-icon" />
                <span>Contact</span>
              </Link>

          </div>
          <footer className="footer">
            © {new Date().getFullYear()} UKM Taekwondo Universitas Gunadarma. All Rights reserved.
          </footer>
        </div>
      </div>
    </>
  );
}
