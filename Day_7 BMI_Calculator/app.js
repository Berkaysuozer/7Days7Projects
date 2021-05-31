$(function () {

    let height, weight, bmi;
    $("button").click(function () {
        height = $("#height").val();
        weight = $("#weight").val();
        height = parseInt(height);
        weight = parseInt(weight);
        bmi = (weight / (height * height)) * 10000

        if (height && weight) {
            $("#result").text(bmi);
        }
        else {
            alert("Değerler Boş Olamaz")
        }
    })


})