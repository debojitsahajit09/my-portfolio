# Debojit Saha Jit — Original Personal Website

Multi-page personal archive with animated route transitions, circular centered portrait, project detail pages, serial achievements, clickable achievement images, experience, competitions, life/education/skills, contact and dark mode.

## Edit everything
Open `data/site.ts`. This is the main content database.

## Add your photo
Copy your photo into `public/images/`, for example `debojit.jpg`.
Then change:
`photo:"/images/profile-placeholder.svg"`
to:
`photo:"/images/debojit.jpg"`

Project images and achievement images work the same way.

## Resume
Put `resume.pdf` inside `public/documents/`.

## Run
npm install
npm run dev

## Deploy
Push to GitHub → import into Vercel → deploy → connect your domain.

Do not put passwords, API keys or secrets in the repository.
