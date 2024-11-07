# Copyright 2023 Certified CoderZ
# Author: certifiedcoderz@gmail.com (Certified CoderZ)
# License GNU General Public License v3.0
# Description: BiZ9 Framework ScriptZ : App Git Branch Checkout
source ./.biz9_config.sh
echo "#################"
echo "BiZ9 App Framework App Git Branch Checkout"
echo "#################"
if [ ! ${GIT_BRANCH} ]; then
   GIT_BRANCH=${BIZ9_GIT_BRANCH}
fi
git branch -v -a
echo "GIT Branch: ${GIT_BRANCH}"
echo "GIT Repo: ${GIT_REPO}"
echo "----------------------------------"
source ./scriptz/view_app_footer.sh
