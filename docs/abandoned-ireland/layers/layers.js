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
var format_Smallsmall_1 = new ol.format.GeoJSON();
var features_Smallsmall_1 = format_Smallsmall_1.readFeatures(json_Smallsmall_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Smallsmall_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Smallsmall_1.addFeatures(features_Smallsmall_1);
var lyr_Smallsmall_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Smallsmall_1, 
                style: style_Smallsmall_1,
                popuplayertitle: 'Small — small',
                interactive: false,
                title: '<img src="styles/legend/Smallsmall_1.png" /> Small — small'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Smallsmall_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Smallsmall_1];
lyr_Smallsmall_1.set('fieldAliases', {'fid': 'fid', });
lyr_Smallsmall_1.set('fieldImages', {'fid': '', });
lyr_Smallsmall_1.set('fieldLabels', {'fid': 'no label', });
lyr_Smallsmall_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});