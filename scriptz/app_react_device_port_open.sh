# Copyright 2023 Certified CoderZ
# Author: certifiedcoderz@gmail.com (Certified CoderZ)
# License GNU General Public License v3.0
# Description: BiZ9 Framework ScriptZ : App React Device Port Open
source ./.biz9_config.sh
source ${SCRIPT_DIR}/global_app.sh
echo "#################"
echo "BiZ9 App React Device Port Open"
echo "#################"
echo "Enter Device Port"
read device_port
adb reverse tcp:$device_port tcp:$device_port
source ${SCRIPT_DIR}/view_app_footer.sh
