#!/bin/sh

BUILDNAME=GoogleReaderNotes.zip
BASEDIR=$(dirname $0)
cd $BASEDIR
zip -r $BUILDNAME . -x \*.git\* .DS_Store release.sh \*.zip \*~