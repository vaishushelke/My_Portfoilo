# 🌟 Professional Developer Portfolio

A sleek, responsive, and modern developer portfolio built with **HTML5**, **CSS3**, **Bootstrap 5.3**, and vanilla **JavaScript**.

---

## 🚀 Features Included

- **Modern UI & Aesthetic**: Glassmorphism effects, smooth gradients, glowing badges, clean typography (Poppins).
- **Dark / Light Mode**: Instant toggle switch with persistent `localStorage` preference.
- **Dynamic Typewriter**: Hero section with rotating roles (Full Stack Developer, Frontend Enthusiast, UI/UX Designer, etc.).
- **Interactive Project Filtering**: Filter projects by categories (*All*, *Full Stack*, *Frontend / UI*, *Web Apps*).
- **Career & Education Timeline**: Clean vertical roadmap for work experience and degrees.
- **Certificates & Credentials**: Professional validation showcase with verification links.
- **Floating WhatsApp Quick Chat**: Floating pulsated WhatsApp button on bottom-right corner for direct client/recruiter inquiries.
- **Interactive Contact Form**: Direct form submit simulation + instant "Send via WhatsApp" button prefilling user message.
- **Responsive Navigation & Smooth Scroll**: Navbar auto-collapses on mobile when a link is clicked, with active section highlighting on scroll.

---

## 📁 File Structure

```
Portfolio/
├── index.html                  # Main portfolio webpage
├── css/
│   └── style.css               # Custom theme styles & responsiveness
├── js/
│   └── main.js                 # Interactive logic (typing, filters, theme toggle)
├── assets/
│   └── images/
│       └── avatar.svg          # Default illustrated developer avatar
└── README.md                   # Setup and customization guide
```

---

## 🛠️ How to Customize for Yourself

### 1. Update Name and Titles
In [index.html](file:///c:/Users/vaishushelke/OneDrive/Desktop/Portfolio/index.html):
- Change `Vaishnavi Shelke` to your name.
- Change page `<title>` and `<meta name="author">`.

In [js/main.js](file:///c:/Users/vaishushelke/OneDrive/Desktop/Portfolio/js/main.js):
- Edit the `words` array to display your desired rotating titles:
  ```javascript
  const words = [
    'Full Stack Developer',
    'Frontend Enthusiast',
    'UI/UX Designer'
  ];
  ```

### 2. Update WhatsApp Number & Social Links
In [index.html](file:///c:/Users/vaishushelke/OneDrive/Desktop/Portfolio/index.html):
- Update the WhatsApp links with your country code and phone number (digits only, e.g. `919XXXXXXXXX`).
- Update the GitHub and LinkedIn profile links with your profile URLs.
- Update the displayed email address and `mailto:` links with your active email address.
- Update the phone and education details in the About and Career Journey sections as needed.

In [js/main.js](file:///c:/Users/vaishushelke/OneDrive/Desktop/Portfolio/js/main.js):
- Update the `phone` value used by the WhatsApp contact button to match the number in `index.html`.

### 3. Add Your Photo & Resume
- Place your photo into `assets/images/my-photo.jpg` and update the `src` attribute of the `<img class="hero-avatar-img">` in `index.html`.
- Keep your resume PDF at `resume.pdf` in the project root; the "Download CV" button downloads it as `Vaishnavi-Shelke-CV.pdf`.

### 4. How to View Locally
Simply double-click [index.html](file:///c:/Users/vaishushelke/OneDrive/Desktop/Portfolio/index.html) to open it in Chrome, Edge, Brave, or any browser, or use VS Code's **Live Server** extension!
