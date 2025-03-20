# 💬 Real-Time Messaging Application

A modern, scalable messaging platform built with **Java**, **Spring Boot**, **RabbitMQ**, **React**, and **Redux**. Exchange messages instantly with a robust backend and sleek, responsive UI.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Build](https://img.shields.io/badge/build-passing-success)
![Coverage](https://img.shields.io/badge/coverage-87%25-yellowgreen)

## ✨ Features

- **Instant Messaging**: Send and receive messages in real-time
- **Persistent Storage**: All conversations are securely stored
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Message History**: Access your complete message history anytime
- **Modern UI**: Clean interface built with React and Tailwind CSS
- **Cross-Platform**: Works on desktop, tablet, and mobile devices
- **Offline Support**: Messages are queued when offline and sent when connection resumes

## 🛠️ Tech Stack

### Backend
- **Java** with Spring Boot for robust API development
- **Spring Web** for RESTful API endpoints
- **Spring Data** for database integration
- **Spring AMQP** for RabbitMQ messaging
- **MongoDB/MySQL** for data persistence
- **JUnit & Mockito** for testing

### Frontend
- **React** for dynamic UI components
- **Redux** for centralized state management
- **Tailwind CSS** for modern, responsive styling
- **Axios** for API communication
- **Jest & React Testing Library** for testing

### Infrastructure
- **RabbitMQ** for real-time message queuing
- **Docker** for containerization
- **GitHub Actions** for CI/CD pipeline
- **AWS/Azure/GCP** for deployment (choose your platform)

## 🏗️ Architecture

```
┌────────────┐     ┌────────────┐     ┌────────────┐
│            │     │            │     │            │
│  React UI  │◄───►│ Spring API │◄───►│  Database  │
│  (Redux)   │     │            │     │            │
└────────────┘     └─────┬──────┘     └────────────┘
                         │
                  ┌──────▼──────┐
                  │             │
                  │  RabbitMQ   │
                  │             │
                  └─────────────┘
```

## 🚀 Getting Started

### Prerequisites
- Java 21+
- Node.js and npm
- RabbitMQ
- MongoDB or MySQL

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/real-time-messaging-app.git
   cd real-time-messaging-app/backend
   ```

2. **Configure your database and RabbitMQ**
   ```
   # application.properties example
   spring.rabbitmq.host=localhost
   spring.rabbitmq.port=5672
   spring.rabbitmq.username=guest
   spring.rabbitmq.password=guest

   # For MongoDB
   spring.data.mongodb.uri=mongodb://localhost:27017/messagingapp

   # Or for MySQL
   spring.datasource.url=jdbc:mysql://localhost:3306/messagingapp
   spring.datasource.username=root
   spring.datasource.password=password
   ```

3. **Build and run**
   ```bash
   # With Maven
   mvn clean install
   mvn spring-boot:run

   # Or with Gradle
   ./gradlew build
   ./gradlew bootRun
   ```

4. **Verify the API**
   The API will be available at `http://localhost:8080`

### Frontend Setup

1. **Navigate to the frontend directory**
   ```bash
   cd ../frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure API endpoint**
   Create a `.env` file:
   ```
   REACT_APP_API_URL=http://localhost:8080
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Access the app**
   Open `http://localhost:3000` in your browser

## 📡 API Endpoints

| Method | Endpoint       | Description             |
|--------|----------------|-------------------------|
| GET    | `/api/messages` | Retrieve all messages   |
| GET    | `/api/messages/{id}` | Get a specific message |
| POST   | `/api/messages` | Send a new message      |
| GET    | `/api/users`    | Get all users           |
| GET    | `/api/users/{id}` | Get a specific user    |

## 📱 Screenshots

*[Coming soon]*

## 🛣️ Roadmap

- [ ] User authentication with JWT
- [ ] Message read receipts
- [ ] File sharing capabilities
- [ ] User status indicators
- [ ] Message encryption
- [ ] Group messaging

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Abrahão Dev - [LinkedIn](https://www.linkedin.com/in/abrahao-dev/) - contato.matheusabrahao@gmail.com