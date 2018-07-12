

/*sort a array without using any kind of built in methood of function
solve: using bubble shoot
*/

var arr = [12, 2, 8, 10, 3, 9, 1];
for (var a = 0; a < arr.length; a++) {
    for (var b = 0; b < arr.length; b++) {
        var temp;
        if (arr[b] < arr[b + 1]) {
            temp = arr[b];
            arr[b] = arr[b + 1];
            arr[b + 1] = temp;
            /* the ultimte concept is take a new variable like temp,
             if index[i] bigger than index[i+1] , than put the index[i]
            value to index[i+1], and index[i+1] to index[i]. 
            via using a temporary variable */
        }

    }

}
console.log(arr);