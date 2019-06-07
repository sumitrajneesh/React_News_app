// Change YOUR_API_KEY_HERE to your apiKey
const url =
  "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
