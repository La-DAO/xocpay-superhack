import AuthButton from '@/components/buttons/authButton'

export default function LandingComponent() {
  return (
    <div className="page max-w-2/3 max-w-xl gap-y-12 px-4 py-24 text-center lg:py-32">
    <h1>
      Recibir dólares nunca fue tan fácil
      <br />
    </h1>
    <h3>
      Recibe, retira y ahorra en pesos o dólares con{' '}
      <br className="md:hidden" />
      <span className="text-5xl font-bold text-primary">XocPay</span>
    </h3>
      <AuthButton size="lg" />

  </div>
  )
}