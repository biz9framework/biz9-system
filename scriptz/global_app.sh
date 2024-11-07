# Copyright 2023 Certified CoderZ
# Author: certifiedcoderz@gmail.com (Certified CoderZ)
# License GNU General Public License v3.0
# Description: BiZ9 Framework ScriptZ : Global App
#CMS
if [ -n "${BIZ9_CMS_VERSION}" ]; then
    FRAMEWORK_VERSION=${BIZ9_CMS_VERSION};
    FRAMEWORK_TITLE=${BIZ9_CMS_TITLE};
fi
#CORE
if [ -n "${BIZ9_CORE_VERSION}" ]; then
    FRAMEWORK_VERSION=${BIZ9_CORE_VERSION};
    FRAMEWORK_TITLE=${BIZ9_CORE_TITLE};
fi
#DOCZ
if [ -n "${BIZ9_DOCZ_VERSION}" ]; then
    FRAMEWORK_VERSION=${BIZ9_DOCZ_VERSION};
    FRAMEWORK_TITLE=${BIZ9_DOCZ_VERSION};
fi
#MOBILE
if [ -n "${BIZ9_MOBILE_VERSION}" ]; then
    FRAMEWORK_VERSION=${BIZ9_MOBILE_VERSION};
    FRAMEWORK_TITLE=${BIZ9_MOBILE_TITLE};
fi
#SCRIPTZ
if [ -n "${BIZ9_SCRIPTZ_VERSION}" ]; then
    FRAMEWORK_VERSION=${BIZ9_SCRIPTZ_VERSION};
    FRAMEWORK_TITLE=${BIZ9_SCRIPTZ_TITLE};
fi
#SERVICE
if [ -n "${BIZ9_SERVICE_VERSION}" ]; then
    FRAMEWORK_VERSION=${BIZ9_SERVICE_VERSION};
    FRAMEWORK_TITLE=${BIZ9_SERVICE_TITLE};
fi
#TEST
if [ -n "${BIZ9_TEST_VERSION}" ]; then
    FRAMEWORK_VERSION=${BIZ9_TEST_VERSION};
    FRAMEWORK_TITLE=${BIZ9_TEST_TITLE};
fi
#WEBSITE
if [ -n "${BIZ9_WEBSITE_VERSION}" ]; then
    FRAMEWORK_VERSION=${BIZ9_WEBSITE_VERSION};
    FRAMEWORK_TITLE=${BIZ9_WEBSITE_TITLE};
fi

INCREMENT_VERSION ()
{
    declare -a part=( ${1//\./ } )
        declare    new
        declare -i carry=1

        for (( CNTR=${#part[@]}-1; CNTR>=0; CNTR-=1 )); do
            len=${#part[CNTR]}
    new=$((part[CNTR]+carry))
        [ ${#new} -gt $len ] && carry=1 || carry=0
        [ $CNTR -gt 0 ] && part[CNTR]=${new: -len} || part[CNTR]=${new}
    done
        new="${part[*]}"
        echo -e "${new// /.}"
}

FRAMEWORK_VERSION_NEW=$(INCREMENT_VERSION $FRAMEWORK_VERSION);
APP_VERSION_NEW=$(INCREMENT_VERSION ${APP_VERSION});

#GIT
if [ ! ${GIT_BRANCH} ]; then
   GIT_BRANCH=${BIZ9_GIT_BRANCH}
fi
