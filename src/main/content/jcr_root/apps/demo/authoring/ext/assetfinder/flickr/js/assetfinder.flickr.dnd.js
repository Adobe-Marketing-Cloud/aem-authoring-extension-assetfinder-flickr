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
(function ($, ns, channel, window, undefined) {

    var self = {},
        name = 'Flickr';

    self.handleDragStart = function (event) {

    };

    self.handleDrag = function (event) {

    };

    self.handleDragEnd = function (event) {

    };

    self.handleDragEnter = function (event) {

    };

    self.handleDragOver = function (event) {

    };

    self.handleDragLeave = function (event) {

    };

    /**
     * handles the situation after a Flickr image was dropped on a valid drop zone
     * 
     * @param  {Event} event
     */
    self.handleDrop = function (event) {
        var editable = event.currentDropTarget.targetEditable,
            properties = {};

        for (var i = 0; i < editable.dropTargets.length; i++) {
            var dropTarget = editable.dropTargets[i],
                fileProperty = dropTarget.name,
                params = dropTarget.params,
                j;

            properties[fileProperty] = event.path;

            for (j in params) {
                if (params.hasOwnProperty(j)) {
                    properties[j] = params[j];
                }
            }

            for (j in event.param) {
                if (event.param.hasOwnProperty(j)) {
                    properties[j] = event.param[j];
                }
            }

            // set lastModified and lastModifiedBy
            // hack: this might be done maybe in a better way: properties should be given by the dialog
            var imgNode = fileProperty.substring(0, fileProperty.lastIndexOf("/"));
            properties[imgNode + "/jcr:lastModified"] = null;
            properties[imgNode + "/jcr:lastModifiedBy"] = null;
        }

        ns.edit.actions.doUpdate(editable, properties).done(function () {
            ns.selection.select(editable);
        });
    };

    // register the controller at the dispatcher
    ns.dropController.register(name, self);

}(jQuery, Granite.author, jQuery(document), this));
