/*
 * #%L
 * Adobe AEM6 demo for authoring extension point: Flickr Assetfinder
 * %%
 * Copyright (C) 2015 Adobe
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

    var name = 'Flickr';

    function FlickrImageDragAndDrop() {}

    ns.util.inherits(FlickrImageDragAndDrop, ns.ui.assetFinder.AssetDragAndDrop);

    // register the controller at the dispatcher
    ns.ui.dropController.register(name, new FlickrImageDragAndDrop());

}(jQuery, Granite.author, jQuery(document), this));
