"use client";

import StarRating from "@/components/ui/StarRating";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {  Card,} from "@/components/ui/card"

import { Check, CheckCircle2, MoreVertical } from "lucide-react";
import Image from "next/image";
import { useState } from "react";


export default function Home() {

  const [mobile, setMobile] = useState(false)

  const carTable = [
    {
      car: <text className="text-sm font-normal">Mini Cooper 2020</text>,
      next_reservation: <text className="text-gray-500">11/07</text>,
      status: <span className="text-green-800 text-xs font-medium bg-green-100 rounded-md px-2.5 py-0.5">Available</span>,
      rating: <StarRating />,
      actions: <MoreVertical />,
    },
    {
      car: <text className="text-sm font-normal">Mini Cooper 2020</text>,
      next_reservation: <text className="text-gray-500">11/07</text>,
      status: <span className="text-green-800 text-xs font-medium bg-green-100 rounded-md px-2.5 py-0.5">Available</span>,
      rating: <StarRating />,
      actions: <MoreVertical />,
    },
    {
      car: <text className="text-sm font-normal">Mini Cooper 2020</text>,
      next_reservation: <text className="text-gray-500">11/07</text>,
      status: <span className="text-green-800 text-xs font-medium bg-green-100 rounded-md px-2.5 py-0.5">Available</span>,
      rating: <StarRating />,
      actions: <MoreVertical />,
    },
    {
      car: <text className="text-sm font-normal">Mini Cooper 2020</text>,
      next_reservation: <text className="text-gray-500">11/07</text>,
      status: <span className="text-green-800 text-xs font-medium bg-green-100 rounded-md px-2.5 py-0.5">Available</span>,
      rating: <StarRating />,
      actions: <MoreVertical />,
    },
    {
      car: <text className="text-sm font-normal">Mini Cooper 2020</text>,
      next_reservation: <text className="text-gray-500">11/07</text>,
      status: <span className="text-green-800 text-xs font-medium bg-green-100 rounded-md px-2.5 py-0.5">Available</span>,
      rating: <StarRating />,
      actions: <MoreVertical />,
    },
  ]
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 640) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    })
  }
  return (
    <>
      {mobile ?
        <div className="overflow-x-auto">
          <Table className="shadow-md">
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="text-left">CAR</TableHead>
                <TableHead className="text-left">NEXT RESERVATION</TableHead>
                <TableHead className="text-left">STATUS</TableHead>
                <TableHead className="text-left">RATING</TableHead>
                <TableHead className="w-[91px]">ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {carTable.map((data, index) => (
                <TableRow key={index}>
                  <TableCell className="flex items-center"><Image src="/assets/image1.jpg" alt="Imagem de um pequeno carro de cor preta" width={48.96} height={46} className="mr-2" />{data.car}</TableCell>
                  <TableCell>{data.next_reservation}</TableCell>
                  <TableCell>{data.status}</TableCell>
                  <TableCell>{data.rating}</TableCell>
                  <TableCell className="flex justify-center">{data.actions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        :
        <div>
          {carTable.map((data, index) => (
            <Card key={index}>
              <div className="flex p-2 gap-2 ">
              <Check className="absolute text-white bg-green-600 rounded-full size-5 mx-1 my-1" />
                <Image src="/assets/image1.jpg" alt="Imagem de um pequeno carro de cor preta" width={85} height={85} className="mr-2" />
                <div className="flex flex-col">
                  <div className="flex flex-row justify-start" >
                    <h1 className="text-base font-semibold text-gray-900 mb-1">
                      {data.car}
                    </h1>
                    <span className="absolute right-0 py-2">
                      {data.actions}
                    </span>
                  </div>
                  <div className="flex flex-col mb-1">
                    <p className="text-xs font-normal text-gray-500 mb-1">Next reservation: {data.next_reservation}</p>
                    <div className="flex justify-start">{data.rating}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      }
    </>
  );
}
