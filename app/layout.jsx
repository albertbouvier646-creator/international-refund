import './globals.css'
import LanguageProvider from '../context/LanguageProvider'
import Header from '../components/Header'

export const metadata = { title: 'International Refund' }

export default function RootLayout({ children }){
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
