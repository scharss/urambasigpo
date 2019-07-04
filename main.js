  //*********************************************

  



            //**********************************************
            var map = L.map('mapContainer').setView([3.50112,-76.298904 ], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(map);
    
       var marcas=  L.marker([3.50112,-76.298904 ]).addTo(map)
        .bindPopup('Aca estoy <a href=\"https://scharss.github.io/" target=\"_blank\" title=\"Opens in a new window\">Ir aquí</a>')
        .openPopup();
    
    
        var marcas2=  L.marker([3.52112,-76.299904 ]).addTo(map)
        .bindPopup('Aca estoy <a href=\"https://scharss.github.io/" target=\"_blank\" title=\"Opens in a new window\">Ir aquí</a>')
        .openPopup();
    
    
    
        var overlayMaps = {
        "marcas": marcas,
        "marcas2": marcas2
    };
    
    
    
    L.control.layers(overlayMaps).addTo(map);