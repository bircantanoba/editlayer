import Vue from 'vue'
import Icon from 'vue-awesome/components/Icon'

import 'vue-awesome/icons/regular/file'
import 'vue-awesome/icons/regular/user'
import 'vue-awesome/icons/check'
import 'vue-awesome/icons/cloud-upload-alt'
import 'vue-awesome/icons/spinner'
import 'vue-awesome/icons/chevron-left'
import 'vue-awesome/icons/chevron-right'
import 'vue-awesome/icons/regular/edit'
import 'vue-awesome/icons/cogs'
import 'vue-awesome/icons/home'
import 'vue-awesome/icons/trash'
import 'vue-awesome/icons/regular/clock'
import 'vue-awesome/icons/plus'
import 'vue-awesome/icons/edit'
import 'vue-awesome/icons/sign-out-alt'
import 'vue-awesome/icons/regular/copy'
import 'vue-awesome/icons/regular/thumbs-up'
import 'vue-awesome/icons/times'
import 'vue-awesome/icons/kiwi-bird'

Icon.register({
  editlayer: {
    width: 28,
    height: 20,
    paths: [
      {d: 'm13.8461538 15.8859592 10.8869191-5.238444 2.9592348 1.2250892v1.1380841l-13.8461539 6.433133-13.8461538-6.433133v-1.1380841l2.86214193-1.2250892z'},
      {d: 'm13.8461538 0 13.8461539 6.72571046v1.13808415l-13.8461539 6.43313299-13.8461538-6.43313299v-1.13808415z'},
    ],
  },
})

Icon.register({
  deviloper: {
    width: 1000,
    height: 300,
    paths: [
      {d: 'M916.671 248.325v51.599H878.31v-141.8h46.52c38.59 0 57.884 13.967 57.884 41.9 0 16.424-8.029 29.13-24.086 38.117L1000 299.924h-43.51l-30.107-51.599h-9.712zm0-28.806h7.187c13.403 0 20.104-5.916 20.104-17.749 0-9.764-6.572-14.645-19.715-14.645h-7.576v32.394z'},
      {d: 'M868.999408 299.923992L784.54725 299.923992 784.54725 158.12461 868.999408 158.12461 868.999408 188.87044 822.97882 188.87044 822.97882 211.178141 865.594079 211.178141 865.594079 241.923971 822.97882 241.923971 822.97882 268.693212 868.999408 268.693212z'},
      {d: 'M774.573 203.225c0 15.842-4.68 28.079-14.038 36.71-9.358 8.633-22.651 12.949-39.878 12.949h-10.783v47.04H671.5v-141.8h49.156c17.94 0 31.41 3.913 40.412 11.736 9.003 7.824 13.504 18.946 13.504 33.365zm-64.7 18.428h6.995c5.764 0 10.346-1.616 13.746-4.85 3.4-3.232 5.1-7.694 5.1-13.384 0-9.57-5.31-14.355-15.932-14.355h-9.908v32.59zm-64.746-35.436c8.88 11.827 14.132 26.47 14.132 42.323 0 39.29-32.26 71.14-72.054 71.14-39.794 0-72.053-31.85-72.053-71.14 0-16.005 5.353-30.776 14.388-42.662-5.466-16.144-7.209-30.904-5.228-44.279 8.405 15.934 17.082 24.534 26.032 25.802 10.784-6.352 23.391-10.002 36.861-10.002 13.499 0 26.13 3.665 36.93 10.042 9.057-1.114 17.836-9.728 26.336-25.842 1.994 13.469.213 28.342-5.344 44.618zm-57.922 78.355c20.156 0 36.495-16.132 36.495-36.032 0-19.9-16.34-36.032-36.495-36.032-20.155 0-36.494 16.132-36.494 36.032 0 19.9 16.339 36.032 36.494 36.032z'},
      {d: 'M427.580612 299.923992L427.580612 158.12461 465.966063 158.12461 465.966063 268.984182 520.677479 268.984182 520.677479 299.923992z'},
      {d: 'M333.819 0l90.437 94.032h-34.94c6.506 21.748 11.115 38.716 13.827 50.903 9.065 40.74 2.517 104.243-9.473 154.964h-45.514c19.424-46.951 31.717-108.983 23.812-154.964-1.602-9.318-5.268-23.25-10.997-41.795l-27.152 26.07V0z'},
      {d: 'M316.937 158.125h42.816l-46.4 141.799h-45.044l-46.206-141.8h43.01l19.276 71.87c4.004 15.971 6.2 27.093 6.587 33.365.452-4.526 1.356-10.184 2.712-16.973 1.357-6.79 2.551-12.124 3.585-16.004l19.664-72.257z'},
      {d: 'M214.787772 299.923992L130.335614 299.923992 130.335614 158.12461 214.787772 158.12461 214.787772 188.87044 168.767184 188.87044 168.767184 211.178141 211.382443 211.178141 211.382443 241.923971 168.767184 241.923971 168.767184 268.693212 214.787772 268.693212z'},
      {d: 'M120.361 226.018c0 23.665-6.514 41.9-19.543 54.702-13.029 12.803-31.343 19.204-54.943 19.204H0v-141.8h49.075c22.76 0 40.33 5.82 52.713 17.459 12.382 11.639 18.573 28.45 18.573 50.435zm-37.25 1.357c0-12.996-2.57-22.63-7.71-28.903-5.141-6.272-12.949-9.408-23.423-9.408H40.824V268.5h8.535c11.639 0 20.173-3.378 25.605-10.135 5.43-6.757 8.147-17.087 8.147-30.989z'},
    ],
  },
})

Icon.register({
  schema: {
    width: 25,
    height: 23,
    d: 'M3.337 15.132c0-1.597-1.113-2.396-3.337-2.396v-2.46c1.129 0 1.967-.195 2.515-.585.548-.391.822-.986.822-1.784V3.902c0-1.34.453-2.324 1.36-2.955C5.606.316 6.967 0 8.782 0v2.344c-.954.043-1.646.242-2.076.599-.431.356-.646.886-.646 1.59v3.825c0 1.708-.958 2.73-2.873 3.065v.154c1.915.31 2.873 1.327 2.873 3.052v3.85c0 .705.213 1.237.64 1.598.426.36 1.12.55 2.082.566V23c-1.932-.017-3.322-.354-4.171-1.01-.849-.658-1.273-1.72-1.273-3.188v-3.67zm18.502 3.953c0 1.34-.416 2.322-1.248 2.95-.832.626-2.164.948-3.995.965v-2.357c.794-.008 1.413-.174 1.856-.495.443-.322.665-.878.665-1.668v-3.374c0-1.039.222-1.842.665-2.408.443-.567 1.179-.94 2.207-1.12v-.155c-1.915-.335-2.872-1.357-2.872-3.065V4.533c0-.704-.19-1.234-.57-1.59-.381-.357-1.032-.556-1.951-.6V0c1.864 0 3.205.328 4.02.985.815.657 1.223 1.732 1.223 3.226v3.696c0 .859.265 1.468.796 1.829.532.36 1.32.54 2.365.54v2.46c-1.029 0-1.813.183-2.352.548-.54.364-.81.98-.81 1.848v3.953z',
  },
})

Vue.component('icon', Icon)
