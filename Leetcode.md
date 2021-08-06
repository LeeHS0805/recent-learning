# Leetcode

## 两数之和

- **以时间换空间**

  传统可以用双重循环的方式，但时间复杂度$$O(n^2)$$ 

  采用一个Map或者辅助对象，target-nums[i]的查找

  ```javascript
  var twoSum = function(nums, target) {
      let hash = {};
  		// let map = new Map() map.has() map.get() map.set()
      for (let i = 0; i < nums.length; i++) {
          if (hash[target - nums[i]] != undefined) {
            return [i, hash[target - nums[i]]];
          }
          hash[nums[i]] = i;
      }
      return [];
  };
  ```

- **Foreach**

  没有有效的break和continue

  return有类似continue的效果

## 两数相加

- **代码**

  ```js
  /**
   * Definition for singly-linked list.
   * function ListNode(val, next) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.next = (next===undefined ? null : next)
   * }
   */
  ```

  ```javascript
  var addTwoNumbers = function(l1, l2) {
      let overflow =0;
      let list=new ListNode(0);
      let result = list;
      while(l1||l2){
          let val1 = l1?l1.val:0;
          let val2 = l2?l2.val:0;
          let temp = val1+val2+overflow;
          overflow=0;
          if(temp>9){
              result.next=new ListNode(temp%10);
              overflow= Math.floor(temp / 10);
          }else{
              result.next=new ListNode(temp);
          }
          if(l1)l1=l1.next;
          if(l2)l2=l2.next;
          result=result.next;
  
      }
      if(overflow!=0)result.next=new ListNode(overflow);
      return list.next;
  };
  ```

- **Math取整**

  Math类中提供了三个与取整有关的方法：ceil、floor、round

  ceil->向上取整	 floor->向下取整 	round->四舍五入

  当我们有除法运算时，根据要求不同使用不同方法。本题中，直接使用了除法四舍五入，造成结果的迷惑性。

## 最长公共子串

- **代码**

  ```js
  var lengthOfLongestSubstring = function(s) {
      let start=0;
      let max=0;
      for(let i =0;i<s.length;i++){
          if(s.indexOf(s[i],start)<i){
              start=s.indexOf(s[i],start)+1;
          }
          else max = Math.max(max,i-start+1)
      }
      return max;
  };
  ```

- **滑动窗口**

  ![图片.png](https://pic.leetcode-cn.com/8b7cac826e572c65f8b77e0f380eaa93ab665857a8e916bc4ea36b7765eafc55-%E5%9B%BE%E7%89%87.png) 

- **迷惑点**
  1. 设比较元素为a，其序号为index；使用indexOf，区间为[left,index],比较的值为a。若indexOf返回值小于index，说明区间内有重复
  2. 变量写错了，js未声明默认隐式声明；"use strict"!