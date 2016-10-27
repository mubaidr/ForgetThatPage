# <img src="chromium/img/icon/swipe64.png" width="50" height="50"/> Forget That Page  

[![Licence GPL](http://img.shields.io/badge/license-GPL-green.svg)](http://www.gnu.org/licenses/quick-guide-gplv3.fr.html)

We all at some point ended up on a webpage that we don't want to appear on our browsing history. Either it's for a gift, or a dumb page...

With "Forget That Page", you can totally delete the current webpage from your browsing history, just in one click !
It also deletes cookies, session storage, local storage and download history for that page.

It's simple but useful, and also open source !

<img src=".images/forget-that-page-view.png" width="640" height="400"/>

## Table of contents

* [Articles about the extension](#articles)
* [Statistics](#statistics)
* [How to use it](#how-to-use-it)
* [Versioning](#versioning)
* [References](#references)
* [Copyright and license](#copyright-and-license)

## Articles about the extension
Here are some articles that were written about the extension, all the articles are available in the Wiki section:

<p> techcollecto.com : http://www.techcollecto.com/2016/10/05/delete-history-current-webpage-in-one-click-firefox-add-on/ </p>
<p> ghacks.net : http://www.ghacks.net/2016/10/07/remove-traces-with-forget-that-page/ </p>
<p> seo-michael.co.uk : https://seo-michael.co.uk/forget-that-page-for-chrome/ </p>
<p> apprcn.com : http://www.apprcn.com/forget-that-page.html </p>

<b> Thanks to the persons who wrote those articles ! </b>

## Statistics
On 27/10/2016 :
* **905** Downloads for Opera
* **356** Daily users on Chrome
* **1 254** Downloads and **220** average daily users on Firefox

## How to use it

### <img src=".images/Chrome_icon.png" /> Chrome
#### Stable version
Download from the Google Chrome web store :
https://chrome.google.com/webstore/detail/forget-that-page/nolcpahhgjbmaoemlhaiplpjlljaefic

#### Unstable version
* Download the last release from https://github.com/cyril-we/ForgetThatPage/releases
* Unzip the archive to a folder
* Go to "chrome://extensions/" on your Chromium/Google Chrome browser
* Allow developer mode
* Select "load unpacked extension"
* Browse to the previously created folder

##### Note
Vivaldi browser supports Chrome extensions, type "vivaldi://extensions" on your search bar.
Installation is exactly like Chrome. Also, other browsers based on Chromium probably work the same way.

### <img src=".images/Firefox_icon.png" /> Firefox (for version 49 and more)
#### Stable version
Download from Mozilla add-ons store:
https://addons.mozilla.org/firefox/addon/forget-that-page/

#### Unstable version
* Download the last release (.xpi file) from https://github.com/cyril-we/ForgetThatPage/releases
* Go to "about:addons"
* Click on the gear (Tools for all add-ons)
* Select "Install Add-on From File..."
* Select the .xpi file downloaded

### <img src=".images/Opera_icon.png" /> Opera
#### Stable version
Download from Opera add-ons store:
https://addons.opera.com/fr/extensions/details/forget-that-page/

#### Unstable version
Same as Chrome version

## Versioning
### Version 1.x.x - Work In Progress
* If the url ends with '/', delete without '/'. If it doesn't, delete url with the '/'

### Version 1.5.0 - 17/10/2016
* Delete downloads list for page url
* Options page. By default everything is deleted but the user can choose not to delete cookies and/or sessionStorage and/or localStorage
* Added Norwegian, Vietnamese, Bulgarian, Greek, Ukrainian and Thai (Translation from https://gengo.com/)
* Changed green icon

### Version 1.4.0 - 09/10/2016
* Delete cookies
* Added Hindi, Bengali (Thanks to DreaMzZ), Afrikaans (Thanks to Grimmjow|LIVE)

### Version 1.3.1 - 06/10/2016
* Same version number for Chrome, Firefox and Opera
* Added Japanese and Chinese for all versions

### Version 1.3.0 - 03/10/2016
* Delete local storage
* Delete session storage
* Popup closes after 1.5 seconds
* Small design changes
* Added Swedish, Serbian, Welsh, Slovak, Hungarian, Czech, Finnish, Tagalog, Russian
* Corrected German, Italian

<b> Thanks to all Reddit translators for their help</b>

### All versions notes are available in the Wiki section

#### Note
Minor version number is incremented when a new feature is added.

Revision number is incremented when code is changed but no new feature is added.

## References
Thanks to all the following reddit translators for their help:
MattOnADinosaur, akroe, Kamparano, gabi_never08, amityvision, Trucoto,
sarveil, rararaw21, klingy_koala, coriandres, Terpomo11, cmuffy195,
Graeskmoent, Kazumara, Huskar, lookmanofilter, Cestus44, NigelDuckrag,
Emmison, ledenicaj, owain2002, Boothiepro, Eetsi123, CuddlyBeaver,
FilipinoRedditor, matmikus, mympuk, sanyuanmilk, Eikha, Roughy, NoorEcube,
studioidefix

Icon made by Freepik from www.flaticon.com

Background pattern from www.subtlepatterns.com

## Copyright and License

Copyright (c) 2016, Cyril Weller

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
