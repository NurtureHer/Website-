
# Nurture Her 🪻 - Girl Support Initiative Website

Welcome to the internal development repository for the **Nurture Her** website. This project is a modern, responsive application built to promote our mission of empowering teenage girls through health education, life skills, and safe supportive spaces.

## About the Project

**Nurture Her Girls Support Initiative** is a non-governmental organization that supports and empowers teenage girls. We create safe and supportive spaces where girls can learn and grow into healthy, strong, and empowered women.

**Our Core Objectives:**
* **Safe Spaces:** Creating supportive environments for connection and growth.
* **Health Education:** Providing culturally appropriate reproductive health education.
* **Career Awareness:** Bridging the gap between adolescence and adulthood.
* **Self-Esteem:** Building leadership skills and recognizing inherent worth.
* **Well-being:** Promoting physical, mental, and emotional health.

---

## Tech Stack

* **Framework:** React (via Vite)
* **Styling:** Tailwind CSS v4
* **Routing:** React Router DOM
* **Icons:** Lucide React
* **Deployment:** GitHub Pages (only during development)

---

## Developer Setup Guide

Follow these steps to set up the project on your local machine (Mac or Windows).

### Prerequisites
Ensure you have the following installed:
1. **Node.js** (Version 18+ recommended): [Download Here](https://nodejs.org/)
2. **Git**: [Download Here](https://git-scm.com/)
3. **VS Code**: [Download Here](https://code.visualstudio.com/)

### Step 1: Clone the Repository
1. Open **VS Code**.
2. Open the Terminal inside VS Code (Click **Terminal > New Terminal** in the top menu).
3. Type the following commands one by one (press Enter after each):

```bash
cd ~/Desktop
git clone [https://github.com/NurtureHer/Website-.git](https://github.com/NurtureHer/Website-.git)

```

*Note: You may be asked to log in to GitHub.*

### Step 2: Open the Project

1. In VS Code, go to **File > Open Folder...**
2. Navigate to your **Desktop**, select the new folder named `Website-`, and click **Open**.

### Step 3: Install Dependencies

Now that the project folder is open, open a new terminal (**Terminal > New Terminal**) and run:

```bash
npm install

```

*This downloads React, Tailwind, and all necessary tools.*

### Step 4: Run the Local Server

To start working on the site, run:

```bash
npm run dev

```

You will see a Local URL (usually `http://localhost:5173`). Click it to view the site in your browser.

---

## How to Deploy Updates

We use **GitHub Pages** for deployment.
**Live Site:** [https://NurtureHer.github.io/Website-/](https://NurtureHer.github.io/Website-/)

**To update the live website:**

1. **Save** your changes in VS Code.
2. **Commit & Push** your code to GitHub:

```bash
git add .
git commit -m "Describe your changes here"
git push origin main

```

3. **Run the Deploy Script:**

```bash
npm run deploy

```

*This will build the site and update the live link automatically. Changes typically appear within 2-3 minutes.*

---

## Initial Project Structure

* **`src/components/Layout`**: Contains `Navbar.jsx` and `Footer.jsx`.
* **`src/components/Sections`**: Contains the main page blocks (`Hero`, `About`, `Mission`, etc.).
* **`src/pages`**: Contains `Home.jsx` (which assembles all the sections).
* **`src/index.css`**: Contains the Tailwind CSS configuration and brand colors.

## Design System

* **Primary Color:** Mauve (`#766371`)
* **Fonts:**
* Headers: *Playfair Display*
* Body: *Lato*



---

**© Nurture Her Girl Support Initiative** | Private Repository

```

```
