import Link from 'next/link';
import Image from 'next/image';

function Header() {
    return (
        <header className="text-white bg-roxo p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Image
                        src="/imagens/logo.png"  
                        width={120}
                        height={120}
                        alt="Logo"
                    />
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">Sobre</Link></li>
                        <li><Link href="/categories">Categorias</Link></li>
                        <li><Link href="/contact">Contato</Link></li>
                    </ul>
                </nav>
                <div>
                    <input type="text" placeholder="Buscar" className="p-2 rounded" />
                </div>
            </div>
        </header>
    );
}

export default Header;
