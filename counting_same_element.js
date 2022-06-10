//aynı değerden kaç tane var? internet çözümü ben çözemedim

let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

let temp = [];

let pairCounter = 0;

for(let i = 0; i < arr.length; i++){
    if (temp.includes(arr[i])){
        pairCounter++;
        temp = temp.filter(function(element){
            return element != arr[i];
        });
    } else{
        temp.push(arr[i]);
    }
}

console.log(pairCounter);

