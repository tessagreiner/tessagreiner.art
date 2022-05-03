export async function get() {
  const response = await fetch('http://localhost:3000/artwork/artwork.json');
  const artwork = await response.json();

  return {
    body: {
      artwork
    }
  }
}
