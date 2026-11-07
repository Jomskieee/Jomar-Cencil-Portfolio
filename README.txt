PORTFOLIO FOLDER - Jomar Samuel Cencil (version 3)

CHANGED IN VERSION 3: style.css (phone fix), index.html (re-checked)
- Phone fix: the page no longer scrolls sideways on phones (360 to 414 px wide)

CHANGED IN VERSION 2: index.html, style.css, script.js
- View CV opens in a window in the centre of the screen (phones open it in a new tab)
- Big bold headings (Poppins font) for the home page and the About me quote
- Formspree form ID already set in index.html (xvkkldnp)

FILES
index.html            page content (Home, About me, Education, Projects, Skills, Certification, Contact)
style.css             colors, fonts, spacing (green theme is at the top, in :root)
script.js             menu effects, light/dark button, screenshot viewer, contact form
resume.pdf            your CV (Download Resume and View CV buttons use this file)
photo.jpg             your photo
logo-nav.png          logo in the top menu
favicon.ico, favicon.png, apple-touch-icon.png   browser tab / phone icons
capstone-dashboard.jpg, capstone-heatmap.jpg     capstone screenshots

TEST ON YOUR COMPUTER
Open the folder in VS Code, install "Live Server", right-click index.html > Open with Live Server.
Needs internet for Bootstrap and the fonts.

CONNECT THE CONTACT FORM (Formspree)
1. Sign up at formspree.io and create a form that sends to your email.
2. Copy the form link (looks like https://formspree.io/f/abcd1234).
3. In index.html, search for YOUR_FORM_ID and replace it with your code.
4. After hosting, send yourself a test message and confirm the email Formspree sends you.
Until then, the form opens the visitor's email app instead.

HOSTING (GitHub Pages, free)
1. New public repository named Jomskieee.github.io
2. Upload everything INSIDE this folder (not the folder itself)
3. Settings > Pages > Deploy from a branch > main > /(root) > Save
4. Visit https://jomskieee.github.io (can take up to 10 minutes)
File names are case-sensitive online: keep photo.jpg, resume.pdf etc. exactly as they are.

UPDATING LATER
New CV: replace resume.pdf (same name). New photo: replace photo.jpg (same name).
