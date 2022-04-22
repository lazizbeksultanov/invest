import Head from 'next/head'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import styles from '../styles/Page.module.scss'
import Menu from "./Menu";

const Page = ({ title, children }) => {
    const links = [
        { href: '/', label: 'Обзор' },
        { href: '/', label: 'Индексы' },
        { href: '/', label: 'Индексные фьючерсы' },
        { href: '/invest', label: 'Форекс' },
        { href: '/', label: 'Сырьевые товары' },
        { href: '/', label: 'Криптовалюты' },
        { href: '/stock', label: 'Акции' },
        { href: '/bond', label: 'Облигации' },
        { href: '/', label: 'ETF' },
        { href: '/', label: 'Фонды' },
    ]
  return (
    <div className="content">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
        <Menu links={links} />
      <main className={'container' + ' ' + styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Page
