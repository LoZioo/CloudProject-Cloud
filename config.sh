#!/bin/bash

export SECRET_KEY="~/.ssh/garr-ds-rsa-0.pem"
export USER="ubuntu"

# ds-net-0

# SSH proxy.
export SERVER_0_ADDRESS="90.147.185.7"
export SERVER_0_NET_ADDRESS="192.168.0.248"

export SERVER_1_LOCAL_ADDRESS="127.0.0.2"
export SERVER_1_REMOTE_ADDRESS="192.168.0.100"

export SERVER_2_LOCAL_ADDRESS="127.0.0.3"
export SERVER_2_REMOTE_ADDRESS="192.168.0.221"

# ds-net-1

# SSH proxy.
export SERVER_BC_ADDRESS="90.147.185.8"

# Docker settings.
export BUILD_PLATFORMS="linux/amd64"
export DOCKERHUB_USER="lozioo"

# Kubernetes (see ./setup_kube/config.sh).
KHOSTS_NETWORK="192.168.0.0/24"

KHOSTS[m]=$SERVER_0_NET_ADDRESS
KHOSTS[w1]=$SERVER_1_REMOTE_ADDRESS
KHOSTS[w2]=$SERVER_2_REMOTE_ADDRESS

KUSER=$USER
