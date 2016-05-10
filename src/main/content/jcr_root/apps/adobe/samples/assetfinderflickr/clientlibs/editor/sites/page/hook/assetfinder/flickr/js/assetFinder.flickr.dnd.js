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

    var extendClass = ns.util.extendClass;
    var AssetDragAndDrop = ns.ui.assetFinder.AssetDragAndDrop;
    var dropController = ns.ui.dropController;

    /**
     *
     * Constants
     *
     */

    var NAME = "Flickr";

    /**
     *
     * Internals
     *
     */

    var FlickrDragAndDrop = extendClass(AssetDragAndDrop, {});

    /**
     *
     * Hooks
     *
     */

    // Register to the d&d controller (the FlickrDragAndDrop behavior will be called for Assets cards annotated with data-type="Flickr")
    dropController.register(NAME, new FlickrDragAndDrop());

    /**
     * NB: To be able to directly drop the Flickr assets into your Page, make sure the Design configuration of your Parsys component allows it:
     *
     * <cq:authoring jcr:primaryType="nt:unstructured">
     *     <assetToComponentMapping jcr:primaryType="nt:unstructured">
     *         <image/>
     *         <document/>
     *         <video/>
     *         <flickr
     *              jcr:primaryType="nt:unstructured"
     *              assetGroup="reference"
     *              assetMimetype="image/*"
     *              droptarget="image"
     *              resourceType="adobe/samples/assetfinderflickr/components/imageref"
     *              type="Flickr"/>
     *     </assetToComponentMapping>
     */

}(jQuery, Granite.author, jQuery(document), this));
