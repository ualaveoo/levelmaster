window.LM_LEVELS = (()=>{
const names=['Primer salto','Colinas brillantes','Puente de nubes','Sendero saltarín','Cascada veloz','Islas del viento','Trampolín dorado','Ruta de las alturas','Camino naranja','Valle del Volador','Plataformas fugaces','Ruinas que caen','Última luz','Entrada nocturna','Bosque del viento','Ascenso lunar','Puerta de cristal','Laberinto azul','Camino del Portal','Portal Master'];
const chapters=[
 {from:1,to:4,label:'CAPÍTULO 1 · PRADERAS LUMINOSAS',env:'day'},
 {from:5,to:8,label:'CAPÍTULO 2 · CASCADAS Y ALTURAS',env:'day'},
 {from:9,to:12,label:'CAPÍTULO 3 · ATARDECER PIXEL',env:'sunset'},
 {from:13,to:16,label:'CAPÍTULO 4 · BOSQUE NOCTURNO',env:'night'},
 {from:17,to:20,label:'CAPÍTULO 5 · CAMINO AL PORTAL',env:'portal'}
];
const mechanics={
 1:[],2:['jumper'],3:['jumper','flyer'],4:['mover'],
 5:['mover','water'],6:['mover','bounce'],7:['bounce','flyer'],8:['high','mover','bounce'],
 9:['flyer','crumble'],10:['flyer','crumble','mover'],11:['ghost'],12:['crumble','ghost'],
 13:['wind'],14:['wind','lift'],15:['wind','lift','ghost'],16:['lift','crumble','flyer'],
 17:['door','key'],18:['door','key','wind'],19:['key','ghost','lift'],20:['master']
};
function chapterFor(w){return chapters.find(c=>w>=c.from&&w<=c.to)}
function make(w){const c=chapterFor(w);return{world:w,name:names[w-1],chapter:c.label,env:c.env,length:5900+w*245,coins:10+Math.floor(w*.75),mechanics:mechanics[w]||[],difficulty:1+Math.floor((w-1)/4),boss:w===20}}
return{names,chapters,make,chapterFor};
})();
