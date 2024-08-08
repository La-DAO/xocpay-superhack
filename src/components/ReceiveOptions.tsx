import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

export default function ReceiveOptionsComponent() {
  return (
    <div className="flex items-center justify-center my-4 md:my-16 lg:my-24 m-1">
      <Card className="w-screen max-w-lg p-4">
        <div className="flex flex-col items-center space-y-6 my-12">
          <h1 className="text-3xl font-bold">Recibir</h1>
          <h2 className="text-xl pb-8">Selecciona una opción:</h2>
          <div className="flex flex-col w-full space-y-4">
            <Button variant="outline" className="w-full text-lg py-10">
              Escanear código QR / NFC
            </Button>
            <Button variant="outline" className="w-full text-lg py-10">
              Enviar solicitud a usuario XocPay
            </Button>
            <Button variant="outline" className="w-full text-lg py-10">
              Crear liga de pago
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}