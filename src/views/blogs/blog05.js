module.exports = {
  title: "Setting up a simple standard Knex/Express RESTful API with PostgreSQL",
  headers: [
    {
      title: "Before we begin"
    },
    {
      title: "Step 1 — Initialization & dependencies"
    },
    {
      title: "Might needed dependencies"
    },
    {
      title: "Step 2 — Knex Configuration"
    },
    {
      title: "Step 3 — Migrating your data (Adding table schemas to the database)"
    },
    {
      title: "Step 4 — Seeding data into database"
    },
    {
      title: "Step 5 — Making the API (Routes)"
    }
  ],
  paragraphs: [
    {
      content: "In this tutorial, we'll set up an express API using Postgres as our database and Knex as the helper tool to link our node express application backend to a Postgres database."
    },
    {
      content: "Installations for postgres are different on various Operating systems but do try the official site here."
    },
    {
      content: "We start by initializing/creating our restful API, So run the following code inside a terminal in your desired directory."
    },
    {
      content: "Now let's install all needed dependencies"
    },
    {
      content: "express — Creates our restful API (li)"
    },
    {
      content: "knex — Our javascript SQL query builder (Makes development easier as a  javascript developer) (li)"
    },
    {
      content: "pg — Our client to connect and talk to your Postgres database (li)"
    },
    {
      content: "helmet — Extra security for express apps (li)"
    },
    {
      content: "cors — Cross domain security (li)"
    },
    {
      content: "bcryptjs — Hashing our passwords (Any private values that need hashing) password encryption layer (li)"
    },
    {
      content: "jsonwebtoken — Access token (API route security) (li)"
    },
    {
      content: "uuid — Generates exellent unique ID (li)"
    },
    {
      content: "nodemailer — sends emails (li)"
    },
    {
      content: "nodemon — dev dependency (recommended) (li)"
    },
    {
      content: "Create an index.js file in the root of your directory and start an express server with the following code (Basic Setup) (li)"
    },
    {
      content: "Run the express server and view it on localhost:3000 (li)"
    },
    {
      content: "Create a knexfile.js file in the root of the directory and insert the following code (li)"
    },
    {
      content: "I recommend importing from an external file e.g .env file or a js file that's added to the .gitignore file. (li)"
    },
    {
      content: "Create a db folder inside the root directory, and inside the new db folder create 2 subfolders (migrations & seeds) and lastly a knex.js fil"
    },
    {
      content: "Inside the knex.js file insert the following code"
    },
    {
      content: "We have now finally configured knex, all we need to do now is to create our migrations (database table schemas)"
    },
    {
      content: "For this tutorial, I've decided to make a basic registration API that saves the user as well as their address. The address will be saved in its own table therefore the user table will contain a foreign key to the address."
    },
    {
      content: "To generate a migration file we use the following command (I prefer having 1 default migration file than I'll have an external schema folder with the tables separated into individual javascript files that get imported into our default migration file). Make sure to have knex installed globally -g or add npx infront of knex commands."
    },
    {
      content: "Now create a folder called schemas in the migrations folder. Inside this schemas folder create the Users.js & Address.js files."
    },
    {
      content: "Inside the migration file (e.g: 20220111062300_default.js)[Date_Name.js] include the following schema imports"
    },
    {
      content: "Schemas reference to what type of data needs to be inserted into a column, Knex provides all necessary types to populate your database accordingly."
    },
    {
      content: "Knex cheatsheet (devhints.io) — Use this as guidance when setting up your database using knex (Comes in handy)"
    },
    {
      content: "Address Schema (/schemas/Address.js)"
    },
    {
      content: "Users Schema (/schemas/Users.js)"
    },
    {
      content: "Run the following code to migrate schemas (Table headers, value types: string, integer, boolean etc) into the database."
    },
    {
      content: "To clear database of all schemas use (Only do this when you've updated your schemas or added a new table)"
    },
    {
      content: "In the root run following commands to create seed files. Only seed data into the database if you want the database to have default stored values (e.g admin user, company details). Doing this will save you the hassle of having to manually add data every time you rollback/clear your database."
    },
    {
      content: "Inside 01_address.js"
    },
    {
      content: "Inside 02_users.js"
    },
    {
      content: "If you need to pre-populate data install and usethe faker package. Make a loop of N (e.g 100 Users & 90 Addresses) then populate values into the database."
    },
    {
      content: "Now let us seed our data with the following command"
    },
    {
      content: "Inside your index.js file right below the route comment add the following line to include routes"
    },
    {
      content: "Create a routes folder in the root of your project directory and inside that folder create an index.js"
    },
    {
      content: "inside ./routes/index.js we set up routes, I prefer separating route by folder so create a folder for address and users. With each of them having its own index.js"
    },{
      content: "In this next step, we create a middleware that checks if our JWT token is a valid token and it then returns the logged-in user's ID."
    },
    {
      content: "In the root of your directory create a folder called middleware and with this folder create a file called auth.js. Add the following code inside this auth.js file."
    },
    {
      content: "We'll add all functionality in a controller folder (Neatly structured and we are able to reuse functions much easily). Create a controller folder with an address and users subfolder with each its own index.js file."
    },
    {
      content: "Inside ./address/index.js we'd add routes for managing our address table, so I'd like to get all addresses, update an address (Rare case) or delete an address from our database."
    },
    {
      content: "Inside ./users/index.js we'd add routes for managing our users table, so I'd like to get all users if a user is authenticated to do so, allow users to view other users public data while admin has access to all CRUD options (Views users private info too). Note: All sensitive data either needs no capturing, be hashed, or be properly safeguarded. I'd like to allow logged-in persons to retrieve their personal user data, for new users to register, login (be authenticated), and update/delete user's data from the database."
    },
    {
      content: "Inside ./controller/address/index.js (Functionality)"
    },
    {
      content: "Inside ./controller/users/index.js (Functionality)"
    },
    {
      content: "Now that the route is all set up and working, you are now free to test out your new API (Finish product of this tutorial). Follow the comments in the code for brief explanations."
    },
    {
      content: "Thanks for your support and hope this article has enlightened you and taught you a few new things. Follow me for future tutorials."
    }
  ],
  graphics: [
    {
      source: require("../../assets/blogs/knex-express.jpeg")
    }
  ],
  gists: [
    {
      link: `<script src="https://gist.github.com/Cbazil/cf6bcdcd60d5761b6b3817c516965260.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/cb472efdfa3d028f1ff5742de342dd71.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/cb472efdfa3d028f1ff5742de342dd71.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/920e36acb6f95eac9693f06fccce6f0b.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/7d4063b252d9e04b1e2cfb59533dfac9.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/bd6cb3b8d5eafc78b7965a94633f042e.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/32121e3a7f99e9e8f0184ba95dbcbf79.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/640b697b8aa319f83969cafdadc8b90f.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/d043b36983e44232882e186821d0a737.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/d043b36983e44232882e186821d0a737.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/a3217dbdec39b78beaa573887968e389.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/fc7e319daa6e703466dcea8c5099d666.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/3e455486411ada88770225954a664717.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/9043717bcce42b5138bbe7fa2365f9da.js"><\/script>`
    }
  ],
  one_liner: [
    { 
      content: "npm init -y"
    },
    { 
      content: "npm i express knex pg helmet cors bcryptjs jsonwebtoken"
    },
    { 
      content: "node index.js"
    },
    { 
      content: "knex migrate:make default"
    },
    { 
      content: "knex migrate:latest"
    },
    { 
      content: "Knex migrate:rollback"
    },
    { 
      content:  `knex seed:make 01_address.js
                 knex seed:make 02_users.js`
    },
    { 
      content: "knex seed:run"
    },
    { 
      content: "app.use(‘/api’, routes);"
    }
  ],
  link: "https://medium.com/cbazil-dev/setting-up-a-simple-standard-knex-express-restful-api-with-postgresql-b4a62244520d"
}