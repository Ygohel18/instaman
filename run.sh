#!/bin/bash
docker build -t instaman .
docker run -ti --rm -p 5000:5000 instaman
