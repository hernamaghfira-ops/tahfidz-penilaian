const API_URL = "https://script.google.com/macros/s/AKfycbwLoMUKQ2UZulpem05GBJ1P5PH3b3PiSt0uPeOJuYkw2H9v45PUgIM1WZ5kEj-kZhBI/exec";


// =====================
// SIMPAN SANTRI
// =====================

let btnSimpan = document.getElementById("btnSimpan");


if(btnSimpan){

btnSimpan.addEventListener("click", function(){


let data = {

ID: Date.now(),

Nama: document.getElementById("nama").value,

NIS: document.getElementById("nis").value,

Kelas: document.getElementById("kelas").value,

Halaqah: document.getElementById("halaqah").value,

Partner: document.getElementById("partner").value,

Juz: document.getElementById("juz").value,

Halaman: document.getElementById("halaman").value,

Status: document.getElementById("status").value

};



fetch(API_URL,{
method:"POST",
body:JSON.stringify(data)
})


.then(res=>res.json())


.then(result=>{

alert("✅ Santri berhasil disimpan");

loadSantri();

loadDashboard();

});


});

}


// =====================
// TAMPIL DATA SANTRI
// =====================

function loadSantri(){


let tabel = document.getElementById("tabelSantri");


if(!tabel){
    return;
}



fetch(API_URL+"?action=santri")


.then(res=>res.json())


.then(data=>{


tabel.innerHTML="";


data.forEach(santri=>{


tabel.innerHTML += `

<tr>

<td>${santri.Nama}</td>

<td>${santri.Kelas}</td>

<td>${santri.Halaqah}</td>

<td>${santri.Partner}</td>

<td>${santri.Juz}</td>

<td>${santri.Status}</td>

</tr>

`;

});


});


}



// =====================
// DASHBOARD
// =====================

function loadDashboard(){


let jumlahSantri = document.getElementById("jumlahSantri");


if(!jumlahSantri){
    return;
}



fetch(API_URL+"?action=santri")


.then(res=>res.json())


.then(data=>{


jumlahSantri.innerHTML = data.length;


});


}




// =====================
// JALANKAN SEMUA
// =====================

loadSantri();

loadDashboard();
