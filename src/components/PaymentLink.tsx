

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"
import Link from "next/link"

export default function PaymentLinkComponent() {
  return (
    <div className="flex items-center justify-center my-4 md:my-16 lg:my-24 m-1">
    <Card className="w-screen max-w-lg p-8">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Liga de pago creada</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center text-3xl font-bold">$420.69 MNX</div>
          <div className="space-y-2">
            <Label htmlFor="liga">Liga</Label>
            <div className="flex items-center space-x-2">
              <Input id="liga" value="xocpay.com/ab23-23zx" readOnly />
              <Button variant="outline" size="sm">
                <CopyIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cantidad">Cantidad</Label>
            <Input id="cantidad" value="$420.69" readOnly />
          </div>
          <div className="space-y-2">
            <Label htmlFor="concepto">Concepto</Label>
            <Input id="concepto" value="Cena restaurante" readOnly />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
            <Link href="/">
                <Button>Finalizar</Button>
            </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

function CopyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}