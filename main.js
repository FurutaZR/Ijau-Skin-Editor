const {app,BrowserWindow}=require('electron'),path=require('path');
app.whenReady().then(()=>{
  const w=new BrowserWindow({width:1100,height:750,autoHideMenuBar:true,backgroundColor:'#010406',icon:path.join(__dirname,'icon.ico')});
  w.loadFile('index.html');
});
app.on('window-all-closed',()=>app.quit());
