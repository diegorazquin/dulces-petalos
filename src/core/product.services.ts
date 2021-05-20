export async function getProducts(): Promise<Array<any>> {
    const response = await fetch('https://dulces-petalos.herokuapp.com/api/product');
    return await response.json();
}   