## Lesson-5

### function

##### 1 .

JavaScript-da function, ushbu dastur qismlarini ijro etuvchi nomlangan blok kodi tarkib etadi. function o'z ichiga qonun qila oladi va uni chaqirish orqali boshqa kod bo'limlaridan ishlatish mumkin. JavaScript function boshqarishda oson va sodda bo'lib, ularni amaliyotda juda ko'p ishlatish mumkin.

Function yaratish usuli quyidagicha:

```
function funksiyaNomi(parametr1, parametr2, ...) {
  // Funksiya ichidagi kodlar
  // Agar parametrlar bo'lsa, ularni ishlatish mumkin
  return chiqishQiymati; // Agar kerak bo'lsa
}
```

Bu yerda:

- "funksiyaNomi": Funksiya nomi, funksiyani chaqirishda ishlatiladi.
- "parametr1","parametr2," ...: Funksiyaga olib kelingan argumentlar. Bu joyda funksiyaga beriladigan ma'lumotlarni qabul qilish uchun o'zgaruvchilar (parametrlar) o'rnini topadi.
- { // Funksiya ichidagi kodlar }: Funksiya bloki, funksiya ichidagi amaliyotni birlashtiradi.
- "return chiqishQiymati;": Funksiya bajarilgandan so'ng qaytadigan qiymat. Bu qismni o'rniga funksiya biror nima qaytarishiga quyidagi "return" so'zini ishlatadi.

##### 2.

Funksiyani chaqirish usuli quyidagicha:

```
var natija = funksiyaNomi(argument1, argument2, ...);
```

- Bu yerda "natija" o'zgaruvchisi funksiya bajarilgandan so'ng qaytadigan qiymatni saqlaydi.


Misol:
```
function salom(name) {
  var salomMatn = "Salom, " + name + "!";
  return salomMatn;
}

var salomXabari = salom("Doston");
console.log(salomXabari);
```

Bu kodda "salom" funksiyasi ishlatilgan va unga "Doston" argumenti o'rniga o'zgartiruvchi qiymat olib borilgan. Chiqish natijasida "Salom, Doston!" matni konsolga chiqadi.
