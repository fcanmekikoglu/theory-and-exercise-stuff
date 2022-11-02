let arr = [2, 4, 5, 7, 9, 18, 99, 290, 340, 561, 750, 751, 752, 753, 899, 1000, 1001, 1300]
let arr2= []
for(let i = 1; i<1024; i++){
    arr2.push(i)
}

let start = 0
let end = arr.length -1 
let target = 4
let target2 = 359

const binarySearch: any = (arr: number[], start: number, end: number, target: number)=>{
    console.log(arr.slice(start,end))
    if (start > end) return false
    let midIndex = Math.floor((start+end)/2)
    if(arr[midIndex] === target) return true
    if(arr[midIndex]>target) return binarySearch(arr, start, midIndex -1, target)
    else return binarySearch(arr, midIndex +1, end, target)
    

}



//binarySearch(arr, start, end, target)
binarySearch(arr2, start, end, target2)
