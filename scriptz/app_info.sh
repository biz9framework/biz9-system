# Copyright 2023 Certified CoderZ
# Author: certifiedcoderz@gmail.com (Certified CoderZ)
# License GNU General Public License v3.0
# Description: BiZ9 Framework ScriptZ : App Info
source ./.biz9_config.sh
source ${SCRIPT_DIR}/global_app.sh
echo "#################"
echo "BiZ9 App Info"
echo "#################"
#MOBILE
if [ -n "${BIZ9_MOBILE_VERSION}" ]; then
    echo "Config-ID: ${CONFIG_ID}"
    echo "App Vendor: ${APP_VENDOR}"
fi
#SERVER_IP
if [ -n "${SERVER_IP}" ]; then
    echo "Server Ip: ${SERVER_IP}"
fi
#SERVER_DEPLOY_DIR
if [ -n "${SERVER_DIR}" ]; then
    echo "Server Deploy Dir: ${SERVER_DEPLOY_DIR}"
fi
#SSH_KEY
if [ -n "${SSH_KEY}" ]; then
    echo "SSH Key: ${SSH_KEY}"
fi
source ${SCRIPT_DIR}/view_git_footer.sh
source ${SCRIPT_DIR}/view_app_footer.sh
