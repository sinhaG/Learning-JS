String.prototype.reverseString = function() {
var len = this.length, strArray = [], ct = 0;
for (var i=len-1;i>=0;i--) {
strArray[ct++] = this.charAt(i);
}
return strArray.join("");
}
console.log("akjsdhiuao ajsd".reverseString());