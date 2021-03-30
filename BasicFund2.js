// Biggie Size
function makeItBig(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
} 
console.log(makeItBig([-1,3,-5,7,-10,9]))

// 2. Print Low, Return High
function printOneReturnHigh(arr){
    var low = arr[0];
    var high = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(low > arr[i]){
            low = arr[i];
        }
        else if(high < arr[i]){
            high = arr[i];
        }
    }
    console.log(low)
    return high;
}
console.log(printOneReturnHigh([3,2,6,5,9,4]))

// 3. Print One, Return Another
function printOneRetAno(arr){
    var one = arr[arr.length - 2];
    console.log(one)
    for(var i =  0; i < arr.length; i++){
        if(arr[i]%2 == 1){
            return arr[i];
        }
    }
}
console.log(printOneRetAno([2,10,3,7,9,8,3]))

// 4. Double Vision
function doubleVis(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] + arr[i];
    }
    return arr;
}
console.log(doubleVis([1,2,3]))

// 5. Count Positive
function countPos(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            count++;
        }
    }
    arr[arr.length-1] = count;
    return arr;
}
console.log(countPos([2,-1,3,-5,6,-5,7,-9]))

// 6. Even and Odds
function evenOdds(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i]%2 == 1 && arr[i+1]%2 == 1 && arr[i+2]%2== 1){
            console.log("That's odd!")
            i+=2;
        }
        else if(arr[i]%2 == 0 && arr[i+1]%2 == 0 && arr[i+2]%2== 0){
            console.log("Even more so!")
            i+=2;
        }
    }
}
evenOdds([1,3,5,4,6,8,7,8,7,7,7])

// 7. Increment the Seconds
function increSecs(arr){
    for(var i = 0; i < arr.length; i++){
        if(i%2 == 1){
            arr[i] = arr[i] + 1;
            console.log(arr[i])
        }
    }
    return arr;
}
console.log(increSecs([5,2,3,6,5,7,8]))

// 8. Previous Lengths 
function prevLeng(arr){
    for(var i = arr.length-1; i > 0;i--){
        arr[i] = arr[(i-1)].length; 
    }
    return arr;
}
console.log(prevLeng(["hello","dojo","awesome"]))

// 9. Add Seven
function addSeven(arr){
    var newArr = [];
    var x = 0;
    for(var i = 0; i < arr.length; i++){
        x = arr[i] + 7;
        newArr.push(x)
        x = 0;
    }
    console.log(arr)
    return newArr;
}
console.log(addSeven([1,2,3]))

// 10. Reverse Array 
function revArr(arr){
    var left = 0;
    var right = arr.length-1;
    var temp = 0;
    while(right > left){
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp; 
        right--;
        left++;
    }
    return arr;
}
console.log(revArr([2,3,4,5,6,7]))

// 11. Outlook: Negative
function outNeg(arr){
    var newArr = [];
    var x = 0; 
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            x = arr[i] * -1;
            newArr.push(x)
            x = 0;
        }
        else{
            newArr.push(arr[i])
        }
    }
    console.log(arr)
    return newArr;
}
console.log(outNeg([1,-3,5]))

// 12. Always Hungry
function alwaysHungry(arr){
    var count = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy")
            count++
        }
    }
    if(count == 0){
        console.log("I'm hungry")
    }
}
alwaysHungry([1,"food",3,"food"])

// 13. Swap Towards the Center 
function swapTowardCenter(arr){
    var left = 0;
    var right = arr.length-1;
    var temp = 0;
    while(right > left){
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp; 
        right-=2;
        left+=2;
    }
    console.log(arr)
}
swapTowardCenter([1,2,3,4,5,6])

// 14. Scale the Array 
function scaleArray(arr,num){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}
console.log(scaleArray([1,2,3],3))