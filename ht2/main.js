var promptNames = prompt("Enter list of names: ", ['Alex, Vasa, Pitya, Ann, Oleg']);
var arrNames = promptNames.split(", ");


let k=1;
for (let i in arrNames) {
    if(arrNames[i]==="Ann"){
        k--;
        continue;
    }
    let tmp = "<li>" +(+i+k) + " "+ arrNames[i] + "</li>";
    document.getElementById("arrNamesHtml").innerHTML += tmp;
    console.log(tmp);
}