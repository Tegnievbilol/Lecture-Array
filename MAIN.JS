// function sum(a){
//     let cnt = 0
//     a.forEach(el=>{
//         cnt+=el
//     })
//     return cnt
// }
// console.log(sum([1,2,3,4,5]));



// Task-2
// function sum(a){
//     let cnt = a.toSorted((a,b)=>{
//         return a-b
//     })
//     return cnt.at(-1)
// }
// console.log(sum([6,54,3,21,3,5,56,56,43,]));


// Task-3
// function sum(a){
//     let cnt = 0
//     a.forEach((el) => {
//         if(el%2==0){
//             cnt++
//         }
//     })
//     return cnt
// }
// console.log(sum([1,2,4,5,6]));



// Task-4
// function sum(a,b){
//     for(let i=0;i<a.length;i++){
//         if(a[i]==b){
//             return true
//         }
//     }
//     return false
// }
// console.log(sum([1,3,4,5],2));



// Task-5
// function sum(a){
//     let cnt = 0
//     let cnt1 = 0
//     a.forEach(el=>{
//         cnt1+=el
//         cnt++
//     })
//     return cnt1/cnt
// }
// console.log(sum([1,2,3]));



// Task-6
// function sum(a){
//     let cnt = []
//     let cnt1 = 1
//     for(let i=1;i<=a.length;i++){
//         cnt1*=i
//         cnt.push(cnt1)
//     }
//     return cnt
// }
// console.log(sum([1,2,3,4,5]));


// Task-6
// function sum(arr1, arr2) {
//     return arr1.concat(arr2.filter((value) => !arr1.includes(value)))
// }
// console.log(sum([1,2,3],[3,4,5,6]));

let a = [1,2,3,4,5,6]
let cnt = a.filter((el,idx,array)=>{
    return el%2==0
})
console.log(cnt);