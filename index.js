// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
a：不是；  b：是

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
// TODO should output [2,4,6,8,10]
for ( var i = 0; i <a.length; i++){
	a[i]=a[i]*2;   
}

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
switch(1) {
     case 1:
        output: 'Red Green White Black';
        break;
     case 2:
        output: 'Red+Green+White+Black';
        break;
	case 3:
        output: 'Red,Green,White,Black'
        break;
} 

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function sort(a){
    for(var j=0;j<a.length-1;j++){
    //两两比较，如果前一个比后一个大，则交换位置。
       for(var i=0;i<a.length-1-j;i++){
            if(a[i]>a[i+1]){
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
            }
        } 
    }
}
sort(a);
console.log(a);

// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMaxEle(a){
	var h = {};
	var maxNum = 0;
	var maxEle = null;
	for(var i = 0;i<=a.length;i++){
		var x = a[i];
		h[x] == undefined ?h[x]=1:(h[x]++);
		if(h[x]>maxNum){
			maxEle=x;
			maxNum=h[x];
		}
}
	return maxEle;
}
console.log(findMaxEle(a));
