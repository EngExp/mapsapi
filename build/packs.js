var packages = {

    base: {
        name: 'Базовый',
        modules: ['Core', 'TileLayer', 'DGTileLayer'],
        desc: 'Представляет собой самый базовый функционал: карта и элементы управления'
    },

    standard: {
        name: 'Стандарт',
        modules: ['Core', 'TileLayer', 'ControlLayers', 'ControlZoom', 'Popup', 'MapDrag', 'ControlAttrib', 'DGTileLayer', 'Marker', 'DivIcon'],
        desc: 'Представляет собой стандартный функционал: карта, маркеры, балуны, геометрии'
    },

    full: {
        name: 'Полный',
        modules: [],
        desc: 'Полный, максимальный пакет. Включает в себя весь функционал API карт'
    },

    online: {
        name: 'Онлайн',
        modules: [],
        desc: 'Полный, максимальный пакет. Включает в себя весь функционал API карт'
    }

};

if (typeof exports !== 'undefined') {
    exports.packages = packages;
}
