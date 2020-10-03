
//min

exports.min = function min (array) {      
  let minValueInArray = array.length > 0 ? Math.min.apply(null, array) : 0;
  console.log (minValueInArray);
  }
  

//max  

  exports.max = function max (array) {      
  let maxValueInArray = array.length > 0 ? Math.max.apply(null, array) : 0;
  return maxValueInArray;
  }
  
  
//avg

  exports.avg = function avg (array) {    
    if(!Array.isArray(array) || array.length == 0) return 0;
    return array.reduce((sum, current) => sum +=current) / array.length;
    }
  
