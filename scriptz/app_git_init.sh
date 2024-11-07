# Copyright 2023 Certified CoderZ
# Author: certifiedcoderz@gmail.com (Certified CoderZ)
# License GNU General Public License v3.0
# Description: BiZ9 Framework ScriptZ : App Git Init
source ./.biz9_config.sh
source ${SCRIPT_DIR}/global_app.sh
echo "#################"
echo "BiZ9 App Git Init"
echo "#################"
git init
git checkout -b ${BIZ9_GIT_BRANCH}
source ${SCRIPT_DIR}/view_git_footer.sh
source ${SCRIPT_DIR}/view_app_footer.sh
