function filterOddElements(arr) {
    var oddArray = [];
    for(i = 0; i < arr.length; i++) {
      if(arr[i] % 2 !== 0) {
        oddArray.push(arr[i]);
      }
    }
    console.log(oddArray);
    }
    filterOddElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

