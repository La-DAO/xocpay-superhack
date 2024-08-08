

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { JSX, SVGProps } from "react"
import Link from "next/link"

export default function RequestPaymentSearchComponent() {
  return (

    <div className="flex items-center justify-center my-4 md:my-16 lg:my-24 m-1">
      <Card className="w-screen max-w-lg p-4">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Solicitud XocPay</CardTitle>
        <CardDescription className="text-xl font-semibold">$420.69</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-center">Selecciona usuario a solicitar pago</p>
          <div className="relative">
            <Input type="search" placeholder="Buscar usuario" className="pl-10" />
            <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          </div>
        </div>
        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-white">
            <h3 className="font-semibold mb-2">Favoritos</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b">
                <Link href="/requestPayment" className="block">
                  Mam&aacute;
                </Link>
                <ArrowRightIcon className="h-5 w-5 text-muted-foreground" />
              </li>
              <li className="flex justify-between items-center border-b">
                <Link href="/requestPayment" className="block">
                  Hermano 1
                </Link>
                <ArrowRightIcon className="h-5 w-5 text-muted-foreground" />
              </li>
              <li className="flex justify-between items-center border-b">
                <Link href="/requestPayment" className="block">
                  Abuelita
                </Link>
                <ArrowRightIcon className="h-5 w-5 text-muted-foreground" />
              </li>
            </ul>
          </div>
          <div className="border rounded-lg p-4 bg-white">
            <h3 className="font-semibold mb-2">Guardados</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b">
                <Link href="/requestPayment" className="block">
                  Pap&aacute;
                </Link>
                <ArrowRightIcon className="h-5 w-5 text-muted-foreground" />
              </li>
              <li className="flex justify-between items-center border-b">
                <Link href="/requestPayment" className="block">
                  Amigo 1
                </Link>
                <ArrowRightIcon className="h-5 w-5 text-muted-foreground" />
              </li>
              <li className="flex justify-between items-center border-b">
                <Link href="/requestPayment" className="block">
                  Hermano 2
                </Link>
                <ArrowRightIcon className="h-5 w-5 text-muted-foreground" />
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

function ArrowRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}