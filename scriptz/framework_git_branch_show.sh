# Copyright 2023 Certified CoderZ
# Author: certifiedcoderz@gmail.com (Certified CoderZ)
# License GNU General Public License v3.0
# Description: BiZ9 Framework ScriptZ : BiZ9 Framework Git Branch Checkout
echo "#################"
echo "BiZ9 Framework GitHub Branch Checkout"
echo "#################"
#prod-start
echo "Enter BiZ9 Framework product: [change-request, cms, core, help, mobile, scriptz, server, service, test, website]"
read app_type
echo "Enter release: [unstable, testing, stable]"
read release_dir
#prod-end
##test-start##
: '
app_type="website"
release_dir='stable'
commit_notes="Framework Update $(date +%F@%H:%M)"
'
##test-end##
#cms
if [ "${app_type}" = "cms" ]; then
    G_PROJECT_DIR=${BIZ9_HOME}/${BIZ9_CMS_TITLE,,}/src/${release_dir}
    cd ${G_PROJECT_DIR}
  fi
#core
if [ "${app_type}" = "core" ]; then
    G_PROJECT_DIR=${BIZ9_HOME}/${BIZ9_CORE_TITLE,,}/src/${release_dir}
    cd ${G_PROJECT_DIR}
fi
#help
if [ "${app_type}" = "help" ]; then
    G_PROJECT_DIR=${BIZ9_HOME}/${BIZ9_HELP_TITLE,,}/src/${release_dir}
    cd ${G_PROJECT_DIR}
fi
#change-request
if [ "${app_type}" = "change-request" ]; then
    G_PROJECT_DIR=${BIZ9_HOME}/${BIZ9_CHANGE_REQUEST_TITLE,,}/src/${release_dir}
    cd ${G_PROJECT_DIR}
fi
#mobile
if [ "${app_type}" = "mobile" ]; then
    G_PROJECT_DIR=${BIZ9_HOME}/${BIZ9_MOBILE_TITLE,,}/src/${release_dir}
    cd ${G_PROJECT_DIR}
fi
#scriptz
if [ "${app_type}" = "scriptz" ]; then
    G_PROJECT_DIR=${BIZ9_HOME}/${BIZ9_SCRIPTZ_TITLE,,}/src/${release_dir}
    cd ${G_PROJECT_DIR}
fi
#service
if [ "${app_type}" = "service" ]; then
    G_PROJECT_DIR=${BIZ9_HOME}/${BIZ9_SERVICE_TITLE,,}/src/${ release_dir}
    cd ${G_PROJECT_DIR}
fi
#test
if [ "${app_type}" = "test" ]; then
    G_PROJECT_DIR=${BIZ9_HOME}/${BIZ9_TEST_TITLE,,}/src/${release_dir}
    cd ${G_PROJECT_DIR}
fi
#website
if [ "${app_type}" = "website" ]; then
    G_PROJECT_DIR=${BIZ9_HOME}/${BIZ9_WEBSITE_TITLE,,}/src/${release_dir}
    cd ${G_PROJECT_DIR}
fi
#server
if [ "${app_type}" = "server" ]; then
    G_PROJECT_DIR=${BIZ9_HOME}/${BIZ9_SERVER_TITLE,,}/src/${release_dir}
    cd ${G_PROJECT_DIR}
fi
source .biz9_config.sh
if [ ! ${GIT_BRANCH} ]; then
   GIT_BRANCH=${BIZ9_GIT_BRANCH}
fi
git branch -v -a
echo "----------------------------------"
echo "Framework Product: ${APP_TITLE}"
echo "Framework Version: ${BIZ9_VERSION_NEW}"
echo "Framework Release: ${release_dir}"
echo "Framework GIT Branch: ${GIT_BRANCH}"
echo "Framework GIT Repo: ${GIT_REPO}"
echo "Commit Notes: ${commit_notes}"
echo "Done!"
echo "----------------------------------"
exit 1
