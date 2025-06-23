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
  return NextResponse.json(data);
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

    return NextResponse.json({ success: true, id });
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
