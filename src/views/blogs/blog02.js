module.exports = {
  title: "Setting up a quick JSON server (RESTful API)",
  headers: [
    {
      title: "Additional CRUD Commands"
    },
    {
      title: "POST Data"
    },
    {
      title: "PUT (Update) Data"
    },
    {
      title: "DELETE Data"
    }
  ],
  paragraphs: [
    {
      content: "Today we'll go into setting up a quick RESTful API using JSON server, It's honestly one on the fastest ways to set up a server, it's quite handy when working on small projects. So this tutorial would be perfect for those working on small portfolio projects or even code challenges."
    },
    {
      content: "We'll jump right into it, Please do NOTE that this tutorial will only focus on setting up a backend, so we won't have any client. I will be testing http requests using POSTMAN."
    },
    {
      content: "First let's create ourselves a folder where we'll handle our code. I have named mine “vanilla-json-server” and the IDE of my choice will be VSCODE."
    },
    {
      content: "In you terminal run the following command"
    },
    {
      content: "A package.json file will then be create for you."
    },
    {
      content: "Be sure to add the follow line on code just underneath the “test” script."
    },
    {
      content: "Create a server.js file and the db.json file within the root directory of your project. You could either create new files named server.js & db.json within your file explorer/IDE or run the following command in your terminal."
    },
    {
      content: "We'll need the json server dependency so lets install it with the following command."
    },
    {
      content: "Your package.json file should look like the following."
    },
    {
      content: "Let's setup our server. Inside our server.js file copy and paste the following code."
    },
    {
      content: "Here we setup our json-server linked to interact with our db.json"
    },
    {
      content: "database. In our database we'll have the following initial dummy data."
    },
    {
      content: "We have all the necessary files, data and installs needed. Now lets run out JSON server with the follow command."
    },
    {
      content: "Your Server should be running on port 3000, to test if it's actually running, point your URL to the “users” route either in browser or postman as shown below."
    },
    {
      content: "Now that our server is up and working, We can use the remaining CRUD commands like POST, PUT and DELETE. NOTE that we don't have any client so we'll use POSTMAN to do these basic CRUD functionalities."
    },
    {
      content: "Using the URL http://localhost:3000/users, Use the POST request in POSTMAN to post new data."
    },
    {
      content: "In the header tab you'll need to add “Content-type : application/json” to join our body fields as we post data to our database. Demonstration shown below:"
    },
    {
      content: "Now switch to the body tab to add the fields we'd like to send to our database."
    },
    {
      content: "Now to update our data be sure to add the id parameter to your URL like this http://localhost:3000/users/3 and lets update the JSON object we just posted. Firstly Change the POST request to a PUT request and remove the id field in the raw json object. Now we able to update any other field we desire, so I'll just update the username as show below."
    },
    {
      content: "Similar to the PUT request we'll need to add the id parameter to indicate which JSON Object to remove. So lets remove the JSON object we just updated with the URL http://localhost:3000/users/3. Remember to switch the PUT request to DELETE to make this work. Demonstration shown below."
    },
    {
      content: "Congrats you have reached the end of the tutorial. Hope this helps you out. Comments and feedback welcome, Always willing to improve :)."
    },
    {
      content: "Here's the LINK to project repo."
    },
    {
      content: "Let me know if you require a part 2, I could include a vanilla html & js , Vue or React client. Leave a comment ;)."
    },
    {
      content: "Feel free to Follow me on Twitter."
    },
  ],
  graphics: [
    {
      source: require("../../assets/blogs/json-server.png")
    },
    {
      source: require("../../assets/blogs/blog-pics/json-server1.png")
    },
    {
      source: require("../../assets/blogs/blog-pics/json-server2.png")
    },
    {
      source: require("../../assets/blogs/blog-pics/json-server3.png")
    },
    {
      source: require("../../assets/blogs/blog-pics/json-server4.png")
    },
    {
      source: require("../../assets/blogs/blog-pics/json-server5.png")
    },
    {
      source: require("../../assets/blogs/blog-pics/json-server6.png")
    }
  ],
  gists: [
    {
      link: `<script src="https://gist.github.com/Cbazil/100a8183d579d9c95e397eb1b2d0b033.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/b23d72f93493ac720b04618826aa2fc7.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/5aecd45855e447ea8f2199c5cad4a517.js"><\/script>`
    }
  ],
  one_liner: [
    { 
      content: "npm init -y"
    },
    {
      content: `"server": "node server.js"`
    },
    {
      content: "touch server.js db.json"
    },
    {
      content: "npm install json-server --save"
    },
    {
      content: "npm run server"
    }
  ],
  link: "https://medium.com/cbazil-dev/setting-up-a-quick-json-server-restful-api-e5535685c223"
}