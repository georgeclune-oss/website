var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_ne_10m_admin_0_countries_1 = new ol.format.GeoJSON();
var features_ne_10m_admin_0_countries_1 = format_ne_10m_admin_0_countries_1.readFeatures(json_ne_10m_admin_0_countries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_admin_0_countries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_admin_0_countries_1.addFeatures(features_ne_10m_admin_0_countries_1);
var lyr_ne_10m_admin_0_countries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ne_10m_admin_0_countries_1, 
                style: style_ne_10m_admin_0_countries_1,
                popuplayertitle: 'ne_10m_admin_0_countries',
                interactive: true,
                title: '<img src="styles/legend/ne_10m_admin_0_countries_1.png" /> ne_10m_admin_0_countries'
            });
var format_trackscircuits_1_2 = new ol.format.GeoJSON();
var features_trackscircuits_1_2 = format_trackscircuits_1_2.readFeatures(json_trackscircuits_1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trackscircuits_1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trackscircuits_1_2.addFeatures(features_trackscircuits_1_2);
var lyr_trackscircuits_1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trackscircuits_1_2, 
                style: style_trackscircuits_1_2,
                popuplayertitle: 'tracks — circuits_1',
                interactive: false,
                title: '<img src="styles/legend/trackscircuits_1_2.png" /> tracks — circuits_1'
            });

lyr_Positron_0.setVisible(true);lyr_ne_10m_admin_0_countries_1.setVisible(true);lyr_trackscircuits_1_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_ne_10m_admin_0_countries_1,lyr_trackscircuits_1_2];
lyr_ne_10m_admin_0_countries_1.set('fieldAliases', {});
lyr_trackscircuits_1_2.set('fieldAliases', {'fid': 'fid', });
lyr_ne_10m_admin_0_countries_1.set('fieldImages', {});
lyr_trackscircuits_1_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_ne_10m_admin_0_countries_1.set('fieldLabels', {});
lyr_trackscircuits_1_2.set('fieldLabels', {'fid': 'no label', });
lyr_trackscircuits_1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});