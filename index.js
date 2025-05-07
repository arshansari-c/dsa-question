// // {// // 1 Insert element in array

// //     let data = [23,45,65,76,34]

// //     Array.prototype.add = function(position,element){
// //         for(i=this.length-1;i>=0;i--){
// //             if(i>=position){
// //                 data[i+1] = data[i]
    
// //                 if(i==position){
// //                     data[i] = element
// //                 }
// //             }
// //         }
// //     }
// //     data.add(4,666)
// //     console.log(data)
// //     }
    
// //     // 2 delete first element from array
    
// //     {
// //     let data = [23,45,65,34,65]
// //     Array.prototype.deleteFirstElement = function(){
// //         for(i=0;i<=this.length-1;i++){
// //             data[i] = data[i+1]
// //         }
// //         data.length = data.length-1
// //     }
    
// //     data.deleteFirstElement()
// //     console.log(data)
// //     }
    
// //     // // 3 delete last element of array
// //     {
    
    
// //     let data = [23,4,343,34,54,223]
    
// //     Array.prototype.deleteLastElement = function(){
// //         this.length = this.length-1
// //     }
// //     data.deleteLastElement()
// //     console.log(data)
    
// //     }
    
// //     // 4 delete input element from array
// //     {
// //     let data = [23, 3, 3, 454, 34, 76, 45, 44];
    
// //     Array.prototype.deleteAnyElement = function(element) {
// //         let k = 0;
    
// //         for (let i = 0; i < this.length; i++) {
// //             if (this[i] !== element) {
// //                 this[k] = this[i];
// //                 k++;
// //             }
// //         }
    
// //         // Trim the extra leftover elements
// //         this.length = k;
// //     };
// //     data.deleteAnyElement(44)
// //     console.log(data)
// //     }
    
    
// //     // // 5 find element and show position from array
// //     {
// //     let data = [23,43,45,54,65,23,75]
// //     Array.prototype.findElement = function(element){
// //         let index = undefined
// //         for(i=0;i<=this.length;i++){
// //             if(this[i]==element){
// //                 index = i
// //                 console.log(`Your element ${element} position is ${i}`)
// //                 break
// //             }
// //         }
// //         if(index==undefined){
// //             console.log("Element not found this array")
// //         }
// //     }
// //     data.findElement(75)
// //     }
    
    
// //     // // 6 count input element from array
// //     {
// //     let data = [23,34,54,34,23,23,65,45,23,23]
// //     Array.prototype.countElement = function(element){
// //         let count = 0
// //         for(i=0;i<=this.length;i++){
// //             if(this[i]==element){
// //                 count++
// //             }
// //         }
// //         console.log(`Your element ${count} times in array`)
// //     }
// //     data.countElement(23)
// //     }
    
// //     // // 7 Marge two array using for loop
    
// //     {
// //     let data = [23,4,55,33,55,67,65]
// //     let data2 = [23,54,67,33,66,77,23]
// //     let data3 = []
    
// //     for(i=0;i<data.length;i++){
// //         data3[i] = data[i]
// //     }
// //     for(i=0;i<data.length;i++){
// //         data3[data.length+i] = data2[i]
// //     }
// //     console.log(data3)  
// //     }
    
    
// //     // // 8 Marge two array in sorting form using while loop
// //     {
// //     let data1 = [23,32,43,54,233]
// //     let data2 = [23,64,65,45,34,44]
// //     let data3 = []
// //     let d1 = 0 
// //     let d2 = 0
// //     let d3 = 0
    
// //     while(d1<data1.length&&d2<data2.length){
// //         if(data1[d1]<data2[d2]){
// //             data3[d3] = data1[d1]
// //             d1++
// //         }else{
// //             data3[d3] = data2[d2]
// //             d2++
// //         }d3++
// //     }
// //     while(d1<data1.length){
// //         data3[d3] =  data1[d1]
// //         d1++
// //         d3++
// //     }
// //     console.log(data3)
// //     }
     
// //     // // 9 Marge to array in sorting form using loop
// //     {
// //     let data = [23,43,54,65,34,23]
// //     let data2 = [23,32,44]
// //     let data3 = []
// //     for(i=0;i<data.length;i++){
// //         data3[i] = data[i]
// //     }
// //     for(i=0;i<data2.length;i++){
// //         data3[data.length+i] = data2[i]
// //     } 
// //     for(i=0;i<data3.length;i++){
// //         for(j=0;j<data3.length;j++){
// //             if(data3[j]>data3[j+1]){
// //                 let temp =  data3[j]
// //                data3[j] = data3[j+1]
// //                data3[j+1] = temp
// //             }
// //         }
// //     }
// //     console.log(data3)
// //     }
    
// //     // // 10 Reverse array
// //     {
// //     let data = [23,34,54,65,67,76]
// //     let start = 0
// //     let end = data.length-1
    
// //     while(start<end){
// //         let temp = data[start]
// //         data[start] = data[end]
// //         data[end] = temp
// //         start++
// //         end--
// //     }
// //     console.log(data)
    
// //     }
    
// //     // // 11 Find the maximum element in an array.
// //     {
// //     let data = [23,34,43,54,55,333,54,66]
// //     let d1 = 0
// //     let max = data[0]
    
// //     while(d1<data.length){
// //         if(data[d1]>max){
// //             max = data[d1]
// //         }
// //         d1++
// //     }
// //     console.log(max)
    
// //     }
// //     // // 12 Find the minimum element in an array.
// //     {
// //     let data = [23,32,43,56,65,76,34,65,5]
// //     let min = data[0]
// //     for(i=0;i<data.length;i++){
// //         if(data[i]<min){
// //             min = data[i]
// //         }
// //     }
// //     console.log(`${min} is minimum element in this array`)
// //     }
    
// //     // // 13 Reverse the array without using built-in functions.
// //     {
// //     let data = [2,3,443,55,65,23,65,77,554]
// //     let start = 0
// //     let end = data.length-1
    
// //     while(start<end){
// //         let temp = data[start]
// //         data[start] = data[end]
// //         data[end] = temp
// //         start++
// //         end--
    
// //     }
// //     console.log(data)
// //     }
    
// //     // // 14 Check if an array is sorted (ascending or not).
// //     {
// //     let data = [22, 33, 44, 55, 66, 77,4];
// //     let isSorted = true;
    
// //     for (let i = 0; i < data.length - 1; i++) {
// //         if (data[i] > data[i + 1]) {
// //             isSorted = false;
// //             break;
// //         }
// //     }
    
// //     console.log(isSorted ? "Array is sorted" : "Array is NOT sorted");
    
// //     }
// //     // // 15 Count the number of even and odd elements in an array.
// //     {
// //     let data = [23,34,44,55,34,33,66,76,77,23,53,2]
// //     let odd = 0
// //     let even = 0
    
// //     for(i=0;i<data.length;i++){
// //         if(data[i]%2==0){
// //             even++
// //         }else{
// //             odd++
// //         }
// //     }
// //     console.log(`In your array ${odd} odd elements and ${even} even element`)
// //     }
// //     // // 16 Find the sum of all elements in the array.
// //     {
// //     let data = [23,3,4,54,67,34,54,65,45,2]
// //     let total = 0
    
// //     for(i=0;i<data.length;i++){
// //         total = total+data[i]
// //     }
// //     console.log(`Your array total is ${total}`)
    
// //     }
// //     // // 17 Count the number of positive, negative and zeros.
// //     {
// //     let data = [23,45,65,-34,34,-65,-34,-22,-77,0,0,0]
// //     let positive = 0
// //     let negative = 0 
// //     let zero = 0
    
// //     for(i=0;i<data.length;i++){
// //         if(data[i]<0){
// //             negative++
// //         }else if(data[i]>0){
// //             positive++
// //         }else if(data[i]==0){
// //             zero++
// //         }
// //     }
// //     console.log(`In your array ${positive} positive number ${negative} negative number and ${zero} zero number`)
// //     }
    
// //     // // 18 Find the second largest element.
// //     {
// //     let data = [23, 32, 43, 54, 5, 76, 45, 77, 555];
    
// //     let first = -Infinity;
// //     let second = -Infinity;
    
// //     for (let i = 0; i < data.length; i++) {
// //         if (data[i] > first) {
// //             second = first;
// //             first = data[i];
// //         } else if (data[i] > second && data[i] != first) {
// //             second = data[i];
// //         }
// //     }
    
// //     console.log(`Second largest number is: ${second}`);
// //     }
    
// //     // // 19 Left rotate the array by one place.
// //     {
// //     let data = [23, 34, 45, 65, 67, 76, 44];
    
// //     let first = data[0];
    
// //     for (let i = 0; i < data.length - 1; i++) {
// //         data[i] = data[i + 1];
// //     }
    
// //     data[data.length - 1] = first;
    
// //     console.log(data);
// //     }
    
// //     // // 20 Remove duplicates from a sorted array.
// //     {
// //     let data = [23,34,54,67,76,45,45,34,54]
// //     let unique = []
// //     data.sort((a,b)=>a-b)
    
// //     for(i=0;i<data.length;i++){
// //         if(data[i]!==data[i+1]){
// //             unique.push(data[i])
// //         }
// //     }
// //     console.log(unique)
    
// //     }
// //     // // 21 Move all zeros to the end of the array.
// //     {
// //     let data = [23, 34, 4, 554, 34, 0, 0, 0, 34, 54, 65];
// //     let j = 0; 
    
// //     for (let i = 0; i < data.length; i++) {
// //         if (data[i] !== 0) {
// //             data[j] = data[i];
// //             j++;
// //         }
// //     }
    
    
// //     while (j < data.length) {
// //         data[j] = 0;
// //         j++;
// //     }
    
// //     console.log(data);
// //     }
// //     // // 22 maximum product subarray
// //     {
// //     let nums = [2, 4, -5,6];
    
// //     let maxProduct = nums[0];
// //     let currentMax = nums[0];
// //     let currentMin = nums[0];
    
// //     for (let i = 1; i < nums.length; i++) {
// //         let num = nums[i];
    
// //         if (num < 0) {
// //             [currentMax, currentMin] = [currentMin, currentMax];
// //         }
    
// //         currentMax = Math.max(num, num * currentMax);
// //         currentMin = Math.min(num, num * currentMin);
    
// //         maxProduct = Math.max(maxProduct, currentMax);
// //     }
    
// //     console.log("Maximum product subarray is: " + maxProduct);
    
// //     }
// //     // //23 Find the union of two arrays.
// //     {
// //     let data = [23,34,34,54,56,54,76,67,76]
// //     let data2 = [43,54,43,67,76,23,65,77]
// //     let data3 = []
    
// //     for(i=0;i<data.length;i++){
// //         data3[i] = data[i]
// //     }
// //     for(i=0;i<data2.length;i++){
// //         data3[data.length+i] = data2[i]
// //     }
// //     data3.sort((a,b)=>a-b)
    
// //     let unique = []
    
// //     for(i=0;i<data3.length;i++){
// //        if(data3[i]!==data3[i+1]){
// //         unique[unique.length] = data3[i]
// //        }
// //     }
    
// //     console.log(unique)
    
// //     }
// //     // // 24 Rotate the array by k positions (left or right).
// //     {
// //     let arr = [2,3,4,6,7]
// //     let k = 2
// //     let rotated = []
    
// //     for(i=k;i<arr.length;i++){
// //         rotated[rotated.length]=arr[i]
// //     }
// //     for(i=0;i<k;i++){
// //         rotated[rotated.length] = arr[i]
// //     }
// //     console.log("Left rotated",rotated)
    
// //     let arr2 = [2,3,5,7,5,4]
// //     let k2 = 2
// //     let n = arr2.length
// //     let rotated2 = []
    
// //     for(i=n-k2;i<arr2.length;i++){
// //        rotated2[rotated2.length]=arr2[i]
// //     }
// //     for(i=0;i<n-k2;i++){
// //         rotated2[rotated2.length]=arr2[i]
// //     }
// //     console.log(rotated2)
// //     }
// //     // // 25 Find the majority element (element with freq > n/2).
// //     {
// //     let arr = [2,3,45,45,45,65,67,76,67,67,67,67,67,67,67,33]
// //     let candidate =  null
// //     let count = 0
    
// //     for(i=0;i<arr.length;i++){
// //         if(count===0){
// //             candidate = arr[i]
// //             count = 1
// //         }else if(arr[i]===candidate){
// //             count++
// //         }else{
// //             count--
// //         }
// //     }
    
// //     count = 0
// //     for(i=0;i<arr.length;i++){
// //         if(arr[i]===candidate){
// //             count++
// //         }
// //     }
// //     if(count>arr.length/2){
// //         console.log(`Majority number is ${candidate}`)
// //     }else{
// //         console.log(`No one is majority`)
// //     }
    
// //     }
// //     // // 26 Check if a subarray with 0 sum exists.
// //     {
// //     let arr = [4,2,-3,2,5,-10]
// //     let sum = 0
// //     let set = new Set()
// //     let found = false
    
// //     for(i=0;i<arr.length;i++){
// //         sum += arr[i]
// //         if(sum===0||set.has(sum)){
// //             found = true
// //             break
// //         }
// //         set.add(sum)
    
// //     }
// //     if(found){
// //         console.log("subarray with 0 sum exist")
// //     }else{
// //         console.log("No subarray with 0 sum")
// //     }
// //     }
    
    
    
// //     // // 27 Find the longest subarray with a given sum K.
// //     {
// //     let arr = [2,3]
// //     let k = 5
// //     function longestSubarrayWithSumK(arr,k){
// //         let sum = 0
// //         let maxLength = 0
// //         let map = new Map()
    
// //         for(i=0;i<arr.length;i++){
// //             sum+=arr[i]
    
// //             if(sum===k){
// //                 maxLength = i+1
// //             }
// //             if(map.has(sum-k)){
// //                 let prevIndex = map.get(sum-k)
// //                 maxLength = Math.max(maxLength,i-prevIndex)
// //             }
// //             if(!map.has(sum)){
// //                 map.set(sum,i)
// //             }
// //         }
// //         return maxLength
        
// //     }
    
// //     console.log(longestSubarrayWithSumK(arr,k))
// //     }
// //     // 28 Sort an array of 0s, 1s and 2s (Dutch National Flag).
// //     {
// //     let arr = [2, 0, 2, 1, 1, 0];
    
// //     function sort012(arr) {
// //         let low = 0, mid = 0, high = arr.length - 1;
    
// //         while (mid <= high) {
// //             if (arr[mid] === 0) {
// //                 [arr[low], arr[mid]] = [arr[mid], arr[low]];
// //                 low++;
// //                 mid++;
// //             } else if (arr[mid] === 1) {
// //                 mid++;
// //             } else if (arr[mid] === 2) {
// //                 [arr[mid], arr[high]] = [arr[high], arr[mid]];
// //                 high--;
// //             }
// //         }
    
// //         return arr;
// //     }
    
// //     console.log(sort012(arr))
// //     }
// //     // 29 Find the missing number from 1 to n.
// //     {
// //     let arr = [1, 2, 3, 5, 7, 8, 10];
// //     let missing = [];
    
// //     for (let i = 0; i < arr.length - 1; i++) {
// //         let current = arr[i];
// //         let next = arr[i + 1];
    
// //         for (let j = current + 1; j < next; j++) {
// //             missing.push(j);
// //         }
// //     }
    
// //     console.log(missing); // Output: [4, 6, 9]
// //     }
// //     // // 30 Find all pairs in the array whose sum is equal to K.
// //     {
    
// //     let arr = [1, 4, 5, 6, 3];
// //     let k = 7;
// //     let set = new Set();
    
// //     for (let i = 0; i < arr.length; i++) {
// //         let complement = k - arr[i];
// //         if (set.has(complement)) {
// //             console.log(`[${arr[i]}, ${complement}]`);
// //         }
// //         set.add(arr[i]);
// //     }
    
// //     }
    
// //     // // 31 Maximum sum of a contiguous subarray (Kadane’s Algo).
// //     {
// //     let arr = [-2, -2, 2, 3, 4, 5, -13];
    
// //     function maxSubarraySum(arr) {
// //         let maxsum = arr[0];
// //         let currentSum = arr[0];
    
// //         for (let i = 1; i < arr.length; i++) {
// //             currentSum = Math.max(arr[i], currentSum + arr[i]);
// //             maxsum = Math.max(maxsum, currentSum);
// //         }
// //         return maxsum;
// //     }
    
// //     console.log(maxSubarraySum(arr));  // Output: 12 (from subarray [2,3,4,5])
// //     }
// //     // // 32 Maximum product subarray.
// //     {
// //     function maxProductSubarray(arr){
// //         let maxProduct = arr[0]
// //         let minproduct = arr[0]
// //         let result = arr[0]
    
// //         for(i=1;i<arr.length;i++){
// //             if(arr[i]<0){
// //                 [maxProduct,minproduct] = [minproduct,maxProduct]
// //             }
// //             maxProduct = Math.max(arr[i],maxProduct * arr[i])
// //             minproduct = Math.max(arr[i],minproduct*arr[i])
    
// //             result = Math.max(result,maxProduct)
// //         }
// //         return result
// //     }
// //     console.log(maxProductSubarray([2,3,-4,5,5]))
// //     }
    
// //     // // 33 Count inversions in the array
// //     {
// //     function mergeSortAndCount(arr, low, high) {
// //         if (low >= high) return 0;
    
// //         let mid = Math.floor((low + high) / 2);
// //         let count = 0;
    
// //         // Count inversions in left half
// //         count += mergeSortAndCount(arr, low, mid);
    
// //         // Count inversions in right half
// //         count += mergeSortAndCount(arr, mid + 1, high);
    
// //         // Count during merge step
// //         count += mergeAndCount(arr, low, mid, high);
    
// //         return count;
// //     }
    
// //     function mergeAndCount(arr, low, mid, high) {
// //         let left = arr.slice(low, mid + 1);
// //         let right = arr.slice(mid + 1, high + 1);
    
// //         let i = 0, j = 0, k = low, count = 0;
    
// //         while (i < left.length && j < right.length) {
// //             if (left[i] <= right[j]) {
// //                 arr[k++] = left[i++];
// //             } else {
// //                 arr[k++] = right[j++];
// //                 count += (left.length - i); // Add all remaining left elements
// //             }
// //         }
    
// //         // Copy any remaining elements
// //         while (i < left.length) arr[k++] = left[i++];
// //         while (j < right.length) arr[k++] = right[j++];
    
// //         return count;
// //     }
    
// //     function countInversions(arr) {
// //         return mergeSortAndCount(arr, 0, arr.length - 1);
// //     }
    
// //     // Test
// //     let arr = [2, 4, 1, 3, 5];
// //     console.log("Total Inversions:", countInversions(arr)); 
// //     }
    
// //     // // 34 Trapping Rain Water problem.
// //     {
// //     let height = [0,1,0,2,1,0,1,3,2,1,2,1];
// //     console.log(trap(height)); // Output: 6
    
// //     function trap(height){
// //         let left = 0, right = height.length - 1;
// //         let leftMax = 0, rightMax = 0;
// //         let trappedWater = 0;
    
// //         while (left < right) {
// //             if (height[left] < height[right]) {
// //                 if (height[left] >= leftMax) {
// //                     leftMax = height[left];
// //                 } else {
// //                     trappedWater += leftMax - height[left];
// //                 }
// //                 left++;
// //             } else {
// //                 if (height[right] >= rightMax) {
// //                     rightMax = height[right];
// //                 } else {
// //                     trappedWater += rightMax - height[right];
// //                 }
// //                 right--;
// //             }
// //         }
// //         return trappedWater;
// //     }
// //     }
// //     // // 35 Maximum circular subarray sum.
// //     {
// //         let arr = [5, -3, 6];
// //     function maxCirculeSubarraySum(arr){
// //         let totalsum = 0
// //         let currentMax = 0,maxSum = -Infinity
// //         let currentMin = 0,minSum = Infinity
// //         for(i=0;i<arr.length;i++){
// //             totalsum+=arr[i]
    
// //             currentMax = Math.max(arr[i],currentMax+arr[i])
// //             maxSum = Math.max(maxSum,currentMax)
    
// //             currentMin = Math.min(arr[i],currentMin+arr[i])
// //             minSum = Math.min(minSum,currentMin)
// //         }
// //         if(maxSum<0){
// //             return maxSum
// //         }
// //         return Math.max(maxSum,totalsum-minSum)
// //     }
    
// //     console.log(maxCirculeSubarraySum(arr))
// //     }
// //     // // 36 Subarray sum equals K (Prefix Sum + HashMap).
// //     {
// //     function subarraySum(arr, k) {
// //         let map = new Map();
// //         map.set(0, 1); 
    
// //         let prefixSum = 0;
// //         let count = 0;
    
// //         for (let i = 0; i < arr.length; i++) {
// //             prefixSum += arr[i];
    
// //             if (map.has(prefixSum - k)) {
// //                 count += map.get(prefixSum - k);
// //             }
    
// //             map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
// //         }
    
// //         return count;
// //     }
    
// //     let arr = [1, 2, 3];
// //     let k = 3;
// //     console.log(subarraySum(arr, k)); 
// //     }
    
// //     // // 37 Find the first missing positive integer.
// //     {
// //         function firstMissingPositive(nums) {
// //             let n = nums.length;
        
// //             for (let i = 0; i < n; i++) {
// //                 while (
// //                     nums[i] > 0 &&
// //                     nums[i] <= n &&
// //                     nums[nums[i] - 1] !== nums[i]
// //                 ) {
// //                     let correctIndex = nums[i] - 1;
// //                     [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
// //                 }
// //             }
        
// //             for (let i = 0; i < n; i++) {
// //                 if (nums[i] !== i + 1) {
// //                     return i + 1;
// //                 }
// //             }
        
// //             return n + 1;
// //         }
// //         console.log(firstMissingPositive([3, 4, -1, 1]))     
// //     }



// // // // 38 Find the largest element in an array
// // {
// // let data = [23,3,43,56,22,55,6]
// // let max = data[0]

// // for(i=0;i<data.length-1;i++){
// //     if(data[i]>max){
// //         max =  data[i]
// //     }
// // }
// // console.log(max)}

// // {
// //     let data = [23,3,43,56,22,55,6]
// //     let max = data[0]
// //     let i = 0

// //     while(i<data.length){
// //         if(data[i]>max){
// //             max = data[i]
// //         }
// //         i++
// //     }
// //     console.log(max)
// // }


// // // // 39 Find the second largest element
// // {
// // let data = [23,34,43,45,65,65,34,54]
// // let largest = -Infinity
// // let secondLargest = -Infinity
// // let i = 0

// // while(i<data.length){
// //     if(data[i]>largest){
// //         secondLargest = largest
// //         largest = data[i]
// //     }else if(data[i]>secondLargest&&data[i]!==largest){
// //         secondLargest = data[i]
// //     }
// //     i++
// // }
// // console.log(secondLargest)

// // }

// // {
// //     let data = [23, 32, 44, 55, 54, 65, 56, 76, 73, 44];

// // let largest = -Infinity;
// // let secondLargest = -Infinity;

// // for (let i = 0; i < data.length; i++) {
// //   if (data[i] > largest) {
// //     secondLargest = largest;
// //     largest = data[i];
// //   } else if (data[i] > secondLargest && data[i] !== largest) {
// //     secondLargest = data[i];
// //   }
// // }

// // console.log("Second Largest:", secondLargest); // Output: 73

// // }

// // // // 40 Check if array is sorted
// // {
// // let data = [2, 3, 4, 4, 5, 6, 7, 7];
// // let sorted = true;

// // for (let i = 0; i < data.length - 1; i++) {
// //   if (data[i] > data[i + 1]) {
// //     sorted = false;
// //     break; 
// //   }
// // }

// // console.log(sorted); 

// // }
// // {let data = [2,2,3,3,4,4,5,5,6]
// // let i = 0
// // let sorted = false

// // while(i<data.length){
// //     if(data[i]>data[i+1]){
// //         sorted = false
// //         break;
// //     }else{
// //         sorted = true
// //     }
// //     i++
// // }
// // console.log(sorted)}

// // // 41 Reverse an array
// // {
// // let data = [23,23,54,34,65,56,45,32]
// // let reversed = []

// // for(i=data.length-1;i>=0;i--){
// //     reversed[reversed.length] = data[i]
// // }
// // data = reversed
// // console.log(data)
// // }


// // {let data = [23,23,54,34,65,56,45,32]
// // let first = 0
// // let last = data.length-1

// // while(first<last){
// //     let temp = data[first]
// //     data[first] = data[last]
// //     data[last] = temp
// //     first++
// //     last--
// // }
// // console.log(data)}


// // // 43 Left rotate array by one

// // {let data = [23,32,34,43,45,54,655,6]
// // let first = data[0]

// // for(i=0;i<data.length;i++){
// //     data[i] = data[i+1]
// // }
// // data.length = data.length-1
// // data[data.length] = first
// // console.log(data)}

// // {let data = [23,32,34,43,45,54,655,6]
// // let i = 0
// // let first = data[0]
// // while(i<data.length){
// //     data[i] = data[i+1]
// //     i++
// // }
// // data.length = data.length-1
// // data[data.length] = first
// // console.log(data)}

// // // 44 Left rotate array by d positions

// // {let data = [23,32,34,44,56,56,76,56,43]
// // let k = 4
// // let rotate = []

// // for(i=k;i<data.length;i++){
// //     rotate[rotate.length] = data[i]
// // }
// // for(j=0;j<k;j++){
// //     rotate[rotate.length] = data[j]
// // }
// // data = rotate
// // console.log(data)}


 
// // {let data = [23,32,34,44,56,56,76,56,43]
// // let i = 0
// // let k = 4
// // let tempK = k
// // let rotate = []
// // while(k<data.length){
// //     rotate[rotate.length] = data[k]
// //     k++
// // }
// // while(i<tempK){
// //     rotate[rotate.length] = data[i]
// //     i++
// // }
// // console.log(rotate)}


// // // 45 Move all zeros to the end
// // {
// // let data = [23,43,54,0,65,67,0,34,54,0,54];
// // let index = 0;


// // for (let i = 0; i < data.length; i++) {
// //   if (data[i] !== 0) {
// //     data[index] = data[i];
// //     index++;
// //   }
// // }


// // while (index < data.length) {
// //   data[index] = 0;
// //   index++;
// // }

// // console.log(data);
// // }

// // // // 46 Remove duplicates from sorted array
// // {let data = [23,32,43,45,65,67,66,54,33,43,32,67,65]
// // let rotate = []

// // for(i=0;i<data.length;i++){
// //     for(j=0;j<data.length;j++){
// //         let temp;
// //         if(data[j]>data[j+1]){
// //             temp = data[j]
// //             data[j] = data[j+1]
// //             data[j+1] = temp
// //         }
// //     }
// // }
// // for(p=0;p<data.length;p++){
// //    if(data[p]!==data[p+1]){
// //     rotate[rotate.length] = data[p]
// //    }
// // }
// // data = rotate

// // console.log(data)
// // }

// // {let data = [23,32,43,45,65,67,66,54,33,43,32,67,65]
// // let i = 0
// // let p = 0
// // let rotate = []

// // while(i < data.length){
// //     let k = 0
// //     while(k < data.length - 1){
// //         if(data[k] > data[k+1]){
// //             let temp = data[k]
// //             data[k] = data[k+1]
// //             data[k+1] = temp
// //         }
// //         k++
// //     }
// //     i++
// // }
// // while(p<data.length){
// //     if(data[p]!==data[p+1]){
// //         rotate[rotate.length] = data[p]
// //     }
// //     p++
// // }
// // data = rotate

// // console.log(data)
// // }


// // // // 47 Linear Search

// // {let data = [23,43,45,54,555,33,66,54]
// // let find = 555
// // let position = undefined
// // for(i=0;i<data.length;i++){
// //     if(data[i]===find){
// //         position = i
// //         break
// //     }
// // }
// // console.log(position)}

// // {let data = [23,43,45,54,555,33,66,54]
// // let i = 0
// // let find = 66
// // let position = undefined
// // while(i<data.length){
// //     if(data[i]===find){
// //         position = i
// //         break
// //     }
// //     i++
// // }
// // console.log(position)}

// // // //48 Binary Search

// // {
// //   let data = [11, 22, 33, 44, 55, 66, 77, 88]
// // let find = 22
// // let low = 0
// // let high = data.length - 1
// // let position = -1  // -1 means not found

// // while (low <= high) {
// //     let mid = Math.floor((low + high) / 2)

// //     if (data[mid] === find) {
// //         position = mid
// //         break
// //     } else if (data[mid] < find) {
// //         low = mid + 1
// //     } else {
// //         high = mid - 1
// //     }
// // }

// // console.log(position)
// // }

// // // // 49 Find missing number from 1 to n
// // {
// // let data = [2, 3, 5, 6, 8, 9, 11]
// // let missing = []

// // for (let i = 1; i <= data[data.length - 1]; i++) {
// //     let found = false

// //     for (let j = 0; j < data.length; j++) {
// //         if (data[j] === i) {
// //             found = true
// //             break
// //         }
// //     }

// //     if (!found) {
// //         missing[missing.length] = i
// //     }
// // }

// // console.log(missing)
// // }

// // {
// // let data =  [2, 3, 5, 6, 8, 9, 22]
// // let missing = []
// // let i = 1
// // while(i<=data[data.length-1]){
// //     let found = false
// //     let j = 0
// //     while(j<data.length){
// //         if(data[j]===i){
// //             found = true
// //             break
// //         }
// //         j++
// //     }
// //     if(!found){
// //         missing[missing.length] = i
// //     }
// //     i++
// // }
// // console.log(missing)}


// // // // 50 Count even and odd numbers

// // {let data = [2,4,5,55,33,24,43,65,55,77,33,22]
// // let odd = 0
// // let even = 0

// // for(i=0;i<data.length;i++){
// //     if(data[i]%2===0){
// //         even++
// //     }else{
// //         odd++
// //     }
// // }
// // console.log(`In this array ${even} even numbers and ${odd} odd numbers`)
// // }

// // {
// // let data = [2,4,5,55,33,24,43,65,55,77,33,22]
// // let i = 0
// // let odd = 0
// // let even = 0

// // while(i<data.length){
// //     if(data[i]%2===0){
// //         even++
// //     }else{
// //         odd++
// //     }
// //     i++
// // }
// // console.log(`In this array ${even} even numbers and ${odd} odd numbers`)}


// // // // 51 Count positive and negative numbers
// // {
// // let data = [2,3,-4,-2,33,-45,-56,54,-55,-44]
// // let positive = 0
// // let nagative = 0

// // for(i=0;i<data.length;i++){
// //     if(data[i]>0){
// //         positive++
// //     }else{
// //         nagative++
// //     }
// // }
// // console.log(`In this array ${positive} positive and ${nagative} nagative numbers`)}

// // {let data = [2,3,-4,-2,33,-45,-56,54,-55,-44]
// // let positive = 0
// // let nagative = 0
// // let i = 0
// // while(i<data.length){
// //     if(data[i]>0){
// //         positive++
// //     }else{
// //         nagative++
// //     }
// //     i++
// // }
// // console.log(`In this array ${positive} positive and ${nagative} nagative numbers`)}

// // // // 52 Replace each element with its square
// // let data = [2, 3, 4, 54, 45, 54, 33]
// // let square = []

// // for (let i = 0; i < data.length; i++) {
// //     square[square.length] = data[i] * data[i]  
// // }

// // data = square
// // console.log(data)

// // {
// // let data = [2, 3, 4, 54, 45, 54, 33]
// // let square = []
// // let i = 0
// // while(i<data.length){
// //     square[square.length] = data[i]*data[i]
// //     i++
// // }
// // data = square
// // console.log(square)
// // }

// // // // 53 Check for palindrome array

// // {let data = [2,3,4,3,2]
// // let low = 0
// // let high = data.length-1
// // let i = 0
// // let palindrome = true
// // while(low<=high){
// //     if(data[low]!==data[high]){
// //         palindrome = false
// //     }
// //     low++
// //     high--

// // }
// // console.log(palindrome)}

// // {let data = [2, 3, 4, 3, 2]
// // let low = 0
// // let high = data.length - 1
// // let palindrome = true

// // for (let i = 0; i < data.length / 2; i++) {
// //     if (data[low] !== data[high]) {
// //         palindrome = false
// //         break
// //     }
// //     low++
// //     high--
// // }

// // console.log(palindrome)
// // }

// // // // 54 Find minimum and maximum element
// // {
// // let data = [23,34,43,55,65,54,34,65,67,66]
// // let lowest = data[0]
// // let highest = data[0]
// // let temp;
// // for(i=0;i<data.length;i++){
// //     if(data[i]<lowest){
// //         lowest = data[i] 
// //     }if(data[i]>highest){
// //         highest = data[i]
// //     }
// // }

// // console.log(`In this array smallest element is ${lowest} and biggest is ${highest}`)}


// // {let data = [23,34,43,55,65,54,34,65,67,66]
// // let lowest = data[0]
// // let highest = data[0]
// // let i = 0

// // while(i<data.length){
// //     if(data[i]>highest){
// //         highest = data[i]
// //     }
// //     if(data[i]<lowest){
// //         lowest = data[i]
// //     }
// //     i++
// // }
// // console.log(`In this array smallest element is ${lowest} and biggest is ${highest}`)}

// // // 55 Sort 0s, 1s (Two pointer)

// // {let arr = [1, 0, 1, 0, 1, 0, 0, 1]
// // let start = 0
// // let end = arr.length-1

// // while(start<=end){
// //     if(arr[start]==1 && arr[end]==0){
// //         let temp  =arr[start]
// //         arr[start] = arr[end]
// //         arr[end] = temp
// //     }
// //     if(arr[start]==0){
// //         start++
// //     }
// //     if(arr[end]==1){
// //         end--
// //     }
// // }

// // console.log(arr)}

// // // 56 Merge two sorted arrays

// // {
// // let data = [4,5,3,4,22,6]
// // let data2 = [32,34,43,44]
// // let result = []
// // for(i=0;i<data.length;i++){
// //     result[result.length] = data[i]
// // }
// // for(j=0;j<data2.length;j++){
// //     result[result.length] = data2[j]
// // }

// // for(k=0;k<result.length;k++){
// //     for(p=0;p<result.length;p++){
// //         if(result[p]>result[p+1]){
// //             let temp = result[p]
// //             result[p] = result[p+1]
// //             result[p+1] = temp
// //         }
// //     }
// // }
// // console.log(result)}

// // // 57 Remove a given element from array
// // {
// // let data = [23,32,34,44,55,65,67,76,54,34]
// // let Remove = 65 

// // for(i=0;i<data.length;i++){
// //     if(data[i]==Remove){
// //         data[i] = data[i+1]
// //         data.length-1
// //     }
    
// // }
// // console.log(data)
// // }

// // // 58 Insert an element at index
// // {
// // let data = [23,32,43,45,56,67,44]
// // let index = 2
// // let newEle = 55

// // for(i=data.length;i>index;i--){
// //     data[i] = data[i-1]
// // }
// // data[index] = newEle
// // console.log(data)
// // }
// // // // 59 Delete an element from index
// // {
// // let data = [23, 32, 34, 54, 56, 65, 23]
// // let index = 3

// // for (let i = index; i < data.length - 1; i++) {
// //     data[i] = data[i + 1]  
// // }

// // data.length = data.length - 1

// // console.log(data)
// // }

// // // // 60 Count number of elements greater than k
// // {
// // let data = [23,32,34,54,56,76,65,45,66]
// // let k = 55
// // let count = 0
// // for(i=0;i<data.length;i++){
// //     if(data[i]>k){
// //         count++
// //     }
// // }
// // console.log(count)


// // }
// // // // 62 Find common elements in 2 arrays
// // {
// // let arr1 = [23, 34, 54, 65, 76, 87];
// // let arr2 = [54, 76, 11, 23, 99];
// // let common = [];

// // for (let i = 0; i < arr1.length; i++) {
// //     for (let j = 0; j < arr2.length; j++) {
// //         if (arr1[i] === arr2[j]) {
// //             common[common.length] = arr1[i];
// //             break; 
// //         }
// //     }
// // }

// // console.log("Common elements:", common);

// // }
// // // // 63 Count distinct elements
// // {

// // let data = [2, 4, 5, 2, 4, 6, 7];
// // let unique = []
// // let found = false
// // for(i=0;i<data.length;i++){
// //     for(j=0;j<data.length;j++){
// //         if(data[i]===unique[j]){
// //             found = true
// //             break
// //         }
// //     } 
// //     if(!found){
// //         unique[unique.length] = data[i]
// //     }
// // }
// // console.log(unique)
// // }
// // // // 64 Replace with next greatest element
// // {
// // let data = [16, 17, 4, 3, 5, 2];

// // for (let i = 0; i < data.length - 1; i++) {
// //     let max = data[i + 1];
// //     for (let j = i + 1; j < data.length; j++) {
// //         if (data[j] > max) {
// //             max = data[j];
// //         }
// //     }
// //     data[i] = max;
// // }
// // data[data.length - 1] = -1;

// // console.log(data);
// // }

// // // // 65 Find the union of 2 arrays
// // {
// // let arr1 = [1, 2, 3, 4]
// // let arr2 = [3, 4, 5, 6]
// // let union = []


// // for (let i = 0; i < arr1.length; i++) {
// //     union[union.length] = arr1[i]
// // }


// // for (let j = 0; j < arr2.length; j++) {
// //     let found = false
// //     for (let k = 0; k < union.length; k++) {
// //         if (arr2[j] === union[k]) {
// //             found = true
// //             break
// //         }
// //     }
// //     if (!found) {
// //         union[union.length] = arr2[j]
// //     }
// // }

// // console.log(union)  
// // }

// // // // 66 Find the intersection of 2 arrays
// // {
// // let arr1 = [1, 2, 3, 4]
// // let arr2 = [3, 4, 5, 6]
// // let intersection = []

// // for (let i = 0; i < arr1.length; i++) {
// //     for (let j = 0; j < arr2.length; j++) {
// //         if (arr1[i] === arr2[j]) {
            
// //             let alreadyIncluded = false
// //             for (let k = 0; k < intersection.length; k++) {
// //                 if (intersection[k] === arr1[i]) {
// //                     alreadyIncluded = true
// //                     break
// //                 }
// //             }

// //             if (!alreadyIncluded) {
// //                 intersection[intersection.length] = arr1[i]
// //             }
// //         }
// //     }
// // }

// // console.log("Intersection =>", intersection)
// // }

// // // // 67 Replace every element with the sum of previous
// // {
// // let data = [2, 3, 4, 5, 6, 5]
// // let previousSum = 0

// // for (let i = 0; i < data.length; i++) {
// //     let current = data[i]  
// //     data[i] = previousSum  
// //     previousSum += current  
// // }

// // console.log(data)
// // }
// // // //68 Sum of all elements in an array
// // {
// // let data = [23,34,54,55,65,67,76,54]
// // let sum = data[0]
// // for(i=0;i<data.length;i++){
// //     sum+=data[i]
// // }
// // console.log(sum)

// // }
// // // // 69 Prefix sum of array
// // {
// // let data = [2,3,4,6,7]

// // for(i=1;i<data.length;i++){
// //     data[i] = data[i]+data[i-1]
// // }
// // console.log(data)
// // }

// // // // 70 Find the element that appears once
// // {
// // let data = [2, 3, 5, 4, 5, 3, 4];
// // let unique = 0;

// // for (let i = 0; i < data.length; i++) {
// //     unique = unique ^ data[i]; 
// // }
// // console.log("The element that appears once is:", unique);
// // }
// // // 71 Cyclic rotate array by one
// // {
// // let data = [10, 20, 30, 40, 50]
// // let last = data[data.length-1]
// // for(i=data.length-1;i>=0;i--){
// //     data[i] = data[i-1]
    
// // }
// // data[0] = last
// // data.length = data.length 
// // console.log(data)
// // }

// // // // 72 Maximum of all subarrays of size k
// // {
// // let data = [1, 3, 2, 5, 4, 6]
// // let k = 3
// // let result = []

// // for (let i = 0; i <= data.length - k; i++) {
// //     let max = data[i]
// //     for (let j = i; j < i + k; j++) {
// //         if (data[j] > max) {
// //             max = data[j]
// //         }
// //     }
// //     result[result.length] = max
// // }

// // console.log(result)
// // }

// // // // 73 Segregate even and odd numbers
// // {
// // let data = [12, 17, 70, 15, 22, 65, 21, 90]
// // let data2 = []

// // for(i=0;i<data.length;i++){
// //     if(data[i]%2==0){
// //         data2[data2.length] = data[i]
// //     }
// // }
// // for(j=0;j<data.length;j++){
// //     if(data[j]%2!==0){
// //         data2[data2.length] = data[j]
// //     }
// // }
// // console.log(data2)
// // }
// // {

// // let data = [12, 17, 70, 15, 22, 65, 21, 90];
// // let i = 0;
// // let j = data.length - 1;

// // while (i < j) {
// //     if (data[i] % 2 === 0) {
// //         i++;
// //     } else if (data[j] % 2 !== 0) {
// //         j--;
// //     } else {
// //         // swap
// //         let temp = data[i];
// //         data[i] = data[j];
// //         data[j] = temp;
// //         i++;
// //         j--;
// //     }
// // }

// // console.log(data);
// // }
// // // // 74 Find k-th smallest element
// // {
// // let data = [23,32,34,43,45,55,65,67]
// // let k = 4
// // for(i=0;i<data.length;i++){
// //     for(j=0;j<data.length;j++){
// //         if(data[j]>data[j+1]){
// //             let temp = data[j]
// //             data[j] = data[j+1]
// //             data[j+1] = temp
// //         }
// //     }
// // }
// // let thSmallest = data[k-1]
// // console.log(thSmallest)
// // }
// // // // 75 Find k-th largest element
// // {
// // let data = [23,32,44,54,56,65,67,33]
// // let k = 3

// // for(i=0;i<data.length;i++){
// //     for(j=0;j<data.length;j++){
// //         if(data[j]<data[j+1]){
// //             let temp = data[j]
// //             data[j] = data[j+1]
// //             data[j+1] = temp
// //         }
// //     }
// // }
// // let kLargest = data[k-1]
// // console.log(kLargest)
// // }

// // // // 76 Count number of digits in array
// // {
// // let data = [23, 4, 567, 89, 1];
// // let totalDigits = 0;

// // for (let i = 0; i < data.length; i++) {
// //     let num = data[i];

    
// //     if (num === 0) {
// //         totalDigits++;
// //     } else {
// //         while (num > 0) {
// //             totalDigits++;
// //             num = Math.floor(num / 10);
// //         }
// //     }
// // }

// // console.log("Total digits in array:", totalDigits);

// // }
// // // // 77 Check if array is palindrome
// // {
// // let data = [2,3,4,5,4,6,3,2]
// // let palindrome = true
// // let i = 0
// // let low = 0 
// // let high = data.length-1
// // while(low<=high){
// //     if(data[low]!==data[high]){
// //         palindrome = false
// //         break
// //     }
// //     low++
// //     high--
// // }
// // console.log(palindrome)
// // }

// // // // 78 Find majority element (freq > n/2)
// // {
// // let data = [2, 2, 1, 2, 3, 2, 2];
// // let n = data.length;
// // let majority = undefined;

// // for (let i = 0; i < n; i++) {
// //     let count = 0;
// //     for (let j = 0; j < n; j++) {
// //         if (data[i] === data[j]) {
// //             count++;
// //         }
// //     }
// //     if (count > Math.floor(n / 2)) {
// //         majority = data[i];
// //         break;
// //     }
// // }

// // if (majority !== undefined) {
// //     console.log(`Majority element is ${majority}`);
// // } else {
// //     console.log("No majority element found");
// // }
// // }
// // {
// // let data = [2, 2, 1, 2, 3, 2, 2];
// // let n = data.length;


// // let count = 0;
// // let candidate = null;

// // for (let i = 0; i < n; i++) {
// //     if (count === 0) {
// //         candidate = data[i];
// //         count = 1;
// //     } else if (data[i] === candidate) {
// //         count++;
// //     } else {
// //         count--;
// //     }
// // }


// // count = 0;
// // for (let i = 0; i < n; i++) {
// //     if (data[i] === candidate) {
// //         count++;
// //     }
// // }

// // if (count > Math.floor(n / 2)) {
// //     console.log(`Majority element is ${candidate}`);
// // } else {
// //     console.log("No majority element found");
// // }
// // }

// // // // 79 Count set bits in array elements
// // {
// // let data = [5, 3, 7, 8]; 
// // let totalSetBits = 0;

// // for (let i = 0; i < data.length; i++) {
// //     let num = data[i];
// //     while (num > 0) {
// //         if (num % 2 === 1) {
// //             totalSetBits++;
// //         }
// //         num = Math.floor(num / 2);
// //     }
// // }

// // console.log("Total set bits in array elements:", totalSetBits);

// // }

// // // // 80 Print all subarrays
// // {
// // let data = [1, 2, 3];

// // for (let i = 0; i < data.length; i++) {
// //     for (let j = i; j < data.length; j++) {
// //         let subarray = "";
// //         for (let k = i; k <= j; k++) {
// //             subarray += data[k] + " ";
// //         }
// //         console.log(subarray.trim());
// //     }
// // }
// // }
// // // // 82 Count number of pairs with sum k
// // {
// // let data = [3,4,3,5,2,3,4,3]   
// // let k = 7                     
// // let count = 0                 


// // for(i=0; i<data.length; i++){
// //     for(j=i+1; j<data.length; j++){
// //         if(data[i] + data[j] == k){  
// //             count++                  
// //         }
// //     }
// // }

// // console.log(count)   
// // }

// // // // 83 Maximum product of two elements
// // {
// // let data = [5, -10, 6, -3, 7, 9];

// // let max1 = -Infinity, max2 = -Infinity;
// // let min1 = Infinity, min2 = Infinity;

// // for (let i = 0; i < data.length; i++) {
// //     let val = data[i];

    
// //     if (val > max1) {
// //         max2 = max1;
// //         max1 = val;
// //     } else if (val > max2) {
// //         max2 = val;
// //     }

    
// //     if (val < min1) {
// //         min2 = min1;
// //         min1 = val;
// //     } else if (val < min2) {
// //         min2 = val;
// //     }
// // }

// // let product1 = max1 * max2;
// // let product2 = min1 * min2;

// // let maxProduct = Math.max(product1, product2);

// // console.log("Maximum Product:", maxProduct);
// // }

// // // // 84 Count how many times an element appears
// // {
// // let data = [2, 3, 2, 4, 3, 5, 2];
// // let freq = {};

// // for (let i = 0; i < data.length; i++) {
// //     let element = data[i];
// //     if (freq[element]) {
// //         freq[element]++;
// //     } else {
// //         freq[element] = 1;
// //     }
// // }

// // for (let key in freq) {
// //     console.log(`${key} → ${freq[key]} times`);
// // }

// // }

// // // 85 Count how many times an element appears 
// // {
// // let data = [4, 2, -3, 1, 6];
// // let prefixSum = 0;
// // let set = new Set();

// // for (let i = 0; i < data.length; i++) {
// //     prefixSum += data[i];

    
// //     if (prefixSum === 0 || set.has(prefixSum)) {
// //         console.log("Subarray with 0 sum exists.");
// //         return;
// //     }

    
// //     set.add(prefixSum);
// // }

// // console.log("No subarray with 0 sum.");

// // }
// // // // 86 Replace with next prime number
// // {
// // let data = [10, 15, 20, 23, 29];

// // function isPrime(num) {
// //     if (num < 2) return false;  
// //     for (let i = 2; i <= Math.sqrt(num); i++) {
// //         if (num % i === 0) {
// //             return false; 
// //         }
// //     }
// //     return true; 
// // }

// // for (let i = 0; i < data.length; i++) {
// //     let next = data[i] + 1;

   
// //     while (!isPrime(next)) {
// //         next++;
// //     }

// //     data[i] = next; 
// // }

// // console.log(data);
// // }
// // // // 87 Check if array can become strictly increasing
// // {
// // function canBeStrictlyIncreasing(arr) {
// //     let violation = 0;

// //     for (let i = 1; i < arr.length; i++) {
// //         if (arr[i] <= arr[i - 1]) {
// //             violation++;

           
// //             if (violation > 1) return false;

            
// //             if (i === 1 || arr[i] > arr[i - 2]) {
                
// //             } else {
              
// //                 arr[i] = arr[i - 1];
// //             }
// //         }
// //     }

// //     return true;
// // }

// // // Example usage:
// // let data1 = [1, 3, 2, 4];   
// // let data2 = [1, 3, 2, 1];   

// // console.log(canBeStrictlyIncreasing(data1));  
// // console.log(canBeStrictlyIncreasing(data2));  
// // }

// // // // 88 Find all elements with even number of digits
// // {
// // let data = [23,333,4,55,3,444]
// // let even = []
// // for(i=0;i<data.length;i++){
// //     let temp = data[i].toString().length
// //     if(temp%2==0){
// //         even[even.length] = data[i]
// //     }
// // }
// // console.log(even)
// // }
// // // // 89 Merge 2 sorted arrays without extra space
// // {
// // let arr1 = [1, 4, 7, 8, 10];
// // let arr2 = [2, 3, 9];

// // function merge(arr1, arr2) {
// //     let n = arr1.length;
// //     let m = arr2.length;
// //     let gap = Math.ceil((n + m) / 2);

// //     while (gap > 0) {
// //         let i = 0;
// //         let j = gap;

// //         while (j < n + m) {
           
// //             let a = i < n ? arr1[i] : arr2[i - n];
// //             let b = j < n ? arr1[j] : arr2[j - n];

// //             if (a > b) {
                
// //                 if (i < n && j < n) {
// //                     [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
// //                 } else if (i < n && j >= n) {
// //                     [arr1[i], arr2[j - n]] = [arr2[j - n], arr1[i]];
// //                 } else {
// //                     [arr2[i - n], arr2[j - n]] = [arr2[j - n], arr2[i - n]];
// //                 }
// //             }

// //             i++;
// //             j++;
// //         }

// //         if (gap === 1) break;
// //         gap = Math.ceil(gap / 2);
// //     }
// // }

// // merge(arr1, arr2);
// // console.log("Arr1:", arr1);
// // console.log("Arr2:", arr2);
// // }

// // // // 90 Kadane’s Algorithm (Max subarray sum)
// // {
// // let data = [5, -2, -3, 7, -1, 4, -6, 2]

// // let currentSum = data[0]
// // let maxSum = data[0]

// // for(i=1;i<data.length;i++){
// //     currentSum = Math.max(data[i],currentSum+data[i])
// //     maxSum = Math.max(maxSum,currentSum)
// // }
// // console.log(maxSum)
// // }
// // // // 91 Longest subarray with sum K
// // {
// // let arr = [1, 2, 3, 1, 1, 1, 1]
// // let K = 5

// // function longestSubarrayWithSumK(arr, K) {
// //     let map = new Map();
// //     let currSum = 0;
// //     let maxLen = 0;

// //     for (let i = 0; i < arr.length; i++) {
// //         currSum += arr[i];

// //         if (currSum === K) {
// //             maxLen = i + 1;
// //         }

// //         if (map.has(currSum - K)) {
// //             maxLen = Math.max(maxLen, i - map.get(currSum - K));
// //         }

        
// //         if (!map.has(currSum)) {
// //             map.set(currSum, i);
// //         }
// //     }

// //     return maxLen;
// // }
// // console.log(longestSubarrayWithSumK(arr,K))
// // }
// // // // 92 Maximum product subarray
// // {
// // let arr = [2, 3, -2, 4]

// // function maxProductSubarray(arr){
// //     let max_so_far = arr[0]
// //     let max_ending_here = arr[0]
// //     let min_ending_here = arr[0]

// //     for(i=1;i<arr.length;i++){
// //         let current = arr[i]
// //         if(current<0){
// //             [max_ending_here,min_ending_here]= [min_ending_here,max_ending_here]
// //         }
// //         max_ending_here = Math.max(current,max_ending_here*current)
// //         min_ending_here = Math.max(current,min_ending_here*current)

// //         max_so_far = Math.max(max_so_far,max_ending_here)
// //         return max_so_far
// //     }
// // }
// // console.log(maxProductSubarray(arr))

// // }
// // // // 93 Count inversions in array
// // {
// // const arr = [2, 4, 1, 3, 5];

// // function countInversions(arr) {
// //     function mergeSort(arr, left, right) {
// //         let invCount = 0;

// //         if (left < right) {
// //             let mid = Math.floor((left + right) / 2);

            
// //             invCount += mergeSort(arr, left, mid);

            
// //             invCount += mergeSort(arr, mid + 1, right);

            
// //             invCount += merge(arr, left, mid, right);
// //         }

// //         return invCount;
// //     }

// //     function merge(arr, left, mid, right) {
// //         let temp = [];
// //         let i = left;
// //         let j = mid + 1;
// //         let invCount = 0;

// //         while (i <= mid && j <= right) {
// //             if (arr[i] <= arr[j]) {
// //                 temp.push(arr[i]);
// //                 i++;
// //             } else {
// //                 temp.push(arr[j]);
// //                 invCount += (mid - i + 1); 
// //                 j++;
// //             }
// //         }

        
// //         while (i <= mid) temp.push(arr[i++]);
// //         while (j <= right) temp.push(arr[j++]);

      
// //         for (let k = 0; k < temp.length; k++) {
// //             arr[left + k] = temp[k];
// //         }

// //         return invCount;
// //     }

// //     return mergeSort(arr, 0, arr.length - 1);
// // }

// // console.log(countInversions(arr));
// // }
// // // // 93 Dutch National Flag (Sort 0,1,2)
// // {
// // let arr = [2, 0, 2, 1, 1, 0];
// // let low = 0
// // let mid = 0
// // let high = arr.length-1

// // while(mid<=high){
// //     if(arr[mid]==0){
// //         let temp = arr[low]
// //         arr[low] = arr[mid]
// //         arr[mid] = temp

// //         low++
// //         mid++
// //     }else if(arr[mid==1]){
// //         mid++
// //     }else{
// //         let temp = arr[mid]
// //         arr[mid] = arr[high]
// //         arr[high] = temp

// //         high--
// //     }
// // }
// // console.log(arr)
// // }

// // // // 94 Subarray sum equals K
// // {
// // let arr = [1, 1, 1];
// // let K = 2;

// // let map = {}; 
// // map[0] = 1;   

// // let prefixSum = 0;
// // let count = 0;

// // for (let i = 0; i < arr.length; i++) {
// //     prefixSum += arr[i];

// //     let remove = prefixSum - K;

// //     if (map[remove] !== undefined) {
// //         count += map[remove];
// //     }

// //     if (map[prefixSum] !== undefined) {
// //         map[prefixSum]++;
// //     } else {
// //         map[prefixSum] = 1;
// //     }
// // }

// // console.log(count);  
// // }

// // // // 95 Longest subarray with equal 0s and 1s
// // {
// // let arr = [0, 1, 0, 1, 1, 0];


// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] === 0) {
// //         arr[i] = -1;
// //     }
// // }

// // let sum = 0;
// // let maxLen = 0;

// // let map = {};      
// // map[0] = -1;       

// // for (let i = 0; i < arr.length; i++) {
// //     sum += arr[i];

// //     if (map[sum] !== undefined) {
        
// //         let len = i - map[sum];
// //         if (len > maxLen) {
// //             maxLen = len;
// //         }
// //     } else {
      
// //         map[sum] = i;
// //     }
// // }

// // console.log(maxLen); 

// // }
// // // // 96 Count pairs with given sum
// // {

// // let arr = [1, 5, 7, -1, 5];
// // let K = 6;
// // let count = 0;


// // let freq = [];

// // for (let i = 0; i < arr.length; i++) {
// //   let complement = K - arr[i];

  
// //   for (let j = 0; j < freq.length; j++) {
// //     if (freq[j][0] === complement) {
// //       count += freq[j][1]; 
// //       break;
// //     }
// //   }

  
// //   let found = false;
// //   for (let j = 0; j < freq.length; j++) {
// //     if (freq[j][0] === arr[i]) {
// //       freq[j][1] += 1;
// //       found = true;
// //       break;
// //     }
// //   }

  
// //   if (!found) {
// //     freq[freq.length] = [arr[i], 1];
// //   }
// // }

// // console.log("Total Pairs:", count); 
// // }
// // // // 98 Subarray with sum divisible by k
// // {
// // function subarraysDivByK(arr, K) {
// //     let count = 0;
// //     let prefixSum = 0;
// //     let modCount = new Array(K).fill(0);
// //     modCount[0] = 1; 
// //     for (let i = 0; i < arr.length; i++) {
// //       prefixSum += arr[i];
  
     
// //       let mod = ((prefixSum % K) + K) % K;
  
// //       count += modCount[mod]; 
  
// //       modCount[mod]++; 
// //     }
  
// //     return count;
// //   }
  
  
// //   let arr = [4, 5, 0, -2, -3, 1];
// //   let K = 5;
// //   console.log("Total subarrays divisible by K:", subarraysDivByK(arr, K));
// //   }

// // // // 99 Longest common prefix in array
// // {
// // function longestCommonPrefix(arr) {
// //     if (arr.length === 0) return "";
  
// //     let prefix = arr[0];
  
// //     for (let i = 1; i < arr.length; i++) {
// //       let j = 0;
// //       while (j < prefix.length && j < arr[i].length && prefix[j] === arr[i][j]) {
// //         j++;
// //       }
// //       prefix = prefix.substring(0, j);
// //       if (prefix === "") break;
// //     }
  
// //     return prefix;
// //   }
  
  
// //   let arr = ["flower", "flow", "flight"];
// //   console.log("Longest Common Prefix:", longestCommonPrefix(arr)); 
// //   }

// // // // 100 Next greater element
// // {
// // function nextGreaterElements(arr) {
// //     let n = arr.length;
// //     let stack = [];
// //     let result = new Array(n);
  
// //     for (let i = n - 1; i >= 0; i--) {
// //       while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
// //         stack.pop();
// //       }
  
// //       if (stack.length === 0) {
// //         result[i] = -1;
// //       } else {
// //         result[i] = stack[stack.length - 1];
// //       }
  
// //       stack.push(arr[i]);
// //     }
  
// //     return result;
// //   }
  
  
// //   let arr = [4, 5, 2, 25];
// //   console.log(nextGreaterElements(arr)); 
// //   }

// // // // 101 Next smaller element
// // {
// // function nextSmallerElement(arr) {
// //     let n = arr.length;
// //     let stack = [];
// //     let result = new Array(n);
  
// //     for (let i = n - 1; i >= 0; i--) {
// //       while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
// //         stack.pop();
// //       }
  
// //       result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
  
// //       stack.push(arr[i]);
// //     }
  
// //     return result;
// //   }
  
  
// //   let arr = [4, 8, 5, 2, 25];
// //   console.log(nextSmallerElement(arr)); 
// //   }

// // // // 102 Trapping Rain Water
// // {
// // function trap(height) {
// //     let n = height.length;
// //     let maxLeft = new Array(n);
// //     let maxRight = new Array(n);
// //     let water = 0;
  
// //     maxLeft[0] = height[0];
// //     for (let i = 1; i < n; i++) {
// //       maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
// //     }
  
// //     maxRight[n - 1] = height[n - 1];
// //     for (let i = n - 2; i >= 0; i--) {
// //       maxRight[i] = Math.max(maxRight[i + 1], height[i]);
// //     }
  
// //     for (let i = 0; i < n; i++) {
// //       let minHeight = Math.min(maxLeft[i], maxRight[i]);
// //       if (minHeight > height[i]) {
// //         water += minHeight - height[i];
// //       }
// //     }
  
// //     return water;
// //   }
  
  
// //   let height = [0,1,0,2,1,0,1,3,2,1,2,1];
// //   console.log("Total Trapped Water:", trap(height)); 
// //   }

// // // // 103 Trapping Rain Water
// // {
// // function trap(height) {
// //     let n = height.length;
// //     let maxLeft = new Array(n);
// //     let maxRight = new Array(n);
// //     let water = 0;
  
// //     maxLeft[0] = height[0];
// //     for (let i = 1; i < n; i++) {
// //       maxLeft[i] = Math.max(maxLeft[i - 1], height[i]);
// //     }
  
// //     maxRight[n - 1] = height[n - 1];
// //     for (let i = n - 2; i >= 0; i--) {
// //       maxRight[i] = Math.max(maxRight[i + 1], height[i]);
// //     }
  
// //     for (let i = 0; i < n; i++) {
// //       let minHeight = Math.min(maxLeft[i], maxRight[i]);
// //       if (minHeight > height[i]) {
// //         water += minHeight - height[i];
// //       }
// //     }
  
// //     return water;
// //   }
  
  
// //   let height = [0,1,0,2,1,0,1,3,2,1,2,1];
// //   console.log("Total Trapped Water:", trap(height)); 
// //   }

// // // // 104 Stock Buy and Sell (1 transaction)
// // {
// // function maxProfit(prices) {
// //     let minPrice = Infinity;
// //     let maxProfit = 0;
  
// //     for (let i = 0; i < prices.length; i++) {
// //       if (prices[i] < minPrice) {
// //         minPrice = prices[i]; 
// //       } else {
// //         let profit = prices[i] - minPrice;
// //         if (profit > maxProfit) {
// //           maxProfit = profit; 
// //         }
// //       }
// //     }
  
// //     return maxProfit;
// //   }
  
  
// //   let prices = [7, 1, 5, 3, 6, 4];
// //   console.log("Maximum Profit:", maxProfit(prices)); 
// //   }
// // // // 105 Stock Buy and Sell (infinite transactions)
// // {
// //   function maxProfit(prices) {
// //     let profit = 0;
  
// //     for (let i = 1; i < prices.length; i++) {
// //       if (prices[i] > prices[i - 1]) {
// //         profit += prices[i] - prices[i - 1];
// //       }
// //     }
  
// //     return profit;
// //   }
  
  
// //   let prices = [1, 5, 3, 8, 4, 9];
// //   console.log("Maximum Profit:", maxProfit(prices)); 
// //   }

// // // // 106 Leaders in array
// // {
// // function findLeaders(arr) {
// //     let n = arr.length;
// //     let leaders = [];
// //     let maxFromRight = arr[n - 1];
  
    
// //     leaders[0] = maxFromRight;
// //     let index = 1;
  
// //     for (let i = n - 2; i >= 0; i--) {
// //       if (arr[i] >= maxFromRight) {
// //         maxFromRight = arr[i];
// //         leaders[index] = maxFromRight;
// //         index++;
// //       }
// //     }
  
    
// //     let result = [];
// //     for (let i = index - 1; i >= 0; i--) {
// //       result[index - 1 - i] = leaders[i];
// //     }
  
// //     return result;
// //   }
  
  
// //   let arr = [16, 17, 4, 3, 5, 2];
// //   console.log("Leaders:", findLeaders(arr)); 
// //   }

// // // // 107 Equilibrium point
// // {
// // function equilibriumPoint(arr) {
// //     let totalSum = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //       totalSum += arr[i];
// //     }
  
// //     let leftSum = 0;
// //     for (let i = 0; i < arr.length; i++) {
// //       let rightSum = totalSum - leftSum - arr[i];
// //       if (leftSum === rightSum) {
// //         return i + 1; 
// //       }
// //       leftSum += arr[i];
// //     }
  
// //     return -1; 
// //   }
  
  
// //   let arr = [1, 3, 5, 2, 2];
// //   console.log("Equilibrium Point (1-based):", equilibriumPoint(arr)); 
// //   }

// // // // 107  Find repeating and missing element
// // {
// // function findMissingRepeating(arr) {
// //     let n = arr.length;
  
// //     let sum = (n * (n + 1)) / 2;
// //     let sumSq = (n * (n + 1) * (2 * n + 1)) / 6;
  
// //     let actualSum = 0;
// //     let actualSqSum = 0;
  
// //     for (let i = 0; i < n; i++) {
// //       actualSum += arr[i];
// //       actualSqSum += arr[i] * arr[i];
// //     }
  
// //     let diff = sum - actualSum; 
// //     let squareDiff = sumSq - actualSqSum;
  
// //     let sumXY = squareDiff / diff; 
  
// //     let x = (diff + sumXY) / 2;
// //     let y = x - diff;
  
// //     return {
// //       missing: x,
// //       repeating: y
// //     };
// //   }
  
  
// //   let arr = [4, 3, 6, 2, 1, 1];
// //   let res = findMissingRepeating(arr);
// //   console.log("Missing:", res.missing, "Repeating:", res.repeating); 
// //   }

// // // // 108 Find all duplicates in array
// // {
// // function findDuplicates(arr) {
// //     let res = [];
// //     for (let i = 0; i < arr.length; i++) {
// //       let index = Math.abs(arr[i]) - 1;
  
// //       if (arr[index] < 0) {
        
// //         let len = res.length;
// //         res[len] = Math.abs(arr[i]);
// //       } else {
        
// //         arr[index] = -arr[index];
// //       }
// //     }
  
// //     return res;
// //   }
  
  
// //   let arr = [4, 3, 2, 7, 8, 2, 3, 1];
// //   console.log("Duplicates:", findDuplicates(arr)); 
  
// // }
// // // // 109 Count subarrays with given xor
// // {
// // function countSubarraysWithXor(arr, k) {
// //     let count = 0;
// //     let xor = 0;
  
    
// //     let freq = {};
  
// //     for (let i = 0; i < arr.length; i++) {
// //       xor = xor ^ arr[i];
  
// //       if (xor === k) {
// //         count++;
// //       }
  
// //       let target = xor ^ k;
  
// //       if (freq[target] !== undefined) {
// //         count += freq[target];
// //       }
  
// //       if (freq[xor] === undefined) {
// //         freq[xor] = 1;
// //       } else {
// //         freq[xor]++;
// //       }
// //     }
  
// //     return count;
// //   }
  
  
// //   let arr = [4, 2, 2, 6, 4];
// //   let k = 6;
// //   console.log("Count:", countSubarraysWithXor(arr, k)); 
// //   }

// // // // 110 Spiral traversal of matrix
// // {
// // function spiralTraversal(matrix) {
// //     let result = [];
  
// //     let top = 0;
// //     let bottom = matrix.length - 1;
// //     let left = 0;
// //     let right = matrix[0].length - 1;
  
// //     while (top <= bottom && left <= right) {
    
// //       for (let i = left; i <= right; i++) {
// //         result[result.length] = matrix[top][i];
// //       }
// //       top++;
  
      
// //       for (let i = top; i <= bottom; i++) {
// //         result[result.length] = matrix[i][right];
// //       }
// //       right--;
  
      
// //       if (top <= bottom) {
// //         for (let i = right; i >= left; i--) {
// //           result[result.length] = matrix[bottom][i];
// //         }
// //         bottom--;
// //       }
  
      
// //       if (left <= right) {
// //         for (let i = bottom; i >= top; i--) {
// //           result[result.length] = matrix[i][left];
// //         }
// //         left++;
// //       }
// //     }
  
// //     return result;
// //   }
  
  
// //   let mat = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// //   ];
// //   console.log("Spiral Order:", spiralTraversal(mat)); 
// //   }

// // // // 111 Diagonal traversal of matrix
// // {
// // function diagonalTraversal(matrix) {
// //     let m = matrix.length;
// //     let n = matrix[0].length;
// //     let result = [];
  
// //     for (let d = 0; d < m + n - 1; d++) {
// //       let intermediate = [];
  
// //       let r = d < n ? 0 : d - n + 1;
// //       let c = d < n ? d : n - 1;
  
// //       while (r < m && c >= 0) {
// //         intermediate[intermediate.length] = matrix[r][c];
// //         r++;
// //         c--;
// //       }
  
      
// //       if (d % 2 === 0) {
// //         for (let i = intermediate.length - 1; i >= 0; i--) {
// //           result[result.length] = intermediate[i];
// //         }
// //       } else {
// //         for (let i = 0; i < intermediate.length; i++) {
// //           result[result.length] = intermediate[i];
// //         }
// //       }
// //     }
  
// //     return result;
// //   }
  

// //   let mat = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// //   ];
  
// //   console.log("Diagonal Traversal:", diagonalTraversal(mat)); 
  
// //   }
// // // // 112 Rotate matrix 90 degrees
// // {
// // function rotateMatrix90(matrix) {
// //     let n = matrix.length;
  
    
// //     for (let i = 0; i < n; i++) {
// //       for (let j = i + 1; j < n; j++) {
        
// //         let temp = matrix[i][j];
// //         matrix[i][j] = matrix[j][i];
// //         matrix[j][i] = temp;
// //       }
// //     }
  
    
// //     for (let i = 0; i < n; i++) {
// //       let left = 0, right = n - 1;
// //       while (left < right) {
// //         let temp = matrix[i][left];
// //         matrix[i][left] = matrix[i][right];
// //         matrix[i][right] = temp;
// //         left++;
// //         right--;
// //       }
// //     }
  
// //     return matrix;
// //   }
  
  
// //   let mat = [
// //     [1, 2, 3],
// //     [4, 5, 6],
// //     [7, 8, 9]
// //   ];
  
// //   console.log("Rotated Matrix:", rotateMatrix90(mat));
// //   }

// // // // 113 Search in a rotated sorted array
// // {
// // function searchRotatedArray(arr, target) {
// //     let low = 0;
// //     let high = arr.length - 1;
  
// //     while (low <= high) {
// //       let mid = Math.floor((low + high) / 2);
  
// //       if (arr[mid] === target) return mid;
  
      
// //       if (arr[low] <= arr[mid]) {
// //         if (target >= arr[low] && target < arr[mid]) {
// //           high = mid - 1;
// //         } else {
// //           low = mid + 1;
// //         }
// //       }
    
// //       else {
// //         if (target > arr[mid] && target <= arr[high]) {
// //           low = mid + 1;
// //         } else {
// //           high = mid - 1;
// //         }
// //       }
// //     }
  
// //     return -1;
// //   }
  
  
// //   console.log(searchRotatedArray([4,5,6,7,0,1,2], 6)); 
// //   }

// // // // 114 Peak element in array
// // {
// //   function findPeakElement(arr) {
// //     let low = 0;
// //     let high = arr.length - 1;
  
// //     while (low <= high) {
// //       let mid = Math.floor((low + high) / 2);
  
// //       let left = mid === 0 || arr[mid] >= arr[mid - 1];
// //       let right = mid === arr.length - 1 || arr[mid] >= arr[mid + 1];
  
// //       if (left && right) return mid;
  
// //       if (mid > 0 && arr[mid - 1] > arr[mid]) {
// //         high = mid - 1;
// //       } else {
// //         low = mid + 1;
// //       }
// //     }
  
// //     return -1;
// //   }
  
  
// //   let arr = [1, 3, 20, 4, 1, 0];
// //   console.log("Peak element index:", findPeakElement(arr)); 
// //   }

// // // // 115 Minimum platforms (train arrival/departure)
// // {
// // function minPlatforms(arrival, departure) {
// //     let n = arrival.length;
    
    
// //     for (let i = 0; i < n - 1; i++) {
// //       for (let j = i + 1; j < n; j++) {
// //         if (arrival[i] > arrival[j]) {
// //           let temp = arrival[i];
// //           arrival[i] = arrival[j];
// //           arrival[j] = temp;
// //         }
// //         if (departure[i] > departure[j]) {
// //           let temp = departure[i];
// //           departure[i] = departure[j];
// //           departure[j] = temp;
// //         }
// //       }
// //     }
  
// //     let platformNeeded = 0, maxPlatforms = 0;
// //     let i = 0, j = 0;
  
  
// //     while (i < n && j < n) {
// //       if (arrival[i] <= departure[j]) {
// //         platformNeeded++;
// //         if (platformNeeded > maxPlatforms) {
// //           maxPlatforms = platformNeeded;
// //         }
// //         i++;
// //       } else {
// //         platformNeeded--;
// //         j++;
// //       }
// //     }
  
// //     return maxPlatforms;
// //   }
  
  
// //   let arr = [900, 940, 950, 1100, 1500, 1800];
// //   let dep = [910, 1200, 1120, 1130, 1900, 2000];
  
// //   console.log("Minimum Platforms Required:", minPlatforms(arr, dep)); 
  
// // }
// // // // 116 Merge overlapping intervals
// // {
// // function mergeIntervals(intervals) {
// //     if (intervals.length === 0) return [];
  
    
// //     for (let i = 0; i < intervals.length - 1; i++) {
// //       for (let j = i + 1; j < intervals.length; j++) {
// //         if (intervals[i][0] > intervals[j][0]) {
// //           let temp = intervals[i];
// //           intervals[i] = intervals[j];
// //           intervals[j] = temp;
// //         }
// //       }
// //     }
  
// //     let result = [];
// //     let current = intervals[0];
  
// //     for (let i = 1; i < intervals.length; i++) {
// //       let next = intervals[i];
  
      
// //       if (current[1] >= next[0]) {
// //         current[1] = Math.max(current[1], next[1]);  
// //       } else {
// //         result.push(current);
// //         current = next;
// //       }
// //     }
  
// //     result.push(current); 
// //     return result;
// //   }
  
  
// //   let intervals = [[1,3],[2,6],[8,10],[15,18]];
// //   console.log("Merged Intervals:", mergeIntervals(intervals)); 

  
// // }
// // // // 117 Sliding window maximum
// // {
// // function maxSlidingWindow(arr, k) {
// //     let n = arr.length;
// //     let result = [];
// //     let dq = []; 
  
// //     for (let i = 0; i < n; i++) {
      
// //       if (dq.length > 0 && dq[0] <= i - k) {
// //         dq.shift();
// //       }
  
      
// //       while (dq.length > 0 && arr[dq[dq.length - 1]] < arr[i]) {
// //         dq.pop();
// //       }
  
// //       dq.push(i);
  
     
// //       if (i >= k - 1) {
// //         result.push(arr[dq[0]]); 
// //       }
// //     }
  
// //     return result;
// //   }
  
// //   // Example
// //   let arr = [1,3,-1,-3,5,3,6,7];
// //   let k = 3;
// //   console.log("Sliding Window Max:", maxSlidingWindow(arr, k)); 
  
// // }
// // // // 118 Median of running stream
// // {
// // class MedianStream {
// //     constructor() {
// //       this.maxHeap = []; 
// //       this.minHeap = []; 
// //     }
  
// //     addNum(num) {
// //       if (this.maxHeap.length === 0 || num <= -this.maxHeap[0]) {
// //         this.maxHeap.push(-num); 
// //         this._heapifyUp(this.maxHeap);
// //       } else {
// //         this.minHeap.push(num); 
// //         this._heapifyUp(this.minHeap);
// //       }
  
    
// //       if (this.maxHeap.length > this.minHeap.length + 1) {
// //         this.minHeap.push(-this.maxHeap.shift());
// //         this._heapifyUp(this.minHeap);
// //       } else if (this.minHeap.length > this.maxHeap.length) {
// //         this.maxHeap.push(-this.minHeap.shift());
// //         this._heapifyUp(this.maxHeap);
// //       }
// //     }
  
// //     findMedian() {
// //       if (this.maxHeap.length === this.minHeap.length) {
// //         return (-this.maxHeap[0] + this.minHeap[0]) / 2; 
// //       } else {
// //         return -this.maxHeap[0]; 
// //       }
// //     }
  
   
// //     _heapifyUp(heap) {
// //       let index = heap.length - 1;
// //       while (index > 0) {
// //         let parentIndex = Math.floor((index - 1) / 2);
// //         if (heap[index] > heap[parentIndex]) break;
// //         [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
// //         index = parentIndex;
// //       }
// //     }
// //   }
  
// //   function findMedianOfStream(stream) {
// //     const medianStream = new MedianStream();
// //     const result = [];
  
// //     for (const num of stream) {
// //       medianStream.addNum(num);
// //       result.push(medianStream.findMedian());
// //     }
  
// //     return result;
// //   }
  
 
// //   let stream = [1, 5, 2, 8, 3, 7];
// //   console.log("Median of Running Stream:", findMedianOfStream(stream));
  
// //   }
// // // // 119 Maximize sum of i*arr[i]
// // {
// // function maximizeSum(arr) {
// //     let n = arr.length;
    
    
// //     let sum = 0, currentSum = 0;
// //     for (let i = 0; i < n; i++) {
// //       sum += arr[i];
// //       currentSum += i * arr[i];
// //     }
  
    
// //     let maxSum = currentSum;
  
    
// //     for (let i = 1; i < n; i++) {
// //       currentSum = currentSum - (n - 1) * arr[n - i] + sum;
// //       maxSum = Math.max(maxSum, currentSum);
// //     }
  
// //     return maxSum;
// //   }
  
  
// //   let arr = [8, 3, 1, 2];
// //   console.log("Maximized Sum:", maximizeSum(arr)); 
// //   }
// // // // 120 Smallest positive missing number
// // {
// // function firstMissingPositive(arr) {
// //     let n = arr.length;
  
   
// //     for (let i = 0; i < n; i++) {
// //       while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
// //         let temp = arr[i];
// //         arr[i] = arr[arr[i] - 1];
// //         arr[temp - 1] = temp;
// //       }
// //     }
  
    
// //     for (let i = 0; i < n; i++) {
// //       if (arr[i] !== i + 1) {
// //         return i + 1;
// //       }
// //     }
  
   
// //     return n + 1;
// //   }
  
  
// //   let arr = [3, 4, -1, 1];
// //   console.log("Smallest Missing Positive:", firstMissingPositive(arr)); 
  
// // }
// // // // 121 Find longest mountain
// // {
// // function longestMountain(arr) {
// //     let n = arr.length;
// //     let maxLength = 0;
  
    
// //     for (let i = 1; i < n - 1; i++) {
      
// //       if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
// //         let left = i - 1;
// //         let right = i + 1;
  
       
// //         while (left >= 0 && arr[left] < arr[left + 1]) {
// //           left--;
// //         }
  
        
// //         while (right < n && arr[right] < arr[right - 1]) {
// //           right++;
// //         }
  
        
// //         let length = right - left - 1;
// //         maxLength = Math.max(maxLength, length);
// //       }
// //     }
  
// //     return maxLength;
// //   }
  
  
// //   let arr = [2, 1, 1, 5, 6, 2, 3, 1];
// //   console.log("Longest Mountain Length:", longestMountain(arr));
// //   }

// // // // 122 Count subarrays with product less than K
// // {
// // function countSubarraysWithProductLessThanK(arr, K) {
// //     let n = arr.length;
// //     let product = 1;
// //     let count = 0;
// //     let start = 0;
  
// //     for (let end = 0; end < n; end++) {
      
// //       product *= arr[end];
  
      
// //       while (product >= K && start <= end) {
// //         product /= arr[start];
// //         start++;
// //       }
  
      
// //       count += end - start + 1;
// //     }
  
// //     return count;
// //   }
  
  
// //   let arr = [10, 5, 2, 6];
// //   let K = 100;
// // console.log("Count of subarrays with product less than K:", countSubarraysWithProductLessThanK(arr, K)); 
// //   }
// // // // 123 Find longest consecutive sequence
// //  {
// // function longestConsecutive(nums) {
// //     if (nums.length === 0) return 0;
  
// //     let numSet = new Set(nums);
// //     let longestSeq = 0;
  
// //     for (let num of numSet) {
      
// //       if (!numSet.has(num - 1)) {
// //         let currentNum = num;
// //         let currentSeq = 1;
  
       
// //         while (numSet.has(currentNum + 1)) {
// //           currentNum++;
// //           currentSeq++;
// //         }
  
        
// //         longestSeq = Math.max(longestSeq, currentSeq);
// //       }
// //     }
  
// //     return longestSeq;
// //   }
  
  
// //   let arr = [100, 4, 200, 1, 3, 2];
// //   console.log("Longest Consecutive Sequence Length:", longestConsecutive(arr)); 
// //   }

// // // // 125 Min swaps required to bring elements <= K together
// // {
// // function minSwaps(arr, K) {
// //     let n = arr.length;
  
    
// //     let countLessEqualK = 0;
// //     for (let i = 0; i < n; i++) {
// //       if (arr[i] <= K) {
// //         countLessEqualK++;
// //       }
// //     }
  
    
// //     let windowCount = 0;
// //     let maxCount = 0;
    
    
// //     for (let i = 0; i < countLessEqualK; i++) {
// //       if (arr[i] <= K) {
// //         windowCount++;
// //       }
// //     }
// //     maxCount = windowCount;
  
    
// //     for (let i = countLessEqualK; i < n; i++) {
      
// //       if (arr[i - countLessEqualK] <= K) {
// //         windowCount--;
// //       }
      
// //       if (arr[i] <= K) {
// //         windowCount++;
// //       }
  
      
// //       maxCount = Math.max(maxCount, windowCount);
// //     }
  

// //     return countLessEqualK - maxCount;
// //   }
  
  
// //   let arr = [2, 7, 9, 5, 6, 3];
// //   let K = 6;
// //   console.log("Minimum swaps required:", minSwaps(arr, K)); 
// //   }
// // // // 126 Longest alternating subarray
// // {
// // function longestAlternatingSubarray(arr) {
// //     let n = arr.length;
// //     if (n == 0) return 0;
  
// //     let maxLength = 1;
// //     let currentLength = 1;
  
// //     for (let i = 1; i < n; i++) {
      
// //       if ((arr[i] > 0 && arr[i - 1] < 0) || (arr[i] < 0 && arr[i - 1] > 0)) {
// //         currentLength++;  
// //       } else {
// //         maxLength = Math.max(maxLength, currentLength);  
// //         currentLength = 1;  
// //       }
// //     }
  
    
// //     maxLength = Math.max(maxLength, currentLength);
  
// //     return maxLength;
// //   }
  

// //   let arr = [1, 2, 5, 6, 3, 4, 7];
// //   console.log("Longest Alternating Subarray Length:", longestAlternatingSubarray(arr)); 
// //   }
// // // // 127 Maximum length of bitonic subarray
// // {
// // function maxLengthBitonicSubarray(arr) {
// //     let n = arr.length;
// //     if (n <= 1) return n;
  
// //     let increasing = new Array(n).fill(1);
// //     let decreasing = new Array(n).fill(1);
  
    
// //     for (let i = 1; i < n; i++) {
// //       if (arr[i] > arr[i - 1]) {
// //         increasing[i] = increasing[i - 1] + 1;
// //       }
// //     }
  
    
// //     for (let i = n - 2; i >= 0; i--) {
// //       if (arr[i] > arr[i + 1]) {
// //         decreasing[i] = decreasing[i + 1] + 1;
// //       }
// //     }
  
    
// //     let maxLength = 0;
// //     for (let i = 0; i < n; i++) {
// //       if (increasing[i] > 1 && decreasing[i] > 1) {
// //         maxLength = Math.max(maxLength, increasing[i] + decreasing[i] - 1);
// //       }
// //     }
  
// //     return maxLength;
// //   }
  
  
// //   let arr = [1, 3, 5, 4, 2];
// //   console.log("Maximum Length of Bitonic Subarray:", maxLengthBitonicSubarray(arr)); 
// //   }
// // // // 128  Convert array to Zig-Zag fashion
// // {
// // function zigZagArray(arr) {
// //     let flag = true; 

// //     for (let i = 0; i < arr.length - 1; i++) {
// //         if (flag) {
// //             if (arr[i] > arr[i + 1]) {
                
// //                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
// //             }
// //         } else {
// //             if (arr[i] < arr[i + 1]) {
                
// //                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
// //             }
// //         }
// //         flag = !flag;
// //     }

// //     return arr;
// // }
// // }
// // // // 129 Product of array except self
// // {
// // function productExceptSelf(arr) {
// //     const n = arr.length;
// //     let result = new Array(n).fill(1);

// //     let left = 1;
// //     for (let i = 0; i < n; i++) {
// //         result[i] = left;
// //         left *= arr[i];
// //     }

// //     let right = 1;
// //     for (let i = n - 1; i >= 0; i--) {
// //         result[i] *= right;
// //         right *= arr[i];
// //     }

// //     return result;
// // }
// // }

// // // // 130 Count pairs with given XOR
// // {
// // function countXORPairs(arr, K) {
// //     let count = 0;
// //     let freq = new Map();

// //     for (let i = 0; i < arr.length; i++) {
// //         let x = arr[i] ^ K;
// //         if (freq.has(x)) {
// //             count += freq.get(x);
// //         }

// //         freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
// //     }

// //     return count;
// // }

// // }
// // // // 131 Triplets with zero sum
// // {
// // function findTripletsWithZeroSum(arr) {
// //     arr.sort((a, b) => a - b);
// //     let result = [];

// //     for (let i = 0; i < arr.length - 2; i++) {
// //         if (i > 0 && arr[i] === arr[i - 1]) continue; 

// //         let left = i + 1;
// //         let right = arr.length - 1;

// //         while (left < right) {
// //             let sum = arr[i] + arr[left] + arr[right];

// //             if (sum === 0) {
// //                 result.push([arr[i], arr[left], arr[right]]);

                
// //                 while (left < right && arr[left] === arr[left + 1]) left++;
// //                 while (left < right && arr[right] === arr[right - 1]) right--;

// //                 left++;
// //                 right--;
// //             } else if (sum < 0) {
// //                 left++;
// //             } else {
// //                 right--;
// //             }
// //         }
// //     }

// //     return result;
// // }
// // }
// // // // 132 Rearrange array in max-min form
// // {
// // function rearrangeMaxMin(arr) {
// //     let n = arr.length;
// //     let result = [];
// //     let left = 0, right = n - 1;

// //     let turn = true; 

// //     while (left <= right) {
// //         if (turn) {
// //             result.push(arr[right--]);
// //         } else {
// //             result.push(arr[left++]);
// //         }
// //         turn = !turn;
// //     }

// //     return result;
// // }
// // }

// // // // 133 Longest increasing subsequence
// // {
// // function lengthOfLIS(arr) {
// //     const n = arr.length;
// //     const dp = new Array(n).fill(1);

// //     for (let i = 1; i < n; i++) {
// //         for (let j = 0; j < i; j++) {
// //             if (arr[j] < arr[i]) {
// //                 dp[i] = Math.max(dp[i], dp[j] + 1);
// //             }
// //         }
// //     }

// //     return Math.max(...dp);
// // }
// // }

// // // // 134 Count triplets with sum smaller than X
// // {
// // function countTripletsSmallerThanX(arr, X) {
// //     arr.sort((a, b) => a - b);
// //     let n = arr.length;
// //     let count = 0;

// //     for (let i = 0; i < n - 2; i++) {
// //         let left = i + 1;
// //         let right = n - 1;

// //         while (left < right) {
// //             let sum = arr[i] + arr[left] + arr[right];
// //             if (sum < X) {
// //                 count += (right - left);
// //                 left++;
// //             } else {
// //                 right--;
// //             }
// //         }
// //     }

// //     return count;
// // }
// // }

// // // // 135 Maximum of minimum for every window size
// // {
// // function maxOfMinForEveryWindow(arr) {
// //     let n = arr.length;
// //     let left = new Array(n).fill(-1);
// //     let right = new Array(n).fill(n);
// //     let stack = [];

    
// //     for (let i = 0; i < n; i++) {
// //         while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
// //             stack.pop();
// //         }
// //         if (stack.length) left[i] = stack[stack.length - 1];
// //         stack.push(i);
// //     }

// //     stack = [];

// //     // Next Smaller Element
// //     for (let i = n - 1; i >= 0; i--) {
// //         while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
// //             stack.pop();
// //         }
// //         if (stack.length) right[i] = stack[stack.length - 1];
// //         stack.push(i);
// //     }

// //     let ans = new Array(n + 1).fill(-Infinity);

// //     for (let i = 0; i < n; i++) {
// //         let len = right[i] - left[i] - 1;
// //         ans[len] = Math.max(ans[len], arr[i]);
// //     }

   
// //     for (let i = n - 1; i >= 1; i--) {
// //         ans[i] = Math.max(ans[i], ans[i + 1]);
// //     }

    
// //     return ans.slice(1);
// // }
// // }
// // // // 136 Maximum sum of 2 non-overlapping subarrays
// // {
// // function atMostK(arr, K) {

// //     let n = arr.length;
// //     let map = new Map();
// //     let count = 0;
// //     let left = 0;

// //     for (let right = 0; right < n; right++) {
        
// //         map.set(arr[right], (map.get(arr[right]) || 0) + 1);

       
// //         while (map.size > K) {
// //             map.set(arr[left], map.get(arr[left]) - 1);
// //             if (map.get(arr[left]) === 0) {
// //                 map.delete(arr[left]);
// //             }
// //             left++;
// //         }

        
// //         count += right - left + 1;
// //     }

// //     return count;
// // }

// // function countSubarraysWithExactlyK(arr, K) {
// //     return atMostK(arr, K) - atMostK(arr, K - 1);
// // }
// // }

// // // // 137 Maximum sum of 2 non-overlapping subarrays
// // {
// // function maxSumTwoNoOverlap(A, L, M) {
// //     function maxSubarraySum(arr, size) {
// //         let sum = 0, maxSum = 0;
// //         for (let i = 0; i < size; i++) sum += arr[i]; 
// //         maxSum = sum;
        
// //         for (let i = size; i < arr.length; i++) {
// //             sum += arr[i] - arr[i - size]; 
// //             maxSum = Math.max(maxSum, sum);
// //         }
// //         return maxSum;
// //     }
    
// //     let maxLeft = new Array(A.length).fill(0);
// //     let maxRight = new Array(A.length).fill(0);
    
// //     let leftMax = 0, rightMax = 0;
    
   
// //     for (let i = L - 1; i < A.length; i++) {
// //         if (i === L - 1) {
// //             leftMax = A.slice(0, L).reduce((a, b) => a + b);
// //         } else {
// //             leftMax += A[i] - A[i - L];
// //         }
// //         maxLeft[i] = leftMax;
// //     }

// //     for (let i = A.length - M; i >= 0; i--) {
// //         if (i === A.length - M) {
// //             rightMax = A.slice(i, A.length).reduce((a, b) => a + b);
// //         } else {
// //             rightMax += A[i] - A[i + M];
// //         }
// //         maxRight[i] = rightMax;
// //     }

    
// //     let result = 0;
// //     for (let i = L + M - 1; i < A.length; i++) {
// //         result = Math.max(result, maxLeft[i - M] + maxRight[i]);
// //     }

// //     return result;
// // }
// // }
// // // // 138 Median of two sorted arrays
// // {
// // function findMedianSortedArrays(nums1, nums2) {
   
// //     if (nums1.length > nums2.length) {
// //         [nums1, nums2] = [nums2, nums1];
// //     }

// //     let m = nums1.length, n = nums2.length;
// //     let left = 0, right = m;

// //     while (left <= right) {
// //         let partition1 = Math.floor((left + right) / 2);
// //         let partition2 = Math.floor((m + n + 1) / 2) - partition1;

// //         let maxLeft1 = (partition1 === 0) ? -Infinity : nums1[partition1 - 1];
// //         let minRight1 = (partition1 === m) ? Infinity : nums1[partition1];

// //         let maxLeft2 = (partition2 === 0) ? -Infinity : nums2[partition2 - 1];
// //         let minRight2 = (partition2 === n) ? Infinity : nums2[partition2];

        
// //         if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
          
// //             if ((m + n) % 2 === 1) {
// //                 return Math.max(maxLeft1, maxLeft2);
// //             } else {
            
// //                 return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
// //             }
// //         } else if (maxLeft1 > minRight2) {
           
// //             right = partition1 - 1;
// //         } else {
            
// //             left = partition1 + 1;
// //         }
// //     }

// //     throw new Error("Input arrays are not sorted properly");
// // }
// // }

// // // // 139 Find repeating number without modifying array
// // {
// // function findDuplicate(nums) {
// //     let slow = nums[0];
// //     let fast = nums[0];

    
// //     do {
// //         slow = nums[slow];
// //         fast = nums[nums[fast]];
// //     } while (slow !== fast);

    
// //     slow = nums[0];
// //     while (slow !== fast) {
// //         slow = nums[slow];
// //         fast = nums[fast];
// //     }

// //     return slow;
// // }
// // }

// // // // 140 Max sum of non-adjacent elements
// // {
// // function maxNonAdjacentSum(arr) {
// //     if (arr.length === 0) return 0;
// //     if (arr.length === 1) return arr[0];

// //     let incl = arr[0]; 
// //     let excl = 0;

// //     for (let i = 1; i < arr.length; i++) {
// //         let newIncl = excl + arr[i]; 
// //         let newExcl = Math.max(incl, excl); 

// //         incl = newIncl;
// //         excl = newExcl;
// //     }

// //     return Math.max(incl, excl);
// // }

// // }
// // // // 141 Minimum number of swaps to sort array
// // {
// // function minSwaps(arr) {
// //     let n = arr.length;

   
// //     let arrPos = arr.map((value, index) => [value, index]);

   
// //     arrPos.sort((a, b) => a[0] - b[0]);

// //     let visited = new Array(n).fill(false);
// //     let swaps = 0;

    
// //     for (let i = 0; i < n; i++) {
       
// //         if (visited[i] || arrPos[i][1] === i) continue;

// //         let cycle_size = 0;
// //         let j = i;

       
// //         while (!visited[j]) {
// //             visited[j] = true;
// //             j = arrPos[j][1];
// //             cycle_size++;
// //         }

        
// //         if (cycle_size > 0) {
// //             swaps += (cycle_size - 1);
// //         }
// //     }

// //     return swaps;
// // }
// // }
// // // // 142 Count smaller elements on right
// // {
// // function countSmaller(nums) {
// //     let n = nums.length;
// //     let count = new Array(n).fill(0);
// //     let indexes = Array.from({ length: n }, (_, i) => i);

// //     function mergeSort(start, end) {
// //         if (end - start <= 1) return;

// //         let mid = Math.floor((start + end) / 2);
// //         mergeSort(start, mid);
// //         mergeSort(mid, end);

// //         let temp = [];
// //         let i = start, j = mid;
// //         let rightCount = 0;

// //         while (i < mid && j < end) {
// //             if (nums[indexes[j]] < nums[indexes[i]]) {
// //                 temp.push(indexes[j++]);
// //                 rightCount++;
// //             } else {
// //                 count[indexes[i]] += rightCount;
// //                 temp.push(indexes[i++]);
// //             }
// //         }

// //         while (i < mid) {
// //             count[indexes[i]] += rightCount;
// //             temp.push(indexes[i++]);
// //         }

// //         while (j < end) {
// //             temp.push(indexes[j++]);
// //         }

// //         for (let k = start; k < end; k++) {
// //             indexes[k] = temp[k - start];
// //         }
// //     }

// //     mergeSort(0, n);
// //     return count;
// // }
// // }

// // // // 143 Largest rectangle in histogram
// // {
// // function largestRectangleArea(heights) {
// //     let stack = [];
// //     let maxArea = 0;
// //     heights.push(0);  
// //     for (let i = 0; i < heights.length; i++) {
// //         while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
// //             let height = heights[stack.pop()];
// //             let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
// //             maxArea = Math.max(maxArea, height * width);
// //         }
// //         stack.push(i);
// //     }

// //     return maxArea;
// // }
// // }
// // // // 144 Max area of binary matrix
// // {
// // function maximalRectangle(matrix) {
// //     if (matrix.length === 0) return 0;
// //     let n = matrix[0].length;
// //     let heights = new Array(n).fill(0);
// //     let maxArea = 0;

// //     for (let row of matrix) {
// //         for (let i = 0; i < n; i++) {
            
// //             heights[i] = row[i] === 0 ? 0 : heights[i] + 1;
// //         }

// //         maxArea = Math.max(maxArea, largestRectangleArea(heights));
// //     }

// //     return maxArea;
// // }

// // function largestRectangleArea(heights) {
// //     let stack = [];
// //     let maxArea = 0;
// //     heights = [...heights, 0]; 

// //     for (let i = 0; i < heights.length; i++) {
// //         while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
// //             let height = heights[stack.pop()];
// //             let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
// //             maxArea = Math.max(maxArea, height * width);
// //         }
// //         stack.push(i);
// //     }

// //     return maxArea;
// // }
// // }

// // // // 145 Count inversion using BIT/Fenwick Tree
// // {
// // class FenwickTree {
// //     constructor(size) {
// //         this.tree = new Array(size + 1).fill(0);
// //     }

// //     update(index, value) {
// //         while (index < this.tree.length) {
// //             this.tree[index] += value;
// //             index += index & -index;
// //         }
// //     }

// //     query(index) {
// //         let sum = 0;
// //         while (index > 0) {
// //             sum += this.tree[index];
// //             index -= index & -index;
// //         }
// //         return sum;
// //     }
// // }

// // function countInversions(arr) {
// //     let n = arr.length;

    
// //     let sorted = [...arr].sort((a, b) => a - b);
// //     let rank = new Map();
// //     let r = 1;
// //     for (let num of sorted) {
// //         if (!rank.has(num)) {
// //             rank.set(num, r++);
// //         }
// //     }

    
// //     let bit = new FenwickTree(n);
// //     let invCount = 0;

// //     for (let i = n - 1; i >= 0; i--) {
// //         let currentRank = rank.get(arr[i]);
// //         invCount += bit.query(currentRank - 1); 
// //         bit.update(currentRank, 1);  
// //     }

// //     return invCount;
// // }
// // }
// // // // 146 Maximum xor of any subarray
// // {
// // class TrieNode {
// //     constructor() {
// //         this.children = {};
// //     }
// // }

// // class Trie {
// //     constructor() {
// //         this.root = new TrieNode();
// //     }

// //     insert(num) {
// //         let node = this.root;
// //         for (let i = 31; i >= 0; i--) {
// //             let bit = (num >> i) & 1;
// //             if (!node.children[bit]) node.children[bit] = new TrieNode();
// //             node = node.children[bit];
// //         }
// //     }

// //     getMaxXor(num) {
// //         let node = this.root;
// //         let maxXor = 0;
// //         for (let i = 31; i >= 0; i--) {
// //             let bit = (num >> i) & 1;
// //             let toggled = 1 - bit;
// //             if (node.children[toggled]) {
// //                 maxXor |= (1 << i);
// //                 node = node.children[toggled];
// //             } else {
// //                 node = node.children[bit];
// //             }
// //         }
// //         return maxXor;
// //     }
// // }

// // function maxSubarrayXOR(arr) {
// //     let trie = new Trie();
// //     trie.insert(0);  
// //     let maxXor = -Infinity;
// //     let prefixXor = 0;

// //     for (let num of arr) {
// //         prefixXor ^= num;
// //         maxXor = Math.max(maxXor, trie.getMaxXor(prefixXor));
// //         trie.insert(prefixXor);
// //     }

// //     return maxXor;
// // }

// // }
// // // // 147 K-th smallest pair distance
// // {
// // function smallestDistancePair(nums, k) {
// //     nums.sort((a, b) => a - b);

// //     let n = nums.length;
// //     let low = 0;
// //     let high = nums[n - 1] - nums[0];

// //     const countPairs = (maxDist) => {
// //         let count = 0;
// //         let left = 0;
// //         for (let right = 0; right < n; right++) {
// //             while (nums[right] - nums[left] > maxDist) {
// //                 left++;
// //             }
// //             count += right - left;
// //         }
// //         return count;
// //     };

// //     while (low < high) {
// //         let mid = Math.floor((low + high) / 2);
// //         let count = countPairs(mid);
// //         if (count < k) {
// //             low = mid + 1;
// //         } else {
// //             high = mid;
// //         }
// //     }

// //     return low;
// // }
// // }
// // // // 148 Minimum operations to make array increasing
// // {
// // function minOperationsToMakeIncreasing(arr) {
// //     let ops = 0;

// //     for (let i = 1; i < arr.length; i++) {
// //         if (arr[i] <= arr[i - 1]) {
// //             let increase = arr[i - 1] + 1 - arr[i];
// //             ops += increase;
// //             arr[i] = arr[i - 1] + 1;
// //         }
// //     }

// //     return ops;
// // }
// // }
// // // // 149 Maximum gap (bucket sort)
// // {
// // function maximumGap(nums) {
// //     if (nums.length < 2) return 0;

// //     let min = Math.min(...nums);
// //     let max = Math.max(...nums);
    
    
// //     let bucketSize = Math.max(1, Math.floor((max - min) / (nums.length - 1)));
// //     let bucketCount = Math.floor((max - min) / bucketSize) + 1;

    
// //     let bucketsMin = new Array(bucketCount).fill(Infinity);
// //     let bucketsMax = new Array(bucketCount).fill(-Infinity);

    
// //     for (let num of nums) {
// //         let idx = Math.floor((num - min) / bucketSize);
// //         bucketsMin[idx] = Math.min(bucketsMin[idx], num);
// //         bucketsMax[idx] = Math.max(bucketsMax[idx], num);
// //     }

    
// //     let maxGap = 0;
// //     let prevMax = min;

// //     for (let i = 0; i < bucketCount; i++) {
// //         if (bucketsMin[i] === Infinity) continue;  
// //         maxGap = Math.max(maxGap, bucketsMin[i] - prevMax);
// //         prevMax = bucketsMax[i];
// //     }

// //     return maxGap;
// // }
// // }
// // // // 150 Smallest subarray with sum > X
// // {
// // function smallestSubarraySum(arr, X) 

// // {
// //     let n = arr.length;
// //     let minLength = n + 1;  
// //     let currentSum = 0;
// //     let left = 0;

    
// //     for (let right = 0; right < n; right++) {
// //         currentSum += arr[right];

        
// //         while (currentSum > X) {
// //             minLength = Math.min(minLength, right - left + 1);
// //             currentSum -= arr[left];
// //             left++;
// //         }
// //     }

// //     return minLength === n + 1 ? 0 : minLength;
// // }
// // }
// // // // 151 Count number of nice subarrays
// // {
// // function countAtMostK(arr, k) {
// //     let count = 0;
// //     let left = 0;
// //     let oddCount = 0;

// //     for (let right = 0; right < arr.length; right++) {
// //         if (arr[right] % 2 !== 0) {
// //             oddCount++;
// //         }

// //         while (oddCount > k) {
// //             if (arr[left] % 2 !== 0) {
// //                 oddCount--;
// //             }
// //             left++;
// //         }

// //         count += right - left + 1;
// //     }

// //     return count;
// // }

// // function countNiceSubarrays(arr, k) {
// //     return countAtMostK(arr, k) - countAtMostK(arr, k - 1);
// // }
// // }
// // // // 152 Max product of subarray of size k
// // {
// // function maxProductSubarray(arr, k) {
// //     let n = arr.length;
// //     if (n < k) return 0;

// //     let product = 1;
// //     let maxProduct = -Infinity;

    
// //     for (let i = 0; i < k; i++) {
// //         product *= arr[i];
// //     }

// //     maxProduct = product;

    
// //     for (let i = k; i < n; i++) {
        
// //         product = (product / arr[i - k]) * arr[i];
        
      
// //         maxProduct = Math.max(maxProduct, product);
// //     }

// //     return maxProduct;
// // }
// // }
// // // // 153 Minimum size subarray sum
// // {
// // function minSubArrayLen(target, nums) {
// //     let n = nums.length;
// //     let minLength = n + 1;  
// //     let sum = 0;
// //     let left = 0;

    
// //     for (let right = 0; right < n; right++) {
// //         sum += nums[right];

        
// //         while (sum >= target) {
// //             minLength = Math.min(minLength, right - left + 1);
// //             sum -= nums[left];
// //             left++;
// //         }
// //     }

// //     return minLength === n + 1 ? 0 : minLength;
// // }
// // }
// // // // 154 Longest subarray with GCD > 1
// // {
// // function gcd(a, b) {
// //     while (b !== 0) {
// //         let temp = b;
// //         b = a % b;
// //         a = temp;
// //     }
// //     return a;
// // }

// // function longestSubarrayWithGCDGreaterThanOne(arr) {
// //     let n = arr.length;
// //     let maxLength = 0;

  
// //     for (let i = 0; i < n; i++) {
// //         let currentGCD = 0;
// //         for (let j = i; j < n; j++) {
// //             currentGCD = gcd(currentGCD, arr[j]);

// //             if (currentGCD === 1) {
// //                 break; 
// //             }

// //             maxLength = Math.max(maxLength, j - i + 1);
// //         }
// //     }

// //     return maxLength;
// // }
// // }

// // // // 155 Find max subarray sum modulo M
// // {
// // function maxSubarraySumModM(arr, M) {
// //     let n = arr.length;
// //     let prefixSum = 0;
// //     let maxSum = 0;
    
   
// //     let sortedPrefixSums = new Set();
// //     sortedPrefixSums.add(0);  

// //     for (let i = 0; i < n; i++) {
// //         prefixSum = (prefixSum + arr[i]) % M;
        
        
// //         for (let val of sortedPrefixSums) {
// //             maxSum = Math.max(maxSum, (prefixSum - val + M) % M);
// //         }
        
        
// //         sortedPrefixSums.add(prefixSum);
// //     }
    
// //     return maxSum;
// // }
// // }

// // // // 156 Maximum distance between same elements
// // {
// // function maxDistance(arr) {
// //     let map = {};
// //     let maxDist = -1;

// //     // Traverse the array
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] in map) {
           
// //             maxDist = Math.max(maxDist, i - map[arr[i]]);
// //         } else {
            
// //             map[arr[i]] = i;
// //         }
// //     }

// //     return maxDist;
// // }
// // }
// // // // 157 Minimum sum partition
// // {
// // function minPartition(arr) {
// //     let totalSum = arr.reduce((sum, num) => sum + num, 0);
// //     let n = arr.length;
// //     let dp = new Array(Math.floor(totalSum / 2) + 1).fill(false);
// //     dp[0] = true;

    
// //     for (let num of arr) {
// //         for (let i = Math.floor(totalSum / 2); i >= num; i--) {
// //             dp[i] = dp[i] || dp[i - num];
// //         }
// //     }

    
// //     let S = 0;
// //     for (let i = Math.floor(totalSum / 2); i >= 0; i--) {
// //         if (dp[i]) {
// //             S = i;
// //             break;
// //         }
// //     }

// //     return totalSum - 2 * S;   
// // }
// // }
// // // // 158 Count good triplets
// // {
// // class FenwickTree {
// //     constructor(n) {
// //         this.tree = new Array(n + 1).fill(0);
// //     }

// //     update(index, value) {
// //         while (index < this.tree.length) {
// //             this.tree[index] += value;
// //             index += index & -index;
// //         }
// //     }

// //     query(index) {
// //         let sum = 0;
// //         while (index > 0) {
// //             sum += this.tree[index];
// //             index -= index & -index;
// //         }
// //         return sum;
// //     }
// // }

// // function countGoodTriplets(arr) {
// //     const n = arr.length;
// //     const maxVal = Math.max(...arr) + 1;
    
// //     let fenwickLeft = new FenwickTree(maxVal);
// //     let fenwickRight = new FenwickTree(maxVal);

    
// //     for (let num of arr) {
// //         fenwickRight.update(num, 1);
// //     }

// //     let tripletCount = 0;

   
// //     for (let j = 0; j < n; j++) {
// //         let num = arr[j];
        
        
// //         fenwickRight.update(num, -1);

        
// //         let leftCount = fenwickLeft.query(num - 1);

       
// //         let rightCount = fenwickRight.query(maxVal - 1) - fenwickRight.query(num);

        
// //         tripletCount += leftCount * rightCount;

        
// //         fenwickLeft.update(num, 1);
// //     }

// //     return tripletCount;
// // }
// // }

// // // 153 Find the maximum and minimum element in an array
// // let data = [34,54,56,22,33,76]
// // let min = data[0]
// // let high = data[0]
// // for(i=0;i<data.length;i++){
// //     if(data[i]<min){
// //         min = data[i]
// //     }else if(data[i]>high){
// //         high = data[i]
// //     }
// // }
// // console.log(`smallest number is ${min} and biggest number is ${high}`)


// // let data = [34,54,56,22,33,76]
// // let min = data[0]
// // let max = data[0]
// // let i = 0

// // while(i<data.length){
// //     if(data[i]<min){
// //         min = data[i]
// //     }else if(data[i]>max){
// //         max = data[i]
// //     }
// //     i++
// // }
// // console.log(`smallest number is ${min} and biggest number is ${max}`)

// // // 154 Find the sum of elements in an array

// // let data = [3,45,54,22,33,54,56,65,67,76]
// // let totalSum = 0

// // for(i=0;i<data.length;i++){
// //     totalSum+= data[i]
// // }
// // console.log(`Total sum of array is ${totalSum}`)

// // let data = [3,45,54,22,33,54,56,65,67,76]
// // let totalSum = 0
// // let i = 0

// // while(i<data.length){
// //     totalSum+=data[i]
// //     i++
// // }
// // console.log(`Total sum of array is ${totalSum}`)

// // // 155 Find the largest element in an array

// // let data = [ 23,4345,54,56,65,33,45,65,67,77]
// // let largest = data[0]

// // for(i=0;i<data.length;i++){
// //     if(data[i]>largest){
// //         largest = data[i]
// //     }
// // }
// // console.log(largest)

// // // 156 Find the second largest element in an array

// // let data =  [23,43,45,54,65,67,76,45,32,34,54,56]
// // let largest = -Infinity
// // let secondLargest = -Infinity

// // for(i=0;i<data.length;i++){
// //     if(data[i]>largest){
// //         secondLargest = largest
// //         largest = data[i]
// //     } else if(data[i]>secondLargest&&data[i]!==largest){
// //         secondLargest = data[i]
// //     }
// // }

// // console.log(secondLargest)

// // // 157 Reverse an array

// // let data = [23,43,45,54,56,65,34]
// // let left = 0
// // let right = data.length-1


// // while(left<=right){
// //     let temp = data[left]
// //     data[left] = data[right]
// //     data[right] = temp
// //     left++
// //     right--
// // }
// // console.log(data)


// // // 158 Find the number of even and odd elements in an array

// // let data = [23,43,34,33,22,23,55,65,65,45,44,23,32]
// // let odd =0
// // let even = 0

// // for(i=0;i<data.length;i++){
// //     if(data[i]%2==0){
// //         even++
// //     } else{
// //         odd++
// //     }
// // }
// // console.log(`odd ${odd} even ${even}`)

// // // 159 Check if a given array is sorted

// // let data = [2,3,4,5,6,77,2]
// // let isSorted = false

// // for(i=0;i<data.length;i++){
// //     if(data[i]>data[i+1]){
// //         isSorted = false
// //         break
// //     }else{
// //         isSorted = true
// //     }
// // }
// // console.log(isSorted)

// // // 160 Find the duplicate element in an array

// // let data = [23, 23, 44, 45, 56, 45, 65, 65, 55, 34, 44];
// // let duplicate = [];

// // for (let i = 0; i < data.length; i++) {
// //     for (let j = i + 1; j < data.length; j++) {
// //         if (data[i] === data[j]) {
// //             // Check if it's already added
// //             let alreadyExists = false;
// //             for (let k = 0; k < duplicate.length; k++) {
// //                 if (duplicate[k] === data[i]) {
// //                     alreadyExists = true;
// //                     break;
// //                 }
// //             }
// //             if (!alreadyExists) {
// //                 duplicate[duplicate.length] = data[i];
// //             }
// //         }
// //     }
// // }

// // console.log("Duplicate elements:", duplicate);

// // // 161 Find the intersection of two arrays

// // let data = [23,323,44,54,56,6,55]
// // let data2 = [33,44,54,6,55,23]
// // let intersection = []

// // for(i=0;i<data.length;i++){
// //     for(j=0;j<data2.length;j++){
// //         if(data[i]==data2[j]){
// //             let duplicate  = false
// //             for(k=0;k<intersection.length;k++){
// //                 if(intersection[k]==data[i])
// //                     duplicate = true
// //                 break
// //             }
// //             if(!duplicate){
// //                 intersection[intersection.length] = data[i]
// //             }
            
// //         }
// //     }
// // }
// // console.log(intersection)

// // let data = [23, 323, 44, 54, 56, 6, 55];
// // let data2 = [33, 44, 54, 6, 55, 23];

// // let map = {};
// // let intersection = [];

// // for (let i = 0; i < data.length; i++) {
// //     map[data[i]] = true;
// // }

// // for (let j = 0; j < data2.length; j++) {
// //     if (map[data2[j]]) {
// //         intersection[intersection.length] = data2[j];
// //         map[data2[j]] = false; // to avoid duplicates
// //     }
// // }

// // console.log("Intersection using object:", intersection);

// // // 162 Count the frequency of each element in an array

// // let data = [1, 2, 2, 3, 1, 4, 2];
// // let frequency = {};

// // for (let i = 0; i < data.length; i++) {
// //     let item = data[i];
// //     if (frequency[item] !== undefined) {
// //         frequency[item] = frequency[item] + 1;
// //     } else {
// //         frequency[item] = 1;
// //     }
// // }

// // console.log("Frequency count:", frequency);


// // // 162 Move all zeroes to the end of the array

// // let data = [23,0,320,40,0,0,0,30,2,0,34,0]
// // let data2 = []
// // let zero = 0
// // for(i=0;i<data.length;i++){
// //     if(data[i]!==0){
// //         data2[data2.length] = data[i]
// //     }
// //     if(data[i]==0){
// //         zero++
// //     }
// // }
// // for(j=0;j<zero;j++){
// //     data2[data2.length] = 0
// // }
// // console.log(data2)

// // // 163 Find the missing number in an array of 1 to n 

// // let data = [1, 2, 4, 5,7];
// // let n = 7;
// // let actualSum = 0;
// // let expectedSum = n * (n + 1) / 2;

// // for(i=0;i<data.length;i++){
// //     actualSum+=data[i]
// // }
// // let missingNumber = expectedSum - actualSum
// // console.log(missingNumber)

// // // 164 Find the majority element in an array

// // let data = [2, 2, 1, 2, 3, 2, 2];
// // let freq = {};
// // let majorityCount = Math.floor(data.length / 2);

// // for (let i = 0; i < data.length; i++) {
// //     let item = data[i];

// //     if (freq[item] === undefined) {
// //         freq[item] = 1;
// //     } else {
// //         freq[item] += 1;
// //     }

// //     // Check if this item becomes majority
// //     if (freq[item] > majorityCount) {
// //         console.log("Majority element is:", item);
// //         break;
// //     }
// // }

// // // 165 Find the unique number in an array where every other element appears twice

// // let data = [2, 3, 5, 4, 5, 3, 4];
// // let unique = 0;

// // for (let i = 0; i < data.length; i++) {
// //     unique = unique ^ data[i];
// // }

// // console.log("Unique element is:", unique);


// // // 166 Check if a given array is a palindrome

// // let data = [23,34,45,56,45,34,23]
// // let left = 0;
// // let right = data.length - 1;
// // let isPalindrome = true;

// // while (left < right) {
// //     if (data[left] !== data[right]) {
// //         isPalindrome = false;
// //         break;
// //     }
// //     left++;
// //     right--;
// // }
// // console.log(isPalindrome)


// // // 167 Rotate an array by k positions

// // let data = [23,43,45,55,65,67,54,45,65,33]
// // let data2 = []
// // let k = 5

// // for(i=k;i<data.length;i++){
// //     data2[data2.length] = data[i]
// // }
// // for(j=0;j<k;j++){
// //     data2[data2.length] = data[j]
// // }
// // console.log(data2)

// // let data = [23, 43, 45, 55, 65, 67, 54, 45, 65, 33];
// // let k = 5;
// // let n = data.length;

// // // Step 0: Normalize k (if k > n)
// // k = k % n;

// // // Step 1: Reverse first k elements
// // let start = 0;
// // let end = k - 1;
// // while (start < end) {
// //     let temp = data[start];
// //     data[start] = data[end];
// //     data[end] = temp;
// //     start++;
// //     end--;
// // }

// // // Step 2: Reverse remaining elements
// // start = k;
// // end = n - 1;
// // while (start < end) {
// //     let temp = data[start];
// //     data[start] = data[end];
// //     data[end] = temp;
// //     start++;
// //     end--;
// // }

// // // Step 3: Reverse the whole array
// // start = 0;
// // end = n - 1;
// // while (start < end) {
// //     let temp = data[start];
// //     data[start] = data[end];
// //     data[end] = temp;
// //     start++;
// //     end--;
// // }

// // console.log(data);

// // // 168 Find the first repeating element in an array

// // let data = [2, 3, 4, 5, 4, 3, 2];
// // let frequency = {};

// // // Step 1: Count frequency of each element
// // for (let i = 0; i < data.length; i++) {
// //     let temp = data[i];
// //     if (frequency[temp] === undefined) {
// //         frequency[temp] = 1;
// //     } else {
// //         frequency[temp] += 1;
// //     }
// // }

// // // Step 2: Traverse again to find first repeating element
// // let firstRepeating = -1;

// // for (let i = 0; i < data.length; i++) {
// //     if (frequency[data[i]] > 1) {
// //         firstRepeating = data[i];
// //         break;
// //     }
// // }

// // console.log(firstRepeating);

// // // 169 Check if two arrays are equal

// // let data = [2, 3, 4, 5, 6];
// // let data2 = [2, 3, 4, 5, 6, 3];
// // let bothSame = true;

// // // Step 1: Length check outside loop
// // if (data.length !== data2.length) {
// //     bothSame = false;
// // } else {
// //     // Step 2: Compare each element
// //     for (let i = 0; i < data.length; i++) {
// //         if (data[i] !== data2[i]) {
// //             bothSame = false;
// //             break;
// //         }
// //     }
// // }

// // console.log(bothSame);


// // // 170 Find the largest contiguous sum subarray

// // let data = [2, 3, 4, 4, 3];

// // let max_sum = data[0];
// // let current_sum = data[0];

// // for (let i = 1; i < data.length; i++) {
// //     current_sum = Math.max(data[i], current_sum + data[i]);
// //     max_sum = Math.max(max_sum, current_sum);
// // }

// // console.log(max_sum); // Output: 16


// // // 171 Count the occurrences of a given element in an array

// // let data = [23,32,34,55,43,55,43,34,55]
// // let target = 55
// // let count = 0

// // for(i=0;i<data.length;i++){
// //     if(data[i]==target){
// //         count++
// //     }
// // }
// // console.log(count)

// // // 172 Find the longest increasing subsequence

// // let data = [10, 9, 2, 5, 3, 7, 101, 18];
// // let n = data.length;

// // // Step 1: Initialize dp array
// // let dp = [];

// // for (let i = 0; i < n; i++) {
// //     dp[i] = 1;  // Every element is an LIS of at least 1 by itself
// // }

// // // Step 2: Build the dp array
// // for (let i = 1; i < n; i++) {
// //     for (let j = 0; j < i; j++) {
// //         if (data[i] > data[j]) {
// //             dp[i] = Math.max(dp[i], dp[j] + 1);
// //         }
// //     }
// // }
// // // Step 3: Get the maximum value from dp[]
// // let longest = 0;
// // for (let i = 0; i < n; i++) {
// //     if (dp[i] > longest) {
// //         longest = dp[i];
// //     }
// // }

// // console.log("Length of Longest Increasing Subsequence:", longest);

// // // 173 Find the sum of all elements divisible by a number

// // let data = [22,12,3,9,24,26,27,33,35]
// // let k = 3
// // let sum = 0
// // for(i=0;i<data.length;i++){
// //     if(data[i]%k==0){
// //         sum+=data[i]
// //     }
// // }
// // console.log(sum)

// // // 178 Merge two sorted arrays

// // let data = [2, 33, 4, 3, 54, 56, 66, 54];
// // let data2 = [32, 34, 54, 55, 65, 67, 77];

// // // Step 1: Merge both arrays
// // for (let i = 0; i < data.length; i++) {
// //     data2[data2.length] = data[i];
// // }

// // // Step 2: Sort using bubble sort
// // for (let j = 0; j < data2.length - 1; j++) {
// //     for (let k = 0; k < data2.length - 1 - j; k++) {
// //         if (data2[k] > data2[k + 1]) {
// //             let temp = data2[k];
// //             data2[k] = data2[k + 1];
// //             data2[k + 1] = temp;
// //         }
// //     }
// // }

// // console.log(data2);

// // // 179 Find the product of all elements in an array except the current element

// // let arr = [2, 3, 4, 5];
// // let n = arr.length
// // let prefix = new Array(n)
// // let suffix = new Array(n)
// // let result = new Array(n)

// // prefix[0] = 1
// // for(i=1;i<n;i++){
// //     prefix[i] = prefix[i-1]*arr[i-1]
    
// // }
// // suffix[n-1] = 1
// // for(i=n-2;i>=0;i--){
// //     suffix[i] = suffix[i+1]*arr[i+1]
// // }
// // for (let i = 0; i < n; i++) {
// //     result[i] = prefix[i] * suffix[i];
// //   }
// //   console.log(arr)

// // // 180 Find the missing number from 1 to n-1 in an array

// // let arr = [1,3,4,5,6]
// // let n = arr.length+1
// // let expectedSum = (n * (n + 1)) / 2;
// // let actualSqSum = 0
// // let missingNumber
// // for(i=0;i<arr.length;i++){
// //     actualSqSum+=arr[i]
// // }
// // missingNumber = expectedSum-actualSqSum
// // console.log(missingNumber)

// // let arr2 = [1, 2, 4, 5];
// // let n = arr2.length+1
// // let missing
// // let xoxfull = 0

// // for(i=1;i<=n;i++){
// //     xoxfull^=i
// // }
// // let xoxArray = 0
// // for(i=0;i<arr2.length;i++){
// //     xoxArray^=arr2[i]
// // }
// // missing = xoxfull^xoxArray
// // console.log(missing)

// // // 181 Move negative elements to the end of the array

// // let data = [23, 3, -33, -22, 23, 43, -4, 22, -4, -23, -5];
// // let left = 0;
// // let right = data.length - 1;

// // while (left < right) {
// //     if (data[left] < 0 && data[right] > 0) {
// //         // Swap
// //         let temp = data[left];
// //         data[left] = data[right];
// //         data[right] = temp;
// //         left++;
// //         right--;
// //     } else {
// //         if (data[left] > 0) {
// //             left++;
// //         }
// //         if (data[right] < 0) {
// //             right--;
// //         }
// //     }
// // }

// // console.log(data);


// // // 182 Find the longest subarray with a given sum

// // function longestSubarrayWithSum(arr, target) {
// //     let map = new Map(); // { prefixSum : index }
// //     let sum = 0;
// //     let maxLength = 0;

// //     for (let i = 0; i < arr.length; i++) {
// //         sum += arr[i];

// //         if (sum === target) {
// //             maxLength = i + 1;
// //         }

// //         if (map.has(sum - target)) {
// //             let prevIndex = map.get(sum - target);
// //             maxLength = Math.max(maxLength, i - prevIndex);
// //         }

// //         if (!map.has(sum)) {
// //             map.set(sum, i);
// //         }
// //     }

// //     return maxLength;
// // }

// // // Example usage:
// // let arr = [1, 2, 3, 1, 1, 1, 1, 3, 4];
// // let target = 6;
// // console.log(longestSubarrayWithSum(arr, target)); 
// // // Output: 5


// // // 183 Find common elements in three sorted arrays

// // let arr1 = [1, 5, 10, 20, 40, 80];
// // let arr2 = [6, 7, 20, 80, 100];
// // let arr3 = [3, 4, 15, 20, 30, 70, 80, 120];
// // let result = []
// // let i = 0 , k= 0, j=0

// // while(i<arr1.length&&j<arr2.length&&k<arr3.length){
// //     if(arr1[i]===arr2[j]&&arr2[j]===arr3[k]){
// //         result.push(arr1[i])
// //         i++
// //         j++
// //         k++
// //     }else if(arr1[i]<arr2[j]){
// //         i++
// //     }else if(arr2[j]<arr3[k]){
// //         j++
// //     }else{
// //         k++
// //     }
// // }
// // console.log(result)

// // // 184 Find the pair with the sum closest to zero

// // function closestToZeroPair(arr) {
// //     arr.sort((a, b) => a - b); // Ascending sort

// //     let left = 0;
// //     let right = arr.length - 1;
// //     let minSum = Infinity;
// //     let pair = [0, 0];

// //     while (left < right) {
// //         let sum = arr[left] + arr[right];

// //         if (Math.abs(sum) < Math.abs(minSum)) {
// //             minSum = sum;
// //             pair = [arr[left], arr[right]];
// //         }

// //         if (sum < 0) {
// //             left++;
// //         } else {
// //             right--;
// //         }
// //     }

// //     return pair;
// // }

// // // Example usage:
// // let arr = [1, 60, -10, 70, -80, 85];
// // console.log(closestToZeroPair(arr));
// // // Output: [-80, 85]

// // // 185 Find the largest subarray with sum less than a given value

// // let arr = [1, 2, 3, 4, 5];
// // let k = 11

// // let start = 0
// // let end = 0
// // let sum = 0
// // let maxLength = 0

// // while(end<arr.length){
// //     sum+=arr[end]
// //     while(sum>=k&&start<=end){
// //         sum-=arr[start]
// //         start++
// //     }
// //     if(sum<k){
// //         maxLength = Math.max(maxLength,end-start+1)
// //     }
// //     end++
// // }
// // console.log(maxLength)


// // // 186 Check if an array is a subsequence of another array

// // let arr1 = [1, 3, 5,6];
// // let arr2 = [1, 2, 3, 4, 5, 6];

// // let i = 0
// // let j =0

// // while(i<arr1.length&&j<arr2.length){
// //     if(arr1[i]==arr2[j]){
// //         i++
// //     }
// //     j++
// // }
// // if(i==arr1.length){
// //     console.log(true)
// // }else{
// //     console.log(false)
// // }

// // // 187 Find the subarray with the maximum sum

// // let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// // let maxsum = arr[0]
// // let current_sum = arr[0]

// // for(i=1;i<arr.length;i++){
// //     if(current_sum<0){
// //         current_sum = arr[i]
// //     }else{
// //         current_sum+=arr[i]
// //     }
// //     if(current_sum>maxsum){
// //         maxsum = current_sum
// //     }
// // }
// // console.log(maxsum)


// // // 188 Find the number of triplets whose sum equals a given number

// // let arr = [1, 2, 3, 4, 5, 6];
// // let target = 10;

// // arr.sort((a, b) => a - b); // Sorting zaroori hai

// // let count = 0;

// // for (let i = 0; i < arr.length - 2; i++) {
// //     let left = i + 1;
// //     let right = arr.length - 1;

// //     while (left < right) {
// //         let sum = arr[i] + arr[left] + arr[right];

// //         if (sum === target) {
// //             count++;
// //             left++;
// //             right--;
// //         } else if (sum < target) {
// //             left++;
// //         } else {
// //             right--;
// //         }
// //     }
// // }

// // console.log(count);


// // // 189 Find the maximum difference between two elements in an array

// // let arr = [2, 3, 10, 6, 4, 8, 1];
// // let minElement = arr[0]
// // let maxDiff = arr[1] - arr[0]

// // for(i=1;i<arr.length;i++){
// //     if(arr[i]-minElement>maxDiff){
// //         maxDiff = arr[i] - minElement
// //     }else if(arr[i]<minElement){
// //         minElement = arr[i]
// //     }
// // }
// // console.log(maxDiff)


// // // 190 Find the element that appears only once in an array

// // let arr = [2, 3, 5, 4, 5, 3, 4];

// // let result = 0;

// // for (let i = 0; i < arr.length; i++) {
// //     result = result ^ arr[i];
// // }

// // console.log(result);


// // // 191 Sort an array using Bubble Sort

// // let arr = [64, 34, 25, 12, 22, 11, 90];

// // for (let i = 0; i < arr.length - 1; i++) {
// //     for (let j = 0; j < arr.length - i - 1; j++) {
// //         if (arr[j] > arr[j + 1]) {
// //             let temp = arr[j];
// //             arr[j] = arr[j + 1];
// //             arr[j + 1] = temp;
// //         }
// //     }
// // }

// // console.log(arr);

// // // 192 Sort an array using Insertion Sort

// // let arr = [12, 11, 13, 5, 6];

// // for (let i = 1; i < arr.length; i++) {
// //     let current = arr[i];
// //     let j = i - 1;

// //     while (j >= 0 && arr[j] > current) {
// //         arr[j + 1] = arr[j];
// //         j = j - 1;
// //     }
// //     arr[j + 1] = current;
// // }

// // console.log(arr);


// // // 193 Sort an array using Selection Sort

// // let arr = [12, 11, 13, 5, 6];

// // for (let i = 1; i < arr.length; i++) {
// //     let current = arr[i];
// //     let j = i - 1;

// //     while (j >= 0 && arr[j] > current) {
// //         arr[j + 1] = arr[j];
// //         j = j - 1;
// //     }
// //     arr[j + 1] = current;
// // }

// // console.log(arr);

// // // 194 Find the kth largest element in an array

// // let arr = [3, 2, 1, 5, 6, 4];
// // let k = 2;

// // // Step 1: Sort array in descending order
// // for (let i = 0; i < arr.length - 1; i++) {
// //     for (let j = 0; j < arr.length - i - 1; j++) {
// //         if (arr[j] < arr[j + 1]) {
// //             let temp = arr[j];
// //             arr[j] = arr[j + 1];
// //             arr[j + 1] = temp;
// //         }
// //     }
// // }

// // // Step 2: kth largest element
// // let kthLargest = arr[k - 1];

// // console.log(kthLargest);

// // // 195 Find the kth smallest element in an array

// // let arr = [3, 2, 1, 5, 6, 4];
// // let k = 2;

// // // Step 1: Sort array in ascending order
// // for (let i = 0; i < arr.length - 1; i++) {
// //     for (let j = 0; j < arr.length - i - 1; j++) {
// //         if (arr[j] > arr[j + 1]) {
// //             let temp = arr[j];
// //             arr[j] = arr[j + 1];
// //             arr[j + 1] = temp;
// //         }
// //     }
// // }

// // // Step 2: kth smallest element
// // let kthSmallest = arr[k - 1];

// // console.log(kthSmallest);

// // // 196 Count subarrays with sum equal to a given number

// // let arr = [1, 1, 1];
// // let target = 2;
// // let count = 0;

// // for (let i = 0; i < arr.length; i++) {
// //     let sum = 0;
// //     for (let j = i; j < arr.length; j++) {
// //         sum += arr[j];
// //         if (sum === target) {
// //             count++;
// //         }
// //     }
// // }

// // console.log(count);


// // // 197 Find the largest sum contiguous subarray using Kadane’s Algorithm

// // let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// // let maxSum = arr[0];
// // let currentSum = arr[0];

// // for (let i = 1; i < arr.length; i++) {
// //     if (currentSum < 0) {
// //         currentSum = arr[i];
// //     } else {
// //         currentSum = currentSum + arr[i];
// //     }
    
// //     if (currentSum > maxSum) {
// //         maxSum = currentSum;
// //     }
// // }

// // console.log(maxSum);


// // // 199 Find the smallest subarray with sum greater than a given value

// // let arr = [1, 4, 45, 6, 0, 19];
// // let targetSum = 51;

// // let minLength = arr.length + 1; // Sabse bada length initially
// // let start = 0;
// // let end = 0;
// // let currentSum = 0;

// // while (end < arr.length) {
// //     // Expand window
// //     while (currentSum <= targetSum && end < arr.length) {
// //         currentSum += arr[end];
// //         end++;
// //     }
    
// //     // Contract window from start
// //     while (currentSum > targetSum && start < arr.length) {
// //         if (end - start < minLength) {
// //             minLength = end - start;
// //         }
// //         currentSum -= arr[start];
// //         start++;
// //     }
// // }

// // if (minLength == arr.length + 1) {
// //     console.log(0); // If no such subarray
// // } else {
// //     console.log(minLength);
// // }


// // // 200 Check if an array is a magic array
// {
// let arr = [1, 1, 2];

// let originalSum = 0;
// let squareSum = 0;

// for (let i = 0; i < arr.length; i++) {
//     originalSum = originalSum + arr[i];
//     squareSum = squareSum + (arr[i] * arr[i]);
// }

// if (originalSum === squareSum) {
//     console.log("Magic Array");
// } else {
//     console.log("Not a Magic Array");
// }
// }

// // // 201 Find the longest subarray with distinct elements
// {
// let arr = [1, 2, 3, 2, 4, 5];

// let maxLength = 0;
// let start = 0;
// let map = {};  

// for (let end = 0; end < arr.length; end++) {
//     if (map[arr[end]] !== undefined && map[arr[end]] >= start) {
//         start = map[arr[end]] + 1;
//     }
    
//     map[arr[end]] = end;
    
//     let currentLength = end - start + 1;
//     if (currentLength > maxLength) {
//         maxLength = currentLength;
//     }
// }

// console.log(maxLength);
// }
// // // 202 Find the first non-repeating element in an array
// {
// let arr = [9, 4, 9, 6, 7, 4];

// let freq = {};


// for (let i = 0; i < arr.length; i++) {
//     if (freq[arr[i]] === undefined) {
//         freq[arr[i]] = 1;
//     } else {
//         freq[arr[i]] = freq[arr[i]] + 1;
//     }
// }


// let found = false;
// for (let i = 0; i < arr.length; i++) {
//     if (freq[arr[i]] === 1) {
//         console.log(arr[i]);
//         found = true;
//         break;
//     }
// }

// if (found === false) {
//     console.log("No non-repeating element");
// }
// }
// // // 203 Find the number of subarrays with exactly k distinct elements
// {
// let arr = [1, 2, 1, 2, 3];
// let k = 2;


// let atMostK = function(arr, k) {
//     let freq = {};
//     let left = 0;
//     let count = 0;
    
//     for (let right = 0; right < arr.length; right++) {
//         if (freq[arr[right]] === undefined) {
//             freq[arr[right]] = 0;
//         }
//         freq[arr[right]]++;

//         while (Object.keys(freq).length > k) {
//             freq[arr[left]]--;
//             if (freq[arr[left]] === 0) {
//                 delete freq[arr[left]];
//             }
//             left++;
//         }
        
//         count = count + (right - left + 1);
//     }
    
//     return count;
// };

// let result = atMostK(arr, k) - atMostK(arr, k - 1);
// console.log(result);
// }

// // // 204 Find if there is a pair in an array with sum equal to a given number
// {
// let arr = [8, 4, 1, 6];
// let target = 10;

// let map = {};
// let found = false;

// for (let i = 0; i < arr.length; i++) {
//     let remaining = target - arr[i];

//     if (map[remaining] !== undefined) {
//         console.log(arr[i], remaining);
//         found = true;
//         break;
//     }
    
//     map[arr[i]] = 1;
// }

// if (found === false) {
//     console.log("No pair found");
// }
// }
// // // 205 Find the longest consecutive subsequence
// {
// let arr = [100, 4, 200, 1, 3, 2];


// let map = {};

// for (let i = 0; i < arr.length; i++) {
//     map[arr[i]] = 1;
// }

// let longest = 0;


// for (let i = 0; i < arr.length; i++) {
//     if (map[arr[i] - 1] === undefined) {
        
//         let currentNum = arr[i];
//         let currentStreak = 1;

//         while (map[currentNum + 1] !== undefined) {
//             currentNum++;
//             currentStreak++;
//         }

//         if (currentStreak > longest) {
//             longest = currentStreak;
//         }
//     }
// }

// console.log(longest);
// }

// // // 206 Find the longest subarray with at most k distinct elements
// {
// let arr = [1, 2, 1, 2, 3];
// let k = 2;

// let map = {};
// let left = 0;
// let maxLength = 0;

// for (let right = 0; right < arr.length; right++) {
    
//     if (map[arr[right]] === undefined) {
//         map[arr[right]] = 0;
//     }
//     map[arr[right]]++;

    
//     while (Object.keys(map).length > k) {
//         map[arr[left]]--;
//         if (map[arr[left]] === 0) {
//             delete map[arr[left]];
//         }
//         left++;
//     }

    
//     maxLength = Math.max(maxLength, right - left + 1);
// }

// console.log(maxLength);

// }
// // // 207 Find the sum of all the elements in an array except the first and last
// {
// let arr = [1, 2, 3, 4, 5];


// if (arr.length <= 2) {
//     console.log(0);
// } else {
//     let sum = 0;
   
//     for (let i = 1; i < arr.length - 1; i++) {
//         sum += arr[i];
//     }
//     console.log(sum);
// }
// }
// // // 208 Find the maximum sum subarray with size k
// {
// let arr = [2, 1, 5, 1, 3, 2];
// let k = 3;

// let maxSum = 0;
// let windowSum = 0;


// for (let i = 0; i < k; i++) {
//     windowSum += arr[i];
// }


// maxSum = windowSum;


// for (let i = k; i < arr.length; i++) {
    
//     windowSum = windowSum - arr[i - k] + arr[i];
//     maxSum = Math.max(maxSum, windowSum);
// }

// console.log(maxSum);
// }

// // // 209 Count all triplets in an array whose sum is divisible by 3
// {
// let arr = [3, 1, 4, 6, 5];
// let count = 0;


// for (let i = 0; i < arr.length - 2; i++) {
//     for (let j = i + 1; j < arr.length - 1; j++) {
//         for (let k = j + 1; k < arr.length; k++) {
//             if ((arr[i] + arr[j] + arr[k]) % 3 === 0) {
//                 count++;
//             }
//         }
//     }
// }

// console.log(count);
// }
// // // 210 Find the number of even subarrays
// {
// let arr = [1, 2, 3, 4];
// let count = 0;


// for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//         sum += arr[j];
        
//         if (sum % 2 === 0) {
//             count++;
//         }
//     }
// }

// console.log(count);
// }
// // // 211 Find the first missing positive integer in an array
// {
// let arr = [3, 4, -1, 1];


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= 0 || arr[i] > arr.length) {
//         arr[i] = arr.length + 1;
//     }
// }


// for (let i = 0; i < arr.length; i++) {
//     let absVal = Math.abs(arr[i]);
//     if (absVal <= arr.length && arr[absVal - 1] > 0) {
//         arr[absVal - 1] = -arr[absVal - 1];
//     }
// }


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         console.log(i + 1);
//         break;
//     }
// }


// console.log(arr.length + 1);
// }
// // // 212 Find the number of even subarrays
// {
// let arr = [1, 2, 3, 4];
// let count = 0;


// for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//         sum += arr[j];
//         if (sum % 2 === 0) {
//             count++;
//         }
//     }
// }

// console.log(count);
// }
// // // 213 Find the first missing positive integer in an array
// {
// let arr = [3, 4, -1, 1];


// let n = arr.length;


// for (let missing = 1; ; missing++) {
//     let found = false;
//     for (let i = 0; i < n; i++) {
//         if (arr[i] === missing) {
//             found = true;
//             break;
//         }
//     }
//     if (found === false) {
//         console.log(missing);
//         break;
//     }
// }
// }
// // // 214 Find the number of ways to partition an array into two equal subsets
// {
// let arr = [1, 5, 11, 5];
// let total = 0;
// for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
// }

// if (total % 2 !== 0) {
//     console.log(0);
// }

// let target = total / 2;

// let n = arr.length;
// let dp = [];

// for (let i = 0; i <= n; i++) {
//     dp.push([]);
//     for (let j = 0; j <= target; j++) {
//         if (j === 0) {
//             dp[i][j] = 1;
//         } else if (i === 0) {
//             dp[i][j] = 0;
//         } else {
//             dp[i][j] = 0;
//         }
//     }
// }

// for (let i = 1; i <= n; i++) {
//     for (let j = 0; j <= target; j++) {
//         if (arr[i - 1] <= j) {
//             dp[i][j] = dp[i - 1][j] + dp[i - 1][j - arr[i - 1]];
//         } else {
//             dp[i][j] = dp[i - 1][j];
//         }
//     }
// }


// console.log(dp[n][target] / 2); 
// }

// // // 215 Find the element that occurs more than n/2 times
// {
// let arr = [2, 2, 1, 2, 2];
// let n = arr.length;
// let majorityCount = Math.floor(n / 2);

// for (let i = 0; i < n; i++) {
//     let count = 0;
//     for (let j = 0; j < n; j++) {
//         if (arr[i] === arr[j]) {
//             count++;
//         }
//     }
//     if (count > majorityCount) {
//         console.log(arr[i]);
//         break;
//     }
// }
// }

// // // 216 Find all pairs in an array whose sum is a given number
// {
// let arr = [1, 5, 7, -1, 5];
// let target = 6;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] + arr[j] === target) {
//             console.log(arr[i], arr[j]);
//         }
//     }
// }
// }
// // // 217 Find the sum of elements at odd indices in an array
// {
// let arr = [5, 10, 15, 20, 25, 30];
// let sum = 0;

// for (let i = 1; i < arr.length; i += 2) {
//     sum += arr[i];
// }

// console.log(sum);

// }
// // // 218 Check if an array has a given subset sum
// {
// let arr = [3, 34, 4, 12, 5, 2];
// let target = 9;
// let n = arr.length;

// let dp = [];

// for (let i = 0; i <= n; i++) {
//     dp.push([]);
//     for (let j = 0; j <= target; j++) {
//         if (j === 0) {
//             dp[i][j] = true;
//         } else if (i === 0) {
//             dp[i][j] = false;
//         } else {
//             dp[i][j] = false;
//         }
//     }
// }

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= target; j++) {
//         if (arr[i - 1] <= j) {
//             dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
//         } else {
//             dp[i][j] = dp[i - 1][j];
//         }
//     }
// }

// console.log(dp[n][target]);

// }
// // // 219 Find all subsets of an array
// {

// let arr = [1, 2, 3];
// let n = arr.length;

// for (let i = 0; i < (1 << n); i++) {
//     let subset = [];
    
    
//     for (let j = 0; j < n; j++) {
//         if ((i & (1 << j)) !== 0) {
//             subset.push(arr[j]);
//         }
//     }

//     console.log(subset);
// }
// }

// // // 220 Find all permutations of an array
// {
// let arr = [1, 2, 3];
// let n = arr.length;

// function permute(arr, left, right) {
//     if (left === right) {
//         console.log(arr);
//     } else {
//         for (let i = left; i <= right; i++) {
            
//             let temp = arr[left];
//             arr[left] = arr[i];
//             arr[i] = temp;

//             permute(arr, left + 1, right);

//             temp = arr[left];
//             arr[left] = arr[i];
//             arr[i] = temp;
//         }
//     }
// }

// permute(arr, 0, n - 1);

// }
// // // 221 Find all subsets of an array with sum equal to a given number
// {
// let arr = [1, 2, 3, 4, 5];
// let n = arr.length;
// let target = 5;

// function findSubsets(index, currentSum, subset) {
//     if (index === n) {
//         if (currentSum === target) {
//             console.log(subset);
//         }
//         return;
//     }

//     subset.push(arr[index]);
//     findSubsets(index + 1, currentSum + arr[index], subset);
//     su2bset.pop();
//     findSubsets(index + 1, currentSum, subset);
// }

// findSubsets(0, 0, []);

// }
// // // 222 Find the missing number in an array of 1 to n-2
// {
// let arr = [1, 2, 4, 5, 6]; 
// let n = arr.length + 1;  

// let totalSum = (n * (n + 1)) / 2;
// let arraySum = 0;

// for (let i = 0; i < arr.length; i++) {
//     arraySum += arr[i];
// }

// let missing = totalSum - arraySum;
// console.log(missing);
// }

// // // 223 Rotate an array by reversing segments
// {
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let n = arr.length;
// let k = 3;  
// k = k % n;

// let left = 0;
// let right = n - 1;
// while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;
// }

// left = 0;
// right = k - 1;
// while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;
// }

// left = k;
// right = n - 1;
// while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;
// }

// console.log(arr);
// }

// // // 224 Find the sum of first n prime numbers
// {
// let n = 5; 
// let count = 0;
// let num = 2;
// let sum = 0;

// while (count < n) {
//     let isPrime = true;
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         sum += num;
//         count++;
//     }
//     num++;
// }

// console.log(sum);
// }
// // // 225 Find the number of subarrays with sum equal to a prime number
// {
// let arr = [1, 2, 3, 4, 5];
// let n = arr.length;
// let count = 0;

// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//         sum += arr[j];
//         if (isPrime(sum)) {
//             count++;
//         }
//     }
// }

// console.log(count);
// }
// // // 226 Find the sum of the first n Fibonacci numbers
// {
// let n = 5;  
// let a = 0;
// let b = 1;
// let sum = 0;

// for (let i = 0; i < n; i++) {
//     sum += a;
//     let temp = a + b;
//     a = b;
//     b = temp;
// }

// console.log(sum);
// }
// // // 227 Find the longest subarray with sum equal to zero
// {
// let arr = [15, -2, 2, -8, 1, 7, 10, 23];
// let n = arr.length;
// let maxLen = 0;
// let sum = 0;
// let map = {};

// for (let i = 0; i < n; i++) {
//     sum += arr[i];
    
//     if (sum === 0) {
//         maxLen = i + 1;
//     }
    
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
// // // 228 Find if an array contains duplicate elements
// {
// let arr = [1, 2, 3, 4, 5, 1];
// let n = arr.length;
// let flag = 0;
// let map = {};

// for (let i = 0; i < n; i++) {
//     if (map[arr[i]] !== undefined) {
//         flag = 1;
//         break;
//     } else {
//         map[arr[i]] = 1;
//     }
// }

// if (flag === 1) {
//     console.log("Duplicate Found");
// } else {
//     console.log("No Duplicate");
// }



// }
// // 229 Find the minimum number of swaps to sort an array
// {
// let arr = [4, 3, 2, 1];
// let n = arr.length;
// let ans = 0;

// let arrPos = [];
// for (let i = 0; i < n; i++) {
//     arrPos.push({ val: arr[i], idx: i });
// }

// arrPos.sort(function(a, b) {
//     return a.val - b.val;
// });


// let visited = new Array(n).fill(false);

// for (let i = 0; i < n; i++) {
//     if (visited[i] === true || arrPos[i].idx === i) {
//         continue;
//     }

//     let cycle_size = 0;
//     let j = i;
//     while (visited[j] === false) {
//         visited[j] = true;
//         j = arrPos[j].idx;
//         cycle_size++;
//     }

//     if (cycle_size > 0) {
//         ans += (cycle_size - 1);
//     }
// }

// console.log(ans);
// }

// // // 230 Find the longest subarray with a sum of zero
// {
// let arr = [9, -3, 3, -1, 6, -5];
// let n = arr.length;
// let maxLen = 0;
// let sum = 0;
// let map = {};

// for (let i = 0; i < n; i++) {
//     sum += arr[i];

//     if (sum === 0) {
//         maxLen = i + 1;
//     }

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
// // // 231 Find the pair in an array whose difference is minimum
// {
// let arr = [3, 8, 15, 1, 5];
// arr.sort((a, b) => a - b);

// let min_diff = Infinity;
// let min_pair = [];

// for (let i = 0; i < arr.length - 1; i++) {
//   let diff = arr[i + 1] - arr[i];
  
//   if (diff < min_diff) {
//     min_diff = diff;
//     min_pair = [arr[i], arr[i + 1]];
//   }
// }

// console.log(min_pair); 
// }

// // // 232 Find the number of subarrays whose sum is divisible by k
// {
// let arr = [4, 5, 0, 2, 1];
// let k = 5;
// let prefix_sum = 0;
// let count = 0;
// let mod_map = new Map();
// mod_map.set(0, 1);  

// for (let i = 0; i < arr.length; i++) {
//   prefix_sum += arr[i];
  
//   let mod = ((prefix_sum % k) + k) % k;
//   if (mod_map.has(mod)) {
//     count += mod_map.get(mod);  
//   }
//   mod_map.set(mod, (mod_map.get(mod) || 0) + 1);
// }
// console.log(count);  
// }

// // // 233 Count the number of ways to get a sum using elements of an array
// {
// let arr = [1, 2, 3]; 
// let target = 4;     

// let dp = new Array(target + 1).fill(0);


// dp[0] = 1;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = arr[i]; j <= target; j++) {
//     dp[j] += dp[j - arr[i]];  
//   }
// }

// console.log(dp[target]);  

// }
// // // 234 Find the number of prime numbers in an array
// {

// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// let primeCount = 0;
// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];
  
//   if (num <= 1) {
//     continue; 
//   }

//   let isPrime = true;

//   for (let j = 2; j * j <= num; j++) {
//     if (num % j === 0) {
//       isPrime = false;
//       break;
//     }
//   }

  
//   if (isPrime) {
//     primeCount++;
//   }
// }


// console.log(primeCount);  

// // // 235  Find the number of elements greater than a given number
// {

// let arr = [1, 2, 2, 2, 3, 4, 5];


// let n = arr.length;
// let candidate = arr[Math.floor(n / 2)]; 


// let count = 0;
// for (let i = 0; i < n; i++) {
//   if (arr[i] === candidate) {
//     count++;
//   }
// }


// if (count > Math.floor(n / 2)) {
//   console.log(candidate);  
// } else {
//   console.log("No Majority Element");
// }
// }
// // // 236 Find the number of elements greater than a given number
// {
// let arr = [5, 10, 15, 20, 25, 30];
// let num = 15;  


// let count = 0;


// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > num) {
//     count++;
//   }
// }

// // Step 4: Output the result
// console.log(count); 
// }
// // // 236 Find the largest number in an array formed by the concatenation of array elements
// {
// function largestNumber(nums) {
  
//     const strNums = nums.map(num => num.toString());

   
//     strNums.sort((a, b) => (b + a) - (a + b));

 
//     if (strNums[0] === '0') return '0';
//     return strNums.join('');
// }


// const nums = [3, 30, 34, 5, 9];
// console.log(largestNumber(nums)); 
// }
// // // 237 Find the largest sum of the sum of all the digits of elements
// {
// function largestDigitSum(nums) {
    
//     function sumOfDigits(num) {
//         let sum = 0;
//         while (num > 0) {
//             sum += num % 10; 
//             num = Math.floor(num / 10); 
//         }
//         return sum;
//     }

//     let maxSum = 0;
//     for (let num of nums) {
//         maxSum = Math.max(maxSum, sumOfDigits(num));
//     }

//     return maxSum;
// }

// const nums = [123, 456, 789, 987];
// console.log(largestDigitSum(nums)); 
// }

// // // 238 Find the largest difference between two elements such that the larger element appears later
// {
// let nums = [2, 3, 10, 6, 4, 8, 1];
// let minElement = nums[0]; 
// let maxDiff = -Infinity;

// for (let i = 1; i < nums.length; i++) {
    
//     let diff = nums[i] - minElement;

    
//     if (diff > maxDiff) {
//         maxDiff = diff;
//     }

    
//     if (nums[i] < minElement) {
//         minElement = nums[i];
//     }
// }

// console.log(maxDiff); 
// }
// // // 239 Find the pair whose sum is closest to a given value
// {
// let nums = [1, 3, 4, 7, 10, 12];
// let target = 15;

// nums.sort((a, b) => a - b); 

// let left = 0;
// let right = nums.length - 1;
// let closestSum = Infinity; 
// let closestPair = [];

// while (left < right) {
//     let sum = nums[left] + nums[right];

    
//     if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
//         closestSum = sum;
//         closestPair = [nums[left], nums[right]];
//     }

//     if (sum < target) {
//         left++;
//     } 
//     else {
//         right--;
//     }
// }

// console.log("Closest pair:", closestPair); 

// }
// // // 240 Find the sum of all divisors of an element in an array
// {
// let nums = [12, 15, 28];  
// let sumOfDivisors = [];

// for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     let sum = 0;
    
    
//     for (let j = 1; j * j <= num; j++) {
//         if (num % j === 0) {
//             sum += j; // Add divisor
//             if (j !== num / j) {
//                 sum += num / j; 
//             }
//         }
//     }
    
//     sumOfDivisors.push(sum);
// }

// console.log(sumOfDivisors); 
// }

// // // 241 Find the first and last occurrence of an element
// {
// let nums = [5, 3, 7, 8, 3, 9, 3];
// let target = 3;

// let firstOccurrence = -1;
// let lastOccurrence = -1;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//         if (firstOccurrence === -1) {
//             firstOccurrence = i; 
//         }
//         lastOccurrence = i; 
//     }
// }

// console.log("First Occurrence:", firstOccurrence); 
// console.log("Last Occurrence:", lastOccurrence);  
// }

// // // 242 Find the sum of squares of the elements
// {
// let nums = [2, 3, 4, 5];
// let sumOfSquares = 0;

// for (let i = 0; i < nums.length; i++) {
//     sumOfSquares += nums[i] * nums[i];  
// }

// console.log(sumOfSquares);

// }
// // // 243 Find the number of ways to sum to n using array elements
// {
// let nums = [1, 2, 3]; 
// let n = 4;
// let dp = new Array(n + 1).fill(0); 

// dp[0] = 1; 

// for (let i = 0; i < nums.length; i++) {
//     for (let j = nums[i]; j <= n; j++) {
//         dp[j] += dp[j - nums[i]]; 
//     }
// }

// console.log(dp[n]); 
// }
// // // 245 Find the smallest positive number that is not present in the array
// {
// let nums = [3, 4, -1, 1];
// let smallestMissing = 1; 

// nums.sort((a, b) => a - b); 

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === smallestMissing) {
//         smallestMissing++;
//     }
// }

// console.log(smallestMissing); 

// }
// // // 246 Find if there exists a subsequence that adds up to a given number
// {
// let nums = [3, 34, 4, 12, 5, 2]; 
// let target = 9; 
// let dp = new Array(target + 1).fill(false); 

// dp[0] = true; 

// for (let i = 0; i < nums.length; i++) {
//     for (let j = target; j >= nums[i]; j--) {
//         if (dp[j - nums[i]]) {
//             dp[j] = true; 
//         }
//     }
// }

// console.log(dp[target]); 
// }

// // // 247 Find the number of ways to get a sum using elements of an array
// {
// let nums = [1, 2, 3]; 
// let target = 4; 
// let dp = new Array(target + 1).fill(0); 

// dp[0] = 1; 

// for (let i = 0; i < nums.length; i++) {
//     for (let j = nums[i]; j <= target; j++) {
//         dp[j] += dp[j - nums[i]]; 
//     }
// }

// console.log(dp[target]); 
// }

// // // 248 Find the median of two sorted arrays
// {
// let nums1 = [1, 3];
// let nums2 = [2]; 


// if (nums1.length > nums2.length) {
//     let temp = nums1;
//     nums1 = nums2;
//     nums2 = temp;
// }

// let m = nums1.length;
// let n = nums2.length;
// let left = 0, right = m;

// while (left <= right) {
//     let partition1 = Math.floor((left + right) / 2);
//     let partition2 = Math.floor((m + n + 1) / 2) - partition1; 

//     let maxLeft1 = (partition1 === 0) ? -Infinity : nums1[partition1 - 1];
//     let minRight1 = (partition1 === m) ? Infinity : nums1[partition1];

//     let maxLeft2 = (partition2 === 0) ? -Infinity : nums2[partition2 - 1];
//     let minRight2 = (partition2 === n) ? Infinity : nums2[partition2];

//     // Check if partitions are correct
//     if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
//         // Even length combined
//         if ((m + n) % 2 === 0) {
//             return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
//         } else {
//             return Math.max(maxLeft1, maxLeft2);
//         }
//     } else if (maxLeft1 > minRight2) {
//         right = partition1 - 1;
//     } else {
//         left = partition1 + 1;
//     }
// }
// }

// // // 249 Find the difference between the largest and smallest elements in an array

// let nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// let maxElement = nums[0];  
// let minElement = nums[0]; 

// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > maxElement) {
//         maxElement = nums[i];  
//     }
//     if (nums[i] < minElement) {
//         minElement = nums[i];  
//     }
// }

// let difference = maxElement - minElement;  
// console.log(difference); 


// // // 250 Check if an array contains a palindrome subsequence
// {
// let nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// let maxElement = nums[0]; 
// let minElement = nums[0];  

// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > maxElement) {
//         maxElement = nums[i];  
//     }
//     if (nums[i] < minElement) {
//         minElement = nums[i];  
//     }
// }

// let difference = maxElement - minElement; 
// console.log(difference); 
// }

// // // 252 Find the number of subarrays with sum greater than a given value
// {
// let nums = [1, 2, 3, 4, 5]; 
// let givenValue = 7; 

// let prefixSum = [0]; 
// let count = 0;

// for (let i = 0; i < nums.length; i++) {
//     prefixSum.push(prefixSum[i] + nums[i]); 
// }

// let sortedPrefixSums = [0]; 
// for (let i = 1; i <= nums.length; i++) {
//     for (let j = i - 1; j >= 0; j--) {
//         if (prefixSum[i] - prefixSum[j] > givenValue) {
//             count++; 
//         }
//     }
// }

// console.log(count); 
// }
// // // 253 Find the sum of digits of an element at even positions
// {
// let nums = [123, 456, 789, 101, 112]; 
// let sumOfDigits = 0; 

// for (let i = 0; i < nums.length; i++) {
//     if (i % 2 === 0) { 
//         let num = nums[i];
//         let digitSum = 0;
//         while (num > 0) {
//             digitSum += num % 10; 
//             num = Math.floor(num / 10); 
//         }
        
//         sumOfDigits += digitSum; 
//     }
// }

// console.log(sumOfDigits); 
// }

// // // 255 Find the number of subsets with sum equal to n
// {
// let nums = [1, 2, 3]; 
// let n = 4; 
// let dp = new Array(n + 1).fill(0); 

// dp[0] = 1; 

// for (let i = 0; i < nums.length; i++) {

//     for (let j = n; j >= nums[i]; j--) {
//         dp[j] += dp[j - nums[i]]; 
//     }
// }

// console.log(dp[n]); 
// }

// // // 256 Find the sum of elements divisible by n
// {
// let nums = [10, 20, 30, 40, 50]; 
// let n = 10; 
// let sum = 0;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % n === 0) { 
//         sum += nums[i]; 
//     }
// }

// console.log(sum); 

// }
// // // 257 Find the number of elements less than or equal to a given number
// {
// let nums = [10, 20, 30, 40, 50]; 
// let givenNumber = 30; 
// let count = 0;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] <= givenNumber) { 
//         count++; 
//     }
// }

// console.log(count);

// }
// // // 258 Find the maximum element in the intersection of two arrays
// {
// let nums1 = [1, 2, 3, 4, 5]; 
// let nums2 = [3, 4, 5, 6, 7];

// let set1 = new Set(nums1); 
// let set2 = new Set(nums2); 

// let intersection = [...set1].filter(x => set2.has(x)); 

// let maxElement = Math.max(...intersection); 
// console.log(maxElement); 
// }
// // // 259 Find the count of even elements in an array
// {
// let nums = [1, 2, 3, 4, 5, 6]; 
// let count = 0;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) { 
//         count++; 
//     }
// }

// console.log(count); 
// }
// // // 260 Find the count of odd elements in an array
// {
// let nums = [1, 2, 3, 4, 5, 6]; 
// let count = 0;

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 !== 0) { 
//         count++; 
//     }
// }

// console.log(count); 
// }

// // // 261 Find the largest sum contiguous subarray using Kadane’s Algorithm
// {
// let nums = [1, -2, 3, 4, -1, 2, 1, -5, 4]; 
// let currentMax = nums[0]; 
// let globalMax = nums[0]; 

// for (let i = 1; i < nums.length; i++) {
//     currentMax = Math.max(nums[i], currentMax + nums[i]); 
//     globalMax = Math.max(globalMax, currentMax); 
// }

// console.log(globalMax);
// }
// // // 262 Find the largest number that can be formed by array elements
// {
// let nums = [3, 30, 34, 5, 9]; 


// let strNums = nums.map(num => num.toString());

// strNums.sort((a, b) => (b + a) - (a + b));

// let largestNum = strNums.join('');

// console.log(largestNum); 

// }
// // // 263 Count the number of subarrays with sum equal to a given number
// {
// let nums = [1, 2, 3, 3];
// let target = 6; 
// let count = 0;
// let prefixSum = 0;
// let prefixSumCount = new Map();

// prefixSumCount.set(0, 1); 

// for (let i = 0; i < nums.length; i++) {
//     prefixSum += nums[i]; 
    
//     if (prefixSumCount.has(prefixSum - target)) { 
//         count += prefixSumCount.get(prefixSum - target); 
//     }

//     prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1); 
// }

// console.log(count); 

// }
// // // 264 Count the number of odd indexed elements in an array
// {
// let nums = [1, 2, 3, 4, 5, 6]; 
// let count = 0;

// for (let i = 1; i < nums.length; i += 2) { 
//     count++; 
// }

// console.log(count); 
// }
// // // 265 Count the number of even indexed elements in an array
// {
// let nums = [1, 2, 3, 4, 5, 6]; 
// let count = 0;

// for (let i = 0; i < nums.length; i += 2) { 
//     count++; 
// }

// console.log(count); 
// }
// // // 266 Find the smallest subarray with sum equal to a given number
// {
// let nums = [1, 4, 20, 3, 10, 5]; 
// let target = 33; 
// let minLength = Infinity;
// let currentSum = 0;
// let start = 0;

// for (let end = 0; end < nums.length; end++) {
//     currentSum += nums[end]; 

//     while (currentSum >= target) {
//         minLength = Math.min(minLength, end - start + 1); 
//         currentSum -= nums[start]; 
//         start++;
//     }
// }

// if (minLength === Infinity) {
//     console.log(-1); 
// } else {
//     console.log(minLength); 
// }

// }
// // // 267 Count how many subarrays have sum equal to a given number

// {
// let nums = [1, 2, 3, 3]; 
// let target = 6; 
// let count = 0;
// let prefixSum = 0;
// let prefixSumCount = new Map();

// prefixSumCount.set(0, 1); 
// for (let i = 0; i < nums.length; i++) {
//     prefixSum += nums[i];
    
//     if (prefixSumCount.has(prefixSum - target)) { 
//         count += prefixSumCount.get(prefixSum - target); 
//     }

//     prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1); 
// }

// console.log(count); 
// }

// // // 268 Find the sum of elements in an array using recursion
// {
// let nums = [1, 2, 3, 4, 5]; 
// let sum = 0;
// let i = 0;

// while (i < nums.length) {
//     sum += nums[i]; 
//     i++; 
// }

// console.log(sum); 
// }
// // // 269 Find the count of elements that are greater than their next element
// {
// let nums = [1, 3, 2, 4, 5, 3];
// let count = 0;

// for (let i = 0; i < nums.length - 1; i++) { 
//     if (nums[i] > nums[i + 1]) { 
//         count++; 
//     }
// }

// console.log(count); 
// }

// // // 270 Find the count of elements that are smaller than their next element
// {
// let nums = [1, 3, 2, 4, 5, 3]; 
// let count = 0;

// for (let i = 0; i < nums.length - 1; i++) { 
//     if (nums[i] < nums[i + 1]) {
//         count++; 
//     }
// }

// console.log(count); 

// }
// // // 271 Find the number of elements divisible by 5 in an array
// {
// let nums = [5, 10, 7, 20, 8, 25, 3]; 
// let count = 0;

// for (let i = 0; i < nums.length; i++) { 
//     if (nums[i] % 5 === 0) { 
//         count++; 
//     }
// }

// console.log(count); 
// }
// // // 272 Find the sum of all elements greater than a given number
// {
// let nums = [1, 3, 7, 2, 5, 10]; 
// let givenNumber = 5; 
// let sum = 0;

// for (let i = 0; i < nums.length; i++) { 
//     if (nums[i] > givenNumber) { 
//         sum += nums[i]; 
//     }
// }

// console.log(sum); 
// }

// // // 273 Find the smallest element in an array
// {
// let nums = [5, 3, 8, 2, 7]; 
// let smallest = nums[0]; 

// for (let i = 1; i < nums.length; i++) { 
//     if (nums[i] < smallest) { 
//         smallest = nums[i]; 
//     }
// }

// console.log(smallest);
// }

// // // 274 Find the smallest element in an array
// {
// let arr = [5, 2, 8, 6, 1, 9];
// let n = arr.length;
// let smallest = arr[0];

// for (let i = 1; i < n; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i];
//     }
// }

// console.log("Smallest element is:", smallest);
// }

// // // 275 Find the sum of elements divisible by 3 in an array
// {
// let arr = [5, 9, 12, 7, 3, 8];
// let n = arr.length;


// let sum = 0;


// for (let i = 0; i < n; i++) {
//     if (arr[i] % 3 === 0) {
//         sum = sum + arr[i]; 
//     }
// }

// console.log("Sum of elements divisible by 3 is:", sum);
// }

// // // 276 Find the largest subarray with sum divisible by a number
// {
// let arr = [2, 7, 6, 1, 4, 5];
// let n = arr.length;
// let k = 3;


// let modArr = new Array(n);
// let prefixSum = 0;
// let maxLength = 0;


// let remainderIndex = {};

// for (let i = 0; i < n; i++) {
//     prefixSum = prefixSum + arr[i];
    
//     let mod = ((prefixSum % k) + k) % k;

//     if (mod === 0) {
//         maxLength = i + 1; 
//     }

//     if (remainderIndex[mod] !== undefined) {
//         let len = i - remainderIndex[mod];
//         if (len > maxLength) {
//             maxLength = len;
//         }
//     } else {
//         remainderIndex[mod] = i;
//     }
// }

// console.log("Length of largest subarray with sum divisible by", k, "is:", maxLength);
// }
// // // 277 Find the sum of elements divisible by a given number
// {
// let arr = [5, 9, 12, 7, 3, 8];
// let n = arr.length;
// let k = 3; 

// let sum = 0;

// for (let i = 0; i < n; i++) {
//     if (arr[i] % k === 0) {
//         sum = sum + arr[i];
//     }
// }

// console.log("Sum of elements divisible by", k, "is:", sum);

// }
// // // 278 Find the number of odd elements divisible by a number
// {

// let N = 100;  
// let n = 5;  
// let count = 0;


// for (let i = 1; i <= N; i++) {
    
//     if (i % 2 !== 0) {
    
//         if (i % n === 0) {
//             count++;
//         }
//     }
// }
// console.log(count);
// }

// // // 279 Find the number of even elements divisible by a number
// {

// let N = 100;  
// let n = 4;   

// let count = 0;
// for (let i = 2; i <= N; i += 2) { 
    
//     if (i % n === 0) {
//         count++;
//     }
// }
// console.log(count);
// }
// // // 280 Find the sum of the smallest and largest elements in an array
// {
 
// let arr = [12, 5, 9, 3, 18, 7];
// let smallest = arr[0];
// let largest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i];
//     }
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }
// let sum = smallest + largest;
// console.log(sum);
// }

// // // 281 Find the sum of elements divisible by both 3 and 5
// {
// let arr = [15, 30, 10, 5, 45, 25, 60, 3, 9, 18]; 
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
//         sum += arr[i];
//     }
// }
// console.log(sum);
// }

// // // 283 Find the maximum number that can be formed by array digits
// {
// let arr = [5, 3, 8, 1, 9, 6];  
// let arrStr = arr.map(String);
// arrStr.sort((a, b) => b - a);
// let maxNumber = arrStr.join('');

// console.log(maxNumber);
// }

// // // 284 Find the count of all possible subsequences of an array
// {

// let arr = [1, 2, 3];  
// let subsequencesCount = Math.pow(2, arr.length);


// console.log(subsequencesCount);
// }

// // // 285 Find the largest element in an array greater than a given number
// {
// let arr = [12, 5, 9, 3, 18, 7];  
// let givenNumber = 6;  

// let largestGreater = -Infinity; 

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > givenNumber && arr[i] > largestGreater) {
//         largestGreater = arr[i];
//     }
// }
// if (largestGreater === -Infinity) {
//     console.log("No element is greater than the given number");
// } else {
//     console.log(largestGreater);
// }
// }

// // // 286 Find the number of subarrays whose sum is greater than a given number
// {
// let arr = [1, 2, 3, 4, 5];  
// let givenNumber = 7;  
// let count = 0;

// for (let start = 0; start < arr.length; start++) {
//     let sum = 0;  
//     for (let end = start; end < arr.length; end++) {
//         sum += arr[end];  
//         if (sum > givenNumber) {
//             count++;
//         }
//     }
// }

// console.log(count);

// }
// // // 287 Find the sum of elements at odd indices
// {
// let arr = [10, 20, 30, 40, 50, 60];  

// let sum = 0;

// for (let i = 1; i < arr.length; i += 2) {
//     sum += arr[i]; 
// }
// console.log(sum);
// }
// // // 288 Find the sum of elements at even indices
// {
// let arr = [10, 20, 30, 40, 50, 60];
// let sum = 0;


// for (let i = 0; i < arr.length; i += 2) {
//     sum += arr[i];  
// }
// console.log(sum);
// }

// // // 289 Find the count of unique elements in an array
// {

// let arr = [1, 2, 2, 3, 4, 4, 5];  

// let frequency = {};

// for (let i = 0; i < arr.length; i++) {
//     if (frequency[arr[i]]) {
//         frequency[arr[i]]++;
//     } else {
//         frequency[arr[i]] = 1;
//     }
// }


// let uniqueCount = 0;
// for (let key in frequency) {
//     if (frequency[key] === 1) {
//         uniqueCount++;
//     }
// }
// console.log(uniqueCount);

// }
// // // // 290 Find the longest subarray whose sum is greater than a given number
// {
// let arr = [1, 2, 3, 4, 5, 6, 7];  
// let givenNumber = 10;  

// let maxLength = 0;  
// let currentSum = 0; 
// let start = 0;  

// for (let end = 0; end < arr.length; end++) {
//     currentSum += arr[end];  
//     while (currentSum > givenNumber) {
        
//         maxLength = Math.max(maxLength, end - start + 1);
//         currentSum -= arr[start];
//         start++;
//     }
// }

// console.log(maxLength);
// }
// // // 291 Find the smallest number in an array
// {

// let arr = [12, 5, 9, 3, 18, 7];  
// let smallest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i];  
//     }
// }

// console.log(smallest);
// }

// // // 292 Find the difference between maximum and minimum elements
// {

// let arr = [12, 5, 9, 3, 18, 7]; 
// let max = arr[0];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];  
//     }
//     if (arr[i] < min) {
//         min = arr[i];  
//     }
// }
// let difference = max - min;

// console.log(difference);
// }
// // // 293 Find the maximum number of contiguous subarrays
// {

// let arr = [1, 2, 3, 4, 5];  
// let n = arr.length;
// let totalSubarrays = (n * (n + 1)) / 2;

// console.log(totalSubarrays);
// }

// // // 294 Find the number of prime numbers in an array
// {
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];  

// let primeCount = 0;

// for (let i = 0; i < arr.length; i++) {
//     let isPrime = true; 
//     if (arr[i] <= 1) {
//         isPrime = false;  
//     } else {
//         for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
//             if (arr[i] % j === 0) {
//                 isPrime = false;  
//                 break;
//             }
//         }
//     }

    
//     if (isPrime) {
//         primeCount++;
//     }
// }
// console.log(primeCount);

// }
// // // 295 Find the number of subarrays whose sum is a prime number
// {
// let arr = [1, 2, 3, 4]; 

// let isPrime = (num) => {
//     if (num <= 1) return false; 
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;  
//     }
//     return true;
// }
// let primeSubarraysCount = 0;
// for (let start = 0; start < arr.length; start++) {
//     let sum = 0; 
//     for (let end = start; end < arr.length; end++) {
//         sum += arr[end];
//         if (isPrime(sum)) {
//             primeSubarraysCount++;  
//         }
//     }
// }

// console.log(primeSubarraysCount);
// }

// // // 296 Find the number of subarrays where each element is a multiple of 2
// {

// let arr = [2, 4, 6, 3, 8, 10];  

// let count = 0;

// for (let start = 0; start < arr.length; start++) {
//     let valid = true; 

//     for (let end = start; end < arr.length; end++) {
//         if (arr[end] % 2 !== 0) {
//             valid = false; 
//             break;
//         }
//         if (valid) {
//             count++;
//         }
//     }
// }

// console.log(count);
// }

// // // 297 Find the sum of the first n Fibonacci numbers in an array
// {

// let n = 5;  
// let fib = [0, 1];  
// for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2]; 
// }
// let sum = 0;
// for (let i = 0; i < n; i++) {
//     sum += fib[i];  
// }
// console.log(sum);
// }

// // // 298 Find the number of ways to get a sum of n using array elements
// {

// let arr = [1, 2, 3];  
// let n = 4; 

// let dp = new Array(n + 1).fill(0); 
// dp[0] = 1; 

// for (let i = 0; i < arr.length; i++) {
//     for (let j = arr[i]; j <= n; j++) {
//         dp[j] += dp[j - arr[i]];  
//     }
// }
// console.log(dp[n]);
// }

//  // // 299 Find the number of ways to get a sum of n using array elements
// {
// let arr = [1, 2, 3];  
// let n = 4;  
// let dp = new Array(n + 1).fill(0);  
// dp[0] = 1; 
// for (let i = 0; i < arr.length; i++) {
//     for (let j = arr[i]; j <= n; j++) {
//         dp[j] += dp[j - arr[i]]; 
//     }
// }

// console.log(dp[n]);
// }

// // // 300 Find the sum of the first n even numbers
// {
// let n = 5;  
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     sum += 2 * i; 
// }


// console.log(sum);}

// // // 301 Find the number of even elements divisible by 5
// {

// let arr = [10, 15, 20, 25, 30, 40]; 

// let count = 0;


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && arr[i] % 5 === 0) {
//         count++; 
//     }
// }

// console.log(count);
// }

// // // 302 Find the number of odd elements divisible by 5
// {
// let arr = [5, 10, 15, 20, 25, 30, 35];
// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0 && arr[i] % 5 === 0) {
//         count++;  
//     }
// }
// console.log(count);
// }
// // // 303 Find the sum of elements that are divisible by 3 and 5
// {
// let arr = [15, 30, 45, 10, 60, 75]; 
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
//         sum += arr[i]; 
//     }
// }
// console.log(sum);
// }
// // // 304 Find the sum of all prime numbers in an array
// {
// let arr = [2, 3, 4, 5, 10, 13, 17, 18, 19];  
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     let isPrime = true;
//     if (num < 2) {
//         isPrime = false;
//     } else {
//         for (let j = 2; j <= Math.sqrt(num); j++) {
//             if (num % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }
//     if (isPrime) {
//         sum += num;
//     }
// }
// console.log(sum);
// }
// // // 305 Find the sum of all prime numbers in an array
// {
// let arr = [1, -2, 3, 4, 0, -1, 6]; 
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum += arr[i];
//     }
// }
// console.log(sum);
// }
// // // 306 Find the sum of all elements greater than 0 in an array
// {
// let arr = [1, -2, 3, 4, 0, -1, 6]; 
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum += arr[i];
//     }
// }
// console.log(sum);
// }
// // // 307 Find the sum of elements smaller than a given number
// {
// let arr = [5, 10, 15, 20, 25, 30];  
// let num = 15; 
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < num) {
//         sum += arr[i];
//     }
// }
// console.log(sum);
// }
// // // 308 Find the maximum sum of subarray whose sum is greater than a given number
// {

// let arr = [1, 2, 3, 4, 5]; 
// let num = 8;
// let maxSum = -Infinity;  
// let currentSum = 0;
// for (let i = 0; i < arr.length; i++) {
//     currentSum = 0;  
//     for (let j = i; j < arr.length; j++) {
//         currentSum += arr[j]; 
//         if (currentSum > num) {
//             maxSum = Math.max(maxSum, currentSum);
//         }
//     }
// }
// console.log(maxSum);
// }
// // // 309 Find the sum of elements at odd indices in an array
// {
// let arr = [1, 2, 3, 4, 5, 6, 7];  
// let sum = 0;
// for (let i = 1; i < arr.length; i += 2) {  
//     sum += arr[i];
// }
// console.log(sum);
// }
// // // 310 Find the largest element in an array
// {
// let arr = [1, 2, 3, 4, 5, 6, 7]; 
// let largest = arr[0];  
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];  
//     }
// }
// console.log(largest);
// }

// // // 311 Find the number of elements divisible by a given number
// {
// let arr = [10, 20, 30, 25, 35, 40];  
// let num = 5; 
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % num === 0) {
//         count++;  
//     }
// }
// console.log(count);
// }

// // // 312 Count the number of even and odd elements in an array
// {
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]; 
// let evenCount = 0;
// let oddCount = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) { 
//         evenCount++;
//     } else { 
//         oddCount++;
//     }
// }
// console.log("Even elements count:", evenCount);
// console.log("Odd elements count:", oddCount);
// }
//  // 313 Find the subarray with the largest sum (Kadane's Algorithm)
// {
//  let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let n = arr.length;

// let maxSum = arr[0];
// let currentSum = arr[0];

// for (let i = 1; i < n; i++) {
//     if (currentSum < 0) {
//         currentSum = arr[i];
//     } else {
//         currentSum = currentSum + arr[i];
//     }

//     if (currentSum > maxSum) {
//         maxSum = currentSum;
//     }
// }

// console.log("Maximum Subarray Sum:", maxSum);
// }

// // // 314 Find the longest increasing subsequence (LIS)
// {
// let arr = [10, 9, 2, 5, 3, 7, 101, 18];
// let n = arr.length;

// let dp = [];
// for (let i = 0; i < n; i++) {
//     dp[i] = 1;
// }

// for (let i = 1; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//         if (arr[i] > arr[j]) {
//             if (dp[j] + 1 > dp[i]) {
//                 dp[i] = dp[j] + 1;
//             }
//         }
//     }
// }
// let maxLen = dp[0];
// for (let i = 1; i < n; i++) {
//     if (dp[i] > maxLen) {
//         maxLen = dp[i];
//     }
// }

// console.log("Length of Longest Increasing Subsequence:", maxLen);
// }
// // // 315 Find the kth largest element in an unsorted array
// {
// let arr = [3, 2, 1, 5, 6, 4];
// let k = 2;
// let n = arr.length;
// for (let i = 0; i < k; i++) {
//     let maxIndex = i;
    
//     for (let j = i + 1; j < n; j++) {
//         if (arr[j] > arr[maxIndex]) {
//             maxIndex = j;
//         }
//     }
//     let temp = arr[i];
//     arr[i] = arr[maxIndex];
//     arr[maxIndex] = temp;
// }

// console.log(k + "th largest element is:", arr[k - 1]);
// }

// // // 316 Find the kth smallest element in an unsorted array
// {
// let arr = [7, 10, 4, 3, 20, 15];
// let k = 3;
// let n = arr.length;
// for (let i = 0; i < k; i++) {
//     let minIndex = i;
    
//     for (let j = i + 1; j < n; j++) {
//         if (arr[j] < arr[minIndex]) {
//             minIndex = j;
//         }
//     }
//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
// }

// console.log(k + "th smallest element is:", arr[k - 1]);

// }
// // // 317 Find the majority element in an array (using Boyer-Moore)
// {
// let arr = [2, 2, 1, 1, 1, 2, 2];
// let n = arr.length;

// let candidate = arr[0];
// let count = 1;

// for (let i = 1; i < n; i++) {
//     if (arr[i] === candidate) {
//         count++;
//     } else {
//         count--;
//         if (count === 0) {
//             candidate = arr[i];
//             count = 1;
//         }
//     }
// }
// let freq = 0;
// for (let i = 0; i < n; i++) {
//     if (arr[i] === candidate) {
//         freq++;
//     }
// }

// if (freq > n / 2) {
//     console.log("Majority element is:", candidate);
// } else {
//     console.log("No majority element exists");
// }
// }
// // // 318 Find the two elements whose sum is closest to zero
// {
// let arr = [1, 60, -10, 70, -80, 85];
// let n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < n; j++) {
//         if (arr[j] < arr[minIndex]) {
//             minIndex = j;
//         }
//     }
//     let temp = arr[i];
//     arr[i] = arr[minIndex];
//     arr[minIndex] = temp;
// }
// let left = 0;
// let right = n - 1;
// let minSum = arr[left] + arr[right];
// let minLeft = left;
// let minRight = right;

// while (left < right) {
//     let sum = arr[left] + arr[right];
    
//     if (Math.abs(sum) < Math.abs(minSum)) {
//         minSum = sum;
//         minLeft = left;
//         minRight = right;
//     }
    
//     if (sum < 0) {
//         left++;
//     } else {
//         right--;
//     }
// }

// console.log("Two elements whose sum is closest to zero are:", arr[minLeft], "and", arr[minRight]);
// }
// // // 319  Find the maximum product subarray
// {
// let arr = [2, 3, -2, 4];
// let n = arr.length;
// let maxProd = arr[0];
// let minProd = arr[0];
// let result = arr[0];

// for (let i = 1; i < n; i++) {

//     if (arr[i] < 0) {
//         let temp = maxProd;
//         maxProd = minProd;
//         minProd = temp;
//     }
    
//     maxProd = Math.max(arr[i], maxProd * arr[i]);
//     minProd = Math.min(arr[i], minProd * arr[i]);
//     result = Math.max(result, maxProd);
// }

// console.log("Maximum Product Subarray is:", result);

// }
// // // 320 Find the subarray with sum equal to a given number
// {
// let arr = [1, 4, 20, 3, 10, 5];
// let sum = 33;
// let n = arr.length;

// let currentSum = 0;
// let left = 0;

// for (let right = 0; right < n; right++) {
//     currentSum += arr[right];
//     while (currentSum > sum && left <= right) {
//         currentSum -= arr[left];
//         left++;
//     }
    
//     if (currentSum === sum) {
//         console.log("Subarray with the given sum is: [" + left + ", " + right + "]");
//         console.log("Subarray:", arr.slice(left, right + 1));
//         break;
//     }
// }

// if (currentSum !== sum) {
//     console.log("No subarray with the given sum found.");
// }
// }

// // // 321  Find the maximum product of two integers in an array
// {
// let arr = [1, 10, -5, 1, -100];
// let n = arr.length;

// let max1 = -Infinity;
// let max2 = -Infinity;
// let min1 = Infinity;
// let min2 = Infinity;

// for (let i = 0; i < n; i++) {
//     if (arr[i] > max1) {
//         max2 = max1;
//         max1 = arr[i];
//     } else if (arr[i] > max2) {
//         max2 = arr[i];
//     }
//     if (arr[i] < min1) {
//         min2 = min1;
//         min1 = arr[i];
//     } else if (arr[i] < min2) {
//         min2 = arr[i];
//     }
// }

// let maxProduct = Math.max(max1 * max2, min1 * min2);
// console.log("Maximum product of two integers in the array is:", maxProduct);
// }

// // // 322 Find the maximum difference between two elements such that the larger element appears after
// {
// let arr = [2, 3, 10, 6, 4, 8, 1];
// let n = arr.length;

// let minElement = arr[0];
// let maxDifference = 0;

// for (let i = 1; i < n; i++) {
//     if (arr[i] > minElement) {
//         maxDifference = Math.max(maxDifference, arr[i] - minElement);
//     } else {
//         minElement = arr[i];
//     }
// }

// console.log("Maximum difference between two elements is:", maxDifference);

// }
// // // 323 Find all triplets with a sum equal to zero

// {let arr = [-1, 0, 1, 2, -1, -4];
// let n = arr.length;
// let result = [];

// arr.sort((a, b) => a - b);

// for (let i = 0; i < n - 2; i++) {
//     if (i > 0 && arr[i] === arr[i - 1]) {
//         continue;
//     }
    
//     let left = i + 1;
//     let right = n - 1;
    
//     while (left < right) {
//         let sum = arr[i] + arr[left] + arr[right];
        
//         if (sum === 0) {
//             result.push([arr[i], arr[left], arr[right]]);
            
//             while (left < right && arr[left] === arr[left + 1]) {
//                 left++;
//             }
//             while (left < right && arr[right] === arr[right - 1]) {
//                 right--;
//             }
            
//             left++;
//             right--;
//         } else if (sum < 0) {
//             left++; 
//         } else {
//             right--; 
//         }
//     }
// }

// console.log("Triplets with sum equal to zero:", result);

// }// // 324 Find the largest sum subarray with size k
// {
// let arr = [2, 1, 5, 1, 3, 2];
// let k = 3; 
// let n = arr.length;

// let maxSum = 0;
// let windowSum = 0;

// for (let i = 0; i < k; i++) {
//     windowSum += arr[i];
// }
// maxSum = windowSum;
// for (let i = k; i < n; i++) {
//     windowSum += arr[i] - arr[i - k];
//     maxSum = Math.max(maxSum, windowSum); 
// }

// console.log("Largest sum of subarray with size", k, "is:", maxSum);
// }
// // //325 Find the number of subarrays with exactly k distinct elements
// {
// function countAtMostKDistinct(arr, k) {
//     let map = new Map();
//     let left = 0;
//     let count = 0;
    
//     for (let right = 0; right < arr.length; right++) {
//         map.set(arr[right], (map.get(arr[right]) || 0) + 1);
//         while (map.size > k) {
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

// function countSubarraysWithKDistinct(arr, k) {
//     return countAtMostKDistinct(arr, k) - countAtMostKDistinct(arr, k - 1);
// }

// let arr = [1, 2, 1, 2, 3];
// let k = 2;

// console.log("Number of subarrays with exactly", k, "distinct elements:", countSubarraysWithKDistinct(arr, k));
// }

// // // 326 Find the number of subarrays with sum equal to a given number
// {
// let arr = [1, 2, 3, 4, 1];
// let target = 5;

// let sumMap = new Map();
// let currentSum = 0;
// let count = 0;

// sumMap.set(0, 1);

// for (let i = 0; i < arr.length; i++) {
//     currentSum += arr[i];  
//     if (sumMap.has(currentSum - target)) {
//         count += sumMap.get(currentSum - target);
//     }
//     sumMap.set(currentSum, (sumMap.get(currentSum) || 0) + 1);
// }

// console.log("Number of subarrays with sum equal to", target, ":", count);
// }

// // // 327 Find the longest subarray with at most k distinct elements
// {
// let arr = [1, 2, 1, 2, 3];
// let k = 2;

// let map = new Map();
// let left = 0;
// let maxLength = 0;

// for (let right = 0; right < arr.length; right++) {
//     map.set(arr[right], (map.get(arr[right]) || 0) + 1);
//     while (map.size > k) {
//         map.set(arr[left], map.get(arr[left]) - 1);
//         if (map.get(arr[left]) === 0) {
//             map.delete(arr[left]);
//         }
//         left++;  
//     }
//     maxLength = Math.max(maxLength, right - left + 1);
// }

// console.log("Longest subarray with at most", k, "distinct elements:", maxLength);

// }
// // // 328 Find the number of inversions in an array
// {
// let arr = [2, 4, 1, 3, 5];
// let n = arr.length;
// let inversionCount = 0;

// for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {
//         if (arr[i] > arr[j]) {
//             inversionCount++;
//         }
//     }
// }

// console.log("Number of inversions:", inversionCount);
// }
// // // 330 Sort an array using Merge Sort
// {
// let arr = [5, 2, 9, 1, 5, 6];
// let n = arr.length;

// let temp = new Array(n);
// let left = 0;
// let right = n - 1;
// let stack = [];
// stack.push({ l: left, r: right, type: 'divide' });

// while (stack.length > 0) {
//     let top = stack.pop();
//     let l = top.l;
//     let r = top.r;
//     let type = top.type;

//     if (l >= r) {
//         continue;
//     }

//     let mid = Math.floor((l + r) / 2);

//     if (type === 'divide') {
//         stack.push({ l: l, r: r, type: 'merge' });  
//         stack.push({ l: mid + 1, r: r, type: 'divide' }); 
//         stack.push({ l: l, r: mid, type: 'divide' });     
//     } 
//     else if (type === 'merge') {
//         let i = l;
//         let j = mid + 1;
//         let k = l;

//         while (i <= mid && j <= r) {
//             if (arr[i] <= arr[j]) {
//                 temp[k++] = arr[i++];
//             } else {
//                 temp[k++] = arr[j++];
//             }
//         }

//         while (i <= mid) {
//             temp[k++] = arr[i++];
//         }

//         while (j <= r) {
//             temp[k++] = arr[j++];
//         }

//         for (let p = l; p <= r; p++) {
//             arr[p] = temp[p];
//         }
//     }
// }

// console.log("Sorted array:", arr);
// }

// // // 331 Sort an array using Quick Sort
// {
// let arr = [10, 7, 8, 9, 1, 5];
// let n = arr.length;

// let stack = [];
// stack.push({ low: 0, high: n - 1 });

// while (stack.length > 0) {
//     let top = stack.pop();
//     let low = top.low;
//     let high = top.high;

//     if (low >= high) {
//         continue;
//     }
//     let pivot = arr[high];
//     let i = low - 1;

//     for (let j = low; j <= high - 1; j++) {
//         if (arr[j] < pivot) {
//             i++;
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }

//     i++;
//     let temp = arr[i];
//     arr[i] = arr[high];
//     arr[high] = temp;

//     let p = i; 
//     stack.push({ low: p + 1, high: high });
//     stack.push({ low: low, high: p - 1 });
// }

// console.log("Sorted array:", arr);

// }
// // // 332 Find the longest subarray with sum zero
// {
// let arr = [15, -2, 2, -8, 1, 7, 10, 23];
// let n = arr.length;

// let map = new Map();  
// let sum = 0;
// let maxLength = 0;

// for (let i = 0; i < n; i++) {
//     sum += arr[i];

//     if (sum === 0) {
//         if (maxLength < i + 1) {
//             maxLength = i + 1;
//         }
//     }

//     if (map.has(sum)) {
//         let prevIndex = map.get(sum);
//         if (maxLength < i - prevIndex) {
//             maxLength = i - prevIndex;
//         }
//     } 
//     else {
//         map.set(sum, i);
//     }
// }

// console.log("Length of longest subarray with sum 0:", maxLength);

// }
// // // 333 Find the first missing positive integer
// {
// let arr = [3, 4, -1, 1];
// let n = arr.length;
// for (let i = 0; i < n; i++) {
//     while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
//         let correctIndex = arr[i] - 1;
        
//         let temp = arr[i];
//         arr[i] = arr[correctIndex];
//         arr[correctIndex] = temp;
//     }
// }
// let missing = n + 1;
// for (let i = 0; i < n; i++) {
//     if (arr[i] !== i + 1) {
//         missing = i + 1;
//         break;
//     }
// }

// console.log("First missing positive integer:", missing);
// }

// // // 334 Find the largest element smaller than or equal to a given number
// {
// let arr = [1, 3, 5, 7, 9];
// let n = arr.length;
// let target = 6;
// let answer = -1; 

// for (let i = 0; i < n; i++) {
//     if (arr[i] <= target) {
//         if (answer === -1 || arr[i] > answer) {
//             answer = arr[i];
//         }
//     }
// }

// console.log("Largest element smaller than or equal to", target, "is:", answer);
// }
// // // 335 Find all unique pairs that sum to a given number
// {
// let arr = [1, 5, 7, -1, 5];
// let n = arr.length;
// let target = 6;

// let map = new Map();
// let result = [];

// for (let i = 0; i < n; i++) {
//     let complement = target - arr[i];

//     if (map.has(complement)) {
//         result.push([complement, arr[i]]);
//     }

//     if (!map.has(arr[i])) {
//         map.set(arr[i], 1);
//     }
// }

// console.log("Unique pairs with sum", target, "are:");
// for (let i = 0; i < result.length; i++) {
//     console.log(result[i][0], ",", result[i][1]);
// }
// }
// // // 336 Check if a number can be represented as the sum of two numbers in an array
// {
// let arr = [10, 15, 3, 7];
// let n = arr.length;
// let target = 17;

// let map = new Map();
// let found = false;

// for (let i = 0; i < n; i++) {
//     let complement = target - arr[i];

//     if (map.has(complement)) {
//         found = true;
//         break;
//     }

//     map.set(arr[i], 1);
// }

// if (found) {
//     console.log("Yes, the number can be represented as the sum of two numbers.");
// } else {
//     console.log("No, it cannot be represented as the sum of two numbers.");
// }

// }
// // // 337 Find the minimum number of swaps required to sort an array
// {
// let arr = [4, 3, 2, 1];
// let n = arr.length;
// let arrPos = [];
// for (let i = 0; i < n; i++) {
//     arrPos.push([arr[i], i]);
// }

// for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         if (arrPos[j][0] > arrPos[j + 1][0]) {
//             let temp = arrPos[j];
//             arrPos[j] = arrPos[j + 1];
//             arrPos[j + 1] = temp;
//         }
//     }
// }

// let visited = [];
// for (let i = 0; i < n; i++) {
//     visited.push(false);
// }

// let swaps = 0;
// for (let i = 0; i < n; i++) {
//     if (visited[i] === true || arrPos[i][1] === i) {
//         continue;
//     }

//     let cycleSize = 0;
//     let j = i;

//     while (visited[j] === false) {
//         visited[j] = true;
//         j = arrPos[j][1];
//         cycleSize++;
//     }

//     if (cycleSize > 0) {
//         swaps += (cycleSize - 1);
//     }
// }

// console.log("Minimum number of swaps required:", swaps);

// }
// // // 338 Check if two arrays are equal
//  {
// let arr1 = [1, 2, 5, 4, 0];
// let arr2 = [2, 4, 5, 0, 1];
// let n = arr1.length;
// let m = arr2.length;

// let isEqual = true;
// if (n !== m) {
//     isEqual = false;
// }

// let map = new Map();
// for (let i = 0; i < n; i++) {
//     if (map.has(arr1[i])) {
//         map.set(arr1[i], map.get(arr1[i]) + 1);
//     } else {
//         map.set(arr1[i], 1);
//     }
// }

// for (let i = 0; i < m; i++) {
//     if (!map.has(arr2[i])) {
//         isEqual = false;
//         break;
//     } else {
//         map.set(arr2[i], map.get(arr2[i]) - 1);
//         if (map.get(arr2[i]) < 0) {
//             isEqual = false;
//             break;
//         }
//     }
// }
// if (isEqual) {
//     console.log("The arrays are equal.");
// } else {
//     console.log("The arrays are not equal.");
// }


// }
// // // 339 Find the longest subarray with distinct elements
// {
// let arr = [1, 2, 3, 4, 5, 2, 3, 6];
// let n = arr.length;

// let map = new Map();
// let start = 0; 
// let maxLength = 0;

// for (let end = 0; end < n; end++) {
//     if (map.has(arr[end])) {
//         start = Math.max(start, map.get(arr[end]) + 1);
//     }
//     map.set(arr[end], end);
//     maxLength = Math.max(maxLength, end - start + 1);
// }

// console.log("Length of longest subarray with distinct elements:", maxLength);
// }

// // // 340 Find the subarray with maximum product
// {
// let arr = [2, 3, -2, 4];
// let n = arr.length;
// let maxProduct = arr[0];
// let minProduct = arr[0];
// let result = arr[0];

// for (let i = 1; i < n; i++) {
//     if (arr[i] < 0) {
//         let temp = maxProduct;
//         maxProduct = minProduct;
//         minProduct = temp;
//     }
//     maxProduct = Math.max(arr[i], maxProduct * arr[i]);
//     minProduct = Math.min(arr[i], minProduct * arr[i]);
//     result = Math.max(result, maxProduct);
// }

// console.log("Maximum product of subarray:", result);

// }
// // // 341 Find the sum of all unique elements in an array
// {
// let arr = [1, 2, 3, 2, 4, 5, 1];
// let n = arr.length;

// let map = new Map();
// let sum = 0;
// for (let i = 0; i < n; i++) {
//     if (map.has(arr[i])) {
//         map.set(arr[i], map.get(arr[i]) + 1);
//     } else {
//         map.set(arr[i], 1);
//     }
// }
// for (let [key, value] of map) {
//     if (value === 1) {
//         sum += key;
//     }
// }

// console.log("Sum of all unique elements:", sum);
// }

// // // 342 Find the subarray with the smallest sum greater than or equal to a given value
// {
// let arr = [2, 1, 5, 2, 3, 2];
// let n = arr.length;
// let target = 7;

// let minLength = Infinity;
// let currentSum = 0;
// let start = 0;

// for (let end = 0; end < n; end++) {
//     currentSum += arr[end];
//     while (currentSum >= target) {
//         minLength = Math.min(minLength, end - start + 1);
//         currentSum -= arr[start];
//         start++;
//     }
// }

// if (minLength === Infinity) {
//     console.log("No subarray found with sum greater than or equal to", target);
// } else {
//     console.log("Length of the smallest subarray with sum greater than or equal to", target, "is:", minLength);
// }

// }
// // // // 343 Find the majority element in a sorted array
// {let arr = [1, 1, 2, 2, 2, 2, 3, 3, 3, 3];
// let n = arr.length;

// let majorityElement = arr[0];
// let count = 1;
// for (let i = 1; i < n; i++) {
//     if (arr[i] === arr[i - 1]) {
//         count++;
//     } else {
//         count = 1;
//     }
//     if (count > n / 2) {
//         majorityElement = arr[i];
//         break;
//     }
// }

// console.log("Majority element is:", majorityElement);
// }

// // // 344 Find the longest increasing subsequence in an array of positive integers
// {
// let arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
// let n = arr.length;
// let lis = new Array(n).fill(1);
// for (let i = 1; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//         if (arr[i] > arr[j]) {
//             lis[i] = Math.max(lis[i], lis[j] + 1);
//         }
//     }
// }
// let maxLength = Math.max(...lis);

// console.log("Length of the longest increasing subsequence:", maxLength);
// }

// // // 345 Find the longest decreasing subsequence in an array
// {
// let arr = [9, 8, 4, 5, 3, 7, 2, 1];
// let n = arr.length;
// let lds = new Array(n).fill(1);
// for (let i = 1; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//         if (arr[i] < arr[j]) {
//             lds[i] = Math.max(lds[i], lds[j] + 1);
//         }
//     }
// }
// let maxLength = Math.max(...lds);

// console.log("Length of the longest decreasing subsequence:", maxLength);

// }
// // // 346 Find the longest subarray with a given sum
// {
// let arr = [1, -1, 5, -2, 3];
// let targetSum = 3;
// let n = arr.length;
// let sumMap = new Map();
// let maxLength = 0;
// let currentSum = 0;
// for (let i = 0; i < n; i++) {
//     currentSum += arr[i];
//     if (currentSum === targetSum) {
//         maxLength = i + 1; 
//     }
//     if (sumMap.has(currentSum - targetSum)) {
//         maxLength = Math.max(maxLength, i - sumMap.get(currentSum - targetSum));
//     }
//     if (!sumMap.has(currentSum)) {
//         sumMap.set(currentSum, i);
//     }
// }

// console.log("Length of the longest subarray with the given sum:", maxLength);
// }
// // // 347 Find the sum of all unique elements in an array
// {
// let arr = [1, 2, 3, 2, 4, 5, 1];
// let n = arr.length;
// let map = {};

// for (let i = 0; i < n; i++) {
//     if (map[arr[i]] === undefined) {
//         map[arr[i]] = 1;
//     } else {
//         map[arr[i]] = map[arr[i]] + 1;
//     }
// }
// let sum = 0;

// for (let key in map) {
//     if (map[key] === 1) {
//         sum += parseInt(key);
//     }
// }

// console.log("Sum of all unique elements:", sum);
// }


// // // 348 Find the subarray with the smallest sum greater than or equal to a given value
// {
// let arr = [2, 3, 1, 2, 4, 3];
// let target = 7;
// let n = arr.length;
// let minLength = n + 1;
// let currentSum = 0;
// let start = 0;
// for (let end = 0; end < n; end++) {
//     currentSum += arr[end];
//     while (currentSum >= target) {
//         let windowLength = end - start + 1;
//         if (windowLength < minLength) {
//             minLength = windowLength;
//         }
//         currentSum -= arr[start];
//         start++;
//     }
// }
// if (minLength === n + 1) {
//     console.log("No subarray found");
// } else {
//     console.log("Smallest subarray length with sum >= target:", minLength);
// }

// }
// // // 349 Find the majority element in a sorted array
// {
// let arr = [1, 2, 2, 2, 2, 3, 4];
// let n = arr.length;
// let count = 1;
// let maxCount = 1;
// let majorityElement = arr[0];
// for (let i = 1; i < n; i++) {
//     if (arr[i] === arr[i - 1]) {
//         count++;
//     } else {
//         count = 1;
//     }

//     if (count > maxCount) {
//         maxCount = count;
//         majorityElement = arr[i];
//     }
// }
// if (maxCount > n / 2) {
//     console.log("Majority element is:", majorityElement);
// } else {
//     console.log("No majority element");
// }

// }
// // // 350 Find the longest increasing subsequence in an array of positive integers
// {
// let arr = [10, 22, 9, 33, 21, 50, 41, 60];
// let n = arr.length;
// let lis = new Array(n);

// for (let i = 0; i < n; i++) {
//     lis[i] = 1;
// }
// for (let i = 1; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//         if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
//             lis[i] = lis[j] + 1;
//         }
//     }
// }
// let maxLIS = 0;

// for (let i = 0; i < n; i++) {
//     if (lis[i] > maxLIS) {
//         maxLIS = lis[i];
//     }
// }

// console.log("Length of the longest increasing subsequence:", maxLIS);
// }

// // // 351 Find the longest decreasing subsequence in an array
// {
// let arr = [9, 4, 3, 2, 5, 4, 3, 2];
// let n = arr.length;
// let lds = new Array(n);

// for (let i = 0; i < n; i++) {
//     lds[i] = 1;
// }
// for (let i = 1; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//         if (arr[i] < arr[j] && lds[i] < lds[j] + 1) {
//             lds[i] = lds[j] + 1;
//         }
//     }
// }
// let maxLDS = 0;

// for (let i = 0; i < n; i++) {
//     if (lds[i] > maxLDS) {
//         maxLDS = lds[i];
//     }
// }

// console.log("Length of the longest decreasing subsequence:", maxLDS);

// }
// // // 352 Find the longest subarray with a given sum
// {
// let arr = [10, 5, 2, 7, 1, 9];
// let targetSum = 15;
// let n = arr.length;

// let map = {};
// let prefixSum = 0;
// let maxLength = 0;

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     if (prefixSum === targetSum) {
//         maxLength = i + 1;
//     }
//     let remaining = prefixSum - targetSum;
//     if (map[remaining] !== undefined) {
//         let length = i - map[remaining];
//         if (length > maxLength) {
//             maxLength = length;
//         }
//     }
//     if (map[prefixSum] === undefined) {
//         map[prefixSum] = i;
//     }
// }

// console.log("Length of the longest subarray with sum", targetSum, "is:", maxLength);

// }
// // // 353 Find the subarray with the sum of elements closest to zero
// {
// let arr = [1, 2, -3, 4, -2];
// let n = arr.length;
// let prefixSum = new Array(n);
// prefixSum[0] = arr[0];
// for (let i = 1; i < n; i++) {
//     prefixSum[i] = prefixSum[i-1] + arr[i];
// }
// let prefixSumWithIndex = new Array(n);
// for (let i = 0; i < n; i++) {
//     prefixSumWithIndex[i] = { sum: prefixSum[i], index: i };
// }
// for (let i = 0; i < n-1; i++) {
//     for (let j = 0; j < n-1-i; j++) {
//         if (prefixSumWithIndex[j].sum > prefixSumWithIndex[j+1].sum) {
//             let temp = prefixSumWithIndex[j];
//             prefixSumWithIndex[j] = prefixSumWithIndex[j+1];
//             prefixSumWithIndex[j+1] = temp;
//         }
//     }
// }
// let minDiff = Math.abs(prefixSumWithIndex[0].sum);
// let start = 0;
// let end = prefixSumWithIndex[0].index;

// for (let i = 1; i < n; i++) {
//     let diff = Math.abs(prefixSumWithIndex[i].sum - prefixSumWithIndex[i-1].sum);
//     if (diff < minDiff) {
//         minDiff = diff;
//         start = Math.min(prefixSumWithIndex[i].index, prefixSumWithIndex[i-1].index) + 1;
//         end = Math.max(prefixSumWithIndex[i].index, prefixSumWithIndex[i-1].index);
//     }
// }
// console.log("Subarray with sum closest to zero is:");
// for (let i = start; i <= end; i++) {
//     console.log(arr[i]);
// }
// }

// // // 354 Find the largest sum of a non-adjacent subarray
// {
// let arr = [3, 2, 7, 10];
// let n = arr.length;

// let incl = arr[0];
// let excl = 0;  

// for (let i = 1; i < n; i++) {
//     let temp = incl;
//     if (excl + arr[i] > incl) {
//         incl = excl + arr[i];
//     } else {
//         incl = incl;
//     }
//     excl = temp;
// }

// console.log("Largest sum of non-adjacent subarray is:", incl);

// }
// // // 355 Find the minimum difference between the sum of two subsets
// {
// let arr = [1, 6, 11, 5];
// let n = arr.length;
// let totalSum = 0;
// for (let i = 0; i < n; i++) {
//     totalSum += arr[i];
// }
// let dp = new Array(n + 1);
// for (let i = 0; i <= n; i++) {
//     dp[i] = new Array(totalSum + 1);
//     for (let j = 0; j <= totalSum; j++) {
//         dp[i][j] = false;
//     }
// }
// for (let i = 0; i <= n; i++) {
//     dp[i][0] = true;
// }
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= totalSum; j++) {
//         if (arr[i - 1] <= j) {
//             if (dp[i-1][j-arr[i-1]] || dp[i-1][j]) {
//                 dp[i][j] = true;
//             }
//         } else {
//             dp[i][j] = dp[i-1][j];
//         }
//     }
// }

// let minDiff = totalSum;
// for (let j = Math.floor(totalSum/2); j >= 0; j--) {
//     if (dp[n][j] === true) {
//         minDiff = totalSum - 2*j;
//         break;
//     }
// }

// console.log("The minimum difference between two subsets is:", minDiff);

// }
// // // 356 Find the number of contiguous subarrays that sum to a given value
// {
// let arr = [1, 1, 1];
// let targetSum = 2;
// let n = arr.length;
// let map = {};
// map[0] = 1; 
// let prefixSum = 0;
// let count = 0;

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];

//     let remaining = prefixSum - targetSum;
//     if (map[remaining] !== undefined) {
//         count += map[remaining];
//     }

//     if (map[prefixSum] === undefined) {
//         map[prefixSum] = 1;
//     } else {
//         map[prefixSum] += 1;
//     }
// }

// console.log("Number of contiguous subarrays with sum", targetSum, "is:", count);

// }
// // // 357 Find the number of ways to partition an array into two subarrays with equal sum
// {
// let arr = [1, 2, 3, 3];
// let n = arr.length;
// let totalSum = 0;
// for (let i = 0; i < n; i++) {
//     totalSum += arr[i];
// }
// if (totalSum % 2 !== 0) {
//     console.log("No possible partition.");
// } else {
//     let targetSum = totalSum / 2;
//     let prefixSum = 0;
//     let map = {};
//     map[0] = 1;  
//     let count = 0;

//     for (let i = 0; i < n; i++) {
//         prefixSum += arr[i];
//         let remaining = prefixSum - targetSum;
//         if (map[remaining] !== undefined) {
//             count += map[remaining];
//         }
//         if (map[prefixSum] === undefined) {
//             map[prefixSum] = 1;
//         } else {
//             map[prefixSum] += 1;
//         }
//     }

//     console.log("Number of ways to partition the array into two subarrays with equal sum:", count);
// }

// }
// // // 358 Find the median of two sorted arrays
// {
// let arr1 = [1, 3];
// let arr2 = [2];
// let n = arr1.length;
// let m = arr2.length;
// let mergedArr = [];
// let i = 0, j = 0;

// while (i < n && j < m) {
//     if (arr1[i] < arr2[j]) {
//         mergedArr.push(arr1[i]);
//         i++;
//     } else {
//         mergedArr.push(arr2[j]);
//         j++;
//     }
// }
// while (i < n) {
//     mergedArr.push(arr1[i]);
//     i++;
// }

// while (j < m) {
//     mergedArr.push(arr2[j]);
//     j++;
// }

// let totalLength = mergedArr.length;
// let median;

// if (totalLength % 2 === 0) {
//     median = (mergedArr[totalLength / 2 - 1] + mergedArr[totalLength / 2]) / 2;
// } else {
//     median = mergedArr[Math.floor(totalLength / 2)];
// }

// console.log("The median is:", median);

// }
// // // 359 Find the longest subarray with at most two distinct elements
// {
// let arr = [1, 2, 1, 2, 3];
// let n = arr.length;
// let map = {};
// let start = 0;
// let maxLength = 0;

// for (let end = 0; end < n; end++) {
//     map[arr[end]] = (map[arr[end]] || 0) + 1;
//     while (Object.keys(map).length > 2) {
//         map[arr[start]] -= 1;
//         if (map[arr[start]] === 0) {
//             delete map[arr[start]];
//         }
//         start++;
//     }
//     maxLength = Math.max(maxLength, end - start + 1);
// }

// console.log("The longest subarray with at most two distinct elements is of length:", maxLength);

// }
// // // 360 Find the maximum length of a subarray with a given sum
// {
// let arr = [1, -1, 5, -2, 3];
// let targetSum = 3;
// let n = arr.length;
// let map = {};
// let prefixSum = 0;
// let maxLength = 0;
// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];

//     if (prefixSum === targetSum) {
//         maxLength = i + 1;
//     }
//     if (map[prefixSum - targetSum] !== undefined) {
//         maxLength = Math.max(maxLength, i - map[prefixSum - targetSum]);
//     }
//     if (map[prefixSum] === undefined) {
//         map[prefixSum] = i;
//     }
// }

// console.log("The maximum length of a subarray with sum", targetSum, "is:", maxLength);
// }

// // // 361 Find the number of subarrays with sum divisible by a given number
// {
// let arr = [2, 3, 1, 2, 4, 5];
// let divisor = 5;
// let n = arr.length;
// let map = {};
// map[0] = 1; 
// let prefixSum = 0;
// let count = 0;
// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let remainder = ((prefixSum % divisor) + divisor) % divisor;
//     if (map[remainder] !== undefined) {
//         count += map[remainder];
//     }
//     if (map[remainder] === undefined) {
//         map[remainder] = 1;
//     } else {
//         map[remainder] += 1;
//     }
// }

// console.log("The number of subarrays with sum divisible by", divisor, "is:", count);
// }

// // // 362 Find the minimum number of operations to make an array increasing
// {
// let arr = [1, 1, 0, 2, 3];
// let n = arr.length;
// let operations = 0;
// for (let i = 1; i < n; i++) {
//     if (arr[i] <= arr[i - 1]) {
//         operations += (arr[i - 1] - arr[i] + 1); 
//         arr[i] = arr[i - 1] + 1;
//     }
// }

// console.log("Minimum number of operations to make the array increasing:", operations);

// }
// // // 363 Find the subarray with the maximum sum that satisfies a given condition
// {
// let arr = [1, 2, 1, 2, 3];
// let n = arr.length;
// let start = 0, end = 0;
// let map = {};
// let maxSum = -Infinity;
// let currentSum = 0;
// while (end < n) {
//     currentSum += arr[end];
//     map[arr[end]] = (map[arr[end]] || 0) + 1;
//     while (Object.keys(map).length > 2) {
//         map[arr[start]] -= 1;
//         if (map[arr[start]] === 0) {
//             delete map[arr[start]];
//         }
//         currentSum -= arr[start];
//         start++;
//     }
//     maxSum = Math.max(maxSum, currentSum);
//     end++;
// }

// console.log("The maximum sum of a subarray that satisfies the condition is:", maxSum);
// }

// // // 364 Find the number of pairs in an array whose sum equals a given number
// {
// let arr = [1, 2, 3, 4, 3, 2, 1];
// let target = 5;
// let n = arr.length;
// let count = 0;
// let map = {};
// for (let i = 0; i < n; i++) {
//     let complement = target - arr[i];
//     if (map[complement] !== undefined) {
//         count += map[complement];
//     }
//     map[arr[i]] = (map[arr[i]] || 0) + 1;
// }

// console.log("The number of pairs whose sum equals", target, "is:", count);

// }
// // // 365 Find the maximum sum subarray of size k
// {
// let arr = [2, 1, 5, 1, 3, 2];
// let k = 3;
// let n = arr.length;
// let currentSum = 0;
// let maxSum = -Infinity;

// for (let i = 0; i < k; i++) {
//     currentSum += arr[i];
// }
// maxSum = currentSum; 
// for (let i = k; i < n; i++) {
//     currentSum += arr[i] - arr[i - k]; 
//     maxSum = Math.max(maxSum, currentSum);
// }

// console.log("The maximum sum of subarray of size", k, "is:", maxSum);
// }

// // //  366 Find the subarray with the smallest sum
// {
// let arr = [3, -4, 2, -1, -2, 1];
// let currentSum = arr[0];  
// let minSum = arr[0];   
// for (let i = 1; i < arr.length; i++) {
//     currentSum = Math.min(arr[i], currentSum + arr[i]);
//     minSum = Math.min(minSum, currentSum);  
// }

// console.log("The subarray with the smallest sum is:", minSum);

// }
// // // 367 Find the maximum number of pairs whose sum equals a given number
// {
// let arr = [1, 2, 3, 2, 1, 3, 4];
// let target = 5;
// let map = {}; 
// let pairCount = 0;

// for (let i = 0; i < arr.length; i++) {
//     let complement = target - arr[i];  
//     if (map[complement] !== undefined) {
//         pairCount += map[complement];
//     }
//     map[arr[i]] = (map[arr[i]] || 0) + 1;
// }
// console.log("The maximum number of pairs whose sum equals", target, "is:", pairCount);

// }
// // // 368 Find the sum of elements in an array without using a loop
// {
// function sumArray(arr) {
//     if (arr.length === 0) {
//       return 0;
//     }
//     return arr[0] + sumArray(arr.slice(1));
//   }
//   let arr = [1, 2, 3, 4, 5];
//   console.log("Sum of elements:", sumArray(arr)); 
  
// }
// // // 369 Find the longest subsequence with a given difference
// {
// let arr = [1, 5, 7, 8, 5, 3, 4, 2, 1];  
// let d = 2; 

// let dp = {};
// let maxLength = 0;  
// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     if (dp[num - d] !== undefined) {
//         dp[num] = dp[num - d] + 1;
//     } else {
//         dp[num] = 1;
//     }
//     maxLength = Math.max(maxLength, dp[num]);
// }

// console.log("Longest subsequence with difference", d, "is:", maxLength);

// }
// // // 370 Find the number of contiguous subarrays that are palindromes
// {
// let arr = [1, 2, 1, 2, 1];  
// let n = arr.length;  
// let palindromeCount = 0; 
// for (let center = 0; center < n; center++) {
//     let left = center, right = center;
//     while (left >= 0 && right < n && arr[left] === arr[right]) {
//         palindromeCount++;
//         left--;
//         right++;
//     }
// }
// for (let center = 0; center < n - 1; center++) {
//     let left = center, right = center + 1;
//     while (left >= 0 && right < n && arr[left] === arr[right]) {
//         palindromeCount++;
//         left--;
//         right++;
//     }
// }

// console.log("Number of palindromic subarrays:", palindromeCount);
// }

// // // 372 Find the smallest number in an unsorted array
// {
// let arr = [5, 8, 2, 1, 9, 3];  
// let n = arr.length;  
// let smallest = Infinity;
// for (let i = 0; i < n; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i]; 
//     }
// }

// console.log("Smallest number in the array is:", smallest);
// }

// // // 373 Find the longest subarray with exactly k distinct elements
// {
// let arr = [1, 2, 1, 2, 3]; 
// let k = 2; 
// let n = arr.length;  
// let left = 0;  
// let maxLength = 0; 
// let map = {}; 
// for (let right = 0; right < n; right++) {
//     map[arr[right]] = (map[arr[right]] || 0) + 1;
//     while (Object.keys(map).length > k) {
//         map[arr[left]]--;
//         if (map[arr[left]] === 0) {
//             delete map[arr[left]];  
//         }
//         left++;  
//     }
//     maxLength = Math.max(maxLength, right - left + 1);
// }

// console.log("Longest subarray with exactly", k, "distinct elements is of length:", maxLength);

// }
// // // 374 Find the number of subarrays with a sum equal to a given number
// {
// let arr = [1, 2, 3, 4, 5];  
// let targetSum = 5;  
// let n = arr.length;  
// let prefixSum = 0;  
// let count = 0; 
// let map = {}; 
// map[0] = 1;

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];  
//     if (map[prefixSum - targetSum]) {
//         count += map[prefixSum - targetSum];  
//     }
//     map[prefixSum] = (map[prefixSum] || 0) + 1;
// }

// console.log("Number of subarrays with sum equal to", targetSum, "is:", count);

// }
// // // 375 Find the number of subarrays whose sum is divisible by a given number
// {
// let arr = [4, 5, 0, -2, -3, 1];  
// let k = 5;  
// let n = arr.length; 
// let prefixSum = 0;  
// let count = 0;  
// let map = {};  
// map[0] = 1;

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];  
//     let remainder = ((prefixSum % k) + k) % k;  
//     if (map[remainder]) {
//         count += map[remainder];  
//     }
//     map[remainder] = (map[remainder] || 0) + 1;
// }

// console.log("Number of subarrays whose sum is divisible by", k, "is:", count);

// }
// // // 376 Find the element that appears more than n/2 times in an array
// {
// let arr = [3, 3, 4, 2, 4, 4, 2, 4, 4]; 
// let n = arr.length;  
// let candidate = null;
// let count = 0;

// for (let i = 0; i < n; i++) {
//     if (count === 0) {
//         candidate = arr[i];
//         count = 1;
//     } else if (arr[i] === candidate) {
//         count++;
//     } else {
//         count--;
//     }
// }

// let occurrences = 0;
// for (let i = 0; i < n; i++) {
//     if (arr[i] === candidate) {
//         occurrences++;
//     }
// }

// if (occurrences > n / 2) {
//     console.log("The element that appears more than n/2 times is:", candidate);
// } else {
//     console.log("No element appears more than n/2 times");
// }

// }
// // // 377 Find the maximum sum of a subarray that doesn't contain a particular number
// {
// let arr = [1, -2, 3, 4, -1, 5, -2]; 
// let excludedNum = 3; 
// let n = arr.length; 

// let maxSum = -Infinity;  
// let currentSum = 0;  
// for (let i = 0; i < n; i++) {
//     if (arr[i] === excludedNum) {
//         currentSum = 0;
//     } else {
//         currentSum = Math.max(arr[i], currentSum + arr[i]);
//         maxSum = Math.max(maxSum, currentSum);
//     }
// }

// console.log("Maximum sum of a subarray that doesn't contain", excludedNum, "is:", maxSum);

// }
// // // 378 Find the minimum subarray that contains all the elements of another array
// {
// let arr = [1, 2, 3, 4, 2, 5, 1, 3, 2, 4];  
// let target = [1, 2, 3];  
// let n = arr.length;  
// let m = target.length;  
// let targetMap = {};
// for (let i = 0; i < m; i++) {
//     targetMap[target[i]] = (targetMap[target[i]] || 0) + 1;
// }
// let windowMap = {};
// let left = 0, right = 0;
// let required = Object.keys(targetMap).length;  
// let formed = 0; 
// let minLength = Infinity;  
// let minLeft = -1;  
// while (right < n) {

//     let currentElement = arr[right];
//     windowMap[currentElement] = (windowMap[currentElement] || 0) + 1;
//     if (currentElement in targetMap && windowMap[currentElement] === targetMap[currentElement]) {
//         formed++;
//     }
//     while (left <= right && formed === required) {
//         let leftElement = arr[left];
//         if (right - left + 1 < minLength) {
//             minLength = right - left + 1;
//             minLeft = left;
//         }
//         windowMap[leftElement]--;
//         if (leftElement in targetMap && windowMap[leftElement] < targetMap[leftElement]) {
//             formed--;
//         }

//         left++;
//     }

//     right++;
// }

// if (minLength === Infinity) {
//     console.log("No subarray contains all the elements of the target array.");
// } else {
//     console.log("The minimum subarray containing all elements of the target array is:", arr.slice(minLeft, minLeft + minLength));
// }
// }

// // // 379 Find the subarray with the smallest sum
// {
// let arr = [2, -1, 3, -4, -1, 2];  
// let n = arr.length;  

// let minSum = Infinity;  
// let currentSum = 0;  
// for (let i = 0; i < n; i++) {
//     currentSum = Math.min(arr[i], currentSum + arr[i]); 
//     minSum = Math.min(minSum, currentSum);  
// }

// console.log("The subarray with the smallest sum has a sum of:", minSum);

// }
// // // 380 Find the smallest subarray with sum greater than a given number
// {
// let arr = [1, 4, 45, 6, 10, 19];  
// let target = 51;  

// let n = arr.length;
// let left = 0, right = 0;
// let minLength = Infinity;
// let currentSum = 0;
// while (right < n) {
//     currentSum += arr[right];
//     while (currentSum > target) {
//         minLength = Math.min(minLength, right - left + 1);
//         currentSum -= arr[left];  
//         left++;  
//     }
//     right++;
// }
// if (minLength === Infinity) {
//     console.log("No subarray with sum greater than the given number.");
// } else {
//     console.log("The smallest subarray with sum greater than the given number has a length of:", minLength);
// }
// }

// // // 381 Find the subarray with maximum sum and length
// {
// let arr = [1, 2, -1, 2, 3, -4, 5];  

// let n = arr.length;
// let maxSum = -Infinity;  
// let currentSum = 0;  
// let maxLength = 0;  
// let currentLength = 0;  
// let start = 0;  

// for (let i = 0; i < n; i++) {
//     currentSum += arr[i];
//     currentLength++;
//     if (currentSum > maxSum) {
//         maxSum = currentSum;
//         maxLength = currentLength;
//         start = i - currentLength + 1;  
//     } 
//     else if (currentSum === maxSum && currentLength > maxLength) {
//         maxLength = currentLength;
//         start = i - currentLength + 1;  
//     }
//     if (currentSum < 0) {
//         currentSum = 0;
//         currentLength = 0;
//     }
// }

// console.log("Maximum sum subarray has sum:", maxSum);
// console.log("Start index:", start);
// console.log("Length of the subarray:", maxLength);

// }
// // // 382 Find the sum of elements at odd indices in an array
// {
// let arr = [10, 20, 30, 40, 50, 60, 70];  
// let sum = 0;

// for (let i = 1; i < arr.length; i += 2) {
//     sum += arr[i]; 
// }

// console.log("Sum of elements at odd indices:", sum);
// }

// // // 383 Find the number of subarrays whose sum equals a prime number
// {
// let arr = [1, 2, 3, 4]; 
// let n = arr.length;
// let primeCount = 0;
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// for (let i = 0; i < n; i++) {
//     let currentSum = 0;
//     for (let j = i; j < n; j++) {
//         currentSum += arr[j];  
//         if (isPrime(currentSum)) {
//             primeCount++;  
//         }
//     }
// }

// console.log("Number of subarrays whose sum is prime:", primeCount);
// }

// // // 384 Find the maximum number of elements divisible by 3 in an array
// {
// let arr = [1, 3, 6, 9, 12, 15, 18];  
// let count = 0;  
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) { 
//         count++;  
//     }
// }

// console.log("Maximum number of elements divisible by 3:", count);

// }
// // // 385 Find the subarray whose sum is closest to a given value
// {
// let arr = [1, 2, 3, 4, 5];  
// let target = 10; 
// let closestSum = Number.MAX_VALUE;  
// let closestSubarray = [];  
// let n = arr.length;
// let prefixSum = new Array(n + 1).fill(0);  
// for (let i = 1; i <= n; i++) {
//     prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
// }
// for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j <= n; j++) {
//         let currentSum = prefixSum[j] - prefixSum[i];  
//         if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
//             closestSum = currentSum;  
//             closestSubarray = arr.slice(i, j);  
//         }
//     }
// }

// console.log("Subarray with sum closest to the target:", closestSubarray);
// }

// // // 386 Find the element whose occurrence is maximum in an array
// {
// let arr = [1, 3, 2, 1, 4, 1, 3, 2, 3]; 
// let frequencyMap = {};  
// let maxElement = arr[0];  
// let maxCount = 0;  


// for (let i = 0; i < arr.length; i++) {
//     frequencyMap[arr[i]] = (frequencyMap[arr[i]] || 0) + 1;
//     if (frequencyMap[arr[i]] > maxCount) {
//         maxCount = frequencyMap[arr[i]];
//         maxElement = arr[i];
//     }
// }

// console.log("Element with the maximum occurrence:", maxElement);
// }

// // // 387 Find the longest subarray whose sum is greater than zero
// {
// let arr = [1, -2, 3, 4, -1, 2, 1, -5, 4];  
// let maxLength = 0;  
// let currentSum = 0;

// let start = 0;  
// for (let end = 0; end < arr.length; end++) {
//     currentSum += arr[end];
//     while (currentSum > 0) {
//         maxLength = Math.max(maxLength, end - start + 1); 
//         currentSum -= arr[start]; 
//         start++; 
//     }
// }

// console.log("Length of the longest subarray with sum greater than zero:", maxLength);
// }

// // // 389 Find the number of subarrays with sum equal to zero
// {
// let arr = [1, -1, 2, -2, 3, -3]; 
// let count = 0;  
// let prefixSum = 0; 
// let sumMap = {};  
// sumMap[0] = 1;  
// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];  
//     if (sumMap[prefixSum]) {
//         count += sumMap[prefixSum];  
//     }
//     sumMap[prefixSum] = (sumMap[prefixSum] || 0) + 1;
// }

// console.log("Number of subarrays with sum equal to zero:", count);
// }
// // // 390 Find the sum of the largest and smallest elements in an array
// {
// let arr = [4, 2, 8, 1, 5, 10]; 
// let minElement = arr[0]; 
// let maxElement = arr[0]; 
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < minElement) {
//         minElement = arr[i];  
//     }
//     if (arr[i] > maxElement) {
//         maxElement = arr[i]; 
//     }
// }
// let sum = minElement + maxElement;
// console.log("Sum of the largest and smallest elements:", sum);

// }
// // // 391 Find the sum of elements at even indices in an array
// {
// let arr = [4, 2, 8, 1, 5, 10];  
// let sum = 0; 
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {  
//         sum += arr[i]; 
//     }
// }

// console.log("Sum of elements at even indices:", sum);
// }

// // // 392 Find the minimum subarray that contains a particular element
// {
// let arr = [1, 2, 3, 2, 4, 5, 2];  
// let target = 2;  
// let minLength = Infinity; 
// let startIndex = -1;  
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//         let j = i;  
//         while (j < arr.length && arr[j] !== target) {
//             j++;
//         }
//         let subarrayLength = j - i + 1;
//         if (subarrayLength < minLength) {
//             minLength = subarrayLength;
//             startIndex = i;
//         }
//     }
// }
// if (startIndex !== -1) {
//     console.log(`The smallest subarray containing the element ${target} starts at index ${startIndex} and has length ${minLength}.`);
// } else {
//     console.log(`The element ${target} is not found in the array.`);
// }
// }

// // // 393 Find the number of ways to partition an array into two parts
// {
// let arr = [1, 2, 3, 3];
// let totalSum = 0;  
// let runningSum = 0;  
// let count = 0; 
// for (let i = 0; i < arr.length; i++) {
//     totalSum += arr[i];
// }

// if (totalSum % 2 !== 0) {
//     console.log("No valid partition exists.");
// } else {
//     for (let i = 0; i < arr.length - 1; i++) {
//         runningSum += arr[i];  
//         if (runningSum === totalSum / 2) {
//             count++; 
//         }
//     }
//     console.log("Number of ways to partition the array:", count);
// }
// }

// // // 394 Find the number of subarrays that contain all the elements of another array
// {
// let arr = [1, 2, 3, 4, 2, 3, 1, 4, 5];  
// let target = [2, 3, 4];  

// let targetCount = {};  
// let windowCount = {}; 
// let validSubarrays = 0;
// let required = target.length;  
// for (let i = 0; i < target.length; i++) {
//     targetCount[target[i]] = (targetCount[target[i]] || 0) + 1;
// }
// let left = 0;
// let matched = 0;  
// for  (let right = 0; right < arr.length; right++) {
    
//     if (targetCount[arr[right]] !== undefined) {
//         windowCount[arr[right]] = (windowCount[arr[right]] || 0) + 1;
        
//         if (windowCount[arr[right]] === targetCount[arr[right]]) {
//             matched++;
//         }
//     }

    
//     while (matched === Object.keys(targetCount).length) {
//         validSubarrays += (arr.length - right);  
//         if (targetCount[arr[left]] !== undefined) {
//             windowCount[arr[left]]--;
//             if (windowCount[arr[left]] < targetCount[arr[left]]) {
//                 matched--;  
//             }
//         }
//         left++;
//     }
// }

// console.log("Number of subarrays containing all elements of the target array:", validSubarrays);
// }

// // // 395 Find the largest subarray with sum equal to zero
// {
// let arr = [1, -1, 3, -2, 2, -3, 3, 1];  
// let sumMap = {};  
// let maxLength = 0;  
// let prefixSum = 0;  

// sumMap[0] = -1; 
// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i]; 
//     if (sumMap.hasOwnProperty(prefixSum)) {
//         let subarrayLength = i - sumMap[prefixSum];
//         maxLength = Math.max(maxLength, subarrayLength);  
//     } else {
//         sumMap[prefixSum] = i;
//     }
// }
// console.log("Length of the largest subarray with sum zero:", maxLength);
// }

// // // 396 Find the largest sum of the sum of the digits of elements
// {
// let arr = [123, 45, 6789, 101, 56];  
// let maxSum = 0; 

// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     let sumOfDigits = 0;
//     while (num > 0) {
//         sumOfDigits += num % 10;  
//         num = Math.floor(num / 10);  
//     }
//     maxSum = Math.max(maxSum, sumOfDigits);
// }
// console.log("The largest sum of digits is:", maxSum);
// }

// // // 397 Find the number of subarrays with exactly two even elements
// {
// let arr = [1, 2, 3, 4, 5, 6]; 
// let n = arr.length;
// let evenCount = 0; 
// let subarrayCount = 0;  

// let left = 0;  
// for (let right = 0; right < n; right++) {
//     if (arr[right] % 2 === 0) {
//         evenCount++;
//     }
//     while (evenCount > 2) {
//         if (arr[left] % 2 === 0) {
//             evenCount--;
//         }
//         left++;
//     }
//     if (evenCount === 2) {
//         subarrayCount += (right - left + 1);
//     }
// }

// console.log("Number of subarrays with exactly two even elements:", subarrayCount);

// }
// // // 398 Find the maximum product of three numbers in an array
// {
// let arr = [-10, -10, 5, 2];  
// let n = arr.length;
// arr.sort((a, b) => a - b);  
// let product1 = arr[n - 1] * arr[n - 2] * arr[n - 3];  
// let product2 = arr[0] * arr[1] * arr[n - 1];  
// let maxProduct = Math.max(product1, product2);
// console.log("The maximum product of three numbers is:", maxProduct);
// }

// // // 399 Find the number of distinct pairs whose sum equals a given number
// {
// let arr = [1, 5, 7, -1, 5];  
// let target = 6;  
// let n = arr.length;
// let seen = new Set();  
// let pairsCount = 0;
// for (let i = 0; i < n; i++) {
//     let complement = target - arr[i];
//     if (seen.has(complement)) {
//         pairsCount++;  
//     }
//     seen.add(arr[i]);
// }
// console.log("The number of distinct pairs whose sum equals", target, "is:", pairsCount);
// }

// // // 400 Find the count of subarrays whose sum is greater than a given number
// {
// let arr = [1, 2, 3, 4, 5]; 
// let target = 5;  
// let n = arr.length;
// let prefixSum = 0;  
// let count = 0;  
// let prefixSums = [0];  
// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];  
//     prefixSums.push(prefixSum);  
//     for (let j = 0; j < i; j++) {
//         let subarraySum = prefixSums[i + 1] - prefixSums[j];
//         if (subarraySum > target) {
//             count++;
//         }
//     }
// }
// console.log("The count of subarrays whose sum is greater than", target, "is:", count);

// }
// // // 401 Find the number of odd and even elements in a subarray
// {
// let arr = [1, 2, 3, 4, 5];  
// let n = arr.length;
// let oddCount = 0;  
// let evenCount = 0;  
// for (let i = 0; i < n; i++) {
//     oddCount = 0;  
//     evenCount = 0;  
//     for (let j = i; j < n; j++) {
//         if (arr[j] % 2 === 0) {
//             evenCount++; 
//         } else {
//             oddCount++; 
//         }

//         console.log(`Subarray [${arr.slice(i, j + 1)}]: Odd count = ${oddCount}, Even count = ${evenCount}`);
//     }
// }

// }
// // // 402 Find the minimum subarray with sum greater than a given value
// {
// let arr = [1, 4, 45, 6, 10, 19]; 
// let target = 51;  
// let n = arr.length;

// let start = 0; 
// let sum = 0;  
// let minLength = n + 1;  
// for (let end = 0; end < n; end++) {
//     sum += arr[end];  
//     while (sum > target) {
//         minLength = Math.min(minLength, end - start + 1);  
//         sum -= arr[start];  
//         start++;  
//     }
// }
// if (minLength === n + 1) {
//     console.log("No subarray with sum greater than", target);
// } else {
//     console.log("The minimum subarray length with sum greater than", target, "is:", minLength);
// }
// }

// // // 403 Find the smallest subarray whose sum is greater than a given value
// {
// let arr = [1, 4, 45, 6, 10, 19]; 
// let target = 51;  
// let n = arr.length;

// let start = 0;  
// let sum = 0;  
// let minLength = n + 1;  
// for (let end = 0; end < n; end++) {
//     sum += arr[end]; 
//     while (sum > target) {
//         minLength = Math.min(minLength, end - start + 1);  
//         sum -= arr[start];
//         start++;  
//     }
// }
// if (minLength === n + 1) {
//     console.log("No subarray with sum greater than", target);
// } else {
//     console.log("The minimum subarray length with sum greater than", target, "is:", minLength);
// }

// }
// // // 404 Find the largest number formed by an array of digits
// {
// let arr = [3, 30, 34, 5, 9];
// let arrStr = arr.map(String);
// arrStr.sort((a, b) => {
    
//     if (a + b > b + a) {
//         return -1;  
//     } else if (a + b < b + a) {
//         return 1;   
//     } else {
//         return 0; 
//     }
// });
// if (arrStr[0] === '0') {
//     console.log('0');
// } else {
//     let largestNumber = arrStr.join('');
//     console.log(largestNumber);
// }
// }

// // // 405 Find the count of subsets whose sum equals a given number
// {
// let arr = [1, 2, 3, 3];  
// let targetSum = 6;  

// let n = arr.length;  

// let dp = Array(n + 1).fill().map(() => Array(targetSum + 1).fill(0));


// for (let i = 0; i <= n; i++) {
//     dp[i][0] = 1; 
// }

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= targetSum; j++) {
//         if (arr[i - 1] <= j) {
//             dp[i][j] = dp[i - 1][j] + dp[i - 1][j - arr[i - 1]];
//         } else {
//             dp[i][j] = dp[i - 1][j];
//         }
//     }
// }

// console.log(dp[n][targetSum]);
// }

// // // 406 Find the sum of all elements that are divisible by a number
// {
// let arr = [10, 20, 30, 40, 50, 60];  
// let divisor = 10;  // Given number

// let sum = 0;  

// for (let i = 0; i < arr.length; i++) {
    
//     if (arr[i] % divisor === 0) {
        
//         sum += arr[i];
//     }
// }

// console.log(sum);

// }
// // // 407 Find the maximum length of a subarray where the sum is divisible by a number
// {
// let arr = [23, 2, 4, 6, 7]; 
// let divisor = 6;  

// let maxLength = 0;  
// let prefixSum = 0;  
// let remainderMap = {};
// remainderMap[0] = -1;
// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];
//     let remainder = prefixSum % divisor;
//     if (remainder < 0) {
//         remainder += divisor;
//     }
//     if (remainderMap.hasOwnProperty(remainder)) {
//         let length = i - remainderMap[remainder];
//         maxLength = Math.max(maxLength, length);
//     } else {
//         remainderMap[remainder] = i;
//     }
// }
// console.log(maxLength);
// }

// // // 408 Find the smallest subarray with sum greater than a given number
// {

// let arr = [1, 4, 45, 6, 10, 19];  
// let targetSum = 51; 

// let minLength = Infinity;  
// let currentSum = 0; 
// let left = 0;  
// for (let right = 0; right < arr.length; right++) {
//     currentSum += arr[right];
//     while (currentSum > targetSum) {
//         minLength = Math.min(minLength, right - left + 1);
//         currentSum -= arr[left];
//         left++;
//     }
// }

// if (minLength === Infinity) {
//     console.log(0);  
// } else {
//     console.log(minLength);  
// }

// }
// // // 409 Find the subarray whose sum is equal to a prime number
// {
// let arr = [1, 4, 3, 6, 5];  

// let isPrime = (num) => {
//     if (num <= 1) return false;
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// };
// let n = arr.length;
// let found = false;  

// for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//         sum += arr[j];  
//         if (isPrime(sum)) {
//             console.log("Subarray with sum equal to a prime number:", arr.slice(i, j + 1));
//             found = true;
//         }
//     }
// }
// if (!found) {
//     console.log("No subarray with sum equal to a prime number");
// }
// }
// // // 410 Find the largest subarray with sum less than or equal to a given value
// {
// let arr = [1, 4, 2, 5, 3];  
// let targetSum = 8;  

// let maxLength = 0;  
// let currentSum = 0;  
// let left = 0;  

// for (let right = 0; right < arr.length; right++) {
//     currentSum += arr[right];
//     while (currentSum > targetSum) {
//         currentSum -= arr[left]; 
//         left++; 
//     }
//     maxLength = Math.max(maxLength, right - left + 1);
// }
// console.log(maxLength); 
// }

// // // 411 Find the smallest subarray with sum greater than a given value
// {
// let arr = [1, 4, 2, 5, 3];  
// let targetSum = 8;  

// let minLength = Infinity;  
// let currentSum = 0;  
// let left = 0;  
// for (let right = 0; right < arr.length; right++) {
//     currentSum += arr[right];  
//     while (currentSum > targetSum) {
//         minLength = Math.min(minLength, right - left + 1);  
//         currentSum -= arr[left];  
//         left++;
//     }
// }
// if (minLength === Infinity) {
//     console.log("No subarray found with sum greater than the given value");
// } else {
//     console.log(minLength);
// }
// }
// // // 412 Find the count of unique elements in an array
// {
// let arr = [4, 5, 4, 5, 7, 8, 9, 7];
// let n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             let temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// let count = 1;
// for (let i = 1; i < n; i++) {
//     if (arr[i] != arr[i - 1]) {
//         count++;
//     }
// }

// console.log("Count of unique elements:", count);

// }
// // // 413 Find the subarray whose sum is closest to a given value
// {
// let arr = [5, -2, 3, 1, 2];
// let n = arr.length;
// let target = 4;

// let closestSum = arr[0];
// let startIndex = 0;
// let endIndex = 0;

// for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//         sum += arr[j];
        
//         if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
//             closestSum = sum;
//             startIndex = i;
//             endIndex = j;
//         }
//     }
// }

// console.log("Subarray with sum closest to", target, ":");
// let result = [];
// for (let i = startIndex; i <= endIndex; i++) {
//     result.push(arr[i]);
// }
// console.log(result);
// console.log("Closest sum is:", closestSum);

// }
// // // 414 Find the number of odd elements in a subarray
// {
// let arr = [2, 5, 7, 8, 9, 10];
// let n = arr.length;
// let start = 1;
// let end = 4;

// let count = 0;

// for (let i = start; i <= end; i++) {
//     if (arr[i] % 2 !== 0) {
//         count++;
//     }
// }

// console.log("Number of odd elements in subarray:", count);
// }

// // // 415 Find the largest sum of subarray whose sum is greater than a given number
// {
// let arr = [2, -1, 3, 4, -2, 1];
// let n = arr.length;
// let K = 5;

// let maxSum = -Infinity;
// let startIndex = -1;
// let endIndex = -1;

// for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//         sum += arr[j];

//         if (sum > K && sum > maxSum) {
//             maxSum = sum;
//             startIndex = i;
//             endIndex = j;
//         }
//     }
// }

// if (maxSum === -Infinity) {
//     console.log("No subarray has sum greater than", K);
// } else {
//     console.log("Subarray with largest sum greater than", K, ":");
//     let result = [];
//     for (let i = startIndex; i <= endIndex; i++) {
//         result.push(arr[i]);
//     }
//     console.log(result);
//     console.log("Sum:", maxSum);
// }
// }

// // // 416 Find the subarray with the maximum sum
// {
// let arr = [2, -1, 3, 4, -2, 1];
// let n = arr.length;

// let maxSum = arr[0]; 
// let currentSum = arr[0]; 
// let startIndex = 0, endIndex = 0, tempStart = 0;

// for (let i = 1; i < n; i++) {
//     if (currentSum + arr[i] > arr[i]) {
//         currentSum += arr[i];
//     } else {
//         currentSum = arr[i]; 
//         tempStart = i; 
//     }
//     if (currentSum > maxSum) {
//         maxSum = currentSum;
//         startIndex = tempStart;
//         endIndex = i;
//     }
// }

// console.log("Subarray with maximum sum:");
// let result = [];
// for (let i = startIndex; i <= endIndex; i++) {
//     result.push(arr[i]);
// }
// console.log(result);
// console.log("Maximum sum:", maxSum);

// }
// // // 417 Find the sum of squares of elements in a subarray
// {
// let arr = [2, -1, 3, 4, -2, 1];
// let n = arr.length;
// let start = 1;
// let end = 4;

// let sumOfSquares = 0;

// for (let i = start; i <= end; i++) {
//     sumOfSquares += arr[i] * arr[i]; 
// }

// console.log("Sum of squares of elements in subarray:", sumOfSquares);
// }

// // // 418 Find the minimum sum subarray
// {
// let arr = [2, -1, 3, 4, -2, 1];
// let n = arr.length;

// let minSum = arr[0];  
// let currentSum = arr[0];  
// let startIndex = 0, endIndex = 0, tempStart = 0;

// for (let i = 1; i < n; i++) {
//     if (currentSum + arr[i] < arr[i]) {
//         currentSum += arr[i]; 
//     } else {
//         currentSum = arr[i]; 
//         tempStart = i; 
//     }
//     if (currentSum < minSum) {
//         minSum = currentSum;
//         startIndex = tempStart;
//         endIndex = i;
//     }
// }

// console.log("Subarray with minimum sum:");
// let result = [];
// for (let i = startIndex; i <= endIndex; i++) {
//     result.push(arr[i]);
// }
// console.log(result);
// console.log("Minimum sum:", minSum);
// }

// // // 419 Find the subarray whose sum is closest to a given value
// {
// let arr = [5, -2, 3, 1, 2];
// let n = arr.length;
// let target = 4;

// let closestSum = arr[0]; 
// let startIndex = 0;
// let endIndex = 0;

// for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//         sum += arr[j];
//         if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
//             closestSum = sum;
//             startIndex = i;
//             endIndex = j;
//         }
//     }
// }

// console.log("Subarray with sum closest to", target, ":");
// let result = [];
// for (let i = startIndex; i <= endIndex; i++) {
//     result.push(arr[i]);
// }
// console.log(result);
// console.log("Closest sum is:", closestSum);

// }
// // // 420 Find the number of prime numbers in a subarray
// {

// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false; 
//     }
//     return true;
// }
// let arr = [2, 5, 7, 8, 9, 10, 11];
// let n = arr.length;
// let start = 1;
// let end = 5;

// let primeCount = 0;

// for (let i = start; i <= end; i++) {
//     if (isPrime(arr[i])) {
//         primeCount++;
//     }
// }

// console.log("Number of prime numbers in subarray:", primeCount);
// }
// // // 421 Find the sum of elements greater than a given number in a subarray
// {
// let arr = [2, -1, 3, 4, -2, 1];
// let n = arr.length;
// let start = 1;
// let end = 4;
// let target = 1; 

// let sum = 0;

// for (let i = start; i <= end; i++) {
//     if (arr[i] > target) {
//         sum += arr[i];
//     }
// }

// console.log("Sum of elements greater than", target, "in subarray:", sum);
// }

// // // 422 Find the subarray with the largest sum of squares
// {
// let arr = [2, -1, 3, 4, -2, 1];
// let n = arr.length;

// let maxSumOfSquares = -Infinity;
// let startIndex = 0;
// let endIndex = 0;

// for (let i = 0; i < n; i++) {
//     let sumOfSquares = 0;
//     for (let j = i; j < n; j++) {
//         sumOfSquares += arr[j] * arr[j];  
        
//         if (sumOfSquares > maxSumOfSquares) {
//             maxSumOfSquares = sumOfSquares;
//             startIndex = i;
//             endIndex = j;
//         }
//     }
// }

// console.log("Subarray with the largest sum of squares:");
// let result = [];
// for (let i = startIndex; i <= endIndex; i++) {
//     result.push(arr[i]);
// }
// console.log(result);
// console.log("Largest sum of squares:", maxSumOfSquares);
// }

// // // 423 Find the maximum sum subarray of size k
// {
// let arr = [2, -1, 3, 4, -2, 1];
// let n = arr.length;
// let k = 3; 
// let maxSum = 0;
// for (let i = 0; i < k; i++) {
//     maxSum += arr[i];
// }
// let currentSum = maxSum;
// for (let i = k; i < n; i++) {
//     currentSum += arr[i] - arr[i - k];  
//     maxSum = Math.max(maxSum, currentSum);  
// }

// console.log("Maximum sum of subarray of size", k, "is:", maxSum);
// }
// // // 424 Find the subarray with the minimum sum
// {
// let arr = [2, -1, 3, 4, -2, 1];
// let n = arr.length;

// let minSum = arr[0];  
// let currentSum = arr[0];  
// let startIndex = 0, endIndex = 0, tempStart = 0;

// for (let i = 1; i < n; i++) {
//     if (currentSum + arr[i] < arr[i]) {
//         currentSum += arr[i]; 
//     } else {
//         currentSum = arr[i]; 
//         tempStart = i; 
//     }
//     if (currentSum < minSum) {
//         minSum = currentSum;
//         startIndex = tempStart;
//         endIndex = i;
//     }
// }

// console.log("Subarray with minimum sum:");
// let result = [];
// for (let i = startIndex; i <= endIndex; i++) {
//     result.push(arr[i]);
// }
// console.log(result);
// console.log("Minimum sum:", minSum);
// }

// // // 425 Find the maximum sum of a subarray with two even elements
// {
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let n = arr.length;

// let maxSum = -Infinity;
// let evenCount = 0;  
// let currentSum = 0;
// let start = 0;

// for (let end = 0; end < n; end++) {
//     currentSum += arr[end];
//     if (arr[end] % 2 === 0) {
//         evenCount++;
//     }
//     while (evenCount > 2) {
//         currentSum -= arr[start];
//         if (arr[start] % 2 === 0) {
//             evenCount--;
//         }
//         start++;
//     }
//     if (evenCount === 2) {
//         maxSum = Math.max(maxSum, currentSum);
//     }
// }

// console.log("Maximum sum of subarray with exactly two even elements:", maxSum);
// }

// // // 426 Find the minimum sum of a subarray with odd elements
// {
// let arr = [2, 3, 5, 7, 8, 1, 3, -1];
// let n = arr.length;

// let minSum = Infinity;
// let currentSum = 0;
// let isOddSubarray = false;

// for (let i = 0; i < n; i++) {
//     if (arr[i] % 2 !== 0) {  
//         if (!isOddSubarray) {
//             currentSum = arr[i];  
//             isOddSubarray = true;
//         } else {
//             currentSum += arr[i];  
//         }
//     } else {
//         if (isOddSubarray) {
//             minSum = Math.min(minSum, currentSum);  
//             isOddSubarray = false;  
//             currentSum = 0;
//         }
//     }
// }
// if (isOddSubarray) {
//     minSum = Math.min(minSum, currentSum);
// }

// console.log("Minimum sum of a subarray with odd elements:", minSum);
// }

// // // 427 Find the maximum sum of a subarray that doesn’t contain a number
// {
// let arr = [2, 3, 5, 7, 8, 1, 3, -1];
// let n = arr.length;
// let target = 3; 

// let maxSum = -Infinity;
// let currentSum = 0;

// for (let i = 0; i < n; i++) {
//     if (arr[i] === target) {
//         maxSum = Math.max(maxSum, currentSum);
//         currentSum = 0;
//     } else {
//         currentSum += arr[i];
//     }
// }

// maxSum = Math.max(maxSum, currentSum);

// console.log("Maximum sum of subarray that doesn't contain", target, "is:", maxSum);

// }
// // // 428 Find the sum of squares of elements in an array
// {
// let arr = [1, 2, 3, 4, 5];
// let sumOfSquares = 0;

// for (let i = 0; i < arr.length; i++) {
//     sumOfSquares += arr[i] * arr[i];  
// }

// console.log("Sum of squares of elements in the array:", sumOfSquares);
// }

// // // // 429 Find the maximum number of contiguous subarrays with sum greater than a given number
// {
// let arr = [2, 3, 5, 7, 8, 1, 3, -1];
// let n = arr.length;
// let target = 10; 

// let count = 0;
// for (let i = 0; i < n; i++) {
//     let currentSum = 0;
//     for (let j = i; j < n; j++) {
//         currentSum += arr[j];  
//         if (currentSum > target) {
//             count++;
//         }
//     }
// }

// console.log("Maximum number of contiguous subarrays with sum greater than", target, "is:", count);

// }
// // // 430 Find the subarray whose sum is equal to a given number
// {
// let arr = [2, 3, 5, 7, 8, 1, 3, -1];
// let target = 10;  
// let n = arr.length;

// let start = 0;
// let currentSum = 0;

// for (let end = 0; end < n; end++) {
//     currentSum += arr[end]; 
//     while (currentSum > target && start <= end) {
//         currentSum -= arr[start];  
//         start++;
//     }
//     if (currentSum === target) {
//         console.log("Subarray with sum equal to", target, "is:", arr.slice(start, end + 1));
//         break;  
//     }
// }
// }
// // // 431 Find the maximum product of subarrays of size k
// {
// let arr = [1, 2, 3, 4, 5];
// let k = 3;  // Size of the subarray
// let n = arr.length;

// if (n < k) {
//     console.log("Subarray size cannot be greater than the array length.");
// } else {
//     let maxProduct = -Infinity;
//     let currentProduct = 1;
//     for (let i = 0; i < k; i++) {
//         currentProduct *= arr[i];
//     }

//     maxProduct = currentProduct;
//     for (let i = k; i < n; i++) {
//         currentProduct = currentProduct / arr[i - k] * arr[i];
//         maxProduct = Math.max(maxProduct, currentProduct);
//     }

//     console.log("Maximum product of subarrays of size", k, "is:", maxProduct);
// }
// }

// // // 432 Find the subarray with the maximum sum whose sum is greater than a given value
// {
// let arr = [2, 3, 5, 7, 8, 1, 3, -1];
// let target = 10;  // The given value
// let n = arr.length;

// let start = 0;
// let currentSum = 0;
// let maxSum = -Infinity;
// let subarrayStart = -1;
// let subarrayEnd = -1;

// for (let end = 0; end < n; end++) {
//     currentSum += arr[end];  
//     while (currentSum > target) {
//         if (currentSum > maxSum) {
//             maxSum = currentSum;  
//             subarrayStart = start;
//             subarrayEnd = end;
//         }
//         currentSum -= arr[start];
//         start++;
//     }
// }

// if (subarrayStart !== -1 && subarrayEnd !== -1) {
//     console.log("Subarray with maximum sum greater than", target, "is:", arr.slice(subarrayStart, subarrayEnd + 1));
//     console.log("Maximum sum is:", maxSum);
// } else {
//     console.log("No subarray with sum greater than", target, "was found.");
// }
// }

// // // 433 Find the maximum number of pairs whose sum is divisible by 5
// {
// let arr = [2, 3, 7, 8, 12, 13, 17, 18];
// let n = arr.length;
// let remainderCount = Array(5).fill(0);

// for (let i = 0; i < n; i++) {
//     remainderCount[arr[i] % 5]++;
// }
// let pairs = 0
// pairs += Math.floor(remainderCount[0] / 2);
// pairs += Math.min(remainderCount[1], remainderCount[4]);

// pairs += Math.min(remainderCount[2], remainderCount[3]);

// console.log("Maximum number of pairs whose sum is divisible by 5:", pairs);
// }

// // // 434 Find the maximum number of contiguous subarrays divisible by a number
// {
// let arr = [2, 3, 4, 6, 1];
// let k = 5;
// let n = arr.length;
// let prefixSum = 0;
// let count = 0;
// let remainderCount = Array(k).fill(0);
// remainderCount[0] = 1; 

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];

//     let rem = prefixSum % k;
//     if (rem < 0) rem += k; 
//     count += remainderCount[rem];
//     remainderCount[rem]++;
// }

// console.log("Maximum number of contiguous subarrays with sum divisible by", k, ":", count);

// }
// // // 435 Find the largest sum of subarrays with a given sum
// {
// let arr = [1, 2, 3, 2, 1, 1, 1];
// let k = 4;
// let n = arr.length;

// let prefixSum = 0;
// let count = 0;

// let sumFreq = {}; 
// sumFreq[0] = 1; 

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];

//     if ((prefixSum - k) in sumFreq) {
//         count += sumFreq[prefixSum - k];
//     }

//     if (prefixSum in sumFreq) {
//         sumFreq[prefixSum]++;
//     } else {
//         sumFreq[prefixSum] = 1;
//     }
// }

// console.log("Number of subarrays with sum equal to", k, ":", count);
// }
// // // 436 Find the smallest subarray with sum equal to zero
// {
// let arr = [4, -1, 2, -2, 1, -1, 5];
// let n = arr.length;

// let prefixSum = 0;
// let map = {}; 
// map[0] = -1;  

// let minLength = Infinity;

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];

//     if (prefixSum in map) {
//         let length = i - map[prefixSum];
//         if (length < minLength) {
//             minLength = length;
//         }
//     } else {
//         map[prefixSum] = i;
//     }
// }

// if (minLength === Infinity) {
//     console.log("No subarray with sum 0 found.");
// } else {
//     console.log("Smallest length of subarray with sum 0:", minLength);
// }

// }
// // // 437 Find the number of odd elements in a subarray
// {
// let arr = [2, 3, 5, 6, 7, 8, 9];
// let L = 1;
// let R = 5;

// let count = 0;

// for (let i = L; i <= R; i++) {
//     if (arr[i] % 2 !== 0) {
//         count++;
//     }
// }

// console.log("Number of odd elements in subarray:", count);

// }
// // // 438 Find the largest subarray with sum divisible by a number
// {
// let arr = [2, 3, 1, 6, 4, 5];
// let k = 5;
// let n = arr.length;

// let prefixSum = 0;
// let maxLength = 0;

// let remainderIndex = {};
// remainderIndex[0] = -1; 

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let rem = prefixSum % k;
//     if (rem < 0) rem += k;

//     if (rem in remainderIndex) {
//         let length = i - remainderIndex[rem];
//         if (length > maxLength) {
//             maxLength = length;
//         }
//     } else {
//         remainderIndex[rem] = i;
//     }
// }

// console.log("Length of largest subarray with sum divisible by", k, ":", maxLength);

// }
// // // 439 Find the number of subarrays with sum equal to zero
// {
// let arr = [1, -1, 2, -2, 3, -3];
// let n = arr.length;

// let prefixSum = 0;
// let count = 0;
// let freq = {}; 
// freq[0] = 1;   

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];

//     if (prefixSum in freq) {
//         count += freq[prefixSum];
//         freq[prefixSum]++;
//     } else {
//         freq[prefixSum] = 1;
//     }
// }

// console.log("Number of subarrays with sum 0:", count);
// }

// // // 440 Find the subarray whose sum is divisible by a prime number
// {
// let arr = [4, 7, 1, 9, 3, 2];
// let p = 5;
// let n = arr.length;

// let prefixSum = 0;
// let remainderMap = {}; 
// remainderMap[0] = -1; 

// let start = -1;
// let end = -1;

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let rem = prefixSum % p;
//     if (rem < 0) rem += p;

//     if (rem in remainderMap) {
//         start = remainderMap[rem] + 1;
//         end = i;
//         break; 
//     } else {
//         remainderMap[rem] = i;
//     }
// }

// if (start !== -1) {
//     console.log("Subarray with sum divisible by", p, "found from index", start, "to", end);
//     console.log("Subarray:", arr.slice(start, end + 1));
// } else {
//     console.log("No subarray found with sum divisible by", p);
// }
// }

// // // 441 Find the subarray with the largest sum
// {
// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let n = arr.length;

// let maxSum = -Infinity;
// let currentSum = 0;
// let start = 0, end = 0, tempStart = 0;

// for (let i = 0; i < n; i++) {
//     currentSum += arr[i];

//     if (currentSum > maxSum) {
//         maxSum = currentSum;
//         start = tempStart;
//         end = i;
//     }

//     if (currentSum < 0) {
//         currentSum = 0;
//         tempStart = i + 1;
//     }
// }

// console.log("Maximum subarray sum:", maxSum);
// console.log("Subarray:", arr.slice(start, end + 1));
// }

// // // 442 Find the largest subarray with sum equal to a given number
// {
// let arr = [1, 2, 3, 4, 5, 6];
// let k = 9;
// let n = arr.length;

// let prefixSum = 0;
// let maxLength = 0;
// let start = -1, end = -1;

// let sumFreq = {}; 
// sumFreq[0] = -1;  

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];

//     if ((prefixSum - k) in sumFreq) {
//         let length = i - sumFreq[prefixSum - k];
//         if (length > maxLength) {
//             maxLength = length;
//             start = sumFreq[prefixSum - k] + 1;
//             end = i;
//         }
//     }

//     if (!(prefixSum in sumFreq)) {
//         sumFreq[prefixSum] = i; 
//     }
// }

// if (start !== -1) {
//     console.log("Largest subarray with sum", k, "found from index", start, "to", end);
//     console.log("Subarray:", arr.slice(start, end + 1));
// } else {
//     console.log("No subarray found with sum equal to", k);
// }

// }
// // // 443 Find the maximum product of a subarray
// {
// let arr = [2, 3, -2, 4, -1];
// let n = arr.length;

// let maxProduct = arr[0];
// let minProduct = arr[0];
// let result = arr[0];

// for (let i = 1; i < n; i++) {
//     if (arr[i] < 0) {
//         [maxProduct, minProduct] = [minProduct, maxProduct];
//     }

//     maxProduct = Math.max(arr[i], maxProduct * arr[i]);
//     minProduct = Math.min(arr[i], minProduct * arr[i]);

//     result = Math.max(result, maxProduct);
// }

// console.log("Maximum product of subarray:", result);
// }

// // // 444 Find the sum of elements divisible by 2
// {
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sum += arr[i];
//     }
// }

// console.log("Sum of elements divisible by 2:", sum);



// }
// // 445 Find the sum of elements divisible by 3
// {
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         sum += arr[i];
//     }
// }

// console.log("Sum of elements divisible by 3:", sum);

// }
// // // 446 Find the maximum subarray whose sum is divisible by a given number
// {
// let arr = [2, 7, 6, 1, 4, 5];
// let k = 3;
// let n = arr.length;

// let prefixSum = 0;
// let maxLength = 0;
// let remainderMap = {}; 
// remainderMap[0] = -1;  

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
    
//     let rem = prefixSum % k;
//     if (rem < 0) rem += k;

//     if (rem in remainderMap) {
//         let length = i - remainderMap[rem];
//         if (length > maxLength) {
//             maxLength = length;
//         }
//     } else {
//         remainderMap[rem] = i; // store first occurrence
//     }
// }

// console.log("Maximum length of subarray with sum divisible by", k, "is:", maxLength);

// }
// // // 447 Find the maximum subarray whose sum is greater than a given number
// {
// let arr = [1, 2, 3, 4, 5, 6];
// let k = 10;
// let n = arr.length;

// let start = 0;
// let sum = 0;
// let maxLength = 0;
// let ansStart = -1, ansEnd = -1;

// for (let end = 0; end < n; end++) {
//     sum += arr[end];

//     while (sum > k) {
//         let length = end - start + 1;
//         if (length > maxLength) {
//             maxLength = length;
//             ansStart = start;
//             ansEnd = end;
//         }
//         sum -= arr[start];
//         start++;
//     }
// }

// if (maxLength > 0) {
//     console.log("Max length subarray with sum > " + k + " is from index " + ansStart + " to " + ansEnd);
//     console.log("Subarray:", arr.slice(ansStart, ansEnd + 1));
// } else {
//     console.log("No subarray found with sum > " + k);
// }

// }

// // // 448 Find the longest subarray with sum greater than a given value
// {
// let arr = [1, -1, 5, -2, 3];
// let k = 3;
// let n = arr.length;

// let maxLen = 0;
// let ansStart = -1, ansEnd = -1;

// for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//         sum += arr[j];
//         if (sum > k && (j - i + 1) > maxLen) {
//             maxLen = j - i + 1;
//             ansStart = i;
//             ansEnd = j;
//         }
//     }
// }

// if (maxLen > 0) {
//     console.log("Longest subarray with sum > " + k + " is from index", ansStart, "to", ansEnd);
//     console.log("Subarray:", arr.slice(ansStart, ansEnd + 1));
// } else {
//     console.log("No subarray found with sum > " + k);
// }

// }
// // // 449 Find the largest subarray with sum less than or equal to a given value
// {
// let arr = [1, -1, 5, -2, 3];
// let k = 4;
// let n = arr.length;

// let maxLen = 0;
// let ansStart = -1, ansEnd = -1;

// for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//         sum += arr[j];
//         if (sum <= k) {
//             let len = j - i + 1;
//             if (len > maxLen) {
//                 maxLen = len;
//                 ansStart = i;
//                 ansEnd = j;
//             }
//         }
//     }
// }

// if (maxLen > 0) {
//     console.log("Longest subarray with sum ≤ " + k + " is from index", ansStart, "to", ansEnd);
//     console.log("Subarray:", arr.slice(ansStart, ansEnd + 1));
// } else {
//     console.log("No subarray found with sum ≤ " + k);
// }

// }
// // // 450 Find the minimum number of operations to make an array increasing
// {
// let arr = [1, 1, 1];
// let n = arr.length;

// let operations = 0;

// for (let i = 1; i < n; i++) {
//     if (arr[i] <= arr[i - 1]) {
//         let required = arr[i - 1] + 1;
//         operations += required - arr[i];
//         arr[i] = required;  // simulate the increase
//     }
// }

// console.log("Minimum operations to make array strictly increasing:", operations);

// }
// // // 451 Find the number of subarrays whose sum is greater than a given number
// {
// let arr = [1, -1, 2, 3];
// let k = 2;
// let n = arr.length;

// let count = 0;

// for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//         sum += arr[j];
//         if (sum > k) {
//             count++;
//         }
//     }
// }

// console.log("Number of subarrays with sum > " + k + " is:", count);

// }
// // // 452 Find the number of distinct pairs whose sum equals a given number
// {
// let arr = [1, 5, 7, -1, 5];
// let k = 6;

// let seen = new Set();
// let pairs = new Set();

// for (let i = 0; i < arr.length; i++) {
//     let complement = k - arr[i];

//     if (seen.has(complement)) {
//         let small = Math.min(arr[i], complement);
//         let large = Math.max(arr[i], complement);
//         pairs.add(small + "," + large);
//     }
//     seen.add(arr[i]);
// }

// console.log("Number of distinct pairs with sum", k, ":", pairs.size);

// }
// // // 453 Find the maximum subarray product
// {
// let arr = [2, 3, -2, 4];
// let n = arr.length;

// let maxEndingHere = arr[0];
// let minEndingHere = arr[0];
// let maxSoFar = arr[0];

// for (let i = 1; i < n; i++) {
//     let temp = maxEndingHere;

//     maxEndingHere = Math.max(arr[i], arr[i] * maxEndingHere, arr[i] * minEndingHere);
//     minEndingHere = Math.min(arr[i], arr[i] * temp, arr[i] * minEndingHere);

//     if (maxEndingHere > maxSoFar) {
//         maxSoFar = maxEndingHere;
//     }
// }

// console.log("Maximum subarray product is:", maxSoFar);
// }

// // // 454 Find the sum of elements greater than a given number
// {
// let arr = [5, 12, 7, 3, 18, 1];
// let k = 6;

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > k) {
//         sum += arr[i];
//     }
// }

// console.log("Sum of elements greater than", k, "is:", sum);

// }
// // // 455 Find the number of subarrays with a given sum
// {
// let arr = [1, 1, 1];
// let k = 2;
// let n = arr.length;

// let count = 0;

// for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//         sum += arr[j];
//         if (sum === k) {
//             count++;
//         }
//     }
// }

// console.log("Number of subarrays with sum =", k, "is:", count);

// }
// // // 456 Find the minimum subarray whose sum is greater than a given value
// {
// let arr = [2, 3, 1, 2, 4, 3];
// let k = 7;
// let n = arr.length;

// let minLen = n + 1;
// let sum = 0;
// let start = 0;

// for (let end = 0; end < n; end++) {
//     sum += arr[end];

//     while (sum > k) {
//         let len = end - start + 1;
//         if (len < minLen) {
//             minLen = len;
//         }
//         sum -= arr[start];
//         start++;
//     }
// }

// if (minLen === n + 1) {
//     console.log("No subarray has sum greater than", k);
// } else {
//     console.log("Minimum length subarray with sum >", k, "is:", minLen);
// }

// }
// // // 457 Find the sum of the largest and smallest elements
// {
// let arr = [4, 2, 9, 1, 7];
// let n = arr.length;

// let min = arr[0];
// let max = arr[0];

// for (let i = 1; i < n; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// let sum = min + max;
// console.log("Smallest element:", min);
// console.log("Largest element:", max);
// console.log("Sum of smallest and largest is:", sum);

// }
// // // 458 Find the smallest subarray whose sum is greater than a given number
// {
// let arr = [1, 4, 45, 6, 0, 19];
// let k = 51;
// let n = arr.length;

// let minLen = n + 1;
// let sum = 0;
// let start = 0;

// for (let end = 0; end < n; end++) {
//     sum += arr[end];

//     while (sum > k) {
//         let len = end - start + 1;
//         if (len < minLen) {
//             minLen = len;
//         }
//         sum -= arr[start];
//         start++;
//     }
// }

// if (minLen === n + 1) {
//     console.log("No subarray with sum > " + k);
// } else {
//     console.log("Length of smallest subarray with sum > " + k + " is:", minLen);
// }
// }

// // // 459 Find the sum of elements at odd indices
// {
// let arr = [10, 20, 30, 40, 50, 60];
// let n = arr.length;

// let sum = 0;

// for (let i = 1; i < n; i += 2) {
//     sum += arr[i];
// }

// console.log("Sum of elements at odd indices:", sum);
// }

// // // 460 Find the longest subarray with distinct elements
// {
// let arr = [1, 2, 3, 2, 4, 5];
// let n = arr.length;

// let set = new Set();
// let maxLen = 0;
// let start = 0;

// for (let end = 0; end < n; end++) {
//     while (set.has(arr[end])) {
//         set.delete(arr[start]);
//         start++;
//     }
//     set.add(arr[end]);
//     let len = end - start + 1;
//     if (len > maxLen) {
//         maxLen = len;
//     }
// }

// console.log("Length of longest subarray with all distinct elements:", maxLen);
// }

// // // 461 Find the count of even elements in an array
// {
// let arr = [10, 21, 4, 7, 8, 13];
// let n = arr.length;

// let count = 0;

// for (let i = 0; i < n; i++) {
//     if (arr[i] % 2 === 0) {
//         count++;
//     }
// }

// console.log("Count of even elements:", count);
// }

// // // 462 Find the count of odd elements in an array
// {
// let arr = [10, 21, 4, 7, 8, 13];
// let n = arr.length;

// let count = 0;

// for (let i = 0; i < n; i++) {
//     if (arr[i] % 2 !== 0) {
//         count++;
//     }
// }

// console.log("Count of odd elements:", count);
// }

// // // 463 Find the number of subarrays with sum equal to zero
// {
// let arr = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];
// let n = arr.length;

// let map = {}; 
// let count = 0;
// let sum = 0;

// map[0] = 1; 
// for (let i = 0; i < n; i++) {
//     sum += arr[i];

//     if (map[sum] !== undefined) {
//         count += map[sum];
//         map[sum]++;
//     } else {
//         map[sum] = 1;
//     }
// }

// console.log("Number of subarrays with sum = 0:", count);
// }

// // // 464 Find the maximum subarray with sum divisible by a number
// {
// let arr = [2, 7, 6, 1, 4, 5];
// let k = 3;
// let n = arr.length;

// let map = {}; 
// map[0] = -1; 

// let sum = 0;
// let maxLen = 0;

// for (let i = 0; i < n; i++) {
//     sum += arr[i];
//     let rem = sum % k;

//     if (rem < 0) rem += k; 

//     if (map[rem] !== undefined) {
//         let len = i - map[rem];
//         if (len > maxLen) {
//             maxLen = len;
//         }
//     } else {
//         map[rem] = i;
//     }
// }

// console.log("Maximum length of subarray with sum divisible by", k, "is:", maxLen);
// }
// // // 465 Find the subarray with maximum sum less than a given value
// {
// let arr = [1, 2, 3, 4, 5, 6];
// let k = 10;
// let n = arr.length;

// let sum = 0;
// let maxSum = -Infinity;
// let start = 0;

// for (let end = 0; end < n; end++) {
//     sum += arr[end];

//     while (sum >= k && start <= end) {
//         sum -= arr[start];
//         start++;
//     }

//     if (sum < k) {
//         maxSum = Math.max(maxSum, sum);
//     }
// }

// if (maxSum === -Infinity) {
//     console.log("No subarray with sum less than", k);
// } else {
//     console.log("Maximum sum of subarray less than", k, "is:", maxSum);
// }

// }
// // // 466 Find the largest subarray with sum equal to a given value
// {
// let arr = [1, 2, 3, 4, 5, 6];
// let k = 10;
// let n = arr.length;

// let map = {}; 
// map[0] = -1; 
// let sum = 0;
// let maxLen = 0;
// let startIndex = -1, endIndex = -1;

// for (let i = 0; i < n; i++) {
//     sum += arr[i];

//     if (map[sum - k] !== undefined) {
//         let len = i - map[sum - k];
//         if (len > maxLen) {
//             maxLen = len;
//             startIndex = map[sum - k] + 1;
//             endIndex = i;
//         }
//     }
//     if (map[sum] === undefined) {
//         map[sum] = i;
//     }
// }

// if (maxLen === 0) {
//     console.log("No subarray with sum equal to", k);
// } else {
//     console.log("Largest subarray with sum", k, "is:", arr.slice(startIndex, endIndex + 1));
// }
// }

// // // 467 Find the largest number that can be formed by array elements
// {
// let arr = [3, 30, 34, 5, 9];
// let arrStr = arr.map(String);
// arrStr.sort((a, b) => (b + a) - (a + b));

// let result = arrStr.join('');

// console.log("Largest number formed:", result);
// }

// // // 468 Find the subarray whose sum is closest to a given value
// {
// let arr = [1, 2, 3, 4, 5];
// let target = 10;
// let n = arr.length;

// let closestSum = Infinity;
// let closestSubarray = [];

// for (let start = 0; start < n; start++) {
//     let sum = 0;
//     for (let end = start; end < n; end++) {
//         sum += arr[end];
//         if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
//             closestSum = sum;
//             closestSubarray = arr.slice(start, end + 1);
//         }
//     }
// }

// console.log("Subarray whose sum is closest to", target, "is:", closestSubarray);
// }

// // // 469 Find the number of subarrays whose sum is divisible by a number
// {
// let arr = [2, 3, 1, 4, 5];
// let k = 3;
// let n = arr.length;

// let map = {};  
// map[0] = 1;    
// let sum = 0;
// let count = 0;

// for (let i = 0; i < n; i++) {
//     sum += arr[i];
//     let rem = sum % k;
//     if (rem < 0) rem += k;
//     if (map[rem] !== undefined) {
//         count += map[rem];
//     }
//     if (map[rem] === undefined) {
//         map[rem] = 0;
//     }
//     map[rem]++;
// }

// console.log("Number of subarrays with sum divisible by", k, "is:", count);
// }

// // // 470 Find the largest subarray with a sum greater than or equal to a given value
// {
// let arr = [2, 3, 1, 4, 5]; 
// let k = 7; 

// let left = 0;
// let sum = 0;
// let maxLength = 0;

// for (let right = 0; right < arr.length; right++) {
//     sum += arr[right]; 
//     while (sum >= k) {
//         maxLength = Math.max(maxLength, right - left + 1);
//         sum -= arr[left];
//         left++;
//     }
// }

// console.log(maxLength);
// }

// // // 471 Find the subarray with maximum product of a given size
// {
// let arr = [1, 2, 3, 4, 5];  
// let k = 3;  

// let product = 1;
// let maxProduct = -Infinity;  
// for (let i = 0; i < k; i++) {
//     product *= arr[i]; 
// }

// maxProduct = Math.max(maxProduct, product);  

// for (let i = k; i < arr.length; i++) {
//     product = product / arr[i - k] * arr[i];  

//     maxProduct = Math.max(maxProduct, product);  
// }

// console.log(maxProduct);  
// }

// // // 472 Find the maximum sum subarray with sum divisible by a number
// {
// let arr = [1, 2, 3, 4, 5]; 
// let n = 5;  
// let maxLength = 0; 
// let prefixSum = 0;
// let remainderMap = {};  

// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];  

//     let remainder = prefixSum % n;  
//     if (remainder < 0) {
//         remainder += n;
//     }
//     if (remainder === 0) {
//         maxLength = Math.max(maxLength, i + 1);  
//     } else if (remainderMap.hasOwnProperty(remainder)) {
//         maxLength = Math.max(maxLength, i - remainderMap[remainder]);
//     } else {
//         remainderMap[remainder] = i;
//     }
// }

// console.log(maxLength);

// }
// // // // 473 Find the number of subarrays whose sum is divisible by a prime number
// {
// let arr = [1, 2, 3, 4, 5];  
// let p = 5;  
// let count = 0;  
// let prefixSum = 0;
// let remainderMap = {0: 1}; 
// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];  

//     let remainder = prefixSum % p;
//     if (remainder < 0) {
//         remainder += p;
//     }
//     if (remainderMap[remainder] !== undefined) {
//         count += remainderMap[remainder];  
//     }
//     remainderMap[remainder] = (remainderMap[remainder] || 0) + 1;
// }

// console.log(count);  

// }
// // // 474 Find the largest sum subarray without adjacent elements
// {
// let arr = [3, 2, 5, 10, 7];  

// let include = arr[0];  
// let exclude = 0;  

// for (let i = 1; i < arr.length; i++) {
//     let newInclude = exclude + arr[i];  
//     let newExclude = Math.max(include, exclude); 
//     include = newInclude;
//     exclude = newExclude;
// }
// let result = Math.max(include, exclude);
// console.log(result);  
// }

// // // 475 Find the maximum product subarray with all elements positive
// {
// let arr = [1, 2, 3, 4, 5]; 
// let maxProduct = 0;  
// let currentProduct = 1;  

// for (let i = 0; i < arr.length; i++) {
//     currentProduct *= arr[i];  
//     if (currentProduct > maxProduct) {
//         maxProduct = currentProduct;
//     }
//     if (arr[i] === 0) {
//         currentProduct = 1;
//     }
// }

// console.log(maxProduct);  

// }
// // // 476 Find the longest subarray whose sum is greater than a given value
// {
// let arr = [1, 2, 3, 4, 5];  
// let target = 8; 

// let maxLength = 0; 
// let currentSum = 0;  
// let left = 0;  
// for (let right = 0; right < arr.length; right++) {

//     currentSum += arr[right];
//     while (currentSum > target) {
//         maxLength = Math.max(maxLength, right - left + 1);  
//         currentSum -= arr[left];
//         left++;
//     }
// }

// console.log(maxLength);  
// }

// // // 477 Find the minimum subarray with a sum greater than or equal to a given value
// {
// let arr = [1, 2, 3, 4, 5]; 
// let target = 8;  

// let minLength = Infinity;  
// let currentSum = 0;  
// let left = 0; 
// for (let right = 0; right < arr.length; right++) {
//     currentSum += arr[right];
//     while (currentSum >= target) {
//         minLength = Math.min(minLength, right - left + 1);
//         currentSum -= arr[left];
//         left++;
//     }
// }

// console.log(minLength === Infinity ? 0 : minLength);  

// }
// // // 478 Find the maximum subarray sum for a fixed number of elements
// {
// let arr = [2, 1, 5, 1, 3, 2];  
// let k = 3; 

// let maxSum = 0;
// let currentSum = 0;
// for (let i = 0; i < k; i++) {
//     currentSum += arr[i];
// }

// maxSum = currentSum;

// for (let i = k; i < arr.length; i++) {
//     currentSum += arr[i] - arr[i - k];
//     maxSum = Math.max(maxSum, currentSum);
// }

// console.log(maxSum);  

// }
// // // 479 Find the subarray whose sum is equal to a specific value
// {
// let arr = [10, 2, -2, -20, 10];  
// let target = -10; 

// let cumulativeSum = 0; 
// let hashMap = {0: -1};  
// let startIndex = -1;  
// let endIndex = -1;  
// for (let i = 0; i < arr.length; i++) {
//     cumulativeSum += arr[i];
//     if (hashMap.hasOwnProperty(cumulativeSum - target)) {
//         startIndex = hashMap[cumulativeSum - target] + 1;
//         endIndex = i;
//         break;  
//     }
//     hashMap[cumulativeSum] = i;
// }
// if (startIndex !== -1 && endIndex !== -1) {
//     console.log(`Subarray found from index ${startIndex} to ${endIndex}`);
// } else {
//     console.log("No subarray found with the given sum");
// }
// }
// // // 480 Find the minimum number of operations required to sort an array
// {
// let arr = [4, 3, 2, 1];  

// let n = arr.length;
// let sortedArr = [...arr];  
// sortedArr.sort((a, b) => a - b);  

// let visited = new Array(n).fill(false);  
// let minOps = 0;
// for (let i = 0; i < n; i++) {
//     if (visited[i] || arr[i] === sortedArr[i]) {
//         continue;
//     }
//     let cycleSize = 0;
//     let j = i;
//     while (!visited[j]) {
//         visited[j] = true;
//         j = sortedArr.indexOf(arr[j]);
//         cycleSize++;
//     }
//     if (cycleSize > 1) {
//         minOps += cycleSize - 1;
//     }
// }

// console.log(minOps); 

// }
// // // 481 Find the sum of the elements whose GCD with other elements is greater than 1
// {
// let arr = [6, 10, 15, 5, 7];  

// let sum = 0;   1
// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
// for (let i = 0; i < arr.length; i++) {
//     let isValid = false;
//     for (let j = 0; j < arr.length; j++) {
//         if (i !== j && gcd(arr[i], arr[j]) > 1) {
//             isValid = true;
//             break;  
//         }
//     }
//     if (isValid) {
//         sum += arr[i];
//     }
// }

// console.log(sum);  

// }
// // // 482 Find the subarray with the smallest sum greater than a given number
// {
// let arr = [2, 3, 1, 2, 4, 3];  
// let target = 7;  

// let n = arr.length;
// let left = 0;  
// let sum = 0;  
// let minLength = Infinity;  
// let minSum = Infinity; 
// for (let right = 0; right < n; right++) {
//     sum += arr[right];  
//     while (sum > target) {
//         if (sum < minSum || (sum === minSum && right - left + 1 < minLength)) {
//             minSum = sum;
//             minLength = right - left + 1;
//         }
//         sum -= arr[left];
//         left++;
//     }
// }

// if (minLength === Infinity) {
//     console.log("No subarray found with sum greater than the target");
// } else {
//     console.log("Smallest sum greater than the target: " + minSum);
//     console.log("Length of subarray: " + minLength);
// }
// }

// // // 483  Find the largest number that can be formed by an array of digits
// {
// let arr = [3, 30, 34, 5, 9];  
// let strArr = arr.map(num => num.toString());
// strArr.sort((a, b) => (b + a) - (a + b));
// if (strArr[0] === '0') {
//     console.log("0");
// } else {
//     console.log(strArr.join(''));
// }
// }

// // // 484 Find the number of ways to partition an array into two equal sum subarrays
// {
// let arr = [1, 2, 3, 3, 2, 1];  

// let totalSum = arr.reduce((acc, num) => acc + num, 0);  
// if (totalSum % 2 !== 0) {
//     console.log(0);  
// } else {
//     let target = totalSum / 2; 
//     let prefixSum = 0; 
//     let count = 0;
//     let prefixSumCount = { 0: 1 }; 
//     for (let i = 0; i < arr.length; i++) {
//         prefixSum += arr[i];  
//         if (prefixSum - target in prefixSumCount) {
//             count += prefixSumCount[prefixSum - target];
//         }
//         if (prefixSum in prefixSumCount) {
//             prefixSumCount[prefixSum] += 1;
//         } else {
//             prefixSumCount[prefixSum] = 1;
//         }
//     }

//     console.log(count);  
// }
// }
// // // 485 Find the maximum number of non-overlapping subarrays with a sum greater than a given value
// {
// let arr = [1, 2, 3, 4, 5, 6];  
// let target = 7; 

// let count = 0;  
// let currentSum = 0;  
// for (let i = 0; i < arr.length; i++) {
//     currentSum += arr[i];  
//     if (currentSum > target) {
//         count++;  
//         currentSum = 0;  
//     }
// }

// console.log(count);  
// }

// // // 486 Find the number of subarrays whose sum is a prime number
// {
// let arr = [1, 2, 3, 4];  
// function isPrime(num) {
//     if (num <= 1) return false;  
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) return false;  
//     }
//     return true; 
// }

// let count = 0; 
// for (let i = 0; i < arr.length; i++) {
//     let currentSum = 0;  
//     for (let j = i; j < arr.length; j++) {
//         currentSum += arr[j]; 
//         if (isPrime(currentSum)) {
//             count++;  
//         }
//     }
// }

// console.log(count);  
// }

// // // 487 Find the sum of squares of all elements in an array
// {
// let arr = [1, 2, 3, 4];  

// let sumOfSquares = 0;  
// for (let i = 0; i < arr.length; i++) {
//     sumOfSquares += arr[i] * arr[i];  
// }

// console.log(sumOfSquares);  
// }

// // // 488 Find the subarray with the maximum sum whose sum is greater than a given value
// {
// let arr = [1, 2, 3, 4, 5]; 
// let givenValue = 10;  

// let maxSum = -Infinity;  
// let currentSum = 0;  
// let start = 0;  
// for (let end = 0; end < arr.length; end++) {
//     currentSum += arr[end]; 
//     while (currentSum > givenValue) {
//         maxSum = Math.max(maxSum, currentSum); 
//         currentSum -= arr[start];  
//         start++;  
//     }
// }

// console.log(maxSum);  

// }

// // // 489 Find the minimum subarray with sum greater than a given number
// {
// let arr = [1, 2, 3, 4, 5];   
// let givenValue = 10; 

// let minLength = Infinity; 
// let currentSum = 0;  
// let start = 0;  
// for (let end = 0; end < arr.length; end++) {
//     currentSum += arr[end];  
//     while (currentSum > givenValue) {
//         minLength = Math.min(minLength, end - start + 1);  
//         currentSum -= arr[start];  
//         start++; 
//     }
// }

// console.log(minLength === Infinity ? 0 : minLength);  
// }

// // // 490 Find the subarray with the smallest sum whose sum is divisible by 5
// {
// let arr = [1, 2, 3, 4, 5]; 
// let n = arr.length;  

// let minSum = Infinity;  
// let prefixSum = 0; 
// let remainderMap = {}; 
// remainderMap[0] = -1;
// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];  
//     let remainder = prefixSum % 5;
//     if (remainder < 0) {
//         remainder += 5;  
//     }
//     if (remainderMap.hasOwnProperty(remainder)) {
//         let subarraySum = prefixSum - (remainderMap[remainder] >= 0 ? arr[remainderMap[remainder]] : 0);
//         minSum = Math.min(minSum, subarraySum);
//     } else {
//         remainderMap[remainder] = i;
//     }
// }

// console.log(minSum === Infinity ? "No subarray found" : minSum);  
// }

// // // 491 Find the maximum sum subarray of size k
// {
// let arr = [2, 1, 5, 1, 3, 2]; 
// let k = 3;  
// let n = arr.length;  
// let windowSum = 0;
// for (let i = 0; i < k; i++) {
//     windowSum += arr[i];
// }

// let maxSum = windowSum;
// for (let i = k; i < n; i++) {
//     windowSum = windowSum - arr[i - k] + arr[i];
//     maxSum = Math.max(maxSum, windowSum);
// }

// console.log(maxSum);  
// }
// // // 492 Find the longest subarray with the maximum sum
// {
// let arr = [1, -2, 3, 4, -1, 2, 1, -5, 4];  

// let n = arr.length;
// let maxSum = -Infinity; 
// let currentSum = 0;  
// let start = 0; 
// let end = 0; 
// let tempStart = 0;  
// let maxLength = 0;

// for (let i = 0; i < n; i++) {
//     currentSum += arr[i];
//     if (currentSum > maxSum) {
//         maxSum = currentSum;
//         start = tempStart;
//         end = i;
//         maxLength = end - start + 1;
//     }
//     else if (currentSum === maxSum) {
//         let currentLength = i - tempStart + 1;
//         if (currentLength > maxLength) {
//             start = tempStart;
//             end = i;
//             maxLength = currentLength;
//         }
//     }
//     if (currentSum < 0) {
//         currentSum = 0;
//         tempStart = i + 1;
//     }
// }

// console.log("Max sum:", maxSum); 
// console.log("Longest subarray with max sum:", arr.slice(start, end + 1));  
// }

// // // 493 Find the number of subarrays whose sum is greater than or equal to a given value
// {
// let arr = [1, 2, 3, 4, 5];  
// let target = 5; 
// let n = arr.length;
// let prefixSum = new Array(n + 1).fill(0);
// for (let i = 1; i <= n; i++) {
//     prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
// }
// let count = 0;
// for (let start = 0; start < n; start++) {
//     for (let end = start + 1; end <= n; end++) {
//         let sum = prefixSum[end] - prefixSum[start];
//         if (sum >= target) {
//             count++;
//         }
//     }
// }

// console.log(count); 
// }

// // // 494 Find the longest subarray whose sum is divisible by a given number
// {
// let arr = [23, 2, 4, 6, 7];
// let k = 6;  
// let n = arr.length;
// let map = {};
// let prefixSum = 0;
// let maxLength = 0;
// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let remainder = prefixSum % k;
//     if (remainder < 0) {
//         remainder += k;
//     }
//     if (remainder === 0) {
//         maxLength = i + 1; 
//     }
//     if (map[remainder] !== undefined) {
//         maxLength = Math.max(maxLength, i - map[remainder]);
//     } else {
//         map[remainder] = i;
//     }
// }

// console.log(maxLength); 

// }
// // // 495 Find the smallest subarray with a sum divisible by a given number
// {
// let arr = [23, 2, 4, 6, 7]; 
// let k = 6; 
// let n = arr.length;
// let map = {};
// let prefixSum = 0;
// let minLength = Infinity; 
// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let remainder = prefixSum % k;
//     if (remainder < 0) {
//         remainder += k;
//     }
//     if (remainder === 0) {
//         minLength = Math.min(minLength, i + 1); 
//     }
//     if (map[remainder] !== undefined) {
//         minLength = Math.min(minLength, i - map[remainder]);
//     } else {
//         map[remainder] = i;
//     }
// }

// if (minLength === Infinity) {
//     console.log(-1);  
// } else {
//     console.log(minLength); 
// }
// }

// // // 496 Find the maximum sum of subarrays whose sum is divisible by a number
// {
// let arr = [23, 2, 4, 6, 7]; 
// let k = 6;  
// let n = arr.length;
// let map = {};
// let prefixSum = 0;
// let maxSum = -Infinity;  
// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let remainder = prefixSum % k;
//     if (remainder < 0) {
//         remainder += k;
//     }
//     if (remainder === 0) {
//         maxSum = Math.max(maxSum, prefixSum);  
//     }
//     if (map[remainder] !== undefined) {
//         let subarraySum = prefixSum - map[remainder];
//         maxSum = Math.max(maxSum, subarraySum); 
//     } else {
//         map[remainder] = prefixSum;
//     }
// }

// console.log(maxSum);  
// }

// // // 497 Find the subarray whose sum is closest to a given target value
// {
// let arr = [1, 2, 3, 4, 5]; 
// let target = 11; 

// let n = arr.length;
// let closestSum = Number.MAX_VALUE; 
// let closestStart = -1, closestEnd = -1; 
// for (let i = 0; i < n; i++) {
//     let sum = 0; 
//     for (let j = i; j < n; j++) {
//         sum += arr[j];  
//         let diff = Math.abs(sum - target);
//         if (diff < Math.abs(closestSum - target)) {
//             closestSum = sum;
//             closestStart = i;
//             closestEnd = j;
//         }
//     }
// }

// console.log(`Subarray with the closest sum to target (${target}):`);
// console.log(`Start index: ${closestStart}, End index: ${closestEnd}`);
// console.log(`Subarray: [${arr.slice(closestStart, closestEnd + 1)}]`);
// console.log(`Sum: ${closestSum}`);

// }
// // // // 498 Find the smallest subarray whose sum is equal to a given number
// {
// let arr = [1, 2, 3, 7, 5];
// let target = 12; 

// let n = arr.length;
// let minLength = n + 1;
// let currentSum = 0;
// let start = 0;

// for (let end = 0; end < n; end++) {
//     currentSum += arr[end];
//     while (currentSum >= target) {
//         if (currentSum === target) {
//             minLength = Math.min(minLength, end - start + 1);
//         }
//         currentSum -= arr[start];
//         start++;
//     }
// }

// if (minLength === n + 1) {
//     console.log("No subarray found with the given sum.");
// } else {
//     console.log("Smallest subarray length with sum equal to", target, "is", minLength);
// }

// }
// // // 499 Find the maximum subarray sum that doesn’t contain a given element
// {

// let arr = [1, 2, -3, 4, 5];  
// let x = -3;

// let maxSum = -Infinity;
// let currSum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//         currSum = 0; // Can't include x
//         continue;
//     }

//     currSum += arr[i];

//     if (currSum > maxSum) {
//         maxSum = currSum;
//     }

//     if (currSum < 0) {
//         currSum = 0; 
//     }
// }
// }
//  console.log("Maximum Subarray Sum (excluding " + x + ") is:", maxSum);

// // // 500 Find the sum of elements of the largest subarray with an even number of elements
// {
// let arr = [1, 2, 3, 4, 5, 6]; 
// let n = arr.length;

// let maxSum = -Infinity;

// for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//         sum += arr[j];
//         let len = j - i + 1;
//         if (len % 2 === 0) {  
//             if (sum > maxSum) {
//                 maxSum = sum;
//             }
//         }
//     }
// }

// console.log("Maximum sum of even-length subarray is:", maxSum);
// }

// // // 501 Find the largest subarray with sum greater than or equal to a given number
// {
// let arr = [1, 2, 1, 0, 1, 1, 0]; 
// let k = 4;

// let n = arr.length;
// let maxLen = 0;

// for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//         sum += arr[j];
//         if (sum >= k) {
//             let len = j - i + 1;
//             if (len > maxLen) {
//                 maxLen = len;
//             }
//         }
//     }
// }

// console.log("Length of largest subarray with sum ≥", k, "is:", maxLen);
// }

// // // 502 Find the largest subarray with an odd number of elements
// {
// let arr = [1, 2, 3, 4, 5]; 
// let n = arr.length;

// let maxLen = 0;

// for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//         let len = j - i + 1;
//         if (len % 2 === 1) { 
//             if (len > maxLen) {
//                 maxLen = len;
//             }
//         }
//     }
// }

// console.log("Length of largest odd-length subarray is:", maxLen);
// }

// // // 503 Find the number of subarrays with sum greater than a given value
// {
// let arr = [1, 2, 3];  
// let k = 3;

// let n = arr.length;
// let count = 0;

// for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//         sum += arr[j];
//         if (sum > k) {
//             count++;
//         }
//     }
// }

// console.log("Number of subarrays with sum >", k, "is:", count);
// }

// // // 504 Find the subarray with the maximum product for odd elements
// {
// let arr = [3, 5, 2, 7, 1, 4, 9]; 

// let n = arr.length;
// let maxProduct = -Infinity;
// let currProduct = 1;
// let foundOdd = false;

// for (let i = 0; i < n; i++) {
//     if (arr[i] % 2 === 1) {
//         currProduct *= arr[i];
//         foundOdd = true;

//         if (currProduct > maxProduct) {
//             maxProduct = currProduct;
//         }
//     } else {
//         currProduct = 1;
//     }
// }

// if (!foundOdd) {
//     console.log("No odd elements found.");
// } else {
//     console.log("Maximum product of odd-only subarray is:", maxProduct);
// }

// }

// // // 505 Find the minimum number of swaps required to make an array increasing

// {
// let arr = [1, 5, 4, 3, 2];  
// let n = arr.length;
// let temp = [];
// for (let i = 0; i < n; i++) {
//     temp.push([arr[i], i]);
// }

// for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {
//         if (temp[i][0] > temp[j][0]) {
//             let t = temp[i];
//             temp[i] = temp[j];
//             temp[j] = t;
//         }
//     }
// }

// let visited = [];
// for (let i = 0; i < n; i++) {
//     visited.push(false);
// }

// let swaps = 0;

// for (let i = 0; i < n; i++) {
//     if (visited[i] || temp[i][1] === i) {
//         continue;
//     }

//     let cycleSize = 0;
//     let j = i;

//     while (!visited[j]) {
//         visited[j] = true;
//         j = temp[j][1];
//         cycleSize++;
//     }

//     if (cycleSize > 1) {
//         swaps += (cycleSize - 1);
//     }
// }

// console.log("Minimum swaps to make array increasing:", swaps);
// }

// // // 506 Find the largest subarray whose sum is divisible by a prime number
// {
// let arr = [1, 2, 3, 4, 5];  
// let p = 5;  

// let n = arr.length;
// let maxLength = 0;
// let prefixSum = 0;
// let remainderMap = new Map();

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];

//     let remainder = prefixSum % p;
//     if (remainder < 0) {
//         remainder += p;  
//     }

//     if (remainder === 0) {
//         maxLength = i + 1; 
//     } else if (remainderMap.has(remainder)) {
//         maxLength = Math.max(maxLength, i - remainderMap.get(remainder));
//     } else {
//         remainderMap.set(remainder, i);
//     }
// }

// console.log("Length of largest subarray whose sum is divisible by", p, "is:", maxLength);

// }
// // // 507 Find the maximum sum of a subarray with even number of elements
// {
// let arr = [1, 2, 3, 4, 5, 6];  
// let n = arr.length;
// let maxSum = -Infinity;

// for (let length = 2; length <= n; length += 2) {  
//     for (let i = 0; i <= n - length; i++) {
//         let sum = 0;
//         for (let j = i; j < i + length; j++) {
//             sum += arr[j];
//         }
//         if (sum > maxSum) {
//             maxSum = sum;
//         }
//     }
// }

// console.log("Maximum sum of subarray with even number of elements is:", maxSum);

// }
// // // 508 Find the subarray with the maximum sum whose sum is divisible by a number
// {
// let arr = [1, 2, 3, 4, 5];  
// let k = 5;  

// let n = arr.length;
// let maxSum = -Infinity; 
// let prefixSum = 0;
// let remainderMap = new Map();

// remainderMap.set(0, -1);  

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let remainder = prefixSum % k;
//     if (remainder < 0) {
//         remainder += k;
//     }
//     if (remainderMap.has(remainder)) {
//         let subarraySum = prefixSum - (remainderMap.get(remainder) >= 0 ? arr[remainderMap.get(remainder)] : 0);
//         maxSum = Math.max(maxSum, subarraySum);
//     } else {
//         remainderMap.set(remainder, i);  
//     }
// }

// console.log("Maximum sum of subarray whose sum is divisible by", k, "is:", maxSum);

// }
// // // 509 Find the smallest subarray whose sum is divisible by a prime number
// {
// let arr = [1, 2, 3, 4, 5];  
// let p = 5;  

// let n = arr.length;
// let minLength = Infinity;  
// let prefixSum = 0;
// let remainderMap = new Map();

// remainderMap.set(0, -1); 

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let remainder = prefixSum % p;
//     if (remainder < 0) {
//         remainder += p;
//     }
//     if (remainderMap.has(remainder)) {
//         let subarrayLength = i - remainderMap.get(remainder);
//         minLength = Math.min(minLength, subarrayLength);
//     } else {
//         remainderMap.set(remainder, i);  
//     }
// }

// if (minLength === Infinity) {
//     console.log("No subarray whose sum is divisible by", p);
// } else {
//     console.log("Length of the smallest subarray whose sum is divisible by", p, "is:", minLength);
// }
// }

// // // 510 Find the subarray with the smallest sum divisible by a number

// {
// let arr = [1, 2, 3, 4, 5];  
// let k = 5;  

// let n = arr.length;
// let minSum = Infinity;  
// let prefixSum = 0;
// let remainderMap = new Map();

// remainderMap.set(0, -1); 

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let remainder = prefixSum % k;
//     if (remainder < 0) {
//         remainder += k;
//     }
//     if (remainderMap.has(remainder)) {
//         let subarraySum = prefixSum - (remainderMap.get(remainder) >= 0 ? arr[remainderMap.get(remainder)] : 0);
//         minSum = Math.min(minSum, subarraySum);
//     } else {
//         remainderMap.set(remainder, i); 
//     }
// }

// if (minSum === Infinity) {
//     console.log("No subarray whose sum is divisible by", k);
// } else {
//     console.log("Smallest sum of subarray whose sum is divisible by", k, "is:", minSum);
// }
// }

// // // 512 Find the longest subarray with at most two distinct elements
// {
// let arr = [1, 2, 1, 2, 3]; 

// let n = arr.length;
// let maxLength = 0;
// let left = 0; 
// let freqMap = new Map();  

// for (let right = 0; right < n; right++) {
//     freqMap.set(arr[right], (freqMap.get(arr[right]) || 0) + 1);
//     while (freqMap.size > 2) {
//         freqMap.set(arr[left], freqMap.get(arr[left]) - 1);
//         if (freqMap.get(arr[left]) === 0) {
//             freqMap.delete(arr[left]);
//         }
//         left++;
//     }
//     maxLength = Math.max(maxLength, right - left + 1);
// }

// console.log("Length of the longest subarray with at most two distinct elements is:", maxLength);
// }

// // // 513 Find the subarray with the maximum sum less than or equal to a given number
// {
// let arr = [1, 2, 3, 4, 5];  
// let k = 8; 

// let n = arr.length;
// let maxSum = -Infinity;  
// let currentSum = 0;  
// let left = 0;  

// for (let right = 0; right < n; right++) {
//     currentSum += arr[right];  
//     while (currentSum > k && left <= right) {
//         currentSum -= arr[left];  
//         left++; 
//     }
//     if (currentSum <= k) {
//         maxSum = Math.max(maxSum, currentSum);
//     }
// }

// console.log("Maximum sum of subarray less than or equal to", k, "is:", maxSum);

// }
// // // 514 Find the longest subarray with sum equal to zero
// {
// let arr = [1, -1, 3, -3, 4, -4];  

// let n = arr.length;
// let maxLength = 0;  
// let prefixSum = 0;
// let prefixMap = new Map();  
// prefixMap.set(0, -1);

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];  
//     if (prefixMap.has(prefixSum)) {
//         let subarrayLength = i - prefixMap.get(prefixSum);
//         maxLength = Math.max(maxLength, subarrayLength);
//     } else {
//         prefixMap.set(prefixSum, i);
//     }
// }

// console.log("Length of the longest subarray with sum equal to zero is:", maxLength);
// }
// // // 516 Find the maximum number of pairs whose sum equals a given number
// {
// let arr = [1, 5, 7, 1, 5, 3];  
// let k = 6;  

// let freqMap = new Map();
// let pairCount = 0;

// for (let i = 0; i < arr.length; i++) {
//     let complement = k - arr[i];
//     if (freqMap.has(complement)) {
//         pairCount += freqMap.get(complement);  
//     }
//     freqMap.set(arr[i], (freqMap.get(arr[i]) || 0) + 1);
// }

// console.log("Maximum number of pairs whose sum equals", k, "is:", pairCount);
// }

// // // 517 Find the largest sum subarray whose sum is less than a given number
// {
// let arr = [1, 2, 3, 4, 5];  
// let k = 10;  

// let n = arr.length;
// let maxSum = 0;  
// let currentSum = 0;  
// let left = 0;  

// for (let right = 0; right < n; right++) {
//     currentSum += arr[right]; 
//     while (currentSum >= k && left <= right) {
//         currentSum -= arr[left];  
//         left++;  
//     }
//     maxSum = Math.max(maxSum, currentSum);
// }

// console.log("Largest sum of subarray whose sum is less than", k, "is:", maxSum);

// }
// // // 518 Find the minimum sum of subarray elements divisible by a number
// {
// let arr = [3, 1, 4, 2, 6];  
// let n = 5;  

// let minSum = Infinity;  
// let currentSum = 0;  
// for (let i = 0; i < arr.length; i++) {
//     currentSum = 0; 
//     for (let j = i; j < arr.length; j++) {
//         currentSum += arr[j];  
//         if (currentSum % n === 0) {
//             minSum = Math.min(minSum, currentSum);
//         }
//     }
// }

// console.log("Minimum sum of subarray elements divisible by", n, "is:", minSum);
// }
// // // 519 Find the number of contiguous subarrays that contain exactly two distinct elements
// {
// let arr = [1, 2, 1, 2, 3];  

// let n = arr.length;
// let count = 0;
// let left = 0;
// let freqMap = new Map();  
// for (let right = 0; right < n; right++) {
//     freqMap.set(arr[right], (freqMap.get(arr[right]) || 0) + 1);
//     while (freqMap.size > 2) {
//         freqMap.set(arr[left], freqMap.get(arr[left]) - 1);
//         if (freqMap.get(arr[left]) === 0) {
//             freqMap.delete(arr[left]);
//         }
//         left++;
//     }
//     if (freqMap.size === 2) {
//         count += right - left + 1;
//     }
// }

// console.log("Number of subarrays with exactly two distinct elements is:", count);
// }

// // // 520 Find the number of subarrays whose sum is greater than or equal to a prime number
// {
// let arr = [1, 2, 3, 4, 5];  
// let p = 8;  

// let n = arr.length;
// let count = 0;
// let currentSum = 0;
// let left = 0;
// for (let right = 0; right < n; right++) {
//     currentSum += arr[right];  
//     while (currentSum >= p) {
//         count += (n - right); 
//         currentSum -= arr[left];  
//         left++; 
//     }
// }

// console.log("Number of subarrays with sum greater than or equal to", p, "is:", count);
// }
// // // 521 Find the number of subarrays whose sum is equal to zero
// {
// let arr = [1, -1, 2, -2, 3, -3]; 

// let count = 0;
// let prefixSum = 0;
// let freqMap = new Map();
// freqMap.set(0, 1);
// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];  
//     if (freqMap.has(prefixSum)) {
//         count += freqMap.get(prefixSum);
//     }
//     freqMap.set(prefixSum, (freqMap.get(prefixSum) || 0) + 1);
// }

// console.log("Number of subarrays with sum equal to zero is:", count);


// }
// // 522 Find the sum of elements divisible by 3
// {


// let arr = [1, 3, 5, 6, 9, 10, 12];  

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {  
//         sum += arr[i];  
//     }
// }

// console.log("Sum of elements divisible by 3 is:", sum);
// }

// // // 523 Find the maximum subarray sum divisible by a number
// {
// let arr = [1, 2, 3, 4, 5];  
// let k = 5;  

// let n = arr.length;
// let maxSum = -Infinity;
// let prefixSum = 0;
// let freqMap = new Map();
// freqMap.set(0, -1);
// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i]; 
//     let mod = ((prefixSum % k) + k) % k;  
//     if (freqMap.has(mod)) {
//         let subarraySum = prefixSum - (freqMap.get(mod) >= 0 ? arr[freqMap.get(mod)] : 0);
//         maxSum = Math.max(maxSum, subarraySum);
//     }
//     if (!freqMap.has(mod)) {
//         freqMap.set(mod, i);
//     }
// }

// console.log("Maximum subarray sum divisible by", k, "is:", maxSum);

// }
// // // 524 Find the number of subarrays with sum equal to zero
// {
// let arr = [1, -1, 2, -2, 3, -3]; 

// let count = 0;
// let prefixSum = 0;
// let freqMap = new Map();
// freqMap.set(0, 1);
// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];  
//     if (freqMap.has(prefixSum)) {
//         count += freqMap.get(prefixSum);
//     }
//     freqMap.set(prefixSum, (freqMap.get(prefixSum) || 0) + 1);
// }

// console.log("Number of subarrays with sum equal to zero is:", count);

// }
// // // 525 Find the maximum length subarray with sum divisible by a number
// {
// let arr = [23, 2, 4, 6, 7]; 
// let k = 6; 

// let n = arr.length;
// let maxLength = 0;
// let prefixSum = 0;
// let freqMap = new Map();
// freqMap.set(0, -1);
// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];  
//     let mod = ((prefixSum % k) + k) % k;  
//     if (freqMap.has(mod)) {
//         let subarrayLength = i - freqMap.get(mod);
//         maxLength = Math.max(maxLength, subarrayLength);
//     } else {
//         freqMap.set(mod, i);
//     }
// }

// console.log("Maximum length of subarray with sum divisible by", k, "is:", maxLength);
// }

// // // 526 Find the subarray whose sum is divisible by 5
// {
// let arr = [23, 2, 4, 6, 7];  
// let k = 5;  

// let n = arr.length;
// let prefixSum = 0;
// let freqMap = new Map();
// let resultSubarray = [];
// freqMap.set(0, -1);
// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];  
//     let mod = ((prefixSum % k) + k) % k; 
//     if (freqMap.has(mod)) {
//         let start = freqMap.get(mod) + 1;
//         let end = i;
//         resultSubarray = arr.slice(start, end + 1);  
//         break; 
//     }
//     if (!freqMap.has(mod)) {
//         freqMap.set(mod, i);
//     }
// }

// if (resultSubarray.length > 0) {
//     console.log("Subarray whose sum is divisible by", k, "is:", resultSubarray);
// } else {
//     console.log("No subarray found whose sum is divisible by", k);
// }
// }
// // // 527 Find the subarray whose sum is divisible by 2
// {
// let arr = [1, 2, 3, 4, 5];  
// let k = 2;  

// let n = arr.length;
// let prefixSum = 0;
// let freqMap = new Map();
// let resultSubarray = [];
// freqMap.set(0, -1);
// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];  
//     let mod = ((prefixSum % k) + k) % k;  
//     if (freqMap.has(mod)) {
//         let start = freqMap.get(mod) + 1;
//         let end = i;
//         resultSubarray = arr.slice(start, end + 1);  
//         break; 
//     }
//     if (!freqMap.has(mod)) {
//         freqMap.set(mod, i);
//     }
// }

// if (resultSubarray.length > 0) {
//     console.log("Subarray whose sum is divisible by", k, "is:", resultSubarray);
// } else {
//     console.log("No subarray found whose sum is divisible by", k);
// }
// }

// // // 528 Find the number of subarrays with sum equal to a given value
// {
// let arr = [1, 2, 3, 4, 5];  
// let target = 5;  

// let n = arr.length;
// let prefixSum = 0;
// let count = 0;
// let freqMap = new Map();
// freqMap.set(0, 1);
// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i]; 
//     if (freqMap.has(prefixSum - target)) {
//         count += freqMap.get(prefixSum - target);
//     }
//     if (freqMap.has(prefixSum)) {
//         freqMap.set(prefixSum, freqMap.get(prefixSum) + 1);
//     } else {
//         freqMap.set(prefixSum, 1);
//     }
// }

// console.log("Number of subarrays whose sum equals", target, "is:", count);

// }
// // // 529 Find the subarray whose sum is closest to a prime number
// {

// function isPrime(num) {
//     if (num <= 1) return false; 
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) {
//             return false; 
//         }
//     }
//     return true;  
// }
// function findClosestPrimeSubarray(arr) {
//     let n = arr.length;
//     let closestPrime = -1;
//     let closestPrimeSubarray = [];
//     for (let i = 0; i < n; i++) {
//         let currentSum = 0;

//         for (let j = i; j < n; j++) {
//             currentSum += arr[j];  
//             if (isPrime(currentSum)) {
//                 if (closestPrime === -1 || Math.abs(currentSum - closestPrime) < Math.abs(currentSum - closestPrime)) {
//                     closestPrime = currentSum;
//                     closestPrimeSubarray = arr.slice(i, j + 1);
//                 }
//             }
//         }
//     }

//     return closestPrimeSubarray;
// }
// let arr = [1, 2, 3, 4, 5];
// let result = findClosestPrimeSubarray(arr);
// console.log("Subarray whose sum is closest to a prime number is:", result);

// }
// // // 530 Find the largest subarray whose sum is divisible by a prime number
// {
// let arr = [1, 2, 3, 4, 5];  
// let prime = 5;
// let n = arr.length;

// let prefixSum = 0;
// let maxLength = 0;  
// let resultSubarray = []; 
// let freqMap = new Map();
// freqMap.set(0, -1);

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i]; 
//     let mod = prefixSum % prime;
//     if (freqMap.has(mod)) {
//         let start = freqMap.get(mod) + 1; 
//         let end = i; 
//         let subarrayLength = end - start + 1;
//         if (subarrayLength > maxLength) {
//             maxLength = subarrayLength;
//             resultSubarray = arr.slice(start, end + 1); 
//         }
//     } else {
//         freqMap.set(mod, i);
//     }
// }

// console.log("Largest subarray whose sum is divisible by", prime, "is:", resultSubarray);

// }
// // // 531 Find the minimum subarray with a sum divisible by a number
// {
// let arr = [1, 2, 3, 4, 5];  
// let num = 5; 
// let n = arr.length;

// let prefixSum = 0;  
// let minLength = Infinity;  
// let resultSubarray = []; 
// let freqMap = new Map();
// freqMap.set(0, -1);
// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];  
//     let mod = prefixSum % num;
//     if (mod < 0) mod += num;  
//     if (freqMap.has(mod)) {
//         let start = freqMap.get(mod) + 1;  
//         let end = i; 
//         let subarrayLength = end - start + 1;
//         if (subarrayLength < minLength) {
//             minLength = subarrayLength;
//             resultSubarray = arr.slice(start, end + 1); 
//         }
//     } else {
//         freqMap.set(mod, i);
//     }
// }

// console.log("Minimum subarray whose sum is divisible by", num, "is:", resultSubarray);

// }
// // // // 532 Find the largest subarray with sum equal to zero
// {
// let arr = [1, -1, 3, 2, -2, -3, 3]; 
// let n = arr.length;

// let prefixSum = 0;  
// let maxLength = 0;  
// let resultSubarray = [];  
// let freqMap = new Map();
// freqMap.set(0, -1);
// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i]; 
//     if (freqMap.has(prefixSum)) {
//         let start = freqMap.get(prefixSum) + 1; 
//         let end = i;
//         let subarrayLength = end - start + 1;
//         if (subarrayLength > maxLength) {
//             maxLength = subarrayLength;
//             resultSubarray = arr.slice(start, end + 1);  
//         }
//     } else {
//         freqMap.set(prefixSum, i);
//     }
// }

// console.log("Largest subarray with sum equal to zero is:", resultSubarray);
// }

// // // 533 Find the sum of elements whose GCD is greater than a given number 
// {
// let arr = [12, 15, 20, 25, 30]; 
// let num = 5;  
// let n = arr.length;

// let sum = 0;  
// let gcd = (a, b) => {
//     while (b != 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// };
// for (let i = 0; i < n; i++) {
//     let currentGCD = gcd(arr[i], num);  
//     if (currentGCD > num) {
//         sum += arr[i];  
//     }
// }

// console.log("Sum of elements whose GCD is greater than", num, "is:", sum);

// }
// // // 534 Find the subarray with the smallest sum
// {
// let arr = [1, -2, 3, -4, 5];  
// let n = arr.length;

// let prefixSum = 0;  
// let minSum = Infinity; 
// let resultSubarray = []; 
// let freqMap = new Map();
// freqMap.set(0, -1);

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];  
//     if (freqMap.has(prefixSum)) {
//         let start = freqMap.get(prefixSum) + 1;  
//         let end = i;  
//         let subarraySum = prefixSum - (freqMap.get(prefixSum) === -1 ? 0 : arr[freqMap.get(prefixSum)]);
//         if (subarraySum < minSum) {
//             minSum = subarraySum;
//             resultSubarray = arr.slice(start, end + 1);  
//         }
//     } else {
//         freqMap.set(prefixSum, i);
//     }
// }

// console.log("Subarray with the smallest sum is:", resultSubarray);
// }

// // // 535 Find the number of ways to partition an array into three subarrays
// {
// let arr = [1, 2, 3, 4, 5];  
// let n = arr.length;
// let totalWays = 0; 
// let prefixSum = new Array(n).fill(0);
// prefixSum[0] = arr[0];
// for (let i = 1; i < n; i++) {
//     prefixSum[i] = prefixSum[i - 1] + arr[i];
// }
// for (let i = 0; i < n - 2; i++) {  
//     for (let j = i + 1; j < n - 1; j++) {  
//         let sum1 = prefixSum[i];  
//         let sum2 = prefixSum[j] - prefixSum[i]; 
//         let sum3 = prefixSum[n - 1] - prefixSum[j];  
//         totalWays++;
//     }
// }

// console.log("Number of ways to partition the array into three subarrays is:", totalWays);
// }
// // //  536 Find the maximum subarray with the largest product
// {
// let arr = [2, -3, 4, -5, -2];  
// let n = arr.length;

// let maxProdEndingHere = arr[0];
// let minProdEndingHere = arr[0];
// let maxSoFar = arr[0];

// let start = 0;
// let end = 0;
// let tempStart = 0;

// for (let i = 1; i < n; i++) {
//     let curr = arr[i];
//     if (curr < 0) {
//         let temp = maxProdEndingHere;
//         maxProdEndingHere = minProdEndingHere;
//         minProdEndingHere = temp;
//     }
//     if (curr > maxProdEndingHere * curr) {
//         maxProdEndingHere = curr;
//         tempStart = i;
//     } else {
//         maxProdEndingHere = maxProdEndingHere * curr;
//     }

//     if (curr < minProdEndingHere * curr) {
//         minProdEndingHere = curr;
//     } else {
//         minProdEndingHere = minProdEndingHere * curr;
//     }
//     if (maxProdEndingHere > maxSoFar) {
//         maxSoFar = maxProdEndingHere;
//         start = tempStart;
//         end = i;
//     }
// }

// let resultSubarray = [];
// for (let i = start; i <= end; i++) {
//     resultSubarray.push(arr[i]);
// }

// console.log("Subarray with the maximum product is:", resultSubarray);
// console.log("Maximum product is:", maxSoFar);
// }

// // // 537 Find the subarray whose sum is divisible by 3
// {
// let arr = [2, 4, 1, 6, 3];  
// let n = arr.length;

// let prefixSum = 0;
// let remainderIndex = new Map();  
// remainderIndex.set(0, -1);  

// let start = -1;
// let end = -1;

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let remainder = prefixSum % 3;

//     if (remainderIndex.has(remainder)) {
//         start = remainderIndex.get(remainder) + 1;
//         end = i;
//         break;  
//     } else {
//         remainderIndex.set(remainder, i);
//     }
// }

// if (start !== -1 && end !== -1) {
//     let result = [];
//     for (let i = start; i <= end; i++) {
//         result.push(arr[i]);
//     }
//     console.log("Subarray whose sum is divisible by 3:", result);
// } else {
//     console.log("No subarray found whose sum is divisible by 3.");
// }
// }

// // // 538 Find the maximum sum of two subarrays whose sum is greater than a given number
// {
// let arr = [1, 3, 2, 6, 4, 5];  
// let n = arr.length;
// let k = 10; 
// let prefixSum = new Array(n).fill(0);
// prefixSum[0] = arr[0];
// for (let i = 1; i < n; i++) {
//     prefixSum[i] = prefixSum[i - 1] + arr[i];
// }

// let maxSum = -1;
// for (let i = 0; i < n - 1; i++) {
//     for (let j = i + 1; j < n; j++) {
//         for (let x = 0; x <= i; x++) {
//             let sum1 = prefixSum[i];
//             if (x > 0) sum1 -= prefixSum[x - 1];

//             for (let y = j; y < n; y++) {
//                 let sum2 = prefixSum[y] - prefixSum[j - 1];

//                 let total = sum1 + sum2;
//                 if (total > k && total > maxSum) {
//                     maxSum = total;
//                 }
//             }
//         }
//     }
// }

// if (maxSum !== -1) {
//     console.log("Maximum sum of two subarrays greater than", k, "is:", maxSum);
// } else {
//     console.log("No two subarrays found with sum greater than", k);
// }

// }
// // // 539 Find the sum of elements divisible by 7
// {
// let arr = [14, 3, 21, 10, 28, 5, 7]; 
// let n = arr.length;

// let sum = 0;

// for (let i = 0; i < n; i++) {
//     if (arr[i] % 7 === 0) {
//         sum += arr[i];
//     }
// }

// console.log("Sum of elements divisible by 7 is:", sum);

// }
// // // 540 Find the number of subarrays whose sum is divisible by a given number
// {
// let arr = [4, 5, 0, -2, -3, 1];  
// let n = arr.length;
// let k = 5;  

// let prefix = 0;
// let map = new Map();
// map.set(0, 1);  

// let count = 0;

// for (let i = 0; i < n; i++) {
//     prefix += arr[i];

//     let rem = prefix % k;

//     if (rem < 0) rem += k;

//     if (map.has(rem)) {
//         count += map.get(rem);
//         map.set(rem, map.get(rem) + 1);
//     } else {
//         map.set(rem, 1);
//     }
// }

// console.log("Number of subarrays whose sum is divisible by", k, "is:", count);
// }

// // // 541 Find the number of ways to partition an array into subarrays
// {
// let arr = [1, 2, 3];
// let n = arr.length;
// let ways = 1;
// for (let i = 0; i < n - 1; i++) {
//     ways *= 2;
// }

// console.log("Number of ways to partition the array into subarrays:", ways);
    
// }

// // // 542 Find the subarray with the largest sum that is divisible by a number
// {
// let arr = [2, 3, 1, 6, 7];  
// let n = arr.length;
// let k = 5;  

// let prefix = 0;
// let map = new Map(); 
// map.set(0, -1);  

// let maxLen = 0;
// let maxSum = 0;
// let start = -1;
// let end = -1;

// for (let i = 0; i < n; i++) {
//     prefix += arr[i];
//     let rem = prefix % k;
//     if (rem < 0) rem += k;

//     if (map.has(rem)) {
//         let j = map.get(rem);
//         let length = i - j;
//         let subSum = prefix;
//         if (j >= 0) subSum -= arr.slice(0, j + 1).reduce((a, b) => a + b, 0);

//         if (subSum > maxSum || (subSum === maxSum && length > maxLen)) {
//             maxSum = subSum;
//             maxLen = length;
//             start = j + 1;
//             end = i;
//         }
//     } else {
//         map.set(rem, i);
//     }
// }

// if (start !== -1) {
//     let subarray = [];
//     for (let i = start; i <= end; i++) {
//         subarray.push(arr[i]);
//     }
//     console.log("Subarray with largest sum divisible by", k, "is:", subarray);
//     console.log("Sum:", maxSum);
// } else {
//     console.log("No subarray found whose sum is divisible by", k);
// }

// }
// // // 543 Find the largest subarray whose sum is greater than a given number
// {
// let arr = [1, 2, 3, 4, 5, 6];  
// let n = arr.length;
// let K = 10;  

// let maxLen = 0;
// let start = -1;
// let end = -1;

// for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//         sum += arr[j];
//         if (sum > K) {
//             let length = j - i + 1;
//             if (length > maxLen) {
//                 maxLen = length;
//                 start = i;
//                 end = j;
//             }
//         }
//     }
// }

// if (maxLen > 0) {
//     let result = [];
//     for (let i = start; i <= end; i++) {
//         result.push(arr[i]);
//     }
//     console.log("Largest subarray with sum > " + K + " is:", result);
//     console.log("Length:", maxLen);
// } else {
//     console.log("No subarray found with sum > " + K);
// }
// }
// // // 544 Find the number of ways to partition an array into two parts with equal sum 
// {
// let arr = [1, 2, 3, 3];
// let n = arr.length;

// let totalSum = 0;
// for (let i = 0; i < n; i++) {
//     totalSum += arr[i];
// }

// let count = 0;

// if (totalSum % 2 === 0) {
//     let leftSum = 0;
//     for (let i = 0; i < n - 1; i++) {
//         leftSum += arr[i];
//         if (leftSum === totalSum / 2) {
//             count++;
//         }
//     }
// }

// console.log("Number of ways to partition into two parts with equal sum:", count);

// }
// // // 545 Find the maximum subarray with sum greater than zero
// {
// let arr = [-2, -3, 4, -1, -2, 1, 5, -3];  
// let n = arr.length;

// let maxSum = 0;
// let currSum = 0;
// let start = 0;
// let tempStart = 0;
// let end = -1;

// for (let i = 0; i < n; i++) {
//     currSum += arr[i];
    
//     if (currSum > maxSum) {
//         maxSum = currSum;
//         start = tempStart;
//         end = i;
//     }

//     if (currSum <= 0) {
//         currSum = 0;
//         tempStart = i + 1;
//     }
// }

// if (maxSum > 0) {
//     let result = [];
//     for (let i = start; i <= end; i++) {
//         result.push(arr[i]);
//     }
//     console.log("Maximum subarray with sum > 0 is:", result);
//     console.log("Sum:", maxSum);
// } else {
//     console.log("No subarray with sum greater than 0 found.");
// }
// }

// // // 546 Find the number of subarrays whose sum is greater than a prime number
// {
// let arr = [1, 2, 3, 4, 5];
// let n = arr.length;
// let p = 10;  

// let count = 0;
// let prefix = 0;
// for (let i = 0; i < n; i++) {
//     prefix = 0;
//     for (let j = i; j < n; j++) {
//         prefix += arr[j];
//         if (prefix > p) {
//             count++;
//         }
//     }
// }

// console.log("Number of subarrays whose sum is greater than", p, "is:", count);
// }

// // // 547 Find the largest subarray that satisfies a given condition
// {
// let arr = [1, 2, 3, 4, 5, 6];  
// let n = arr.length;
// let K = 10; 

// let maxLen = 0;
// let sum = 0;
// let start = 0;

// for (let end = 0; end < n; end++) {
//     sum += arr[end];
//     while (sum > K) {
//         maxLen = Math.max(maxLen, end - start + 1);
//         sum -= arr[start]; 
//         start++;
//     }
// }

// console.log("Largest subarray length with sum greater than", K, "is:", maxLen);
// }

// // //  548 Find the sum of elements divisible by 5 in an array
// {
// let arr = [5, 10, 15, 20, 25, 30, 7];  
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 === 0) {
//         sum += arr[i];
//     }
// }

// console.log("Sum of elements divisible by 5 is:", sum);
// }
 
// // // 549 Find the largest subarray that contains exactly k distinct elements
// {
// let arr = [1, 2, 1, 2, 3];  
// let k = 2; 

// let start = 0;
// let maxLen = 0;
// let map = new Map();

// for (let end = 0; end < arr.length; end++) {
//     map.set(arr[end], (map.get(arr[end]) || 0) + 1);
//     while (map.size > k) {
//         map.set(arr[start], map.get(arr[start]) - 1);
//         if (map.get(arr[start]) === 0) {
//             map.delete(arr[start]);
//         }
//         start++;
//     }
//     if (map.size === k) {
//         maxLen = Math.max(maxLen, end - start + 1);
//     }
// }

// console.log("Largest subarray with exactly", k, "distinct elements has length:", maxLen);
// }

// // // 550 Find the largest subarray with a given sum
// {
// let arr = [1, 2, 3, 4, 5];  
// let targetSum = 9;  

// let prefixSum = 0;
// let map = new Map();
// map.set(0, -1);
// let maxLen = 0;

// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];
//     if (map.has(prefixSum - targetSum)) {
//         let startIdx = map.get(prefixSum - targetSum);
//         maxLen = Math.max(maxLen, i - startIdx);
//     }
//     if (!map.has(prefixSum)) {
//         map.set(prefixSum, i);
//     }
// }

// console.log("Largest subarray with sum", targetSum, "has length:", maxLen);
// }

// // // 551 Find the number of subarrays whose sum is divisible by a given prime number
// {
// let arr = [2, 3, 1, 6, 7];  
// let prime = 5;  

// let count = 0;
// let prefixSum = 0;
// let map = new Map();
// map.set(0, 1);  

// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];
//     let rem = prefixSum % prime;
//     if (rem < 0) rem += prime;
//     if (map.has(rem)) {
//         count += map.get(rem);
//     }
//     map.set(rem, (map.get(rem) || 0) + 1);
// }

// console.log("Number of subarrays whose sum is divisible by", prime, "is:", count);
// }
// // // 552 Find the maximum sum subarray whose sum is divisible by a number
// {
// let arr = [2, 3, 1, 6, 7];  
// let num = 5; 

// let prefixSum = 0;
// let maxSum = -Infinity
// let map = new Map();
// map.set(0, -1);  

// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];
//     let rem = prefixSum % num;
//     if (rem < 0) rem += num;
//     if (map.has(rem)) {
//         let prevIdx = map.get(rem);
//         let subarraySum = prefixSum - (map.has(rem) ? (map.get(rem) ? map.get(rem) : 0) : 0);
//         maxSum = Math.max(maxSum, subarraySum);
//     }
//     if (!map.has(rem)) {
//         map.set(rem, prefixSum);
//     }
// }

// console.log("Maximum sum subarray whose sum is divisible by", num, "is:", maxSum);
// }

// // // 553 Find the subarray with the largest sum divisible by a prime number
// {
// let arr = [2, 3, 1, 6, 7]; 
// let prime = 5; 

// let prefixSum = 0;
// let maxSum = -Infinity; 
// let map = new Map();
// map.set(0, -1); 

// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];
//     let rem = prefixSum % prime;
//     if (rem < 0) rem += prime;
//     if (map.has(rem)) {
//         let prevIdx = map.get(rem);
//         let subarraySum = prefixSum - (map.has(rem) ? (map.get(rem) ? map.get(rem) : 0) : 0);
//         maxSum = Math.max(maxSum, subarraySum);
//     }
//     if (!map.has(rem)) {
//         map.set(rem, prefixSum);
//     }
// }

// console.log("Subarray with the largest sum divisible by", prime, "is:", maxSum);
// }

// // // 554  Find the subarray whose sum is divisible by a prime number
// {
// let arr = [2, 3, 1, 6, 7];  
// let prime = 5;  

// let prefixSum = 0;
// let map = new Map();
// map.set(0, -1);

// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];
//     let rem = prefixSum % prime;
//     if (rem < 0) rem += prime;
//     if (map.has(rem)) {
//         let startIdx = map.get(rem);
//         let subarray = arr.slice(startIdx + 1, i + 1);
//         console.log("Subarray whose sum is divisible by", prime, "is:", subarray);
//         break; 
//     }
//     if (!map.has(rem)) {
//         map.set(rem, i);
//     }
// }

// }
// // // 555 Find the largest sum subarray with at most two distinct elements
// {
// let arr = [1, 2, 1, 2, 3]; 

// let left = 0;  
// let maxSum = -Infinity; 
// let currentSum = 0;  
// let map = new Map(); 
// for (let right = 0; right < arr.length; right++) {

//     currentSum += arr[right];
//     map.set(arr[right], (map.get(arr[right]) || 0) + 1);
//     while (map.size > 2) {
//         let leftElement = arr[left];
//         map.set(leftElement, map.get(leftElement) - 1);
//         if (map.get(leftElement) === 0) {
//             map.delete(leftElement);
//         }
//         currentSum -= arr[left];
//         left++;
//     }
//     maxSum = Math.max(maxSum, currentSum);
// }

// console.log("Largest sum subarray with at most two distinct elements is:", maxSum);
// }

// // // 556 Find the largest sum subarray with exactly three distinct elements
// {
// let arr = [1, 2, 1, 2, 3, 4]; 

// let left = 0;
// let maxSum = -Infinity;  
// let currentSum = 0; 
// let map = new Map();

// for (let right = 0; right < arr.length; right++) {
//     currentSum += arr[right];
//     map.set(arr[right], (map.get(arr[right]) || 0) + 1);
//     while (map.size > 3) {
//         let leftElement = arr[left];
//         map.set(leftElement, map.get(leftElement) - 1);
//         if (map.get(leftElement) === 0) {
//             map.delete(leftElement);
//         }
//         currentSum -= arr[left];
//         left++;
//     }
//     if (map.size === 3) {
//         maxSum = Math.max(maxSum, currentSum);
//     }
// }

// console.log("Largest sum subarray with exactly three distinct elements is:", maxSum);

// }
// // // 557 Find the largest subarray whose sum is less than a given number
// {
// let arr = [1, 2, 3, 4, 5]; 
// let target = 10;  

// let left = 0;  
// let currentSum = 0;  
// let maxLength = 0;  

// for (let right = 0; right < arr.length; right++) {
//     currentSum += arr[right];
//     while (currentSum >= target) {
//         currentSum -= arr[left];
//         left++;
//     }
//     maxLength = Math.max(maxLength, right - left + 1);
// }

// console.log("Largest subarray with sum less than", target, "is of length:", maxLength);

// }
// // // 558 Find the number of subarrays whose sum is divisible by a prime number
// {
// let arr = [2, 3, 1, 6, 7];  
// let prime = 5;  

// let prefixSum = 0;
// let count = 0;  
// let map = new Map();
// map.set(0, 1);  

// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];
//     let rem = prefixSum % prime;
//     if (rem < 0) rem += prime;
//     if (map.has(rem)) {
//         count += map.get(rem); 
//     }
//     map.set(rem, (map.get(rem) || 0) + 1);
// }

// console.log("Number of subarrays whose sum is divisible by", prime, "is:", count);
// }

// // // 559 Find the maximum sum of subarrays whose sum is divisible by a prime number
// {
// let arr = [2, 3, 1, 6, 7];  
// let prime = 5;  

// let prefixSum = 0;
// let maxSum = -Infinity;  
// let map = new Map();
// map.set(0, -1); 

// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];
//     let rem = prefixSum % prime;
//     if (rem < 0) rem += prime;
//     if (map.has(rem)) {
//         let startIdx = map.get(rem);
//         let subarraySum = prefixSum - (startIdx === -1 ? 0 : arr.slice(0, startIdx + 1).reduce((a, b) => a + b, 0));
//         maxSum = Math.max(maxSum, subarraySum);
//     }
//     if (!map.has(rem)) {
//         map.set(rem, i);
//     }
// }

// console.log("Maximum sum of subarray whose sum is divisible by", prime, "is:", maxSum);
// }

// // // 560 Find the subarray with the largest sum divisible by a number
// {
// let arr = [2, 3, 1, 6, 7]; 
// let num = 5; 

// let prefixSum = 0;
// let maxSum = -Infinity; 
// let startIdx = -1;  
// let endIdx = -1;
// let map = new Map();
// map.set(0, -1);  

// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];
//     let rem = prefixSum % num;
//     if (rem < 0) rem += num;
//     if (map.has(rem)) {
//         let start = map.get(rem);
//         let subarraySum = prefixSum - (start === -1 ? 0 : arr.slice(0, start + 1).reduce((a, b) => a + b, 0));
//         if (subarraySum > maxSum) {
//             maxSum = subarraySum;
//             startIdx = start + 1; 
//             endIdx = i; 
//         }
//     }
//     if (!map.has(rem)) {
//         map.set(rem, i);
//     }
// }

// console.log("Subarray with the largest sum divisible by", num, "is:", arr.slice(startIdx, endIdx + 1));
// console.log("Largest sum:", maxSum);

// }
// // // 561 Find the smallest subarray whose sum is divisible by 3
// {
// let arr = [2, 3, 1, 6, 7];  
// let num = 3;  
// let prefixSum = 0;
// let minLength = Infinity; 
// let startIdx = -1;  
// let endIdx = -1;  
// let map = new Map();
// map.set(0, -1);  

// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];
//     let rem = prefixSum % num;
//     if (rem < 0) rem += num;
//     if (map.has(rem)) {
//         let start = map.get(rem);
//         let subarrayLength = i - start;
//         if (subarrayLength < minLength) {
//             minLength = subarrayLength;
//             startIdx = start + 1;  
//             endIdx = i; 
//         }
//     }
//     if (!map.has(rem)) {
//         map.set(rem, i);
//     }
// }

// if (minLength === Infinity) {
//     console.log("No subarray found whose sum is divisible by", num);
// } else {
//     console.log("Smallest subarray whose sum is divisible by", num, "is:", arr.slice(startIdx, endIdx + 1));
//     console.log("Subarray length:", minLength);
// }
// }

// // // 562 Find the sum of elements whose GCD is greater than a number
// {
// let arr = [12, 15, 18, 20, 25];  
// let number = 5;  

// let sum = 0;  
// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
// for (let i = 0; i < arr.length; i++) {
//     let currentGCD = gcd(arr[i], number);
//     if (currentGCD > number) {
//         sum += arr[i];  
//     }
// }

// console.log("Sum of elements whose GCD is greater than", number, "is:", sum);
// }

// // // 563 Find the maximum product of subarrays of size k
// {
// let arr = [1, 2, 3, 4, 5]; 
// let k = 3;  

// let maxProduct = -Infinity;  
// let product = 1;  

// for (let i = 0; i < k; i++) {
//     product *= arr[i];
// }

// maxProduct = product;  
// for (let i = k; i < arr.length; i++) {
//     product = product / arr[i - k] * arr[i];  
//     maxProduct = Math.max(maxProduct, product); 
// }

// console.log("Maximum product of subarrays of size", k, "is:", maxProduct);
// }

// // // 564 Find the subarray whose sum is divisible by 7
// {
// let arr = [2, 3, 4, 1, 6, 7, 5];  
// let divisor = 7; 

// let prefixSum = 0;
// let map = new Map();
// map.set(0, -1);  
// let startIdx = -1;
// let endIdx = -1;

// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];
//     let remainder = prefixSum % divisor;
//     if (remainder < 0) remainder += divisor;
//     if (map.has(remainder)) {
//         startIdx = map.get(remainder) + 1;  
//         endIdx = i; 
//         break;
//     }
//     if (!map.has(remainder)) {
//         map.set(remainder, i);
//     }
// }

// if (startIdx === -1 && endIdx === -1) {
//     console.log("No subarray found whose sum is divisible by", divisor);
// } else {
//     console.log("Subarray whose sum is divisible by", divisor, "is:", arr.slice(startIdx, endIdx + 1));
// }
// }
// // // 565 Find the maximum sum subarray with exactly k distinct elements
// {
// let arr = [1, 2, 1, 2, 3]; 
// let k = 2;  
// let maxSum = -Infinity; 
// let windowSum = 0; 
// let map = new Map(); 
// let left = 0; 
// for (let right = 0; right < arr.length; right++) {
//     windowSum += arr[right];
//     map.set(arr[right], (map.get(arr[right]) || 0) + 1);
//     while (map.size > k) {
//         windowSum -= arr[left];
//         map.set(arr[left], map.get(arr[left]) - 1);
//         if (map.get(arr[left]) === 0) {
//             map.delete(arr[left]);
//         }
        
//         left++; 
//     }
//     if (map.size === k) {
//         maxSum = Math.max(maxSum, windowSum);
//     }
// }

// console.log("Maximum sum of subarray with exactly", k, "distinct elements is:", maxSum);
// }

// // // 566 Find the number of contiguous subarrays with sum equal to zero
// {
// let arr = [1, -1, 2, -2, 3, -3, 4]; 

// let prefixSum = 0;
// let count = 0;
// let map = new Map();
// map.set(0, 1);

// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];
//     if (map.has(prefixSum)) {
//         count += map.get(prefixSum);  
//     }
//     map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
// }

// console.log("Number of subarrays with sum equal to zero is:", count);
// }
// // // 567 Find the sum of elements divisible by a given prime number
// {
// let arr = [10, 25, 30, 7, 40, 60]; 
// let prime = 5;

// let sum = 0; 
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % prime === 0) {
//         sum += arr[i]; 
//     }
// }

// console.log("Sum of elements divisible by", prime, "is:", sum);

// }
// // // 568 Find the subarray with the largest sum divisible by 3
// {
// let arr = [1, 2, 3, 4, 5, 6, 7];  

// let prefixSum = 0;
// let maxSum = -Infinity;  
// let map = new Map(); 
// map.set(0, -1);  

// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];
//     let remainder = prefixSum % 3;
//     if (remainder < 0) remainder += 3;
//     if (map.has(remainder)) {
//         let subarraySum = prefixSum - (map.get(remainder) === -1 ? 0 : map.get(remainder));
//         maxSum = Math.max(maxSum, subarraySum);
//     } else {
//         map.set(remainder, prefixSum);
//     }
// }

// console.log("Largest sum of subarray divisible by 3 is:", maxSum);

// }
// // // // 569 Find the subarray whose sum is closest to a given value
// {
// let arr = [1, 2, 3, 4, 5, 6]; 
// let target = 10;  

// let closestSum = Infinity; 
// let closestSubarray = [];  
// let currentSum = 0;  
// let start = 0;  

// for (let end = 0; end < arr.length; end++) {
//     currentSum += arr[end];
//     if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
//         closestSum = currentSum;
//         closestSubarray = arr.slice(start, end + 1);
//     }
//     while (currentSum > target && start <= end) {
//         currentSum -= arr[start];
//         start++;
//     }
// }

// console.log("Closest sum to the target is:", closestSum);
// console.log("Subarray with the closest sum is:", closestSubarray);

// }
// // // 570 Find the subarray whose sum is divisible by 2
// {
// let arr = [1, 2, 3, 4, 5, 6];  

// let prefixSum = 0;
// let map = new Map();  
// let subarray = [];  

// map.set(0, -1);

// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];
//     let remainder = prefixSum % 2;
//     if (map.has(remainder)) {
//         let startIndex = map.get(remainder) + 1;
//         subarray = arr.slice(startIndex, i + 1); 
//         break; 
//     }
//     map.set(remainder, i);
// }

// console.log("Subarray whose sum is divisible by 2:", subarray);

// }
// // // 571 Find the number of subarrays whose sum is divisible by a given prime
// {
// let arr = [1, 2, 3, 4, 5, 6];  
// let prime = 3;

// let prefixSum = 0;
// let count = 0;
// let map = new Map(); 
// map.set(0, 1); 

// for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];
//     let remainder = prefixSum % prime;
//     if (remainder < 0) remainder += prime;
//     if (map.has(remainder)) {
//         count += map.get(remainder); 
//     }
//     map.set(remainder, (map.get(remainder) || 0) + 1);
// }

// console.log("Number of subarrays whose sum is divisible by", prime, "is:", count);

// }
// // // 572 Find the sum of the largest subarray that satisfies a condition
// {
// let arr = [1, 2, 3, 4, 5, 6];  
// let maxSum = 10; 

// let currentSum = 0;
// let start = 0;
// let largestSum = 0;

// for (let end = 0; end < arr.length; end++) {
//     currentSum += arr[end];
//     while (currentSum > maxSum && start <= end) {
//         currentSum -= arr[start];
//         start++;
//     }
//     largestSum = Math.max(largestSum, currentSum);
// }

// console.log("Sum of the largest subarray that satisfies the condition is:", largestSum);
// }

// // // 573 Find the sum of the largest subarray that satisfies a condition
// {
// let arr = [1, 2, 3, 4, 5, 6];  
// let maxSum = 10; 

// let currentSum = 0;
// let start = 0;
// let largestSum = 0;

// for (let end = 0; end < arr.length; end++) {
//     currentSum += arr[end];
//     while (currentSum > maxSum && start <= end) {
//         currentSum -= arr[start];
//         start++;
//     }
//     largestSum = Math.max(largestSum, currentSum);
// }

// console.log("Sum of the largest subarray that satisfies the condition is:", largestSum);

// }
// // // 574 Find the number of contiguous subarrays that sum to zero
// {
// let arr = [1, -1, 2, -2, 3, -3];
// let n = arr.length;

// let prefixSum = 0;
// let countZeroSubarrays = 0;
// let prefixSumFrequency = [];
// prefixSumFrequency[0] = 1;

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     if (prefixSumFrequency[prefixSum] !== undefined) {
//         countZeroSubarrays += prefixSumFrequency[prefixSum];
//     }
//     if (prefixSumFrequency[prefixSum] === undefined) {
//         prefixSumFrequency[prefixSum] = 0;
//     }
//     prefixSumFrequency[prefixSum]++;
// }

// console.log("Number of contiguous subarrays that sum to zero:", countZeroSubarrays);
// }
// // //  575 Find the number of pairs in an array whose sum is divisible by a number
// {
// let arr = [1, 2, 3, 4, 5, 10, 6];
// let k = 5;
// let n = arr.length;

// let remainderCount = new Array(k).fill(0);
// let countPairs = 0;
// for (let i = 0; i < n; i++) {
//     let remainder = arr[i] % k;
//     if (remainder < 0) remainder += k; 
//     remainderCount[remainder]++;
// }
// countPairs += (remainderCount[0] * (remainderCount[0] - 1)) / 2; 
// for (let r = 1; r <= Math.floor(k / 2); r++) {
//     if (r === k - r) {
//         countPairs += (remainderCount[r] * (remainderCount[r] - 1)) / 2;
//     } else {
//         countPairs += remainderCount[r] * remainderCount[k - r];
//     }
// }

// console.log("Number of pairs whose sum is divisible by " + k + ":", countPairs);
// }
// // // 576 Find the sum of elements divisible by 3 in an array
// {
// let arr = [1, 3, 6, 9, 11, 12, 15]; // Example array
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         sum += arr[i];
//     }
// }

// console.log("Sum of elements divisible by 3:", sum);
// }

// // // 577 Find the subarray whose sum is divisible by 2
// {
// let arr = [1, 2, 3, 4, 5]; 
// let n = arr.length;

// let prefixSum = 0;
// let countSubarraysDivisibleBy2 = 0;
// let prefixSumFrequency = [0, 0]; 
// prefixSumFrequency[0] = 1;

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let mod = prefixSum % 2;
//     countSubarraysDivisibleBy2 += prefixSumFrequency[mod];
//     prefixSumFrequency[mod]++;
// }

// console.log("Number of subarrays whose sum is divisible by 2:", countSubarraysDivisibleBy2);
// }

// // // 578 Find the largest sum of subarrays whose sum is divisible by a number
// {
// let arr = [1, 2, 3, 4, 5, 10, 6]; 
// let k = 5;
// let n = arr.length;

// let prefixSum = 0;
// let maxSum = -Infinity;
// let remainderMap = new Map();
// remainderMap.set(0, -1);

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let remainder = prefixSum % k;
//     if (remainder < 0) remainder += k;
//     if (remainderMap.has(remainder)) {
//         let prevIndex = remainderMap.get(remainder);
//         let subarraySum = prefixSum - (prevIndex >= 0 ? arr[prevIndex] : 0);
//         maxSum = Math.max(maxSum, subarraySum);
//     }
//     if (!remainderMap.has(remainder)) {
//         remainderMap.set(remainder, i);
//     }
// }

// console.log("Largest sum of subarray whose sum is divisible by " + k + ":", maxSum);

// }
// // // 579 Find the sum of the largest subarray whose sum is divisible by 3
// {
// let arr = [2, 3, 1, 6, 4, 5]; // Example array
// let n = arr.length;

// let prefixSum = 0;
// let maxLen = 0;
// let maxSum = 0;
// let firstModIndex = new Array(3).fill(-1);
// firstModIndex[0] = -1; 

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let mod = prefixSum % 3;
//     if (mod < 0) mod += 3;

//     if (firstModIndex[mod] === -1 && mod !== 0) {
//         firstModIndex[mod] = i;
//     } else {
//         let start = firstModIndex[mod];
//         let length = i - start;
//         if (length > maxLen) {
//             maxLen = length;
//             let tempSum = 0;
//             for (let j = start + 1; j <= i; j++) {
//                 tempSum += arr[j];
//             }
//             maxSum = tempSum;
//         }
//     }
//     if (mod === 0) {
//         let length = i + 1;
//         if (length > maxLen) {
//             maxLen = length;
//             maxSum = prefixSum;
//         }
//     }
// }

// console.log("Sum of the largest subarray whose sum is divisible by 3:", maxSum);

// }
// // // 580 Find the largest subarray with the maximum sum divisible by a number
// {
// let arr = [2, 3, 1, 6, 4, 5];
// let k = 3;
// let n = arr.length;

// let prefixSum = 0;
// let maxLen = 0;
// let maxSum = 0;
// let modIndex = new Map();
// modIndex.set(0, -1); 

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let mod = prefixSum % k;
//     if (mod < 0) mod += k;

//     if (modIndex.has(mod)) {
//         let prevIndex = modIndex.get(mod);
//         let length = i - prevIndex;
//         if (length > maxLen) {
//             maxLen = length;
//             let tempSum = 0;
//             for (let j = prevIndex + 1; j <= i; j++) {
//                 tempSum += arr[j];
//             }
//             maxSum = tempSum;
//         }
//     } else {
//         modIndex.set(mod, i);
//     }
//     if (mod === 0) {
//         if (i + 1 > maxLen) {
//             maxLen = i + 1;
//             maxSum = prefixSum;
//         }
//     }
// }

// console.log("Max sum of longest subarray divisible by " + k + ":", maxSum);

// }
// // // 581 Find the smallest subarray with sum greater than zero
// {
// let arr = [-2, -1, 3, -1, 2, -3]; 
// let n = arr.length;

// let minLen = Infinity;
// let sum = 0;
// let start = 0;

// for (let end = 0; end < n; end++) {
//     sum += arr[end];

//     while (sum > 0 && start <= end) {
//         let len = end - start + 1;
//         if (len < minLen) {
//             minLen = len;
//         }
//         sum -= arr[start];
//         start++;
//     }
// }

// if (minLen === Infinity) {
//     console.log("No subarray found with sum > 0");
// } else {
//     console.log("Length of smallest subarray with sum > 0:", minLen);
// }
// }
// // // 582 Find the number of subarrays whose sum is divisible by a number
// {
// let arr = [2, 3, 1, 6, 4, 5];
// let k = 5;
// let n = arr.length;

// let prefixSum = 0;
// let count = 0;
// let modFreq = new Map();
// modFreq.set(0, 1); 

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];

//     let mod = prefixSum % k;
//     if (mod < 0) mod += k;

//     if (modFreq.has(mod)) {
//         count += modFreq.get(mod);
//         modFreq.set(mod, modFreq.get(mod) + 1);
//     } else {
//         modFreq.set(mod, 1);
//     }
// }

// console.log("Number of subarrays whose sum is divisible by", k, ":", count);

// }
// // // 584 Find the maximum sum of subarrays whose sum is divisible by a prime number
// {
// let arr = [3, 1, 4, 1, 5, 9, 2]; 
// let k = 3; 
// let n = arr.length;

// let prefixSum = 0;
// let maxSum = -Infinity;
// let modIndex = new Map();
// modIndex.set(0, -1);

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let mod = prefixSum % k;
//     if (mod < 0) mod += k;

//     if (mod === 0) {
//         if (prefixSum > maxSum) {
//             maxSum = prefixSum;
//         }
//     }

//     if (modIndex.has(mod)) {
//         let prevIndex = modIndex.get(mod);
//         let tempSum = 0;
//         for (let j = prevIndex + 1; j <= i; j++) {
//             tempSum += arr[j];
//         }
//         if (tempSum > maxSum) {
//             maxSum = tempSum;
//         }
//     } else {
//         modIndex.set(mod, i);
//     }
// }

// console.log("Maximum sum of subarray divisible by", k, "is:", maxSum);
// }
// // // 586 Find the maximum sum subarray whose sum is divisible by a given prime
// {
// let arr = [3, 1, 4, 1, 5, 9, 2]; 
// let k = 3; 
// let n = arr.length;

// let prefixSum = 0;
// let maxSum = -Infinity;
// let modIndex = new Map();
// modIndex.set(0, -1);

// let prefixSums = new Array(n); 

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     prefixSums[i] = prefixSum;

//     let mod = prefixSum % k;
//     if (mod < 0) mod += k;

//     if (modIndex.has(mod)) {
//         let prevIndex = modIndex.get(mod);
//         let tempSum;
//         if (prevIndex === -1) {
//             tempSum = prefixSum;
//         } else {
//             tempSum = prefixSums[i] - prefixSums[prevIndex];
//         }
//         if (tempSum > maxSum) {
//             maxSum = tempSum;
//         }
//     } else {
//         modIndex.set(mod, i);
//     }
//     if (mod === 0 && prefixSum > maxSum) {
//         maxSum = prefixSum;
//     }
// }

// console.log("Maximum sum subarray divisible by", k, "is:", maxSum);

// }

// // // 587 Find the number of subarrays whose sum is divisible by a prime number
// {
// let arr = [3, 1, 4, 1, 5, 9, 2]; 
// let k = 3; 
// let n = arr.length;

// let prefixSum = 0;
// let count = 0;

// let modFreq = new Map();
// modFreq.set(0, 1); 

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let mod = prefixSum % k;
//     if (mod < 0) mod += k;

//     if (modFreq.has(mod)) {
//         count += modFreq.get(mod);
//         modFreq.set(mod, modFreq.get(mod) + 1);
//     } else {
//         modFreq.set(mod, 1);
//     }
// }

// console.log("Number of subarrays whose sum is divisible by", k, ":", count);
// }

// // // 588 Find the subarray whose sum is divisible by 3
// {
// let arr = [2, 4, 1, 6, 5, 3];
// let n = arr.length;
// let k = 3;

// let prefixSum = 0;
// let modIndex = new Map();
// modIndex.set(0, -1);

// let start = -1;
// let end = -1;

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let mod = prefixSum % k;
//     if (mod < 0) mod += k;

//     if (modIndex.has(mod)) {
//         start = modIndex.get(mod) + 1;
//         end = i;
//         break;
//     } else {
//         modIndex.set(mod, i);
//     }

//     if (mod === 0 && start === -1) {
//         start = 0;
//         end = i;
//         break;
//     }
// }

// if (start !== -1 && end !== -1) {
//     let result = [];
//     for (let i = start; i <= end; i++) {
//         result.push(arr[i]);
//     }
//     console.log("Subarray whose sum is divisible by 3:", result);
// } else {
//     console.log("No subarray found whose sum is divisible by 3.");
// }
// }
// // // 589 Find the maximum subarray product divisible by 3
// {
// let arr = [1, 2, 3, 4, 5, 6]; 
// let n = arr.length;
// let k = 3; 

// let maxProduct = -Infinity;
// let minProduct = 1; 
// let product = 1;

// for (let i = 0; i < n; i++) {
//     if (arr[i] === 0) {
//         product = 1;
//         minProduct = 1;
//         continue; 
//     }
//     if (arr[i] < 0) {
//         let temp = product;
//         product = Math.max(arr[i], arr[i] * minProduct);
//         minProduct = Math.min(arr[i], arr[i] * temp);
//     } else {
//         product *= arr[i];
//         minProduct = Math.min(minProduct * arr[i], arr[i]);
//     }
//     if (product % k === 0) {
//         maxProduct = Math.max(maxProduct, product);
//     }
// }

// console.log("Maximum subarray product divisible by 3:", maxProduct);
// }

// // // 590 Find the subarray with the smallest sum greater than a given value
// {
// let arr = [2, 3, 1, 4, 5, 1]; 
// let x = 8; 
// let n = arr.length;

// let sum = 0;
// let minLength = Infinity;
// let start = 0;

// for (let end = 0; end < n; end++) {
//     sum += arr[end];
//     while (sum > x) {
//         let len = end - start + 1;
//         minLength = Math.min(minLength, len);
//         sum -= arr[start];
//         start++;
//     }
// }

// if (minLength === Infinity) {
//     console.log("No subarray found with sum greater than", x);
// } else {
//     console.log("Length of the smallest subarray with sum greater than", x, "is:", minLength);
// }
// }
// // // 591 Find the largest subarray whose sum is divisible by 3
// {
// let arr = [1, 2, 3, 4, 5, 6];
// let n = arr.length;
// let k = 3; 

// let prefixSum = 0;
// let maxLength = 0;
// let modIndex = new Map();
// modIndex.set(0, -1); 

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let mod = prefixSum % k;
//     if (mod < 0) mod += k; 
//     if (modIndex.has(mod)) {
//         let subarrayLength = i - modIndex.get(mod);
//         maxLength = Math.max(maxLength, subarrayLength);
//     } else {
//         modIndex.set(mod, i); 
//     }
// }

// console.log("Largest subarray length whose sum is divisible by", k, "is:", maxLength);
// }

// // // 592 Find the maximum subarray whose sum is divisible by 5
// {
// let arr = [1, 2, 3, 4, 5, 6];
// let n = arr.length;
// let k = 5; 

// let prefixSum = 0;
// let maxSum = -Infinity; 
// let modIndex = new Map();
// modIndex.set(0, -1); 

// for (let i = 0; i < n; i++) {
//     prefixSum += arr[i];
//     let mod = prefixSum % k;
//     if (mod < 0) mod += k;
//     if (modIndex.has(mod)) {
//         let start = modIndex.get(mod);
//         let subarraySum = prefixSum - (start === -1 ? 0 : arr[start]);
//         maxSum = Math.max(maxSum, subarraySum);
//     } else {
//         modIndex.set(mod, i); 
//     }
// }

// console.log("Maximum subarray sum whose sum is divisible by", k, "is:", maxSum);
// }

// // // 593 Find the sum of elements divisible by 3
// {
// let arr = [3, 5, 6, 9, 7, 12, 15];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 3 === 0) {
//         sum += arr[i];
//     }
// }

// console.log("Sum of elements divisible by 3 is:", sum);
// }

// // // 594 Insert an element at the end
// {
// let data = [23,32,43,56,76,34,54,55]
// let newele = 77

// data[data.length] = newele
// console.log(data)
// }
// // // 595 Insert an element at a specific index
// {
// let data = [23, 32, 43, 56, 76, 34, 54, 55]
// let newEle = 77
// let index = 3

// for(i=data.length;i>index;i--){
//    data[i] = data[i-1]
// }
// data[index] = newEle
// console.log(data)
// }

// // // 596 Delete an element by index
// {
// let data = [23,32,43,45,55,65,67]
// let index = 4

// for(i=index;i<data.length;i++){
//     data[i] = data[i+1]
// }
// data.length = data.length-1
// console.log(data)
// }
// // // // 597 Delete an element by value
// {
// let data = [23,32,43,45,54,56,65,45]
// let value = 45

// let index = -1

// for(i=0;i<data.length;i++){
//     if(data[i]==value){
//         index = i
//     }
//     if(index!==-1){
//         for(i=index;i<data.length;i++){
//             data[i] = data[i+1]
//         }
//     }
// }
// data.length = data.length-1
// console.log(data)
// }
// // // 598 Find the length of an array
// {
// let data = [23, 32, 33, 45, 54, 55, 66];
// let length = 0;

// for (let i in data) {
//     length++;
// }

// console.log(length);

// }
// // // 599 Print array in reverse
// {
// let data = [23,43,45,54,55,66,65]

// for(i=data.length;i<=0;i--){
//     console.log(data[i])
// }
// }
// // // // 600 Find the maximum element
// {
// let data = [23,34,54,56,65,66,77,45]
// let max = -Infinity

// for(i=0;i<data.length;i++){
//     if(data[i]>max){
//         max = data[i]
//     }
// }
// console.log(max)
// }
// // // 601 Find the minimum element
// {
// let data = [23,32,34,54,56,65,34,54]
// let min = Infinity

// for(i=0;i<data.length;i++){
//     if(data[i]<min){
//         min = data[i]
//     }
// }
// console.log(min)
// }
// // // 602 Find the sum of elements
// {
// let data = [23,43,44,54,55,65,56,34,33]
// let sum = 0

// for(i=0;i<data.length;i++){
//     sum+=data[i]
// }
// console.log(sum)
// }
// // // 603 Find the average of elements
// {
// let data = [23,43,44,54,5,66,54,45]
// let sum = 0
// let count = 0

// for(i=0;i<data.length;i++){
//     sum = sum+data[i]
//     count++
// }
// let average = sum/count
// console.log(average)
// }
// // // 604 Count positive numbers
// {
// let data = [-23,32,-33,44,54,-56,65,76,44]
// let position = 0

// for(i=0;i<data.length;i++){
//     if(data[i]>0){
//         position++
//     }
// }
// console.log(position)
// }
// // // 605 Count negative numbers
// {
// let data = [23,-4,54,-55,-66,34,54,-4]
// let nagative = 0

// for(i=0;i<data.length;i++){
//     if(data[i] <0){
//         nagative++
//     }
// }
// console.log(nagative)
// }
// // // // 606 Replace all even numbers with 0
// {
// let data = [-2, 33, 43, 45, -33, 44, 54, -55, 66];

// for (let i = 0; i < data.length; i++) {
//     if (data[i] % 2 === 0) {
//         data[i] = 0;
//     }
// }

// console.log(data);
// }
// // // 607 Replace all odd numbers with 1
// {
// let data = [23,43,44,55,43,44,56,65,66,44]

// for(i=0;i<data.length;i++){
//     if(data[i]%2!==0){
//         data[i] = 1
//     }
// }
// console.log(data)
// }
// // // 608 Swap first and last elements 
// {
// let data = [23, 34, 54, 56, 65, 66, 77, 45];

// let temp = data[0];
// data[0] = data[data.length - 1];
// data[data.length - 1] = temp;

// console.log(data);
// }
// // // 609 Rotate array by one (right)
// {
// let data = [23,32,44,54,56,65]
// let last = data[data.length-1]
// for(i=data.length-1;i>0;i--){
//     data[i] = data[i-1]
// }
// data[0] = last

// console.log(data)

// }
// // // 610 Rotate array by one (left)
// {
// let data = [23,32,33,43,45,54,56,65]
// let first = data[0]

// for(i=0;i<data.length;i++){
//     data[i] = data[i+1]
// }
// data[data.length-1] = first
// console.log(data)
// }
// // // 611 Find second largest element
// {
// let data = [23,32,44,55,56,65,67,34,77,66]
// let max = -Infinity
// let second = -Infinity

// for(i=0;i<data.length;i++){
//     if(data[i]>max){
//         second = max
//         max = data[i]
//     }else if(data[i]>second&&data[i]!==max){
//         second = data[i]
//     }
// }
// console.log(second)
// }
// // // 612 Find second smallest element
// {
// let data = [23,32,33,4,54,56,76,77,44,5]
// let min = Infinity
// let second = Infinity

// for(i=0;i<data.length;i++){
//     if(data[i]<min){
//         second = min
//         min = data[i]
//     }else if(data[i]<second&&data[i]!==min){
//         second = data[i]
//     }
// }
// console.log(second)
// }
// // // 613 Find frequency of each element
// {
// let data = [2, 3, 2, 4, 3, 5, 2];
// let visited = [];
// let isVisited;

// for (let i = 0; i < data.length; i++) {
//     isVisited = false;

//     for (let j = 0; j < visited.length; j++) {
//         if (visited[j] == data[i]) {
//             isVisited = true;
//             break;
//         }
//     }

//     if (isVisited === false) {
//         let count = 1;

//         for (let k = i + 1; k < data.length; k++) {
//             if (data[i] === data[k]) {
//                 count++;
//             }
//         }

//         visited[visited.length] = data[i];
//         console.log(data[i], "->", count);
//     }
// }

// }
// // // 614 Remove duplicates from array
// {
// let data = [2, 3, 2, 4, 3, 5, 2];
// let result = [];

// for (let i = 0; i < data.length; i++) {
//     let isDuplicate = false;

//     for (let j = 0; j < result.length; j++) {
//         if (data[i] === result[j]) {
//             isDuplicate = true;
//             break;
//         }
//     }

//     if (isDuplicate === false) {
//         result[result.length] = data[i];
//     }
// }

// console.log(result);
// }

// // // 615 Check if array is sorted
// {
// let data = [2,3,4,5,6,7,3]
// let isSorted = true

// for(i=0;i<data.length;i++){
//     if(data[i]>data[i+1]){
//         isSorted = false
//         break
//     }
// }
// console.log(isSorted)
// }
// // // 616 Sort array in ascending order
// {
// let data = [23,32,33,43,45,55,65,55,45]

// for(i=0;i<data.length;i++){
//     for(j=0;j<data.length;j++){
//         if(data[j]>data[j+1]){
//             let temp = data[j]
//             data[j] = data[j+1]
//             data[j+1] = temp
//         }
//     }
// }
// console.log(data)
// }

// // // 617 Sort array in descending order
// {
// let data = [32,34,54,44,55,34,44,66]

// for(i=0;i<data.length;i++){
//     for(j=0;j<data.length;j++){
//         if(data[j]<data[j+1]){
//             let temp = data[j]
//             data[j] = data[j+1]
//             data[j+1] = temp
//         }
//     }
// }
// console.log(data)
// }
// // // 618 Merge two sorted arrays
// {
// let data = [2,3,4,5,6]
// let data2 = [22,33,44,55,66]

// for(i=0;i<data2.length;i++){
//     data[data.length] = data2[i]
// }
// console.log(data)
// }
// // // 619 Count occurrences of a number
// {
// let data = [23,33,44,43,45,44,56,65,44]
// let number = 44
// let count = 0
// for(i=0;i<data.length;i++){
//     if(data[i]==number){
//         count++
//     }
// }
// console.log(count)
// }
// // // 620 Find common elements in two arrays
// {
// let data = [23,33,43,45,65,55,67]
// let data2 = [32,34,44,54,55,65,67]
// let common = []
// for(i=0;i<data.length;i++){
//     for(j=0;j<data.length;j++){
//         if(data[i]==data2[j]){
//             common[common.length]= data[i]
//         }
//     }
// }
// console.log(common)
// }
// // // 630 Find union of two arrays
// {
// let data = [23, 33, 43, 45, 5, 65, 55, 7];
// let data2 = [23, 44, 54, 56, 66, 7];
// let union = [];

// for (i = 0; i < data.length; i++) {
//     union[union.length] = data[i];
// }

// for (j = 0; j < data2.length; j++) {
//     let duplicate = false;
//     for (k = 0; k < union.length; k++) {
//         if (data2[j] == union[k]) {
//             duplicate = true;
//             break;
//         }
//     }
//     if (duplicate == false) {
//         union[union.length] = data2[j];
//     }
// }

// console.log(union);
// }

// // // 631 Find intersection of two arrays
// {
// let data = [23, 33, 43, 45, 5, 7];
// let data2 = [23, 44, 54, 56, 7];
// let intersection = [];

// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data2.length; j++) {
//         if (data[i] == data2[j]) {
//             // Check if already added to intersection
//             let alreadyAdded = false;
//             for (let k = 0; k < intersection.length; k++) {
//                 if (intersection[k] == data[i]) {
//                     alreadyAdded = true;
//                     break;
//                 }
//             }

//             if (alreadyAdded == false) {
//                 intersection[intersection.length] = data[i];
//             }
//         }
//     }
// }

// console.log(intersection);
// }

// // // 632 Replace each element with square
// {
// let data = [4,5,6,6,3,4]

// for(i=0;i<data.length;i++){
//     let temp = data[i]
//     data[i] = temp *temp
// }
// console.log(data)
// }
// // // 633 Reverse array in-place
// {
// let data = [23,43,44,55,65,45,54,34]
// let left = 0
// let right = data.length-1

// for(i=left;i<right;i++){
//     let temp = data[left]
//     data[left] = data[right]
//     data[right] = temp
//     left++
//     right--
// }
// console.log(data)
// }
// // // 634 Find first repeating element
// {
// let data = [23, 33, 43, 45, 33, 22, 23];
// let repeating;

// for (let i = 0; i < data.length; i++) {
//     for (let j = i + 1; j < data.length; j++) {
//         if (data[i] == data[j]) {
//             repeating = data[i];
//             break; // breaks inner loop
//         }
//     }
//     if (repeating !== undefined) {
//         break; // breaks outer loop too
//     }
// }

// console.log(repeating); // Output: 23
// }

// // // 635 Find first non-repeating element
// {
// let data = [23,33,45,23,33,45,54,55,54]
// let nonRepeat;

// for(i=0;i<data.length;i++){
//     let isRepating = false
//     for(j=0;j<data.length;j++){
//         if(i!==j&&data[i]==data[j]){
//             isRepating = true
//             break
//         }
//     }
//     if(isRepating == false){
//         nonRepeat = data[i]
//         break
//     }
// }
// console.log(nonRepeat)
// }
// // // 636 Separate even and odd elements
// {
// let data = [23,32,34,55,54,455,34,33]
// let even = []
// let odd = []

// for(i=0;i<data.length;i++){
//     if(data[i]%2==0){
//         even[even.length] = data[i]
//     }else{
//         odd[odd.length] = data[i]
//     }
// }
// console.log(even,odd)
// }
// // // // 637 Check if array is palindrome
// {
// let data = [33,32,22,23,22,32,33]
// let isPalindrome = true
// let left = 0
// let right = data.length-1
// for(i=0;i<data.length;i++){
//     if(data[left]!==data[right]){
//         isPalindrome = false
//         break;
//     }
//     left++
//     right--
// }
// console.log(isPalindrome)
// }
// // // 638 Find missing number (1 to N)
// {
// let data = [1, 2, 4, 5]
// let n = 5

// let expectedSum = 0 
// let actualSum = 0

// for(i=1;i<=n;i++){
//     expectedSum = expectedSum+i
// }
// for(i=0;i<data.length;i++){
//     actualSum = actualSum+data[i]
// }
// let missing = expectedSum-actualSum
// console.log(missing)
// }
// // // 639 Rearrange array in alternating positive and negative
// {
// let data = [1, 2, -3, -4, 5, -6, 7];
// let pos = [];
// let neg = [];
// let p = 0;
// let n = 0;

// // Separate positives and negatives
// for (let i = 0; i < data.length; i++) {
//     if (data[i] >= 0) {
//         pos[p] = data[i];
//         p++;
//     } else {
//         neg[n] = data[i];
//         n++;
//     }
// }

// // Merge in alternating fashion
// let i = 0;
// let j = 0;
// let k = 0;
// let result = [];

// while (i < p && j < n) {
//     result[k] = pos[i];
//     k++;
//     i++;

//     result[k] = neg[j];
//     k++;
//     j++;
// }

// // Add remaining positives
// while (i < p) {
//     result[k] = pos[i];
//     k++;
//     i++;
// }

// // Add remaining negatives
// while (j < n) {
//     result[k] = neg[j];
//     k++;
//     j++;
// }

// console.log(result);

// }
// // // 640 Find pair with given sum
// {
// let data = [2, 3, 4, 5, 6, 5, 3];
// let target = 7;
// let found = false;

// for (i = 0; i < data.length; i++) {
//     for (j = i + 1; j < data.length; j++) {
//         if (data[i] + data[j] == target) {
//             console.log(`${data[i]} and ${data[j]}`);
//             found = true;
//             break;
//         }
//     }
//     if (found) {
//         break;
//     }
// }
// }

// // // 641 Find triplet with given sum
// {
// let data = [2,3,4,5,7,3,4]
// let target = 8

// for(i=0;i<data.length;i++){
//     for(j=i+1;j<data.length;j++){
//         for(k=j+1;k<data.length;k++){
//             if(data[i]+data[j]+data[k]===target){
//                 console.log(`${data[i]} and ${data[j]} and ${data[k]}`)
//             }
//         }
//     }
// }
// }
// // // 642 Count zeros in array

// {let data = [2,0,30,0,3,4,0,5]
// let count = 0

// for(i=0;i<data.length;i++){
//     if(data[i]===0){
//         count++
//     }
// }
// console.log(count)}


// // // 643 Count ones in array
// {
// let data = [23,1,32,1,1,43,54,1,1,1,1,4]
// let one = 0

// for(i=0;i<data.length;i++){
//     if(data[i]==1){
//         one++
//     }
// }
// console.log(one)
// }
// // // 644 Find majority element (appears more than n/2 times)
// {
// let data = [2, 3, 444, 54, 34, 2, 2, 2, 2, 43, 45, 2];
// let n = data.length;
// let majority = Math.floor(n / 2);
// let element = undefined;

// for (let i = 0; i < n; i++) {
//     let count = 1; // Har naya element ke liye reset

//     for (let j = i + 1; j < n; j++) {
//         if (data[i] === data[j]) {
//             count++;
//         }
//     }

//     if (count > majority) {
//         element = data[i];
//         break;
//     }
// }

// console.log(element);
// }
// // // 645 Find nth largest element
// {
// let data = [23, 32, 33, 43, 54, 45, 66];
// let n = 4;

// // Sort array in ascending order using Bubble Sort
// for (let i = 0; i < data.length - 1; i++) {
//     for (let j = 0; j < data.length - 1 - i; j++) {
//         if (data[j] > data[j + 1]) {
//             let temp = data[j];
//             data[j] = data[j + 1];
//             data[j + 1] = temp;
//         }
//     }
// }

// // Get nth largest: it's at index data.length - n
// console.log(data[data.length - n]);
// }

// // // 646 Find nth smallest element

// {let data = [23,32,34,54,44,55,44]
// let n = 2

// for(i=0;i<data.length-1;i++){
//     for(j=0;j<data.length-1;j++){
//         if(data[i]>data[j]){
//             let temp = data[i]
//             data[i] = data[i+1]
//             data[i+1] = temp
//         }
//     }
// }
// console.log(data[n-1])}

// // // 647 Find nearest smaller to left
// {
// let data = [4, 2, 3, 2, 5, 6, 4, 7];
// let data2 = [];

// for (let i = 0; i < data.length; i++) {
//     let found = false;

//     for (let j = i - 1; j >= 0; j--) {
//         if (data[j] < data[i]) {
//             data2[data2.length] = data[j];
//             found = true;
//             break;
//         }
//     }

//     if (!found) {
//         data2[data2.length] = -1;
//     }
// }

// console.log(data2);
// }

// // // // 648 Find nearest smaller to right
// {
// // let data = [2,4,55,43,33,65,66,76]
// // let data2 = []

// for(i=0;i<data.length;i++){
//     let found = false
//     for(j=i+1;j<data.length;j++){
//         if(data[i]>data[j]){
//             found = true
//             data2[data2.length] = data[j]
//             break;
//         }
//     }
//     if(!found){
//         data2[data2.length] = -1
//     }
// }
// console.log(data2)}

// // // 649 Replace each element with the next greater
// {
// let data = [23,43,45,54,34,23]
// let data2 = []

// for(i=0;i<data.length;i++){
//     let found = false
//     for(j=i+1;j<data.length;j++){
//         if(data[i]<data[j]){
//             data2[data2.length] = data[j]
//             found = true
//             break
//         }
//     }
//     if(!found){
//         data2[data2.length] = -1
//     }
// }
// console.log(data2)
// }
// // // 650 Replace each element with the next smaller
// {
// let data = [23, 32, 33, 43, 23, 54, 55, 65];
// let data2 = [];

// for (let i = 0; i < data.length; i++) {
//     let found = false;
//     for (let j = i + 1; j < data.length; j++) {
//         if (data[i] > data[j]) {
//             found = true;
//             data2[data2.length] = data[j];
//             break;
//         }
//     }
//     if (!found) {
//         data2[data2.length] = -1;
//     }
// }

// console.log(data2);
// }
// // // 651 Print array in zig-zag fashion
// {
// let data = [4, 3, 7, 8, 6, 2, 1];

// for (let i = 0; i < data.length - 1; i++) {
//     if (i % 2 === 0) {
//         if (data[i] > data[i + 1]) {
//             let temp = data[i];
//             data[i] = data[i + 1];
//             data[i + 1] = temp;
//         }
//     } else {
//         if (data[i] < data[i + 1]) {
//             let temp = data[i];
//             data[i] = data[i + 1];
//             data[i + 1] = temp;
//         }
//     }
// }

// console.log(data);

// }
// // // 652 Find max product of two elements
// {
// let data = [3, 5, -10, -20, 6, 8];

// let max1 = -Infinity
// let max2 = -Infinity
// let min1 = Infinity
// let min2 = Infinity

// for(i=0;i<data.length;i++){
//     if(data[i]>max1){
//         max2 = max1
//         max1 = data[i]
//     }else if(data[i]>max2){
//         max2 = data[i]
//     }
//     if(data[i]<min1){
//         min2 = min1
//         min1 = data[i]
//     }else if(data[i]<min2){
//         min2 = data[i]
//     }
// }
// let product1 = max1*max2
// let product2 = min1*min2
// let maxProd = Math.max(product1,product2)
// console.log(maxProd)
// }
// // // 653 Find min product of two elements
// {
// let data = [23,32,33,43,34,44,54,445]
// let min1 = Infinity
// let min2 = Infinity
// let max = -Infinity
// let max2 = -Infinity

// for(i=0;i<data.length;i++){
//     if(data[i]<min1){
//         min2 = min1
//         min1 = data[i]
//     }else if(data[i]<min2){
//         min2 = data[i]
//     }
//     if(data[i]>max){
//         max2 = max
//         max = data[i]
//     }else if(data[i]>max2){
//         max2 = data[i]
//     }
// }
// let minproduct = Math.min(max*max2,min1*min2)

// console.log(minproduct)
// }
// // // 654 Convert array to set (unique elements)
// {
// let data = [1, 2, 3, 2, 4, 1, 5];
// let unique = [];
// let isDuplicate = false;

// for (let i = 0; i < data.length; i++) {
//     isDuplicate = false;

//     // Check if data[i] is already in unique[]
//     for (let j = 0; j < unique.length; j++) {
//         if (data[i] === unique[j]) {
//             isDuplicate = true;
//             break;
//         }
//     }

//     // If not duplicate, add to unique[]
//     if (!isDuplicate) {
//         unique[unique.length] = data[i];  // using array indexing, not push()
//     }
// }

// console.log(unique);
// }

// // // 655 Find frequency of maximum element
// {
// let data = [22,33,43,34,34,54,55,66,66,43,23,66,66,43,66]
// let max = -Infinity;
// let count = 0
// for(i=0;i<data.length;i++){
//     if(data[i]>max){
//         max = data[i]
//     }
// }
// for(j=0;j<data.length;j++){
    
//     if(data[j]==max){
//         count++
//     }
// }
// console.log(count)
// }
// // // 656 Remove all zeros from array
// {
// let data = [0, 32, 0, 45, 0, 43, 0, 76, 0];
// let k = 0;

// for (let i = 0; i < data.length; i++) {
//     if (data[i] != 0) {
//         data[k] = data[i];
//         k++;
//     }
// }

// // Print only non-zero part
// for (let i = 0; i < k; i++) {
//     console.log(data[i]);
// }
// }

// // // 657 Replace all negative numbers with 0
// {
// let data = [23,-33,-43,45,54,-33,23,3,-34,33,-44,43,-43]

// for(i=0;i<data.length;i++){
//     if(data[i]<0){
//         data[i] = 0
//     }
// }
// console.log(data)
// }
// // // 658 Find GCD of all elements
// {
// let data = [24,36,47]
// let gcd = data[0]

// for(i=1;i<data.length;i++){
//     let a = gcd
//     let b = data[i]

//     while(b !=0){
//         let temp = b
//         b = a%b
//         a = temp
//     }
//     gcp = a
// }
// console.log(gcd)
// }
// // // 659 Add two arrays element-wise

// let data = [23,32,33,44,54,56,66,54,44]
// let data2 = [43,34,44,54,55,65,56]
// let i = 0

// while(i<data.length&&i<data2.length){
//     data[i] = data[i]+data2[i]
//     i++
// }
// console.log(data)


// // // 660 Subtract two arrays element-wise
// {
// let data = [23, 32, 33, 44, 54, 45, 55, 65, 34];
// let data2 = [32, 33, 43, 54, 44, 56, 66, 76, 34, 54];

// // Calculate the minimum length
// let minLength = Math.min(data.length, data2.length);

// // Subtract corresponding elements
// for (let i = 0; i < minLength; i++) {
//     data[i] = data[i] - data2[i];
// }

// console.log(data);
// }
// // //  661 Multiply two arrays element-wise
// {
// let data = [2,3,43,5,3,44,6]
// let data2 = [32,34,55,54,43,33]

// let minLength = Math.min(data.length,data2.length)

// for(i=0;i<minLength;i++){
//     data[i] = data[i]*data2[i]
// }
// console.log(data)
// }

// // // 662 Divide two arrays element-wise
// {
// let data = [23,32,33,43,45,65,6]
// let data2 = [32,33,43,44,54,56]

// let minLength = Math.min(data.length,data2.length)

// for(i=0;i<minLength;i++){
//     data[i] = data[i]%data2[i]
// }
// console.log(data)
// }
// // // 663 Check if array contains only even numbers
// {
// let data = [22,32,22,22,22]
// let even = true

// for(i=0;i<data.length;i++){
//     if(data[i]%2!==0){
//         even = false
//         break
//     }
// }
// console.log(even)
// }
// // // 664 Check if array contains only positive numbers
// {
// let data = [23,32,33,44,43,44,54,444,32,44]
// let position = true

// for(i=0;i<data.length;i++){
//     if(data[i]<0){
//         position =  false
//         break
//     }
// }
// console.log(position)
// }
// // // 665 Find sum of first half of array
// {
// let data = [23,32,33,44,54,55,65,45];
// let n = data.length;
// let half = Math.floor(n / 2);
// let sum = 0;

// for (let i = 0; i < half; i++) {
//     sum += data[i];
// }

// console.log(sum);  // Output: 132
// }
// // // 666 Find sum of second half of array
// {
// let data = [23,32,33,43,34,44,54,45,55,34]
// let n = data.length
// let half = Math.floor(n / 2);
// let sum = 0

// for(i=half;i<data.length;i++){
//     sum+=data[i]
// }
// console.log(sum)
// }
// // // 667 Count even and odd separately
// {
// let data = [23,32,22,43,34,54,44,56,66,76,66,54,45,65,55]
// let odd = 0
// let even = 0

// for(i=0;i<data.length;i++){
//     if(data[i]%2==0){
//         even++
//     }else{
//         odd++
//     }
// }
// console.log(`${even} even and ${odd} odd`)
// }
// // // 668 Move all zeros to end
// {
// let data = [23,0,0,43,34,0,430,0,43,0,0,43,0]
// let pos = 0

// for(i=0;i<data.length;i++){
//     if(data[i]!==0){
//         data[pos] =data[i]
//         pos++
//     }
// }

// while(pos<data.length){
//     data[pos] = 0
//     pos++
// }
// console.log(data)
// }
// // // 669 Move all zeros to front
// {
// let data = [0, 32, 0, 45, 0, 43, 0, 76, 0];
// let pos = data.length - 1;

// for (let i = data.length - 1; i >= 0; i--) {
//     if (data[i] !== 0) {
//         data[pos] = data[i];
//         pos--;
//     }
// }

// while (pos >= 0) {
//     data[pos] = 0;
//     pos--;
// }

// console.log(data);
// }

// // // 670 Move all negatives to left
// {
// let data = [23, -3, -3, 43, 23, -43, -43, 33, -44, 33, -44];
// let pos = 0;

// for (let i = 0; i < data.length; i++) {
//     if (data[i] < 0) {
//         // Swap current negative with the element at 'pos'
//         let temp = data[i];
//         data[i] = data[pos];
//         data[pos] = temp;
//         pos++;
//     }
// }

// console.log(data);

// }
// // // 671 Move all positives to right
// {
// let data = [23, 32, -3, -44, -54, 44, 66, 45, -44, -22, 33];
// let pos = data.length - 1;

// for (let i = data.length - 1; i >= 0; i--) {
//     if (data[i] > 0) {
//         // Swap positive with element at 'pos'
//         let temp = data[i];
//         data[i] = data[pos];
//         data[pos] = temp;
//         pos--;
//     }
// }

// console.log(data);
// }
// // // 672 Find smallest positive missing number
// {
// let data = [3, 4, -1, 1];
// let n = data.length;

// // Step 1: Replace negative & 0 with n+1 (out of range)
// for (let i = 0; i < n; i++) {
//     if (data[i] <= 0 || data[i] > n) {
//         data[i] = n + 1;
//     }
// }

// // Step 2: Mark existing numbers in the array
// for (let i = 0; i < n; i++) {
//     let val = Math.abs(data[i]);
//     if (val <= n && data[val - 1] > 0) {
//         data[val - 1] = -Math.abs(data[val - 1]);
//     }
// }

// // Step 3: Find first positive index
// let missing = n + 1;
// for (let i = 0; i < n; i++) {
//     if (data[i] > 0) {
//         missing = i + 1;
//         break;
//     }
// }

// console.log(missing);

// }
// // // 673 Find largest negative number
// {
// let data = [23, 32, -3, -444, 43, 22, -43, -43, -45, -65, -77, 44];
// let maxNegative = -Infinity;

// for (let i = 0; i < data.length; i++) {
//     if (data[i] < 0 && data[i] > maxNegative) {
//         maxNegative = data[i];
//     }
// }

// console.log(maxNegative);
// }

// // // 674 Find sum of alternate elements
// {
// let data = [10, 20, 30, 40, 50, 60];
// let sum = 0;

// for (let i = 0; i < data.length; i += 2) {
//     sum = sum + data[i]; // add every alternate (even index)
// }

// console.log(sum);
// }
// // // 675 Replace each element with its right neighbor
// {
// let data = [23, 23, 43, 45, 54, 55, 55, 65, 56, 43];

// for (let i = 0; i < data.length - 1; i++) {
//     data[i] = data[i + 1];
// }

// data[data.length - 1] = -1; // Optional: Put -1 or null for last element

// console.log(data);
// }

// // // 676 Replace each element with its left neighbor
// {
// let data = [23, 32, 33, 44, 54, 56, 65, 45, 56, 76, 77];

// for (let i = data.length - 1; i > 0; i--) {
//     data[i] = data[i - 1];
// }

// data[0] = -1; // Optional: first element has no left neighbor

// console.log(data);
// }

// // // 677 Find median of array
// {
// let data = [23, 45, 11, 67, 32];
// let n = data.length;

// // Step 1: Bubble Sort
// for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         if (data[j] > data[j + 1]) {
//             // Swap
//             let temp = data[j];
//             data[j] = data[j + 1];
//             data[j + 1] = temp;
//         }
//     }
// }

// // Step 2: Find Median
// let median;
// if (n % 2 == 1) {
//     median = data[Math.floor(n / 2)];
// } else {
//     let mid1 = data[n / 2 - 1];
//     let mid2 = data[n / 2];
//     median = (mid1 + mid2) / 2;
// }

// console.log(median);
// }

// // // 678 Print elements at even index
// {
// let data = [23, 32, 33, 43, 45, 55, 65, 556, 54, 34];

// for (let i = 0; i < data.length; i = i + 2) {
//     console.log(data[i]);
// }

// }
// // // 679 Print elements at odd index
// {
// let data = [23,32,33,4,34,54,44,54,56,66,76,6,65];

// for (let i = 1; i < data.length; i = i + 2) {
//     console.log(data[i]);
// }
// }

// // // 680 Find number with highest frequency
// {
// let data = [23, 32, 33, 43, 44, 54, 45, 65, 55, 66, 77, 33, 3, 33, 433, 33];
// let freq = {};
// let maxFreq = 0;
// let maxFreqElement;

// for (let i = 0; i < data.length; i++) {
//     let el = data[i];

//     // Calculate frequency
//     if (freq[el] === undefined) {
//         freq[el] = 1;
//     } else {
//         freq[el]++;
//     }

//     // Update max frequency and element with max frequency
//     if (freq[el] > maxFreq) {
//         maxFreq = freq[el];
//         maxFreqElement = el;
//     }
// }

// console.log("Max Frequency:", maxFreq, "Element with max Frequency:", maxFreqElement);
// }

// // // 681 Count elements greater than average
// {
// let data = [23, 32, 33, 43, 44, 54, 45, 65, 55, 66, 77, 33, 3, 33, 433, 33];

// // Step 1: Calculate the average
// let sum = 0;
// for (let i = 0; i < data.length; i++) {
//     sum += data[i];
// }
// let average = sum / data.length;

// // Step 2: Count elements greater than the average
// let count = 0;
// for (let i = 0; i < data.length; i++) {
//     if (data[i] > average) {
//         count++;
//     }
// }

// console.log("Average:", average);
// console.log("Count of elements greater than average:", count);

// }
// // // 682 Count number of subarrays
// {
// let data = [23, 32, 33, 43, 44]; // Example array

// let n = data.length;
// let totalSubarrays = (n * (n + 1)) / 2;

// console.log("Total number of subarrays:", totalSubarrays);
// }
// // // 683 Count subarrays with even sum
// {
// let data = [23,32,33,43,44,54,45,55]
// let countEven = 0 ,countOdd = 0,current_sum = 0, result = 0

// countEven = 1
// for(i=0;i<data.length;i++){
//     current_sum+=data[i]
//     if(current_sum%2==0){
//         result+=countEven
//         countEven++
//     }else{
//         result+=countOdd
//         countOdd++
//    }
// }
// console.log(result)
// }
// // // 684 Find max length subarray with all 1s
// {
// let data = [1, 1, 0, 1, 1, 1, 0, 1, 1];

// let maxLength = 0;
// let currentLength = 0;

// for (let i = 0; i < data.length; i++) {
//     if (data[i] === 1) {
//         currentLength++; // count consecutive 1s
//     } else {
//         currentLength = 0; // reset when 0 appears
//     }
//     maxLength = Math.max(maxLength, currentLength);
// }

// console.log(maxLength); // Output: 3
// }
// // // 685 Find max length subarray with all 0s
// {
// let data = [23,0,0,43,45,44,0,65,0,0,0,43,54,0]
// let maxLength = 0
// let currentLength = 0

// for(i=0;i<data.length;i++){
//     if(data[i]== 0){
//         currentLength++
//     }else{
//         currentLength = 0
//     }
//     maxLength = Math.max(maxLength,currentLength)
// }
// console.log(maxLength)
// }
// // // 686 Find length of longest increasing subarray
// {
// let data = [22, 23, 24, 23, 23, 34, 45, 54, 56, 43, 23, 54];

// let currentLength = 1; // start with length 1
// let longestLength = 1;

// for (let i = 1; i < data.length; i++) {
//     if (data[i] > data[i - 1]) {
//         currentLength++;
//     } else {
//         currentLength = 1;
//     }
//     longestLength = Math.max(longestLength, currentLength);
// }

// console.log(longestLength); // Output: 5
// }

// // // 687 Find length of longest decreasing subarray
// {let data = [22, 23, 65, 56, 45, 44, 43, 34, 32];

// let decreasing = 1;
// let currentLength = 1;

// for (let i = 1; i < data.length; i++) {
//     if (data[i] < data[i - 1]) {
//         currentLength++;
//     } else {
//         currentLength = 1; // Reset to 1, not 0
//     }
//     decreasing = Math.max(decreasing, currentLength);
// }

// console.log(decreasing); // Output: 7
// }

// // // 688 Count number of elements strictly greater than k
// {
// let data = [32,23,43,44,4,55,65,55,6,76,45,32]
// let k =33
// let count = 0
// for(i=0;i<data.length;i++){
//     if(data[i]>k){
//         count++
//     }
// }
// console.log(count)
// }
// // // 689 Check if all elements are distinct
// {
// let data = [23,32,55,33,43,45,55,65,54]
// let freq = {}
// let isDistinct = true

// for(i=0;i<data.length;i++){
//     let el = data[i]
//     if(freq[el]!==undefined){
//         isDistinct = false
//         break;
//     }else{
//         freq[el]  = 1
//     }
// }
// console.log(isDistinct)
// }
// // // 690 Count distinct elements
// {
// let data = [23, 32, 33, 43, 45, 54, 56, 56, 65, 44];
// let freq = {};
// let count = 0;

// for (let i = 0; i < data.length; i++) {
//     let el = data[i];
//     if (freq[el] === undefined) {
//         freq[el] = 1;
//         count++; // Only count first time
//     }
// }
// console.log("Distinct Elements Count:", count);
// }
// // // 691 Find element with minimum frequency
// {
// let data = [23, 32, 23, 23, 23, 32, 45, 45, 45, 45, 45];
// let freq = {};

// for (let i = 0; i < data.length; i++) {
//     let el = data[i];
//     if (freq[el] === undefined) {
//         freq[el] = 1;
//     } else {
//         freq[el] = freq[el] + 1;
//     }
// }

// let minFreq = Infinity
// let minFreqElement

// for(let key in freq){
//    if(freq[key]<minFreq){
//     minFreq = freq[key]
//     minFreqElement = key
//    }
// }

// console.log(minFreq,minFreqElement)
// }
// // // 692 Find element with maximum frequency
// {
// let data = [23,33,43,23,23,23,23,44,54,56,65]
// let freq = {}

// for(i=0;i<data.length;i++){
//     let el = data[i]
//     if(freq[el]===undefined){
//         freq[el] = 1
//     }else{
//         freq[el] = freq[el]+1
//     }
// }

// let maxFreq = -Infinity
// let maxFreqElement

// for(let key in freq){
//     if(freq[key]>maxFreq){
//         maxFreq = freq[key]
//         maxFreqElement = key

//     }
// }
// console.log(maxFreqElement,maxFreq)
// }
// // // 693 Compute prefix sum of array
// {
// let data = [4,5,6,22,34]
// let prefix = []

// prefix[0] = data[0]

// for(i=1;i<data.length;i++){
//     prefix[i] = prefix[i-1]+data[i]
// }
// console.log(prefix)
// }
// // // 694 Compute suffix sum of array
// {
// let data = [10, 20, 30, 40];
// let suffix = [];

// let n = data.length;
// suffix[n - 1] = data[n - 1]; // Last element same rahega

// for (let i = n - 2; i >= 0; i--) {
//     suffix[i] = suffix[i + 1] + data[i];
// }

// console.log(suffix); // Output: [100, 90, 70, 40]
// }

// // // 695 Replace every element with sum of left and right
// {
// let data = [1, 2, 3, 4, 5];
// let n = data.length;

// let prefix = new Array(n).fill(0);
// let suffix = new Array(n).fill(0);
// let result = new Array(n);

// // Calculate prefix sum
// prefix[0] = 0;  // No left element for the first
// for (let i = 1; i < n; i++) {
//     prefix[i] = prefix[i - 1] + data[i - 1];
// }

// // Calculate suffix sum
// suffix[n - 1] = 0;  // No right element for the last
// for (let i = n - 2; i >= 0; i--) {
//     suffix[i] = suffix[i + 1] + data[i + 1];
// }

// // Final result: sum of prefix and suffix for each element
// for (let i = 0; i < n; i++) {
//     result[i] = prefix[i] + suffix[i];
// }

// console.log(result);  // Output: [14, 13, 12, 11, 10]
// }

// // // // 696 Binary Search (Find an element in sorted array)
// {
// let arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
// let n = arr.length
// let target = 23
// let left = 0
// let right = n-1
// let found = false

// while(left<=right){
//     let mid = Math.floor((left+right)/2)

//     if(arr[mid]==target){
//         console.log(mid)
//         found = true
//         break
//     }else if(target<arr[mid]){
//         right = mid-1
//     }else{
//         left = mid+1
//     }

// }
// if(!found){
//     console.log("Element not found in array")
// }
// }
// // // 697 Find first occurrence of an element
// {
// let data = [23,32,34,33,45,54,34,65,45]
// let find = 34
// let index = -1

// for(i=0;i<data.length;i++){
//     if(data[i]==find){
//         index = i
//         break
//     }
// }
// console.log(index)
// }
// // // 698 Find last occurrence of an element
// {
// let data = [23,43,45,54,55,65,67,77,45,54,65]
// let find = 45
// let index = -1

// for(i=0;i<data.length;i++){
//     if(data[i]==find){
//         index = i
//     }

// }
// console.log(index)
// }
// // // 699 Find all occurrences of an element
// {
// let data = [23,32,34,23,443,54,56,23,54,34,23,54,45,23]
// let index = []
// let find = 23

// for(i=0;i<data.length;i++){
//     if(data[i]==find){
//         index[index.length] = i
//     }
// }
// console.log(index)
// }
// // // 700 Find the largest element using binary search
// {
// let data = [2, 3, 4, 5, 6, 7, 22, 43, 45, 56, 67, 77];
// let n = data.length;
// let largest = -Infinity;
// let left = 0;
// let right = n - 1;

// while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (data[mid] > largest) {
//         largest = data[mid];
//     }

//     // Move to the right half always, because array is increasing
//     left = mid + 1;
// }

// console.log("Largest element:", largest);
// }
// // // 701 Check if array is rotated sorted
// {
// let arr = [4, 5, 6, 1, 2, 3]; // you can change this
// let n = arr.length;
// let count = 0;

// for (let i = 0; i < n - 1; i++) {
//     if (arr[i] > arr[i + 1]) {
//         count++;
//     }
// }

// // Check last element with first
// if (arr[n - 1] > arr[0]) {
//     count++;
// }

// if (count <= 1) {
//     console.log("Array is rotated sorted");
// } else {
//     console.log("Array is NOT rotated sorted");
// }
// }

// // // 702 Check if array is palindrome using binary search
// {
// let arr = [1, 2, 3, 2, 1];
// let n = arr.length;
// let isPalindrome = true;

// let left = 0;
// let right = n - 1;

// while (left < right) {
//     if (arr[left] !== arr[right]) {
//         isPalindrome = false;
//         break;
//     }
//     left++;
//     right--;
// }

// if (isPalindrome) {
//     console.log("Array is a Palindrome");
// } else {
//     console.log("Array is NOT a Palindrome");
// }
// }
// // // 703 Search in rotated sorted array
// {
// let data = [5, 6, 7, 1, 2, 3, 4];
// let find = 7;
// let left = 0;
// let right = data.length - 1;
// let index = -1;

// while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (data[mid] === find) {
//         index = mid;
//         break;
//     }

//     // Check which half is sorted
//     if (data[left] <= data[mid]) {
//         // Left half is sorted
//         if (find >= data[left] && find < data[mid]) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     } else {
//         // Right half is sorted
//         if (find > data[mid] && find <= data[right]) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
// }

// console.log(index);
// }
// // // 704 Find peak element (local maxima)
// {
// let data = [1, 3, 20, 4, 1, 0];
// let left = 0
// let right = data.length-1

// while(left<=right){
//     let mid = Math.floor((left+right)/2)

//     let leftVal = mid>0?data[mid-1]:-Infinity
//     let rightVal = mid<data.length-1?data[mid+1]:-Infinity

//     if(data[mid]>=leftVal&&data[mid]>=rightVal){
//         console.log(mid)
//         break
//     }else if(leftVal>data[mid]){
//         right = mid-1
//     }else{
//         left = mid+1
//     }

// }
// }
// // // 705 Find valley element (local minima)
// {
// let data = [23, 32, 34, 54, 22, 54, 34];
// let left = 0;
// let right = data.length - 1;

// while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     let leftVal = mid > 0 ? data[mid - 1] : Infinity;
//     let rightVal = mid < data.length - 1 ? data[mid + 1] : Infinity;

//     if (data[mid] <= leftVal && data[mid] <= rightVal) {
//         console.log("Valley element:", data[mid]);
//         break;
//     } else if (leftVal < data[mid]) {
//         right = mid - 1;
//     } else {
//         left = mid + 1;
//     }
// }
// }

// // // 706 Search an element in sorted rotated array
//  {
// let data = [55, 66, 77, 22, 33, 44];
// let left = 0;
// let right = data.length - 1;
// let find = 66;

// while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (data[mid] === find) {
//         console.log("Element found at index:", mid);
//         break;
//     }

//     // Left half is sorted
//     if (data[left] <= data[mid]) {
//         if (find >= data[left] && find < data[mid]) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     // Right half is sorted
//     else {
//         if (find > data[mid] && find <= data[right]) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
// }
// }

// // // 707 Implement Binary Search on rotated array
// {
// let data = [56,67,77,23,32,34,43,45];
// let find = 32;
// let left = 0;
// let right = data.length - 1;

// while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (data[mid] === find) {
//         console.log("Found at index:", mid);
//         break;
//     }

//     // Left half is sorted
//     if (data[left] <= data[mid]) {
//         if (find >= data[left] && find < data[mid]) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }
//     // Right half is sorted
//     else {
//         if (find > data[mid] && find <= data[right]) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
// }
// }

// // // 708 Find the position of element in sorted rotated array
// {
// let data = [76, 67, 65, 56, 23, 32, 34, 45, 54];
// let find = 56;
// let left = 0;
// let right = data.length - 1;

// while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (data[mid] === find) {
//         console.log("Found at index:", mid);
//         break;
//     }

//     // Left half is sorted in descending order
//     if (data[left] >= data[mid]) {
//         if (find <= data[left] && find > data[mid]) {
//             right = mid - 1;
//         } else {
//             left = mid + 1;
//         }
//     }

//     // Right half is sorted in descending order
//     else {
//         if (find < data[mid] && find >= data[right]) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
// }

// }
// // 709 Find the index of the smallest element in rotated array
// {
// let data = [65, 67, 73, 75, 76, 23, 43, 44, 54];
// let left = 0;
// let right = data.length - 1;
// let ansIndex = -1;

// while(left<=right){
//     let mid = Math.floor((left+right)/2)
//     if(
//         (mid===0||data[mid]<data[mid-1])&&(mid===data.length-1||data[mid]<data[mid+1])

//     ){
//         ansIndex = mid
//         break
//     }
//     if(data[mid]<=data[right]){
//         right = mid-1
//     }else{
//         left = mid+1
//     }
// }

// console.log(data[ansIndex])
// }
// // // 710 Find element in an infinite sorted array
// {
// let arr = [2, 3, 5, 7, 9, 12, 15, 18, 21, 25, 29, 32, 36, 41, 44, 47, 50, 53, 56, 59, 63];
// let find = 47;
// let left = 0
// let right = 1

// while(arr[right]<find){
//     left = right
//     right = right *2

//     if(right>arr.length){
//         right = arr.length-1
//         break
//     }
// }

// while(left<=right){
//     let mid = Math.floor((left+right)/2)
//     if(arr[mid]===find){
//         console.log(mid)
//         break
//     }else if(arr[mid]<find){
//         left = mid+1
//     }else{
//         right = mid-1
//     }

// }

// }
// // // 711 Find missing element using Binary Search
// {
// let data = [1, 2, 3, 4, 6, 7, 8];
// let left = 0
// let right = data.length-1
// let missing = -1

// while(left<=right){
//     let mid = Math.floor((left+right)/2)
//     let expected = data[0] + mid
//     if(data[mid]===expected){
//         left = mid+1
//     }else{
//         missing = expected
//         right = mid-1
//     }
// }
// console.log(missing)

// }
// // // // 712 Count number of elements smaller than x
// {
// let data = [2,3,4,5,6,7,22,23,24,25,26];
// let x = 5
// let left = 0
// let right = data.length-1
// let ans = -1

// while(left<=right){
//     let mid = Math.floor((left+right)/2)
//     if(data[mid]<x){
//         ans = mid
//         left = mid+1
//     }else{
//         right = mid - 1
//     }
// }
// console.log("Count of elements smaller than", x, "is", ans + 1);
// }
// // 713 Count number of elements greater than x
// {
// let data = [2, 3, 4, 5, 6, 7, 22, 23, 34, 35, 45];
// let x = 7;
// let left = 0;
// let right = data.length - 1;
// let ans = -1;

// while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (data[mid] > x) {
//         ans = mid;
//         right = mid - 1; // Try to find smaller index > x
//     } else {
//         left = mid + 1;
//     }
// }

// if (ans !== -1) {
//     console.log("Count of elements greater than", x, "is", data.length - ans);
// } else {
//     console.log("No element greater than", x);
// }
// }

// // // 714 Count number of elements equal to x
//  {
// let data = [2,3,4,4,4,4,4,5,6,7];
// let x = 4;

// // First occurrence
// let left = 0;
// let right = data.length - 1;
// let first = -1;

// while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (data[mid] === x) {
//         first = mid;
//         right = mid - 1;
//     } else if (data[mid] < x) {
//         left = mid + 1;
//     } else {
//         right = mid - 1;
//     }
// }

// // Last occurrence
// left = 0;
// right = data.length - 1;
// let last = -1;

// while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (data[mid] === x) {
//         last = mid;
//         left = mid + 1;
//     } else if (data[mid] < x) {
//         left = mid + 1;
//     } else {
//         right = mid - 1;
//     }
// }

// if (first !== -1 && last !== -1) {
//     let count = last - first + 1;
//     console.log("Count of", x, "is", count);
// } else {
//     console.log(x, "not found");
// }
// }
// // // 715 Implement Stack using Array
// {
// let stack = [22,33]
// let max_stack = 22

// function push(element){
//     if(stack.length>=max_stack){
//         console.log("Stack is full")
//     }else{
//         stack[stack.length] = element
//         console.log(element + "push to stack")
//     }
//     return stack
// }
// function pop(){
//     if(stack.length===0){
//         console.log("Stack in empty")
//     }else{
//         let popp = stack[stack.length-1]
//         stack.length = stack.length-1
//         console.log(popp+"popped from stack")
//         return popp
//     }
// }
// function peak(){
//     if(stack.length===0){
//         console.log("Stack is empty")
//         return null
//     }else{
//         console.log("Top element is "+stack[stack.length-1])
//         return stack[stack.length-1]
//     }
// }
// console.log(push(33))
// console.log(push(55))
// // console.log(pop())
// console.log(peak())
// }
// // // 716 Implement Queue using Array

// {
// let quere = []
// let Max_size = 55

// function enquene(element){
//     if(quere.length>=Max_size){
//         console.log("Queue Overflow")
//     }else{
//         quere[quere.length] = element
//         console.log(element + "enqueued")
//     }
// }
// function dequeu(){
//     if(quere.length===0){
//         console.log("Quere UnderFlow")
//         return null
//     }else{
//         let removed = quere[0]
//         for(i=0;i<quere.length-1;i++){
//             quere[i] = quere[i+1]
//         }
//         quere.length = quere.length-1
//         console.log(removed+"dequeued")
//         return removed
//     }
// }
// function front(){
//     if(quere.length===0){
//         console.log("Quere is empty")
//         return null
//     }else{
//         console.log("Front element is "+quere[0])
//         return quere[0]
//     }
// }
// enquene(34)
// enquene(55)
// dequeu()
// front()
// }

// // // 718 Implement Stack using Queues
// {
// let data = [23,332,34,43]

// function createQueue(){
//     return []
// }

// function enquene(quere,element){
//     quere[quere.length] = element
// }

// function dequeue(quere){
//     if(quere.length===0) return null
//     let front = quere[0]
//     for(i=0;i<data.length-1;i++){
//         data[i] = data[i+1]
//     }
//     data.length = data.length-1
//     return front
// }

// function front(quere){
//     return quere.length>0? quere[0] : null
// }
// function isEmpty(){
//     return data.length === 0
// }


// // Stack implementation
// let q1 = createQueue();
// let q2 = createQueue();

// function push(x) {
//     // Step 1: Add to q2
//     enqueue(q2, x);

//     // Step 2: Transfer all from q1 to q2
//     while (!isEmpty(q1)) {
//         enqueue(q2, dequeue(q1));
//     }

//     // Step 3: Swap q1 and q2
//     let temp = q1;
//     q1 = q2;
//     q2 = temp;

//     console.log(x + " pushed to stack");
// }

// function pop() {
//     if (isEmpty(q1)) {
//         console.log("Stack Underflow");
//         return null;
//     }
//     let removed = dequeue(q1);
//     console.log(removed + " popped from stack");
//     return removed;
// }

// function top() {
//     if (isEmpty(q1)) {
//         console.log("Stack is empty");
//         return null;
//     }
//     console.log("Top element is: " + front(q1));
//     return front(q1);
// }

// function isStackEmpty() {
//     return isEmpty(q1);
// }

// function printStack() {
//     if (isEmpty(q1)) {
//         console.log("Stack is empty");
//     } else {
//         console.log("Stack elements:");
//         for (let i = 0; i < q1.length; i++) {
//             console.log(q1[i]);
//         }
//     }
// }
// }
// // // 719 Implement Queue using Stacks
// {
// // Helper Stack Functions
// function createStack() {
//     return [];
// }

// function push(stack, x) {
//     stack[stack.length] = x;
// }

// function pop(stack) {
//     if (stack.length === 0) return null;
//     let top = stack[stack.length - 1];
//     stack.length = stack.length - 1;
//     return top;
// }

// function peek(stack) {
//     if (stack.length === 0) return null;
//     return stack[stack.length - 1];
// }

// function isEmpty(stack) {
//     return stack.length === 0;
// }

// // Two stacks
// let s1 = createStack();
// let s2 = createStack();

// // Enqueue operation (O(1))
// function enqueue(x) {
//     push(s1, x);
//     console.log(x + " enqueued");
// }

// // Dequeue operation (Amortized O(1))
// function dequeue() {
//     if (isEmpty(s2)) {
//         while (!isEmpty(s1)) {
//             push(s2, pop(s1));
//         }
//     }
//     if (isEmpty(s2)) {
//         console.log("Queue Underflow");
//         return null;
//     }
//     let removed = pop(s2);
//     console.log(removed + " dequeued");
//     return removed;
// }

// // Front operation (O(1) amortized)
// function front() {
//     if (isEmpty(s2)) {
//         while (!isEmpty(s1)) {
//             push(s2, pop(s1));
//         }
//     }
//     if (isEmpty(s2)) {
//         console.log("Queue is empty");
//         return null;
//     }
//     console.log("Front element is: " + peek(s2));
//     return peek(s2);
// }

// // Check if queue is empty
// function isQueueEmpty() {
//     return isEmpty(s1) && isEmpty(s2);
// }

// // Print queue elements
// function printQueue() {
//     if (isQueueEmpty()) {
//         console.log("Queue is empty");
//         return;
//     }

//     // Print s2 elements from top to bottom
//     for (let i = s2.length - 1; i >= 0; i--) {
//         console.log(s2[i]);
//     }
//     // Print s1 elements from bottom to top
//     for (let i = 0; i < s1.length; i++) {
//         console.log(s1[i]);
//     }
// }
// }

// // // 720 Valid Parentheses
// {
// function isValidParentheses(s){
//     let stack = []

//     function isMatch(open,close){
//         return (open==="("&& close===")")||
//         (open==="{"&& close==="}")||
//         (open==="["&& close ==="]")
//     }
//     for(i=0;i<s.length;i++){
//         let ch = s[i]
//         if(ch==="("||ch==="{"||ch==="["){
//             stack[stack.length] = ch
//         }else{
//             if(stack.length===0){
//                 return false
//             }
//             let top = stack[stack.length-1]
//         if(isMatch(top,ch)){
//             stack.length = stack.length-1
//         }else{
//             return false
//         }
//         }
        
//     }
//     return stack.length ===0
// }
// console.log(isValidParentheses('2'))
// }

// // 721 Reverse a Stack

// {
// function createStack() {
//     return [];
// }

// function push(stack, x) {
//     stack[stack.length] = x;
// }

// function pop(stack) {
//     if (stack.length === 0) return null;
//     let top = stack[stack.length - 1];
//     stack.length = stack.length - 1;
//     return top;
// }

// function isEmpty(stack) {
//     return stack.length === 0;
// }

// function printStack(stack) {
//     console.log("Stack (Top to Bottom):");
//     for (let i = stack.length - 1; i >= 0; i--) {
//         console.log(stack[i]);
//     }
// }

// // Reverse a stack using another stack
// function reverseStack(original) {
//     let tempStack = createStack();

//     while (!isEmpty(original)) {
//         push(tempStack, pop(original));
//     }

//     // Optional: copy back if needed
//     while (!isEmpty(tempStack)) {
//         push(original, pop(tempStack));
//     }
// }

// let data = createStack()
// push(data,33)
// push(data,32)
// console.log(data)
// reverseStack(data)
// console.log(data)
// }
// // // 722 Reverse a Queue
// {
// function createQueue() {
//     return [];
// }

// function enqueue(queue, x) {
//     queue[queue.length] = x;
// }

// function dequeue(queue) {
//     if (queue.length === 0) return null;
//     let front = queue[0];
//     for (let i = 0; i < queue.length - 1; i++) {
//         queue[i] = queue[i + 1];
//     }
//     queue.length = queue.length - 1;
//     return front;
// }

// function isQueueEmpty(queue) {
//     return queue.length === 0;
// }

// function printQueue(queue) {
//     console.log("Queue Front ➝ Rear:");
//     for (let i = 0; i < queue.length; i++) {
//         console.log(queue[i]);
//     }
// }

// // Reverse the queue using a stack
// function reverseQueue(queue) {
//     let stack = [];

//     // Step 1: Dequeue all and push into stack
//     while (!isQueueEmpty(queue)) {
//         stack[stack.length] = dequeue(queue);
//     }

//     // Step 2: Pop from stack and enqueue back
//     while (stack.length > 0) {
//         enqueue(queue, stack[stack.length - 1]);
//         stack.length = stack.length - 1;
//     }
// }

// // // 723 Next Greater Element to the Right
// {
// function nextGreaterElementRight(arr) {
//     let n = arr.length;
//     let result = new Array(n);
//     let stack = [];

//     for (let i = n - 1; i >= 0; i--) {
//         // Pop all smaller or equal elements
//         while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
//             stack.length = stack.length - 1; // pop
//         }

//         // Top of stack is the next greater, if stack is not empty
//         if (stack.length === 0) {
//             result[i] = -1;
//         } else {
//             result[i] = stack[stack.length - 1];
//         }

//         // Push current element
//         stack[stack.length] = arr[i];
//     }

//     return result;
// }
// }
// // // 724 Next Smaller Element to the Right
// {
// function nextSmallerElementRight(arr) {
//     let n = arr.length;
//     let result = new Array(n);
//     let stack = [];

//     for (let i = n - 1; i >= 0; i--) {
//         // Remove all elements >= current
//         while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
//             stack.length = stack.length - 1; // pop
//         }

//         // Result
//         if (stack.length === 0) {
//             result[i] = -1;
//         } else {
//             result[i] = stack[stack.length - 1];
//         }

//         // Push current element
//         stack[stack.length] = arr[i];
//     }

//     return result;
// }
// }
// // // 725 Next Greater Element to the Left
// {
// function nextGreaterElementLeft(arr) {
//     let n = arr.length;
//     let result = new Array(n);
//     let stack = [];

//     for (let i = 0; i < n; i++) {
//         // Pop smaller or equal elements
//         while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
//             stack.length = stack.length - 1; // pop
//         }

//         // Top is the next greater to left
//         if (stack.length === 0) {
//             result[i] = -1;
//         } else {
//             result[i] = stack[stack.length - 1];
//         }

//         // Push current element
//         stack[stack.length] = arr[i];
//     }

//     return result;
// }
// }
// }
// // // 726 Next Smaller Element to the Left
// {
// function nextSmallerElementLeft(arr) {
//     let n = arr.length;
//     let result = new Array(n);
//     let stack = [];

//     for (let i = 0; i < n; i++) {
//         // Pop all elements >= current
//         while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
//             stack.length = stack.length - 1; // pop
//         }

//         // Check result
//         if (stack.length === 0) {
//             result[i] = -1;
//         } else {
//             result[i] = stack[stack.length - 1];
//         }

//         // Push current element
//         stack[stack.length] = arr[i];
//     }

//     return result;
// }
// }
// // // 727 Balanced Brackets
// {
// function isBalancedBrackets(str) {
//     let stack = [];
//     for (let i = 0; i < str.length; i++) {
//         let ch = str[i];

//         // Opening brackets
//         if (ch === '(' || ch === '{' || ch === '[') {
//             stack[stack.length] = ch;
//         }
//         // Closing brackets
//         else if (ch === ')' || ch === '}' || ch === ']') {
//             if (stack.length === 0) return false; // No opening bracket to match
//             let top = stack[stack.length - 1];

//             if (
//                 (ch === ')' && top === '(') ||
//                 (ch === '}' && top === '{') ||
//                 (ch === ']' && top === '[')
//             ) {
//                 stack.length = stack.length - 1; // pop
//             } else {
//                 return false;
//             }
//         }
//     }

//     // If stack is empty → balanced
//     return stack.length === 0;
// }
// }

// // // 728 Remove Consecutive Duplicates from Stack
// {
// function removeConsecutiveDuplicates(originalStack) {
//     let tempStack = [];

//     while (originalStack.length > 0) {
//         let current = originalStack[originalStack.length - 1]; // peek
//         originalStack.length = originalStack.length - 1; // pop

//         // If tempStack is empty or top ≠ current, push
//         if (tempStack.length === 0 || tempStack[tempStack.length - 1] !== current) {
//             tempStack[tempStack.length] = current;
//         }
//     }

//     // Reverse again to maintain original order
//     let resultStack = [];
//     while (tempStack.length > 0) {
//         resultStack[resultStack.length] = tempStack[tempStack.length - 1];
//         tempStack.length = tempStack.length - 1;
//     }

//     return resultStack;
// }
// }
// // // 729 Evaluate Postfix Expression
// {
// function evaluatePostfix(expr) {
//     let tokens = expr.split(" ");
//     let stack = [];

//     for (let i = 0; i < tokens.length; i++) {
//         let token = tokens[i];

//         // If token is number, push
//         if (!isNaN(token)) {
//             stack[stack.length] = Number(token);
//         } 
//         // Else token is operator
//         else {
//             let b = stack[stack.length - 1]; stack.length = stack.length - 1; // pop
//             let a = stack[stack.length - 1]; stack.length = stack.length - 1; // pop

//             let result = 0;

//             if (token === '+') result = a + b;
//             else if (token === '-') result = a - b;
//             else if (token === '*') result = a * b;
//             else if (token === '/') result = Math.floor(a / b); // integer division

//             stack[stack.length] = result;
//         }
//     }

//     return stack[0];
// }
// }
// // // 730 Evaluate Prefix Expression
// {
// function evaluatePrefix(expr) {
//     let tokens = expr.split(" ");
//     let stack = [];

//     for (let i = tokens.length - 1; i >= 0; i--) {
//         let token = tokens[i];

//         // If token is number, push
//         if (!isNaN(token)) {
//             stack[stack.length] = Number(token);
//         } 
//         // If token is operator
//         else {
//             let a = stack[stack.length - 1]; stack.length = stack.length - 1;
//             let b = stack[stack.length - 1]; stack.length = stack.length - 1;

//             let result = 0;

//             if (token === '+') result = a + b;
//             else if (token === '-') result = a - b;
//             else if (token === '*') result = a * b;
//             else if (token === '/') result = Math.floor(a / b); // integer division

//             stack[stack.length] = result;
//         }
//     }

//     return stack[0];
// }
// }

// // // 732 Stack using Linked List
// {
// function createNode(value) {
//     return {
//         data: value,
//         next: null
//     };
// }
// let top = null;  // Head of the stack

// function push(value) {
//     let newNode = createNode(value);

//     // Push to top (head)
//     newNode.next = top;
//     top = newNode;
// }

// function pop() {
//     if (top === null) {
//         console.log("Stack Underflow");
//         return null;
//     }

//     let temp = top;
//     top = top.next;

//     return temp.data;
// }

// function peek() {
//     if (top === null) return null;
//     return top.data;
// }

// function isEmpty() {
//     return top === null;
// }
// }
// // // 734 Implement Circular Queue
// {
// function createNode(value) {
//     return {
//         data: value,
//         next: null
//     };
// }

// let front = null;  // Head of the queue
// let rear = null;   // Tail of the queue
// let size = 0;      // To track size of queue
// const MAX_SIZE = 5; // Optional: Maximum size for queue (can be set dynamically)

// function enqueue(value) {
//     if (size === MAX_SIZE) {
//         console.log("Queue Overflow");
//         return;
//     }

//     let newNode = createNode(value);

//     if (rear === null) {
//         // First node
//         front = rear = newNode;
//         newNode.next = front; // Circular link
//     } else {
//         rear.next = newNode;
//         rear = newNode;
//         rear.next = front; // Circular link
//     }

//     size++;
// }

// function dequeue() {
//     if (size === 0) {
//         console.log("Queue Underflow");
//         return null;
//     }

//     let temp = front;
//     if (front === rear) {
//         // Only one element in queue
//         front = rear = null;
//     } else {
//         front = front.next;
//         rear.next = front;  // Maintain circular link
//     }

//     size--;
//     return temp.data;
// }

// function peek() {
//     if (size === 0) return null;
//     return front.data;
// }

// function isEmpty() {
//     return size === 0;
// }

// function isFull() {
//     return size === MAX_SIZE;
// }

// function getSize() {
//     return size;
// }
// }
// // // 735 Remove K Digits
// {
// function removeKdigits(num, k) {
//     let stack = [];

//     // Process each digit of num
//     for (let i = 0; i < num.length; i++) {
//         while (k > 0 && stack.length > 0 && stack[stack.length - 1] > num[i]) {
//             stack.pop();
//             k--;
//         }
//         stack.push(num[i]);
//     }

//     // Remove remaining digits if k > 0
//     while (k > 0) {
//         stack.pop();
//         k--;
//     }

//     // Convert the stack to a string and remove leading zeros
//     let result = stack.join('').replace(/^0+/, '');
    
//     // If result is empty, return "0"
//     return result.length === 0 ? "0" : result;
// }
// }

// // // 736 Sum of Minimums of all Subarrays
// {
// function sumOfSubarrayMins(arr) {
//     let n = arr.length;
//     let mod = 1e9 + 7;

//     // Initialize stacks and results
//     let prevSmaller = new Array(n).fill(-1);
//     let nextSmaller = new Array(n).fill(n);
//     let stack = [];

//     // Finding Previous Smaller Element
//     for (let i = 0; i < n; i++) {
//         while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
//             stack.pop();
//         }
//         if (stack.length) prevSmaller[i] = stack[stack.length - 1];
//         stack.push(i);
//     }

//     // Finding Next Smaller Element
//     stack = [];
//     for (let i = n - 1; i >= 0; i--) {
//         while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
//             stack.pop();
//         }
//         if (stack.length) nextSmaller[i] = stack[stack.length - 1];
//         stack.push(i);
//     }

//     // Now calculate the sum of minimums
//     let result = 0;
//     for (let i = 0; i < n; i++) {
//         let leftCount = i - prevSmaller[i];
//         let rightCount = nextSmaller[i] - i;
//         result = (result + (arr[i] * leftCount * rightCount) % mod) % mod;
//     }

//     return result;
// }
// }

// // // 737 Daily Temperatures (Leetcode 739)
// {
// function dailyTemperatures(temperatures) {
//     let n = temperatures.length;
//     let result = new Array(n).fill(0);  // Result array initialized to 0
//     let stack = [];  // Stack to store indices of temperatures

//     for (let i = 0; i < n; i++) {
//         // While the current temperature is greater than the temperature at the top index of stack
//         while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
//             let idx = stack.pop();
//             result[idx] = i - idx;  // Calculate the days to wait for the next warmer temperature
//         }
//         stack.push(i);  // Push the current index to stack
//     }

//     return result;
// }
// }

// // // 738 Min Stack (getMin in O(1))
// {
// function MinStack() {
//     this.stack = [];    // Main stack to store elements
//     this.minStack = []; // Stack to store minimums at each level
// }

// // Push element onto the stack
// MinStack.prototype.push = function(x) {
//     this.stack.push(x);
//     // If minStack is empty or x is smaller than the top element of minStack, push x onto minStack
//     if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
//         this.minStack.push(x);
//     } else {
//         // Otherwise, push the current minimum element again
//         this.minStack.push(this.minStack[this.minStack.length - 1]);
//     }
// };

// // Pop the top element from the stack
// MinStack.prototype.pop = function() {
//     this.stack.pop();
//     this.minStack.pop();
// };

// // Get the top element of the stack
// MinStack.prototype.top = function() {
//     return this.stack[this.stack.length - 1];
// };

// // Get the minimum element from the stack
// MinStack.prototype.getMin = function() {
//     return this.minStack[this.minStack.length - 1];
// };
// }

// // // 779 LRU Cache
// {
// function LRUCache(capacity) {
//     this.capacity = capacity;
//     this.cache = new Map();  // HashMap to store key-value pairs
//     this.order = new DoublyLinkedList();  // Doubly Linked List to track LRU order
// }

// // Get the value from the cache
// LRUCache.prototype.get = function(key) {
//     if (this.cache.has(key)) {
//         // Move the accessed node to the front (most recently used)
//         moveToFront(this.cache.get(key));
//         return this.cache.get(key).value;
//     }
//     return -1;
// };

// // Insert or update the cache
// LRUCache.prototype.put = function(key, value) {
//     if (this.cache.has(key)) {
//         // Update the value and move the node to the front
//         this.cache.get(key).value = value;
//         moveToFront(this.cache.get(key));
//     } else {
//         // If cache exceeds capacity, remove the LRU node
//         if (this.cache.size >= this.capacity) {
//             const lruNode = removeLast();
//             this.cache.delete(lruNode.key);
//         }
//         // Add the new key-value pair and node to the front
//         const newNode = new Node(key, value);
//         this.cache.set(key, newNode);
//         addFirst(newNode);
//     }
// };

// // Add a node to the front (most recently used)
// function addFirst(node) {
//     const nextNode = this.head.next;
//     this.head.next = node;
//     node.prev = this.head;
//     node.next = nextNode;
//     nextNode.prev = node;
// }

// // Move a node to the front
// function moveToFront(node) {
//     remove(node);
//     addFirst(node);
// }

// // Remove a node from the list
// function remove(node) {
//     const prevNode = node.prev;
//     const nextNode = node.next;
//     prevNode.next = nextNode;
//     nextNode.prev = prevNode;
// }

// // Remove the last node (LRU node)
// function removeLast() {
//     const lastNode = this.tail.prev;
//     remove(lastNode);
//     return lastNode;
// }

// function Node(key = null, value = null) {
//     this.key = key;
//     this.value = value;
//     this.prev = null;
//     this.next = null;
// }

// function DoublyLinkedList() {
//     this.head = new Node();  // Dummy head node
//     this.tail = new Node();  // Dummy tail node
//     this.head.next = this.tail;
//     this.tail.prev = this.head;
// }
// }

// // // 780 Largest Rectangle in Histogram
// {
// function largestRectangleArea(heights) {
//     let stack = [];
//     let maxArea = 0;
    
//     // Traverse through all bars in the histogram
//     for (let i = 0; i <= heights.length; i++) {
//         // We consider an extra bar at the end with height 0 to clear the stack
//         let h = (i === heights.length) ? 0 : heights[i];
        
//         while (stack.length > 0 && h < heights[stack[stack.length - 1]]) {
//             let height = heights[stack.pop()];
//             let width = (stack.length === 0) ? i : i - stack[stack.length - 1] - 1;
//             maxArea = Math.max(maxArea, height * width);
//         }
        
//         stack.push(i);
//     }
    
//     return maxArea;
// }
// }
// // // 781 Sliding Window Maximum
// {
// function maxSlidingWindow(nums, k) {
//     let result = [];
//     let deque = [];

//     for (let i = 0; i < nums.length; i++) {
//         // Remove indices of elements that are out of the window
//         if (deque.length && deque[0] < i - k + 1) {
//             deque.shift();
//         }

//         // Remove all elements smaller than the current element
//         // from the back of the deque
//         while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
//             deque.pop();
//         }

//         // Add current element index to deque
//         deque.push(i);

//         // Once we have a valid window, add the maximum element to result
//         if (i >= k - 1) {
//             result.push(nums[deque[0]]);
//         }
//     }

//     return result;
// }
// }

// // // 782 Decode String
// {
// function decodeString(s) {
//     let stack = [];
//     let currentString = '';
//     let currentNum = 0;

//     for (let i = 0; i < s.length; i++) {
//         let char = s[i];

//         if (char === '[') {
//             // Push current string and number onto the stack
//             stack.push([currentString, currentNum]);
//             currentString = ''; // Reset currentString for new sequence
//             currentNum = 0; // Reset currentNum for new sequence
//         } else if (char === ']') {
//             // Pop from stack and repeat the string 'currentNum' times
//             let [prevString, num] = stack.pop();
//             currentString = prevString + currentString.repeat(num);
//         } else if (char >= '0' && char <= '9') {
//             // Build the number (in case the number has more than 1 digit)
//             currentNum = currentNum * 10 + (char - '0');
//         } else {
//             // Add character to currentString
//             currentString += char;
//         }
//     }

//     return currentString;
// }
// }

// // // 783 Remove All Adjacent Duplicates
// {
// function removeDuplicates(s) {
//     let stack = [];
    
//     for (let char of s) {
//         if (stack.length > 0 && stack[stack.length - 1] === char) {
//             // If the top of the stack is the same as current character, pop it
//             stack.pop();
//         } else {
//             // Otherwise, push the current character onto the stack
//             stack.push(char);
//         }
//     }
    
//     // Convert the stack to a string and return it
//     return stack.join('');
// }

// }
// // // 784 Online Stock Span
// {
// function dailyStockSpan(prices) {
//     let stack = [];
//     let result = [];

//     for (let i = 0; i < prices.length; i++) {
//         // Calculate span for the current day
//         let span = 1;

//         // Pop elements from the stack while they are less than or equal to current price
//         while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
//             stack.pop();
//         }

//         // If the stack is not empty, calculate the span
//         if (stack.length > 0) {
//             span = i - stack[stack.length - 1];
//         } else {
//             // If stack is empty, the span is the whole length
//             span = i + 1;
//         }

//         // Push the current index to the stack
//         stack.push(i);

//         // Store the result
//         result.push(span);
//     }

//     return result;
// }
// }
// // // 785 Implement Deque
// {
// class Deque {
//     constructor() {
//         this.items = [];
//     }

//     // Add element to the front
//     addFirst(x) {
//         this.items.unshift(x); // unshift() adds element to the front
//     }

//     // Add element to the back
//     addLast(x) {
//         this.items.push(x); // push() adds element to the back
//     }

//     // Remove element from the front
//     removeFirst() {
//         if (this.isEmpty()) {
//             return 'Deque is empty';
//         }
//         return this.items.shift(); // shift() removes element from the front
//     }

//     // Remove element from the back
//     removeLast() {
//         if (this.isEmpty()) {
//             return 'Deque is empty';
//         }
//         return this.items.pop(); // pop() removes element from the back
//     }

//     // Get element from the front
//     getFirst() {
//         if (this.isEmpty()) {
//             return 'Deque is empty';
//         }
//         return this.items[0]; // Access the front element
//     }

//     // Get element from the back
//     getLast() {
//         if (this.isEmpty()) {
//             return 'Deque is empty';
//         }
//         return this.items[this.items.length - 1]; // Access the back element
//     }

//     // Check if deque is empty
//     isEmpty() {
//         return this.items.length === 0;
//     }

//     // Get the size of the deque
//     size() {
//         return this.items.length;
//     }
// }
// }
// // // 786 Next Greater Frequency Element
// {
// function nextGreaterFrequencyElement(arr) {
//     let freqMap = {};
//     let result = new Array(arr.length).fill(-1);
    
//     // Step 1: Create frequency map
//     for (let num of arr) {
//         if (freqMap[num]) {
//             freqMap[num]++;
//         } else {
//             freqMap[num] = 1;
//         }
//     }
    
//     // Step 2: Use stack to find next greater frequency element
//     let stack = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         let currentElement = arr[i];
//         let currentFrequency = freqMap[currentElement];
        
//         while (stack.length > 0 && freqMap[arr[stack[stack.length - 1]]] < currentFrequency) {
//             let index = stack.pop();
//             result[index] = currentElement; // Update result for the previous element
//         }
        
//         // Push the current index onto the stack
//         stack.push(i);
//     }
    
//     return result;
// }
// }
// // // 787 Celebrity Problem
// {
// function findCelebrity(n) {
//     let left = 0, right = n - 1;

//     // Step 1: Find a candidate who might be a celebrity
//     while (left < right) {
//         if (knows(left, right)) {
//             // If left knows right, left cannot be the celebrity
//             left++;
//         } else {
//             // If left does not know right, right cannot be the celebrity
//             right--;
//         }
//     }

//     // Step 2: Validate if the candidate is really the celebrity
//     let candidate = left;

//     for (let i = 0; i < n; i++) {
//         // Check if candidate knows anyone or if anyone does not know the candidate
//         if (i !== candidate && (knows(candidate, i) || !knows(i, candidate))) {
//             return -1; // No celebrity found
//         }
//     }

//     return candidate;
// }
// }
 
// // // 788 First Non-repeating Character in a Stream
// {
// function FirstNonRepeating(str) {
//     let frequencyMap = new Map();
//     let queue = [];
//     let result = "";

//     for (let i = 0; i < str.length; i++) {
//         let currentChar = str[i];

//         // Update frequency map
//         if (frequencyMap.has(currentChar)) {
//             frequencyMap.set(currentChar, frequencyMap.get(currentChar) + 1);
//         } else {
//             frequencyMap.set(currentChar, 1);
//         }

//         // Add the current character to the queue if its frequency is 1
//         queue.push(currentChar);

//         // Remove elements from the front of the queue if their frequency is greater than 1
//         while (queue.length > 0 && frequencyMap.get(queue[0]) > 1) {
//             queue.shift();  // Remove the element from front of the queue
//         }

//         // If the queue is not empty, the front element is the first non-repeating character
//         if (queue.length > 0) {
//             result += queue[0];
//         } else {
//             result += '#';  // If no non-repeating character, append '#'
//         }
//     }

//     return result;
// }
// }

// // // 789  Rotting Oranges
// {
// function orangesRotting(grid) {
//     let rows = grid.length;
//     let cols = grid[0].length;
    
//     let queue = [];
//     let freshOranges = 0;
//     let minutes = 0;

//     // Step 1: Initialize the queue with rotten oranges and count fresh ones
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (grid[i][j] === 2) {
//                 queue.push([i, j]);  // Add rotten oranges to the queue
//             } else if (grid[i][j] === 1) {
//                 freshOranges++;  // Count fresh oranges
//             }
//         }
//     }

//     // Directions for moving up, down, left, right
//     const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

//     // Step 2: Perform BFS
//     while (queue.length > 0 && freshOranges > 0) {
//         let size = queue.length;
        
//         for (let i = 0; i < size; i++) {
//             let [x, y] = queue.shift();

//             // Try to rot all adjacent fresh oranges
//             for (let dir of directions) {
//                 let newX = x + dir[0];
//                 let newY = y + dir[1];
                
//                 // Check if the new position is valid and the orange is fresh
//                 if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] === 1) {
//                     grid[newX][newY] = 2;  // Rot the orange
//                     freshOranges--;  // Decrease the count of fresh oranges
//                     queue.push([newX, newY]);  // Add the rotten orange to the queue
//                 }
//             }
//         }
        
//         // Increment the minutes after processing one level of BFS
//         minutes++;
//     }

//     // Step 3: Check if all fresh oranges are rotted
//     return freshOranges === 0 ? minutes : -1;
// }
// }

