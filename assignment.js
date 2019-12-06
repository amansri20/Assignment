// QUESTION 1 

function time(sec) {
    let noOfHrs = Math.floor(sec / 3600);
    let noOfMint = Math.floor((sec % 3600) / 60);
    let noOfSec = Math.floor(sec % 60)

    console.log(`Hours =${noOfHrs},Minute = ${noOfMint} ,Second =  ${noOfSec}`)
}
time(545)

// *********************** 
// QUESTION 2
function find_xor(L,R){
    let XoR= 0; 
    // 1^2^3^4
    for(let i=L ; i<=R ; i++ ){
        XoR ^= i;
    }
    if(XoR % 2 == 0 ){
    console.log("even");
    } else 
    return console.log("odd");

}
find_xor(2,3)

// ***********************
//  QUESTION 3 

strArray = ["WQUUI", "DECFC", "HSUEH", "AJUHK"]
const sorting = (a, b) => {
    return (a > b ? 1 : b > a ? -1 : 0)

}

console.log(strArray.sort(sorting))



















   