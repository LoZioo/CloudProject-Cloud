# CloudProject-Cloud
Cloud project Cloud section repository.

## Prepare your envroiment
1. Install Ansible as a python dependency:
	```
	pip install -r requirements.txt
	```
2. Then:
	```
	source add-scripts-to-path.sh
	```
3. Edit `config.sh` and configure it to match your infrastructure.
4. Generate your Ansible's `hosts.ini` by running `compile-ansible-hosts.sh`.
5. Open a new shell and run the command `garr-0` to create the needed ssh tunnel (just leave the shell in the background).
6. Run every Ansible playbook under [playbooks](playbooks) by running `playbook-run-all.sh`.

## Repo structure
- [scripts](scripts): remote connection and tunneling ssh and sftp bash scripts.
- [playbooks](playbooks): Ansible provision playbooks.
- [add-scripts-to-path.sh](add-scripts-to-path.sh): add every script under [scripts](scripts) to `$PATH`.
- [config.sh](config.sh): configure it to match your infrastructure.
- [compile-ansible-hosts.sh](compile-ansible-hosts.sh): generate the `hosts.ini` file.
- [playbook-run.sh](playbook-run.sh): run the specified Ansible playbook inside the [playbooks](playbooks) folder.
- [playbook-run-all.sh](playbook-run-all.sh): automatically run every Ansible playbook inside the [playbooks](playbooks) folder.
- [requirements.txt](requirements.txt): Ansible python dependencies.
