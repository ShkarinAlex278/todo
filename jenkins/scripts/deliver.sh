#!/usr/bin/env sh 

npm run build 

npm start & 
sleep 1 
echo $! > .pidfile 

echo 'Теперь...' 
echo 'Перейдите по адресу http://localhost:3000, чтобы увидеть приложение Node.js/React в действии.'