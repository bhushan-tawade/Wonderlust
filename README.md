# Wonderlust

Wonderlust is a web application that allows users to browse, add, edit, delete, and review listings of hotels, villas, and other accommodations. This project is built for learning purposes to gain hands-on experience with **MongoDB, Express, Node.js, and EJS**.

## Features

- View listings of hotels, villas, and other stays.
- Add new listings with details.
- Edit and delete existing listings.
- Leave reviews and ratings on listings.
- Error handling and async utility functions.

## Technologies Used

- **MongoDB** - Database for storing listings and reviews.
- **Express.js** - Backend framework for handling routes and requests.
- **Node.js** - JavaScript runtime for building the server.
- **EJS** - Templating engine for rendering dynamic HTML.
- **Bootstrap** - Frontend framework for responsive design and styling.
- **CSS & JavaScript** - Frontend styling and interactivity.

## Project Structure

```
MajorProject/
├─ .gitignore
├─ app.js
├─ init/
│  ├─ data.js
│  └─ index.js
├─ models/
│  ├─ listing.js
│  └─ review.js
├─ package-lock.json
├─ package.json
├─ public/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  └─ script.js
│  └─ util/
│     ├─ expressError.js
│     └─ wrapAsync.js
├─ routes/
│  ├─ listing.js
│  └─ review.js
├─ schema.js
└─ views/
   ├─ error.ejs
   ├─ includes/
   │  ├─ footer.ejs
   │  └─ navbar.ejs
   ├─ layout/
   │  └─ boilerplate.ejs
   └─ listings/
      ├─ edit.ejs
      ├─ index.ejs
      ├─ new.ejs
      └─ show.ejs
```

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/bhushan-tawade/wonderlust.git
   cd wonderlust
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up MongoDB and configure the connection in `app.js`.
4. Start the server:
   ```sh
   node app.js
   ```
5. Open the browser and visit `http://localhost:8080`

## Future Improvements

- Implement authentication for user accounts.
- Add a search and filter feature for listings.
- Improve UI with better design and responsiveness.

## License

This project is for learning purposes and does not have a license.

---

### Author

**Bhushan Tawade** - [GitHub](https://github.com/bhushan-tawade)
