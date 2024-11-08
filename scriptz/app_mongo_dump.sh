# Copyright 2023 Certified CoderZ
# Author: certifiedcoderz@gmail.com (Certified CoderZ)
# License GNU General Public License v3.0
# Description: BiZ9 Framework ScriptZ : App Mongo Dump
source ./.biz9_config.sh
source ${SCRIPT_DIR}/global_app.sh
echo "#################"
echo "BiZ9 App Mongo Dump"
echo "#################"
echo 'Enter Mongo Port:'
read mongo_port
DB_DATE=`date +%m-%d-%Y`
echo ${DB_DATE}
DB_DIR=db/backup/${DB_DATE}
mkdir -p ${DB_DIR}
cd ${DB_DIR}
mongodump --db ${APP_TITLE_ID} --port ${mongo_port}
cd ../../../
source ${SCRIPT_DIR}/view_app_footer.sh
