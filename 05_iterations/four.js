//For in loop

let myObj = {
    game1 : "GTA",
    game2 : "NFS",
    game3 : "GOW"
}
for (const keys in myObj) {
    console.log(myObj[keys]);
}
for (const keys in myObj) {
    console.log(`Games ${myObj[keys]} with tags of ${keys}`);
}


