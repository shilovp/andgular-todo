# DEMO - TODO List

This application developed using Angular 11.2.10 and Firebase.

## Functionality Overview

Main goal is to have user separated todo list with possibility of: 
- Register new user
- Login with existing user
- View previously added todos
- Add new todo
- Mark todo as completed
- View completed / current todos
- Sort todos by date or name (title)
- Search todos by the name (title)

The UI is responsive and works on Desktop and mobile devices. 

## Run and up 

In order to setup and run application locally you need to have installed: 
- Git (optionally, you can also download zip archive of a project)
- NodeJS (latest is best)
- npm  ( use `npm i -g npm` to update to latest version)

### Steps required to start application locally: 


### Clone this repository

`git clone https://github.com/shilovp/andgular-todo.git`

### Install dependencies 

`npm i`

### Serve it! 

`npm start`

My advice is to install Angular CLI `npm i -g @angular/cli`, in such case you can run application using: 

`ng serve`

### Open 

Navigate to `localhost:4200` in your browser to access UI and start using application.

## Usage

After opening an application you will see login window. If you have no account yet - press `register` link and registration form will be opened. 

For registration use: 
- Email 
- Password

There is no validations on that, as well as error handling - I see this as an improvement for future development.

After you will create a user - you will be redirected to todos-list UI. 

Press `📑` icon to add new todo. 

Press `👌` to save todo. It will appear in a list bellow. 

Press `👍` to mark todo as completed. 

Use `completed` link bellow to see completed todos

Use Date / Name column headers to sort todos. 

Use search to find your todo by the name. `now it requires full todo name`, this is also considered as an improvement for future. 

## DEMO

You can see live demo [HERE](https://todo-test-viveo.firebaseapp.com) . 

Demo is hosted with Firebase. 

## Technologies used

As a UI framework `Angular 11` was used. 
HTML and SASS were used for UI styling. 

I used flex box for the responsive design. I did not use any of CSS frameworks because there is no reason for that. 
I don't really believe in CSS frameworks, like Bootstrap, please refere to my other [repository](https://github.com/shilovp/customizable-flex-grid) where I am showing how we can reproduce Bootstrap grid system using sass and flex box with only 30 lines of code. 

Firestore was used as a database and Hosting from Firebase was used to host demo application. Authentication is used from Firebase to manage registration and authentication. 



## Tips for improvements

There is always something to improve in future work hours. 
Here is the list of what I see as the future improvements of the solution: 

- Error handling (auth, register, incuding of validation of input fields)
- Search - make it more flexible, to be able to put `like/start with/contains` conditions, it will allow to user to use just part of the name of todo. 
- UI adjustments - hide control elements while no todos displayed (such as sorting, search, show completed)
- Drag & Drop - I would add a possibility to drag items in a list, that's cool feature and will simplify user interactions with the list.
- After drag & drop - I would store the order of the list, so user will see same after login again or even from other device.
- I wanted to use `ngx`, but did not find a good room for this. Never worked with this before, but went throw docs and tried (successfully) store user state, but did used different approach for the final version  of the application.
