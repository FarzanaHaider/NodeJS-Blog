# NodeJS Blog

A full-stack blogging platform built with Node.js, Express.js, MongoDB, and EJS. This project allows users to create, read, update, delete, and search blog posts, providing a seamless and intuitive blogging experience.

## 🚀 Features

- **Create Posts**: Compose new blog entries with titles and content.
- **Read Posts**: View a list of all blog posts and read individual entries.
- **Update Posts**: Edit existing blog posts to correct or update information.
- **Delete Posts**: Remove blog posts that are no longer needed.
- **Search Posts**: Find specific blog posts by keywords in the title or content.
- **Responsive Design**: Ensures usability across various devices.

## 🛠️ Technologies Used

- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Templating Engine**: [EJS](https://ejs.co/)
- **Frontend**: HTML, CSS
- **Version Control**: [Git](https://git-scm.com/)

## 📁 Project Structure

```
NodeJS-Blog/
├── public/             # (CSS, images, Javascript etc.)
├── server/             # Backend logic and routes
├── views/              # EJS templates for rendering pages
├── app.js              # Main application file
├── package.json        # Project metadata and dependencies
└── .gitignore          # Specifies files to ignore in Git
```

## ⚙️ Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/FarzanaHaider/NodeJS-Blog.git
   cd NodeJS-Blog
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Rename `dotenv.txt` to `.env`.
   - Add your MongoDB connection string and any other necessary environment variables.

4. **Start the application**:

   ```bash
   node app.js
   ```

5. **Access the application**:

   Open your browser and navigate to `http://localhost:5000`.

## 📝 Usage

- Navigate to the homepage to view all blog posts.
- Click on "Create New Post" to add a new blog entry.
- Use the **edit** and **delete** options to manage existing posts.
- Use the **search bar** to filter blog posts by matching text in the title or content.

## 🔍 Search Functionality

The search bar enables users to:

- Input keywords related to the blog post title or content.
- Instantly filter and view posts containing the searched terms.
- Enhance navigation through large volumes of blog content.

## 🌐 Deployment

The application is deployed on Microsoft Azure via a virtual machine.

- **Live Demo**: http://172.174.202.242/
                 Admin Panel: http://172.174.202.242/admin
                        Username: admin
                        Password: admin


