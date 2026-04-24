"use client"
import CarritoCompra from "@/components/CarritoCompra"
import { useState, useEffect } from "react"
export default function Home() {
  const [productos, setProductos] = useState([])
  useEffect(() => {
    async function llamarApi() {
      try {
        const respuesta = await fetch("https://fakestoreapi.com/products")
        const data = await respuesta.json()
        console.log(data)
        setProductos(data.results)
      } catch (error) {
        console.error(error)
      }
    }

    llamarApi()
  }, [])
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>Lorem ipsum dolor sit amet.</h1>
      <CarritoCompra productos={productos} />
    </div>
  );
}
