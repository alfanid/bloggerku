$('#pesan').focus(function(){
  $('#wafield .field div.option').fadeIn();
  $('html, body').animate({scrollTop: $('#option').offset().top}, 500);
});

$('a.kirimwa').click(function(){
  if ($('#layanan').val() == 'pilihLayanan'){
    alert('Silahkan "Pilih Layanan" sebelum mengirim pesan...');
    $('#pesan').focus();
    return false;
  } else if ($('#email').val() == '') {
    alert('Alamat E-mail dibutuhkan...');
    $('#pesan').focus();
    return false;
  } else if ($('#nama').val() == '') {
    alert('Silahkan Tulis "Nama Lengkap Anda" sebelum mengirim pesan...');
    $('#pesan').focus();
    return false;
  } else if ($('#pesan').val() == '') {
    alert('Silahkan tulis pesan...');
    $('#pesan').focus();
    return false;
  } else if ($('#perusahaan').val() == '') {
    $(this).attr('href','https://api.whatsapp.com/send?phone=' + $('#tel').val() + '&text=Assallamu`alaikum kang, saya ' + $('#nama').val() + '.. mau ' + $('#layanan').val() + '%0A%0AE-mail: ' + $('#email').val() + '%0A%0A-%0A%0A' + $('#pesan').val());

    $(this).attr('target','_blank');
  } else {
    $(this).attr('href','https://api.whatsapp.com/send?phone=' + $('#tel').val() + '&text=Assallamu`alaikum kang, saya ' + $('#nama').val() + ' dari Perusahaan "' + $('#perusahaan').val() + '".. mau ' + $('#layanan').val() + '%0A%0AE-mail: ' + $('#email').val() + '%0A%0A-%0A%0A' + $('#pesan').val());
    $(this).attr('target','_blank');
  }
});

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes('ms');
var dateTime = date + ' ' + time;

document.getElementById('dateTime').innerHTML = dateTime;
document.getElementById('chatTime').innerHTML = time;
