
// =============== MY FIRST SOLUTION =====================
// const removeFromArray = function(arr, ...toRemove) {
//     let index = 0;

//     for (let i = 0; i < toRemove.length; i++) {
//         index = arr.indexOf(toRemove[i]);
//         while (index != -1) {
//             arr.splice(index, 1);
//             index = arr.indexOf(toRemove[i]);
//         }
//     }

//     return arr;
// };

// ================= A BETTER SOLUTION ==================
const removeFromArray = function(arr, ...toRemove) {
    let newArray = [];
    arr.forEach((item) => {
        if (!toRemove.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
