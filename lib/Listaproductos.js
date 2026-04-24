export async function fetchProductos(idProductos) {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/1${idProductos}`,
    );
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error en la petición: ", error);
  }
}
