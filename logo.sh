#!/usr/bin/env bash
cd "$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"
cd src/images
inkscape ./logo.svg --export-width=32 --export-filename="./logo.png"
inkscape ./logo.svg --export-width=512 --export-filename="./logo-512.png"
inkscape ./logo.svg --export-width=512 --export-filename="./logo-solid-512.png" -b "#000000" -y 1.0