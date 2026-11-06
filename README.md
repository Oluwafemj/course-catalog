# Week 11 Assignment — TechyJaunt Course Catalog

## What you're building

A multi-page course catalog app using React Router. No external API — all your data lives in a local file that's provided for you. Your entire focus this week is **navigation and dynamic routes**.

---

## Design inspiration

Look at **[Scrimba](https://scrimba.com/learn)** for layout and feel — specifically how they display course cards on a listing page and how a single course detail page is structured. You are not copying it. Use it to understand what a real course catalog looks and feels like, then design your own version.

The wireframe in the `/design` folder shows you exactly what pages to build and what goes on each one. The look is entirely up to you.

---

## Pages to build

### 1. Home Page `/`
- A heading and short intro text
- A grid of all course cards
- Each card shows: course title, category badge, and duration
- Clicking a card navigates to that course's detail page

### 2. Course Detail Page `/courses/:slug`
- A back button that takes the user to the previous page
- The full course title, category, duration, and description
- A list of topics covered in the course
- If the slug doesn't match any course, show a "Course not found" message

### 3. Category Page `/category/:category`
- Shows only courses that match the category in the URL
- So `/category/Beginner` shows only Beginner courses
- A heading that reads "Beginner Courses" or "Intermediate Courses" depending on the URL
- Same card layout as the home page
- Clicking a card still goes to that course's detail page

---

## Navigation

Your app should have a navbar that appears on every page with:
- The site name/logo (links back to `/`)
- A "Beginner" link → `/category/Beginner`
- An "Intermediate" link → `/category/Intermediate`

---

## Your starter data

The file `src/data/courses.js` is already written for you. **Do not change it.** Your job is to read from it and display it correctly.

---

## React Router concepts this covers

By the time you submit, you should have used all of these:

- `BrowserRouter` — wraps your entire app
- `Routes` and `Route` — defines what component renders at each path
- `Link` — navigates between pages without a page reload
- `NavLink` — like Link, but can apply an active style to the current nav item
- `useParams` — reads the `:slug` or `:category` from the URL
- `useNavigate` — powers the back button on the detail page

---

## Getting started

```bash
npm create vite@latest course-catalog -- --template react
cd course-catalog
npm install
npm install react-router-dom
```

Then copy the `src/data/courses.js` file into your project.

---

## What to submit

A link to your GitHub repository. Make sure it has a live deployment link (Vercel or Netlify) in the repo description.

---

## What you will be assessed on

- All three pages render correctly
- The correct course or category loads based on the URL
- The back button works
- The navbar links navigate without a full page reload
- A "not found" message shows if an invalid slug is visited
- Your code is clean and readable
