export async function POST(req) {
  const { ids } = await req.json() 
  const listaProductos = await Promise.all(
    ids.map(async (id) => {
      const res = await fetch(
        `https://fakestoreapi.com/products${id}`
      )
      return res.json()
    })
  )

  return Response.json(listaProductos)
}