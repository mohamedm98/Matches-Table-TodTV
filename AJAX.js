
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://me-cdn.bein-massive.com/api/lists/210187?device=web_browser&ff=idp%2Cldp%2Crpt%2Ccd%2Chlr%2Cv2s&lang=ar-MA&page_size=24&sub=Subscriber", true);
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let jsData = JSON.parse(this.response);
    let items = jsData.items;
    for (let i = 0; i < items.length; i++) {
      let tileImage = items[i].images.tile;
      let title = items[i].title;
      let champ = items[i].customFields.CompetitionTitleAr;
      console.log(champ); // تأكد من أن القيمة معرفة
      let id = items[i].id;
      let firstBroadcastDate = items[i].firstBroadcastDate;
      // firstBroadcastDate = firstBroadcastDate.replace('T', ' |T| ');

      let div = document.createElement("div");
      let img = document.createElement("img");
      let p = document.createElement("p");
      let ptitle = document.createElement("span");

      img.src = tileImage;
      img.style.width = "250px";img.style.height = "200px";
      p.style.maxWidth = "250px";ptitle.style.maxWidth = "250px";
      ptitle.appendChild(document.createTextNode(title));
      p.appendChild(document.createTextNode(id)); 
      p.appendChild(document.createElement("br")); // إنشاء سطر جديد
// التأكد من أن القيمة متاحة قبل إضافتها إلى العنصر p
if (champ !== undefined) {
    p.appendChild(document.createTextNode("Champion: "+champ));
} else {
  p.appendChild(document.createTextNode("Champion: غير متوفرة"));
}
      p.appendChild(document.createElement("br")); // إنشاء سطر جديد
      p.appendChild(document.createTextNode(new Date(firstBroadcastDate).toLocaleString()));
     
      div.appendChild(img);
      div.appendChild(ptitle);
      div.appendChild(p);
      p.style.marginTop = "0";
      ptitle.style.display = "flex";
      ptitle.style.direction = "rtl";

      document.body.appendChild(div);
      div.style.margin = '10px';
      div.style.marginBottom = '20px';
      div.style.position = "relative";
      div.style.margin = '10px';
      div.style.marginBottom = '20px';
      div.style.position = "relative";

    }
  }
};



