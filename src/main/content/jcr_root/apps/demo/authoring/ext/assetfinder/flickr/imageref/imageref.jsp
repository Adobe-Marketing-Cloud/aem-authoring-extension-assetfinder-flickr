<%--
  ADOBE CONFIDENTIAL

  Copyright 2014 Adobe Systems Incorporated
  All Rights Reserved.

  NOTICE: All information contained herein is, and remains
  the property of Adobe Systems Incorporated and its suppliers,
  if any. The intellectual and technical concepts contained
  herein are proprietary to Adobe Systems Incorporated and its
  suppliers and may be covered by U.S. and Foreign Patents,
  patents in process, and are protected by trade secret or copyright law.
  Dissemination of this information or reproduction of this material
  is strictly forbidden unless prior written permission is obtained
  from Adobe Systems Incorporated.
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
