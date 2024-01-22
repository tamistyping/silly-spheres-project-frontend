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
I decided to split my day into 3 parts. Models, Controllers & Routes.
<br>
I started off with my models:
<img width="456" alt="Screenshot 2024-01-22 at 08 44 02" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/95f2ab6a-5770-40cb-97e0-7ae7bcfa2b82">

Then I created my controllers where I implemented the CRUD functionalities:
<img width="782" alt="Screenshot 2024-01-22 at 09 11 00" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/88ba1b65-7157-43f3-a0ed-ffec4a91bded">

I finished off the day by creating my routes for each model:
<img width="685" alt="Screenshot 2024-01-22 at 09 12 01" src="https://github.com/tamistyping/silly-spheres-project-frontend/assets/114356636/56b32115-2ec0-4321-afdd-69599ac8f7df">

<h4>Day Three</h4>

