# The Blogger Helper Plugin

[![APEX Community](https://cdn.rawgit.com/Dani3lSun/apex-github-badges/78c5adbe/badges/apex-community-badge.svg)](https://apex.oracle.com/pls/apex/r/gamma_dev/demo/) [![APEX Plugin](https://cdn.rawgit.com/Dani3lSun/apex-github-badges/b7e95341/badges/apex-plugin-badge.svg)](https://apex.oracle.com/pls/apex/r/gamma_dev/demo/)
[![APEX Built with Love](https://cdn.rawgit.com/Dani3lSun/apex-github-badges/7919f913/badges/apex-love-badge.svg)](https://apex.oracle.com/pls/apex/r/gamma_dev/demo/)

## Description
A `Region` type plugin which generates a nice link to a blog post (or any other website). Could be used as a fixed to the page `Ribbon` (auto collapsed on mobile) or as a `Card` with title, description and image. If `Hashnode` blog post is specified then title, description and image are automatically populated.

## Demo Application
[https://apex.oracle.com/pls/apex/r/gamma_dev/demo/](https://apex.oracle.com/pls/apex/r/gamma_dev/demo/)

## Install
- Import plugin file "the_blogger_helper_plugin.sql" from source directory into your application
- (Optional) Deploy the image and CSS/JS files from "server" directory on your webserver and change the "File Prefix" to web servers folder (Inside the Plugin Settings).

## Usage
- After installing the plugin, create a new Region in the Body position of your page. Set the Region "Template" option (under "Appearance") to `Blank with Attributes`.
- Set the desired configuration attributes in the Region Attributes tab and save.
- While your application is open, use `setPrimaryColour("#b3840e")` in you browser Dev Tools Console to try out new colours for your plugin. Just replace the default colour HEX value with your own. You can later use it in the Plugin Settings as a permanent one.
- Change the `ribbon` CSS class if you like to change the position of the ribbon:
```css
/* for example changing the vertical position */
.ribbon {
    top: 50px;
}
```
## Preview
![Ribbon tyles of the plugin](https://github.com/plamen9/apex-plugins-the-blogger-helper/blob/main/demo_4_mobile.jpg "Ribbon style on mobile")
![Ribbon tyles of the plugin](https://github.com/plamen9/apex-plugins-the-blogger-helper/blob/main/demo_5_mobile.jpg "Ribbon style on mobile")
![Ribbon and Card styles of the plugin](https://github.com/plamen9/apex-plugins-the-blogger-helper/blob/main/demo_2.jpg "Ribbon and Card styles of the plugin")
