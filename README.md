![artheart-git-logo](https://github.com/user-attachments/assets/3ae48fa5-4e15-450e-8966-1e683b389347)

|![catalog](https://github.com/user-attachments/assets/405b77ea-92eb-49d3-975c-e0d702877ee8)|![2](https://github.com/user-attachments/assets/72d8874c-9c42-4d29-bfa3-d828b907f778)|
|:--:|:--:|
|![3](https://github.com/user-attachments/assets/b1eec9ba-d3a3-4b5e-b8fd-3692201148c2)|![4](https://github.com/user-attachments/assets/6ce6420c-1dd0-4ced-8700-85595c81e32d)|
|![5](https://github.com/user-attachments/assets/9cfc0695-4402-469a-a150-d19fdbc54d9b)|![6](https://github.com/user-attachments/assets/615b9c36-63f0-4735-afeb-02f67662e2ca)|

## Description
## Technology Stack
- Django 
- Django REST Framework
- Simple JWT
- React JS
- Styled components
- Redux
- Axios
- PostgreSQL
- Docker
## Project Structure
```
artheart/
├── backend/
│   ├── config/
│   │   ├── settings/
│   │   │   ├── __init__.py
│   │   │   ├── base.py
│   │   │   ├── dev.py
│   │   │   └── prod.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── manage.py
│   └── requirements.txt
|   └── ...
├── frontend/
│   └── ...
├── .env
├── .env.prod
└── .gitignore
```
## Environment Configuration
[Python-decouple](https://pypi.org/project/python-decouple/) lib helps you to organize your settings so that you can change parameters without having to redeploy your app.

- `base.py` — base settings 
- `dev.py` — local development 
- `prod.py` — safe prod
- `.env` — file with secret local configuration values
```
SECRET_KEY=secret-dev-key
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost

DB_NAME=dbname
DB_USER=dbuser
DB_PASSWORD=dbpassword
DB_HOST=localhost
DB_PORT=5432
```
- `.env.prod` — similar to .env, but with production values
- `settings/__init__.py` — logic to select the necessary settings depending on the environment variable `DJANGO_ENV`

When starting the server, include the environment variable `DJANGO_ENV` with` dev` or `prod` values:
```
DJANGO_ENV=prod python manage.py runserver
```
## Installation
1. `git clone https://github.com/harvidston/artheart`
2. `cd backend` `python3 -m venv venv`
3. `source venv/bin/activate`
4. `pip install -r requirements.txt`
5. create `artheart/.env` file with dev variables and values:
```
SECRET_KEY=secret-dev-key
DEBUG=True
ALLOWED_HOSTS=127.0.0.1,localhost

DB_NAME=dbname
DB_USER=dbuser
DB_PASSWORD=dbpassword
DB_HOST=localhost
DB_PORT=5432
```
6. `DJANGO_ENV=dev python manage.py runserver`
7. `cd frontend` `npm install`
8. `npm start`


