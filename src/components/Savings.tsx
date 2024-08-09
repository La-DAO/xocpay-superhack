"use client";

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CartesianGrid, XAxis, Line, LineChart } from "recharts"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import { JSX, ClassAttributes, HTMLAttributes } from "react"

export default function SavingsComponent() {
  return (
    <div className="flex items-center justify-center my-4 md:my-16 lg:my-24 m-1">
      <Card className="w-screen max-w-lg p-4 items-center justify-center">


      <h1 className="text-3xl font-bold text-center my-8">Ahorro</h1>

      <Card className="w-full max-w-4xl p-4 bg-white">
        <div className="flex flex-col items-center space-y-4 ">
          <div className="text-xl font-semibold">Actual: $ 42,069.32</div>
          <LinechartChart className="w-full aspect-[4/3]" />
        </div>
      </Card>

      <Card className="w-full max-w-lg p-4 my-4 bg-[#fff7ef]">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">USD + MXN</span>
            <span className="font-semibold">4.1 % APY</span>
          </div>
          <div className="text-sm">Balance actual: $23,069.21 MXN</div>
          <Button className="self-end">Depositar</Button>
        </div>
      </Card>

      <Card className="w-full max-w-lg p-4 my-4 bg-[#fff7ef]">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">MXN</span>
            <span className="font-semibold">2.3 % APY</span>
          </div>
          <div className="text-sm">Balance actual: $23,069.21 MXN</div>
          <Button className="self-end">Depositar</Button>
        </div>
      </Card>

      <Card className="w-full max-w-lg p-4 my-4 bg-[#fff7ef]">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between">
            <span className="font-semibold">USD</span>
            <span className="font-semibold">1.9 % APY</span>
          </div>
          <div className="text-sm">Balance actual: $23,069.21 MXN</div>
          <Button className="self-end">Depositar</Button>
        </div>
      </Card>
      </Card>
    </div>
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
