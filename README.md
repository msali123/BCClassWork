# BCClassWork

# BACKUP

**!/usr/bin/env bash** 

### sudo bash  /srv/scripts/backup/backup.sh

**Setting up variables:**
```
date="$(date "+%Y-%m-%d-%H-%M")"
MAGENTO_ROOT="/var/www/html/magento"
BACKUP_PATH="${MAGENTO_ROOT}/var/backups"
```

### Enable maintenance mode
To enable the maintenance mode these following command are to be run.
```
echo "Enable maintenance mode..."
/usr/local/bin/n98-magerun2 sys:maintenance --on --skip-root-check --root-dir=${MAGENTO_ROOT}
echo ""
```

### Create database dump
We will be creating a dump database by using the following commands.
```
echo "Creating database dump ..."
/usr/local/bin/n98-magerun2 --skip-root-check --root-dir=${MAGENTO_ROOT} db:dump ${BACKUP_PATH}/db-backup-$date.sql
RETURN_VALUE="$?"

    if [ "${RETURN_VALUE}" -ne "0" ]; then
        echo "Creating database dump is failed";
        exit 1;
    else
        echo "Done"
        echo ""
    fi
```

### Create archive of webroot, excluding var
```
echo "Creating tar archive of webroot files excluding var to file ${BACKUP_PATH}/files-backup-$date.tar.gz ..."
cd $MAGENTO_ROOT && \
tar -cpzf ${BACKUP_PATH}/files-backup-$date.tar.gz --exclude=var/* .
RETURN_VALUE="$?"

    if [ "${RETURN_VALUE}" -ne "0" ]  && [ "${RETURN_VALUE}" -ne "1" ]; then
        echo "Creating tar archive of webroot files is failed";
        exit 1;
    else
        echo "Done"
        echo ""
    fi
```

### Disable maintenance mode
By running these below command's the maintenance mode will be **Disabled** :x:	
```
echo "Disable maintenance mode..."
/usr/local/bin/n98-magerun2 sys:maintenance --off --skip-root-check --root-dir=${MAGENTO_ROOT}
echo ""
```
