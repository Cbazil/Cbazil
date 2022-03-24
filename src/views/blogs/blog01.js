module.exports = {
  title: "Looping through Arrays using VueJS",
  headers: [],
  paragraphs: [
    {
      content: "v-for looping for beginners, Learn the basics looping in vueJS."
    },
    {
      content: "To easily follow this tutorial, feel free to use Codepen or CodeSandBox."
    },
    {
      content: "To start off create you index.html file aswell as a main.js file"
    },
    {
      content: "In your html file start of with the default template, by typing an exclamation mark into your IDE(I'm using vscode), a good alternative is Atom or Webstorm."
    },
    {
      content: "Make sure to include the following script element/tag in between your head tags"
    },
    {
      content: "Vue JS uses the Dom to render data or component. To do so create a div in your body, with an ID."
    },
    {
      content: "Leave the script element inside the body, This will use your code in the main.js file."
    },
    {
      content: "Insert the following inside you html body tag"
    },
    {
      content: "Lets create our first vue instance, to render data on our webpage. Open the main.js file and we start our vue instances by typing new Vue show below, I'm also made myself an array and an array of objects as we will loop through them and have them rendered on or page. The data can be anything you'd like it to be, Enjoy."
    },
    {
      content: "With the above code, you call the div id with the “el” attribute as you'd do in css styling with the #(ID). All your data obviously goes in data"
    },
    {
      content: "Lets go back to the html file to render your data."
    },
    {
      content: "We will be using v-for to loop through the data, basically works like a for loop. We name the item of the data we want, in our case we want to render the name of our names inside a list. We do so by simply typing v-for=”name in names”, The “name” work represents the individual item(name) in our array data, Note that the name to select the item can be what ever name you want it to be except for the array name itself. The array of objects works the same, though its must deeper, and the only difference is that we call the object values with the . operator, in our case we called team using rugbyTeam.team to get the name of team. Check code below."
    },
    {
      content: "That's how to loop through arrays using vueJSfor looping."
    },
    {
      content: "Codesandbox playground link to sauce code: https://codesandbox.io/s/vue-looping-qwzoy"
    },
    {
      content: "Follow me on Twitter: https://twitter.com/cbazil Thanks for your time, and hope you've learnt something new."
    },
    {
      content: "Cheers."
    }
  ],
  graphics: [
    {
      source: require("../../assets/blogs/vue-loops.png")
    },
    {
      source: require("../../assets/blogs/blog-pics/vue-looping.gif")
    }
  ],
  gists: [
    {
      link: `<script src="https://gist.github.com/Cbazil/aef9314f6b7b23b924044615a03749f7.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/f666fc870985d1e60163f539367d2710.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/94880f60f140833bc64130f0ca0a5501.js"><\/script>`
    }
  ],
  one_liner: [],
  link: "https://medium.com/cbazil-dev/looping-through-arrays-using-vuejs-54fa9ff20ab0"
}