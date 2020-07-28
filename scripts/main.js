let num1;
let num2;
function multiply(num1,num2) {
    let result = num1 * num2;
    const ans = document.querySelector('h3');
    ans.textContent = result;
}
multiply(4,2);

document.querySelector('body').onclick = function() {
    alert('Ouch! Stop poking me!');
}