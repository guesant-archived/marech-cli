const marechCore = (telegHtml, args) => {
  const telegWithoutMarech = telegHtml;
  
  // Define final teleg
  let finalTeleg = telegWithoutMarech;

  // Verify if args are object
  if(Object.prototype.toString.call(args) === '[object Object]') {
    for (let i in args) {
      finalTeleg = finalTeleg.replace(new RegExp(`{( *)${i}( *)}`, 'g'), args[i]);
    }
  }
  
  return finalTeleg;
};


module.exports = marechCore;