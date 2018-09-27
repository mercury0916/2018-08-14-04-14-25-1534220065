module.exports = function main(x) {
  var arr = x.split('').map(function(x){return x- '0'});

   var lcd = {['._.', '|.|', '|_|'], ['...', '..|', '..|'], ['._.', '._|', '|_.'], ['._.', '._|', '._|'], ['...', '|_|', '..|'], ['._.', '|_.', '._|'], ['._.', '|_.', '|_|'], ['._.', '..|', '..|'], ['._.', '|_|', '|_|'], ['._.', '|_|', '..|']};


for(var j = 0; j < arr.length; j++){
     arr[j] = lcd[arr[j]];
}

console.log("arr.toString() + '\n'");
    
    return "arr.toString() + '\n'";
}
