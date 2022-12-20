// Custom
var pengirim = '';
var musik = '';
var ucapan = '';
var background1 = '';
var background2 = '';
var noWhatsapp = '';
var pesanWhatsapp = '';

// ======================================
var audio = document.querySelector('.audio');
if (musik) audio.src = musik;
var notif = document.querySelector('.notif');
if (pengirim) {
  document.querySelector('.nama1').innerHTML = pengirim;
  document.querySelector('.nama2').innerHTML = pengirim;
}
if (background1) {
  document.querySelector('.background2').style.backgroundImage =
    "url('" + background1 + "')";
}
if (background2) {
  document.querySelector('.background1').style.backgroundImage =
    "url('" + background2 + "')";
}
$(window).on('load', function () {
  $('.loading').fadeOut('slow');
});
function tanggal() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const d = new Date();
  let hari = days[d.getDay()];
  let tgl = d.getDate();
  let bln = months[d.getMonth()];
  document.querySelector('.tgl').innerHTML = hari + ', ' + tgl + ' ' + bln;
}
function notif1() {
  document.querySelector('.hilang1').style.display = 'none';
  document.querySelector('.hilang2').style.display = 'inline-block';
  audio.play();
  notif.play();
  document.querySelector('.notif1').style.transform = 'translateX(0)';
}
const swalo = Swal.mixin({
  confirmButtonColor: '#23a542',
  allowOutsideClick: false,
  showCancelButton: false,
  customClass: { popup: 'border-radius' },
});
async function balas() {
  var { value: nama } = await swalo.fire({
    imageUrl: 'https://dekatutorial.github.io/stiker_mylove.gif',
    imageHeight: 120,
    title: 'Tulis nama lo cepetan!',
    input: 'text',
    confirmButtonText: 'Kirim',
  });
  if (nama) {
    document.querySelector('.hilang2').style.display = 'none';
    txt = 'Woi ' + nama + ', ';
    if (ucapan) {
      txt += ucapan;
    } else {
      txt +=
        'Nama lo dimulai dari huruf ' +
        nama.charAt(0) +
        '. Abjad dimulai dari A B C. Angka dimulai dari 1 2 3. Tangga nada dimulai dari do re mi. Cinta dimulai dengan gw dan lo. Gw emg alay. selo ae lah';
    }
    typeWriter();
    notif2();
  } else {
    await swalo.fire({
      imageUrl: 'https://dekatutorial.github.io/stiker2_mylove.gif',
      imageHeight: 120,
      confirmButtonText: 'Iya deh',
      title:
        'Kenapa gak diisi anj? lo ga mau kenalan sama cowo seganteng gw?...',
    });
    balas();
  }
}
function notif2() {
  notif.play();
  document.querySelector('.notif1').style.display = 'none';
  document.querySelector('.notif2').style.transform = 'translateX(0)';
}
var i = 0;
var speed = 120;
function typeWriter() {
  if (i < txt.length) {
    document.querySelector('.gombal').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.querySelector('.notif2').style.animation =
      'kelip 1200ms infinite ease';
    document.querySelector('.background2').style.transition = '3s all ease';
    document.querySelector('.background2').style.opacity = '0';
    if (noWhatsapp && pesanWhatsapp) {
      document.querySelector('.kirimWA').style.display = 'inline-block';
    }
  }
}
function startTime() {
  tanggal();
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  h = checkTime(h);
  m = checkTime(m);
  document.getElementById('jam').innerHTML = h + ':' + m;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}
document.querySelector('.kirimWA').addEventListener('click', function () {
  location.assign('https://wa.me/' + noWhatsapp + '/?text=' + pesanWhatsapp);
});
