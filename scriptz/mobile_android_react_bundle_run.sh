# Copyright 2023 Certified CoderZ
# Author: certifiedcoderz@gmail.com (Certified CoderZ)
# License GNU General Public License v3.0
# Description: BiZ9 Framework ScriptZ : Mobile Android React Bundle Run
source ./.biz9_config.sh
echo "#################"
echo "BiZ9 Mobile Android React Build Device Deploy"
echo "#################"
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res
react-native run-android
source ${SCRIPT_DIR}/view_app_footer.sh
