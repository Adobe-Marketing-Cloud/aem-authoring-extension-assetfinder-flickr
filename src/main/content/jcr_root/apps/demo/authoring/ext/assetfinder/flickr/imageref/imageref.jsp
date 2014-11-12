<%--
  #%L
  Adobe AEM6 demo for authoring extension point: Flickr Assetfinder
  %%
  Copyright (C) 2014 Adobe
  %%
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
  
       http://www.apache.org/licenses/LICENSE-2.0
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  #L%
  --%><%
%><%@page session="false" import="com.adobe.granite.ui.components.Config,
                                  com.day.cq.wcm.api.components.DropTarget,
                                  com.day.cq.wcm.foundation.Placeholder" %><%
%><%@include file="/libs/foundation/global.jsp"%><%--

  This component allows to show an external image file.

--%><%
    String ddClassName = DropTarget.CSS_CLASS_PREFIX + "image";

    Config cfg = new Config(resource);
    String fileReference = cfg.get("fileReference", String.class);

    if (fileReference == null) {
        String placeholder = Placeholder.getDefaultPlaceholder(slingRequest, component, null, ddClassName, null);
        %><%= placeholder %><%
    } else {
        %><div class="<%= xssAPI.encodeForHTMLAttr(ddClassName) %>"><%
            %><img src="<%= xssAPI.getValidHref(fileReference) %>"/>
        </div><%

    }
%>
