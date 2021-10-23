let id = document.getElementById("id");
let pass = document.getElementById("pass");
let nama = document.getElementById("nama");
let data = {name:"Yoel Mountanus Sitorus",
            nrp:"5025211078",
            kota:"Siantar",
            n3:"078",
            fname:"Yoel",
            dept:"Teknik Informatika",
            fak:"FTEIC",
            div:"Divisi Pendidikan",
            anjai:"halo"}; 

let link = "https://zoom.us/j/";
let a = document.getElementById("linked");
function gas(){
  var namax = nama.value;
  var nmt = namax.match(/\[\w+\]/g);
  if(nmt){
    for(x in nmt){
      var ganti = nmt[x].replace("[","").replace("]","");
      namax=namax.replace(nmt[x],data[ganti]);
    }
  }
  console.log(namax);
if(id.value.includes("zoom.us")){
  var nlink =id.value;
  nlink += id.value.match("pwd")?"&":"";
  nlink += nama.value!="-"?"uname="+encodeURIComponent(namax):"";
}else{
var nlink = link + id.value + "?";
nlink+=nama.value!="-"?"uname="+encodeURIComponent(namax):"";
}
a.href = nlink;
a.innerHTML = nlink;
a.click();
}
