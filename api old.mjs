import express from "express";
import cors from "cors";

// wrap my api in a function so its safer to run it in prod.
const app = express();
const port = 8001;

app.use(cors());

app.use(express.json());

const getCurrDate = () => {
  // get current date in format string "YYYY-MM-DD"
  let dateObj = new Date();

  let year = String(dateObj.getUTCFullYear());

  let month = String(dateObj.getUTCMonth() + 1); // get month 1-12
  month = Number(month) < 10 ? "0" + month : month;

  let day = String(dateObj.getUTCDate());
  day = Number(day) < 10 ? "0" + day : day;

  return `${year}-${month}-${day}`;
};

app.get("/api/thesunrightnow", async (req, res) => {
  // retrieve new imgfilenames from the NASA server.
  // get date "2025-12-24" and make "2025/12/24"
  let date = getCurrDate();
  date = date.replaceAll("-", "/");

  const baseUrl = `https://sdo.gsfc.nasa.gov/assets/img/browse/${date}/`;
  const res2 = await fetch(baseUrl);
  const html = await res2.text();

  // Match all hrefs ending in .jpg
  const imageRegex = /href="(.*?\.jpg)"/g;
  const matches = [...html.matchAll(imageRegex)];

  // Build full URLs from matches
  const filenames = matches.map((match) => baseUrl + match[1]);

  // Sort by filename descending (based on timestamp in filename)
  const sorted = filenames.sort().reverse();

  // get latest 16 filenames
  const lastSixteen = sorted.slice(0, 16);

  // choose the first filename of each set of 4. ["", "", "", "", "take this one", "", "" etc.]
  // const imgFileNames = lastSixteen.filter((e, i) => i % 4 == 0);

  // every images comes in 3 resolutions, 512, 2048, 4096.
  // only grab the images with 2048 resolution.
  // this leaves 4 images in total.
  const imgFileNames = lastSixteen.filter((e) => e.includes("4096"));

  res.status(200).json(imgFileNames);
});

const server = app.listen(port, () => {
  console.log(`Local API listening at http://localhost:${port}`);
});

// gracefully closing the server when .exe is quit or interuppted
process.on("SIGTERM", () => {
  server.close(() => {
    console.log("HTTP server closed.");
  });
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("HTTP server closed.");
  });
});
