//function superbowlWin(array){
//    if (array.result === 'W'){
//        console.log(array.year)
//    }
//    console.log(array.find(superbowlWin));
//}

//function superbowlWin(array){
//    array.find(obj);
//    if (obj.result === 'W'){
//        console.log(obj.result);
//    }
//}

//function superbowlWin(record){
//    let gameWin = record.find(function(obj)){
//        return obj.result === "W"
//        }}
//    console.log(gameWin)

//function superbowlWin(array){
//   for (const obj of array) {
//      if (obj.result === "W"){
//        console.log(obj.year);
//      }
//    }
//}

function superbowlWin(record) {
    let item = record.find(obj => obj.result === "W")
    if (item) {
        return item.year
    }
}

superbowlWin(record);
