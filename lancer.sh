#!/bin/sh
cd "$(dirname "$0")"
command -v node >/dev/null || { echo "Installez Node.js LTS : https://nodejs.org"; exit 1; }
[ -d node_modules ] || npm install || exit 1
echo "Le site sera sur http://localhost:3000"
npm run dev
