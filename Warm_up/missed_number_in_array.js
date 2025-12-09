var missingNumber = function(nums) {
    let n=nums.length
    let totalsum=n*(n+1)/2
    let sum=0
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i]
    }
    return totalsum-sum
    
};