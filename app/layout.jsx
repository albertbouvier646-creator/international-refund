import './globals.css'
import Providers from '../context/LanguageProvider'
export const metadata = { title: 'International Refund' }
export default function RootLayout({ children }){ return (<html lang='en'><body><Providers>{children}</Providers></body></html>) }
