import './globals.css';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import { CartProvider } from './components/context/CartContext'; //context para el carrito
import { NotificationProvider } from './components/context/NotificationContext';
import { AuthProvider } from './components/context/AuthContext';
export async function generateMetadata({ params, searchParams }, parent) {
  const title = params;
  return {
    title: title,
  };
}
// min-h-screen pego el footer abajo
export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
        <AuthProvider>
          <NotificationProvider>
            <CartProvider>
              <Header />
              <div className='container m-auto my-32 '>{children}</div>
              <Footer />
            </CartProvider>
          </NotificationProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
