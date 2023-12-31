import { NextResponse } from "next/server";

// pages/api/news.js
const apiKey = "916f66436b7a40628cff34a468490a02";

export const GET = async (res) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`
    );
    const data = await response.json();
    return NextResponse.json({ articles: data.articles }, { status: 200 });
    // res.status(200).json({ articles: data.articles });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
    // res.status(500).json({ error: "Internal Server Error" });
  }
};
