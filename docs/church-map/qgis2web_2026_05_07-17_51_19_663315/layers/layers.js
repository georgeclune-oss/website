var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 4.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_dioceseslandcover_perdiocese_withtitle_1 = new ol.format.GeoJSON();
var features_dioceseslandcover_perdiocese_withtitle_1 = format_dioceseslandcover_perdiocese_withtitle_1.readFeatures(json_dioceseslandcover_perdiocese_withtitle_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dioceseslandcover_perdiocese_withtitle_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dioceseslandcover_perdiocese_withtitle_1.addFeatures(features_dioceseslandcover_perdiocese_withtitle_1);
var lyr_dioceseslandcover_perdiocese_withtitle_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dioceseslandcover_perdiocese_withtitle_1, 
                style: style_dioceseslandcover_perdiocese_withtitle_1,
                popuplayertitle: 'dioceses — landcover_perdiocese_withtitle',
                interactive: true,
                title: '<img src="styles/legend/dioceseslandcover_perdiocese_withtitle_1.png" /> dioceses — landcover_perdiocese_withtitle'
            });
var format_IrelandAllchurchesireland_2 = new ol.format.GeoJSON();
var features_IrelandAllchurchesireland_2 = format_IrelandAllchurchesireland_2.readFeatures(json_IrelandAllchurchesireland_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IrelandAllchurchesireland_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IrelandAllchurchesireland_2.addFeatures(features_IrelandAllchurchesireland_2);
var lyr_IrelandAllchurchesireland_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IrelandAllchurchesireland_2, 
                style: style_IrelandAllchurchesireland_2,
                popuplayertitle: 'Ireland All churches — ireland',
                interactive: true,
                title: '<img src="styles/legend/IrelandAllchurchesireland_2.png" /> Ireland All churches — ireland'
            });

lyr_Positron_0.setVisible(true);lyr_dioceseslandcover_perdiocese_withtitle_1.setVisible(true);lyr_IrelandAllchurchesireland_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_dioceseslandcover_perdiocese_withtitle_1,lyr_IrelandAllchurchesireland_2];
lyr_dioceseslandcover_perdiocese_withtitle_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_IrelandAllchurchesireland_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_dioceseslandcover_perdiocese_withtitle_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'Name': 'TextEdit', 'Shape__Area': 'TextEdit', 'Shape__Length': 'TextEdit', });
lyr_IrelandAllchurchesireland_2.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr_dioceseslandcover_perdiocese_withtitle_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Name': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_IrelandAllchurchesireland_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_IrelandAllchurchesireland_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});