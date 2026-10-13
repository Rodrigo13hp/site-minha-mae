(function () {
  var botao = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');

  function fechar() {
    menu.classList.remove('aberto');
    botao.setAttribute('aria-expanded', 'false');
    botao.setAttribute('aria-label', 'Abrir menu');
  }

  botao.addEventListener('click', function () {
    var aberto = menu.classList.toggle('aberto');
    botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', fechar);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') fechar();
  });

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();

(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches,$=function(s){return[].slice.call(document.querySelectorAll(s))},cl=function(v,a,b){return Math.min(b==null?1:b,Math.max(a||0,v))},root=document.documentElement,topo=$('.topo')[0],stage=$('.stage')[0],fb=$('.contato-flor')[0].src;
$('.flower img').forEach(function(i){i.addEventListener('error',function(){i.src=fb},{once:true})});
setTimeout(function(){root.classList.remove('anim')},rm?0:3200);
$('.titulo').forEach(function(t){t.innerHTML=t.textContent.trim().split(/\s+/).map(function(w,i){return'<span class="wm"><span style="--i:'+i+'">'+w+'</span></span>'}).join(' ')});
var fp=$('[data-fill]')[0];fp.innerHTML=fp.textContent.trim().split(/\s+/).map(function(w){return'<span class="fw">'+w+'</span>'}).join(' ');var fs=$('.fw');
var rv=$('.terapia-texto,.terapia-arte,.beneficios>div,.contato,.aviso,.titulo,.passos li');
rv.forEach(function(e,i){if(!e.classList.contains('titulo'))e.classList.add('rv');e.style.setProperty('--d',(i%4)*90+'ms')});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.2});rv.forEach(function(e){io.observe(e)});
var cards=$('.terapia'),pas=$('.passos')[0],pl=$('.passos li');
function sc(){var vh=innerHeight,y=scrollY,hp=cl(y/vh);topo.classList.toggle('claro',y>vh*.85);
if(!rm){stage.style.transform='scale('+(1-hp*.07)+')';stage.style.opacity=1-hp*.6}
var r=fp.getBoundingClientRect(),p=cl((vh*.85-r.top)/(r.height+vh*.35)),n=fs.length;
fs.forEach(function(w,i){w.style.opacity=.16+.84*cl((p*(n+3)-i)/3)});
if(!rm&&innerWidth>760)cards.forEach(function(c,i){var nx=cards[i+1];if(!nx)return;var q=cl(1-(nx.getBoundingClientRect().top-96)/(vh*.7));c.style.transform='scale('+(1-q*.06)+')';c.style.opacity=1-q*.35});
var b=pas.getBoundingClientRect(),t=cl((vh*.72-b.top)/b.height);pas.style.setProperty('--p',t);pl.forEach(function(l,i){l.classList.toggle('on',t>=i/pl.length*.9+.02)})}
var tk=0;addEventListener('scroll',function(){if(!tk){tk=1;requestAnimationFrame(function(){tk=0;sc()})}},{passive:true});addEventListener('resize',sc);sc();
if(rm)return;
function blob(c,cx,cy,r,t,s){if(r<2)return;var N=24,P=[],i,a,n,rr;for(i=0;i<N;i++){a=i/N*6.2832;n=(Math.sin(a*3+t*1.4+s)*.45+Math.sin(a*5-t*.9+s*2.3)*.3+Math.cos(a*2+t*1.8+s*.7)*.25)*44*(r/140);rr=r+n;P.push([cx+Math.cos(a)*rr,cy+Math.sin(a)*rr])}
var m=function(u,v){return[(u[0]+v[0])/2,(u[1]+v[1])/2]},s0=m(P[N-1],P[0]);c.beginPath();c.moveTo(s0[0],s0[1]);for(i=0;i<N;i++){var e=m(P[i],P[(i+1)%N]);c.quadraticCurveTo(P[i][0],P[i][1],e[0],e[1])}c.closePath();c.fill()}
function mk(el,inv){var c=document.createElement('canvas'),x=c.getContext('2d');return{c:c,draw:function(P,t){var w=c.width,h=c.height;x.globalCompositeOperation='source-over';x.clearRect(0,0,w,h);if(!inv){x.fillStyle='#fff';x.fillRect(0,0,w,h);x.globalCompositeOperation='destination-out'}x.fillStyle='#fff';P.forEach(function(p){x.globalAlpha=p.a;blob(x,p.x,p.y,p.r,t,p.s)});x.globalAlpha=1;var u='url('+c.toDataURL()+')',S=el.style;S.webkitMaskImage=S.maskImage=u;S.maskSize=S.webkitMaskSize='100% 100%';S.maskRepeat=S.webkitMaskRepeat='no-repeat'},reset:function(){el.style.webkitMaskImage=el.style.maskImage=inv?'linear-gradient(#0000,#0000)':'none'}}}
var fl=$('.flower')[0],L=[mk($('.fl.bg')[0],0),mk($('.fl.top')[0],1)],P=[],hov=0,hr=0,tm=0,lx=-99,ly=-99,mx=0,my=0,run=0,R;
function frame(){hr+=((hov?140:0)-hr)*(hov?.14:.04);if(hov&&hr>5&&Math.hypot(mx-lx,my-ly)>8){P.push({x:mx,y:my,r:hr,a:1,s:Math.random()*100});if(P.length>60)P.shift();lx=mx;ly=my}
P.forEach(function(p){p.a*=.92;p.r*=.995});P=P.filter(function(p){return p.a>=.01});tm+=.016;
if(P.length||hov){L.forEach(function(l){l.draw(P,tm)});requestAnimationFrame(frame)}else{L.forEach(function(l){l.reset()});run=0;hr=0}}
stage.addEventListener('mousemove',function(e){if(!fl)return;R=fl.getBoundingClientRect();if(!run){L.forEach(function(l){l.c.width=R.width|0;l.c.height=R.height|0});run=1;requestAnimationFrame(frame)}mx=(e.clientX-R.left)*(L[0].c.width/R.width);my=(e.clientY-R.top)*(L[0].c.height/R.height);hov=1});
stage.addEventListener('mouseleave',function(){hov=0});
if(!matchMedia('(pointer:fine)').matches)return;
$('.beneficios>div,.contato').forEach(function(e){e.addEventListener('pointermove',function(v){var r=e.getBoundingClientRect();e.style.setProperty('--mx',v.clientX-r.left+'px');e.style.setProperty('--my',v.clientY-r.top+'px')})});
$('.btn,.zap-num').forEach(function(b){var x=0,y=0,vx=0,vy=0,tx=0,ty=0,on=0;function f(){vx=(vx+(tx-x)*.14)*.78;vy=(vy+(ty-y)*.14)*.78;x+=vx;y+=vy;b.style.transform='translate('+x+'px,'+y+'px)';if(Math.abs(vx)+Math.abs(vy)+Math.abs(tx-x)+Math.abs(ty-y)>.05)requestAnimationFrame(f);else on=0}
function go(){if(!on){on=1;requestAnimationFrame(f)}}
b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();tx=(e.clientX-(r.left-x)-r.width/2)*.3;ty=(e.clientY-(r.top-y)-r.height/2)*.4;go()});b.addEventListener('pointerleave',function(){tx=ty=0;go()})});
var d=document.createElement('i'),g=document.createElement('i'),cx=-50,cy=-50,gx=-50,gy=-50;d.className='cd';g.className='cg';document.body.append(d,g);root.classList.add('cur');
addEventListener('pointermove',function(e){cx=e.clientX;cy=e.clientY;d.style.transform='translate('+cx+'px,'+cy+'px)';g.classList.toggle('big',!!e.target.closest('a,button'))});
(function l(){gx+=(cx-gx)*.16;gy+=(cy-gy)*.16;g.style.transform='translate('+gx+'px,'+gy+'px)';requestAnimationFrame(l)})();
})();
