#!/bin/bash

head -c 200 /dev/urandom | tr -dc a-z0-9 | head -c 16
