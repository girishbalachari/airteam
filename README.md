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
