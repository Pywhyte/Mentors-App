FROM python:3.8-slim

WORKDIR /mentors-back

# Install Poetry
RUN pip install poetry
RUN poetry config virtualenvs.create false

# Copy using poetry.lock in case it doesn't exist yet
COPY pyproject.toml poetry.lock ./
RUN poetry install --no-root --no-dev

CMD python manage.py makemigrations && \
    python manage.py migrate && \
    python manage.py createsuperuser --noinput \
    --username $DJANGO_SUPERUSER_USERNAME \
    --email $DJANGO_SUPERUSER_EMAIL | \
    gunicorn mentors_site.wsgi:application --bind 0.0.0.0:8000