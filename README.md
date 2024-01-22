<h1>Silly Spheres</h1>

<h2>Description</h2>
Silly Spheres is a space exploration website where users can create, edit and delete planets!

<h2>Links</h2>
Website link: https://sillyspheres.netlify.app/ <br>
Backend link: https://github.com/tamistyping/silly-spheres-project-backend

<h2>Project Brief</h2>
- Have at least 2 data entities in addition to the 'User' Model. <br>
- Use OAuth authentication.
- Implement basic authorization that restricts access to features that need a logged in user in order to work. <br>
- Have fully functional CRUD data operations. <br>
- Be styled such that the app looks and feels similar to apps we use on a daily basis. <br>
- Be deployed online. <br>
- Consume a third-party API (bonus).

<h2>Process</h2>

<h4>Day One</h4>
I started off by designing what my landing page and explore would look like. <br>
<br>
I wanted my landing page to be simple, yet visually appealing. I decided to display a third party API from NASA on the landing page, where it would show a different picture everyday (APOD - Astronomy Photo of the Day):
<img width="676" alt="Screenshot 2024-01-22 at 08 36 59" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/cd9eb8a0-c28c-4152-8bfd-6ee539f0a45e">
<br> <br>
I wanted the explore page to be fun for the User. Once explore was clicked, it would showcase all the Stars. Then, once a Star is clicked, it would take the User to the planets orbitting that specific Star. The user is then able to click on any planet to view information about:
<img width="1059" alt="Screenshot 2024-01-22 at 08 37 19" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/880fe04a-df31-46ed-be92-99779ba1a2d9">
 that certain planet.

<h4>Day Two</h4>
I decided to split my day into 3 parts; Models, Controllers & Routes.
<br> <br>
I started off with my models: <br>
<img width="456" alt="Screenshot 2024-01-22 at 08 44 02" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/95f2ab6a-5770-40cb-97e0-7ae7bcfa2b82">
<br>
Then I created my controllers where I implemented the CRUD functionalities:
<img width="782" alt="Screenshot 2024-01-22 at 09 11 00" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/88ba1b65-7157-43f3-a0ed-ffec4a91bded">

I finished off the day by creating my routes for each model:
<img width="685" alt="Screenshot 2024-01-22 at 09 12 01" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/56b32115-2ec0-4321-afdd-69599ac8f7df">

<h4>Day Three</h4>
After completing my backend, I started on my frontend.
<br>
I created seperate vue pages for Stars, Planets, SinglePlanet and fetched the relevant data. <br>
<img width="717" alt="Screenshot 2024-01-16 at 16 39 18" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/330fc19b-db6e-4095-b8cb-fc18597e2f20">
<br>
<img width="613" alt="Screenshot 2024-01-22 at 10 37 48" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/19f13994-f0d2-46a1-b3dc-0ef6c69fb9d8">

I finished my Day Three tasks earlier than expected, so I created a basic form to collect data from my frontend for my 'POST' request to add a new planet. 
<br>
<img width="716" alt="Screenshot 2024-01-16 at 16 39 08" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/459f93e1-8d79-46e3-9933-af44975aa023">


<h4>Day Four</h4>
I spent my fourth day fetching data from NASA's APOD API to my home page & also implementing Google User Authentication. I made sure all the app functionalities were working so I could dedicate my final day to just making everything aesthetic. 
<br>
<img width="622" alt="Screenshot 2024-01-22 at 10 39 06" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/7a5201cb-f185-4056-a239-7c68ca5690c2">

<h4>Final Day</h4>
After spending a whole day playing around with Bootstrap & CSS, I aligned my app to my initial design.
<br>
Home: 
<img width="1017" alt="Screenshot 2024-01-22 at 10 44 43" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/65f19769-2ade-48f6-9483-3cf7f3dbb991">
<br>
Explore (stars):
<img width="1013" alt="Screenshot 2024-01-22 at 10 48 34" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/963bce31-9f39-442b-ad16-5db8a7182826">
<br>
Explore (Planets):
<img width="1003" alt="Screenshot 2024-01-22 at 10 48 50" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/99765236-acd4-42bd-b22c-dcf8152f76bf">
<br>
Explore (singlePlanet):
<img width="1005" alt="Screenshot 2024-01-22 at 10 48 59" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/cca11bd5-9a94-437a-91f6-63ecfad3ba38">
<br>
Create (only (ifLoggedIn)):

<img width="976" alt="Screenshot 2024-01-22 at 10 49 13" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/bd9b4a57-2f2d-417e-8c06-eb42b1b169cf">

<br>
I also implemented a cool favicon (rocket) by linking the icon from the assets to my index.html. 

<br>

<h2>Challenges</h2>
- I tried to implement a sort function where planets could be arranged in size / alphabetical order, but I ran out of time.
<br>
- I feel like my plan could've been a bit better as I underestimated how long styling/designing would've taken me. 
<br>
<h2>Wins</h2>
- My main win has been becoming more confident using the MEVN (MongoDB, Express.js, Vue.js, Node.js) stack.
<br>
- MongoDB became crucial for managing and storing my Planets & Stars.
<br>
- Express allowed me to build a scalable server-side application, handling HTTP request.
<br>
- Developing the frontend was my favourite part. I enjoyed playing around with the interface, trying to align it with my initial plans.
<br>

<h2>Future Improvements</h2>
- Input a sort button on my planets view page.
<br> 
- Allow users to access their profile and edit their details.

