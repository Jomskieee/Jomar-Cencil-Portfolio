document.documentElement.classList.add('js');

/* Light / dark button */
var root=document.documentElement,themeBtn=document.getElementById('themeBtn');
function applyTheme(t){
  root.setAttribute('data-theme',t);root.setAttribute('data-bs-theme',t);
  if(themeBtn){themeBtn.textContent=t==='dark'?'Light mode':'Dark mode';themeBtn.setAttribute('aria-pressed',t==='dark')}
}
applyTheme('light');
if(themeBtn)themeBtn.addEventListener('click',function(){applyTheme(root.getAttribute('data-theme')==='dark'?'light':'dark')});

/* Shadow under the menu after scrolling */
var nav=document.getElementById('nav');
window.addEventListener('scroll',function(){nav.classList.toggle('scrolled',window.scrollY>10)});

/* Close the phone menu after tapping a link */
document.querySelectorAll('#menu .nav-link').forEach(function(a){
  a.addEventListener('click',function(){
    var m=document.getElementById('menu');
    if(m.classList.contains('show'))bootstrap.Collapse.getOrCreateInstance(m).hide();
  });
});

/* Fade-in when a block scrolls into view */
var items=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
  items.forEach(function(el){io.observe(el)});
}else{items.forEach(function(el){el.classList.add('in')})}

document.getElementById('yr').textContent=new Date().getFullYear();


/* Click a screenshot to view it large */
(function(){
  var lb=document.getElementById('lb');if(!lb)return;
  var im=lb.querySelector('img');
  document.querySelectorAll('.shot img').forEach(function(i){
    i.addEventListener('click',function(){im.src=i.src;im.alt=i.alt;lb.classList.add('open')});
  });
  lb.addEventListener('click',function(){lb.classList.remove('open')});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')lb.classList.remove('open')});
})();

/* Contact form: sends through Formspree once the form ID is added; until then it opens the visitor's email app */
(function(){
  var f=document.getElementById('contactForm'),st=document.getElementById('cfStatus');
  if(!f)return;
  function say(m,c){st.textContent=m;st.className='cf-status mt-3 mb-0 '+(c||'')}
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var n=document.getElementById('cf-name').value.trim(),em=document.getElementById('cf-email').value.trim(),m=document.getElementById('cf-msg').value.trim();
    if(f.elements['_gotcha'].value)return;
    if(!n||!m||!/^\S+@\S+\.\S+$/.test(em)){say('Please enter your name, a valid email and a message.','err');return}
    var url=f.getAttribute('action');
    if(!url||url.indexOf('YOUR_FORM_ID')>-1){
      location.href='mailto:jomarcencil57@gmail.com?subject='+encodeURIComponent('Portfolio message from '+n)+'&body='+encodeURIComponent(m+'\n\nFrom: '+n+' ('+em+')');
      say('Opening your email app…');return;
    }
    var btn=f.querySelector('button[type=submit]');btn.disabled=true;say('Sending…');
    fetch(url,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}}).then(function(r){
      if(r.ok){f.reset();say('Thank you! Your message was sent. I will reply soon.','ok')}
      else{say('Sorry, the message could not be sent. Please email me directly.','err')}
    }).catch(function(){say('Sorry, the message could not be sent. Please email me directly.','err')}).then(function(){btn.disabled=false});
  });
})();

/* View CV in a window in the centre of the screen (phones open it in a new tab instead) */
(function(){
  var modalEl=document.getElementById('cvModal'),frame=document.getElementById('cvFrame');
  if(!modalEl||!frame||!window.bootstrap)return;
  var modal=bootstrap.Modal.getOrCreateInstance(modalEl);
  document.querySelectorAll('.js-viewcv').forEach(function(a){
    a.addEventListener('click',function(e){
      var canInline=navigator.pdfViewerEnabled!==false&&window.innerWidth>=768;
      if(!canInline)return;
      e.preventDefault();
      frame.src=a.href+'#view=FitH';
      modal.show();
    });
  });
  modalEl.addEventListener('hidden.bs.modal',function(){frame.src='about:blank'});
})();
