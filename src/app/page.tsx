import StarRating from "@/components/ui/StarRating";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MoreVertical } from "lucide-react";
import Image from "next/image";

export default function Home() {


  const carTable = [
    {
      image: <Image src="/assets/image1.jpg" alt="Imagem de um pequeno carro de cor preta" width={48.96} height={46} className="mr-2" />,
      car: <text className="text-sm font-normal">Mini Cooper 2020</text>,
      next_reservation: <text className="text-gray-500">11/07</text>,
      status: <span className="text-green-800 text-xs font-medium bg-green-100 rounded-md px-2.5 py-0.5">Available</span>,
      rating: <StarRating />,
      actions: <MoreVertical />,
    },
    {
      image: <Image src="/assets/image1.jpg" alt="Imagem de um pequeno carro de cor preta" width={48.96} height={46} className="mr-2" />,
      car: <text className="text-sm font-normal">Mini Cooper 2020</text>,
      next_reservation: <text className="text-gray-500">11/07</text>,
      status: <span className="text-green-800 text-xs font-medium bg-green-100 rounded-md px-2.5 py-0.5">Available</span>,
      rating: <StarRating />,
      actions: <MoreVertical />,
    },
    {
      image: <Image src="/assets/image1.jpg" alt="Imagem de um pequeno carro de cor preta" width={48.96} height={46} className="mr-2" />,
      car: <text className="text-sm font-normal">Mini Cooper 2020</text>,
      next_reservation: <text className="text-gray-500">11/07</text>,
      status: <span className="text-green-800 text-xs font-medium bg-green-100 rounded-md px-2.5 py-0.5">Available</span>,
      rating: <StarRating />,
      actions: <MoreVertical />,
    },
    {
      image: <Image src="/assets/image1.jpg" alt="Imagem de um pequeno carro de cor preta" width={48.96} height={46} className="mr-2" />,
      car: <text className="text-sm font-normal">Mini Cooper 2020</text>,
      next_reservation: <text className="text-gray-500">11/07</text>,
      status: <span className="text-green-800 text-xs font-medium bg-green-100 rounded-md px-2.5 py-0.5">Available</span>,
      rating: <StarRating />,
      actions: <MoreVertical />,
    },
    {
      image: <Image src="/assets/image1.jpg" alt="Imagem de um pequeno carro de cor preta" width={48.96} height={46} className="mr-2" />,
      car: <text className="text-sm font-normal">Mini Cooper 2020</text>,
      next_reservation: <text className="text-gray-500">11/07</text>,
      status: <span className="text-green-800 text-xs font-medium bg-green-100 rounded-md px-2.5 py-0.5">Available</span>,
      rating: <StarRating />,
      actions: <MoreVertical />,
    },
  ]
  return (
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
              <TableCell className="flex items-center">{data.image}{data.car}</TableCell>
              <TableCell>{data.next_reservation}</TableCell>
              <TableCell>{data.status}</TableCell>
              <TableCell>{data.rating}</TableCell>
              <TableCell className="flex justify-center">{data.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
