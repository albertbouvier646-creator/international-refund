import './globals.css'
import LanguageProvider from '../context/LanguageProvider'
export const metadata = { title: 'International Refund' }
export default function RootLayout({ children }){
  return (
    <html lang="fr">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
