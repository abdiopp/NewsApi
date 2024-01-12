import { NextResponse } from "next/server";

export const GET = async (req) => {
  const url = new URL(req.url);
  const searchParams = url.search;
  const searchWithoutQuestionMark = searchParams.toString().replace("?", "");

  try {
    const response = await fetch(
      `https://newsapi.org/v2/${searchWithoutQuestionMark}`
    );
    const data = await response.json();
    return NextResponse.json({ articles: data.articles }, { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
