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


