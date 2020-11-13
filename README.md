# eduworks-designer-developer
A short list of tasks for applicants applying for web designer developer at Eduworks.

[Vue.js](https://vuejs.org/)
[Vue.js cheat sheet](https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf)

# Prerequisites
This project requires Node.js 8.11 or higher
This project required NPM 5.0 or higher

# Install Vue Cli

$ npm install -g @Vue/cli
$ npm install -g @vue/cli-service-global

# install sass-loader and node-sass

$ npm install sass-loader
$ npm install node-sass


# Running your development environment
$ cd creative-dev-test
$ npm run serve

Your terminal should indicate the URL you can view your active application at. 


# Instructions 

## Create a full screen hero image with title and subtitle

### Full screen hero image
Find an image from unsplash that is free to use
Make a full hero section with a background image 

### Center title and subtitle 
Add the title "Eduworks Web Designer / Developer"
And the subtitle "Please complete the form below" 

## Create a form 
Create a small form to mock submit some data.

### inputs
- Have 4 imputs 
- Name 
- Email address
- Phone number
- Message

Bonus:
Use the included CSS library [Bulma](https://bulma.io/) to create the form components. 

### Submit button
Add a submit button.  When the user hits submit, processing indication should show on screen for a "realistic" time before displaying a thank you message AND the form information that was submitted. 

If you aren't storing information to the store, please store it in an object titled <yourName>

BONUS:
On submit store the form information the [vue Vuex store](https://vuex.vuejs.org/).

## Displaying a thank you message
You can display a thank you message however you would like. 

If you aren't showing the thank you message on a unique page /thank-you, then the message can be displayed on a dyanimically displayed section of the scren that shows when the the processing message is done. 

BONUS:
Use [Vue Router](https://router.vuejs.org/) to create a new page and redirect the user to that page on successful message send.  The page should have the thank you message and the form contents. The url that is used should be /thank-you

