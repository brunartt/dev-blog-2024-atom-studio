// src/app/layout.tsx
import './styles/globals.css';
import Header from './components/NavBar';
import Footer from './components/Footer';
import 'tailwindcss/tailwind.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
