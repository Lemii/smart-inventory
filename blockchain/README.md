# Smart Inventory Blockchain

## Prerequisites

Install toolchain components

```
sudo apt install -y libtool automake autoconf curl python-minimal build-essential git
```

Install PostgreSQL

```
sudo apt-get purge -y postgres\*
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ \$(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
sudo apt install wget ca-certificates
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt update
sudo apt install postgresql-10 -y
pg_lsclusters
sudo pg_dropcluster --stop 10 main
sudo pg_createcluster --locale en_US.UTF-8 --start 10 main
sudo -u postgres -i createuser --createdb si
sudo -u postgres -i createdb si_dev --owner si
sudo -u postgres psql -d si_dev -c "alter user si with password 'si_pass';"
```

Add (and switch to) user

```
sudo adduser smartinventory
sudo -u smartinventory -i
```

Install Node.js

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

```

```
nvm install 12.15.0
```

Install PM2 and the Lisk SDK

```
npm install pm2 -g

npm install lisk-sdk
```

## Installation

Install all dependencies

```
npm i
```

## Running the blockchain

Start the blockchain

```
npm start
```

Run the blockchain as a background process

```
pm2 start npm  --name smart-inventory -- start
```

View logs with

```
pm2 log
```

## License

[GPLv3](../LICENSE) © [lemii](https://github.com/lemii/)
