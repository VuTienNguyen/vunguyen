function getRandNumbers(min, max, length)
{
     var array = []
    for (var i = 0;i < length;i+=1) {
        array[i] = Math.random() * (max - min) + min
    }

    return array
}

console.log(getRandNumbers(11, 100, 2))
