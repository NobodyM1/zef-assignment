ZEF Assignment
--------------

Replicate the given design visually as closely as possible. For margins / 
paddings / etc. that are not defined in the design you can use your own 
estimation. Try to make the styles generic, i.e. don't style each element 
individually, instead style each widget/element with using generic classes.
Use variables for max width and other layout related sizes for easy changing
(Only the main layout parts, don't make everything like all the paddings and 
margins as variables).

# Design to replicate:

  https://projects.invisionapp.com/d/main#/projects/prototypes/10303166

  You should have invitation in your email to set up free account.

# Steps to get started:

  - Create a new branch for your work and push it to the remote.
  
    You can do commits and pushes to your branch as you wish, we only
    check the final code commit / push on Wednesday 22.2 22:00.

  - Setup your development environment by running: npm install

    After that you should be able to get live preview with: npm start

  - Setup your code editor to use stylelint and tslint plugins.

  - Implement the design into app.component.html and app.component.scss.

    You can naturally generate more components and use the typescript 
    file as well, but one component implementation is enough.

  - For the layout use the attributes provided by flex-layout library
    (fxLayout, fxFlex etc.).

    More info about the flex-layout library and its usage:

    https://github.com/angular/flex-layout

  - Use material library elements always when possible instead of pure
    html elements (input, button). The template has an example of using
    material button and input.

  - The application does not need to have any real functionality, i.e. the 
    plain UI implementation is enough. You can use the ngIf and click events 
    to change between views if such things are needed (example provided in the 
    code). Or if you are more familiar with angular 2 project then you can
    use even the router and separate components for separate views etc.

  - Try to follow the coding guidelines and best practices that are mentioned
    in the README file. If you have setup your code editor correctly it should
    use the tslint.json and stylelint.json configuration file and provide 
    coding style errors etc. for you.

