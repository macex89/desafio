import pandas as pd

from flask import Flask

import datetime

import pymysql

from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sqlalchemy import create_engine


app = Flask(__name__)


def create_soup(x):
    return x['tematica'] + ' ' + x['modalidad']+ ' ' + x['hora_empezar']


@app.route("/<interger:id>", methods=['GET'])


def recomend(id):
    username = "redvoluntario"
    password = "FwDg5B47GQk5Ti9"
    host = "desafiodb.mysql.database.azure.com" 
    port = "3306"
    database = 'desafio'
    server = "desafiodb.database.windows.net"
    driver = '{ODBC Driver 18 for SQL Server}'

    '''
    pymysql.cursors.DictCursor para que los resultados que devuelva sean diccionarios,
    por defecto devuelve tuplas. Asi podemos acceder por clave a las columnas.
    '''

    db = pymysql.connect(host = host,
                     user = username,
                     password = password,                   
                     cursorclass = pymysql.cursors.DictCursor,
                     ssl_ca = r'~/DigiCertGlobalRootCA.crt.pem'
                     #debéis bajaros el certificado anterior y poner la ruta donde lo habéis guardado
)

# El objeto cursor es el que ejecutará las queries y devolverá los resultados

    cursor = db.cursor()
    cursor.connection.commit()
    use_db = ''' USE desafio'''
    cursor.execute(use_db)

    '''
Este es el engine version de la BD de AWS
fechtone trae la primera linea de la consulta
El execute() devuelve el numero de filas a las que ha afectado la query,
en este caso, devuelve una unica fila.

Execute se guarda en la conexion pero hasta que no hacemos commit
no se ejecutan las queries
de insert de datos y esas cosas...
'''

    engine = create_engine("mysql+mysqlconnector://{user}:{pw}@{host}/{db}".format(user = username, pw = password, host = host, db = 'desafio'))

    
    # leemos los datos para comprobar que se han ingestado correctamente
    sql = '''SELECT * FROM eventos'''
    cursor.execute(sql)
    mi_tabla = cursor.fetchall()

    sql = '''SELECT * FROM valoraciones'''
    cursor.execute(sql)
    valoraciones = cursor.fetchall()


    dataset = pd.DataFrame(mi_tabla)
    eventos_tabla = pd.DataFrame(mi_tabla)
    df = pd.DataFrame(valoraciones)
    Listado=dataset.index

           
    dataset["soup"] = dataset.apply(create_soup, axis=1)


    count_vectorizer = CountVectorizer()
    count_matrix = count_vectorizer.fit_transform(dataset["soup"])

    cosine_sim2 = cosine_similarity(count_matrix, count_matrix) 
    # abcd = pd.DataFrame(cosine_sim2)   

    dataset_df = dataset.reset_index()
    # indices = pd.Series(dataset_df.index, index=dataset_df['colectivo']) 

    # indices = pd.Series(dataset.index, index=dataset["colectivo"]).drop_duplicates()

    df2 = df[['id','fk_id_user','fk_id_actividad','valoracion']].pivot(index=['id','fk_id_user'], columns='fk_id_actividad', values='valoracion')
    df2 = df2.fillna(0)
    a = df2.groupby('fk_id_user').sum()
    vector_medias = (a.sum(axis=1)/a.astype(bool).sum(axis=1))
    for i in range (a.shape[0]):
        num = i
        for j in range (a.shape[1]):
            if (a.iloc[i,j] == 0): 
                continue
            else:
                value = a.iloc[i,j]
                resta = value - vector_medias[num+1]
                a.iloc[i,j] = resta

    
    

    id_usuario = id 
    RecomendacionFiltradoColaborativoItemItem = pd.DataFrame(data = a.iloc[id_usuario+1,:].dot(cosine_sim2), index = (Listado.values)+1, columns = ['Scores'])
    RecomendacionFiltradoColaborativoItemItem = RecomendacionFiltradoColaborativoItemItem.sort_values('Scores', ascending=False)

    output = pd.DataFrame(RecomendacionFiltradoColaborativoItemItem.index.values, columns = ['id'])

    to_join = eventos_tabla

    df3 = output.merge(to_join, on = 'id', how='left')

    mask = (pd.to_datetime(df3['fecha_fin']) > datetime.datetime.now())

    filtered_df = pd.DataFrame(df3.loc[mask])

    df_final = pd.DataFrame(filtered_df.head(10))
    js = df_final.to_json(orient = 'index')
    
    return js

recomend(id)

if __name__=='__main__':
    app.run(debug = True, port=2000)


