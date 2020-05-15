function checkvalidity(inputText) {
    const reg = /^(https?:\/\/)?(\w+\.)?(\w+\.)(\w+)([\w\?\&\=\-]?)*(\/[\w\?\&\=\-]*)*$/g
    if (regex.test(inputText)) {
      alert('The url is valid.');
        return true;
    } else {
            alert('change your url due to validity.');
            return false;
  
    }
}


export {checkvalidity}


