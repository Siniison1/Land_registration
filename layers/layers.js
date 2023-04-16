var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_final_output_1 = new ol.format.GeoJSON();
var features_final_output_1 = format_final_output_1.readFeatures(json_final_output_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_final_output_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_final_output_1.addFeatures(features_final_output_1);
var lyr_final_output_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_final_output_1, 
                style: style_final_output_1,
                interactive: true,
                title: '<img src="styles/legend/final_output_1.png" /> final_output'
            });
var format_intersect_area_2 = new ol.format.GeoJSON();
var features_intersect_area_2 = format_intersect_area_2.readFeatures(json_intersect_area_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_intersect_area_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_intersect_area_2.addFeatures(features_intersect_area_2);
var lyr_intersect_area_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_intersect_area_2, 
                style: style_intersect_area_2,
                interactive: true,
                title: '<img src="styles/legend/intersect_area_2.png" /> intersect_area'
            });

lyr_OSMStandard_0.setVisible(true);lyr_final_output_1.setVisible(true);lyr_intersect_area_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_final_output_1,lyr_intersect_area_2];
lyr_final_output_1.set('fieldAliases', {'area_m2': 'area_m2', 'Party_name': 'Party_name', 'Party_ID': 'Party_ID', 'Party_type': 'Party_type', 'Refer_ID': 'Refer_ID', 'Address': 'Address', 'Right_ID': 'Right_ID', 'Right_type': 'Right_type', 'ResponsibT': 'ResponsibT', 'RestrictT': 'RestrictT', });
lyr_intersect_area_2.set('fieldAliases', {'FID_disput': 'FID_disput', 'area_m2': 'area_m2', 'Party_name': 'Party_name', 'Party_ID': 'Party_ID', 'Party_type': 'Party_type', 'Refer_ID': 'Refer_ID', 'Address': 'Address', 'Right_ID': 'Right_ID', 'Right_type': 'Right_type', 'ResponsibT': 'ResponsibT', 'RestrictT': 'RestrictT', });
lyr_final_output_1.set('fieldImages', {'area_m2': 'TextEdit', 'Party_name': 'TextEdit', 'Party_ID': 'Hidden', 'Party_type': 'TextEdit', 'Refer_ID': 'Hidden', 'Address': 'TextEdit', 'Right_ID': 'Hidden', 'Right_type': 'TextEdit', 'ResponsibT': 'TextEdit', 'RestrictT': 'TextEdit', });
lyr_intersect_area_2.set('fieldImages', {'FID_disput': '', 'area_m2': '', 'Party_name': '', 'Party_ID': '', 'Party_type': '', 'Refer_ID': '', 'Address': '', 'Right_ID': '', 'Right_type': '', 'ResponsibT': '', 'RestrictT': '', });
lyr_final_output_1.set('fieldLabels', {'area_m2': 'inline label', 'Party_name': 'inline label', 'Party_type': 'inline label', 'Address': 'inline label', 'Right_type': 'inline label', 'ResponsibT': 'inline label', 'RestrictT': 'inline label', });
lyr_intersect_area_2.set('fieldLabels', {'FID_disput': 'no label', 'area_m2': 'no label', 'Party_name': 'no label', 'Party_ID': 'no label', 'Party_type': 'no label', 'Refer_ID': 'no label', 'Address': 'no label', 'Right_ID': 'no label', 'Right_type': 'no label', 'ResponsibT': 'no label', 'RestrictT': 'no label', });
lyr_intersect_area_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});