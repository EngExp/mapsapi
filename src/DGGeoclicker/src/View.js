L.DG.Geoclicker.View = L.Class.extend({

    initialize: function(map, options) { // (Object, Object)
        this._map = map;
        this._popup = L.popup({maxHeight:300, maxWidth: 438});
        options && L.Util.setOptions(this, options);
    },

    showLoader: function () {
        var popup = this._popup,
            loaderDiv =  document.getElementById('dg-popup-firm-loading');

        this.hideLoader();
        if (loaderDiv) {
            loaderDiv.style.display = 'block';
        } else {
            popup.setContent('<img src="http://maps.api.2gis.ru/images/loader_directory.gif"');
        }
    },

    hideLoader: function () {
        var loaderDiv = document.getElementById('dg-popup-firm-loading');
        if (loaderDiv) {
            loaderDiv.style.display = "none";
        } else {
            this._popup.setContent('<div id="dg-popup-firm-loading"></div>');
        }
    },

    showPopup: function (latlng) { // (Object)
        this._popup.setLatLng(latlng).openOn(this._map);
    },

    render: function(options) { // (Object) -> String
        var html;

        options = options || {};
        options.tmpl = options.tmpl || "";

        if (options.data) {
            html = L.Util.template(options.tmpl, options.data);
        } else {
            html = options.tmpl;
        }

        options.beforeRender && options.beforeRender();

        if (options.popup) {
            if (options.append) {
                var popupLoader = document.getElementById("dg-popup-firm-loading");
                popupLoader.insertAdjacentHTML("beforeBegin", html);
            } else {
                options.header && this._popup.setHeaderContent(options.header);
                options.footer && this._popup.setFooterContent(options.footer);
                this._popup.setContent(html);
            }
        }

        options.afterRender && options.afterRender();

        return html;
    },

    renderPopup: function(options) { // (Object) -> String
        options.popup = true;
        return this.render(options);
    },

    getPopup: function() { // () -> Object
        return this._popup;
    }
});
