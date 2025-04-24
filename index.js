// {// // 1 Insert element in array

//     let data = [23,45,65,76,34]

//     Array.prototype.add = function(position,element){
//         for(i=this.length-1;i>=0;i--){
//             if(i>=position){
//                 data[i+1] = data[i]
    
//                 if(i==position){
//                     data[i] = element
//                 }
//             }
//         }
//     }
//     data.add(4,666)
//     console.log(data)
//     }
    
//     // 2 delete first element from array
    
//     {
//     let data = [23,45,65,34,65]
//     Array.prototype.deleteFirstElement = function(){
//         for(i=0;i<=this.length-1;i++){
//             data[i] = data[i+1]
//         }
//         data.length = data.length-1
//     }
    
//     data.deleteFirstElement()
//     console.log(data)
//     }
    
//     // // 3 delete last element of array
//     {
    
    
//     let data = [23,4,343,34,54,223]
    
//     Array.prototype.deleteLastElement = function(){
//         this.length = this.length-1
//     }
//     data.deleteLastElement()
//     console.log(data)
    
//     }
    
//     // 4 delete input element from array
//     {
//     let data = [23, 3, 3, 454, 34, 76, 45, 44];
    
//     Array.prototype.deleteAnyElement = function(element) {
//         let k = 0;
    
//         for (let i = 0; i < this.length; i++) {
//             if (this[i] !== element) {
//                 this[k] = this[i];
//                 k++;
//             }
//         }
    
//         // Trim the extra leftover elements
//         this.length = k;
//     };
//     data.deleteAnyElement(44)
//     console.log(data)
//     }
    
    
//     // // 5 find element and show position from array
//     {
//     let data = [23,43,45,54,65,23,75]
//     Array.prototype.findElement = function(element){
//         let index = undefined
//         for(i=0;i<=this.length;i++){
//             if(this[i]==element){
//                 index = i
//                 console.log(`Your element ${element} position is ${i}`)
//                 break
//             }
//         }
//         if(index==undefined){
//             console.log("Element not found this array")
//         }
//     }
//     data.findElement(75)
//     }
    
    
//     // // 6 count input element from array
//     {
//     let data = [23,34,54,34,23,23,65,45,23,23]
//     Array.prototype.countElement = function(element){
//         let count = 0
//         for(i=0;i<=this.length;i++){
//             if(this[i]==element){
//                 count++
//             }
//         }
//         console.log(`Your element ${count} times in array`)
//     }
//     data.countElement(23)
//     }
    
//     // // 7 Marge two array using for loop
    
//     {
//     let data = [23,4,55,33,55,67,65]
//     let data2 = [23,54,67,33,66,77,23]
//     let data3 = []
    
//     for(i=0;i<data.length;i++){
//         data3[i] = data[i]
//     }
//     for(i=0;i<data.length;i++){
//         data3[data.length+i] = data2[i]
//     }
//     console.log(data3)  
//     }
    
    
//     // // 8 Marge two array in sorting form using while loop
//     {
//     let data1 = [23,32,43,54,233]
//     let data2 = [23,64,65,45,34,44]
//     let data3 = []
//     let d1 = 0 
//     let d2 = 0
//     let d3 = 0
    
//     while(d1<data1.length&&d2<data2.length){
//         if(data1[d1]<data2[d2]){
//             data3[d3] = data1[d1]
//             d1++
//         }else{
//             data3[d3] = data2[d2]
//             d2++
//         }d3++
//     }
//     while(d1<data1.length){
//         data3[d3] =  data1[d1]
//         d1++
//         d3++
//     }
//     console.log(data3)
//     }
     
//     // // 9 Marge to array in sorting form using loop
//     {
//     let data = [23,43,54,65,34,23]
//     let data2 = [23,32,44]
//     let data3 = []
//     for(i=0;i<data.length;i++){
//         data3[i] = data[i]
//     }
//     for(i=0;i<data2.length;i++){
//         data3[data.length+i] = data2[i]
//     } 
//     for(i=0;i<data3.length;i++){
//         for(j=0;j<data3.length;j++){
//             if(data3[j]>data3[j+1]){
//                 let temp =  data3[j]
//                data3[j] = data3[j+1]
//                data3[j+1] = temp
//             }
//         }
//     }
//     console.log(data3)
//     }
    
//     // // 10 Reverse array
//     {
//     let data = [23,34,54,65,67,76]
//     let start = 0
//     let end = data.length-1
    
//     while(start<end){
//         let temp = data[start]
//         data[start] = data[end]
//         data[end] = temp
//         start++
//         end--
//     }
//     console.log(data)
    
//     }
    
//     // // 11 Find the maximum element in an array.
//     {
//     let data = [23,34,43,54,55,333,54,66]
//     let d1 = 0
//     let max = data[0]
    
//     while(d1<data.length){
//         if(data[d1]>max){
//             max = data[d1]
//         }
//         d1++
//     }
//     console.log(max)
    
//     }
//     // // 12 Find the minimum element in an array.
//     {
//     let data = [23,32,43,56,65,76,34,65,5]
//     let min = data[0]
//     for(i=0;i<data.length;i++){
//         if(data[i]<min){
//             min = data[i]
//         }
//     }
//     console.log(`${min} is minimum element in this array`)
//     }
    
//     // // 13 Reverse the array without using built-in functions.
//     {
//     let data = [2,3,443,55,65,23,65,77,554]
//     let start = 0
//     let end = data.length-1
    
//     while(start<end){
//         let temp = data[start]
//         data[start] = data[end]
//         data[end] = temp
//         start++
//         end--
    
//     }
//     console.log(data)
//     }
    
//     // // 14 Check if an array is sorted (ascending or not).
//     {
//     let data = [22, 33, 44, 55, 66, 77,4];
//     let isSorted = true;
    
//     for (let i = 0; i < data.length - 1; i++) {
//         if (data[i] > data[i + 1]) {
//             isSorted = false;
//             break;
//         }
//     }
    
//     console.log(isSorted ? "Array is sorted" : "Array is NOT sorted");
    
//     }
//     // // 15 Count the number of even and odd elements in an array.
//     {
//     let data = [23,34,44,55,34,33,66,76,77,23,53,2]
//     let odd = 0
//     let even = 0
    
//     for(i=0;i<data.length;i++){
//         if(data[i]%2==0){
//             even++
//         }else{
//             odd++
//         }
//     }
//     console.log(`In your array ${odd} odd elements and ${even} even element`)
//     }
//     // // 16 Find the sum of all elements in the array.
//     {
//     let data = [23,3,4,54,67,34,54,65,45,2]
//     let total = 0
    
//     for(i=0;i<data.length;i++){
//         total = total+data[i]
//     }
//     console.log(`Your array total is ${total}`)
    
//     }
//     // // 17 Count the number of positive, negative and zeros.
//     {
//     let data = [23,45,65,-34,34,-65,-34,-22,-77,0,0,0]
//     let positive = 0
//     let negative = 0 
//     let zero = 0
    
//     for(i=0;i<data.length;i++){
//         if(data[i]<0){
//             negative++
//         }else if(data[i]>0){
//             positive++
//         }else if(data[i]==0){
//             zero++
//         }
//     }
//     console.log(`In your array ${positive} positive number ${negative} negative number and ${zero} zero number`)
//     }
    
//     // // 18 Find the second largest element.
//     {
//     let data = [23, 32, 43, 54, 5, 76, 45, 77, 555];
    
//     let first = -Infinity;
//     let second = -Infinity;
    
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] > first) {
//             second = first;
//             first = data[i];
//         } else if (data[i] > second && data[i] != first) {
//             second = data[i];
//         }
//     }
    
//     console.log(`Second largest number is: ${second}`);
//     }
    
//     // // 19 Left rotate the array by one place.
//     {
//     let data = [23, 34, 45, 65, 67, 76, 44];
    
//     let first = data[0];
    
//     for (let i = 0; i < data.length - 1; i++) {
//         data[i] = data[i + 1];
//     }
    
//     data[data.length - 1] = first;
    
//     console.log(data);
//     }
    
//     // // 20 Remove duplicates from a sorted array.
//     {
//     let data = [23,34,54,67,76,45,45,34,54]
//     let unique = []
//     data.sort((a,b)=>a-b)
    
//     for(i=0;i<data.length;i++){
//         if(data[i]!==data[i+1]){
//             unique.push(data[i])
//         }
//     }
//     console.log(unique)
    
//     }
//     // // 21 Move all zeros to the end of the array.
//     {
//     let data = [23, 34, 4, 554, 34, 0, 0, 0, 34, 54, 65];
//     let j = 0; 
    
//     for (let i = 0; i < data.length; i++) {
//         if (data[i] !== 0) {
//             data[j] = data[i];
//             j++;
//         }
//     }
    
    
//     while (j < data.length) {
//         data[j] = 0;
//         j++;
//     }
    
//     console.log(data);
//     }
//     // // 22 maximum product subarray
//     {
//     let nums = [2, 4, -5,6];
    
//     let maxProduct = nums[0];
//     let currentMax = nums[0];
//     let currentMin = nums[0];
    
//     for (let i = 1; i < nums.length; i++) {
//         let num = nums[i];
    
//         if (num < 0) {
//             [currentMax, currentMin] = [currentMin, currentMax];
//         }
    
//         currentMax = Math.max(num, num * currentMax);
//         currentMin = Math.min(num, num * currentMin);
    
//         maxProduct = Math.max(maxProduct, currentMax);
//     }
    
//     console.log("Maximum product subarray is: " + maxProduct);
    
//     }
//     // //23 Find the union of two arrays.
//     {
//     let data = [23,34,34,54,56,54,76,67,76]
//     let data2 = [43,54,43,67,76,23,65,77]
//     let data3 = []
    
//     for(i=0;i<data.length;i++){
//         data3[i] = data[i]
//     }
//     for(i=0;i<data2.length;i++){
//         data3[data.length+i] = data2[i]
//     }
//     data3.sort((a,b)=>a-b)
    
//     let unique = []
    
//     for(i=0;i<data3.length;i++){
//        if(data3[i]!==data3[i+1]){
//         unique[unique.length] = data3[i]
//        }
//     }
    
//     console.log(unique)
    
//     }
//     // // 24 Rotate the array by k positions (left or right).
//     {
//     let arr = [2,3,4,6,7]
//     let k = 2
//     let rotated = []
    
//     for(i=k;i<arr.length;i++){
//         rotated[rotated.length]=arr[i]
//     }
//     for(i=0;i<k;i++){
//         rotated[rotated.length] = arr[i]
//     }
//     console.log("Left rotated",rotated)
    
//     let arr2 = [2,3,5,7,5,4]
//     let k2 = 2
//     let n = arr2.length
//     let rotated2 = []
    
//     for(i=n-k2;i<arr2.length;i++){
//        rotated2[rotated2.length]=arr2[i]
//     }
//     for(i=0;i<n-k2;i++){
//         rotated2[rotated2.length]=arr2[i]
//     }
//     console.log(rotated2)
//     }
//     // // 25 Find the majority element (element with freq > n/2).
//     {
//     let arr = [2,3,45,45,45,65,67,76,67,67,67,67,67,67,67,33]
//     let candidate =  null
//     let count = 0
    
//     for(i=0;i<arr.length;i++){
//         if(count===0){
//             candidate = arr[i]
//             count = 1
//         }else if(arr[i]===candidate){
//             count++
//         }else{
//             count--
//         }
//     }
    
//     count = 0
//     for(i=0;i<arr.length;i++){
//         if(arr[i]===candidate){
//             count++
//         }
//     }
//     if(count>arr.length/2){
//         console.log(`Majority number is ${candidate}`)
//     }else{
//         console.log(`No one is majority`)
//     }
    
//     }
//     // // 26 Check if a subarray with 0 sum exists.
//     {
//     let arr = [4,2,-3,2,5,-10]
//     let sum = 0
//     let set = new Set()
//     let found = false
    
//     for(i=0;i<arr.length;i++){
//         sum += arr[i]
//         if(sum===0||set.has(sum)){
//             found = true
//             break
//         }
//         set.add(sum)
    
//     }
//     if(found){
//         console.log("subarray with 0 sum exist")
//     }else{
//         console.log("No subarray with 0 sum")
//     }
//     }
    
    
    
//     // // 27 Find the longest subarray with a given sum K.
//     {
//     let arr = [2,3]
//     let k = 5
//     function longestSubarrayWithSumK(arr,k){
//         let sum = 0
//         let maxLength = 0
//         let map = new Map()
    
//         for(i=0;i<arr.length;i++){
//             sum+=arr[i]
    
//             if(sum===k){
//                 maxLength = i+1
//             }
//             if(map.has(sum-k)){
//                 let prevIndex = map.get(sum-k)
//                 maxLength = Math.max(maxLength,i-prevIndex)
//             }
//             if(!map.has(sum)){
//                 map.set(sum,i)
//             }
//         }
//         return maxLength
        
//     }
    
//     console.log(longestSubarrayWithSumK(arr,k))
//     }
//     // 28 Sort an array of 0s, 1s and 2s (Dutch National Flag).
//     {
//     let arr = [2, 0, 2, 1, 1, 0];
    
//     function sort012(arr) {
//         let low = 0, mid = 0, high = arr.length - 1;
    
//         while (mid <= high) {
//             if (arr[mid] === 0) {
//                 [arr[low], arr[mid]] = [arr[mid], arr[low]];
//                 low++;
//                 mid++;
//             } else if (arr[mid] === 1) {
//                 mid++;
//             } else if (arr[mid] === 2) {
//                 [arr[mid], arr[high]] = [arr[high], arr[mid]];
//                 high--;
//             }
//         }
    
//         return arr;
//     }
    
//     console.log(sort012(arr))
//     }
//     // 29 Find the missing number from 1 to n.
//     {
//     let arr = [1, 2, 3, 5, 7, 8, 10];
//     let missing = [];
    
//     for (let i = 0; i < arr.length - 1; i++) {
//         let current = arr[i];
//         let next = arr[i + 1];
    
//         for (let j = current + 1; j < next; j++) {
//             missing.push(j);
//         }
//     }
    
//     console.log(missing); // Output: [4, 6, 9]
//     }
//     // // 30 Find all pairs in the array whose sum is equal to K.
//     {
    
//     let arr = [1, 4, 5, 6, 3];
//     let k = 7;
//     let set = new Set();
    
//     for (let i = 0; i < arr.length; i++) {
//         let complement = k - arr[i];
//         if (set.has(complement)) {
//             console.log(`[${arr[i]}, ${complement}]`);
//         }
//         set.add(arr[i]);
//     }
    
//     }
    
//     // // 31 Maximum sum of a contiguous subarray (Kadane’s Algo).
//     {
//     let arr = [-2, -2, 2, 3, 4, 5, -13];
    
//     function maxSubarraySum(arr) {
//         let maxsum = arr[0];
//         let currentSum = arr[0];
    
//         for (let i = 1; i < arr.length; i++) {
//             currentSum = Math.max(arr[i], currentSum + arr[i]);
//             maxsum = Math.max(maxsum, currentSum);
//         }
//         return maxsum;
//     }
    
//     console.log(maxSubarraySum(arr));  // Output: 12 (from subarray [2,3,4,5])
//     }
//     // // 32 Maximum product subarray.
//     {
//     function maxProductSubarray(arr){
//         let maxProduct = arr[0]
//         let minproduct = arr[0]
//         let result = arr[0]
    
//         for(i=1;i<arr.length;i++){
//             if(arr[i]<0){
//                 [maxProduct,minproduct] = [minproduct,maxProduct]
//             }
//             maxProduct = Math.max(arr[i],maxProduct * arr[i])
//             minproduct = Math.max(arr[i],minproduct*arr[i])
    
//             result = Math.max(result,maxProduct)
//         }
//         return result
//     }
//     console.log(maxProductSubarray([2,3,-4,5,5]))
//     }
    
//     // // 33 Count inversions in the array
//     {
//     function mergeSortAndCount(arr, low, high) {
//         if (low >= high) return 0;
    
//         let mid = Math.floor((low + high) / 2);
//         let count = 0;
    
//         // Count inversions in left half
//         count += mergeSortAndCount(arr, low, mid);
    
//         // Count inversions in right half
//         count += mergeSortAndCount(arr, mid + 1, high);
    
//         // Count during merge step
//         count += mergeAndCount(arr, low, mid, high);
    
//         return count;
//     }
    
//     function mergeAndCount(arr, low, mid, high) {
//         let left = arr.slice(low, mid + 1);
//         let right = arr.slice(mid + 1, high + 1);
    
//         let i = 0, j = 0, k = low, count = 0;
    
//         while (i < left.length && j < right.length) {
//             if (left[i] <= right[j]) {
//                 arr[k++] = left[i++];
//             } else {
//                 arr[k++] = right[j++];
//                 count += (left.length - i); // Add all remaining left elements
//             }
//         }
    
//         // Copy any remaining elements
//         while (i < left.length) arr[k++] = left[i++];
//         while (j < right.length) arr[k++] = right[j++];
    
//         return count;
//     }
    
//     function countInversions(arr) {
//         return mergeSortAndCount(arr, 0, arr.length - 1);
//     }
    
//     // Test
//     let arr = [2, 4, 1, 3, 5];
//     console.log("Total Inversions:", countInversions(arr)); 
//     }
    
//     // // 34 Trapping Rain Water problem.
//     {
//     let height = [0,1,0,2,1,0,1,3,2,1,2,1];
//     console.log(trap(height)); // Output: 6
    
//     function trap(height){
//         let left = 0, right = height.length - 1;
//         let leftMax = 0, rightMax = 0;
//         let trappedWater = 0;
    
//         while (left < right) {
//             if (height[left] < height[right]) {
//                 if (height[left] >= leftMax) {
//                     leftMax = height[left];
//                 } else {
//                     trappedWater += leftMax - height[left];
//                 }
//                 left++;
//             } else {
//                 if (height[right] >= rightMax) {
//                     rightMax = height[right];
//                 } else {
//                     trappedWater += rightMax - height[right];
//                 }
//                 right--;
//             }
//         }
//         return trappedWater;
//     }
//     }
//     // // 35 Maximum circular subarray sum.
//     {
//         let arr = [5, -3, 6];
//     function maxCirculeSubarraySum(arr){
//         let totalsum = 0
//         let currentMax = 0,maxSum = -Infinity
//         let currentMin = 0,minSum = Infinity
//         for(i=0;i<arr.length;i++){
//             totalsum+=arr[i]
    
//             currentMax = Math.max(arr[i],currentMax+arr[i])
//             maxSum = Math.max(maxSum,currentMax)
    
//             currentMin = Math.min(arr[i],currentMin+arr[i])
//             minSum = Math.min(minSum,currentMin)
//         }
//         if(maxSum<0){
//             return maxSum
//         }
//         return Math.max(maxSum,totalsum-minSum)
//     }
    
//     console.log(maxCirculeSubarraySum(arr))
//     }
//     // // 36 Subarray sum equals K (Prefix Sum + HashMap).
//     {
//     function subarraySum(arr, k) {
//         let map = new Map();
//         map.set(0, 1); 
    
//         let prefixSum = 0;
//         let count = 0;
    
//         for (let i = 0; i < arr.length; i++) {
//             prefixSum += arr[i];
    
//             if (map.has(prefixSum - k)) {
//                 count += map.get(prefixSum - k);
//             }
    
//             map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
//         }
    
//         return count;
//     }
    
//     let arr = [1, 2, 3];
//     let k = 3;
//     console.log(subarraySum(arr, k)); 
//     }
    
//     // // 37 Find the first missing positive integer.
//     {
//         function firstMissingPositive(nums) {
//             let n = nums.length;
        
//             for (let i = 0; i < n; i++) {
//                 while (
//                     nums[i] > 0 &&
//                     nums[i] <= n &&
//                     nums[nums[i] - 1] !== nums[i]
//                 ) {
//                     let correctIndex = nums[i] - 1;
//                     [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
//                 }
//             }
        
//             for (let i = 0; i < n; i++) {
//                 if (nums[i] !== i + 1) {
//                     return i + 1;
//                 }
//             }
        
//             return n + 1;
//         }
//         console.log(firstMissingPositive([3, 4, -1, 1]))     
//     }



// // // 38 Find the largest element in an array
// {
// let data = [23,3,43,56,22,55,6]
// let max = data[0]

// for(i=0;i<data.length-1;i++){
//     if(data[i]>max){
//         max =  data[i]
//     }
// }
// console.log(max)}

// {
//     let data = [23,3,43,56,22,55,6]
//     let max = data[0]
//     let i = 0

//     while(i<data.length){
//         if(data[i]>max){
//             max = data[i]
//         }
//         i++
//     }
//     console.log(max)
// }


// // // 39 Find the second largest element
// {
// let data = [23,34,43,45,65,65,34,54]
// let largest = -Infinity
// let secondLargest = -Infinity
// let i = 0

// while(i<data.length){
//     if(data[i]>largest){
//         secondLargest = largest
//         largest = data[i]
//     }else if(data[i]>secondLargest&&data[i]!==largest){
//         secondLargest = data[i]
//     }
//     i++
// }
// console.log(secondLargest)

// }

// {
//     let data = [23, 32, 44, 55, 54, 65, 56, 76, 73, 44];

// let largest = -Infinity;
// let secondLargest = -Infinity;

// for (let i = 0; i < data.length; i++) {
//   if (data[i] > largest) {
//     secondLargest = largest;
//     largest = data[i];
//   } else if (data[i] > secondLargest && data[i] !== largest) {
//     secondLargest = data[i];
//   }
// }

// console.log("Second Largest:", secondLargest); // Output: 73

// }

// // // 40 Check if array is sorted
// {
// let data = [2, 3, 4, 4, 5, 6, 7, 7];
// let sorted = true;

// for (let i = 0; i < data.length - 1; i++) {
//   if (data[i] > data[i + 1]) {
//     sorted = false;
//     break; 
//   }
// }

// console.log(sorted); 

// }
// {let data = [2,2,3,3,4,4,5,5,6]
// let i = 0
// let sorted = false

// while(i<data.length){
//     if(data[i]>data[i+1]){
//         sorted = false
//         break;
//     }else{
//         sorted = true
//     }
//     i++
// }
// console.log(sorted)}

// // 41 Reverse an array
// {
// let data = [23,23,54,34,65,56,45,32]
// let reversed = []

// for(i=data.length-1;i>=0;i--){
//     reversed[reversed.length] = data[i]
// }
// data = reversed
// console.log(data)
// }


// {let data = [23,23,54,34,65,56,45,32]
// let first = 0
// let last = data.length-1

// while(first<last){
//     let temp = data[first]
//     data[first] = data[last]
//     data[last] = temp
//     first++
//     last--
// }
// console.log(data)}


// // 43 Left rotate array by one

// {let data = [23,32,34,43,45,54,655,6]
// let first = data[0]

// for(i=0;i<data.length;i++){
//     data[i] = data[i+1]
// }
// data.length = data.length-1
// data[data.length] = first
// console.log(data)}

// {let data = [23,32,34,43,45,54,655,6]
// let i = 0
// let first = data[0]
// while(i<data.length){
//     data[i] = data[i+1]
//     i++
// }
// data.length = data.length-1
// data[data.length] = first
// console.log(data)}

// // 44 Left rotate array by d positions

// {let data = [23,32,34,44,56,56,76,56,43]
// let k = 4
// let rotate = []

// for(i=k;i<data.length;i++){
//     rotate[rotate.length] = data[i]
// }
// for(j=0;j<k;j++){
//     rotate[rotate.length] = data[j]
// }
// data = rotate
// console.log(data)}


 
// {let data = [23,32,34,44,56,56,76,56,43]
// let i = 0
// let k = 4
// let tempK = k
// let rotate = []
// while(k<data.length){
//     rotate[rotate.length] = data[k]
//     k++
// }
// while(i<tempK){
//     rotate[rotate.length] = data[i]
//     i++
// }
// console.log(rotate)}


// // 45 Move all zeros to the end
// {
// let data = [23,43,54,0,65,67,0,34,54,0,54];
// let index = 0;


// for (let i = 0; i < data.length; i++) {
//   if (data[i] !== 0) {
//     data[index] = data[i];
//     index++;
//   }
// }


// while (index < data.length) {
//   data[index] = 0;
//   index++;
// }

// console.log(data);
// }

// // // 46 Remove duplicates from sorted array
// {let data = [23,32,43,45,65,67,66,54,33,43,32,67,65]
// let rotate = []

// for(i=0;i<data.length;i++){
//     for(j=0;j<data.length;j++){
//         let temp;
//         if(data[j]>data[j+1]){
//             temp = data[j]
//             data[j] = data[j+1]
//             data[j+1] = temp
//         }
//     }
// }
// for(p=0;p<data.length;p++){
//    if(data[p]!==data[p+1]){
//     rotate[rotate.length] = data[p]
//    }
// }
// data = rotate

// console.log(data)
// }

// {let data = [23,32,43,45,65,67,66,54,33,43,32,67,65]
// let i = 0
// let p = 0
// let rotate = []

// while(i < data.length){
//     let k = 0
//     while(k < data.length - 1){
//         if(data[k] > data[k+1]){
//             let temp = data[k]
//             data[k] = data[k+1]
//             data[k+1] = temp
//         }
//         k++
//     }
//     i++
// }
// while(p<data.length){
//     if(data[p]!==data[p+1]){
//         rotate[rotate.length] = data[p]
//     }
//     p++
// }
// data = rotate

// console.log(data)
// }


// // // 47 Linear Search

// {let data = [23,43,45,54,555,33,66,54]
// let find = 555
// let position = undefined
// for(i=0;i<data.length;i++){
//     if(data[i]===find){
//         position = i
//         break
//     }
// }
// console.log(position)}

// {let data = [23,43,45,54,555,33,66,54]
// let i = 0
// let find = 66
// let position = undefined
// while(i<data.length){
//     if(data[i]===find){
//         position = i
//         break
//     }
//     i++
// }
// console.log(position)}

// // //48 Binary Search

// {
//   let data = [11, 22, 33, 44, 55, 66, 77, 88]
// let find = 22
// let low = 0
// let high = data.length - 1
// let position = -1  // -1 means not found

// while (low <= high) {
//     let mid = Math.floor((low + high) / 2)

//     if (data[mid] === find) {
//         position = mid
//         break
//     } else if (data[mid] < find) {
//         low = mid + 1
//     } else {
//         high = mid - 1
//     }
// }

// console.log(position)
// }

// // // 49 Find missing number from 1 to n
// {
// let data = [2, 3, 5, 6, 8, 9, 11]
// let missing = []

// for (let i = 1; i <= data[data.length - 1]; i++) {
//     let found = false

//     for (let j = 0; j < data.length; j++) {
//         if (data[j] === i) {
//             found = true
//             break
//         }
//     }

//     if (!found) {
//         missing[missing.length] = i
//     }
// }

// console.log(missing)
// }

// {
// let data =  [2, 3, 5, 6, 8, 9, 22]
// let missing = []
// let i = 1
// while(i<=data[data.length-1]){
//     let found = false
//     let j = 0
//     while(j<data.length){
//         if(data[j]===i){
//             found = true
//             break
//         }
//         j++
//     }
//     if(!found){
//         missing[missing.length] = i
//     }
//     i++
// }
// console.log(missing)}


// // // 50 Count even and odd numbers

// {let data = [2,4,5,55,33,24,43,65,55,77,33,22]
// let odd = 0
// let even = 0

// for(i=0;i<data.length;i++){
//     if(data[i]%2===0){
//         even++
//     }else{
//         odd++
//     }
// }
// console.log(`In this array ${even} even numbers and ${odd} odd numbers`)
// }

// {
// let data = [2,4,5,55,33,24,43,65,55,77,33,22]
// let i = 0
// let odd = 0
// let even = 0

// while(i<data.length){
//     if(data[i]%2===0){
//         even++
//     }else{
//         odd++
//     }
//     i++
// }
// console.log(`In this array ${even} even numbers and ${odd} odd numbers`)}


// // // 51 Count positive and negative numbers
// {
// let data = [2,3,-4,-2,33,-45,-56,54,-55,-44]
// let positive = 0
// let nagative = 0

// for(i=0;i<data.length;i++){
//     if(data[i]>0){
//         positive++
//     }else{
//         nagative++
//     }
// }
// console.log(`In this array ${positive} positive and ${nagative} nagative numbers`)}

// {let data = [2,3,-4,-2,33,-45,-56,54,-55,-44]
// let positive = 0
// let nagative = 0
// let i = 0
// while(i<data.length){
//     if(data[i]>0){
//         positive++
//     }else{
//         nagative++
//     }
//     i++
// }
// console.log(`In this array ${positive} positive and ${nagative} nagative numbers`)}

// // // 52 Replace each element with its square
// let data = [2, 3, 4, 54, 45, 54, 33]
// let square = []

// for (let i = 0; i < data.length; i++) {
//     square[square.length] = data[i] * data[i]  
// }

// data = square
// console.log(data)

// {
// let data = [2, 3, 4, 54, 45, 54, 33]
// let square = []
// let i = 0
// while(i<data.length){
//     square[square.length] = data[i]*data[i]
//     i++
// }
// data = square
// console.log(square)
// }

// // // 53 Check for palindrome array

// {let data = [2,3,4,3,2]
// let low = 0
// let high = data.length-1
// let i = 0
// let palindrome = true
// while(low<=high){
//     if(data[low]!==data[high]){
//         palindrome = false
//     }
//     low++
//     high--

// }
// console.log(palindrome)}

// {let data = [2, 3, 4, 3, 2]
// let low = 0
// let high = data.length - 1
// let palindrome = true

// for (let i = 0; i < data.length / 2; i++) {
//     if (data[low] !== data[high]) {
//         palindrome = false
//         break
//     }
//     low++
//     high--
// }

// console.log(palindrome)
// }

// // // 54 Find minimum and maximum element
// {
// let data = [23,34,43,55,65,54,34,65,67,66]
// let lowest = data[0]
// let highest = data[0]
// let temp;
// for(i=0;i<data.length;i++){
//     if(data[i]<lowest){
//         lowest = data[i] 
//     }if(data[i]>highest){
//         highest = data[i]
//     }
// }

// console.log(`In this array smallest element is ${lowest} and biggest is ${highest}`)}


// {let data = [23,34,43,55,65,54,34,65,67,66]
// let lowest = data[0]
// let highest = data[0]
// let i = 0

// while(i<data.length){
//     if(data[i]>highest){
//         highest = data[i]
//     }
//     if(data[i]<lowest){
//         lowest = data[i]
//     }
//     i++
// }
// console.log(`In this array smallest element is ${lowest} and biggest is ${highest}`)}

// // 55 Sort 0s, 1s (Two pointer)

// {let arr = [1, 0, 1, 0, 1, 0, 0, 1]
// let start = 0
// let end = arr.length-1

// while(start<=end){
//     if(arr[start]==1 && arr[end]==0){
//         let temp  =arr[start]
//         arr[start] = arr[end]
//         arr[end] = temp
//     }
//     if(arr[start]==0){
//         start++
//     }
//     if(arr[end]==1){
//         end--
//     }
// }

// console.log(arr)}

// // 56 Merge two sorted arrays

// {
// let data = [4,5,3,4,22,6]
// let data2 = [32,34,43,44]
// let result = []
// for(i=0;i<data.length;i++){
//     result[result.length] = data[i]
// }
// for(j=0;j<data2.length;j++){
//     result[result.length] = data2[j]
// }

// for(k=0;k<result.length;k++){
//     for(p=0;p<result.length;p++){
//         if(result[p]>result[p+1]){
//             let temp = result[p]
//             result[p] = result[p+1]
//             result[p+1] = temp
//         }
//     }
// }
// console.log(result)}

// // 57 Remove a given element from array
// {
// let data = [23,32,34,44,55,65,67,76,54,34]
// let Remove = 65 

// for(i=0;i<data.length;i++){
//     if(data[i]==Remove){
//         data[i] = data[i+1]
//         data.length-1
//     }
    
// }
// console.log(data)
// }

// // 58 Insert an element at index
// {
// let data = [23,32,43,45,56,67,44]
// let index = 2
// let newEle = 55

// for(i=data.length;i>index;i--){
//     data[i] = data[i-1]
// }
// data[index] = newEle
// console.log(data)
// }
// // // 59 Delete an element from index
// {
// let data = [23, 32, 34, 54, 56, 65, 23]
// let index = 3

// for (let i = index; i < data.length - 1; i++) {
//     data[i] = data[i + 1]  
// }

// data.length = data.length - 1

// console.log(data)
// }

// // // 60 Count number of elements greater than k
// {
// let data = [23,32,34,54,56,76,65,45,66]
// let k = 55
// let count = 0
// for(i=0;i<data.length;i++){
//     if(data[i]>k){
//         count++
//     }
// }
// console.log(count)


// }
// // // 62 Find common elements in 2 arrays
// {
// let arr1 = [23, 34, 54, 65, 76, 87];
// let arr2 = [54, 76, 11, 23, 99];
// let common = [];

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
//             common[common.length] = arr1[i];
//             break; 
//         }
//     }
// }

// console.log("Common elements:", common);

// }
// // // 63 Count distinct elements
// {

// let data = [2, 4, 5, 2, 4, 6, 7];
// let unique = []
// let found = false
// for(i=0;i<data.length;i++){
//     for(j=0;j<data.length;j++){
//         if(data[i]===unique[j]){
//             found = true
//             break
//         }
//     } 
//     if(!found){
//         unique[unique.length] = data[i]
//     }
// }
// console.log(unique)
// }
// // // 64 Replace with next greatest element
// {
// let data = [16, 17, 4, 3, 5, 2];

// for (let i = 0; i < data.length - 1; i++) {
//     let max = data[i + 1];
//     for (let j = i + 1; j < data.length; j++) {
//         if (data[j] > max) {
//             max = data[j];
//         }
//     }
//     data[i] = max;
// }
// data[data.length - 1] = -1;

// console.log(data);
// }

// // // 65 Find the union of 2 arrays
// {
// let arr1 = [1, 2, 3, 4]
// let arr2 = [3, 4, 5, 6]
// let union = []


// for (let i = 0; i < arr1.length; i++) {
//     union[union.length] = arr1[i]
// }


// for (let j = 0; j < arr2.length; j++) {
//     let found = false
//     for (let k = 0; k < union.length; k++) {
//         if (arr2[j] === union[k]) {
//             found = true
//             break
//         }
//     }
//     if (!found) {
//         union[union.length] = arr2[j]
//     }
// }

// console.log(union)  
// }

// // // 66 Find the intersection of 2 arrays
// {
// let arr1 = [1, 2, 3, 4]
// let arr2 = [3, 4, 5, 6]
// let intersection = []

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//         if (arr1[i] === arr2[j]) {
            
//             let alreadyIncluded = false
//             for (let k = 0; k < intersection.length; k++) {
//                 if (intersection[k] === arr1[i]) {
//                     alreadyIncluded = true
//                     break
//                 }
//             }

//             if (!alreadyIncluded) {
//                 intersection[intersection.length] = arr1[i]
//             }
//         }
//     }
// }

// console.log("Intersection =>", intersection)
// }

// // // 67 Replace every element with the sum of previous
// {
// let data = [2, 3, 4, 5, 6, 5]
// let previousSum = 0

// for (let i = 0; i < data.length; i++) {
//     let current = data[i]  
//     data[i] = previousSum  
//     previousSum += current  
// }

// console.log(data)
// }
// // //68 Sum of all elements in an array
// {
// let data = [23,34,54,55,65,67,76,54]
// let sum = data[0]
// for(i=0;i<data.length;i++){
//     sum+=data[i]
// }
// console.log(sum)

// }
// // // 69 Prefix sum of array
// {
// let data = [2,3,4,6,7]

// for(i=1;i<data.length;i++){
//     data[i] = data[i]+data[i-1]
// }
// console.log(data)
// }

// // // 70 Find the element that appears once
// {
// let data = [2, 3, 5, 4, 5, 3, 4];
// let unique = 0;

// for (let i = 0; i < data.length; i++) {
//     unique = unique ^ data[i]; 
// }
// console.log("The element that appears once is:", unique);
// }
// // 71 Cyclic rotate array by one
// {
// let data = [10, 20, 30, 40, 50]
// let last = data[data.length-1]
// for(i=data.length-1;i>=0;i--){
//     data[i] = data[i-1]
    
// }
// data[0] = last
// data.length = data.length 
// console.log(data)
// }

// // // 72 Maximum of all subarrays of size k
// {
// let data = [1, 3, 2, 5, 4, 6]
// let k = 3
// let result = []

// for (let i = 0; i <= data.length - k; i++) {
//     let max = data[i]
//     for (let j = i; j < i + k; j++) {
//         if (data[j] > max) {
//             max = data[j]
//         }
//     }
//     result[result.length] = max
// }

// console.log(result)
// }

// // // 73 Segregate even and odd numbers
// {
// let data = [12, 17, 70, 15, 22, 65, 21, 90]
// let data2 = []

// for(i=0;i<data.length;i++){
//     if(data[i]%2==0){
//         data2[data2.length] = data[i]
//     }
// }
// for(j=0;j<data.length;j++){
//     if(data[j]%2!==0){
//         data2[data2.length] = data[j]
//     }
// }
// console.log(data2)
// }
// {

// let data = [12, 17, 70, 15, 22, 65, 21, 90];
// let i = 0;
// let j = data.length - 1;

// while (i < j) {
//     if (data[i] % 2 === 0) {
//         i++;
//     } else if (data[j] % 2 !== 0) {
//         j--;
//     } else {
//         // swap
//         let temp = data[i];
//         data[i] = data[j];
//         data[j] = temp;
//         i++;
//         j--;
//     }
// }

// console.log(data);
// }
// // // 74 Find k-th smallest element
// {
// let data = [23,32,34,43,45,55,65,67]
// let k = 4
// for(i=0;i<data.length;i++){
//     for(j=0;j<data.length;j++){
//         if(data[j]>data[j+1]){
//             let temp = data[j]
//             data[j] = data[j+1]
//             data[j+1] = temp
//         }
//     }
// }
// let thSmallest = data[k-1]
// console.log(thSmallest)
// }
// // // 75 Find k-th largest element
// {
// let data = [23,32,44,54,56,65,67,33]
// let k = 3

// for(i=0;i<data.length;i++){
//     for(j=0;j<data.length;j++){
//         if(data[j]<data[j+1]){
//             let temp = data[j]
//             data[j] = data[j+1]
//             data[j+1] = temp
//         }
//     }
// }
// let kLargest = data[k-1]
// console.log(kLargest)
// }

// // // 76 Count number of digits in array
// {
// let data = [23, 4, 567, 89, 1];
// let totalDigits = 0;

// for (let i = 0; i < data.length; i++) {
//     let num = data[i];

    
//     if (num === 0) {
//         totalDigits++;
//     } else {
//         while (num > 0) {
//             totalDigits++;
//             num = Math.floor(num / 10);
//         }
//     }
// }

// console.log("Total digits in array:", totalDigits);

// }
// // // 77 Check if array is palindrome
// {
// let data = [2,3,4,5,4,6,3,2]
// let palindrome = true
// let i = 0
// let low = 0 
// let high = data.length-1
// while(low<=high){
//     if(data[low]!==data[high]){
//         palindrome = false
//         break
//     }
//     low++
//     high--
// }
// console.log(palindrome)
// }

// // // 78 Find majority element (freq > n/2)
// {
// let data = [2, 2, 1, 2, 3, 2, 2];
// let n = data.length;
// let majority = undefined;

// for (let i = 0; i < n; i++) {
//     let count = 0;
//     for (let j = 0; j < n; j++) {
//         if (data[i] === data[j]) {
//             count++;
//         }
//     }
//     if (count > Math.floor(n / 2)) {
//         majority = data[i];
//         break;
//     }
// }

// if (majority !== undefined) {
//     console.log(`Majority element is ${majority}`);
// } else {
//     console.log("No majority element found");
// }
// }
// {
// let data = [2, 2, 1, 2, 3, 2, 2];
// let n = data.length;


// let count = 0;
// let candidate = null;

// for (let i = 0; i < n; i++) {
//     if (count === 0) {
//         candidate = data[i];
//         count = 1;
//     } else if (data[i] === candidate) {
//         count++;
//     } else {
//         count--;
//     }
// }


// count = 0;
// for (let i = 0; i < n; i++) {
//     if (data[i] === candidate) {
//         count++;
//     }
// }

// if (count > Math.floor(n / 2)) {
//     console.log(`Majority element is ${candidate}`);
// } else {
//     console.log("No majority element found");
// }
// }

// // // 79 Count set bits in array elements
// {
// let data = [5, 3, 7, 8]; 
// let totalSetBits = 0;

// for (let i = 0; i < data.length; i++) {
//     let num = data[i];
//     while (num > 0) {
//         if (num % 2 === 1) {
//             totalSetBits++;
//         }
//         num = Math.floor(num / 2);
//     }
// }

// console.log("Total set bits in array elements:", totalSetBits);

// }

// // // 80 Print all subarrays
// {
// let data = [1, 2, 3];

// for (let i = 0; i < data.length; i++) {
//     for (let j = i; j < data.length; j++) {
//         let subarray = "";
//         for (let k = i; k <= j; k++) {
//             subarray += data[k] + " ";
//         }
//         console.log(subarray.trim());
//     }
// }
// }
// // // 82 Count number of pairs with sum k
// {
// let data = [3,4,3,5,2,3,4,3]   
// let k = 7                     
// let count = 0                 


// for(i=0; i<data.length; i++){
//     for(j=i+1; j<data.length; j++){
//         if(data[i] + data[j] == k){  
//             count++                  
//         }
//     }
// }

// console.log(count)   
// }

// // // 83 Maximum product of two elements
// {
// let data = [5, -10, 6, -3, 7, 9];

// let max1 = -Infinity, max2 = -Infinity;
// let min1 = Infinity, min2 = Infinity;

// for (let i = 0; i < data.length; i++) {
//     let val = data[i];

    
//     if (val > max1) {
//         max2 = max1;
//         max1 = val;
//     } else if (val > max2) {
//         max2 = val;
//     }

    
//     if (val < min1) {
//         min2 = min1;
//         min1 = val;
//     } else if (val < min2) {
//         min2 = val;
//     }
// }

// let product1 = max1 * max2;
// let product2 = min1 * min2;

// let maxProduct = Math.max(product1, product2);

// console.log("Maximum Product:", maxProduct);
// }

// // // 84 Count how many times an element appears
// {
// let data = [2, 3, 2, 4, 3, 5, 2];
// let freq = {};

// for (let i = 0; i < data.length; i++) {
//     let element = data[i];
//     if (freq[element]) {
//         freq[element]++;
//     } else {
//         freq[element] = 1;
//     }
// }

// for (let key in freq) {
//     console.log(`${key} → ${freq[key]} times`);
// }

// }

// // 85 Count how many times an element appears 
// {
// let data = [4, 2, -3, 1, 6];
// let prefixSum = 0;
// let set = new Set();

// for (let i = 0; i < data.length; i++) {
//     prefixSum += data[i];

    
//     if (prefixSum === 0 || set.has(prefixSum)) {
//         console.log("Subarray with 0 sum exists.");
//         return;
//     }

    
//     set.add(prefixSum);
// }

// console.log("No subarray with 0 sum.");

// }
// // // 86 Replace with next prime number
// {
// let data = [10, 15, 20, 23, 29];

// function isPrime(num) {
//     if (num < 2) return false;  
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false; 
//         }
//     }
//     return true; 
// }

// for (let i = 0; i < data.length; i++) {
//     let next = data[i] + 1;

   
//     while (!isPrime(next)) {
//         next++;
//     }

//     data[i] = next; 
// }

// console.log(data);
// }
// // // 87 Check if array can become strictly increasing
// {
// function canBeStrictlyIncreasing(arr) {
//     let violation = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] <= arr[i - 1]) {
//             violation++;

           
//             if (violation > 1) return false;

            
//             if (i === 1 || arr[i] > arr[i - 2]) {
                
//             } else {
              
//                 arr[i] = arr[i - 1];
//             }
//         }
//     }

//     return true;
// }

// // Example usage:
// let data1 = [1, 3, 2, 4];   
// let data2 = [1, 3, 2, 1];   

// console.log(canBeStrictlyIncreasing(data1));  
// console.log(canBeStrictlyIncreasing(data2));  
// }

// // // 88 Find all elements with even number of digits
// {
// let data = [23,333,4,55,3,444]
// let even = []
// for(i=0;i<data.length;i++){
//     let temp = data[i].toString().length
//     if(temp%2==0){
//         even[even.length] = data[i]
//     }
// }
// console.log(even)
// }
// // // 89 Merge 2 sorted arrays without extra space
// {
// let arr1 = [1, 4, 7, 8, 10];
// let arr2 = [2, 3, 9];

// function merge(arr1, arr2) {
//     let n = arr1.length;
//     let m = arr2.length;
//     let gap = Math.ceil((n + m) / 2);

//     while (gap > 0) {
//         let i = 0;
//         let j = gap;

//         while (j < n + m) {
           
//             let a = i < n ? arr1[i] : arr2[i - n];
//             let b = j < n ? arr1[j] : arr2[j - n];

//             if (a > b) {
                
//                 if (i < n && j < n) {
//                     [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
//                 } else if (i < n && j >= n) {
//                     [arr1[i], arr2[j - n]] = [arr2[j - n], arr1[i]];
//                 } else {
//                     [arr2[i - n], arr2[j - n]] = [arr2[j - n], arr2[i - n]];
//                 }
//             }

//             i++;
//             j++;
//         }

//         if (gap === 1) break;
//         gap = Math.ceil(gap / 2);
//     }
// }

// merge(arr1, arr2);
// console.log("Arr1:", arr1);
// console.log("Arr2:", arr2);
// }

// // // 90 Kadane’s Algorithm (Max subarray sum)
// {
// let data = [5, -2, -3, 7, -1, 4, -6, 2]

// let currentSum = data[0]
// let maxSum = data[0]

// for(i=1;i<data.length;i++){
//     currentSum = Math.max(data[i],currentSum+data[i])
//     maxSum = Math.max(maxSum,currentSum)
// }
// console.log(maxSum)
// }
// // // 91 Longest subarray with sum K
// {
// let arr = [1, 2, 3, 1, 1, 1, 1]
// let K = 5

// function longestSubarrayWithSumK(arr, K) {
//     let map = new Map();
//     let currSum = 0;
//     let maxLen = 0;

//     for (let i = 0; i < arr.length; i++) {
//         currSum += arr[i];

//         if (currSum === K) {
//             maxLen = i + 1;
//         }

//         if (map.has(currSum - K)) {
//             maxLen = Math.max(maxLen, i - map.get(currSum - K));
//         }

        
//         if (!map.has(currSum)) {
//             map.set(currSum, i);
//         }
//     }

//     return maxLen;
// }
// console.log(longestSubarrayWithSumK(arr,K))
// }
// // // 92 Maximum product subarray
// {
// let arr = [2, 3, -2, 4]

// function maxProductSubarray(arr){
//     let max_so_far = arr[0]
//     let max_ending_here = arr[0]
//     let min_ending_here = arr[0]

//     for(i=1;i<arr.length;i++){
//         let current = arr[i]
//         if(current<0){
//             [max_ending_here,min_ending_here]= [min_ending_here,max_ending_here]
//         }
//         max_ending_here = Math.max(current,max_ending_here*current)
//         min_ending_here = Math.max(current,min_ending_here*current)

//         max_so_far = Math.max(max_so_far,max_ending_here)
//         return max_so_far
//     }
// }
// console.log(maxProductSubarray(arr))

// }
// // // 93 Count inversions in array
// {
// const arr = [2, 4, 1, 3, 5];

// function countInversions(arr) {
//     function mergeSort(arr, left, right) {
//         let invCount = 0;

//         if (left < right) {
//             let mid = Math.floor((left + right) / 2);

            
//             invCount += mergeSort(arr, left, mid);

            
//             invCount += mergeSort(arr, mid + 1, right);

            
//             invCount += merge(arr, left, mid, right);
//         }

//         return invCount;
//     }

//     function merge(arr, left, mid, right) {
//         let temp = [];
//         let i = left;
//         let j = mid + 1;
//         let invCount = 0;

//         while (i <= mid && j <= right) {
//             if (arr[i] <= arr[j]) {
//                 temp.push(arr[i]);
//                 i++;
//             } else {
//                 temp.push(arr[j]);
//                 invCount += (mid - i + 1); 
//                 j++;
//             }
//         }

        
//         while (i <= mid) temp.push(arr[i++]);
//         while (j <= right) temp.push(arr[j++]);

      
//         for (let k = 0; k < temp.length; k++) {
//             arr[left + k] = temp[k];
//         }

//         return invCount;
//     }

//     return mergeSort(arr, 0, arr.length - 1);
// }

// console.log(countInversions(arr));
// }
// // // 93 Dutch National Flag (Sort 0,1,2)
// {
// let arr = [2, 0, 2, 1, 1, 0];
// let low = 0
// let mid = 0
// let high = arr.length-1

// while(mid<=high){
//     if(arr[mid]==0){
//         let temp = arr[low]
//         arr[low] = arr[mid]
//         arr[mid] = temp

//         low++
//         mid++
//     }else if(arr[mid==1]){
//         mid++
//     }else{
//         let temp = arr[mid]
//         arr[mid] = arr[high]
//         arr[high] = temp

//         high--
//     }
// }
// console.log(arr)
// }

// // // 94 Subarray sum equals K
// {
// let arr = [1, 1, 1];
// let K = 2;

// let map = {}; 
// map[0] = 1;   

// let prefixSum = 0;
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];

//     let remove = prefixSum - K;

//     if (map[remove] !== undefined) {
//         count += map[remove];
//     }

//     if (map[prefixSum] !== undefined) {
//         map[prefixSum]++;
//     } else {
//         map[prefixSum] = 1;
//     }
// }

// console.log(count);  
// }

// // // 95 Longest subarray with equal 0s and 1s
// {
// let arr = [0, 1, 0, 1, 1, 0];


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//         arr[i] = -1;
//     }
// }

// let sum = 0;
// let maxLen = 0;

// let map = {};      
// map[0] = -1;       

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];

//     if (map[sum] !== undefined) {
        
//         let len = i - map[sum];
//         if (len > maxLen) {
//             maxLen = len;
//         }
//     } else {
      
//         map[sum] = i;
//     }
// }

// console.log(maxLen); 

// }
// // // 96 Count pairs with given sum
// {

// let arr = [1, 5, 7, -1, 5];
// let K = 6;
// let count = 0;


// let freq = [];

// for (let i = 0; i < arr.length; i++) {
//   let complement = K - arr[i];

  
//   for (let j = 0; j < freq.length; j++) {
//     if (freq[j][0] === complement) {
//       count += freq[j][1]; 
//       break;
//     }
//   }

  
//   let found = false;
//   for (let j = 0; j < freq.length; j++) {
//     if (freq[j][0] === arr[i]) {
//       freq[j][1] += 1;
//       found = true;
//       break;
//     }
//   }

  
//   if (!found) {
//     freq[freq.length] = [arr[i], 1];
//   }
// }

// console.log("Total Pairs:", count); 
// }
// // // 98 Subarray with sum divisible by k
// {
// function subarraysDivByK(arr, K) {
//     let count = 0;
//     let prefixSum = 0;
//     let modCount = new Array(K).fill(0);
//     modCount[0] = 1; 
//     for (let i = 0; i < arr.length; i++) {
//       prefixSum += arr[i];
  
     
//       let mod = ((prefixSum % K) + K) % K;
  
//       count += modCount[mod]; 
  
//       modCount[mod]++; 
//     }
  
//     return count;
//   }
  
  
//   let arr = [4, 5, 0, -2, -3, 1];
//   let K = 5;
//   console.log("Total subarrays divisible by K:", subarraysDivByK(arr, K));
//   }

// // // 99 Longest common prefix in array
// {
// function longestCommonPrefix(arr) {
//     if (arr.length === 0) return "";
  
//     let prefix = arr[0];
  
//     for (let i = 1; i < arr.length; i++) {
//       let j = 0;
//       while (j < prefix.length && j < arr[i].length && prefix[j] === arr[i][j]) {
//         j++;
//       }
//       prefix = prefix.substring(0, j);
//       if (prefix === "") break;
//     }
  
//     return prefix;
//   }
  
  
//   let arr = ["flower", "flow", "flight"];
//   console.log("Longest Common Prefix:", longestCommonPrefix(arr)); 
//   }

// // // 100 Next greater element
// {
// function nextGreaterElements(arr) {
//     let n = arr.length;
//     let stack = [];
//     let result = new Array(n);
  
//     for (let i = n - 1; i >= 0; i--) {
//       while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
//         stack.pop();
//       }
  
//       if (stack.length === 0) {
//         result[i] = -1;
//       } else {
//         result[i] = stack[stack.length - 1];
//       }
  
//       stack.push(arr[i]);
//     }
  
//     return result;
//   }
  
  
//   let arr = [4, 5, 2, 25];
//   console.log(nextGreaterElements(arr)); 
//   }

// // // 101 Next smaller element
// {
// function nextSmallerElement(arr) {
//     let n = arr.length;
//     let stack = [];
//     let result = new Array(n);
  
//     for (let i = n - 1; i >= 0; i--) {
//       while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
//         stack.pop();
//       }
  
//       result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
  
//       stack.push(arr[i]);
//     }
  
//     return result;
//   }
  
  
//   let arr = [4, 8, 5, 2, 25];
//   console.log(nextSmallerElement(arr)); 
//   }

// // // 102 Trapping Rain Water
// {
// function trap(height) {
//     let n = height.length;
//     let maxLeft = new Array(n);
//     let maxRight = new Array(n);
//     let water = 0;
  
//     maxLeft[0] = height[0];
//     for (let i = 1; i < n; i++) {
//       maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
//     }
  
//     maxRight[n - 1] = height[n - 1];
//     for (let i = n - 2; i >= 0; i--) {
//       maxRight[i] = Math.max(maxRight[i + 1], height[i]);
//     }
  
//     for (let i = 0; i < n; i++) {
//       let minHeight = Math.min(maxLeft[i], maxRight[i]);
//       if (minHeight > height[i]) {
//         water += minHeight - height[i];
//       }
//     }
  
//     return water;
//   }
  
  
//   let height = [0,1,0,2,1,0,1,3,2,1,2,1];
//   console.log("Total Trapped Water:", trap(height)); 
//   }

// // // 103 Trapping Rain Water
// {
// function trap(height) {
//     let n = height.length;
//     let maxLeft = new Array(n);
//     let maxRight = new Array(n);
//     let water = 0;
  
//     maxLeft[0] = height[0];
//     for (let i = 1; i < n; i++) {
//       maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
//     }
  
//     maxRight[n - 1] = height[n - 1];
//     for (let i = n - 2; i >= 0; i--) {
//       maxRight[i] = Math.max(maxRight[i + 1], height[i]);
//     }
  
//     for (let i = 0; i < n; i++) {
//       let minHeight = Math.min(maxLeft[i], maxRight[i]);
//       if (minHeight > height[i]) {
//         water += minHeight - height[i];
//       }
//     }
  
//     return water;
//   }
  
  
//   let height = [0,1,0,2,1,0,1,3,2,1,2,1];
//   console.log("Total Trapped Water:", trap(height)); 
//   }

// // // 104 Stock Buy and Sell (1 transaction)
// {
// function maxProfit(prices) {
//     let minPrice = Infinity;
//     let maxProfit = 0;
  
//     for (let i = 0; i < prices.length; i++) {
//       if (prices[i] < minPrice) {
//         minPrice = prices[i]; 
//       } else {
//         let profit = prices[i] - minPrice;
//         if (profit > maxProfit) {
//           maxProfit = profit; 
//         }
//       }
//     }
  
//     return maxProfit;
//   }
  
  
//   let prices = [7, 1, 5, 3, 6, 4];
//   console.log("Maximum Profit:", maxProfit(prices)); 
//   }
// // // 105 Stock Buy and Sell (infinite transactions)
// {
//   function maxProfit(prices) {
//     let profit = 0;
  
//     for (let i = 1; i < prices.length; i++) {
//       if (prices[i] > prices[i - 1]) {
//         profit += prices[i] - prices[i - 1];
//       }
//     }
  
//     return profit;
//   }
  
  
//   let prices = [1, 5, 3, 8, 4, 9];
//   console.log("Maximum Profit:", maxProfit(prices)); 
//   }

// // // 106 Leaders in array
// {
// function findLeaders(arr) {
//     let n = arr.length;
//     let leaders = [];
//     let maxFromRight = arr[n - 1];
  
    
//     leaders[0] = maxFromRight;
//     let index = 1;
  
//     for (let i = n - 2; i >= 0; i--) {
//       if (arr[i] >= maxFromRight) {
//         maxFromRight = arr[i];
//         leaders[index] = maxFromRight;
//         index++;
//       }
//     }
  
    
//     let result = [];
//     for (let i = index - 1; i >= 0; i--) {
//       result[index - 1 - i] = leaders[i];
//     }
  
//     return result;
//   }
  
  
//   let arr = [16, 17, 4, 3, 5, 2];
//   console.log("Leaders:", findLeaders(arr)); 
//   }

// // // 107 Equilibrium point
// {
// function equilibriumPoint(arr) {
//     let totalSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       totalSum += arr[i];
//     }
  
//     let leftSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       let rightSum = totalSum - leftSum - arr[i];
//       if (leftSum === rightSum) {
//         return i + 1; 
//       }
//       leftSum += arr[i];
//     }
  
//     return -1; 
//   }
  
  
//   let arr = [1, 3, 5, 2, 2];
//   console.log("Equilibrium Point (1-based):", equilibriumPoint(arr)); 
//   }

// // // 107  Find repeating and missing element
// {
// function findMissingRepeating(arr) {
//     let n = arr.length;
  
//     let sum = (n * (n + 1)) / 2;
//     let sumSq = (n * (n + 1) * (2 * n + 1)) / 6;
  
//     let actualSum = 0;
//     let actualSqSum = 0;
  
//     for (let i = 0; i < n; i++) {
//       actualSum += arr[i];
//       actualSqSum += arr[i] * arr[i];
//     }
  
//     let diff = sum - actualSum; 
//     let squareDiff = sumSq - actualSqSum;
  
//     let sumXY = squareDiff / diff; 
  
//     let x = (diff + sumXY) / 2;
//     let y = x - diff;
  
//     return {
//       missing: x,
//       repeating: y
//     };
//   }
  
  
//   let arr = [4, 3, 6, 2, 1, 1];
//   let res = findMissingRepeating(arr);
//   console.log("Missing:", res.missing, "Repeating:", res.repeating); 
//   }

// // // 108 Find all duplicates in array
// {
// function findDuplicates(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//       let index = Math.abs(arr[i]) - 1;
  
//       if (arr[index] < 0) {
        
//         let len = res.length;
//         res[len] = Math.abs(arr[i]);
//       } else {
        
//         arr[index] = -arr[index];
//       }
//     }
  
//     return res;
//   }
  
  
//   let arr = [4, 3, 2, 7, 8, 2, 3, 1];
//   console.log("Duplicates:", findDuplicates(arr)); 
  
// }
// // // 109 Count subarrays with given xor
// {
// function countSubarraysWithXor(arr, k) {
//     let count = 0;
//     let xor = 0;
  
    
//     let freq = {};
  
//     for (let i = 0; i < arr.length; i++) {
//       xor = xor ^ arr[i];
  
//       if (xor === k) {
//         count++;
//       }
  
//       let target = xor ^ k;
  
//       if (freq[target] !== undefined) {
//         count += freq[target];
//       }
  
//       if (freq[xor] === undefined) {
//         freq[xor] = 1;
//       } else {
//         freq[xor]++;
//       }
//     }
  
//     return count;
//   }
  
  
//   let arr = [4, 2, 2, 6, 4];
//   let k = 6;
//   console.log("Count:", countSubarraysWithXor(arr, k)); 
//   }

// // // 110 Spiral traversal of matrix
// {
// function spiralTraversal(matrix) {
//     let result = [];
  
//     let top = 0;
//     let bottom = matrix.length - 1;
//     let left = 0;
//     let right = matrix[0].length - 1;
  
//     while (top <= bottom && left <= right) {
    
//       for (let i = left; i <= right; i++) {
//         result[result.length] = matrix[top][i];
//       }
//       top++;
  
      
//       for (let i = top; i <= bottom; i++) {
//         result[result.length] = matrix[i][right];
//       }
//       right--;
  
      
//       if (top <= bottom) {
//         for (let i = right; i >= left; i--) {
//           result[result.length] = matrix[bottom][i];
//         }
//         bottom--;
//       }
  
      
//       if (left <= right) {
//         for (let i = bottom; i >= top; i--) {
//           result[result.length] = matrix[i][left];
//         }
//         left++;
//       }
//     }
  
//     return result;
//   }
  
  
//   let mat = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//   console.log("Spiral Order:", spiralTraversal(mat)); 
//   }

// // // 111 Diagonal traversal of matrix
// {
// function diagonalTraversal(matrix) {
//     let m = matrix.length;
//     let n = matrix[0].length;
//     let result = [];
  
//     for (let d = 0; d < m + n - 1; d++) {
//       let intermediate = [];
  
//       let r = d < n ? 0 : d - n + 1;
//       let c = d < n ? d : n - 1;
  
//       while (r < m && c >= 0) {
//         intermediate[intermediate.length] = matrix[r][c];
//         r++;
//         c--;
//       }
  
      
//       if (d % 2 === 0) {
//         for (let i = intermediate.length - 1; i >= 0; i--) {
//           result[result.length] = intermediate[i];
//         }
//       } else {
//         for (let i = 0; i < intermediate.length; i++) {
//           result[result.length] = intermediate[i];
//         }
//       }
//     }
  
//     return result;
//   }
  

//   let mat = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   console.log("Diagonal Traversal:", diagonalTraversal(mat)); 
  
//   }
// // // 112 Rotate matrix 90 degrees
// {
// function rotateMatrix90(matrix) {
//     let n = matrix.length;
  
    
//     for (let i = 0; i < n; i++) {
//       for (let j = i + 1; j < n; j++) {
        
//         let temp = matrix[i][j];
//         matrix[i][j] = matrix[j][i];
//         matrix[j][i] = temp;
//       }
//     }
  
    
//     for (let i = 0; i < n; i++) {
//       let left = 0, right = n - 1;
//       while (left < right) {
//         let temp = matrix[i][left];
//         matrix[i][left] = matrix[i][right];
//         matrix[i][right] = temp;
//         left++;
//         right--;
//       }
//     }
  
//     return matrix;
//   }
  
  
//   let mat = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
  
//   console.log("Rotated Matrix:", rotateMatrix90(mat));
//   }

// // // 113 Search in a rotated sorted array
// {
// function searchRotatedArray(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
  
//     while (low <= high) {
//       let mid = Math.floor((low + high) / 2);
  
//       if (arr[mid] === target) return mid;
  
      
//       if (arr[low] <= arr[mid]) {
//         if (target >= arr[low] && target < arr[mid]) {
//           high = mid - 1;
//         } else {
//           low = mid + 1;
//         }
//       }
    
//       else {
//         if (target > arr[mid] && target <= arr[high]) {
//           low = mid + 1;
//         } else {
//           high = mid - 1;
//         }
//       }
//     }
  
//     return -1;
//   }
  
  
//   console.log(searchRotatedArray([4,5,6,7,0,1,2], 6)); 
//   }

// // // 114 Peak element in array
// {
//   function findPeakElement(arr) {
//     let low = 0;
//     let high = arr.length - 1;
  
//     while (low <= high) {
//       let mid = Math.floor((low + high) / 2);
  
//       let left = mid === 0 || arr[mid] >= arr[mid - 1];
//       let right = mid === arr.length - 1 || arr[mid] >= arr[mid + 1];
  
//       if (left && right) return mid;
  
//       if (mid > 0 && arr[mid - 1] > arr[mid]) {
//         high = mid - 1;
//       } else {
//         low = mid + 1;
//       }
//     }
  
//     return -1;
//   }
  
  
//   let arr = [1, 3, 20, 4, 1, 0];
//   console.log("Peak element index:", findPeakElement(arr)); 
//   }

// // // 115 Minimum platforms (train arrival/departure)
// {
// function minPlatforms(arrival, departure) {
//     let n = arrival.length;
    
    
//     for (let i = 0; i < n - 1; i++) {
//       for (let j = i + 1; j < n; j++) {
//         if (arrival[i] > arrival[j]) {
//           let temp = arrival[i];
//           arrival[i] = arrival[j];
//           arrival[j] = temp;
//         }
//         if (departure[i] > departure[j]) {
//           let temp = departure[i];
//           departure[i] = departure[j];
//           departure[j] = temp;
//         }
//       }
//     }
  
//     let platformNeeded = 0, maxPlatforms = 0;
//     let i = 0, j = 0;
  
  
//     while (i < n && j < n) {
//       if (arrival[i] <= departure[j]) {
//         platformNeeded++;
//         if (platformNeeded > maxPlatforms) {
//           maxPlatforms = platformNeeded;
//         }
//         i++;
//       } else {
//         platformNeeded--;
//         j++;
//       }
//     }
  
//     return maxPlatforms;
//   }
  
  
//   let arr = [900, 940, 950, 1100, 1500, 1800];
//   let dep = [910, 1200, 1120, 1130, 1900, 2000];
  
//   console.log("Minimum Platforms Required:", minPlatforms(arr, dep)); 
  
// }
// // // 116 Merge overlapping intervals
// {
// function mergeIntervals(intervals) {
//     if (intervals.length === 0) return [];
  
    
//     for (let i = 0; i < intervals.length - 1; i++) {
//       for (let j = i + 1; j < intervals.length; j++) {
//         if (intervals[i][0] > intervals[j][0]) {
//           let temp = intervals[i];
//           intervals[i] = intervals[j];
//           intervals[j] = temp;
//         }
//       }
//     }
  
//     let result = [];
//     let current = intervals[0];
  
//     for (let i = 1; i < intervals.length; i++) {
//       let next = intervals[i];
  
      
//       if (current[1] >= next[0]) {
//         current[1] = Math.max(current[1], next[1]);  
//       } else {
//         result.push(current);
//         current = next;
//       }
//     }
  
//     result.push(current); 
//     return result;
//   }
  
  
//   let intervals = [[1,3],[2,6],[8,10],[15,18]];
//   console.log("Merged Intervals:", mergeIntervals(intervals)); 

  
// }
// // // 117 Sliding window maximum
// {
// function maxSlidingWindow(arr, k) {
//     let n = arr.length;
//     let result = [];
//     let dq = []; 
  
//     for (let i = 0; i < n; i++) {
      
//       if (dq.length > 0 && dq[0] <= i - k) {
//         dq.shift();
//       }
  
      
//       while (dq.length > 0 && arr[dq[dq.length - 1]] < arr[i]) {
//         dq.pop();
//       }
  
//       dq.push(i);
  
     
//       if (i >= k - 1) {
//         result.push(arr[dq[0]]); 
//       }
//     }
  
//     return result;
//   }
  
//   // Example
//   let arr = [1,3,-1,-3,5,3,6,7];
//   let k = 3;
//   console.log("Sliding Window Max:", maxSlidingWindow(arr, k)); 
  
// }
// // // 118 Median of running stream
// {
// class MedianStream {
//     constructor() {
//       this.maxHeap = []; 
//       this.minHeap = []; 
//     }
  
//     addNum(num) {
//       if (this.maxHeap.length === 0 || num <= -this.maxHeap[0]) {
//         this.maxHeap.push(-num); 
//         this._heapifyUp(this.maxHeap);
//       } else {
//         this.minHeap.push(num); 
//         this._heapifyUp(this.minHeap);
//       }
  
    
//       if (this.maxHeap.length > this.minHeap.length + 1) {
//         this.minHeap.push(-this.maxHeap.shift());
//         this._heapifyUp(this.minHeap);
//       } else if (this.minHeap.length > this.maxHeap.length) {
//         this.maxHeap.push(-this.minHeap.shift());
//         this._heapifyUp(this.maxHeap);
//       }
//     }
  
//     findMedian() {
//       if (this.maxHeap.length === this.minHeap.length) {
//         return (-this.maxHeap[0] + this.minHeap[0]) / 2; 
//       } else {
//         return -this.maxHeap[0]; 
//       }
//     }
  
   
//     _heapifyUp(heap) {
//       let index = heap.length - 1;
//       while (index > 0) {
//         let parentIndex = Math.floor((index - 1) / 2);
//         if (heap[index] > heap[parentIndex]) break;
//         [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
//         index = parentIndex;
//       }
//     }
//   }
  
//   function findMedianOfStream(stream) {
//     const medianStream = new MedianStream();
//     const result = [];
  
//     for (const num of stream) {
//       medianStream.addNum(num);
//       result.push(medianStream.findMedian());
//     }
  
//     return result;
//   }
  
 
//   let stream = [1, 5, 2, 8, 3, 7];
//   console.log("Median of Running Stream:", findMedianOfStream(stream));
  
//   }
// // // 119 Maximize sum of i*arr[i]
// {
// function maximizeSum(arr) {
//     let n = arr.length;
    
    
//     let sum = 0, currentSum = 0;
//     for (let i = 0; i < n; i++) {
//       sum += arr[i];
//       currentSum += i * arr[i];
//     }
  
    
//     let maxSum = currentSum;
  
    
//     for (let i = 1; i < n; i++) {
//       currentSum = currentSum - (n - 1) * arr[n - i] + sum;
//       maxSum = Math.max(maxSum, currentSum);
//     }
  
//     return maxSum;
//   }
  
  
//   let arr = [8, 3, 1, 2];
//   console.log("Maximized Sum:", maximizeSum(arr)); 
//   }
// // // 120 Smallest positive missing number
// {
// function firstMissingPositive(arr) {
//     let n = arr.length;
  
   
//     for (let i = 0; i < n; i++) {
//       while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
//         let temp = arr[i];
//         arr[i] = arr[arr[i] - 1];
//         arr[temp - 1] = temp;
//       }
//     }
  
    
//     for (let i = 0; i < n; i++) {
//       if (arr[i] !== i + 1) {
//         return i + 1;
//       }
//     }
  
   
//     return n + 1;
//   }
  
  
//   let arr = [3, 4, -1, 1];
//   console.log("Smallest Missing Positive:", firstMissingPositive(arr)); 
  
// }
// // // 121 Find longest mountain
// {
// function longestMountain(arr) {
//     let n = arr.length;
//     let maxLength = 0;
  
    
//     for (let i = 1; i < n - 1; i++) {
      
//       if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//         let left = i - 1;
//         let right = i + 1;
  
       
//         while (left >= 0 && arr[left] < arr[left + 1]) {
//           left--;
//         }
  
        
//         while (right < n && arr[right] < arr[right - 1]) {
//           right++;
//         }
  
        
//         let length = right - left - 1;
//         maxLength = Math.max(maxLength, length);
//       }
//     }
  
//     return maxLength;
//   }
  
  
//   let arr = [2, 1, 1, 5, 6, 2, 3, 1];
//   console.log("Longest Mountain Length:", longestMountain(arr));
//   }

// // // 122 Count subarrays with product less than K
// {
// function countSubarraysWithProductLessThanK(arr, K) {
//     let n = arr.length;
//     let product = 1;
//     let count = 0;
//     let start = 0;
  
//     for (let end = 0; end < n; end++) {
      
//       product *= arr[end];
  
      
//       while (product >= K && start <= end) {
//         product /= arr[start];
//         start++;
//       }
  
      
//       count += end - start + 1;
//     }
  
//     return count;
//   }
  
  
//   let arr = [10, 5, 2, 6];
//   let K = 100;
// console.log("Count of subarrays with product less than K:", countSubarraysWithProductLessThanK(arr, K)); 
//   }
// // // 123 Find longest consecutive sequence
//  {
// function longestConsecutive(nums) {
//     if (nums.length === 0) return 0;
  
//     let numSet = new Set(nums);
//     let longestSeq = 0;
  
//     for (let num of numSet) {
      
//       if (!numSet.has(num - 1)) {
//         let currentNum = num;
//         let currentSeq = 1;
  
       
//         while (numSet.has(currentNum + 1)) {
//           currentNum++;
//           currentSeq++;
//         }
  
        
//         longestSeq = Math.max(longestSeq, currentSeq);
//       }
//     }
  
//     return longestSeq;
//   }
  
  
//   let arr = [100, 4, 200, 1, 3, 2];
//   console.log("Longest Consecutive Sequence Length:", longestConsecutive(arr)); 
//   }

// // // 125 Min swaps required to bring elements <= K together
// {
// function minSwaps(arr, K) {
//     let n = arr.length;
  
    
//     let countLessEqualK = 0;
//     for (let i = 0; i < n; i++) {
//       if (arr[i] <= K) {
//         countLessEqualK++;
//       }
//     }
  
    
//     let windowCount = 0;
//     let maxCount = 0;
    
    
//     for (let i = 0; i < countLessEqualK; i++) {
//       if (arr[i] <= K) {
//         windowCount++;
//       }
//     }
//     maxCount = windowCount;
  
    
//     for (let i = countLessEqualK; i < n; i++) {
      
//       if (arr[i - countLessEqualK] <= K) {
//         windowCount--;
//       }
      
//       if (arr[i] <= K) {
//         windowCount++;
//       }
  
      
//       maxCount = Math.max(maxCount, windowCount);
//     }
  

//     return countLessEqualK - maxCount;
//   }
  
  
//   let arr = [2, 7, 9, 5, 6, 3];
//   let K = 6;
//   console.log("Minimum swaps required:", minSwaps(arr, K)); 
//   }
// // // 126 Longest alternating subarray
// {
// function longestAlternatingSubarray(arr) {
//     let n = arr.length;
//     if (n == 0) return 0;
  
//     let maxLength = 1;
//     let currentLength = 1;
  
//     for (let i = 1; i < n; i++) {
      
//       if ((arr[i] > 0 && arr[i - 1] < 0) || (arr[i] < 0 && arr[i - 1] > 0)) {
//         currentLength++;  
//       } else {
//         maxLength = Math.max(maxLength, currentLength);  
//         currentLength = 1;  
//       }
//     }
  
    
//     maxLength = Math.max(maxLength, currentLength);
  
//     return maxLength;
//   }
  

//   let arr = [1, 2, 5, 6, 3, 4, 7];
//   console.log("Longest Alternating Subarray Length:", longestAlternatingSubarray(arr)); 
//   }
// // // 127 Maximum length of bitonic subarray
// {
// function maxLengthBitonicSubarray(arr) {
//     let n = arr.length;
//     if (n <= 1) return n;
  
//     let increasing = new Array(n).fill(1);
//     let decreasing = new Array(n).fill(1);
  
    
//     for (let i = 1; i < n; i++) {
//       if (arr[i] > arr[i - 1]) {
//         increasing[i] = increasing[i - 1] + 1;
//       }
//     }
  
    
//     for (let i = n - 2; i >= 0; i--) {
//       if (arr[i] > arr[i + 1]) {
//         decreasing[i] = decreasing[i + 1] + 1;
//       }
//     }
  
    
//     let maxLength = 0;
//     for (let i = 0; i < n; i++) {
//       if (increasing[i] > 1 && decreasing[i] > 1) {
//         maxLength = Math.max(maxLength, increasing[i] + decreasing[i] - 1);
//       }
//     }
  
//     return maxLength;
//   }
  
  
//   let arr = [1, 3, 5, 4, 2];
//   console.log("Maximum Length of Bitonic Subarray:", maxLengthBitonicSubarray(arr)); 
//   }
// // // 128  Convert array to Zig-Zag fashion
// {
// function zigZagArray(arr) {
//     let flag = true; 

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (flag) {
//             if (arr[i] > arr[i + 1]) {
                
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//             }
//         } else {
//             if (arr[i] < arr[i + 1]) {
                
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//             }
//         }
//         flag = !flag;
//     }

//     return arr;
// }
// }
// // // 129 Product of array except self
// {
// function productExceptSelf(arr) {
//     const n = arr.length;
//     let result = new Array(n).fill(1);

//     let left = 1;
//     for (let i = 0; i < n; i++) {
//         result[i] = left;
//         left *= arr[i];
//     }

//     let right = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         result[i] *= right;
//         right *= arr[i];
//     }

//     return result;
// }
// }

// // // 130 Count pairs with given XOR
// {
// function countXORPairs(arr, K) {
//     let count = 0;
//     let freq = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         let x = arr[i] ^ K;
//         if (freq.has(x)) {
//             count += freq.get(x);
//         }

//         freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
//     }

//     return count;
// }

// }
// // // 131 Triplets with zero sum
// {
// function findTripletsWithZeroSum(arr) {
//     arr.sort((a, b) => a - b);
//     let result = [];

//     for (let i = 0; i < arr.length - 2; i++) {
//         if (i > 0 && arr[i] === arr[i - 1]) continue; 

//         let left = i + 1;
//         let right = arr.length - 1;

//         while (left < right) {
//             let sum = arr[i] + arr[left] + arr[right];

//             if (sum === 0) {
//                 result.push([arr[i], arr[left], arr[right]]);

                
//                 while (left < right && arr[left] === arr[left + 1]) left++;
//                 while (left < right && arr[right] === arr[right - 1]) right--;

//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return result;
// }
// }
// // // 132 Rearrange array in max-min form
// {
// function rearrangeMaxMin(arr) {
//     let n = arr.length;
//     let result = [];
//     let left = 0, right = n - 1;

//     let turn = true; 

//     while (left <= right) {
//         if (turn) {
//             result.push(arr[right--]);
//         } else {
//             result.push(arr[left++]);
//         }
//         turn = !turn;
//     }

//     return result;
// }
// }

// // // 133 Longest increasing subsequence
// {
// function lengthOfLIS(arr) {
//     const n = arr.length;
//     const dp = new Array(n).fill(1);

//     for (let i = 1; i < n; i++) {
//         for (let j = 0; j < i; j++) {
//             if (arr[j] < arr[i]) {
//                 dp[i] = Math.max(dp[i], dp[j] + 1);
//             }
//         }
//     }

//     return Math.max(...dp);
// }
// }

// // // 134 Count triplets with sum smaller than X
// {
// function countTripletsSmallerThanX(arr, X) {
//     arr.sort((a, b) => a - b);
//     let n = arr.length;
//     let count = 0;

//     for (let i = 0; i < n - 2; i++) {
//         let left = i + 1;
//         let right = n - 1;

//         while (left < right) {
//             let sum = arr[i] + arr[left] + arr[right];
//             if (sum < X) {
//                 count += (right - left);
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return count;
// }
// }

// // // 135 Maximum of minimum for every window size
// {
// function maxOfMinForEveryWindow(arr) {
//     let n = arr.length;
//     let left = new Array(n).fill(-1);
//     let right = new Array(n).fill(n);
//     let stack = [];

    
//     for (let i = 0; i < n; i++) {
//         while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
//             stack.pop();
//         }
//         if (stack.length) left[i] = stack[stack.length - 1];
//         stack.push(i);
//     }

//     stack = [];

//     // Next Smaller Element
//     for (let i = n - 1; i >= 0; i--) {
//         while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
//             stack.pop();
//         }
//         if (stack.length) right[i] = stack[stack.length - 1];
//         stack.push(i);
//     }

//     let ans = new Array(n + 1).fill(-Infinity);

//     for (let i = 0; i < n; i++) {
//         let len = right[i] - left[i] - 1;
//         ans[len] = Math.max(ans[len], arr[i]);
//     }

   
//     for (let i = n - 1; i >= 1; i--) {
//         ans[i] = Math.max(ans[i], ans[i + 1]);
//     }

    
//     return ans.slice(1);
// }
// }
// // // 136 Maximum sum of 2 non-overlapping subarrays
// {
// function atMostK(arr, K) {

//     let n = arr.length;
//     let map = new Map();
//     let count = 0;
//     let left = 0;

//     for (let right = 0; right < n; right++) {
        
//         map.set(arr[right], (map.get(arr[right]) || 0) + 1);

       
//         while (map.size > K) {
//             map.set(arr[left], map.get(arr[left]) - 1);
//             if (map.get(arr[left]) === 0) {
//                 map.delete(arr[left]);
//             }
//             left++;
//         }

        
//         count += right - left + 1;
//     }

//     return count;
// }

// function countSubarraysWithExactlyK(arr, K) {
//     return atMostK(arr, K) - atMostK(arr, K - 1);
// }
// }

// // // 137 Maximum sum of 2 non-overlapping subarrays
// {
// function maxSumTwoNoOverlap(A, L, M) {
//     function maxSubarraySum(arr, size) {
//         let sum = 0, maxSum = 0;
//         for (let i = 0; i < size; i++) sum += arr[i]; 
//         maxSum = sum;
        
//         for (let i = size; i < arr.length; i++) {
//             sum += arr[i] - arr[i - size]; 
//             maxSum = Math.max(maxSum, sum);
//         }
//         return maxSum;
//     }
    
//     let maxLeft = new Array(A.length).fill(0);
//     let maxRight = new Array(A.length).fill(0);
    
//     let leftMax = 0, rightMax = 0;
    
   
//     for (let i = L - 1; i < A.length; i++) {
//         if (i === L - 1) {
//             leftMax = A.slice(0, L).reduce((a, b) => a + b);
//         } else {
//             leftMax += A[i] - A[i - L];
//         }
//         maxLeft[i] = leftMax;
//     }

//     for (let i = A.length - M; i >= 0; i--) {
//         if (i === A.length - M) {
//             rightMax = A.slice(i, A.length).reduce((a, b) => a + b);
//         } else {
//             rightMax += A[i] - A[i + M];
//         }
//         maxRight[i] = rightMax;
//     }

    
//     let result = 0;
//     for (let i = L + M - 1; i < A.length; i++) {
//         result = Math.max(result, maxLeft[i - M] + maxRight[i]);
//     }

//     return result;
// }
// }
// // // 138 Median of two sorted arrays
// {
// function findMedianSortedArrays(nums1, nums2) {
   
//     if (nums1.length > nums2.length) {
//         [nums1, nums2] = [nums2, nums1];
//     }

//     let m = nums1.length, n = nums2.length;
//     let left = 0, right = m;

//     while (left <= right) {
//         let partition1 = Math.floor((left + right) / 2);
//         let partition2 = Math.floor((m + n + 1) / 2) - partition1;

//         let maxLeft1 = (partition1 === 0) ? -Infinity : nums1[partition1 - 1];
//         let minRight1 = (partition1 === m) ? Infinity : nums1[partition1];

//         let maxLeft2 = (partition2 === 0) ? -Infinity : nums2[partition2 - 1];
//         let minRight2 = (partition2 === n) ? Infinity : nums2[partition2];

        
//         if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
          
//             if ((m + n) % 2 === 1) {
//                 return Math.max(maxLeft1, maxLeft2);
//             } else {
            
//                 return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
//             }
//         } else if (maxLeft1 > minRight2) {
           
//             right = partition1 - 1;
//         } else {
            
//             left = partition1 + 1;
//         }
//     }

//     throw new Error("Input arrays are not sorted properly");
// }
// }

// // // 139 Find repeating number without modifying array
// {
// function findDuplicate(nums) {
//     let slow = nums[0];
//     let fast = nums[0];

    
//     do {
//         slow = nums[slow];
//         fast = nums[nums[fast]];
//     } while (slow !== fast);

    
//     slow = nums[0];
//     while (slow !== fast) {
//         slow = nums[slow];
//         fast = nums[fast];
//     }

//     return slow;
// }
// }

// // // 140 Max sum of non-adjacent elements
// {
// function maxNonAdjacentSum(arr) {
//     if (arr.length === 0) return 0;
//     if (arr.length === 1) return arr[0];

//     let incl = arr[0]; 
//     let excl = 0;

//     for (let i = 1; i < arr.length; i++) {
//         let newIncl = excl + arr[i]; 
//         let newExcl = Math.max(incl, excl); 

//         incl = newIncl;
//         excl = newExcl;
//     }

//     return Math.max(incl, excl);
// }

// }
// // // 141 Minimum number of swaps to sort array
// {
// function minSwaps(arr) {
//     let n = arr.length;

   
//     let arrPos = arr.map((value, index) => [value, index]);

   
//     arrPos.sort((a, b) => a[0] - b[0]);

//     let visited = new Array(n).fill(false);
//     let swaps = 0;

    
//     for (let i = 0; i < n; i++) {
       
//         if (visited[i] || arrPos[i][1] === i) continue;

//         let cycle_size = 0;
//         let j = i;

       
//         while (!visited[j]) {
//             visited[j] = true;
//             j = arrPos[j][1];
//             cycle_size++;
//         }

        
//         if (cycle_size > 0) {
//             swaps += (cycle_size - 1);
//         }
//     }

//     return swaps;
// }
// }
// // // 142 Count smaller elements on right
// {
// function countSmaller(nums) {
//     let n = nums.length;
//     let count = new Array(n).fill(0);
//     let indexes = Array.from({ length: n }, (_, i) => i);

//     function mergeSort(start, end) {
//         if (end - start <= 1) return;

//         let mid = Math.floor((start + end) / 2);
//         mergeSort(start, mid);
//         mergeSort(mid, end);

//         let temp = [];
//         let i = start, j = mid;
//         let rightCount = 0;

//         while (i < mid && j < end) {
//             if (nums[indexes[j]] < nums[indexes[i]]) {
//                 temp.push(indexes[j++]);
//                 rightCount++;
//             } else {
//                 count[indexes[i]] += rightCount;
//                 temp.push(indexes[i++]);
//             }
//         }

//         while (i < mid) {
//             count[indexes[i]] += rightCount;
//             temp.push(indexes[i++]);
//         }

//         while (j < end) {
//             temp.push(indexes[j++]);
//         }

//         for (let k = start; k < end; k++) {
//             indexes[k] = temp[k - start];
//         }
//     }

//     mergeSort(0, n);
//     return count;
// }
// }

// // // 143 Largest rectangle in histogram
// {
// function largestRectangleArea(heights) {
//     let stack = [];
//     let maxArea = 0;
//     heights.push(0);  
//     for (let i = 0; i < heights.length; i++) {
//         while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
//             let height = heights[stack.pop()];
//             let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
//             maxArea = Math.max(maxArea, height * width);
//         }
//         stack.push(i);
//     }

//     return maxArea;
// }
// }
// // // 144 Max area of binary matrix
// {
// function maximalRectangle(matrix) {
//     if (matrix.length === 0) return 0;
//     let n = matrix[0].length;
//     let heights = new Array(n).fill(0);
//     let maxArea = 0;

//     for (let row of matrix) {
//         for (let i = 0; i < n; i++) {
            
//             heights[i] = row[i] === 0 ? 0 : heights[i] + 1;
//         }

//         maxArea = Math.max(maxArea, largestRectangleArea(heights));
//     }

//     return maxArea;
// }

// function largestRectangleArea(heights) {
//     let stack = [];
//     let maxArea = 0;
//     heights = [...heights, 0]; 

//     for (let i = 0; i < heights.length; i++) {
//         while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
//             let height = heights[stack.pop()];
//             let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
//             maxArea = Math.max(maxArea, height * width);
//         }
//         stack.push(i);
//     }

//     return maxArea;
// }
// }

// // // 145 Count inversion using BIT/Fenwick Tree
// {
// class FenwickTree {
//     constructor(size) {
//         this.tree = new Array(size + 1).fill(0);
//     }

//     update(index, value) {
//         while (index < this.tree.length) {
//             this.tree[index] += value;
//             index += index & -index;
//         }
//     }

//     query(index) {
//         let sum = 0;
//         while (index > 0) {
//             sum += this.tree[index];
//             index -= index & -index;
//         }
//         return sum;
//     }
// }

// function countInversions(arr) {
//     let n = arr.length;

    
//     let sorted = [...arr].sort((a, b) => a - b);
//     let rank = new Map();
//     let r = 1;
//     for (let num of sorted) {
//         if (!rank.has(num)) {
//             rank.set(num, r++);
//         }
//     }

    
//     let bit = new FenwickTree(n);
//     let invCount = 0;

//     for (let i = n - 1; i >= 0; i--) {
//         let currentRank = rank.get(arr[i]);
//         invCount += bit.query(currentRank - 1); 
//         bit.update(currentRank, 1);  
//     }

//     return invCount;
// }
// }
// // // 146 Maximum xor of any subarray
// {
// class TrieNode {
//     constructor() {
//         this.children = {};
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new TrieNode();
//     }

//     insert(num) {
//         let node = this.root;
//         for (let i = 31; i >= 0; i--) {
//             let bit = (num >> i) & 1;
//             if (!node.children[bit]) node.children[bit] = new TrieNode();
//             node = node.children[bit];
//         }
//     }

//     getMaxXor(num) {
//         let node = this.root;
//         let maxXor = 0;
//         for (let i = 31; i >= 0; i--) {
//             let bit = (num >> i) & 1;
//             let toggled = 1 - bit;
//             if (node.children[toggled]) {
//                 maxXor |= (1 << i);
//                 node = node.children[toggled];
//             } else {
//                 node = node.children[bit];
//             }
//         }
//         return maxXor;
//     }
// }

// function maxSubarrayXOR(arr) {
//     let trie = new Trie();
//     trie.insert(0);  
//     let maxXor = -Infinity;
//     let prefixXor = 0;

//     for (let num of arr) {
//         prefixXor ^= num;
//         maxXor = Math.max(maxXor, trie.getMaxXor(prefixXor));
//         trie.insert(prefixXor);
//     }

//     return maxXor;
// }

// }
// // // 147 K-th smallest pair distance
// {
// function smallestDistancePair(nums, k) {
//     nums.sort((a, b) => a - b);

//     let n = nums.length;
//     let low = 0;
//     let high = nums[n - 1] - nums[0];

//     const countPairs = (maxDist) => {
//         let count = 0;
//         let left = 0;
//         for (let right = 0; right < n; right++) {
//             while (nums[right] - nums[left] > maxDist) {
//                 left++;
//             }
//             count += right - left;
//         }
//         return count;
//     };

//     while (low < high) {
//         let mid = Math.floor((low + high) / 2);
//         let count = countPairs(mid);
//         if (count < k) {
//             low = mid + 1;
//         } else {
//             high = mid;
//         }
//     }

//     return low;
// }
// }
// // // 148 Minimum operations to make array increasing
// {
// function minOperationsToMakeIncreasing(arr) {
//     let ops = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] <= arr[i - 1]) {
//             let increase = arr[i - 1] + 1 - arr[i];
//             ops += increase;
//             arr[i] = arr[i - 1] + 1;
//         }
//     }

//     return ops;
// }
// }
// // // 149 Maximum gap (bucket sort)
// {
// function maximumGap(nums) {
//     if (nums.length < 2) return 0;

//     let min = Math.min(...nums);
//     let max = Math.max(...nums);
    
    
//     let bucketSize = Math.max(1, Math.floor((max - min) / (nums.length - 1)));
//     let bucketCount = Math.floor((max - min) / bucketSize) + 1;

    
//     let bucketsMin = new Array(bucketCount).fill(Infinity);
//     let bucketsMax = new Array(bucketCount).fill(-Infinity);

    
//     for (let num of nums) {
//         let idx = Math.floor((num - min) / bucketSize);
//         bucketsMin[idx] = Math.min(bucketsMin[idx], num);
//         bucketsMax[idx] = Math.max(bucketsMax[idx], num);
//     }

    
//     let maxGap = 0;
//     let prevMax = min;

//     for (let i = 0; i < bucketCount; i++) {
//         if (bucketsMin[i] === Infinity) continue;  
//         maxGap = Math.max(maxGap, bucketsMin[i] - prevMax);
//         prevMax = bucketsMax[i];
//     }

//     return maxGap;
// }
// }
// // // 150 Smallest subarray with sum > X
// {
// function smallestSubarraySum(arr, X) 

// {
//     let n = arr.length;
//     let minLength = n + 1;  
//     let currentSum = 0;
//     let left = 0;

    
//     for (let right = 0; right < n; right++) {
//         currentSum += arr[right];

        
//         while (currentSum > X) {
//             minLength = Math.min(minLength, right - left + 1);
//             currentSum -= arr[left];
//             left++;
//         }
//     }

//     return minLength === n + 1 ? 0 : minLength;
// }
// }
// // // 151 Count number of nice subarrays
// {
// function countAtMostK(arr, k) {
//     let count = 0;
//     let left = 0;
//     let oddCount = 0;

//     for (let right = 0; right < arr.length; right++) {
//         if (arr[right] % 2 !== 0) {
//             oddCount++;
//         }

//         while (oddCount > k) {
//             if (arr[left] % 2 !== 0) {
//                 oddCount--;
//             }
//             left++;
//         }

//         count += right - left + 1;
//     }

//     return count;
// }

// function countNiceSubarrays(arr, k) {
//     return countAtMostK(arr, k) - countAtMostK(arr, k - 1);
// }
// }
// // // 152 Max product of subarray of size k
// {
// function maxProductSubarray(arr, k) {
//     let n = arr.length;
//     if (n < k) return 0;

//     let product = 1;
//     let maxProduct = -Infinity;

    
//     for (let i = 0; i < k; i++) {
//         product *= arr[i];
//     }

//     maxProduct = product;

    
//     for (let i = k; i < n; i++) {
        
//         product = (product / arr[i - k]) * arr[i];
        
      
//         maxProduct = Math.max(maxProduct, product);
//     }

//     return maxProduct;
// }
// }
// // // 153 Minimum size subarray sum
// {
// function minSubArrayLen(target, nums) {
//     let n = nums.length;
//     let minLength = n + 1;  
//     let sum = 0;
//     let left = 0;

    
//     for (let right = 0; right < n; right++) {
//         sum += nums[right];

        
//         while (sum >= target) {
//             minLength = Math.min(minLength, right - left + 1);
//             sum -= nums[left];
//             left++;
//         }
//     }

//     return minLength === n + 1 ? 0 : minLength;
// }
// }
// // // 154 Longest subarray with GCD > 1
// {
// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// function longestSubarrayWithGCDGreaterThanOne(arr) {
//     let n = arr.length;
//     let maxLength = 0;

  
//     for (let i = 0; i < n; i++) {
//         let currentGCD = 0;
//         for (let j = i; j < n; j++) {
//             currentGCD = gcd(currentGCD, arr[j]);

//             if (currentGCD === 1) {
//                 break; 
//             }

//             maxLength = Math.max(maxLength, j - i + 1);
//         }
//     }

//     return maxLength;
// }
// }

// // // 155 Find max subarray sum modulo M
// {
// function maxSubarraySumModM(arr, M) {
//     let n = arr.length;
//     let prefixSum = 0;
//     let maxSum = 0;
    
   
//     let sortedPrefixSums = new Set();
//     sortedPrefixSums.add(0);  

//     for (let i = 0; i < n; i++) {
//         prefixSum = (prefixSum + arr[i]) % M;
        
        
//         for (let val of sortedPrefixSums) {
//             maxSum = Math.max(maxSum, (prefixSum - val + M) % M);
//         }
        
        
//         sortedPrefixSums.add(prefixSum);
//     }
    
//     return maxSum;
// }
// }

// // // 156 Maximum distance between same elements
// {
// function maxDistance(arr) {
//     let map = {};
//     let maxDist = -1;

//     // Traverse the array
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] in map) {
           
//             maxDist = Math.max(maxDist, i - map[arr[i]]);
//         } else {
            
//             map[arr[i]] = i;
//         }
//     }

//     return maxDist;
// }
// }
// // // 157 Minimum sum partition
// {
// function minPartition(arr) {
//     let totalSum = arr.reduce((sum, num) => sum + num, 0);
//     let n = arr.length;
//     let dp = new Array(Math.floor(totalSum / 2) + 1).fill(false);
//     dp[0] = true;

    
//     for (let num of arr) {
//         for (let i = Math.floor(totalSum / 2); i >= num; i--) {
//             dp[i] = dp[i] || dp[i - num];
//         }
//     }

    
//     let S = 0;
//     for (let i = Math.floor(totalSum / 2); i >= 0; i--) {
//         if (dp[i]) {
//             S = i;
//             break;
//         }
//     }

//     return totalSum - 2 * S;   
// }
// }
// // // 158 Count good triplets
// {
// class FenwickTree {
//     constructor(n) {
//         this.tree = new Array(n + 1).fill(0);
//     }

//     update(index, value) {
//         while (index < this.tree.length) {
//             this.tree[index] += value;
//             index += index & -index;
//         }
//     }

//     query(index) {
//         let sum = 0;
//         while (index > 0) {
//             sum += this.tree[index];
//             index -= index & -index;
//         }
//         return sum;
//     }
// }

// function countGoodTriplets(arr) {
//     const n = arr.length;
//     const maxVal = Math.max(...arr) + 1;
    
//     let fenwickLeft = new FenwickTree(maxVal);
//     let fenwickRight = new FenwickTree(maxVal);

    
//     for (let num of arr) {
//         fenwickRight.update(num, 1);
//     }

//     let tripletCount = 0;

   
//     for (let j = 0; j < n; j++) {
//         let num = arr[j];
        
        
//         fenwickRight.update(num, -1);

        
//         let leftCount = fenwickLeft.query(num - 1);

       
//         let rightCount = fenwickRight.query(maxVal - 1) - fenwickRight.query(num);

        
//         tripletCount += leftCount * rightCount;

        
//         fenwickLeft.update(num, 1);
//     }

//     return tripletCount;
// }
// }
