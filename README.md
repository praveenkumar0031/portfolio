# 🚀 Developer Portfolio Template

A modern, responsive, and fully customizable developer portfolio built with **React**. All portfolio content is managed through separate data files, allowing you to personalize your portfolio without modifying UI components.

## ✨ Features

- 🎨 Clean and modern UI
- 📱 Fully responsive design
- ⚡ Fast and lightweight
- 🗂️ Data-driven architecture
- 🛠️ Easy project management
- 📄 Experience, skills, education, and certifications sections
- 🌙 Smooth animations and transitions
- 🔗 Social links and contact information
- 🚀 Easy deployment to Vercel, Netlify, or GitHub Pages

---

## 📂 Project Structure

```
src/
├── assets/
│   ├── images/
│   └── icons/
│
├── components/
│
├── pages/
│
├── data/
│   ├── portfolio.js
│   ├── projects.js
│   └── ...
│
└── App.jsx
```

---

## 🛠️ Customization

All personal information is stored inside the **data** folder.

Simply edit the data files to update:

- Hero Section
- About Me
- Skills
- Projects
- Experience
- Education
- Certifications
- Contact Information
- Social Links

No UI changes are required.

---

## ➕ Adding a New Project

Add a new object to the projects array.

Example:

```javascript
{
  title: "Project Name",
  type: "Solo",
  tech: "React, Node.js, MongoDB",
  des: "Short description about your project.",
  url: projectImage,
  link: "https://github.com/username/project"
}
```

Import your project image into the assets folder and reference it in the data file.

---

## 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/yourusername/portfolio.git
```

Install dependencies

```bash
npm install
```

Run locally

```bash
npm run dev
```

Build for production

```bash
npm run build
```

---

## 💻 Tech Stack

- React
- JavaScript
- CSS
- Vite

---

## 🌐 Deployment

I deployed this portfolio using:

- GitHub Pages
- Domain mapping

---



## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

If you'd like to improve this template, feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## ⭐ Support

If you found this template useful, consider giving the repository a ⭐.

It helps others discover the project!