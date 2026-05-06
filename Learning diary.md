Lappeenranta–Lahti University of Technology LUT
Bachelor’s Programme in Software Engineering





Sofware Development Skills

<Ruoyu Gao >, <000205313 >




LEARNING DIARY, < Full-Stack> MODULE









 
LEARNING DIARY

19.3.2026

I initiated my work on the full-stack development course by setting up the required development environment and reviewing the course structure.
I installed Visual Studio Code as my primary code editor and ensured that Git was properly configured on my system. I practiced the basic Git workflow, including repository initialization, staging changes, committing, and pushing to a remote repository.
In addition, I created a public repository on GitHub to manage and document my progress throughout the course. An initial README file was added to outline the purpose of the repository.
I also carefully reviewed the course instructions and evaluation criteria. The course requires the completion of three main components: exercise materials, a learning diary, and a final project. Understanding these requirements at an early stage helps in planning the learning process more effectively.


25.3.2026

Today I focused on learning the fundamental modules of Node.js, including the built-in modules such as path, url, fs, and events.
I explored how to work with file paths using the path module, including extracting file names, extensions, and constructing new paths. I also practiced parsing URLs and retrieving query parameters using the URL module, which helped me understand how Node.js handles request-related data.
In addition, I worked with the file system module (fs) to create directories, write files, read file contents, and append new data to existing files. This allowed me to gain hands-on experience with basic file operations in Node.js.
I also studied the EventEmitter module and implemented custom events. By emitting and listening to events, I understood how Node.js handles asynchronous event-driven programming.
Overall, this session helped me build a solid understanding of Node.js core modules and how they are used in practical scenarios.


26.3.2026

Today I extended my knowledge of Node.js by creating a basic HTTP server without using any frameworks.
I used the built-in http module to build a server that handles different routes, including the home page and an about page. I also implemented dynamic responses by handling query parameters and returning JSON data for API-like endpoints.
During the process, I encountered an issue where the server could not start due to the port already being in use. After identifying the problem, I resolved it by changing the port number, which allowed the server to run successfully.
This exercise helped me understand how low-level server logic works in Node.js, including request handling, routing, and response formatting. It also provided a deeper insight into how frameworks like Express simplify these processes.

02.4.2026

Today I started working with MongoDB and focused on setting up the database environment and establishing a connection.
Initially, I encountered issues when trying to run the MongoDB server, as the mongod command was not recognized. After investigating, I realized that the MongoDB executable path needed to be specified correctly. I resolved this by running mongod using the full path, which successfully started the database server.
After the server was running, I used the MongoDB Node.js driver to connect to the local database. I created a connection script and verified that the connection was successful.
This session helped me understand how MongoDB runs locally and how to establish a connection between Node.js and a database system.

03.4.2026

Today I continued working with MongoDB and focused on performing CRUD (Create, Read, Update, Delete) operations.
I implemented scripts to insert multiple documents into a collection and verified the results by retrieving the data using find and findOne queries. I also practiced filtering data based on specific conditions.
In addition, I updated existing documents using updateOne and removed data using deleteOne. Finally, I created a combined script that performs all CRUD operations in sequence, which helped me understand the full data lifecycle.
This session provided practical experience with database operations and strengthened my understanding of how backend applications interact with data storage systems.

04.4.2026

Today I started learning Express.js and explored how to build a structured backend application.
I created an Express server and implemented basic routing using GET requests. Compared to the native Node.js HTTP module, Express provided a much simpler and more readable way to define routes and handle responses.
I also learned how to use middleware, including express.json() for handling JSON data and a custom logger middleware to track incoming requests. This helped me understand how middleware works in the request-response cycle.
In addition, I began organizing the project into multiple folders, including routes, controllers, and middleware. This separation improved the readability and structure of the code, making it easier to manage as the application grows.
During the process, I encountered an issue where the server failed to start because the port was already in use. After identifying the problem, I resolved it by changing the port number.

05.4.2026

Today I continued working with Express.js and focused on building a more complete RESTful API.
I implemented full CRUD operations for a user resource, including GET, POST, PUT, and DELETE endpoints. These routes allowed the server to create, retrieve, update, and delete user data dynamically.
I separated the application logic into different layers. The routing logic was placed in the routes folder, while the main business logic was handled in the controllers. This approach made the application more modular and easier to maintain.
I also practiced handling route parameters and request bodies, which are essential for building dynamic APIs. In addition, I implemented a 404 handler to manage undefined routes, improving the robustness of the application.
Furthermore, I added a static public page to demonstrate how Express can serve frontend content alongside backend APIs.
This session helped me gain a clearer understanding of how real-world backend applications are structured and how Express can be used to build scalable and maintainable services.

10.4.2026

Today I started learning React and set up a basic development environment using Vite. I created a simple React application and explored the structure of a typical project, including the src folder and component-based file organization. I learned how React uses JSX to combine HTML and JavaScript, which allows dynamic rendering of content.
I implemented a basic layout by creating separate components such as a header and a task list. This helped me understand how React applications are built from reusable components. I also practiced passing data between components and organizing code in a clearer and more modular way.
During this process, I realized that React focuses on building user interfaces through components rather than manipulating the DOM directly. This approach makes the code more maintainable and easier to extend. Overall, this session helped me understand the fundamental structure of a React application and how to start building simple interfaces.

11.4.2026

Today I continued working on my React project by adding interactivity and improving functionality. I implemented state management using the useState hook to store and update task data dynamically. I built features such as adding new tasks through an input form, deleting tasks, and updating the UI based on user actions.
I also practiced handling events such as button clicks and form submissions. Additionally, I implemented conditional rendering to display a message when no tasks are available. To enhance the user experience, I added a reminder feature that can be toggled by double-clicking a task.
Another important part of this session was using useEffect to store task data in localStorage. This ensures that the data persists even after refreshing the page. Through this practice, I gained a better understanding of how React manages state and synchronizes data with external storage.
Overall, this session helped me understand how to build a more dynamic and interactive frontend application using React, and how different concepts such as state, events, and effects work together in a real project.

15.4.2026

Today I started working on the MERN stack practice. I mainly focused on the backend part using Express and MongoDB.
First, I created a basic Express server and tested if it could run correctly. After that, I connected MongoDB to the project using Mongoose. At the beginning, I had some trouble with the connection, but after checking the path and restarting the database, it worked.
Then I created a simple Task model with fields like text and completed. Based on this model, I implemented several API routes, including GET, POST, PUT, and DELETE. These routes allow the application to perform basic CRUD operations.
I tested these APIs using the browser and confirmed that the data could be stored and retrieved from MongoDB. There were some small mistakes in routing at first, but after fixing them, everything worked as expected.

16.4.2026

Today I worked on the frontend using React and connected it with the backend API.
I created a React project using Vite and built a simple interface with an input box and buttons. Then I used useState to manage the task data and useEffect to fetch data from the backend.
While working on this part, I encountered some issues, such as function definition order and ESLint warnings related to useEffect. I fixed these problems by moving the fetch function inside useEffect and adjusting the code structure.
After that, I implemented adding tasks, deleting tasks, and updating task status. These actions send requests to the backend API and update the database.
At the end, I was able to see the tasks displayed on the page, and the data remained after refreshing the page.

01.5.2025

Today I started working on my final project for the full-stack module. I decided to build a simple message board using the MERN stack.
First, I created a new project folder and separated it into backend and frontend directories. I initialized the backend using Node.js and installed the required dependencies such as Express, Mongoose, and CORS. Then I set up a basic Express server and confirmed that it could run correctly.
After that, I connected the application to a local MongoDB database. Compared to MongoDB Atlas, using a local database was simpler and more stable for me. I created a Message model with fields for name and message. Based on this model, I implemented basic API routes, including GET, POST, and DELETE.
During the process, I encountered some issues, such as errors with missing scripts in package.json and running commands in the wrong directory. After checking the file structure and fixing the scripts, I was able to start the server successfully.
By the end of the day, the backend part of the project was working, and I could store and retrieve data from MongoDB.

02.5.2026

Today I focused on building the frontend using React.
I created the frontend project using Vite and set up a basic React application. Then I installed axios to handle HTTP requests and started connecting the frontend with the backend API.
I implemented the main features of the message board, including displaying messages, adding new messages, and deleting messages. I used useState to manage the input values and message data, and useEffect to fetch data from the backend.
While working on this part, I encountered several issues. For example, I forgot to install axios in the frontend, which caused import errors. I also made mistakes with the project directory and ran commands in the wrong location. In addition, there were some warnings related to useEffect, which I fixed by adjusting the code structure.
After solving these problems, I was able to see the messages displayed on the page and interact with them. The frontend and backend were successfully connected.

08.5.2026

Today I improved the user interface and added extra features to the project.
First, I updated the CSS styles to make the interface cleaner and more user-friendly. I changed the layout to a centered card style and improved the appearance of buttons and input fields.
Then I added a search function that allows users to filter messages by name or content. This feature was implemented on the frontend by filtering the message list based on user input.
During testing, I also learned how to manage multiple terminals, since both the backend server and frontend development server need to run at the same time. I encountered issues with port conflicts, but I understood how Vite automatically switches to another port when needed.
Overall, this project helped me understand how a full-stack application works from end to end. I practiced connecting the frontend and backend, handling data with MongoDB, and debugging real development issues. This experience improved both my technical skills and problem-solving ability.
