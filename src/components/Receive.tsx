
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ReceiveComponent() {
  return (
    <div className="flex items-center justify-center my-4 md:my-16 lg:my-24 m-1">
      <Card className="w-screen max-w-lg p-4">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Recibir</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cantidad">Cantidad</Label>
            <Input id="cantidad" placeholder="$420.69" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="moneda">Moneda</Label>
            <Select>
              <SelectTrigger id="moneda" aria-label="Moneda">
                <SelectValue placeholder="MXN" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mxn">MXN</SelectItem>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="concepto">Concepto</Label>
            <Input id="concepto" placeholder="Cena restaurante" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cuenta">Cuenta a recibir</Label>
            <Select>
              <SelectTrigger id="cuenta" aria-label="Cuenta">
                <SelectValue placeholder="Bancaria o Ahorro" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bancaria">Bancaria</SelectItem>
                <SelectItem value="ahorro">Ahorro</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/receiveOptions">
          <Button className="bg-orange-500 text-white">Siguiente</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}