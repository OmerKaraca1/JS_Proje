let turkceDoğru , turkceYanlis = 0 ;
let matematikDoğru , matematikYanlis = 0 ;
let sosyalDoğru , sosyalYanlis = 0 ;
let fenDoğru , fenYanlis = 0 ;
let Puan = 0 ;




let yeniSatir = "\r\n" ; //yenisatıra geçer
let mesaj = "TYT Puan Hesaplama Uygulamasına Hoşgeldiniz"
+"1-Puan Hesapla"+ yeniSatir
+"2-Çıkış Yap" ;



let secim  = prompt(mesaj);


switch(secim){
    case "1" :
        okulPuani = Number(prompt("okul Puanınızı Giriniz"));
        turkceDoğru = Number (prompt("Türkçe Doğru sayısı"));
        turkceYanlis = Number (prompt("Türkçe Yanlış sayısı"));


        matematikDoğru = Number (prompt("Matematik Doğru sayısı"));
        matematikYanlis = Number (prompt("Matematik Yanlış sayısı"));


        sosyalDoğru = Number (prompt("Sosyal Doğru sayısı"));
        sosyalYanlis = Number (prompt(" Sosyal sayısı"));

        fenDoğru = Number (prompt("Fen Doğru sayısı"));
        fenYanlis = Number (prompt("Fen Yanlış sayısı"));

            let DoğruSayisi = turkceDoğru+matematikDoğru+sosyalDoğru+fenDoğru;
            let YanlışSayisi = turkceYanlis+matematikYanlis+sosyalYanlis+fenYanlis
            let kalanDoğruSayısı = DoğruSayisi - (YanlışSayisi/4)
            Puan = (kalanDoğruSayısı*4)+100+okulPuani;
            alert ("TYT Puanınız :" + Puan);

break;

case "2" :

alert("Uygulamadan Çikiş Yapildi..");
    break;
default :
alert("Lütfen Aralıkta Değer Giriniz");
break;

}