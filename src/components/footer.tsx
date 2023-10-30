import React from 'react';
import styles from '@/styles/footer.module.css';
import logo from '@/images/logo.png'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-column">
        
        </div>
        <div className="footer-column">
          <p>Os melhores cosméticos você encontra aqui!</p>
        </div>
        <div className="footer-column">
          <h2>Informações da Loja</h2>
          <p>Endereço da loja: São Paulo, 123</p>
          <p>Telefone: (123) 456-7890</p>
          <p>Email: leparfums@loja.com</p>
        </div>
      </div>

      <div className="footer-links">
        <ul>
          <li><a href="/">Página Inicial</a></li>
          <li><a href="/produtos">Produtos</a></li>
          <li><a href="/sobre">Sobre Nós</a></li>
          <li><a href="/contato">Contato</a></li>
          <li><a href="https://www.facebook.com/Le-Parfums" target="_blank">Facebook</a></li>
          <li><a href="https://www.instagram.com/Le-Parfums" target="_blank">Instagram</a></li>
          <li><a href="https://www.twitter.com/Le-Parfums" target="_blank">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;