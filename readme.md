use node 6.3.0
android/app/build.gradle to integrate vector icons

not able found host-only adapter in network settings of virtualbox
where is virtualbox
 1993  whereis virtualbox
 1994  virtualbox restart
 1995  openssl req -new -x509 -newkey rsa:2048 -keyout MOK.priv -outform DER -out MOK.der -nodes -days 36500 -subj "/CN=MOK Signing/"
 1996  sudo /usr/src/linux-headers-$(uname -r)/scripts/sign-file sha256 ./MOK.priv ./MOK.der $(modinfo -n vboxdrv)
 1997  sudo /usr/src/linux-headers-$(uname -r)/scripts/sign-file sha256 ./MOK.priv ./MOK.der $(modinfo -n vboxnetflt)
 1998  sudo /usr/src/linux-headers-$(uname -r)/scripts/sign-file sha256 ./MOK.priv ./MOK.der $(modinfo -n vboxnetadp)
 1999  sudo /usr/src/linux-headers-$(uname -r)/scripts/sign-file sha256 ./MOK.priv ./MOK.der $(modinfo -n vboxpci)
 2000  $ VBoxManage hostonlyif create
 2001  VBoxManage hostonlyif create
 2002  ip link set vboxnet0 up
 2003  sudo modprobe vboxnetadp
 2004  sudo modprobe vboxnetflt
 2005  virtualbox restart

adb devices
adb install filename.apk

https://facebook.github.io/react-native/docs/signed-apk-android.html


https://medium.com/bam-tech/generate-your-react-native-app-icons-in-a-single-command-line-145af2e329b2
npm install -g yo generator-rn-toolbox
yo rn-toolbox:assets --icon <path to your icon>
# For instance
yo rn-toolbox:assets --icon ../icon.png