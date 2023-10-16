// HTML'den gerekli elementleri seçiyoruz
const container = document.querySelector(".container");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const movieList = document.getElementById("movie");
const infoText = document.querySelector(".infoText");
const seats = document.querySelectorAll(".seat:not(.reserved)");

// Kaydedilmiş koltukları ve film seçimini tarayıcı hafızasından getiriyoruz
const getSeatsFromDatabase = () => {
  const dbSelectedSeats = JSON.parse(localStorage.getItem("seatsIndex"));

  if (dbSelectedSeats !== null && dbSelectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (dbSelectedSeats.includes(index)) {
        seat.classList.add("selected");
      }
    });
  }

  const dbSelectedMovie = JSON.parse(localStorage.getItem("movieIndex"));
  if (dbSelectedMovie !== null) {
    movieList.selectedIndex = dbSelectedMovie;
  }
};

// Sayfa yüklendiğinde kaydedilmiş koltukları ve film seçimini yüklüyoruz
getSeatsFromDatabase();

// Seçili koltukları ve seçili filmi kaydediyoruz
const saveSeatsToDatabase = (seatIndex) => {
  localStorage.setItem("seatsIndex", JSON.stringify(seatIndex));
  localStorage.setItem("movieIndex", JSON.stringify(movieList.selectedIndex));
};

// Toplam ücreti hesaplayan fonksiyon
const calculateTotal = () => {
  const selectedSeatsCount = container.querySelectorAll(".seat.selected").length;
  const selectedMoviePrice = parseFloat(movieList.value);
  const totalAmount = selectedSeatsCount * selectedMoviePrice || 0;

  count.innerText = selectedSeatsCount;
  amount.innerText = totalAmount + " TL";

  if (selectedSeatsCount) {
    infoText.classList.add("open");
  } else {
    infoText.classList.remove("open");
  }
};

// Koltuklara tıklanınca "selected" sınıfını ekleyip/çıkaran ve toplam ücreti hesaplayan event listener
container.addEventListener("click", (mouseEvent) => {
  const clickedSeat = mouseEvent.target.closest(".seat");
  
  if (clickedSeat && !clickedSeat.classList.contains("reserved")) {
    clickedSeat.classList.toggle("selected");
    calculateTotal(); // Koltuk tıklama sonrası toplam ücreti hesapla
    saveSeatsToDatabase(Array.from(container.querySelectorAll(".seat.selected")).map(seat => Array.from(seats).indexOf(seat)));
  }
});

// Film seçimi değiştiğinde toplam ücreti hesaplayan event listener
movieList.addEventListener("change", () => {
  calculateTotal();
  saveSeatsToDatabase(Array.from(container.querySelectorAll(".seat.selected")).map(seat => Array.from(seats).indexOf(seat)));
});

// Sayfa yüklendiğinde ve koltuk seçimi değiştiğinde toplam ücreti hesaplıyoruz
calculateTotal();
