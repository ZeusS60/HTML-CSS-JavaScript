
var number = document.getElementById('number').value;
var hesapbtn = document.getElementById('hesapbtn');
var sonuc = document.getElementById('sonuc');
var şans = document.getElementById('şans');



var sayiStr = number.toString();
var rakamlar = [];




hesapbtn.onclick = function(){
    for (let i = 0; i < sayiStr.length; i++) {
    rakamlar.push(parseInt(sayiStr.charAt(i)));
}




var abcd = [document.getElementById('number').value.slice(0,4)];
var efgh = [document.getElementById('number').value.slice(8,12)];


2032
var e = [document.getElementById('number').value[8]];
var f = [document.getElementById('number').value[9]];
var g = [document.getElementById('number').value[10]];
var h = [document.getElementById('number').value[11]];

let year = 2023;
var x = year-Number(abcd);
var x1 = Math.pow(x,3);
var x2 = Math.pow(x,2);
var x3 = Math.pow(x,4);



var point = (Number(e)*x1)+(Number(f)*x2)+(Number(g)*x)+(Number(h));
var newpoint = point/x3
var şanslino = 100 * ( Math.floor(Math.random() * 2) + newpoint );
    sonuc.innerHTML = newpoint;
    şans.innerHTML = şanslino;
    alert("Cv siteniz oluşturuldu.");

    //e
    if(e == 0){
        document.getElementById('goal').style.display = 'none';
    }
    else if(e == 1){
        document.getElementById('iki').style.display = 'none';
        document.getElementById('üç').style.display = 'none';
        document.getElementById('dört').style.display = 'none';
        document.getElementById('beş').style.display = 'none';
        document.getElementById('altı').style.display = 'none';
        document.getElementById('yedi').style.display = 'none';
        document.getElementById('sekiz').style.display = 'none';
        document.getElementById('dokuz').style.display = 'none';
    }
    else if(e == 2){
        document.getElementById('üç').style.display = 'none';
        document.getElementById('dört').style.display = 'none';
        document.getElementById('beş').style.display = 'none';
        document.getElementById('altı').style.display = 'none';
        document.getElementById('yedi').style.display = 'none';
        document.getElementById('sekiz').style.display = 'none';
        document.getElementById('dokuz').style.display = 'none';
    }
    else if(e == 3){
        document.getElementById('dört').style.display = 'none';
        document.getElementById('beş').style.display = 'none';
        document.getElementById('altı').style.display = 'none';
        document.getElementById('yedi').style.display = 'none';
        document.getElementById('sekiz').style.display = 'none';
        document.getElementById('dokuz').style.display = 'none';
        
    }
    else if(e == 4){
        document.getElementById('beş').style.display = 'none';
        document.getElementById('altı').style.display = 'none';
        document.getElementById('yedi').style.display = 'none';
        document.getElementById('sekiz').style.display = 'none';
        document.getElementById('dokuz').style.display = 'none';
    }
    else if(e == 5){
        document.getElementById('altı').style.display = 'none';
        document.getElementById('yedi').style.display = 'none';
        document.getElementById('sekiz').style.display = 'none';
        document.getElementById('dokuz').style.display = 'none';
    }
    else if(e == 6){
        document.getElementById('yedi').style.display = 'none';
        document.getElementById('sekiz').style.display = 'none';
        document.getElementById('dokuz').style.display = 'none';
    }
    else if(e == 7){
        document.getElementById('sekiz').style.display = 'none';
        document.getElementById('dokuz').style.display = 'none';
    }
    else if(e == 8){
        document.getElementById('dokuz').style.display = 'none';
    }
    else if(e == 9){
        
    }

    //f

    if(f == 0){
        document.getElementById('education').style.display = 'none';
    }
    else if(f == 1){
        document.getElementById('eiki').style.display = 'none';
        document.getElementById('eüç').style.display = 'none';
        document.getElementById('edört').style.display = 'none';
        document.getElementById('ebeş').style.display = 'none';
        document.getElementById('ealtı').style.display = 'none';
        document.getElementById('eyedi').style.display = 'none';
        document.getElementById('esekiz').style.display = 'none';
        document.getElementById('edokuz').style.display = 'none';
    }
    else if(f == 2){
        document.getElementById('eüç').style.display = 'none';
        document.getElementById('edört').style.display = 'none';
        document.getElementById('ebeş').style.display = 'none';
        document.getElementById('ealtı').style.display = 'none';
        document.getElementById('eyedi').style.display = 'none';
        document.getElementById('esekiz').style.display = 'none';
        document.getElementById('edokuz').style.display = 'none';
    }
    else if(f == 3){
        document.getElementById('edört').style.display = 'none';
        document.getElementById('ebeş').style.display = 'none';
        document.getElementById('ealtı').style.display = 'none';
        document.getElementById('eyedi').style.display = 'none';
        document.getElementById('esekiz').style.display = 'none';
        document.getElementById('edokuz').style.display = 'none';
        
    }
    else if(f == 4){
        document.getElementById('ebeş').style.display = 'none';
        document.getElementById('ealtı').style.display = 'none';
        document.getElementById('eyedi').style.display = 'none';
        document.getElementById('esekiz').style.display = 'none';
        document.getElementById('edokuz').style.display = 'none';
    }
    else if(f == 5){
        document.getElementById('ealtı').style.display = 'none';
        document.getElementById('eyedi').style.display = 'none';
        document.getElementById('esekiz').style.display = 'none';
        document.getElementById('edokuz').style.display = 'none';
    }
    else if(f == 6){
        document.getElementById('eyedi').style.display = 'none';
        document.getElementById('esekiz').style.display = 'none';
        document.getElementById('edokuz').style.display = 'none';
    }
    else if(f == 7){
        document.getElementById('esekiz').style.display = 'none';
        document.getElementById('edokuz').style.display = 'none';
    }
    else if(f == 8){
        document.getElementById('edokuz').style.display = 'none';
    }
    else if(f == 9){
        
    }

    //g


    if(g == 0){
        document.getElementById('language').style.display = 'none';
    }
    else if(g == 1){
        document.getElementById('liki').style.display = 'none';
        document.getElementById('lüç').style.display = 'none';
        document.getElementById('ldört').style.display = 'none';
        document.getElementById('lbeş').style.display = 'none';
        document.getElementById('laltı').style.display = 'none';
        document.getElementById('lyedi').style.display = 'none';
        document.getElementById('lsekiz').style.display = 'none';
        document.getElementById('ldokuz').style.display = 'none';
    }
    else if(g == 2){
        document.getElementById('lüç').style.display = 'none';
        document.getElementById('ldört').style.display = 'none';
        document.getElementById('lbeş').style.display = 'none';
        document.getElementById('laltı').style.display = 'none';
        document.getElementById('lyedi').style.display = 'none';
        document.getElementById('lsekiz').style.display = 'none';
        document.getElementById('ldokuz').style.display = 'none';
    }
    else if(g == 3){
        document.getElementById('ldört').style.display = 'none';
        document.getElementById('lbeş').style.display = 'none';
        document.getElementById('laltı').style.display = 'none';
        document.getElementById('lyedi').style.display = 'none';
        document.getElementById('lsekiz').style.display = 'none';
        document.getElementById('ldokuz').style.display = 'none';
        
    }
    else if(g == 4){
        document.getElementById('lbeş').style.display = 'none';
        document.getElementById('laltı').style.display = 'none';
        document.getElementById('lyedi').style.display = 'none';
        document.getElementById('lsekiz').style.display = 'none';
        document.getElementById('ldokuz').style.display = 'none';
    }
    else if(g == 5){
        document.getElementById('laltı').style.display = 'none';
        document.getElementById('lyedi').style.display = 'none';
        document.getElementById('lsekiz').style.display = 'none';
        document.getElementById('ldokuz').style.display = 'none';
    }
    else if(g == 6){
        document.getElementById('lyedi').style.display = 'none';
        document.getElementById('lsekiz').style.display = 'none';
        document.getElementById('ldokuz').style.display = 'none';
    }
    else if(g == 7){
        document.getElementById('lsekiz').style.display = 'none';
        document.getElementById('ldokuz').style.display = 'none';
    }
    else if(g == 8){
        document.getElementById('ldokuz').style.display = 'none';
    }
    else if(g == 9){
        
    }

    //h

    if(h == 0){
        document.getElementById('Career').style.display = 'none';
    }
    else if(h == 1){
        document.getElementById('ciki').style.display = 'none';
        document.getElementById('cüç').style.display = 'none';
        document.getElementById('cdört').style.display = 'none';
        document.getElementById('cbeş').style.display = 'none';
        document.getElementById('caltı').style.display = 'none';
        document.getElementById('cyedi').style.display = 'none';
        document.getElementById('csekiz').style.display = 'none';
        document.getElementById('cdokuz').style.display = 'none';
    }
    else if(h == 2){
        document.getElementById('cüç').style.display = 'none';
        document.getElementById('cdört').style.display = 'none';
        document.getElementById('cbeş').style.display = 'none';
        document.getElementById('caltı').style.display = 'none';
        document.getElementById('cyedi').style.display = 'none';
        document.getElementById('csekiz').style.display = 'none';
        document.getElementById('cdokuz').style.display = 'none';
    }
    else if(h == 3){
        document.getElementById('cdört').style.display = 'none';
        document.getElementById('cbeş').style.display = 'none';
        document.getElementById('caltı').style.display = 'none';
        document.getElementById('cyedi').style.display = 'none';
        document.getElementById('csekiz').style.display = 'none';
        document.getElementById('cdokuz').style.display = 'none';
        
    }
    else if(h == 4){
        document.getElementById('cbeş').style.display = 'none';
        document.getElementById('caltı').style.display = 'none';
        document.getElementById('cyedi').style.display = 'none';
        document.getElementById('csekiz').style.display = 'none';
        document.getElementById('cdokuz').style.display = 'none';
    }
    else if(h == 5){
        document.getElementById('caltı').style.display = 'none';
        document.getElementById('cyedi').style.display = 'none';
        document.getElementById('csekiz').style.display = 'none';
        document.getElementById('cdokuz').style.display = 'none';
    }
    else if(h == 6){
        document.getElementById('cyedi').style.display = 'none';
        document.getElementById('csekiz').style.display = 'none';
        document.getElementById('cdokuz').style.display = 'none';
    }
    else if(h == 7){
        document.getElementById('csekiz').style.display = 'none';
        document.getElementById('cdokuz').style.display = 'none';
    }
    else if(h == 8){
        document.getElementById('cdokuz').style.display = 'none';
    }
    else if(h == 9){
        
    }

    
}











    
    





  


