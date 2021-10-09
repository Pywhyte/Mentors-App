FROM python:3.9-slim
WORKDIR /mentors-back
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
CMD gunicorn mentors_site.wsgi:application --bind 0.0.0.0:80