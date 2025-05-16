@echo off
if exist node_modules (
  echo node_modules folder exists.
  code .
)
else (
  echo node_modules folder does not exist.
  npm i --legacy-peer-deps
  code .
)
