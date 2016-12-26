String.prototype.reverseWords = function() {
var arr = this.split(" ");
var s = "";
while (arr.length>0) {
var element = arr.pop();
s += element + " ";
}
return s;
}
console.log("akjsdhiuao ajsd".reverseString());