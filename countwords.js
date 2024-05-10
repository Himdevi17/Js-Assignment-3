function countWords(paragraph) {

    const words = paragraph.split(/\s+/);
   
    return words.length;
  }
  
  const paragraph = "This is a sample paragraph with several words.";
  console.log(countWords(paragraph)); 
  