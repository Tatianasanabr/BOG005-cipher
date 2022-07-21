const cipher = {

  encode: (offset, firstText) => {
    if (offset === null || offset === 0) {
      throw new TypeError();
    }

    offset = parseInt(offset);
    let resultEncode = "";

    for (let i = 0; i < firstText.length; i++) {
      //Para transformar input en código ASCII//
      let asciiCode = firstText.charCodeAt(i)

      if (asciiCode >= 65 && asciiCode <= 90) {
        let newPositionNumber = (asciiCode - 65 + offset) % 26 + 65;
        resultEncode += String.fromCharCode(newPositionNumber);
      }
      else if (asciiCode >= 97 && asciiCode <= 122) {
        let minLetter = (asciiCode - 97 + offset) % 26 + 97;
        resultEncode += String.fromCharCode(minLetter);
      }
      else {
        resultEncode += firstText[i]
      }
    }
    return resultEncode;
  }, 

  decode: (offset, firstText) => {
    if (offset === null || offset === 0) {
      throw new TypeError();
    }
    
    offset = parseInt(offset);
    let resultDecode = "";

    for (let i = 0; i < firstText.length; i++) {
      let asciiCode = firstText.charCodeAt(i)

      if (asciiCode >= 65 && asciiCode <= 90) {
        let newPositionNumber = (asciiCode - 90 - offset) % 26 + 90;
        resultDecode += String.fromCharCode(newPositionNumber);
      }

      else if (asciiCode >= 97 && asciiCode <= 122) {
        let minLetter = (asciiCode - 122 - offset) % 26 + 122;
        resultDecode += String.fromCharCode(minLetter);
      }
      else {
        resultDecode += firstText[i]
      }
    }
    return resultDecode;
  }
};

export default cipher;
