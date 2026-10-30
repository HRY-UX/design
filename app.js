// Project summaries and metadata. Some projects and artwork still use placeholders.
const projects = [
 {"name": "Black Forest Decor", "category": "E-commerce / Branding / UX/UI", "image": "black-forest-decor.svg", "role": "UI/UX design · Visual design · Responsive web design", "copy": "Black Forest Decor is a retailer of rustic furniture, lighting, and home accessories for cabins, lodges, and homes. The team sought to modernize an outdated shopping experience, with particular attention to UI and visual design. With a furniture designer at the helm, the CEO placed a strong emphasis on design details and how typography, imagery, and layout worked together.", "solution": "The redesign introduced a shared website template for Black Forest Decor and its sister site, creating a consistent foundation while allowing each brand to retain its identity. Brand elements were refined for digital use, with stronger contrast, clearer typography, more readable text sizes, and layouts tailored to mobile shopping. The CEO responded positively to both the new visual direction and the implemented website.", "deliverables": "Reusable website template for Black Forest Decor and its sister brands, with brand-specific styling · Responsive page designs · Digital brand refinements", "gallery": ["Homepage", "PLP — Product listing page", "PDP — Product details page", "Checkout"], "launch": "2026"},
 {"name": "Hawks", "category": "Class booking platform / E-commerce / Branding / UX/UI", "image": "hawks.svg", "role": "UX design · UI design · Brand application · Responsive web design", "copy": "Hawks needed a more intuitive class-booking experience. Its outdated website and disjointed checkout made the journey from discovering a class to completing a booking feel cumbersome. A new brand direction, developed by another agency, also needed to be translated into a cohesive digital experience.", "solution": "The redesign connected the full booking journey, from the landing page through class discovery and selection to final checkout. The new brand direction was applied across the website’s UI, aligning typography, color, and layout with a clearer booking flow. Mobile layouts received particular attention to make exploring classes and completing a reservation easier on smaller screens.", "deliverables": "End-to-end booking flow · Checkout flow upgrade · Responsive page designs · Website UI aligned with the new brand", "gallery": ["Homepage", "PLP — Product listing page", "PDP — Product details page", "Checkout"], "launch": "2026"},
 {"name": "Putnam", "category": "E-commerce / UX/UI", "image": "putnam.svg", "role": "UX design · UI design · Interaction design", "copy": "Putnam offers ladders and related hardware for furniture and interior projects. The website needed clearer paths from product discovery to purchase, while preserving the brand’s established identity and visual aesthetic. A key design challenge was helping customers configure a ladder to suit their individual needs.", "solution": "The redesign simplified navigation and reworked the shopping journey to connect browsing, product selection, and checkout more clearly. An interactive configuration flow was designed around a 3D model, allowing customers to customize and visualize their ladders as part of the purchase journey. The interface retained Putnam’s visual character while making complex product choices easier to understand.", "deliverables": "Navigation structure · E-commerce user flows · Interactive 3D ladder configurator design · Website page designs", "gallery": ["Homepage", "PLP — Product listing page", "PDP — Product details page", "Checkout"], "launch": "2026"},
 {"name": "viva voce", "category": "E-commerce / UX/UI", "image": "viva-voce.svg", "role": "UX design · UI design · Responsive web design · Prototyping", "copy": "Viva Voce is a size-inclusive fashion marketplace and community connecting shoppers with independent brands, with a focus on women-led creativity and more conscious fashion practices. Starting from the ground up, the project aimed to create a shopping platform that communicated the breadth of its catalog and its commitments to inclusion, community, and sustainability. Supporting confident purchase decisions and improving conversion were central goals.", "launch": "2026", "solution": "Close collaboration with the brand owner shaped the platform’s requirements and design direction. Research explored how website features could support size-inclusive shopping, brand discovery, and communication of the platform’s values. These priorities informed a responsive experience that brought product browsing and brand storytelling together. High-fidelity mockups established the design, followed by a rapid interactive demo to demonstrate the shopping journey. The complete responsive platform design was delivered within approximately 160–200 design hours, supporting the website’s 2026 project launch.", "deliverables": "User research to inform the marketplace experience · Full responsive platform design · High-fidelity mockups · Interactive shopping-flow demo", "gallery": ["Platform design — 01", "Platform design — 02", "Platform design — 03", "Platform design — 04", "Platform design — 05", "Platform design — 06", "Platform design — 07"]},
 {"name": "Tzero", "category": "Corporate Website / UX/UI / Branding", "image": "tzero.svg", "role": "UX research and strategy · Information architecture · Branding · UI design · Interaction design · Prototyping", "copy": "tZERO is a financial technology company building infrastructure for digital securities and tokenized assets. The engagement began without a functional website in place for the project, requiring the experience to be designed from the ground up. The brief called for a bold, technology-led visual identity and an immersive, highly interactive website that expressed the company’s forward-looking approach while helping different audiences find relevant information.", "launch": "2025", "solution": "Research and planning followed an outcome-driven approach: identifying what different user types needed to accomplish, then mapping content, navigation, and user flows around those goals. This informed the sitemap and clear pathways through the website. Branding was developed in-house alongside high-fidelity page designs, bringing a cohesive, edgy visual direction to the experience. An interactive coded prototype, built through AI-assisted development, demonstrated navigation, motion, and key interactions to the client team and CEO. These reviews helped align expectations and build confidence in the proposed website before implementation.", "deliverables": "Audience and goal mapping · Sitemap and navigation design · User flows · Brand identity · High-fidelity website mockups · Interactive coded prototype"},
 {"name": "Edgio", "category": "Corporate website / UX & UI redesign / 2023–2024", "image": "edgio-cover.svg", "role": "UX/UI design · Branding · Design system · Microinteractions", "launch": "2023–2024", "copy": "Following a major merger, I worked with Edgio’s marketing team to refresh the website’s identity, clarify navigation, and build a more consistent digital experience."},
 {"name": "Toklas", "category": "Corporate Website / Website Design / 2022", "image": "off-hours.svg?v=17", "role": "UI/UX design · Responsive web design · Graphic design", "launch": "2022", "copy": "Toklas is a Web3 company exploring digital ownership and community engagement through premium tokens and digital art. Its existing website expressed the brand’s bold personality but lacked clear navigation and intuitive user flows, making it difficult for visitors to explore its offerings and take the next step.", "solution": "Completed over three weeks, the redesign translated insights from stakeholder discovery sessions into clearer navigation, focused user journeys, and a cohesive visual direction. High-fidelity mockups paired Toklas’s edgy, playful identity with a more accessible presentation of its offerings and culture, designed to support customer inquiries, investor interest, and talent recruitment.", "deliverables": "UX optimization · Navigation design · Website graphic assets · High-fidelity website mockups"}
];
const gs = window.gsap;
const motion = matchMedia('(prefers-reduced-motion: no-preference)');
const menu = document.querySelector('#menu');
const toggle = document.querySelector('.menu-toggle');
let menuTween;
function setMenu(open){
 menuTween?.kill();
 toggle.setAttribute('aria-expanded', String(open));
 toggle.querySelector('span').textContent = open ? '−' : '＋';
 document.body.classList.toggle('locked', open);
 if(open){menu.hidden=false;if(gs && motion.matches) menuTween=gs.fromTo(menu,{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0% 0)',duration:.65,ease:'power4.inOut'});}
 else {menu.hidden=true;toggle.focus();}
}
toggle.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',event=>{
 if(!menu.hidden && event.key==='Escape')setMenu(false);
 if(!menu.hidden && event.key==='Tab'){
  const items=[toggle,...menu.querySelectorAll('a')]; const first=items[0],last=items.at(-1);
  if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus();}
  else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus();}
 }
});
const dialog=document.querySelector('.project-dialog');
const defaultCaseGallery = dialog.querySelector('.case-gallery').innerHTML;
let current=0,origin;
function populate(index){
 current=index;const p=projects[index];
 document.querySelector('.case-gallery').innerHTML = p.name === 'Edgio' ? document.querySelector('#edgio-case-template').innerHTML : p.name === 'Toklas' ? document.querySelector('#toklas-case-template').innerHTML : defaultCaseGallery;
 if (p.gallery) {
  const gallery = document.querySelector('.case-gallery');
  gallery.replaceChildren();
  p.gallery.forEach((label, imageIndex) => {
   const figure = document.createElement('figure');
   const img = document.createElement('img');
   img.src = 'assets/' + p.image;
   img.alt = p.name + ' — ' + label + ' placeholder artwork';
   img.width = 1200;
   img.height = 1400;
   if (imageIndex > 0) img.loading = 'lazy';
   const caption = document.createElement('figcaption');
   caption.textContent = label + ' · Image placeholder';
   figure.append(img, caption);
   gallery.append(figure);
  });
  const next = document.createElement('button');
  next.className = 'next-project';
  next.textContent = 'Next project ↗';
  gallery.append(next);
 }
 document.querySelector('#detail-recognition').parentElement.hidden = p.name === 'Edgio' || Boolean(p.solution);
 document.querySelector('#detail-launch').previousElementSibling.textContent = p.name === 'Edgio' || p.deliverables ? 'Date' : 'Launch';
 document.querySelector('.project-info .placeholder-note').hidden = p.name === 'Edgio' || Boolean(p.solution);
 document.querySelector('#detail-title').textContent=p.name;
 document.querySelector('#detail-category').textContent=p.category;
 const description = document.querySelector('#detail-description');
 description.replaceChildren();
 if (p.name === 'Edgio') {
  const about = document.createElement('p');
  about.textContent = "Following a major merger, technology company Edgio needed a website that reflected its new identity. The legacy experience suffered from severe usability issues: unlinked content created dead ends, a flat navigation hierarchy failed to surface top tasks, and convoluted user flows led to cognitive overload and high drop-off.";
  description.append(about);
  const solution = document.createElement('p');
  const solutionLabel = document.createElement('span');
  solutionLabel.className = 'summary-label';
  solutionLabel.textContent = 'Solution';
  solution.append(solutionLabel, "Working alongside Edgio’s marketing team, I leveraged user research to overhaul the site's Information Architecture. We restructured the sitemap to introduce intent-based pathways mapped to distinct user goals, eliminating friction across key user journeys. To align with their new brand positioning, I updated the website's visual direction and design system to create an edgy, modern aesthetic that drives engagement.");
  description.append(solution);
 } else {
  const copy = document.createElement('p');
  copy.textContent = p.copy;
  description.append(copy);
  for (const [label, content] of [['Solution', p.solution]]) {
   if (!content) continue;
   const paragraph = document.createElement('p');
   const heading = document.createElement('span');
   heading.className = 'summary-label';
   heading.textContent = label;
   paragraph.append(heading, content);
   description.append(paragraph);
  }
 }
 prepareSummaryDisclosures(description);
 const deliverables = document.querySelector('#detail-deliverables');
 deliverables.textContent = p.deliverables || (p.name === 'Edgio' ? 'UX strategy, website design, and a reusable design system.' : '');
 deliverables.parentElement.hidden = !deliverables.textContent;
 document.querySelector('#detail-role').textContent = p.role || 'Role to be added';
 document.querySelector('#detail-launch').textContent = p.launch || 'Date to be added';
 document.querySelector('#detail-recognition').textContent = p.recognition || 'Details to be added';
 ['#detail-image', '#detail-image-secondary'].forEach(selector => {
  const img=document.querySelector(selector);if(!img)return;img.src='assets/'+p.image;img.alt=p.name+' — placeholder artwork';
 });
 resetDetails();
 dialog.scrollTop=0;
 requestAnimationFrame(updateCaseProgress);
}
// Clamp only summary prose; section labels remain visible above it.
function prepareSummaryDisclosures(description) {
 [...description.children].forEach((paragraph, index) => {
  const label = paragraph.querySelector('.summary-label');
  const text = document.createElement('span');
  text.className = 'summary-text';
  text.id = 'summary-text-' + index;
  [...paragraph.childNodes].filter(node => node !== label).forEach(node => text.append(node));
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'summary-expand';
  button.hidden = true;
  button.textContent = 'Read more';
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', text.id);
  button.setAttribute('aria-label', 'Read more: ' + (label?.textContent || 'About'));
  paragraph.append(text, button);
 });
 requestAnimationFrame(updateSummaryDisclosures);
}
function updateSummaryDisclosures() {
 if (!dialog.open) return;
 const desktop = matchMedia('(min-width: 1101px)').matches;
 document.querySelectorAll('#detail-description .summary-text').forEach(text => {
  const button = text.nextElementSibling;
  const overflows = text.scrollHeight > parseFloat(getComputedStyle(text).lineHeight) * 5 + 1;
  button.hidden = !desktop || !overflows;
 });
}
dialog.addEventListener('click', event => {
 const button = event.target.closest('.summary-expand');
 if (!button) return;
 const expanded = button.getAttribute('aria-expanded') !== 'true';
 button.setAttribute('aria-expanded', String(expanded));
 button.previousElementSibling.classList.toggle('is-expanded', expanded);
 button.textContent = expanded ? 'Show less' : 'Read more';
 const label = button.parentElement.querySelector('.summary-label')?.textContent || 'About';
 button.setAttribute('aria-label', (expanded ? 'Show less: ' : 'Read more: ') + label);
 requestAnimationFrame(updateCaseProgress);
});
window.addEventListener('resize', updateSummaryDisclosures);
new ResizeObserver(updateSummaryDisclosures).observe(document.querySelector('#detail-description'));
function openProject(index,button){
 origin=button;populate(index);dialog.showModal();document.body.classList.add('locked');requestAnimationFrame(updateCaseProgress);
 if(gs && motion.matches)gs.fromTo(dialog,{clipPath:'inset(100% 0 0 0)'},{clipPath:'inset(0% 0 0 0)',duration:.7,ease:'power4.inOut'});
}
document.querySelectorAll('.project-open').forEach(button=>button.addEventListener('click',()=>openProject(Number(button.dataset.project),button)));
document.querySelector('.close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{gs?.killTweensOf([dialog, document.querySelector('.detail-inner')]);gs?.set('.detail-inner',{clearProps:'opacity,transform'});resetDetails();dialog.style.clipPath='';document.body.classList.remove('locked');origin?.focus();});
dialog.addEventListener('click',event=>{
 if(!event.target.closest('.next-project'))return;
 if(gs && motion.matches){gs.to('.detail-inner',{opacity:0,y:-20,duration:.2,onComplete:()=>{populate((current+1)%projects.length);gs.fromTo('.detail-inner',{opacity:0,y:30},{opacity:1,y:0,duration:.5});}});}
 else populate((current+1)%projects.length);
});
// Responsive project details: desktop sidebar, tablet top panel, mobile disclosure.
const smallProjectScreen = matchMedia('(max-width: 1100px)');
const inlineDetails = document.querySelector('.project-info');
const floatingDetails = document.createElement('aside');
floatingDetails.className = 'floating-details';
floatingDetails.hidden = true;
floatingDetails.setAttribute('aria-label', 'Sticky project details');
floatingDetails.innerHTML = '<button class="details-toggle" type="button" aria-expanded="false" aria-controls="floating-details-content"><span>Project details</span><span class="details-symbol" aria-hidden="true">＋</span></button><div id="floating-details-content" hidden></div>';
dialog.append(floatingDetails);
const detailsButton = floatingDetails.querySelector('.details-toggle');
const detailsContent = floatingDetails.querySelector('#floating-details-content');
let detailsAnimation;
function resetDetails() {
 detailsAnimation?.kill();
 detailsButton.setAttribute('aria-expanded', 'false');
 floatingDetails.querySelector('.details-symbol').textContent = '＋';
 detailsContent.style.height = '';
 detailsContent.style.opacity = '';
 detailsContent.hidden = true;
 floatingDetails.hidden = true;
 // Keep a full inline version in the normal flow; only the sticky copy collapses.
 detailsContent.innerHTML = document.querySelector('#details-content').innerHTML;
 detailsContent.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
 document.querySelector('#details-content').hidden = false;
}
detailsButton.addEventListener('click', () => {
 const expand = detailsButton.getAttribute('aria-expanded') !== 'true';
 detailsAnimation?.kill();
 detailsButton.setAttribute('aria-expanded', String(expand));
 floatingDetails.querySelector('.details-symbol').textContent = expand ? '−' : '＋';
 if (!gs || !motion.matches) {
  detailsContent.hidden = !expand;
  detailsContent.style.height = '';
  detailsContent.style.opacity = '';
  updateCaseProgress();
  return;
 }
 if (expand && detailsContent.hidden) {
  detailsContent.hidden = false;
  gs.set(detailsContent, {height:0, opacity:0});
 }
 detailsAnimation = gs.to(detailsContent, {
  height:expand ? 'auto' : 0, opacity:expand ? 1 : 0,
  duration:.45, ease:'power3.inOut', onUpdate:updateCaseProgress,
  onComplete:() => {
   detailsContent.hidden = !expand;
   detailsContent.style.height = '';
   detailsContent.style.opacity = '';
   updateCaseProgress();
  }
 });
});
smallProjectScreen.addEventListener('change', () => {resetDetails();updateCaseProgress();});
motion.addEventListener('change', resetDetails);
const caseSlider = document.querySelector('#case-scroll');
function updateCaseProgress() {
 if (!dialog.open) return;
 const pastDetails = smallProjectScreen.matches &&
  inlineDetails.getBoundingClientRect().bottom <= document.querySelector('.project-toolbar').getBoundingClientRect().bottom;
 if (floatingDetails.hidden === pastDetails) {
  floatingDetails.hidden = !pastDetails;
  if (!pastDetails) {
   detailsAnimation?.kill();
   detailsContent.hidden = true;
   detailsContent.style.height = '';
   detailsContent.style.opacity = '';
   detailsButton.setAttribute('aria-expanded', 'false');
   floatingDetails.querySelector('.details-symbol').textContent = '＋';
  }
 }
 const maximum = dialog.scrollHeight - dialog.clientHeight;
 const percent = maximum > 0 ? Math.round(dialog.scrollTop / maximum * 100) : 100;
 caseSlider.value = Math.max(0, Math.min(100, percent));
 caseSlider.setAttribute('aria-valuetext', caseSlider.value + '% through project');
 document.querySelector('#case-percentage').textContent = caseSlider.value + '%';
}
caseSlider.addEventListener('input', () => {
 dialog.scrollTop = (dialog.scrollHeight - dialog.clientHeight) * Number(caseSlider.value) / 100;
 updateCaseProgress();
});
dialog.addEventListener('scroll', updateCaseProgress, {passive:true});
window.addEventListener('resize', updateCaseProgress);
dialog.addEventListener('load', event => {if(event.target.tagName === 'IMG')updateCaseProgress();}, true);
document.querySelector('.detail-home').addEventListener('click', event => {event.preventDefault();dialog.close();});
resetDetails();

// Real GSAP timelines + ScrollTrigger; no dependency on an internet connection.
if(gs && window.ScrollTrigger){
 gs.registerPlugin(ScrollTrigger);
 gs.matchMedia().add('(prefers-reduced-motion: no-preference)',()=>{
  gs.timeline({defaults:{ease:'power3.out'}})
   .from('.line>span',{yPercent:115,rotation:3,stagger:.13,duration:1.2})
   .from('.hero-label, .hero-bottom, .hero-caption',{y:16,opacity:0,stagger:.08,duration:.7},.55);
  gs.to('.progress',{scaleX:1,ease:'none',scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:true}});
  gs.to('.asterisk',{rotation:180,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
  gs.utils.toArray('.project').forEach(card=>{
   gs.from(card,{y:70,opacity:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:card,start:'top 95%',once:true}});
   gs.fromTo(card.querySelector('img'),{yPercent:-4},{yPercent:4,ease:'none',scrollTrigger:{trigger:card,start:'top bottom',end:'bottom top',scrub:.7}});
  });
  gs.to('.marquee>div',{xPercent:-25,ease:'none',scrollTrigger:{trigger:'.marquee',start:'top bottom',end:'bottom top',scrub:1}});
  gs.from('.reveal',{y:45,opacity:0,duration:1,scrollTrigger:{trigger:'.about',start:'top 80%',once:true}});
  gs.from('.contact h2',{y:55,opacity:0,duration:1,scrollTrigger:{trigger:'.contact',start:'top 80%',once:true}});
 });
 gs.matchMedia().add('(hover: hover) and (prefers-reduced-motion: no-preference)',()=>{
  const cleanups=[];
  document.querySelectorAll('.project-open').forEach(button=>{
   const pill=button.querySelector('.view-pill');
   const enter=()=>gs.to(pill,{opacity:1,scale:1,duration:.3});
   const leave=()=>gs.to(pill,{opacity:0,scale:.8,duration:.25});
   button.addEventListener('mouseenter',enter);button.addEventListener('mouseleave',leave);
   cleanups.push(()=>{button.removeEventListener('mouseenter',enter);button.removeEventListener('mouseleave',leave);});
  });
  return ()=>cleanups.forEach(fn=>fn());
 });
 window.addEventListener('load',()=>ScrollTrigger.refresh());
}

// Placeholder category assignments live on each article's data-category attribute.
const filterBar = document.querySelector('.project-filters');
const filterButtons = [...filterBar.querySelectorAll('button')];
const projectCards = [...document.querySelectorAll('.project')];
filterBar.hidden = false;
filterButtons.forEach(button => button.addEventListener('click', () => {
 if (button.getAttribute('aria-pressed') === 'true') return;
 const category = button.dataset.filter;
 // Finish the initial card reveals before rearranging the grid.
 if (gs) {
  window.ScrollTrigger?.getAll().forEach(trigger => {
   if (trigger.animation && projectCards.includes(trigger.animation.targets?.()[0])) {
    trigger.animation.progress(1);
    trigger.kill();
   }
  });
  gs.killTweensOf(projectCards);
  gs.set(projectCards, {clearProps:'opacity,transform'});
 }
 filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
 let count = 0;
 projectCards.forEach(card => {
  card.hidden = category !== 'all' && card.dataset.category !== category;
  if (!card.hidden) { card.classList.toggle('offset', count % 2 === 1); count++; }
 });
 document.querySelector('#project-count').textContent = '(' + String(count).padStart(2, '0') + ')';
 document.querySelector('#filter-status').textContent = count + ' projects shown: ' + button.textContent + '.';
 document.querySelector('#filter-empty').hidden = count !== 0;
 window.ScrollTrigger?.refresh();
 if (count && gs && motion.matches) gs.fromTo(projectCards.filter(card => !card.hidden),
  {opacity:0, y:18}, {opacity:1, y:0, duration:.4, stagger:.06, ease:'power2.out', clearProps:'opacity,transform'});
}));

// Delegation keeps the comparison working after the case-study template is recreated.
dialog.addEventListener('input', event => {
 const range = event.target.closest('.comparison-range');
 if (!range) return;
 const value = Number(range.value);
 range.closest('.image-comparison').style.setProperty('--split', value + '%');
 range.setAttribute('aria-valuetext', `${value}% previous website, ${100-value}% redesigned website`);
});
dialog.addEventListener('pointerdown', event => {
 const range = event.target.closest('.comparison-range');
 if (!range || (event.pointerType === 'mouse' && event.button !== 0)) return;
 const update = e => {
  const rect = range.getBoundingClientRect();
  range.value = Math.round(Math.max(0, Math.min(100, (e.clientX - rect.left) / rect.width * 100)));
  range.dispatchEvent(new Event('input', {bubbles:true}));
 };
 event.preventDefault();
 range.focus({preventScroll:true});
 range.setPointerCapture(event.pointerId);
 update(event);
 const move = e => { if(e.pointerId === event.pointerId) update(e); };
 const stop = e => {
  if(e.pointerId !== event.pointerId) return;
  range.removeEventListener('pointermove', move);
  range.removeEventListener('pointerup', stop);
  range.removeEventListener('pointercancel', stop);
  range.removeEventListener('lostpointercapture', stop);
 };
 range.addEventListener('pointermove', move);
 range.addEventListener('pointerup', stop);
 range.addEventListener('pointercancel', stop);
 range.addEventListener('lostpointercapture', stop);
});
