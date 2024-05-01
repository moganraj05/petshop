let a = [2][3];
for(let i = 0 ; i < 2; i ++ ){
    for(let j = 0 ; j < 3 ; j++){
        a[i][j] = prompt("enter values");
    }
}
for(let i = 0 ; i < 2; i ++ ){
    for(let j = 0 ; j < 3 ; j++){
        alert("values : " + a.join(','));
    }
}