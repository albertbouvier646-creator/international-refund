import Hero from '../components/Hero'
import Services from '../components/Services'
import Stats from '../components/Stats'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
export default function Page(){ return (<main className='min-h-screen flex flex-col'><Hero /><div className='max-w-6xl w-full mx-auto px-6 py-12'><Services /><Stats /><Contact /></div><Footer /></main>) }
