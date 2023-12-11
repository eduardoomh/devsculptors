import Maintenance from '@/components/Maintenance/Maintenance'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export default function Home() {
  return (
    <main className={inter.className}>
      <Maintenance />
    </main>
  )
}
