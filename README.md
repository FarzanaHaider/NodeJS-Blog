NodeJS Blog
A full-stack blogging platform built with Node.js, Express.js, MongoDB, and EJS. This project allows users to create, read, update, delete, and search blog posts, providing a seamless and intuitive blogging experience.

🚀 Features
Create Posts: Compose new blog entries with titles and content.

Read Posts: View a list of all blog posts and read individual entries.

Update Posts: Edit existing blog posts to correct or update information.

Delete Posts: Remove blog posts that are no longer needed.

Search Posts: Find specific blog posts by keywords in the title or content.

Responsive Design: Ensures usability across various devices.

🛠️ Technologies Used
Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Templating Engine: EJS

Frontend: HTML, CSS

Version Control: Git

📁 Project Structure
php
Copy
Edit
NodeJS-Blog/
├── public/             # (CSS, images, javascript etc.)
├── server/             # Backend logic and routes
├── views/              # EJS templates for rendering pages
├── app.js              # Main application file
├── package.json        # Project metadata and dependencies
└── .gitignore          # Specifies files to ignore in Git
⚙️ Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/FarzanaHaider/NodeJS-Blog.git
cd NodeJS-Blog
Install dependencies:

bash
Copy
Edit
npm install
Set up environment variables:

Rename dotenv.txt to .env.

Add your MongoDB connection string and any other necessary environment variables.

Start the application:

bash
Copy
Edit
node app.js
Access the application:

Open your browser and navigate to http://localhost:5000.

📝 Usage
Navigate to the homepage to view all blog posts.

Click on "Create New Post" to add a new blog entry.

Use the edit and delete options to manage existing posts.

Use the search bar to filter blog posts by matching text in the title or content.

🔍 Search Functionality
The search bar enables users to:

Input keywords related to the blog post title or content.

Instantly filter and view posts containing the searched terms.

Enhance navigation through large volumes of blog content.

🌐 Deployment
The application can be deployed on platforms like Microsoft Azure, Heroku, Render, or Vercel. Here's a placeholder for the live demo:

Live Demo: http://172.174.202.242/
           Admin Panel: http://172.174.202.242/admin , 
           Username: admin, 
           Password: admin.

Note: Replace the above URL with your actual deployment link.

🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

📄 License
This project is open-source and available under the MIT License.
