const mainContent = new Vue({
  el: '#app',
  data: {
    title: 'This is the H1 Element',
    message: 'This is an example of V-Text directive. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    title2: 'This is the H2 Element',
  }
})
const secondaryContent = new Vue({
  el: '#app2',
  data: {
    title: 'This is an example of the v-bind directive on an image',
    img:{
      src: 'http://placekitten.com/800/500',
      alt: 'The alt text is dynamically added through Vue.',
    }
  }
})
