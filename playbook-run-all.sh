#!/bin/bash

cd playbooks
for playbook in $(ls *.yml)
do
	echo "Running $playbook..."
	ansible-playbook -i hosts.ini $playbook
done
