const message = [
"Hey! I know that this might be weird, lmao, but I would like to say that I am really proud of you. You have no idea how much I admire your strength for making it through this hard year. You really are an amazing person keep on being the amazing Ahlaam that I have grown to love and adore.",
"With that being said, I would also like to thank you for being an amazing friend that I can genuinely trust. I know that there are times where I can be super annoying and \"too much\" lmao, but you’ve never really hurt me in any way, nor would you treat me any differently. Instead, you would just let it go as if nothing happened. I also appreciate that you are always reassuring me that you’ve always got my back, that you always look out for me when I’m around and not being myself. If I have to be completely honest with you, I never thought that I deserved such treatment, nor did I deserve having a friend like you. You’d always make me feel welcome and wanted around, lmao. And if I had to continue being honest, I thought that we would never get along and that you’d hate me lmao—yeah, you and Kiara were way too cool for me, lmao! But enough of me being depressing, lmao, let me not talk your ear off.",
"Oh, wait! I’m actually really happy that you finally found a community where you actually feel at home and a place where you can openly be yourself, lmao. You really do seem so much happier when you’re chatting in the Marvel server, lmao! But do me a favor: please be careful with who you let into your personal life. I know everyone there is super nice and really awesome, but I don’t want you to get hurt anymore, so please be careful.",
"Also, just know that if you ever need to vent and just let out all your frustrations, my unemployed ass will always be willing to listen. I will always do my best to help you find a solution to what we’re dealing with. I promise that I will always do my best for you, so please don’t hesitate to speak up.",
"Oh, and I’ve been meaning to tell you this: hanging out with you at Comic Con was by far my favorite day of the whole convention. I had a blast watching you actually be yourself for once without having to hold anything back.",
"But let me for reals end this letter here."
];
const scene=document.querySelector('.scene');
const envelopeButton=document.getElementById('envelopeButton');
const openButton=document.getElementById('openButton');
const closeButton=document.getElementById('closeButton');
const instruction=document.getElementById('instruction');
const letter=document.getElementById('letter');
const letterMessage=document.getElementById('letterMessage');
message.forEach(paragraph=>{const p=document.createElement('p');p.textContent=paragraph;letterMessage.appendChild(p);});
function openLetter(){scene.classList.add('is-open');envelopeButton.setAttribute('aria-expanded','true');letter.setAttribute('aria-hidden','false');instruction.textContent='A little note, just for you.';openButton.hidden=true;closeButton.hidden=false;window.setTimeout(()=>letter.focus({preventScroll:true}),250);}
function closeLetter(){scene.classList.remove('is-open');envelopeButton.setAttribute('aria-expanded','false');letter.setAttribute('aria-hidden','true');instruction.textContent='Tap the envelope to open it.';openButton.hidden=false;closeButton.hidden=true;envelopeButton.focus({preventScroll:true});}
envelopeButton.addEventListener('click',openLetter);openButton.addEventListener('click',openLetter);closeButton.addEventListener('click',closeLetter);
