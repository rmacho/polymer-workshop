import '/src/polymer-workshop-app/polymer-workshop-app.js';
import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<title>polymer-workshop</title><polymer-workshop-app></polymer-workshop-app>`;
document.head.appendChild($_documentContainer.content);

/* See https://goo.gl/OOhYW5 */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;
