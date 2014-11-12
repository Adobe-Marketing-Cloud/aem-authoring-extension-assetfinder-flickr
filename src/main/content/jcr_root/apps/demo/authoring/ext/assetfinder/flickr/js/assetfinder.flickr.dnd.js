/*
 * #%L
 * Adobe AEM6 demo for authoring extension point: Flickr Assetfinder
 * %%
 * Copyright (C) 2014 Adobe
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
