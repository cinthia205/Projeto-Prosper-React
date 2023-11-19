import Link from 'next/link';
import Image from 'next/image'
import Logo from 'public/images/logoNav.svg'
import { FiUser, FiShoppingCart } from 'react-icons/fi'
import CartQuantity from './Cart/CartQuantity';
import styles from '@/styles/CartQuantity.module.css'

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="Logo" width="200" height="128"/>
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
      <div className="icons-navbar profile-icon">
      <a href="/profile">
          <FiUser size={25} color="white" />
        </a>
        </div>
        <div className="icons-navbar cart-icon">
      <a href="/cart">
          <FiShoppingCart size={25} color="white" />
        </a>
        </div>
  </div>
  <div className={styles.cartQuantity}>
        <CartQuantity />
        </div>
    </nav>
  )
}