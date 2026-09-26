// FIND IF THE NUMBER IS ODD OR EVEN

class OddOrEven{
    oddeven(n){
        if(n%2 ==0){
            console.log(`The number ${n} is an EVEN number.`);

        }else{
            console.log(`The number ${n} is an ODD number.`);
        }
    }
}

const result = new OddOrEven();
result.oddeven(2);
result.oddeven(5);
result.oddeven(234);

