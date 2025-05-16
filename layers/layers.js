ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11914172.357692, -769182.959508, 11941233.664487, -752730.077882]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UniversitasYangBeradaDiCianjur_1 = new ol.format.GeoJSON();
var features_UniversitasYangBeradaDiCianjur_1 = format_UniversitasYangBeradaDiCianjur_1.readFeatures(json_UniversitasYangBeradaDiCianjur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UniversitasYangBeradaDiCianjur_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UniversitasYangBeradaDiCianjur_1.addFeatures(features_UniversitasYangBeradaDiCianjur_1);
var lyr_UniversitasYangBeradaDiCianjur_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UniversitasYangBeradaDiCianjur_1, 
                style: style_UniversitasYangBeradaDiCianjur_1,
                popuplayertitle: 'Universitas Yang Berada Di Cianjur',
                interactive: true,
    title: 'Universitas Yang Berada Di Cianjur<br />\
    <img src="styles/legend/UniversitasYangBeradaDiCianjur_1_0.png" /> <br />\
    <img src="styles/legend/UniversitasYangBeradaDiCianjur_1_1.png" /> <br />\
    <img src="styles/legend/UniversitasYangBeradaDiCianjur_1_2.png" /> <br />\
    <img src="styles/legend/UniversitasYangBeradaDiCianjur_1_3.png" /> <br />\
    <img src="styles/legend/UniversitasYangBeradaDiCianjur_1_4.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_UniversitasYangBeradaDiCianjur_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_UniversitasYangBeradaDiCianjur_1];
lyr_UniversitasYangBeradaDiCianjur_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'X-coord': 'X-coord', 'Y-coord': 'Y-coord', 'Deskripsi': 'Deskripsi', 'Gambar_URL': 'Gambar_URL', });
lyr_UniversitasYangBeradaDiCianjur_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'X-coord': 'TextEdit', 'Y-coord': 'TextEdit', 'Deskripsi': 'TextEdit', 'Gambar_URL': 'TextEdit', });
lyr_UniversitasYangBeradaDiCianjur_1.set('fieldLabels', {'id': 'inline label - visible with data', 'Nama': 'header label - always visible', 'X-coord': 'inline label - visible with data', 'Y-coord': 'inline label - visible with data', 'Deskripsi': 'header label - always visible', 'Gambar_URL': 'inline label - visible with data', });
lyr_UniversitasYangBeradaDiCianjur_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});