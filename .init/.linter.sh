#!/bin/bash
cd /home/kavia/workspace/code-generation/dashboard-hub-3654-3663/dashboard_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

