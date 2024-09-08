
alert(`Sizda hozir random sonlar chiqishni boshlaydi 😊`)
let random = (Math.round(Math.random()*100))
alert(`Random orqali chiqqan son: ${random}`)
confirm(`Biz random sonni 2 ga kopaytirib va bolmoqchimiz !`)
let num = 2
let num2 = 3
let resault = random % num2
alert(`Random orqali chiqqan son: ${random} edi\n
biz uni 2 ga kopaytirib ${random*num} sonini chiqardik\n
va shu sonni 2 ga bolib: ${random/num} sonini chiqardik\n
va shu sonni 3 ga bolgandagi qoldiq: ${resault} sonini chiqardik`)