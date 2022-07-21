function titleCase(str) {
    let arr = str.split(" ");
    let newArr = "";
    for (let i in arr){
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return arr.join(" ");
  }
  
  titleCase("I'm a little tea pot");