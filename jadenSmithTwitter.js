String.prototype.toJadenCase = function () {
  //...
    let arr = this.split(' ');
 
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1);
  }
  return arr.join(' ');
};
