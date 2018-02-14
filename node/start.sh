#!/usr/bin/env bash


cd main_server/http_test
node servidor_externo.js &
cd -

cd main_server/soap_test
node server.js &
cd -

cd main_server
node main_server.js config/ci.json