import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
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