var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Airstrips_1 = new ol.format.GeoJSON();
var features_Airstrips_1 = format_Airstrips_1.readFeatures(json_Airstrips_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Airstrips_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Airstrips_1.addFeatures(features_Airstrips_1);
var lyr_Airstrips_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Airstrips_1, 
                style: style_Airstrips_1,
                popuplayertitle: 'Airstrips',
                interactive: true,
                title: '<img src="styles/legend/Airstrips_1.png" /> Airstrips'
            });
var format_MajorAirports_2 = new ol.format.GeoJSON();
var features_MajorAirports_2 = format_MajorAirports_2.readFeatures(json_MajorAirports_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorAirports_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorAirports_2.addFeatures(features_MajorAirports_2);
var lyr_MajorAirports_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorAirports_2, 
                style: style_MajorAirports_2,
                popuplayertitle: 'Major Airports',
                interactive: true,
                title: '<img src="styles/legend/MajorAirports_2.png" /> Major Airports'
            });

lyr_BaseMap_0.setVisible(true);lyr_Airstrips_1.setVisible(false);lyr_MajorAirports_2.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_Airstrips_1,lyr_MajorAirports_2];
lyr_Airstrips_1.set('fieldAliases', {'latitude_deg': 'latitude_deg', 'longitude_deg': 'longitude_deg', });
lyr_MajorAirports_2.set('fieldAliases', {});
lyr_Airstrips_1.set('fieldImages', {'latitude_deg': 'TextEdit', 'longitude_deg': 'TextEdit', });
lyr_MajorAirports_2.set('fieldImages', {});
lyr_Airstrips_1.set('fieldLabels', {'latitude_deg': 'no label', 'longitude_deg': 'no label', });
lyr_MajorAirports_2.set('fieldLabels', {});
lyr_MajorAirports_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});