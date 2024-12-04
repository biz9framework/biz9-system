# Copyright 2023 Certified CoderZ
# Author: certifiedcoderz@gmail.com (Certified CoderZ)
# License GNU General Public License v3.0
# Description: BiZ9 Framework ScriptZ : Mobile Android React Build Device Deploy
# source ./.biz9_config.sh
echo '############';
echo "BiZ9 Framework Mobile React Build"
echo "#################"

cd android && ./gradlew assembledebug && cd ../

echo '############';
echo 'END';
echo "$(date)"
echo '############';

