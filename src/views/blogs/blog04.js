module.exports = {
  title: "Hosting your backend API(JSON-server) on Heroku.",
  headers: [],
  paragraphs: [
    {
      content: "Hey there everyone, today I'd like to demonstrate how to host your backend server to work online. Just note that we can basically host any backend API we built to be accessible for online use among your app/API users. Instead of using a popular no-SQL or SQL database which is recommended in the production stage of your application, We'll be hosting our JSON-server from the article Setting up a quick JSON server (RESTful API) | by Chad Bosch | Cbazil.Dev | Medium I've provided."
    },
    {
      content: "Clone my repo if need be: https://github.com/Cbazil/vanilla-json-server-part-1.git"
    },
    {
      content: "Once cloned install the dependency “json-server” and we'll be all set."
    },
    {
      content: "To host our app we'll use Heroku, one of the best free options out there if not the best. Visit https://www.heroku.com/ to get started, Make sure you have an account. You have a limit of 5 projects on Heroku. Once you have reached your dashboard. Locate and click “NEW”"
    },
    {
      content: "The next window will be where you set up your app."
    },
    {
      content: "Add a name for your app, mine will be called “json-server-heroku-hosting” and click “create app” once you are satisfied with your app name and hosting region we can continue."
    },
    {
      content: "Now let's download the Heroku CLI for the relevant system you operating with."
    },
    {
      content: "Link: The Heroku CLI | Heroku Dev Center"
    },
    {
      content: "Once we have the CLI installed let's hop back onto the project directory."
    },
    {
      content: "The server is already set up for production. Because we added the following code already so we are all set for hosting our app."
    },
    {
      content: "JSON-server lets us import its package through nodeJS npm, which is a plus as we can now make our own server hence the fact that we can host it on Heroku."
    },
    {
      content: "process.env.PORT is the port the host provides us, our Heroku port will be the URL Heroku provided our app."
    },
    {
      content: "https://json-server-heroku-hosting.herokuapp.com will be in place of http://localhost:3000 (Use URL heroku gives you)"
    },
    {
      content: "Let's host our application. First, execute the following."
    },
    {
      content: "You'll be asked to verify your login via your default browser."
    },
    {
      content: "Press any key besides q to continue logging in."
    },
    {
      content: "Once logged in. Initialize git file. (Pushing code on remote repository)"
    },
    {
      content: "Now let's add the repository:"
    },
    {
      content: "replace “json-server-heroku-hosting” with your app name you created on Heroku."
    },
    {
      content: "Add everything “.” from the project/directory."
    },
    {
      content: "Commit addons"
    },
    {
      content: "Push and deploy to Heroku"
    },
    {
      content: "Our application is now deployed and live on Heroku :)"
    },
    {
      content: "Click on “Open app” to view the result, which is the URL to your now, live server."
    },
    {
      content: "Save URL and use it instead of localhost, should work the same, the difference is that it's hosted live on Heroku :)"
    },
    {
      content: "Stay tuned for more, might do a Knex.js tutorial next(for backend). If you're interested leave a comment. Cheers!"
    }
  ],
  graphics: [
    {
      source: require("../../assets/blogs/heroku-host-json-server.png")
    },
    {
      source: require("../../assets/blogs/blog-pics/hosted-json-server1.png")
    },
    {
      source: require("../../assets/blogs/blog-pics/hosted-json-server2.png")
    },
    {
      source: require("../../assets/blogs/blog-pics/hosted-json-server3.png")
    },
  ],
  gists: [
    {
      link: `<script src="https://gist.github.com/Cbazil/b23d72f93493ac720b04618826aa2fc7.js"><\/script>`
    }
  ],
  one_liner: [
    { 
      content: "npm install json-server"
    },
    { 
      content: "heroku login"
    },
    { 
      content: "git init"
    },
    { 
      content: "heroku git:remote -a json-server-heroku-hosting"
    },
    { 
      content: "git add ."
    },
    { 
      content: `git commit -am "hosting a json-server"`
    },
    { 
      content: "git push heroku master"
    }
  ],
  link: "https://medium.com/cbazil-dev/hosting-your-backend-api-json-server-on-heroku-1a3b9b3d8f82"
}