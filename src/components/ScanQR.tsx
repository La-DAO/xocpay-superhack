"use client";

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { JSX, SVGProps } from "react"
import { useActiveAccount } from "thirdweb/react";
import QRCode from "qrcode.react";

export default function Component() {
    const account = useActiveAccount();

    return (
        <div className="flex items-center justify-center my-4 md:my-16 lg:my-24 m-1">
            <Card className="w-screen max-w-lg p-8">
                <div className="text-center my-8">
                    <h2 className="text-2xl font-bold mb-2">Recibir MNX</h2>
                    <p className="text-xl">$420.69</p>
                </div>
                <div className="flex justify-center">
                    <QRCode
                        value={account?.address || ""}
                        size={200}
                        level={"H"}
                        includeMargin={true}
                    />
                </div>
                <div className="text-center my-4">
                    <p className="text-lg font-medium">@cosmefulanito</p>
                </div>
                <div className="flex items-center space-x-2 my-4">
                    <Input type="text" value={account?.address} readOnly className="flex-1" />
                    <Button variant="outline" size="icon">
                        <CopyIcon className="w-4 h-4" />
                    </Button>
                </div>
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