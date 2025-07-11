// PATCH: Mark entry as done
/* eslint-disable */
export async function PATCH(request: Request) {
  try {
    const { id } = await request.json();
    if (!id) {
      return new NextResponse(JSON.stringify({ error: "Missing id" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS,PATCH",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }
    const data = readData();
    if (!data[id]) {
      return new NextResponse(JSON.stringify({ error: "Entry not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,POST,OPTIONS,PATCH",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }
    data[id].done = true;
    writeData(data);
    return new NextResponse(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS,PATCH",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS,PATCH",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }
}
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "db.json");

// Helper to read JSON file
function readData() {
  try {
    const jsonData = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(jsonData);
  } catch (error) {
    return {};
  }
}

// Helper to write JSON file
function writeData(data: object) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

export async function GET() {
  const data = readData();
  return new NextResponse(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Generate a unique ID (timestamp-based)
    const id = Date.now().toString();

    // Read existing data
    const data = readData();

    // Add new entry
    data[id] = body;

    // Write updated data back
    writeData(data);

    return new NextResponse(JSON.stringify({ success: true, id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS,PATCH",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
