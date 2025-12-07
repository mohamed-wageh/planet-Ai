import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-brand">
          PlantAI – كاشف الأمراض
        </Link>
        <ul className="nav-links">
          <li>
            <Link 
              href="/" 
              className={router.pathname === '/' ? 'active' : ''}
            >
              الرئيسية
            </Link>
          </li>
          <li>
            <Link 
              href="/upload" 
              className={router.pathname === '/upload' ? 'active' : ''}
            >
              رفع الصورة
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className={router.pathname === '/about' ? 'active' : ''}
            >
              حول المشروع
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

