// no 1 buatlah variabel firstName, lastName, age, isMerried dengan ketentuan 
const firstNama = " Salma ";
const lastNama = " Dela ";
const age = 20;
const ismarried = false;
//melakukan pengujian dengan console.log()
console.log(firstNama);
console.log(lastNama);
console.log(age);
console.log(isMarried);// boolean

//atau bisa juga seperti ini 
// no 1. fistName : bertipe data sstring , dengan nilai nama depan 
console.log(" * Salma ")
//atau bisa seperti ini untuk memanggil dengan nama depan 
var firstnama = "Salma" 
console.log(" Name depan : " + firstName)

// no 2. bertipe data string , dengan nilai nama belakang anda
console.log(" * Dela ")
// cara lain 
var lastnama = " Dela "
console.log(" nama belakang  : " + lastName)

//untuk menggabungkan nama depan dan nama belakang 
var firstname = " Salma "
function printfullname(){
    var lastname = " Dela "
    return firstname +" "+ lastname
}
console.log(" fullName " +printfullName())

// no 3. bertipe data number , dengan nilai umur anda
console.log (" umur saya " +21)
//ismarried 
const menikah = 24
const nomarried = 20

const sudahMenikah = menikah >20
const belummenikah = nommaried >20

const keputusanMenikah = sudahMenikah && belumMenikah 
console.log(keputusanMenikah )