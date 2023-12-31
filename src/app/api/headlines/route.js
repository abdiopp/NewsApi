// pages/api/news.js
const apiKey = "916f66436b7a40628cff34a468490a02";

export default async function handler(req, res) {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`
    );
    const data = await response.json();

    res.status(200).json({ articles: data.articles });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
