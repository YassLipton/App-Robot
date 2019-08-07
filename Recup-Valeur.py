import time
import MySQLdb

db = MySQLdb.connect(/*Adresse serveur*/,/*Nom utilisateur*/,/*Mot de Passe utilisateur*/,/*Nom de la bdd*/)
cursor = db.cursor()
sql = "SELECT variable FROM robot"


def boucle():
    cursor.execute(sql)
    results = cursor.fetchone()
    db.commit()
    print results

nexttime = time.time()
while True:
    nexttime += 1
    sleeptime = nexttime - time.time()
    if sleeptime > 0:
        time.sleep(sleeptime)
        boucle()