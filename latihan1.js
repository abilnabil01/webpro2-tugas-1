function checkNumber(myNumber) {
    // Mengecek apakah myNumber lebih besar atau sama dengan 80
    if (myNumber >= 80) {
        console.log("Bisa langsung disembeli.");
    }
    // Mengecek apakah myNumber di antara 60 dan 80
    else if (myNumber >= 60 && myNumber < 80) {
        console.log("Masih bisa digemukkan lagi.");
    }
    // Kondisi untuk angka yang kurang dari 60
    else {
        console.log("Kurang gizi.");
    }
}

// Memanggil fungsi dengan nilai yang berbeda
checkNumber(1000); // Bisa langsung disembeli.
checkNumber(70);   // Masih bisa digemukkan lagi.
checkNumber(40);   // Kurang gizi.
