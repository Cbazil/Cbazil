module.exports = {
  title: "Reusable components using Vue & Vuetify.",
  headers: [],
  paragraphs: [
    {
      content: "Hi there, today we'll be making reusable input components, Please note that I'll be using the vuetify input components, other UI frameworks should work the same or quite similar. Even with the stable release of Vue 3, we'll be using Vue 2, due the reason that all there UI Vue frameworks are still in the process of integrating Vue 3 into their Framework, hence why it fails when try adding vuetify to Vue."
    },
    {
      content: "Be sure you have the Vue CLI installed. If not, execute the follow command in your terminal."
    },
    {
      content: "Be sure you have the Vue CLI installed. If not, execute the follow command in your terminal."
    },
    {
      content: "Continue pressing Enter until the setup is completed. Then move into the root directory of the Vue app we just created with the following comma"
    },
    {
      content: "Use the following command to add vuetify to our Vue app."
    },
    {
      content: "Now that we have installed everything we need, run our app with the follow command."
    },
    {
      content: "You'll be met with the default vuetify app as show below."
    },
    {
      content: "Now it's time to clear our code so that we can start making reusable components. Do the follow steps."
    },
    {
      content: "Delete the HelloWorld Component."
    },
    {
      content: "Remove the HelloWorld component and import from the App.vue file."
    },
    {
      content: "Create New Component called Header.vue (App-bar) in components folder. Add the following code to that component."
    },
    {
      content: "Inside your App.vue change the code to include the following"
    },
    {
      content: "Create a sub folder called inputs in your components folder. Here we will keep all our reusable components."
    },
    {
      content: "You might be asking yourself what's the point of reusing components? It's very important to be productive and save yourself some time and keep your code a bit cleaner. Consider recycling your components when you see a constant need for it through out your app. By just passing through the necessary data, You'll be all sorted and won't need to hard code the same component all the time."
    },
    {
      content: "Let's now create a few basic input fields and make of them reusable components."
    },
    {
      content: "Create the following Files in our inputs folder"
    },
    {
      content: "TextField.vue"
    },
    {
      content: "SelectField.vue"
    },
    {
      content: "RadioField.vue"
    },
    {
      content: "TimeField.vue"
    },
    {
      content: "DateField.vue"
    },
    {
      content: "Inside TextField.vue include:"
    },
    {
      content: "Inside SelectField.vue include:"
    },
    {
      content: "Inside RadioField.vue include:"
    },
    {
      content: "Inside TimeField.vue"
    },
    {
      content: "Inside DateField.vue include:"
    },
    {
      content: "All the Data that gets passed through the component can of course be different hence why it's a great idea to reuse your components. One core component used as a template to output different data based on what gets sent through."
    },
    {
      content: "In all the examples above we can see that we have passed data via props (name can differ by preference)."
    },
    {
      content: "We're using the Created() Vue Life Cycle Hook to avoid any duplication on any data name (In this case fields). Fields get cloned and is renamed field to avoid any warning/error messages in browser console."
    },
    {
      content: "Add all changes to the App.vue File below:"
    },
    {
      content: "In the above App.vue file we have imported the 5 input components from the ./components/inputs directory. We have also added the data we'd like to pass through as examples. The scaling of this can go quite deeper and you can definitely play around and get creative, As I myself have passed much complicated data through like an array of objects where the data passed through looks like the following:"
    },
    {
      content: "Noticed how we passing our data through the components as fields. That being said we can have as many <TextFields :fields=”<different_data>”/> in our file without taking up too many lines of code, same goes with the other input component."
    },
    {
      content: "Final Output should look like the following:"
    },
    {
      content: "That's how you make reusable components!, just remember all components work more or less in similar ways so don't over think yourself, okay. Feel free to pop a question if stuck."
    },
    {
      content: "Hope this lesson helped. Stay tuned for more tutorials."
    },
    {
      content: "Cheers."
    }
  ],
  graphics: [
    {
      source: require("../../assets/blogs/reuse-comps.jpeg")
    },
    {
      source: require("../../assets/blogs/blog-pics/reuse-comps1.png")
    },
    {
      source: require("../../assets/blogs/blog-pics/reuse-comps2.jpeg")
    },
    {
      source: require("../../assets/blogs/blog-pics/reuse-comps3.png")
    }
  ],
  gists: [
    {
      link: `<script src="https://gist.github.com/Cbazil/93d3a45986402dc99e45260bf08d1dd1.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/3d5eff2fef1280c8c44e963a776c40d1.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/93a1888f6cb9ef432cb0734fbadb7743.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/fda00a9af9c9ada458bb7a6c40851d17.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/6ba190efa5ab80b2168ee5becf8749eb.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/be433a2bf4cf0483b5eea928eeed2e01.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/006965f54334165ca5fe73dcd60726c2.js"><\/script>`
    },
    {
      link: `<script src="https://gist.github.com/Cbazil/bf6e99b4a658bc53e72827c76cf5bd9a.js"><\/script>`
    }
  ],
  one_liner: [
    { 
      content: "npm install -g @vue/cli"
    },
    { 
      content: "vue create <app-name>"
    },
    { 
      content: "cd <app-name>"
    },
    { 
      content: "vue add vuetify"
    },
    { 
      content: "npm run serve"
    },
    { 
      content: "touch TextField.vue SelectField.vue RadioField.vue TimeField.vue DateField.vue"
    },
    { 
      content: "survey[0].section[0]"
    },
  ],
  link: "https://medium.com/cbazil-dev/reusable-components-using-vue-vuetify-fbb46601a83b"
}