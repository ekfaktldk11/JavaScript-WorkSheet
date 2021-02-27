// What is the Callback func ?
// 하나의 일을 다른 객체에게 시키고, 그 일이 끝나는 것을 기다리는 것이 아니라
// 그 객체가 나를 다시 부를 때 까지 내 할일을 하고 있는 것.

let sum = function(a, b, callback){
    var result = a + b;
    callback(result);
}

sum(1,2, function(res){ console.log(res); });

// 3