import React from 'react';
import Image from 'next/image'
import Logo from 'public/images/logo.png'

export default function Footer() {
  return (
    <>
    <footer>
      <div className="footer-columns">
        <div className="footer-column">
        <Image src={Logo} alt="Logo" width="100" height="100"/>
        <p style={{textAlign: 'center'}}>Os melhores cosméticos você encontra aqui!</p>
        </div>
        <div className="footer-column">
        <ul className='footer-links'>
          <li className='footer-links'><a href="/">Página Inicial</a></li>
          <li className='footer-links'><a href="/sobre">Sobre Nós</a></li>
          <li className='footer-links'><a href="/contato">Contato</a></li>
          <li className='footer-links'><a href="https://www.facebook.com/Le-Parfums" target="_blank">Facebook</a></li>
          <li className='footer-links'><a href="https://www.instagram.com/Le-Parfums" target="_blank">Instagram</a></li>
          <li className='footer-links'><a href="https://www.twitter.com/Le-Parfums" target="_blank">Twitter</a></li>
        </ul>
        </div>
        <div className="footer-column">
          <h2>Informações da Loja</h2>
          <p>Endereço da loja: São Paulo, 123</p>
          <p>Telefone: (123) 456-7890</p>
          <p>Email: leparfums@loja.com</p>
        </div>
      </div>
    </footer>
    </>
  )
}