//=============================
// Tombol Pesan Sekarang
//=============================

const btnPesan = document.querySelector(".pesan-sekarang .btn");

if (btnPesan) {

    btnPesan.addEventListener("click", function(){

        alert("Silakan hubungi kami melalui nomor WhatsApp untuk melakukan pemesanan 😊");

    });

}


//=============================
// Form Saran
//=============================

const form = document.querySelector(".form-saran");

if (form) {

    form.addEventListener("submit", function(e){

        e.preventDefault();

        const nama = document.querySelector('input[type="text"]').value;
        const pesan = document.querySelector("textarea").value;

        if(nama=="" || pesan==""){

            alert("Nama dan Saran wajib diisi!");
            return;

        }

        alert("Terima kasih, " + nama + " 😊\n\nSaran Anda berhasil dikirim.");

        form.reset();

    });

}


//=============================
// Efek Card
//=============================

const card = document.querySelectorAll(".card");

card.forEach(function(item){

    item.addEventListener("mouseenter", function(){

        item.style.transform="translateY(-10px) scale(1.03)";

    });

    item.addEventListener("mouseleave", function(){

        item.style.transform="translateY(0) scale(1)";

    });

});


//=============================
// Header berubah saat discroll
//=============================

window.addEventListener("scroll",function(){

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.boxShadow="0 5px 15px rgba(0,0,0,.2)";

    }else{

        header.style.boxShadow="none";

    }

});
