# Building the api
FROM python:3.7.16-alpine3.17
WORKDIR /opt/api
COPY requirements.txt ./
RUN pip3 install -r requirements.txt
COPY . .
EXPOSE 2000
ENV FLASK_APP=app_project_v2.py
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
