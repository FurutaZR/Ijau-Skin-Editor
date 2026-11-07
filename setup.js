// Copies three.js, OrbitControls and the pixel font into ./lib so the app works offline
const fs=require('fs'),path=require('path'),out=path.join(__dirname,'lib');
fs.mkdirSync(out,{recursive:true});
const copy=(from,to)=>{try{fs.copyFileSync(path.join(__dirname,'node_modules',from),path.join(out,to))}catch(e){console.warn('skipped '+from)}};
copy('three/build/three.min.js','three.min.js');
copy('three/examples/js/controls/OrbitControls.js','OrbitControls.js');
copy('@fontsource/vt323/files/vt323-latin-400-normal.woff2','vt323.woff2');
