import AuthButton from '@/components/buttons/authButton'
import PageWithNavbar from '@/components/layout/page'

export default function Home() {
  return (
    <PageWithNavbar>
      <div className="page gap-y-8 text-center">
        <h1>
          My first <br />
          <span className="font-bold text-primary">onchain app</span>
        </h1>
        <AuthButton size="lg" />
      </div>
    </PageWithNavbar>
  )
}
