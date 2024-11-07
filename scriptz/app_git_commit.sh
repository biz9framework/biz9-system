# Copyright 2023 Certified CoderZ
# Author: certifiedcoderz@gmail.com (Certified CoderZ)
# License GNU General Public License v3.0
# Description: BiZ9 Framework ScriptZ : App Git Commit
source ./.biz9_config.sh
source ${SCRIPT_DIR}/global_app.sh
echo "#################"
echo "BiZ9 App Git Commit"
echo "#################"
echo 'Enter notes:'
read commit_notes
sed -i "s/APP_VERSION=.*/APP_VERSION='${APP_VERSION_NEW}'/" .biz9_config.sh
#cms
if [ "${APP_TITLE}" = "${BIZ9_CMS_TITLE}" ]; then
    sed -i "s/APP_VERSION=.*/APP_VERSION='${APP_VERSION_NEW}'/" .biz9_config.sh
    sed -i "s/APP_VERSION=.*/APP_VERSION='${APP_VERSION_NEW}'/" app.js
    sed -i "s/BIZ9_CMS_VERSION=.*/BIZ9_CMS_VERSION='${FRAMEWORK_VERSION_NEW}'/" .biz9_config.sh
    sed -i "s/BIZ9_CMS_VERSION=.*/BIZ9_CMS_VERSION='${FRAMEWORK_VERSION_NEW}'/" app.js
fi
#website
if [ "${APP_TITLE}" = "${BIZ9_WEBSITE_TITLE}" ]; then
    sed -i "s/APP_VERSION=.*/APP_VERSION='${APP_VERSION_NEW}'/" .biz9_config.sh
    sed -i "s/APP_VERSION=.*/APP_VERSION='${APP_VERSION_NEW}'/" app.js
    sed -i "s/BIZ9_WEBSITE_VERSION=.*/BIZ9_WEBSITE_VERSION='${FRAMEWORK_VERSION_NEW}'/" .biz9_config.sh
    sed -i "s/BIZ9_WEBSITE_VERSION=.*/BIZ9_WEBSITE_VERSION='${FRAMEWORK_VERSION_NEW}'/" app.js
fi
#core
if [ "${APP_TITLE}" = "${BIZ9_CORE_TITLE}" ]; then
    sed -i "s/BIZ9_CORE_VERSION=.*/BIZ9_CORE_VERSION='${FRAMEWORK_VERSION_NEW}'/" .biz9_config.sh
fi
#docz
if [ "${APP_TITLE}" = "${BIZ9_DOCZ_TITLE}" ]; then
    sed -i "s/APP_VERSION=.*/APP_VERSION='${APP_VERSION_NEW}'/" .biz9_config.sh
    sed -i "s/APP_VERSION=.*/APP_VERSION='${APP_VERSION_NEW}'/" app.js
    sed -i "s/BIZ9_DOCZ_VERSION=.*/BIZ9_DOCZ_VERSION='${FRAMEWORK_VERSION_NEW}'/" .biz9_config.sh
    sed -i "s/BIZ9_DOCZ_VERSION=.*/BIZ9_DOCZ_VERSION='${FRAMEWORK_VERSION_NEW}'/" app.js
fi
#mobile
if [ "${APP_TITLE}" = "${BIZ9_MOBILE_TITLE}" ]; then
    sed -i "s/APP_VERSION=.*/APP_VERSION='${APP_VERSION_NEW}'/" .biz9_config.sh
    sed -i "s/APP_VERSION=.*/APP_VERSION='${APP_VERSION_NEW}'/" app.js
    sed -i "s/BIZ9_MOBILE_VERSION=.*/BIZ9_MOBILE_VERSION='${FRAMEWORK_VERSION_NEW}'/" .biz9_config.sh
    sed -i "s/BIZ9_MOBILE_VERSION=.*/BIZ9_MOBILE_VERSION='${FRAMEWORK_VERSION_NEW}'/" app.js
fi
#SCRIPTZ
if [ "${APP_TITLE}" = "${BIZ9_SCRIPTZ_TITLE}" ]; then
    sed -i "s/APP_VERSION=.*/APP_VERSION='${APP_VERSION_NEW}'/" .biz9_config.sh
    sed -i "s/BIZ9_SCRIPTZ_VERSION=.*/BIZ9_SCRIPTZ_VERSION='${FRAMEWORK_VERSION_NEW}'/" .biz9_config.sh
fi
#service
if [ "${APP_TITLE}" = "${BIZ9_SERVICE_TITLE}" ]; then
    sed -i "s/APP_VERSION=.*/APP_VERSION='${APP_VERSION_NEW}'/" .biz9_config.sh
    sed -i "s/APP_VERSION=.*/APP_VERSION='${APP_VERSION_NEW}'/" app.js
    sed -i "s/BIZ9_SERVICE_VERSION=.*/BIZ9_SERVICE_VERSION='${FRAMEWORK_VERSION_NEW}'/" .biz9_config.sh
    sed -i "s/BIZ9_SERVICE_VERSION=.*/BIZ9_SERVICE_VERSION='${FRAMEWORK_VERSION_NEW}'/" app.js
fi
#test
if [ "${APP_TITLE}" = "${BIZ9_TEST_TITLE}" ]; then
    sed -i "s/BIZ9_TEST_VERSION=.*/BIZ9_TEST_VERSION='${FRAMEWORK_VERSION_NEW}'/" .biz9_config.sh
fi
git add -A .
git commit -m  "${commit_notes}"
echo "----------------------------------"
echo "Commit Notes: ${commit_notes}"
source ${SCRIPT_DIR}/view_git_footer.sh
source ${SCRIPT_DIR}/view_app_footer.sh
