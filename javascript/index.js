function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output.value").innerText;
}
function printOutput(num){
    if (num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }

}
function getFormattedNumber(num){
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
printOutput(456676);

/*const colorBtn = document.querySelector('.colorbtn');
const bodyBcg = document.querySelector('body');
const colors = ['yellow', 'orange', 'blue','red','#389956'];
// add event listener
colorBtn.addEventListener('click',changeColor());

function changeColor(){
    
    bodyBcg.style.backgroundColor = 'black';
}*/