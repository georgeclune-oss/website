var wms_layers = [];


        var lyr_DarkMatter_0 = new ol.layer.Tile({
            'title': 'Dark Matter',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_NonOrbitalSpacports_1 = new ol.format.GeoJSON();
var features_NonOrbitalSpacports_1 = format_NonOrbitalSpacports_1.readFeatures(json_NonOrbitalSpacports_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NonOrbitalSpacports_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NonOrbitalSpacports_1.addFeatures(features_NonOrbitalSpacports_1);
var lyr_NonOrbitalSpacports_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NonOrbitalSpacports_1, 
                style: style_NonOrbitalSpacports_1,
                popuplayertitle: 'Non Orbital Spacports',
                interactive: true,
                title: '<img src="styles/legend/NonOrbitalSpacports_1.png" /> Non Orbital Spacports'
            });
var format_OrbitalSpaceports_2 = new ol.format.GeoJSON();
var features_OrbitalSpaceports_2 = format_OrbitalSpaceports_2.readFeatures(json_OrbitalSpaceports_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OrbitalSpaceports_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OrbitalSpaceports_2.addFeatures(features_OrbitalSpaceports_2);
var lyr_OrbitalSpaceports_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OrbitalSpaceports_2, 
                style: style_OrbitalSpaceports_2,
                popuplayertitle: 'Orbital Spaceports',
                interactive: true,
                title: '<img src="styles/legend/OrbitalSpaceports_2.png" /> Orbital Spaceports'
            });

lyr_DarkMatter_0.setVisible(true);lyr_NonOrbitalSpacports_1.setVisible(true);lyr_OrbitalSpaceports_2.setVisible(true);
var layersList = [lyr_DarkMatter_0,lyr_NonOrbitalSpacports_1,lyr_OrbitalSpaceports_2];
lyr_NonOrbitalSpacports_1.set('fieldAliases', {'name': 'name', 'latitude': 'latitude', 'longitude': 'longitude', 'spaceport': 'spaceport', 'country': 'country', 'is_orbital': 'is_orbital', });
lyr_OrbitalSpaceports_2.set('fieldAliases', {'name': 'name', 'latitude': 'latitude', 'longitude': 'longitude', 'spaceport': 'spaceport', 'country': 'country', 'is_orbital': 'is_orbital', });
lyr_NonOrbitalSpacports_1.set('fieldImages', {'name': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'spaceport': 'TextEdit', 'country': 'TextEdit', 'is_orbital': 'CheckBox', });
lyr_OrbitalSpaceports_2.set('fieldImages', {'name': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'spaceport': 'TextEdit', 'country': 'TextEdit', 'is_orbital': 'CheckBox', });
lyr_NonOrbitalSpacports_1.set('fieldLabels', {'name': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'spaceport': 'no label', 'country': 'no label', 'is_orbital': 'no label', });
lyr_OrbitalSpaceports_2.set('fieldLabels', {'name': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'spaceport': 'no label', 'country': 'no label', 'is_orbital': 'no label', });
lyr_OrbitalSpaceports_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});