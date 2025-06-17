# AI-Powered Job Listing Enricher using n8n + TypeScript + OpenAI

This project enriches job postings scraped from the web by:

* Automatically extracting and summarizing key job information using OpenAI 
* Categorizing the job listing and identifying top relevant skills
* Writing the enriched data back into a Google Sheet

Built using:

* 🧠 OpenAI API 
* ⚙️ n8n (workflow automation)
* 🧾 Google Sheets (data source & output)
* 🧑‍💻 TypeScript (custom enrichment microservice)

---

## 📌 Use Case

Helps job seekers quickly understand scraped job postings at a glance and tailor their applications based on AI-curated summaries, categories, and skills.

---

## 🧱 Project Components

### 1. **Google Sheets (Input)**

* Original job postings are stored in a sheet with columns like:

  * `Title`, `Company`, `Job Description`

### 2. **n8n Workflow**

* **Reads rows** from the sheet
* **Sends each row** to an HTTP Request node pointing to a local enrichment microservice
* **Writes enriched results** (`summary`, `category`, `skills`) back into a new sheet

### 3. **TypeScript Microservice**

* Exposes a `/enrich` POST endpoint
* Accepts job data and uses OpenAI's API to:

  * Generate a 1-line summary
  * Suggest a job category
  * Identify 3-5 core technical skills

---

## 🚀 Setup Instructions

### 🔧 Local Enrichment API

1. Clone this repo
2. Create a `.env` file with your OpenAI key:

   ```env
   OPENAI_API_KEY=your_key_here
   ```
3. Run the server:

   ```bash
   npm install
   npx ts-node server.ts
   ```

### 🧩 n8n Workflow

* Use nodes: Google Sheets (Read), HTTP Request, Set, Google Sheets (Append)
* Add your credentials and match field mappings accordingly

---

## 📸 Screenshots

* ![image](https://github.com/user-attachments/assets/3743307e-a052-4eee-b613-d52138031dd8)
 Workflow in n8n


---

## 📄 Example Output

| Title        | Company  | Summary                           | Category | Skills                  |
| ------------ | -------- | --------------------------------- | -------- | ----------------------- |
| Frontend Dev | RemoteOK | "Remote job building React apps." | Web Dev  | React, TypeScript, APIs |

---

## 🙋‍♂️ Author

**Harvir Thind**
Computer Engineering Graduate | QA Engineer | Builder

---

## 📌 Why This Project?

To demonstrate automation, AI integration, and workflow engineering skills for job search use cases.

> Inspired by real-world job scraping and enrichment needs.

---

## 📬 Contact

Open to feedback and collaboration — [harvir.thind@gmail.com](mailto:harvir.thind@gmail.com)

