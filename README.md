Wanderlust 🌍
A full-stack MERN web application for discovering and listing unique accommodation properties worldwide. Browse trending destinations, filter by property categories, upload listings with images, and explore interactive maps—all with secure authentication and authorization.
Live Demo: https://wanderlust-edse.onrender.com

🎯 Features
User Features

🔐 Secure user authentication with signup and login
📝 Browse and filter accommodations by categories (Rooms, Cities, Mountains, Castles, Pools, Camping, Farms, Arctic, Domes)
🔍 Search destinations from thousands of unique properties
📸 Upload property listings with multiple images
🗺️ Interactive map integration to visualize locations
⭐ View trending, Arctic, and pool accommodations
💰 Dynamic pricing display with GST calculations
🏠 Full CRUD operations for listing management

Admin/Host Features

✏️ Create, edit, and delete property listings
📤 Upload up to 5 images per listing via Cloudinary
📊 Manage own listings with complete control
🔐 Role-based access control


🛠️ Tech Stack
Frontend

React - UI library for interactive components
Bootstrap - Responsive CSS framework
CSS Classes - Custom styling

Backend

Node.js - JavaScript runtime
Express.js - Web framework with routing
Express Router - Modular route management
Express Session - Session management

Database

MongoDB Atlas - Cloud database for data persistence
Mongoose - ODM for MongoDB

Authentication & Security

Passport.js - Authentication middleware
JWT (JSON Web Tokens) - Secure token-based authentication
Bcrypt - Password hashing and encryption

Media Storage

Cloudinary - Cloud-based image upload and optimization

Architecture

MVC Pattern - Model-View-Controller architecture for scalable code organization

Deployment

Render - Platform for hosting the full-stack application


📋 Prerequisites
Before running the project locally, ensure you have:

Node.js (v14 or higher)
npm or yarn
MongoDB Atlas account
Cloudinary account
Git


🚀 Installation & Setup
1. Clone the Repository
bashgit clone https://github.com/your-username/wanderlust.git
cd wanderlust
2. Install Dependencies
Backend:
bashcd backend
npm install
Frontend:
bashcd frontend
npm install
3. Environment Variables
Create a .env file in the backend directory:
envPORT=8080
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
SESSION_SECRET=your_session_secret
NODE_ENV=development
4. Run the Application
Backend:
bashnpm start
Frontend (in another terminal):
bashnpm start
The application will run on http://localhost:3000 (frontend) and http://localhost:8080 (backend).

📁 Project Structure
wanderlust/
├── backend/
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Express routes
│   ├── controllers/      # Business logic
│   ├── middleware/       # Custom middleware & validations
│   ├── config/          # Configuration files
│   └── app.js           # Express app setup
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── App.js       # Main app component
│   │   └── index.js     # Entry point
│   └── public/          # Static files
└── README.md

🔐 Authentication & Authorization

Users can sign up with email and password
Passwords are hashed using bcrypt for security
Passport.js handles authentication strategies
JWT tokens manage user sessions
Middleware validates authorization for protected routes
Role-based access control for listing management


🖼️ Image Management

Images are uploaded via Cloudinary
Supports multiple image uploads per listing (3-5 images)
Automatic image optimization and CDN delivery
Secure image URL management


🗄️ Database Schema
Users

Email, password (hashed), profile information
Role (user/host)

Listings

Title, description, category, price
Location (address, coordinates)
Host information
Image URLs (from Cloudinary)
Timestamps

Reviews (Optional)

Rating, comment, user reference
Listing reference


🌐 Deployment
The project is deployed on Render:

Automatic deployment from GitHub
Environment variables configured in Render dashboard
MongoDB Atlas provides cloud database
Cloudinary handles media storage

To deploy your own version:

Push code to GitHub
Connect repository to Render
Add environment variables
Deploy!


🎨 UI/UX Highlights

Clean, modern interface with Bootstrap
Responsive design for mobile and desktop
Interactive category filters
Trending, Arctic, and Pool property showcases
Intuitive navigation and search
Interactive map for location visualization
GST-inclusive pricing display


🧪 Testing
bash# Backend tests (if implemented)
npm test

# Frontend tests
cd frontend
npm test

📝 Form Validations

Email format validation
Password strength requirements
Required field validations
Image file type and size validation
Price and description format validation
Server-side middleware validation


🚦 Middleware

Authentication middleware for protected routes
Authorization middleware for role-based access
Error handling middleware
Request validation middleware
CORS middleware for cross-origin requests


🤝 Contributing
Contributions are welcome! To contribute:

Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit changes (git commit -m 'Add AmazingFeature')
Push to branch (git push origin feature/AmazingFeature)
Open a Pull Request


📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

👤 Author
Shradha Khapra

🙏 Acknowledgments

MERN Stack community
Cloudinary for image management
MongoDB for database solutions
Render for hosting
Bootstrap for UI components
Passport.js for authentication


📧 Contact
For questions or feedback, feel free to reach out!

🗺️ Future Enhancements

Booking and reservation system
Payment gateway integration (Stripe/Razorpay)
User reviews and ratings
Wishlist/favorites feature
Email notifications
Advanced search filters
Host dashboard with analytics
Mobile app version


Happy Exploring! 🚀
