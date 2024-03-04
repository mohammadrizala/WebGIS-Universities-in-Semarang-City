var map = L.map('map').setView([-7.000500, 110.399975], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var myIcon = L.icon({iconUrl: 'images/university.png', iconSize: [30, 30]});

    function showPopup(feature, layer){
        layer.bindPopup(makePopupcontent(feature), {offset: L.point(0,-8)});
    }

    function makePopupcontent(pt) {
        return `
            <div>
                <h4>${pt.properties.Name}</h4>
                <img src='${pt.properties.Image}'>
                <p>${pt.properties.Address}</p>
                <a>${pt.properties.Website}</a>
            </div>
        `;}

    var ptLayer = L.geoJSON(data, {
        onEachFeature: showPopup,
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, { icon: myIcon });
        }
    });

    ptLayer.addTo(map); 

    function search() {
        let filter = document.getElementById('find').value.toUpperCase();
        let item = document.querySelectorAll('.list');
        let l = document.getElementsByTagName('h3');
        for(var i = 0;i<=l.length;i++){
            let a=item[i].getElementsByTagName('h3')[0];
            let value=a.innerHTML || a.innerText || a.textContent;
            if(value.toUpperCase().indexOf(filter) > -1) {
                item[i].style.display="";
            }
            else
            {
                item[i].style.display="none";
            }
        }
    }

    // const btnElList = document.querySelector('.list');

    // btnElList.forEach(btnEl => {
    //     btnEl.addEventListener('click', () => {
    //         document.querySelector('.special')?.classList.remove('special');
    //         btnEl.classList.add('special');
    //     });
    // });