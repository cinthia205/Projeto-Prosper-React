import Image from 'next/image'
import Logo from 'public/images/logoHeader.svg'

export default function Header() {

    return (
        <header>
             <div className="header-title">
             <Image src={Logo} alt="Logo" width="500" height="200"/>
            <h3>Os melhores cosméticos você encontra aqui!</h3>
             </div>
        </header>
    )
}