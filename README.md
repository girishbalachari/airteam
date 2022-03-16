#  AIRTEAM coding task
Evaluation Task: Pokédex

OVERVIEW 
Your task is to create and deploy a nicely structured web application, that’s scalable and easy to 
maintain, using Vue or React.  

The app is pokedex, it should list pokemon number and name, and displays some basic 
information about the pokemon to the side when it’s selected; image, name, type(s), stats(HP, 
Attack, Defence, Speed), and preview of their evolution. 


REQUIRED FEATURES 

1. Use the https://pokeapi.co/ API to get any pokemon information you need
2. Cache your API calls; we should not query the pokemon data a lot.
3. Smart pre-caching; when a user hovers over a pokemon pre-fetch his data and states, if a
user selects a pokemon pre-fetch that Pokemon's evolution if any.

SOME POINTERS

● The app should have a nice structure and architecture. For example, you should make it
easy to swap the api provider (we shouldn’t be dependent on its structure).
● The cache must be persistent.
● You don’t have to use a store, but a clear separation of state logic is required (hooks,
context api).
● Selecting a pokemon updates the url route
● Show loading indicators where it matters.
● Clean code, separation of concerns and clever use of design patterns will be regarded.
● Conformance to style guidelines is very important. Setup project with prettier and `eslint
● Proper use of version control is another very important matter.
● Unit/E2E tests are required and an integral part of the task.
● Using typescript is a plus

DELIVERY INSTRUCTIONS

● Create a private github or gitlab repo and deploy it using netlify, now or 
github page

-----------------------------------------------------------
Screenshot :

![airteam0](https://user-images.githubusercontent.com/74148459/158648695-a91d6a5c-b591-47d8-8813-8d7717a6e8db.jpg)
![airteam1](https://user-images.githubusercontent.com/74148459/158648731-6e4323db-eb22-4e80-9e7d-5de7fe3f2d01.jpg)

Software:

    I used HTML5, CSS3, Javascript and ReactJS as the frontend framework.  HTML and CSS have used 40% in this application development and some 10 to 20% of DOM is also used and more than 40% used by Javascript and React frameworks.

Files structure :  
   Regarding Files structures,  As you know i used React framework for User interface(UI).  By default it comes with folders such as public, src, node_modules and some general files.  In this coding,  the mail files which i used are as follows
public folder :  index.html
src folder: App.js, index.js
node_modules :  It has supporting files and a folder which helps to function this application.
I created and used files and folders to function this application such as the Components folder in src.  Files are Box.js, Footer.js Header.js, Home.js, Index.css, Pokedex.js
image.png
Box.js files are used to render the boxes.
image.png
Footer.js and Header.js are used to present standards of websites.
Home.js is used to control all components and place them in order in this web application.
Pokedex.js is used to present the poke icons description in detail.
Index.css which includes all my CSS details.

Application function  :

From this localhost website.  It will connect to the pokemon web api and fetch the data and display the details.  Regarding performance 
![airteam2](https://user-images.githubusercontent.com/74148459/158648855-9ece6246-817c-4772-a01f-37dafce7d43a.jpg)
