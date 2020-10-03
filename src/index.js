
//min

exports.min = function min (array) {      
  if (!Array.isArray(array) || array.length == 0) return 0;
	return Math.min.apply(null, array);
  }
  

//max  

  exports.max = function max (array) {      
    if (!Array.isArray(array) || array.length == 0) return 0;
    return Math.max.apply(null, array);
  }
  
  
//avg

  exports.avg = function avg (array) {    
    if(!Array.isArray(array) || array.length == 0) return 0;
    return array.reduce((sum, current) => sum +=current) / array.length;
    }
  
