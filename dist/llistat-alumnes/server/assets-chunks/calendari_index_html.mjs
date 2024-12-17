export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>LlistatAlumnes</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="styles-5INURTSO.css"><style ng-app-id="ng">.container[_ngcontent-ng-c3311343941]{text-align:center;margin-top:50px}h1[_ngcontent-ng-c3311343941]{color:#2c3e50}p[_ngcontent-ng-c3311343941]{font-size:18px;color:#34495e}.welcome[_ngcontent-ng-c3311343941]{text-align:center;margin:20px}</style><style ng-app-id="ng">@charset "UTF-8";.calendar[_ngcontent-ng-c3669461860]{display:grid;grid-template-columns:repeat(7,1fr);gap:5px}.day-header[_ngcontent-ng-c3669461860]{text-align:center;font-weight:700;background-color:#f0f0f0;padding:10px;border:1px solid #ddd}.day[_ngcontent-ng-c3669461860], .day.empty[_ngcontent-ng-c3669461860]{border:1px solid #ddd;padding:10px;text-align:center;position:relative;min-height:100px;background-color:#fff}.day.saturday[_ngcontent-ng-c3669461860]{background-color:#d4fdd4}.day.sunday[_ngcontent-ng-c3669461860]{background-color:#ffd6d6}.date[_ngcontent-ng-c3669461860]{font-weight:700;margin-bottom:5px;display:block}.exam[_ngcontent-ng-c3669461860]{position:absolute;bottom:5px;left:5px;right:5px;background-color:#fdd;border:1px solid #ffaaaa;border-radius:5px;font-size:12px;padding:2px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.empty[_ngcontent-ng-c3669461860]{background-color:transparent;border:none}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root _nghost-ng-c3311343941 ng-version="19.0.4" ngh="1" ng-server-context="ssg"><html _ngcontent-ng-c3311343941 lang="ca"><head _ngcontent-ng-c3311343941><meta _ngcontent-ng-c3311343941 charset="UTF-8"><meta _ngcontent-ng-c3311343941 name="viewport" content="width=device-width, initial-scale=1.0"><title _ngcontent-ng-c3311343941>Benvinguts a llistat-alumnes</title><link _ngcontent-ng-c3311343941 rel="icon" type="image/x-icon" href="favicon.ico"><link _ngcontent-ng-c3311343941 rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"></head><body _ngcontent-ng-c3311343941><div _ngcontent-ng-c3311343941 class="container my-5"><h1 _ngcontent-ng-c3311343941>Carles Canals</h1><nav _ngcontent-ng-c3311343941 class="mb-4"><ul _ngcontent-ng-c3311343941 class="nav nav-pills justify-content-center"><li _ngcontent-ng-c3311343941 class="nav-item"><a _ngcontent-ng-c3311343941 href="/home" class="nav-link active">Inici</a></li><li _ngcontent-ng-c3311343941 class="nav-item"><a _ngcontent-ng-c3311343941 href="/llistat" class="nav-link">Llistat d'Alumnes</a></li><li _ngcontent-ng-c3311343941 class="nav-item"><a _ngcontent-ng-c3311343941 href="/notes" class="nav-link">Notes</a></li><li _ngcontent-ng-c3311343941 class="nav-item"><a _ngcontent-ng-c3311343941 href="/calendari" class="nav-link">Calendari d'Exàmens</a></li></ul></nav><router-outlet _ngcontent-ng-c3311343941></router-outlet><app-calendari _nghost-ng-c3669461860 ngh="0"><div _ngcontent-ng-c3669461860 class="container my-5"><h2 _ngcontent-ng-c3669461860 class="text-center mb-4">Calendari d'Exàmens dels alumnes</h2><div _ngcontent-ng-c3669461860 class="row mb-4"><div _ngcontent-ng-c3669461860 class="col"><button _ngcontent-ng-c3669461860 class="btn btn-primary w-100" jsaction="click:;">Mes Anterior</button></div><div _ngcontent-ng-c3669461860 class="col text-center"><h4 _ngcontent-ng-c3669461860>desembre 2024</h4></div><div _ngcontent-ng-c3669461860 class="col"><button _ngcontent-ng-c3669461860 class="btn btn-primary w-100" jsaction="click:;">Mes Següent</button></div></div><div _ngcontent-ng-c3669461860 class="calendar"><div _ngcontent-ng-c3669461860 class="day-header"> Dilluns </div><div _ngcontent-ng-c3669461860 class="day-header"> Dimarts </div><div _ngcontent-ng-c3669461860 class="day-header"> Dimecres </div><div _ngcontent-ng-c3669461860 class="day-header"> Dijous </div><div _ngcontent-ng-c3669461860 class="day-header"> Divendres </div><div _ngcontent-ng-c3669461860 class="day-header"> Dissabte </div><div _ngcontent-ng-c3669461860 class="day-header"> Diumenge </div><!----><div _ngcontent-ng-c3669461860 class="day empty"></div><div _ngcontent-ng-c3669461860 class="day empty"></div><div _ngcontent-ng-c3669461860 class="day empty"></div><div _ngcontent-ng-c3669461860 class="day empty"></div><div _ngcontent-ng-c3669461860 class="day empty"></div><div _ngcontent-ng-c3669461860 class="day empty"></div><!----><div _ngcontent-ng-c3669461860 class="day sunday"><span _ngcontent-ng-c3669461860 class="date">1</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">2</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">3</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">4</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">5</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">6</span><!----></div><div _ngcontent-ng-c3669461860 class="day saturday"><span _ngcontent-ng-c3669461860 class="date">7</span><!----></div><div _ngcontent-ng-c3669461860 class="day sunday"><span _ngcontent-ng-c3669461860 class="date">8</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">9</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">10</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">11</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">12</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">13</span><!----></div><div _ngcontent-ng-c3669461860 class="day saturday"><span _ngcontent-ng-c3669461860 class="date">14</span><!----></div><div _ngcontent-ng-c3669461860 class="day sunday"><span _ngcontent-ng-c3669461860 class="date">15</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">16</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">17</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">18</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">19</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">20</span><!----></div><div _ngcontent-ng-c3669461860 class="day saturday"><span _ngcontent-ng-c3669461860 class="date">21</span><!----></div><div _ngcontent-ng-c3669461860 class="day sunday"><span _ngcontent-ng-c3669461860 class="date">22</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">23</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">24</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">25</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">26</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">27</span><!----></div><div _ngcontent-ng-c3669461860 class="day saturday"><span _ngcontent-ng-c3669461860 class="date">28</span><!----></div><div _ngcontent-ng-c3669461860 class="day sunday"><span _ngcontent-ng-c3669461860 class="date">29</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">30</span><!----></div><div _ngcontent-ng-c3669461860 class="day"><span _ngcontent-ng-c3669461860 class="date">31</span><!----></div><!----></div></div></app-calendari><!----></div><footer _ngcontent-ng-c3311343941 class="bg-light text-center py-3 mt-5"><p _ngcontent-ng-c3311343941 class="mb-0">Desenvolupat per Carles Canals amb l'ajut de Copilot, Desembre de 2024</p></footer></body></html></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-NZC6YMGU.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"14":"t0","15":"t1","16":"t2"},"c":{"14":[{"i":"t0","r":1,"x":7}],"15":[{"i":"t1","r":1,"x":6}],"16":[{"i":"t2","r":1,"t":{"3":"t3"},"c":{"3":[]},"x":31}]}},{"c":{"26":[{"i":"c3669461860","r":1}]}}]}</script></body></html>`;