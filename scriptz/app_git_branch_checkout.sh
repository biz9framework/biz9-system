# Copyright 2023 Certified CoderZ
# Author: certifiedcoderz@gmail.com (Certified CoderZ)
# License GNU General Public License v3.0
# Description: BiZ9 Framework ScriptZ : App Git Branch Checkout
source ./.biz9_config.sh
source ${SCRIPT_DIR}/global_app.sh
echo "#################"
echo "BiZ9 App Git Branch Checkout"
echo "#################"
if [ ! "${GIT_BRANCH}" ]; then
   GIT_BRANCH=${BIZ9_GIT_BRANCH}
fi
git switch -c ${GIT_BRANCH} ${BIZ9_GIT_BRANCH}
echo "----------------------------------"
echo "GIT Branch Checkout: ${GIT_BRANCH} ${BIZ9_GIT_BRANCH}"
source ${SCRIPT_DIR}/view_app_footer.sh
source ${SCRIPT_DIR}/view_app_footer.sh
