/*
 * #%L
 * Adobe AEM6.2 Demo for authoring extension point: Flickr Assetfinder
 * %%
 * Copyright (C) 2016 Adobe
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */
(function ($, ns, channel, window, undefined) {

    /**
     *
     * Dependencies
     *
     */

    var assetFinder = ns.ui.assetFinder;

    /**
     *
     * Constants
     *
     */

    var FLICKR_API = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var NAME = "Flickr";

    /**
     *
     * Internals
     *
     */

    /**
     * Simple "template" function to render an image in the Asset Finder
     * @param  {String} src URL to the image
     * @return {String} markup for the image
     */
    function imageTemplate(src) {
        return '<article class="card-asset cq-draggable" draggable="true"  data-path="'+ src +'" data-asset-group="reference" data-type="'+ NAME +'" data-asset-mimetype="image/jpeg">' +
            '<i class="select"></i>' +
            '<i class="move"></i>' +
            '<div class="card">' +
            '<span class="image">' +
            '<img class="show-grid cq-dd-image" src="'+ src +'" alt="cover">' +
            '</span>' +
            '</div>' +
            '</article>';
    }

    /**
     * Function to parse search predicates query into Flickr API request parameters
     * @param  {String} query search predicates query
     * @return {String} request parameters object
     */
    function parseQuery(query) {
        var geoStart,
            text = "",
            geocontext = "";
        if (query.length > 0) {
            geoStart = query.indexOf('"');
            text = geoStart !== -1 ? query.substring(0, geoStart) : "";
            geocontext = geoStart !== -1 ? query.substring(geoStart, query.length).split(':')[1] : "";
        }

        return {
            text: text,
            geocontext: geocontext
        };
    }

    /**
     * Asset Controller for the Flickr assets
     * @type {Granite.author.ui.assetFinder~AssetController}
     */
    var flickrAssetController = {
        /**
         * Load assets from the public Flickr stream. Any search options are ignored.
         *
         * @param query {String} search query
         * @param lowerLimit {Number} lower bound for paging
         * @param upperLimit {Number} upper bound for paging
         * @returns {jQuery.Promise}
         */
        loadAssets: function (query, lowerLimit, upperLimit) {
            var def = $.Deferred();

            var params = parseQuery(query);

            $.getJSON(FLICKR_API, {
                text: params.text,
                geo_context: parseInt(params.geocontext.replace('"',"")),
                tagmode: "any",
                format: "json"
            }).done(function (data) {
                var output = '';

                for (var i=0; i < data.items.length; i++) {
                    output += imageTemplate(data.items[i].media.m);
                }

                def.resolve(output);
            });

            return def.promise();
        }
    };

    /**
     *
     * Hooks
     *
     */

    // Register new group in the Asset Finder
    assetFinder.register(NAME, flickrAssetController);

}(jQuery, Granite.author, jQuery(document), this));

