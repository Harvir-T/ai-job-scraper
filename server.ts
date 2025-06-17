import express from "express";
import cors from "cors";
import { enrichJobWithAI } from './index'; 

const app = express();
app.use(cors());
app.use(express.json());

app.post("/enrich", async (req, res) => {
  try {
    console.log("📩 Incoming POST from n8n:");
    console.log(req.body);  

    const enriched = await enrichJobWithAI(req.body);
    res.json({ enriched });
  } catch (error) {
    console.error("❌ Error enriching job:", error);
    res.status(500).json({ error: "Failed to enrich job", details: (error as any).message });
  }
});

app.listen(3000, () => {
  console.log("Enrichment API running at http://localhost:3000/enrich");
});
