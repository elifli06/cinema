﻿# cinema
# cinema
 <img src="/Animation(2).gif" alt=""># cinema-side
# cinema-side
HTML:
<div class="container"> ve <div class="screen">elemanıyla bir sinema salonu oluşturdum. içinde sinema perdesi ve metin içeren bir alan oluşturdum.
Koltukları gruplamak için <div class="seatRow"> elemanlarını kullandım. Her bir sıra ayrı bir gruplandırma içeriyordu.
Koltukları temsil etmek için <div class="seat"> elemanlarını ve FontAwesome ikonlarını (fa-couch) kullandım.
Film seçimini yapmak için <select> elementi oluşturdum.
Bilgi panelini ve ücret hesaplamalarını göstermek için <ul class="info"> ve <p class="infoText"> elemanlarını kullandım.
CSS:
Genel stil kurallarını belirlemek için * selektörünü kullandım. (margin, padding, box-sizing, vb.) gibi ayarları yaptım.
Değişkenler için(--background-color, --seat-color, --text-color, vb.) kullanarak renk paletimi oluşturdum.
:root seçici ile değişkenleri tanımlayıp, sayfa genelinde kullanılabilir hale getirdim.
Koltuklara hover efekti ekledim ve seçildiğinde büyütme animasyonu uygulandı.
Bilgi paneli ve ücret bilgisinin görünümünü belirledim.
JavaScript:
Html elementlerini ve gereken verileri seçmek için document.querySelector() ve document.querySelectorAll() fonksiyonlarını kullandım.
Koltukların durumunu (seçili veya rezerve edilmiş) tarayıcı hafızasında saklamak için localStorage'ı kullandım.
Koltukları seçilebilir ve rezerve edilebilir hale getirmek için event listener ekledim.
Film seçimi değiştiğinde ve koltuk seçimi değiştiğinde toplam ücreti hesaplayıp ekranda gösterdim.
