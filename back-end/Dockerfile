FROM python:3.9-slim
WORKDIR /mentors-back
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
# CMD python3 mentors_site/manage.py runserver 0.0.0.0:80
# RUN python3 manage.py collectstatic
CMD gunicorn mentors_site.wsgi:application --bind 0.0.0.0:80