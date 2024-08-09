'use client'

import Image from 'next/image'
import Link from 'next/link'
import MobileMenu from './mobileMenu'
import { usePathname } from 'next/navigation'
import AuthButton from '@/components/buttons/authButton'
import { useConnectedWallets } from "thirdweb/react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export type MenuItemType = {
  displayText: string
  href: string
  isMobileOnly: boolean
}

const MENU_ITEMS: MenuItemType[] = [
  { displayText: 'Inicio', href: '/', isMobileOnly: true },
  { displayText: 'Envía', href: '/envia', isMobileOnly: false },
  { displayText: 'Recibe', href: '/recibe', isMobileOnly: false },
  { displayText: 'Ahorra', href: '/ahorra', isMobileOnly: false },
]

export default function Navbar() {
  const pathname = usePathname()
  const wallets = useConnectedWallets();

  return (
    <header className="sticky top-0 h-22 w-full bg-secondary">
      <div className="mx-auto flex h-full w-full max-w-3xl items-center justify-between p-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-5 lg:px-8">
        <div>
          <Link className="flex w-16 items-center" href="/">
            <Image
              src="/images/logos/la-cartera-logo.png"
              alt="Una vaina de cacao que lleva muchos granos"
              width={512}
              height={512}
              className="h-10 w-10 transition duration-300 ease-in-out hover:scale-90"
            />
            <span className="sr-only">XocPay</span>
          </Link>
        </div>
        <div className="z-10 col-span-3 flex items-center justify-center">
          <nav className="hidden gap-6 lg:flex">
          { wallets.length > 0 && (
            MENU_ITEMS.filter((menuItem) => !menuItem.isMobileOnly).map(
              (menuItem, index) => (
                <Link
                  key={`${menuItem.displayText}-menuItem-${index}`}
                  className={`inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-secondary-foreground transition-colors hover:text-primary focus:text-primary focus:outline-none ${
                    pathname === menuItem.href &&
                    'pointer-events-none underline decoration-primary decoration-[1.5px] underline-offset-[6px] hover:!text-foreground'
                  }`}
                  href={menuItem.href}
                >
                  {menuItem.displayText}
                </Link>
              ),
            )
          )}
          </nav>
        </div>

        <div className="hidden lg:flex lg:justify-end w-[230px]">

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full text-white mx-2 mt-3">
                <BellIcon className="h-5 w-8" />
                <span className="sr-only">Open notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <div className="text-sm font-medium">New message from John</div>
                    <div className="text-xs text-muted-foreground">2 hours ago</div>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <div className="text-sm font-medium">Your order is shipped</div>
                    <div className="text-xs text-muted-foreground">3 hours ago</div>
                  </div>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/notifications" className="text-sm font-medium" prefetch={false}>
                  View all notifications
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <AuthButton />
        </div>
        { wallets.length > 0 && (
        <MobileMenu menuItems={MENU_ITEMS} pathname={pathname} />
        )}
      </div>
    </header>
  )
}

function BellIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}
