function getElementWidth(content, padding, border) {
    function extractNumber(value) {
      return parseFloat(value.replace('px', ''));
    }
 const contentWidth = extractNumber(content);
 const paddingValue = extractNumber(padding);
 const borderValue = extractNumber(border);
 const totalWidth = contentWidth + 2 * paddingValue + 2 * borderValue; 
 return totalWidth;
  }
  
 
  console.log(getElementWidth("50px", "8px", "4px")); // 74
  console.log(getElementWidth("60px", "12px", "8.5px")); // 101
  console.log(getElementWidth("200px", "0px", "0px")); // 200
  console.log(getElementWidth("300px", "20px", "10px")); 
