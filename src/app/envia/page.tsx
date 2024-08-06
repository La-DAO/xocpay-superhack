import AuthButton from '@/components/buttons/authButton'
import PageWithNavbar from '@/components/layout/page'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Envia() {
  return (
    <PageWithNavbar>
      <div className="page gap-y-8 text-center">
        <h2>Enviar pago</h2>
        <Link href="/">
          <Button className={`mt-6 h-12 text-lg md:mt-8 lg:mt-8 xl:mt-12`}>
            Ir a Inicio
          </Button>
        </Link>
      </div>
    </PageWithNavbar>
  )
}
