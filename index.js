//document.getElementById("count").innerText = 5
let m=0;
let count=0; 
let mstring="";
function inf()
{count=count+1;
document.getElementById("zgoraj").innerText = count
}
function svf(){
if(m==0) {mstring+= count;m+=1 }
else{
mstring+= " - " + count ;
    count=0;}
    document.getElementById("spodaj").innerText = mstring;
    document.getElementById("zgoraj").innerText = count;

}

