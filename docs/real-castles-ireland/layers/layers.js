var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_test_1 = new ol.format.GeoJSON();
var features_test_1 = format_test_1.readFeatures(json_test_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test_1.addFeatures(features_test_1);
var lyr_test_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_test_1, 
                style: style_test_1,
                popuplayertitle: 'test',
                interactive: false,
                title: '<img src="styles/legend/test_1.png" /> test'
            });
var format_castlesni_2 = new ol.format.GeoJSON();
var features_castlesni_2 = format_castlesni_2.readFeatures(json_castlesni_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_castlesni_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_castlesni_2.addFeatures(features_castlesni_2);
var lyr_castlesni_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_castlesni_2, 
                style: style_castlesni_2,
                popuplayertitle: 'castlesni',
                interactive: false,
                title: '<img src="styles/legend/castlesni_2.png" /> castlesni'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_test_1.setVisible(true);lyr_castlesni_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_test_1,lyr_castlesni_2];
lyr_test_1.set('fieldAliases', {'fid': 'fid', });
lyr_castlesni_2.set('fieldAliases', {'fid': 'fid', });
lyr_test_1.set('fieldImages', {'fid': 'TextEdit', });
lyr_castlesni_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_test_1.set('fieldLabels', {'fid': 'no label', });
lyr_castlesni_2.set('fieldLabels', {'fid': 'no label', });
lyr_castlesni_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});