# COMP3340 Project backend

## Requirements

* [Node.js](https://nodejs.org/en/download/)
* [MongoDB](https://docs.mongodb.com/manual/installation/)

Once you've got both installed, start up a mongodb service.

## Setup

Clone the repo and change directory
```
git clone https://github.com/COMP3340-16/backend.git
cd backend
```

You need to make a `.env` file for this to work, I have an example in `.env.example'
```
cp .env.example .env
```

Go into the `.env` file, make sure the database uri is correct and enter any random string for the `JWT_SECRET`. 

Now, install dependencies with
```
npm install
```

Populate the database initially (this only needs to be run once on initial setup). If all goes well you should see recipe tites output and finally `done.`
```
npm run init_recipes
```

Create the admin user, so you can log in as admin. 
```
npm run init_admin
```

Okay let's start it up
```
npm run start:dev
```

This and the web-client need to be running together. Once you have the web-client running go to [localhost](http://localhost:3000) to view the app.
