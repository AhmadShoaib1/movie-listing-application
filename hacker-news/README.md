# Hacker News Application
---

## How Do You Set Up the Environment?

### 1. Clone the Repository

```bash
git clone https://github.com/otago-polytechnic-bit-courses/s2-24-intermediate-app-dev-repo-SupaHotBal
```

### 2. Open the Repository

Navigate to the cloned repository in your file explorer.

- Right-click inside the folder and choose **"Open with Terminal"** or **"Open Git Bash"**.

### 3. Switch to the Project Branch

```bash
git checkout project
```

### 4. Open the Repository in VS Code

- Right-click the repository folder and choose **"Open with Code"**
- Or open VS Code manually and select **File → Open Folder**.

Once inside VS Code, open a new integrated terminal.

### 5. Navigate to the Project Directory

```bash
cd hacker-news-application
```

### 6. Install Dependencies

```bash
npm install
```

### 7. Start the Development Server

```bash
npm run dev
```

Your application should now be running at:

```
http://localhost:5173
```

Any changes to the code will auto-refresh the browser.

---

## How Do I Check My Code?

We use **Prettier** for consistent formatting and clean code.

To **check** formatting:

```bash
npx prettier . --check
```

To **auto-format** your code:

```bash
npx prettier . --write
```

---

## 📁 Folder Structure

```
hacker-news-application/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── StoryList.jsx
│   │   ├── StoryCard.jsx
│   │   ├── StoryDetail.jsx
│   │   ├── LeaderSearch.jsx
│   │   └── ui/
│   │       └── card.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 📜 Notes

- Ensure Tailwind CSS is working by checking for styled components (rounded cards, shadows, colored backgrounds).
- This app meets Milestone 2 requirements for displaying stories, navigating by categories, viewing details, and searching for Hacker News leaders.

---

