import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <ul>
      <Image src='/logo.png' alt="Logo" width="150" height='150'/>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/produtos">Produtos</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/cadastro">Cadastro</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;