{// // 1 Insert element in array

    let data = [23,45,65,76,34]

    Array.prototype.add = function(position,element){
        for(i=this.length-1;i>=0;i--){
            if(i>=position){
                data[i+1] = data[i]
    
                if(i==position){
                    data[i] = element
                }
            }
        }
    }
    data.add(4,666)
    console.log(data)
    }
    
    // 2 delete first element from array
    
    {
    let data = [23,45,65,34,65]
    Array.prototype.deleteFirstElement = function(){
        for(i=0;i<=this.length-1;i++){
            data[i] = data[i+1]
        }
        data.length = data.length-1
    }
    
    data.deleteFirstElement()
    console.log(data)
    }
    
    // // 3 delete last element of array
    {
    
    
    let data = [23,4,343,34,54,223]
    
    Array.prototype.deleteLastElement = function(){
        this.length = this.length-1
    }
    data.deleteLastElement()
    console.log(data)
    
    }
    
    // 4 delete input element from array
    {
    let data = [23, 3, 3, 454, 34, 76, 45, 44];
    
    Array.prototype.deleteAnyElement = function(element) {
        let k = 0;
    
        for (let i = 0; i < this.length; i++) {
            if (this[i] !== element) {
                this[k] = this[i];
                k++;
            }
        }
    
        // Trim the extra leftover elements
        this.length = k;
    };
    data.deleteAnyElement(44)
    console.log(data)
    }
    
    
    // // 5 find element and show position from array
    {
    let data = [23,43,45,54,65,23,75]
    Array.prototype.findElement = function(element){
        let index = undefined
        for(i=0;i<=this.length;i++){
            if(this[i]==element){
                index = i
                console.log(`Your element ${element} position is ${i}`)
                break
            }
        }
        if(index==undefined){
            console.log("Element not found this array")
        }
    }
    data.findElement(75)
    }
    
    
    // // 6 count input element from array
    {
    let data = [23,34,54,34,23,23,65,45,23,23]
    Array.prototype.countElement = function(element){
        let count = 0
        for(i=0;i<=this.length;i++){
            if(this[i]==element){
                count++
            }
        }
        console.log(`Your element ${count} times in array`)
    }
    data.countElement(23)
    }
    
    // // 7 Marge two array using for loop
    
    {
    let data = [23,4,55,33,55,67,65]
    let data2 = [23,54,67,33,66,77,23]
    let data3 = []
    
    for(i=0;i<data.length;i++){
        data3[i] = data[i]
    }
    for(i=0;i<data.length;i++){
        data3[data.length+i] = data2[i]
    }
    console.log(data3)  
    }
    
    
    // // 8 Marge two array in sorting form using while loop
    {
    let data1 = [23,32,43,54,233]
    let data2 = [23,64,65,45,34,44]
    let data3 = []
    let d1 = 0 
    let d2 = 0
    let d3 = 0
    
    while(d1<data1.length&&d2<data2.length){
        if(data1[d1]<data2[d2]){
            data3[d3] = data1[d1]
            d1++
        }else{
            data3[d3] = data2[d2]
            d2++
        }d3++
    }
    while(d1<data1.length){
        data3[d3] =  data1[d1]
        d1++
        d3++
    }
    console.log(data3)
    }
     
    // // 9 Marge to array in sorting form using loop
    {
    let data = [23,43,54,65,34,23]
    let data2 = [23,32,44]
    let data3 = []
    for(i=0;i<data.length;i++){
        data3[i] = data[i]
    }
    for(i=0;i<data2.length;i++){
        data3[data.length+i] = data2[i]
    } 
    for(i=0;i<data3.length;i++){
        for(j=0;j<data3.length;j++){
            if(data3[j]>data3[j+1]){
                let temp =  data3[j]
               data3[j] = data3[j+1]
               data3[j+1] = temp
            }
        }
    }
    console.log(data3)
    }
    
    // // 10 Reverse array
    {
    let data = [23,34,54,65,67,76]
    let start = 0
    let end = data.length-1
    
    while(start<end){
        let temp = data[start]
        data[start] = data[end]
        data[end] = temp
        start++
        end--
    }
    console.log(data)
    
    }
    
    // // 11 Find the maximum element in an array.
    {
    let data = [23,34,43,54,55,333,54,66]
    let d1 = 0
    let max = data[0]
    
    while(d1<data.length){
        if(data[d1]>max){
            max = data[d1]
        }
        d1++
    }
    console.log(max)
    
    }
    // // 12 Find the minimum element in an array.
    {
    let data = [23,32,43,56,65,76,34,65,5]
    let min = data[0]
    for(i=0;i<data.length;i++){
        if(data[i]<min){
            min = data[i]
        }
    }
    console.log(`${min} is minimum element in this array`)
    }
    
    // // 13 Reverse the array without using built-in functions.
    {
    let data = [2,3,443,55,65,23,65,77,554]
    let start = 0
    let end = data.length-1
    
    while(start<end){
        let temp = data[start]
        data[start] = data[end]
        data[end] = temp
        start++
        end--
    
    }
    console.log(data)
    }
    
    // // 14 Check if an array is sorted (ascending or not).
    {
    let data = [22, 33, 44, 55, 66, 77,4];
    let isSorted = true;
    
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i] > data[i + 1]) {
            isSorted = false;
            break;
        }
    }
    
    console.log(isSorted ? "Array is sorted" : "Array is NOT sorted");
    
    }
    // // 15 Count the number of even and odd elements in an array.
    {
    let data = [23,34,44,55,34,33,66,76,77,23,53,2]
    let odd = 0
    let even = 0
    
    for(i=0;i<data.length;i++){
        if(data[i]%2==0){
            even++
        }else{
            odd++
        }
    }
    console.log(`In your array ${odd} odd elements and ${even} even element`)
    }
    // // 16 Find the sum of all elements in the array.
    {
    let data = [23,3,4,54,67,34,54,65,45,2]
    let total = 0
    
    for(i=0;i<data.length;i++){
        total = total+data[i]
    }
    console.log(`Your array total is ${total}`)
    
    }
    // // 17 Count the number of positive, negative and zeros.
    {
    let data = [23,45,65,-34,34,-65,-34,-22,-77,0,0,0]
    let positive = 0
    let negative = 0 
    let zero = 0
    
    for(i=0;i<data.length;i++){
        if(data[i]<0){
            negative++
        }else if(data[i]>0){
            positive++
        }else if(data[i]==0){
            zero++
        }
    }
    console.log(`In your array ${positive} positive number ${negative} negative number and ${zero} zero number`)
    }
    
    // // 18 Find the second largest element.
    {
    let data = [23, 32, 43, 54, 5, 76, 45, 77, 555];
    
    let first = -Infinity;
    let second = -Infinity;
    
    for (let i = 0; i < data.length; i++) {
        if (data[i] > first) {
            second = first;
            first = data[i];
        } else if (data[i] > second && data[i] != first) {
            second = data[i];
        }
    }
    
    console.log(`Second largest number is: ${second}`);
    }
    
    // // 19 Left rotate the array by one place.
    {
    let data = [23, 34, 45, 65, 67, 76, 44];
    
    let first = data[0];
    
    for (let i = 0; i < data.length - 1; i++) {
        data[i] = data[i + 1];
    }
    
    data[data.length - 1] = first;
    
    console.log(data);
    }
    
    // // 20 Remove duplicates from a sorted array.
    {
    let data = [23,34,54,67,76,45,45,34,54]
    let unique = []
    data.sort((a,b)=>a-b)
    
    for(i=0;i<data.length;i++){
        if(data[i]!==data[i+1]){
            unique.push(data[i])
        }
    }
    console.log(unique)
    
    }
    // // 21 Move all zeros to the end of the array.
    {
    let data = [23, 34, 4, 554, 34, 0, 0, 0, 34, 54, 65];
    let j = 0; 
    
    for (let i = 0; i < data.length; i++) {
        if (data[i] !== 0) {
            data[j] = data[i];
            j++;
        }
    }
    
    
    while (j < data.length) {
        data[j] = 0;
        j++;
    }
    
    console.log(data);
    }
    // // 22 maximum product subarray
    {
    let nums = [2, 4, -5,6];
    
    let maxProduct = nums[0];
    let currentMax = nums[0];
    let currentMin = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
    
        if (num < 0) {
            [currentMax, currentMin] = [currentMin, currentMax];
        }
    
        currentMax = Math.max(num, num * currentMax);
        currentMin = Math.min(num, num * currentMin);
    
        maxProduct = Math.max(maxProduct, currentMax);
    }
    
    console.log("Maximum product subarray is: " + maxProduct);
    
    }
    // //23 Find the union of two arrays.
    {
    let data = [23,34,34,54,56,54,76,67,76]
    let data2 = [43,54,43,67,76,23,65,77]
    let data3 = []
    
    for(i=0;i<data.length;i++){
        data3[i] = data[i]
    }
    for(i=0;i<data2.length;i++){
        data3[data.length+i] = data2[i]
    }
    data3.sort((a,b)=>a-b)
    
    let unique = []
    
    for(i=0;i<data3.length;i++){
       if(data3[i]!==data3[i+1]){
        unique[unique.length] = data3[i]
       }
    }
    
    console.log(unique)
    
    }
    // // 24 Rotate the array by k positions (left or right).
    {
    let arr = [2,3,4,6,7]
    let k = 2
    let rotated = []
    
    for(i=k;i<arr.length;i++){
        rotated[rotated.length]=arr[i]
    }
    for(i=0;i<k;i++){
        rotated[rotated.length] = arr[i]
    }
    console.log("Left rotated",rotated)
    
    let arr2 = [2,3,5,7,5,4]
    let k2 = 2
    let n = arr2.length
    let rotated2 = []
    
    for(i=n-k2;i<arr2.length;i++){
       rotated2[rotated2.length]=arr2[i]
    }
    for(i=0;i<n-k2;i++){
        rotated2[rotated2.length]=arr2[i]
    }
    console.log(rotated2)
    }
    // // 25 Find the majority element (element with freq > n/2).
    {
    let arr = [2,3,45,45,45,65,67,76,67,67,67,67,67,67,67,33]
    let candidate =  null
    let count = 0
    
    for(i=0;i<arr.length;i++){
        if(count===0){
            candidate = arr[i]
            count = 1
        }else if(arr[i]===candidate){
            count++
        }else{
            count--
        }
    }
    
    count = 0
    for(i=0;i<arr.length;i++){
        if(arr[i]===candidate){
            count++
        }
    }
    if(count>arr.length/2){
        console.log(`Majority number is ${candidate}`)
    }else{
        console.log(`No one is majority`)
    }
    
    }
    // // 26 Check if a subarray with 0 sum exists.
    {
    let arr = [4,2,-3,2,5,-10]
    let sum = 0
    let set = new Set()
    let found = false
    
    for(i=0;i<arr.length;i++){
        sum += arr[i]
        if(sum===0||set.has(sum)){
            found = true
            break
        }
        set.add(sum)
    
    }
    if(found){
        console.log("subarray with 0 sum exist")
    }else{
        console.log("No subarray with 0 sum")
    }
    }
    
    
    
    // // 27 Find the longest subarray with a given sum K.
    {
    let arr = [2,3]
    let k = 5
    function longestSubarrayWithSumK(arr,k){
        let sum = 0
        let maxLength = 0
        let map = new Map()
    
        for(i=0;i<arr.length;i++){
            sum+=arr[i]
    
            if(sum===k){
                maxLength = i+1
            }
            if(map.has(sum-k)){
                let prevIndex = map.get(sum-k)
                maxLength = Math.max(maxLength,i-prevIndex)
            }
            if(!map.has(sum)){
                map.set(sum,i)
            }
        }
        return maxLength
        
    }
    
    console.log(longestSubarrayWithSumK(arr,k))
    }
    // 28 Sort an array of 0s, 1s and 2s (Dutch National Flag).
    {
    let arr = [2, 0, 2, 1, 1, 0];
    
    function sort012(arr) {
        let low = 0, mid = 0, high = arr.length - 1;
    
        while (mid <= high) {
            if (arr[mid] === 0) {
                [arr[low], arr[mid]] = [arr[mid], arr[low]];
                low++;
                mid++;
            } else if (arr[mid] === 1) {
                mid++;
            } else if (arr[mid] === 2) {
                [arr[mid], arr[high]] = [arr[high], arr[mid]];
                high--;
            }
        }
    
        return arr;
    }
    
    console.log(sort012(arr))
    }
    // 29 Find the missing number from 1 to n.
    {
    let arr = [1, 2, 3, 5, 7, 8, 10];
    let missing = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        let current = arr[i];
        let next = arr[i + 1];
    
        for (let j = current + 1; j < next; j++) {
            missing.push(j);
        }
    }
    
    console.log(missing); // Output: [4, 6, 9]
    }
    // // 30 Find all pairs in the array whose sum is equal to K.
    {
    
    let arr = [1, 4, 5, 6, 3];
    let k = 7;
    let set = new Set();
    
    for (let i = 0; i < arr.length; i++) {
        let complement = k - arr[i];
        if (set.has(complement)) {
            console.log(`[${arr[i]}, ${complement}]`);
        }
        set.add(arr[i]);
    }
    
    }
    
    // // 31 Maximum sum of a contiguous subarray (Kadane’s Algo).
    {
    let arr = [-2, -2, 2, 3, 4, 5, -13];
    
    function maxSubarraySum(arr) {
        let maxsum = arr[0];
        let currentSum = arr[0];
    
        for (let i = 1; i < arr.length; i++) {
            currentSum = Math.max(arr[i], currentSum + arr[i]);
            maxsum = Math.max(maxsum, currentSum);
        }
        return maxsum;
    }
    
    console.log(maxSubarraySum(arr));  // Output: 12 (from subarray [2,3,4,5])
    }
    // // 32 Maximum product subarray.
    {
    function maxProductSubarray(arr){
        let maxProduct = arr[0]
        let minproduct = arr[0]
        let result = arr[0]
    
        for(i=1;i<arr.length;i++){
            if(arr[i]<0){
                [maxProduct,minproduct] = [minproduct,maxProduct]
            }
            maxProduct = Math.max(arr[i],maxProduct * arr[i])
            minproduct = Math.max(arr[i],minproduct*arr[i])
    
            result = Math.max(result,maxProduct)
        }
        return result
    }
    console.log(maxProductSubarray([2,3,-4,5,5]))
    }
    
    // // 33 Count inversions in the array
    {
    function mergeSortAndCount(arr, low, high) {
        if (low >= high) return 0;
    
        let mid = Math.floor((low + high) / 2);
        let count = 0;
    
        // Count inversions in left half
        count += mergeSortAndCount(arr, low, mid);
    
        // Count inversions in right half
        count += mergeSortAndCount(arr, mid + 1, high);
    
        // Count during merge step
        count += mergeAndCount(arr, low, mid, high);
    
        return count;
    }
    
    function mergeAndCount(arr, low, mid, high) {
        let left = arr.slice(low, mid + 1);
        let right = arr.slice(mid + 1, high + 1);
    
        let i = 0, j = 0, k = low, count = 0;
    
        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                arr[k++] = left[i++];
            } else {
                arr[k++] = right[j++];
                count += (left.length - i); // Add all remaining left elements
            }
        }
    
        // Copy any remaining elements
        while (i < left.length) arr[k++] = left[i++];
        while (j < right.length) arr[k++] = right[j++];
    
        return count;
    }
    
    function countInversions(arr) {
        return mergeSortAndCount(arr, 0, arr.length - 1);
    }
    
    // Test
    let arr = [2, 4, 1, 3, 5];
    console.log("Total Inversions:", countInversions(arr)); 
    }
    
    // // 34 Trapping Rain Water problem.
    {
    let height = [0,1,0,2,1,0,1,3,2,1,2,1];
    console.log(trap(height)); // Output: 6
    
    function trap(height){
        let left = 0, right = height.length - 1;
        let leftMax = 0, rightMax = 0;
        let trappedWater = 0;
    
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) {
                    leftMax = height[left];
                } else {
                    trappedWater += leftMax - height[left];
                }
                left++;
            } else {
                if (height[right] >= rightMax) {
                    rightMax = height[right];
                } else {
                    trappedWater += rightMax - height[right];
                }
                right--;
            }
        }
        return trappedWater;
    }
    }
    // // 35 Maximum circular subarray sum.
    {
        let arr = [5, -3, 6];
    function maxCirculeSubarraySum(arr){
        let totalsum = 0
        let currentMax = 0,maxSum = -Infinity
        let currentMin = 0,minSum = Infinity
        for(i=0;i<arr.length;i++){
            totalsum+=arr[i]
    
            currentMax = Math.max(arr[i],currentMax+arr[i])
            maxSum = Math.max(maxSum,currentMax)
    
            currentMin = Math.min(arr[i],currentMin+arr[i])
            minSum = Math.min(minSum,currentMin)
        }
        if(maxSum<0){
            return maxSum
        }
        return Math.max(maxSum,totalsum-minSum)
    }
    
    console.log(maxCirculeSubarraySum(arr))
    }
    // // 36 Subarray sum equals K (Prefix Sum + HashMap).
    {
    function subarraySum(arr, k) {
        let map = new Map();
        map.set(0, 1); 
    
        let prefixSum = 0;
        let count = 0;
    
        for (let i = 0; i < arr.length; i++) {
            prefixSum += arr[i];
    
            if (map.has(prefixSum - k)) {
                count += map.get(prefixSum - k);
            }
    
            map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
        }
    
        return count;
    }
    
    let arr = [1, 2, 3];
    let k = 3;
    console.log(subarraySum(arr, k)); 
    }
    
    // // 37 Find the first missing positive integer.
    {
        function firstMissingPositive(nums) {
            let n = nums.length;
        
            for (let i = 0; i < n; i++) {
                while (
                    nums[i] > 0 &&
                    nums[i] <= n &&
                    nums[nums[i] - 1] !== nums[i]
                ) {
                    let correctIndex = nums[i] - 1;
                    [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
                }
            }
        
            for (let i = 0; i < n; i++) {
                if (nums[i] !== i + 1) {
                    return i + 1;
                }
            }
        
            return n + 1;
        }
        console.log(firstMissingPositive([3, 4, -1, 1]))     
    }