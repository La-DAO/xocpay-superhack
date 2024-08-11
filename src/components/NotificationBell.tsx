import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from 'next/link'

export default function NotificationBellComponent() {
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full text-white mx-2 mt-2">
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
                <div className="text-sm font-medium">Your receive $600 from @mel</div>
                <div className="text-xs text-muted-foreground">2 hours ago</div>
              </div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="grid gap-2">
              <div className="grid gap-1">
                <div className="text-sm font-medium">Your receive $400 from @Tomas</div>
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

  
