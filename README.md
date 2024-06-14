# App URL
- netflixgpt-a966f.web.app


# NetFlix-GPT
- create react app
- install tailwind
- install react router dom
- Login page is made (header for login is also made)
- redirecting to browse page is made
- validation for login form is made
- firebase is installed and deploy to firebase
- installed react-redux and rtk
- made redux store for user login info
- made sign out sign in functionality fully right
- removed react.strictmode , because  of it useEffect() called twice
- restricted logged out user to access browse page(user cant go to browse page without login and if user is logged in user cant go to login page without log out)
- app routing is shifted to app.js component because of navigation
- made tmdb account and api key is made 
- made movie slice and added movie slice to appstore
- fetch movie from tmdb and added them to movie slice
- made MainContainer component fully functional using two sub component (videoTitle,videoBg)
- made two hooks useGetMovie , useGetTrailor
- embeded youtube video to website
- made two dummy data files (movieList.json , trailor.json) if tmdb website fetch doesn't work 



# Commands used
- npx create-react-app my-app
- npm install -D tailwindcss
- npx tailwindcss init
- configured tailwind.config.js
- npm i react-router-dom
- npm install firebase
- npm install -g firebase-tools
- firebase login
- firebase init
- firebase deploy
- npm i @reduxjs/toolkit
- npm i react-redux



# app features
- Login/Sign Up Page
    - Sign In/ Sign up form
    - redirect to Browse Page

- Browse (after authentication)
    - header
    - Main movie
        - trailor in background
        - title and description
        - movie suggestions
            - moviesList * N

- NetFlixGPT
    - searchBar
    - movie suggestions

# things learned
- robots.txt file ---> is a text file that tells search engine crawlers which pages or files they can or can't request from your site
- Search engine crawlers ---> also known as spiders, robots, or bots, are programs that automatically scan and index websites to help them appear in search engine results
- regex.test() ---> will test a string against a regex and returns true if string matches
- onSubmit ---> what to do when we submit form , this "e.preventDefault()" will not submit form
- useRef() --->  hook used to give reference
- useNavigate() ---> hook used to navigate between component
- createUserWithEmailAndPassword() ---> function provided by google firebase to create a User With Email And Password
- updateProfile() ---> function provided by google firebase to update a user profile which already exist
- signInWithEmailAndPassword() ---> function provided by google firebase to login a user with email and password
- signOut() ---> function provided by google firebase to signout a user
- onAuthStateChanged() ---> function provided by google firebase to get alert if user signin or signout, means if user is signin or signout this function will know about it
- iframe ---> embed youtube videos to html using this
