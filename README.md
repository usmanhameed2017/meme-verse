# MemeVerse 🎉

**MemeVerse** is a fun and interactive meme generator built with React. It allows users to generate, edit, and download high-resolution memes without any watermark — for free!

---

## 🚀 Features

- ✅ Fetches trending meme templates via [Imgflip API](https://api.imgflip.com/get_memes)
- ✍️ Add multiple fields for texts
- 🧲 Draggable text elements for precise positioning
- 📸 Export memes as JPEG/PNG images
- 💾 Download memes in high resolution without watermark
- 💯 100% Free with pre-made meme templates

---

## 🧰 Technologies & Libraries Used

| Library                         | Description                                 |
|----------------------------------|---------------------------------------------|
| `react-router-dom`               | For smooth navigation                |
| `react-bootstrap`               | For responsive UI components                |
| `react-icons`               | To make buttons more appealing with icons       |
| `react-draggable`               | To make text overlays draggable             |
| `react-component-export-image` | For exporting React components as images    |

---

### 🧩 Problem:
Initially, I was using **route parameters** with `useParams()` to get the image URL when a user clicked on a meme e.g: `/edit/:image_url`. However, this approach caused the app to break when the image URL contained:

- Spaces
- Forward slashes `/`
- Other special characters

This is because route params interpret slashes as route separators, which corrupts the actual image URL.

---

### 🛠️ Solution:
To resolve this issue, I shifted from using **route parameters** to **query string parameters**. Here's how:

- Replaced dynamic route like `/meme/:url` with `/meme?url=image_link`
- Used `useSearchParams()` from React Router to fetch the image URL safely
- This preserved the full image URL including slashes and spaces without breaking the app

✅ **Result:** Image URLs are now correctly passed and rendered without any corruption, ensuring stable meme display.

---

## 🛠️ How to Run the App

```bash
# Clone the repo
git clone https://github.com/your-username/memeverse.git

# Navigate into the project folder
cd memeverse

# Install dependencies
npm install

# Run the app
npm start