#!/bin/bash

for i in {1..5}; do
  mkdir -p "TP$i/EntregaFinal"
  touch "TP$i/EntregaFinal/.gitkeep"
  touch "TP$i/EntregaFinal/index.html"
done
