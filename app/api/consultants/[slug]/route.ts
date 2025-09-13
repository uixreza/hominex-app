import { url_v1 } from "@/config/urls";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    if (!slug || slug === "undefined") {
      console.error("Invalid consultant slug received:", slug);
      return NextResponse.json(
        { success: false, message: "Consultant slug is required or invalid" },
        { status: 400 }
      );
    }

    const apiUrl = url_v1(`/consultants/${slug}/`);

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      console.error("JSON parse error:", err);
      console.error("Raw response causing parse error:", text);
      return NextResponse.json(
        {
          success: false,
          message: "External API returned invalid JSON",
          raw: text,
          error: err instanceof Error ? err.message : "Unknown error",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
