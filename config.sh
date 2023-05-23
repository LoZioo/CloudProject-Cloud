#!/bin/bash

export SECRET_KEY="~/.ssh/garr-ds-rsa-0.pem"
export USER="ubuntu"

# ds-net-0

# SSH proxy.
export SERVER_0_ADDRESS="90.147.185.7"

export SERVER_1_REMOTE_ADDRESS="192.168.0.100"
export SERVER_1_LOCAL_PORT="2222"

export SERVER_2_REMOTE_ADDRESS="192.168.0.221"
export SERVER_2_LOCAL_PORT="2223"

# ds-net-1

# SSH proxy.
export SERVER_BC_ADDRESS="90.147.185.8"
