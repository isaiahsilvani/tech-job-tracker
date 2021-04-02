# TECH HUNTERS, A JOB HUNTING APP
### Thank you for checking out my application!
## Search for tech jobs [now!](https://tech-hunters.herokuapp.com/)
## Wireframe
![Tech Hunters Wireframe](https://i.imgur.com/Wss3fMZ.png)

## Planning Materials
[Whimsicla Link](https://whimsical.com/job-tracker-5qTvCiwQahTBm2ZLGzPu9H)
## Introduction
This application allows users to search through Github's Job API by inputing specific keywords, location, and whether or not they want a full-time job. In addition, users can also choose jobs that they would like to track and keep tabs on the progress for each individual job they are pursuing. There is also a message board so that users can communicate with each other and encourage one another.
## Instructions
In order to use the full functionality of this app, users must be signed into Google. If not signed in, users can only use the job search functionality. When a logged in user finds a job they're interested in, the can click "Show Details" to see the full job description and other details. Users can then "Track" the job from the Show Details page, and it will be stored in the user's Jobslist. Users can then go to the tracker page and set the status of their progress for that particular job. In addition, users can also use the message board to share information and provide encouragement

 ## User Experience
 ### User Persona
 Jake just graduated from a Coding Bootcamp, and is now looking for his first tech job. Jake sends his resumes out on Linkedin, Indeed, and other job boards but is not getting any responses back. Jake then decides to try finding a job using Tech Hunters, which searches in a more obscure job board so there is less competition. Jake keeps track of his progress using the Tracker, from "Applied" all the way up to "Offer Accepted". When Jake lands his dream job using Tech Hunters, he goes to post about his success on the Message Board to encourage others to keep hunting!

## Application Screenshots
![Application Screenshot 1](images/screenshots/screenshot1.png)
![Application Screenshot 2](images/screenshots/screenshot2.png)
![Application Screenshot 3](images/screenshots/screenshot3.png)
## Technologies Used
ExpressJS, MongoDB, NodeJS, CSS3, HTML5
## Accessiblity
This web application features a Mobile Design First approach so that anyone with a device a browser and internet connection can play my game. Furthermore, the webAim contrast checker was used when selecting the various colors to make this a very pleasant user experience.
## Pseudo-code=
1. Set up express generator, mongoDB + mongoose, and google OAuth
2. Create header partial that will contain all header information such as title and scripts, as well as a NAV BAR (Jobs, Tracker, Reviews, Profile)
3. Create footer partial that will contain copyright and contact information
4. Set router/controller action for Jobs in Nav Bar (index all jobs)
5. Create jobs index view. Add UI for user to add search criteria
    1. Create UI (form with inputs for keywords, location, checkbox's for part time and full time, submit button)
    2. Define path (figure out get ${search paramaters})
    3. Define router/controller
    4. Pass req.body.properties, to axios to retrieive job list information
    5. Render and pass the JSON data created from the user's search criteria to the index "jobs" view
6. Make job results clickable to get a SHOW DETAIL page about that specific job. On that specific job detail page, display JOB TITLE, COMPANY, LOCATION, TYPE, DATE CREATED, DESCRIPTION, IMG URL of that specific job document (if applicable), 
7. 2 buttons will be displayed at the bottom as well. One to either add or remove a job from a user's job list if that job _id exists in a user's job list already, another to leave a review on the job/company posted
8. When clicking add/remove job list, should add or remove that specific job from a user's jobs list
9. When clicking review, render a new form for the user to fill out and post a review on the company
10. Reviews should be posted on a seperate page so the mobile view UI stays compact and simplistic
11. Set up route for Job Tracker UI on the nav bar. Display a list of the jobs in a user's job lists. Have options to update the status of these jobs, some information like Job Title, Company, Location, Date Created, FT or PT, and an option to view that specific job to get the full description of it.
12. Make button functionality for deleting a job
13. Make functionality for updating a job status
    1. Status options: Interested, Applied, Interviewing, Waiting for Decision, Offer Accepted, Offer Declined, Rejected
14. Make functionality for Reviews route. Basically, display a list of all the reviews that are currently in the Reviews database. Since all users will be accessing this resource to view it, it would probably be best to reference that data rather than embed it within a job
    1. ICEBOX: Make Reviews filterable and set the order however the user wants
15. Make functionality for Profile route 
    1. User will have option to set their Username, and view their basic information such as name and email address.
        1. ICEBOX: Turn the Job Tracker app into a social network of job seekers by adding USER LIST, VIEWING INDIVIDUAL PROFILES, and having more options to set a user's linkedin or github URL


## Next Steps
- Create social network functionality for Tech Hunters
- Create individual profile views
- Create a live chatroom


## Credits

#### Styling
[CSS Cog Background](heropatterns.com)


