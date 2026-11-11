const root = document.documentElement;
const chain = document.getElementById('themeChain');
const backdrop = document.getElementById('roomBackdrop');
const roomContent = document.getElementById('roomContent');
const closeRoom = document.getElementById('roomClose');
document.getElementById('year').textContent = new Date().getFullYear();

// Pull the hanging chain down to switch the room lighting. A tap/click is also supported.
let chainStartY = null;
let didPull = false;
function switchTheme() {
  chain.classList.add('pulled');
  chain.setAttribute('aria-pressed', 'true');
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  chain.setAttribute('aria-label', `Theme is ${nextTheme}. Pull down to switch theme`);
  setTimeout(() => {
    chain.classList.remove('pulled');
    chain.setAttribute('aria-pressed', 'false');
  }, 650);
}
chain.addEventListener('pointerdown', event => {
  chainStartY = event.clientY;
  didPull = false;
  chain.setPointerCapture(event.pointerId);
});
chain.addEventListener('pointerup', event => {
  if (chainStartY !== null && event.clientY - chainStartY > 22) {
    didPull = true;
    switchTheme();
  }
  chainStartY = null;
});
chain.addEventListener('click', () => {
  if (didPull) { didPull = false; return; }
  switchTheme();
});

const rooms = {
  about: `<p class="room-kicker">ROOM 01 / ABOUT ME</p><h2 id="roomTitle">A little about <span>me.</span></h2><p>I'm Tarang Vaghasiya, a B.Tech Artificial Intelligence student at Swaminarayan University in collaboration with CodingGita, expected to graduate in 2030. I'm a student and aspiring frontend developer who enjoys turning ideas into clean, useful and engaging interfaces.</p><p>My interests bring together frontend development and UI/UX design. I like learning by building, experimenting with layouts and collaborating with teams.</p><p><strong>“Coding is my karma and consultancy is dharma.”</strong></p><div class="fact-grid"><div class="fact"><strong>2030</strong><span>EXPECTED GRADUATION</span></div><div class="fact"><strong>05+</strong><span>PROJECTS & CONCEPTS</span></div><div class="fact"><strong>02</strong><span>HACKATHONS</span></div><div class="fact"><strong>Surat</strong><span>GUJARAT, INDIA</span></div></div>`,
  skills: `<p class="room-kicker">ROOM 02 / MY TOOLKIT</p><h2 id="roomTitle">Things I build <span>with.</span></h2><p>Tools and technologies I'm learning and using to bring ideas to life.</p><div class="skill-grid"><div class="skill-box"><small>01 / STRUCTURE</small><strong>HTML5</strong></div><div class="skill-box"><small>02 / STYLING</small><strong>CSS3</strong></div><div class="skill-box"><small>03 / INTERACTION</small><strong>JavaScript</strong></div><div class="skill-box"><small>04 / PROGRAMMING</small><strong>Python</strong></div><div class="skill-box"><small>05 / DESIGN</small><strong>Figma & UI/UX</strong></div><div class="skill-box"><small>06 / WORKFLOW</small><strong>Git & GitHub</strong></div></div>`,
  projects: `<p class="room-kicker">ROOM 03 / SELECTED WORK</p><h2 id="roomTitle">Made with <span>curiosity.</span></h2><p>A few projects and concepts from my learning journey.</p><div class="project-grid"><article class="project-box"><p class="project-type">WEB DEVELOPMENT · FRONTEND</p><h3>BorrowBox</h3><p>A neighbourhood rental platform to discover and rent useful items nearby.</p><a href="https://borrowbox-app.vercel.app/" target="_blank" rel="noreferrer">LIVE PROJECT ↗</a><br><a href="https://github.com/CodingGita-Hackathon-Commitee/PixelRush-Team_Chakravyuh_SU" target="_blank" rel="noreferrer">GITHUB ↗</a></article><article class="project-box"><p class="project-type">UI/UX DESIGN · FRONTEND</p><h3>NearNest</h3><p>A local services discovery concept designed to connect people with nearby help.</p><span class="room-link">FIGMA LINK TO BE ADDED</span></article><article class="project-box"><p class="project-type">HACKATHON · FRONTEND</p><h3>UPSC AI Zone</h3><p>A redesigned learning experience created for the Orvo Innovation Hackathon.</p><a href="https://upsc-zone-ai-five.vercel.app/" target="_blank" rel="noreferrer">LIVE PROJECT ↗</a><br><a href="https://github.com/tarangvaghasiya/UPSE-ZONE-AI" target="_blank" rel="noreferrer">GITHUB ↗</a></article><article class="project-box"><p class="project-type">FRONTEND PRACTICE</p><h3>Amazon Clone</h3><p>A static frontend recreation to practise page structure and CSS styling.</p><span class="room-link">PERSONAL REPOSITORY LINK TO BE ADDED</span></article><article class="project-box"><p class="project-type">FRONTEND PRACTICE</p><h3>YouTube Clone</h3><p>A static interface recreation focused on layout, spacing and CSS.</p><span class="room-link">PERSONAL REPOSITORY LINK TO BE ADDED</span></article></div>`,
  journey: `<p class="room-kicker">ROOM 04 / THE JOURNEY</p><h2 id="roomTitle">Small steps. <span>Big energy.</span></h2><p>Hackathons, teamwork and milestones that are part of my learning journey.</p><div class="cert-grid"><article class="cert-box"><p class="project-type">CODINGGITA · 05–06 OCTOBER 2026</p><h3>PixelRush 2026</h3><p>Certificate of Participation — UI/UX + Frontend Hackathon. Team Chakravyuh; team leader.</p><a class="room-link" href="assets/pixelrush-2026-certificate.png" target="_blank">VIEW CERTIFICATE ↗</a><img src="assets/pixelrush-2026-certificate.png" alt="PixelRush 2026 certificate"></article><article class="cert-box"><p class="project-type">MYORVO TRAINING HUB · 29 OCTOBER 2026</p><h3>Home Design Hackathon</h3><p>Certificate of Participation — MyOrvo Innovation. Team Chakravyuh; team leader. Submitted an original homepage design for UPSC ZONE AI.</p><a class="room-link" href="assets/orvo-innovation-certificate.png" target="_blank">VIEW CERTIFICATE ↗</a><img src="assets/orvo-innovation-certificate.png" alt="Orvo Innovation Home Design Hackathon certificate"></article></div><div class="fact-grid"><div class="fact"><strong>B.Tech AI</strong><span>SWAMINARAYAN UNIVERSITY × CODINGGITA</span></div></div>`,
  contact: `<p class="room-kicker">ROOM 05 / SAY HELLO</p><h2 id="roomTitle">Have an idea? <span>Let's talk.</span></h2><p>Have a project, opportunity or just want to connect? I'd be happy to hear from you.</p><div class="contact-card"><a href="mailto:tarangvaghasiya.cg@gmail.com">tarangvaghasiya.cg@gmail.com ↗</a><a href="tel:+918780941181">+91 87809 41181 ↗</a><span>Surat, Gujarat, India</span></div><div class="socials" style="margin-top:25px"><a href="https://github.com/tarangvaghasiya" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/tarang-vaghasiya-5b5b40427/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://www.instagram.com/its_tarang.07" target="_blank" rel="noreferrer">INSTAGRAM ↗</a><a href="https://leetcode.com/u/tarang_vaghasiya_/" target="_blank" rel="noreferrer">LEETCODE ↗</a></div>`
};

document.querySelectorAll('.door-card').forEach(door => {
  door.addEventListener('click', () => {
    door.classList.add('opening');
    roomContent.innerHTML = rooms[door.dataset.room];
    backdrop.classList.add('show');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => door.classList.remove('opening'), 500);
  });
});
function closeCurrentRoom(){backdrop.classList.remove('show');backdrop.setAttribute('aria-hidden','true');document.body.style.overflow='';}
closeRoom.addEventListener('click', closeCurrentRoom);
backdrop.addEventListener('click', event => {if(event.target === backdrop) closeCurrentRoom();});
document.addEventListener('keydown', event => {if(event.key === 'Escape') closeCurrentRoom();});
