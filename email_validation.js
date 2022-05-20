let mail = "e@.co"


if (mail.indexOf("@") < 1){
    console.log("USername hatalı")
}
else if ((mail.length - mail.lastIndexOf(".") > 4 ) || (mail.length - mail.lastIndexOf(".") <= 2))  {
    console.log("Extension hatalı girdiniz")
}

else if (mail.includes("@") != true){
    console.log("@ işareti ile tanımlama yapınız")
}
else if (mail.lastIndexOf(".") - mail.indexOf("@") <= 1){
    console.log("yanlış giriş yaptınız")
}
else {
    console.log("Başarılı Giriş yaptınız");
}