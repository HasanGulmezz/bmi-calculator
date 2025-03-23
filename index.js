const calculate_button = document.getElementById("calculate_button");
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        calculate_button.click();
    }
});

const result = document.getElementById("result_text");
let bmi;
let situration;


function calculate(){
    const height = Number(document.getElementById("height_input").value);
    const weight = Number(document.getElementById("weight_input").value);
    const age = Number(document.getElementById("age_input").value);
    if((height <= 0) ||(weight <= 0) ||(age <= 0)){
        window.alert("Geçerli sayılar girin");
        return;
    }
    bmi = weight / (height * height / 10000);
    if (age < 18) bmi += (18-age)*0.3;
    else if (age < 25) bmi -= 0;
    else if (age < 35) bmi -= 1;
    else if (age < 45) bmi -= 2;
    else if (age < 55) bmi -= 3;
    else if (age < 65) bmi -= 4;
    else if (age > 64) bmi -= 5;
    if (bmi<= 18.5){
        situration = "Fazla Zayıfsın!"
        setTimeout(function() {
            alert("Sağlık Sınırlarını Aşan Durum");
        }, 200);}
    else if(bmi<24) situration="İdeal";
    else if(bmi<29) situration="Balık Etlisin";
    else if(bmi<34) situration="Obez-1";
    else if(bmi<39) situration="Obez-2";
    else{
         situration="Obez-3 (Morbid Obez)";
         setTimeout(function() {
            alert("Sağlık Sınırlarını Aşan Durum");
        }, 200);}
    bmi = bmi.toFixed(2);
    result.innerHTML = "Vücut Kitle İndeksin: <br>" + bmi + "<br>" + situration;
}