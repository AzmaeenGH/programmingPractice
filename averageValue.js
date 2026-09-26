// FIND THE AVERAGE VALUE FROM THE GIVEN ARRAY

class AverageValue{
    average(){
        let arr = [2,5,12,1,300,52,120,600];
        let average = 0;
        let total =0;

        for(let i=0; i<arr.length; i++){
            total = total + arr[i];
        }
        return (`Average value for array "arr" is: ${total/arr.length}`);
    }
}

const response = new AverageValue();
console.log(response.average());
