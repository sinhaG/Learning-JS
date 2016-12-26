var MyStringUtil = {
    reverseString: function(str) {
        var len = str.length,
            strArray = [],
            ct = 0;
        for (var i = len - 1; i >= 0; i--) {
            strArray[ct++] = str.charAt(i);
        }
        return strArray.join("");
    },
    reverseWords: function(str) {
        var arr = str.split(" ");
        var s = "";
        while (arr.length > 0) {
            var element = arr.pop();
            s += element + " ";
        }
        return s;
    },
    reverseOnlyWords: function(str) {
        var arr = this.reverseWords(str).split(" ");
        var s = "";
        while (arr.length > 0) {
            var element = this.reverseString(arr.pop());
            s += element + " ";
        }
        return s;
    }
}
var string_test = "Hello World People, Augmentation is here!!";
console.log(MyStringUtil.reverseString(string_test));
console.log(MyStringUtil.reverseWords(string_test));
console.log(MyStringUtil.reverseOnlyWords(string_test));