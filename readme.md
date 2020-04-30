#PG6301 Webutvikling og API-design exam

##Welcome to my project
My project is a website for a "gatcha" game. Its a game where the user can collect pokemon they get from lootboxes.

###Structure
I have structured my project in the way shown in the exam text:

• src/client: Containing React Components
• src/server: Containing "database" and RESTful API
• src/shared: Contains nothing
• public: contains bundle.js, index.html and style.css
• tests: Containing all tests for project

###Technologies and libraries
In my project i used Yarn as my package manager, e.g.. creating bundle files, installing dependencies.. I have used
GitBash as my terminal to easily use Yarn for example. I have used Babel to compile my javascript.
I have used React, and react-router-dom to sync my UI with til URL. I have used Express for forming responses, handle routes.
I am using Jest to test my project. I am using passport to help me with authentication.


###Instructions on how to use the website:
- First install dependencies, build project and start server with yarn start.
- The server will start on port 8080, go to http://localhost:8080/ 
- This is the home page
- Click "See list of all Pokemon" to see available pokemon
- If you want to get back to the home page press "Home"
- Press SignUp to make an account and you will automatically be logged in
- Here you will get a Welcome message and som more options
- You can press "See list of all Pokemon" to see available pokemon again
- You can press "Open Lootbox", and then "Open lootbox" again to open it.
- A Pokemon will drop, showing wich one a what type it is.
- The Reroll button was supposed to be a feature where the user could reroll e,g. 3 times
- The "Add to collection" link, was supposed to become a button what would save to pokemon to the users collection aswell as redirect into collection page, 
now it just redirects the user..
- The "Your Collection" button will take the user to their collection where they could see their collected pokemon
- Tests can be run by typing in yarn test in terminal

###Requirements
In this project i did requirements R1, R2, and parts of R3. I did not do R4 and R5. I also did T1, T2, and part T3. I did not do T4, T5 or T6.
My test-coverage for "% Stmts" of the all files is 66.84