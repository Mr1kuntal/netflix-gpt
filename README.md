# App URL
- https://testproject-b7b93.web.app


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
- made secondary container and fetched more movies from tmdb
- updated movieSlice and useGetMovie
- added movieCard and movieGenre
- made toggle feature for gpt page
- made gpt search bar
- made gpt page multilingual
- added gpt Slice and language slice to redux store
- made language constants for changing language of gpt page
- installed openai library for using openai api
- used pawan/osman custom openai apis (because openai official api is paid)
- text animation for gpt generated result
- made tv show search bar for searching tv shows 
- made tv show card to show searched result
- used tvmaze.com api to search for tv shows and fetching data (beacause tmdb api in not working in india)
- dispatching hard coded data for movies (beacause tmdb api in not working in india)
- deleted all remove actions from movieslice because it is not useful
- added search input action to movieSlice to add searched tv show data to store
- added search input initial value for search input action to display some initial tv shows on page
- added redirection to all images on gpt page (they will redirect to imdb)
- done memoisation so that component don't have to fetch data again and again
- added security to all api keys 
- removed configFileForFireBase.js from gitignore
- done firebase setup again to host website
- website is hosted successfully and everything is working fine and checked it on pc and mobile
- added redirect to youtube for movie card 
- update trailor.json file 


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
- npm i openai



# app features
- Login/Sign Up Page
    - Sign In/ Sign up form
    - redirect to Browse Page

- Browse (after authentication)
    - header
    - Main Container
        - trailor in background
        - title and description
    - Secondary Conatiner
        - movie genre
            - moviesCard * N

- NetFlixGPT
    - GPT_Search_Bar
        - text generation field
    - movie search bar
        - searched movies

    

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
- how to make website multilingual
- how to do text animation like chatgpt
- how to use chaptgpt apis
- how to open new window for redirection links ---> window.open()
- memoisation of components
- how to make api key secure ---> process.env (create file named ".env" and add "REACT_APP_" in front of variable name)
- how to make responsive website using tailwind

