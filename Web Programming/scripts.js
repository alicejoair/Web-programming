  function getNumbers() {
        let input = document.getElementById("numbers").value;
        let numbers = input.split(",");
    

        for (let i = 0; i < numbers.length; i++) {
          numbers[i] = Number(numbers[i].trim());
        }

        return numbers;
    }

function calculateSum(){
    let arr = getNumbers();
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum+= arr[i];
    }
return sum;
}

function findMax(arr) { 

    let max = arr[0];
    for (let i = 1; i< arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
return max;

}function printMax() {
    let arr = getNumbers();
    let max = findMax(arr);
   
    
            document.getElementById("maxResult").textContent =
                "Maximum: " + max;
}function printSum() {
    let arr = getNumbers();
    let sum = calculateSum(arr);
   
            document.getElementById("sumResult").textContent =
                "Sum: " + sum;
}
function printArr(){
    let arr = getNumbers();
    document.getElementById("arrayResult").textContent = "Array: " + arr.join(", ");
}

function checkIfNumber() {
    let arr = getNumbers();
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        result += isNaN(arr[i]) ? arr[i] + " is not a number<br>"
            : arr[i] + " is a number<br>";
    }

    document.getElementById("isNan").innerHTML = result;
    }