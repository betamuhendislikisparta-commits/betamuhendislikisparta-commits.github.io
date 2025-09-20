import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
          Ana Sayfa
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Hizmetlerimiz
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Tüm Hizmetler
              </Link>
            </li>
            <li>
              <Link href="/service/isi-pompasi" onClick={() => setMobileToggle(false)}>
                Isı Pompası Kurulumu
              </Link>
            </li>
            <li>
              <Link href="/service/dogalgaz-kombi" onClick={() => setMobileToggle(false)}>
                Doğalgaz Kombi Montajı
              </Link>
            </li>
            <li>
              <Link href="/service/petek-tesisat" onClick={() => setMobileToggle(false)}>
                Petek ve Tesisat Sistemleri
              </Link>
            </li>
            <li>
              <Link href="/service/yangin-tesisati" onClick={() => setMobileToggle(false)}>
                Yangın Tesisatı
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          İletişim
        </Link>
      </li>
    </ul>
  );
}
