# Copyright 2023 Certified CoderZ
# Author: certifiedcoderz@gmail.com (Certified CoderZ)
# License GNU General Public License v3.0
# Description: BiZ9 Framework ScriptZ : App Git Config
source ./.biz9_config.sh
echo "#################"
echo "BiZ9 App Git Config"
echo "#################"
echo 'Enter your developer name'
read config_name
echo 'Enter your developer email'
read config_email
git config --global user.email "$config_email"
git config --global user.name "$config_name"
git config --list
source ${SCRIPT_DIR}/view_git_footer.sh
source ${SCRIPT_DIR}/view_app_footer.sh
