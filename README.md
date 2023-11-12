# Phase-2-Individual-Project-Frontend
Building a React single page application that uses a json-server to create a RESTful API for the backend.

## Project Description
The root of this project is a React single page application called, ScrapSync. This SPA allows its users to read stories and poems from various authors. The app also allows for users to create their own stories and poems, and share them on the platform.

## ScrapSync; Features
1. Stories section: where a list of the stoires is displayed by title, description and author's name.
2. Poems section: where a list of the poems is displayed by title, description and author's name.
3. Queue section: where a list of queued stories and poems is displayed by title, description, and type(story or poem).
4. Create section: where a user can create their very own work(story or poem) and post it to the platform.

## ScrapSync; User-stories
1. Users can view a list of stories and poems from their respective section on the site.
2. Users can queue a story or poem form the lists and add the to the queue.
3. Users can view a list of queued stories and poems from the queue section on the site.
4. Users can dequeue a story or poem from the queue.
5. Users can read a story or poem from the queue.

## ScrapSync; Launcing the Application
The backend for this project is contained on a separate github repository that is accessible via this link: https://github.com/jealc/Phase-2-Individual-Project-Backend.
-For the first step, clone and open both repositories (for the frontend and backend) onto VS code on your local machine.
-Load up the backend by running this command on your terminal: 'json-server --watch db.json --port 5000' to load up the JSON Server.
-Next load up the app by running this command on your terminal: 'npm start' and this will launch the app on localhost: 3000. (MAKE SURE TO 'cd' INTO 'my-app' BEFORE RUNNING THIS COMMAND).


Feel free to test out and use the app.
HAPPY SCRAPING!