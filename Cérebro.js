function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let numOfPeople = document.getElementById('people').value;

    if(bill=='' || serviceQual == 0){
        alert("Preencha os campos vazios.")
        return;
    }
    if(numOfPeople <= 1 | numOfPeople == ""){
        document.getElementById('each').style.display = "none"
    }
    else{
        document.getElementById('each').style.display = "block" 
    }
    let total=(serviceQual * bill) / numOfPeople;
    total=total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";
document.getElementById('tipsForm').addEventListener('submit',calculateTip); 