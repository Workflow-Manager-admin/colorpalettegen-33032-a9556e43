#!/bin/bash
cd /home/kavia/workspace/code-generation/colorpalettegen-33032-a9556e43/palette_frontend_workspace/palette_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

