import Link from 'next/link';
import Image from 'next/image'
import Logo from 'public/images/logo.png'
import { FiUser, FiShoppingCart } from 'react-icons/fi'

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="Logo" width="50" height="128"/>
      <ul>
        <li>
          <Link href="/">Página Inicial</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/cadastro">Cadastro</Link>
        </li>
      </ul>
      <div className="navbar-right">
      <a href="/profile">
          <FiUser size={25} color="white" />
        </a>
      <a href="/cart">
          <FiShoppingCart size={25} color="white" />
        </a>
  </div>
    </nav>
  )
}