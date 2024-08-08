
import { Button } from "@/components/ui/button"
import { CartesianGrid, XAxis, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import Link from "next/link"
import { JSX, ClassAttributes, HTMLAttributes, SVGProps } from "react"

export default function DashBoardComponent() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center p-4 space-y-4 md:w-[400px] my-4 md:my-16 lg:my-24 border rounded-lg">

        
        <div className="text-center">
            <h1 className="text-4xl font-bold">$69,420.22</h1>
            <p className="text-lg">MXN</p>
        </div>        

        <div className="flex space-x-4">
          <Button variant="default">Enviar</Button>

          <Link href="/recibe">
            <Button variant="default">Recibir</Button>
          </Link>
          
        </div>

        <div className="w-full">
          <LinechartChart className="w-full aspect-[4/3]" />
        </div>

        <div className="w-full space-y-2">

          <div className="flex items-center justify-between p-4 border rounded-md">
            <div className="text-lg">Débito</div>
            <div className="flex items-center space-x-2">
              <div className="text-lg">$3,050.91</div>
              <ArrowRightIcon className="w-4 h-4" />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-md">
            <div className="text-lg">Ahorro</div>
            <div className="flex items-center space-x-2">
              <div className="text-lg">$42,069.32</div>
              <ArrowRightIcon className="w-4 h-4" />
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-md">
            <div className="text-lg">Inversión</div>
            <div className="flex items-center space-x-2">
              <div className="text-lg">$23,300.91</div>
              <ArrowRightIcon className="w-4 h-4" />
            </div>
          </div>

        </div>
        
      </div>
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


function LinechartChart(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}