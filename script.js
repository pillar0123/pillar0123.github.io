window.onload = function () {
  const gallery = document.getElementById('gallery');
  
  const people = [
      { name: "Person 1", link: "Ultraman/Father of Ultra.html", imgSrc: "image/奥特之父.jpg"},
      { name: "Person 2", link: "Ultraman/Mother of Ultra.html", imgSrc: "image/奥特之母.webp"},
      { name: "Person 3", link: "Ultraman/Ultra Seven.html", imgSrc: "image/赛文奥特曼.jpg"},
      { name: "Person 4", link: "Ultraman/Ultraman Taro.html", imgSrc: "image/泰罗奥特曼.png"},
      { name: "Person 5", link: "Ultraman/Ultraman Taiga.html", imgSrc: "image/泰伽奥特曼.png"},
      { name: "Person 6", link: "Ultraman/Ultraman Tiga.html", imgSrc: "image/迪迦奥特曼.png"},
      { name: "Person 7", link: "Ultraman/Ultraman Nexus.html", imgSrc: "image/奈克瑟斯奥特曼.webp"},
      { name: "Person 8", link: "Ultraman/Ultraman Mebius.html", imgSrc: "image/梦比优斯奥特曼.webp"},
      { name: "Person 9", link: "Ultraman/Ultraman Ginga.html", imgSrc: "image/银河奥特曼.jpg"},
      { name: "Person 10", link: "Ultraman/Ultraman Gaia.html", imgSrc: "image/盖亚奥特曼.webp"},
      { name: "Person 11", link: "Ultraman/Ultraman Jack.html", imgSrc: "image/杰克奥特曼.webp"},
      { name: "Person 12", link: "Ultraman/Ultraman Geed.html", imgSrc: "image/捷德奥特曼.webp"},
      { name: "Person 13", link: "Ultraman/Ultraman Leo.html", imgSrc: "image/雷欧奥特曼.webp"},
      { name: "Person 14", link: "Ultraman/Ultraman Dyna.html", imgSrc: "image/戴拿奥特曼.webp"},
      { name: "Person 15", link: "Ultraman/Ultraman Origin.html", imgSrc: "image/初代奥特曼.jpg"},
      { name: "Person 16", link: "Ultraman/Ultraman Blazar.html", imgSrc: "image/布雷泽奥特曼.webp"},
    //   { name: "Person 17", link: "person17.html", imgSrc: "path/to/person17.jpg" },
    //   { name: "Person 18", link: "person18.html", imgSrc: "path/to/person18.jpg" },
    //   { name: "Person 19", link: "person19.html", imgSrc: "path/to/person19.jpg" },
    //   { name: "Person 20", link: "person20.html", imgSrc: "path/to/person20.jpg" }
  ];

  people.forEach(person => {
      const personFrame = document.createElement('div');
      personFrame.className = "person-frame";
      personFrame.addEventListener('click', function () {
          window.location.href = person.link;
      });

      const img = document.createElement('img');
      img.src = person.imgSrc; 
      img.alt = person.name;
      img.style.width = "295px"; 
      img.style.height = "413px"; 
      img.style.borderRadius = "0"; 
      img.style.objectFit = "cover"; 
      personFrame.appendChild(img);

      const nameDiv = document.createElement('div');
      nameDiv.textContent = person.name;
      nameDiv.className = "person-name";
      personFrame.appendChild(nameDiv);

      gallery.appendChild(personFrame);
  });
}


