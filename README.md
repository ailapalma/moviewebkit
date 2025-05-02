# 🎬 MovieWebKit

A modern kickstart project for building a fully functional movie and TV streaming platform.

> 🚀 Originally created by **[bitfreee](https://github.com/bitfreee)**
> 🔧 Overhauled, modernized, and maintained by **Flexify** and **GhostHax**

---

## 🌟 Features

* **Browse Movies** – Explore a wide collection by genre, release date, or popularity
* **Search Functionality** – Find movies by title, director, or cast
* **User Reviews** – Read and submit reviews from the community
* **User Ratings** – Rate titles and view average community scores
* **Recommendation Engine** – Get movie suggestions based on your viewing habits
* **Responsive Design** – Optimized for all devices with mobile-first design

---

## 🚀 Deployments

### Deploy with Vercel

1. Click the button below to clone and deploy your own instance:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fgodowner202%2Fmoviewebkit&env=NEXT_PUBLIC_APP_URL,NEXT_PUBLIC_TMDB_TOKEN,NEXT_PUBLIC_SITE_NAME)

2. Set these required environment variables:

   * `NEXT_PUBLIC_APP_URL`: Your site URL (e.g. `https://your-app.vercel.app`)
   * `NEXT_PUBLIC_TMDB_TOKEN`: Your [TMDb API token](https://www.themoviedb.org/documentation/api)
   * `NEXT_PUBLIC_SITE_NAME`: Name of your site (e.g. `MovieWebKit`)

3. Click **Deploy** and wait for your site to go live.

---

### Deploy with Cloudflare Pages

You can also deploy to [Cloudflare Pages](https://pages.cloudflare.com/) using [next-on-pages](https://github.com/cloudflare/next-on-pages/tree/main/packages/next-on-pages).
Follow the instructions in the linked README.

---

## 🧑‍💻 Local Development

git clone https://github.com/godowner202/moviewebkit
cd moviewebkit
npm install
cp .env.example .env
npm run dev

---

## 🛠 Tech Stack

* **[Next.js](https://nextjs.org/)** – App framework
* **[TypeScript](https://www.typescriptlang.org/)** – Type-safe language
* **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework
* **[Vercel](https://vercel.com/)** – Hosting and deployment
* **[TMDb API](https://www.themoviedb.org/)** – Movie metadata
* **[Vidsrc.icu](https://vidsrc.icu)** – Streaming sources

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit: `git commit -m "Describe your change"`
5. Push: `git push origin feature/your-feature`
6. Open a Pull Request 🎉

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file.

---

## 🙏 Acknowledgements

* Thanks to **TMDb** for movie data
* Thanks to **Vidsrc.icu** for stream links
* Huge credit to **bitfreee** for the original codebase
* Special thanks to **Flexify** & **GhostHax** for rebuilding and maintaining the project
