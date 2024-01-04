// Membuat function toogleDetail yang di onclick HTML ---------------------------------------------------
function toogleDetail(e) {

    // Perintah untuk menemukan target
    const target = $(e.target);


    // target mencari parent dari element yang di onclick
    const item = $(target).parents(".job-item");
    //target mencari children dari parent .job-item yang kelasnnya .job detail
    const detail = $(item).children(".job-detail");

    //menjalankan fungsi jquery slidetoggle
    $(detail).slideToggle();

    // pengkondisian ketika tombol ditekan
    //jika target sudah aktif dan ditekan
    if ($(target).hasClass("active")) {
        //ganti konten html dan hapus kelas active
        $(target).html("More info").removeClass("active");
    }
    // jika sebaliknya, ganti konten html dan buat kelas active
    else {
        $(target).html("Less info").addClass("active");
    }
}

//membuat function onfromsubmit dawri form html
function onFromSubmited(e) {

    //untuk menghindari terjadinya loading
    e.preventDefault()

    // pengambilan nilai dari inputan
    const email = $("#input-email");
    const subjek = $("#input-subjek");
    const pesan = $("#input-pesan");

    // validasi inputan dengan pengkondisian
    if (!$(email).val()) {
        alert("Email is required");
    } else if (!$(subjek).val()) {
        alert("subjek is required");
    } else if (!$(pesan).val()) {
        alert("pesan is required");
    } else {
        alert("Form Submited");
        $(email).val("")
        $(subjek).val("")
        $(pesan).val("")
    }

}