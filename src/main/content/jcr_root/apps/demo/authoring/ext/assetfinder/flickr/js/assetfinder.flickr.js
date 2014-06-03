/*
 * ADOBE CONFIDENTIAL
 *
 * Copyright 2014 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 */
(function ($, author, channel, window, undefined) {

    var self = {},
        flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
        name = 'Flickr';

    /**
     * simple "template" function to render an image in the assetfinder
     * @param  {String} src URL to the image
     * @return {String} markup for the image
     */
    function imageTemplate(src) {
        return '<article class="card-asset cq-draggable" draggable="true"  data-path="'+ src +'" data-asset-group="reference" data-type="'+ name +'" data-asset-mimetype="image/jpeg">' +
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
     * Load assets from the public flickr stream. Any search options are ignored.
     * 
     * @param query {String} search query
     * @param lowerLimit {Number} lower bound for paging
     * @param upperLimit {Number} upper bound for paging
     * @returns {jQuery.Promise}
     */
    self.loadAssets = function (query, lowerLimit, upperLimit) {

        var def = $.Deferred();

        $.getJSON(flickerAPI, {
            //tags: query,
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
    };

    // register as a asset tab
    author.ui.assetFinder.register(name, self);

}(jQuery, Granite.author, jQuery(document), this));
