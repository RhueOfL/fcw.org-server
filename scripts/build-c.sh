#!/bin/bash
cd /vagrant/freeciv && ./prepare_freeciv.sh && cd freeciv && make install && cd ../../scripts && ./stop-freeciv-web.sh && ./start-freeciv-web.sh