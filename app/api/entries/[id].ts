import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs/promises";

const filePath = path.join(process.cwd(), "data", "db.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  if (typeof id !== "string") {
    return res.status(400).json({ error: "Invalid ID" });
  }

  try {
    // Read existing data
    const fileContent = await fs.readFile(filePath, "utf-8");
    const jsonData = JSON.parse(fileContent);

    if (req.method === "GET") {
      const entry = jsonData[id];
      if (!entry) {
        return res.status(404).json({ error: "Entry not found" });
      }
      return res.status(200).json(entry);
    }

    if (req.method === "POST") {
      // Validate and get data from req.body
      const body = req.body;

      if (!body.data || typeof body.data !== "object") {
        return res
          .status(400)
          .json({ error: "Missing or invalid 'data' field" });
      }

      // Add or update entry with this id
      jsonData[id] = body;

      // Write back to file
      await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2));

      return res
        .status(200)
        .json({ message: "Entry saved", entry: jsonData[id] });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
