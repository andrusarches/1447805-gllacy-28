ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.939314, 30.327959],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
            hintContent: 'Магазин мороженого «Глэйси»'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/pin.svg',
            iconImageSize: [80, 140],
            iconImageOffset: [-40, -140]
        });

    myMap.geoObjects
        .add(myPlacemark)
});
