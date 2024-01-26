import './globals.css';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

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
        <Header />
        <div className='container lg:m-44 '>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
