db.getSiblingDB("unifi").createUser({user: "unifi", pwd: "unifi_pass", roles: [{role: "dbOwner", db: "unifi"}]});
db.getSiblingDB("unifi_stat").createUser({user: "unifi", pwd: "unifi_pass", roles: [{role: "dbOwner", db: "unifi_stat"}]});
