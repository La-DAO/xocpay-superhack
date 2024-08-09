"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function NotificationsComponent() {
    return (
        <div className="flex items-center justify-center my-4 md:my-16 lg:my-24 m-1">
            <Card className="w-screen max-w-2xl p-8">
                <CardHeader>
                    <CardTitle className="text-center text-2xl font-bold">Notificaciones</CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="recibidos">
                        <TabsList className="flex justify-center space-x-4">
                            <TabsTrigger value="recibidos">Pagos recibidos</TabsTrigger>
                            <TabsTrigger value="enviados">Enviados</TabsTrigger>
                            <TabsTrigger value="otros">Otros</TabsTrigger>
                        </TabsList>
                        <TabsContent value="recibidos">
                            <Table className="mt-4 bg-white">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Emisor</TableHead>
                                        <TableHead>Cantidad</TableHead>
                                        <TableHead>Estatus</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>@usuario1</TableCell>
                                        <TableCell>$420.69 USD</TableCell>
                                        <TableCell>
                                            <Button variant="outline" onClick={() => (window.location.href = "/new-page")}>
                                                Pendiente
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>@usuario2</TableCell>
                                        <TableCell>$223 USD</TableCell>
                                        <TableCell>
                                            <Button variant="outline" onClick={() => (window.location.href = "/new-page")}>
                                                Débito
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>@usuario3</TableCell>
                                        <TableCell>$169 USD</TableCell>
                                        <TableCell>
                                            <Button variant="outline" onClick={() => (window.location.href = "/new-page")}>
                                                Ahorro
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>@usuario1</TableCell>
                                        <TableCell>$50 USD</TableCell>
                                        <TableCell>
                                            <Button variant="outline" onClick={() => (window.location.href = "/new-page")}>
                                                Pendiente
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>@usuario2</TableCell>
                                        <TableCell>$1000 USD</TableCell>
                                        <TableCell>
                                            <Button variant="outline" onClick={() => (window.location.href = "/new-page")}>
                                                Bancaria
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>@usuario3</TableCell>
                                        <TableCell>$20 USD</TableCell>
                                        <TableCell>
                                            <Button variant="outline" onClick={() => (window.location.href = "/new-page")}>
                                                Inversión
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>@usuario1</TableCell>
                                        <TableCell>$33 USD</TableCell>
                                        <TableCell>
                                            <Button variant="outline" onClick={() => (window.location.href = "/new-page")}>
                                                Pendiente
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>@usuario2</TableCell>
                                        <TableCell>$10 USD</TableCell>
                                        <TableCell>
                                            <Button variant="outline" onClick={() => (window.location.href = "/new-page")}>
                                                Inversión
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>@usuario3</TableCell>
                                        <TableCell>$25 USD</TableCell>
                                        <TableCell>
                                            <Button variant="outline" onClick={() => (window.location.href = "/new-page")}>
                                                Inversión
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TabsContent>
                        <TabsContent value="enviados" />
                        <TabsContent value="otros" />
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    )
}