
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link";

export default function PaymentReceivedComponent() {
  return (
    <div className="flex items-center justify-center my-4 md:my-16 lg:my-24 m-1">
      <Card className="w-screen max-w-lg px-4 py-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Pago Recibido</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="items-center justify-center">
                <div className="text-4xl font-bold mb-6 text-center">$223.00</div>
                <div className="space-y-4">
                    <Link href="/savings">
                        <div className="p-6 border rounded-lg items-center text-center bg-[#fff7ef]">
                            <div className="text-lg font-semibold">Cuenta de Ahorro</div>
                            <div className="text-sm">2.3 % APY*</div>
                        </div>
                    </Link>

                    <div className="p-6 border rounded-lg items-center text-center bg-[#fff7ef]">
                        <div className="text-lg font-semibold">Cuenta de Inversión</div>
                        <div className="text-sm">4.5 % - 15 % APY*</div>
                    </div>

                    <div className="p-6  border rounded-lg items-center text-center bg-[#fff7ef]">
                        <div className="text-lg font-semibold">Cuenta Bancaria</div>
                    </div>
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}