module.exports = {
  title: "Hosting your backend API(JSON-server) on Heroku.",
  headers: [],
  paragraphs: [
    {
      content: "Once cloned install the dependency “json-server” and we'll be all set."
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
    {
      source: require("../../assets/blogs/blog-pics/hosted-json-server4.png")
    }
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