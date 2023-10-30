import React from 'react';
import styles from '@/styles/footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-column">
          <h2>Logo da Loja</h2>
          <img src="/path-to-your-logo.png" alt="Logo da Loja" />
        </div>
        <div className="footer-column">
          <h2>Slogan</h2>
          <p>Aqui vai o slogan da sua loja.</p>
        </div>
        <div className="footer-column">
          <h2>Informações da Loja</h2>
          <p>Endereço da loja: Rua da Loja, 123</p>
          <p>Telefone: (123) 456-7890</p>
          <p>Email: info@lojadeexemplo.com</p>
        </div>
      </div>

      <div className="footer-links">
        <ul>
          <li><a href="/">Página Inicial</a></li>
          <li><a href="/produtos">Produtos</a></li>
          <li><a href="/sobre">Sobre Nós</a></li>
          <li><a href="/contato">Contato</a></li>
          <li><a href="https://www.facebook.com/sua-loja" target="_blank">Facebook</a></li>
          <li><a href="https://www.instagram.com/sua-loja" target="_blank">Instagram</a></li>
          <li><a href="https://www.twitter.com/sua-loja" target="_blank">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;