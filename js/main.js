const chap1 = document.querySelector('.chap-1');
  const autoBtn = document.getElementById('btn-auto');

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  if (scrollPosition > viewportHeight*1.2) {
      document.getElementById("first").style.opacity= 0;
  } else {

      document.getElementById('first').style.opacity= 1;
  }


  console.log(chap1);
  if (scrollPosition>(viewportHeight+autoBtn.offsetHeight+chap1.offsetHeight)) {
    chap1.style.opacity = 1;
  }
  else {
    chap1.style.opacity = 0;
  }
});

let scrollInterval;

function autoScroll() {
  window.scrollBy(0, 1); // Cuộn xuống 1 pixel mỗi lần

  // Kiểm tra nếu đã cuộn đến cuối trang
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    clearInterval(scrollInterval); // Dừng cuộn tự động
    console.log('Reached the bottom, auto-scroll stopped');
  }
}

// Bắt đầu cuộn tự động khi nhấn nút
autoBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
  scrollInterval = setInterval(autoScroll, 10); // Cuộn mỗi 10ms
});

// Ngắt cuộn khi người dùng click vào bất kỳ đâu ngoài `autoBtn`
window.addEventListener('click', function() {
  clearInterval(scrollInterval); // Dừng cuộn
  console.log('Auto-scroll stopped by user click');
});

