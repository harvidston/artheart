![artheart-git-logo](https://github.com/user-attachments/assets/3ae48fa5-4e15-450e-8966-1e683b389347)

|![catalog](https://github.com/user-attachments/assets/405b77ea-92eb-49d3-975c-e0d702877ee8)|![2](https://github.com/user-attachments/assets/72d8874c-9c42-4d29-bfa3-d828b907f778)|
|:--:|:--:|
|![3](https://github.com/user-attachments/assets/b1eec9ba-d3a3-4b5e-b8fd-3692201148c2)|![4](https://github.com/user-attachments/assets/6ce6420c-1dd0-4ced-8700-85595c81e32d)|
|![5](https://github.com/user-attachments/assets/9cfc0695-4402-469a-a150-d19fdbc54d9b)|![6](https://github.com/user-attachments/assets/615b9c36-63f0-4735-afeb-02f67662e2ca)|

## Description
**ArtHeart** — a unique blend of social networking and e-commerce, all in one creative web platform. This project is a full-stack web application for browsing, publishing, and purchasing products, with built-in user profiles, social interaction, and e-commerce functionality.

Project includes the following key features:
- Category-based browsing.
View publications filtered by specific creative categories.
- Publication management.
Users can create, edit, and delete their own creative works.
- User authentication and registration.
  Secure sign-up and login functionality for managing access and user sessions.
- Social interaction tools.
Users can leave comments and likes on publications to engage with the creative community.
- Wishlist and order processing.
Ability to create a wishlist of products and place an order.
- User subscriptions.
Option to follow favorite user profiles for updates of their latest publications.
- Publication detail view.
Access a dedicated page with full information about a selected publication.

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
Follow the steps below to get started with this projects development environment.
1. Clone this repository
```
git clone https://github.com/harvidston/artheart
```
2. Navigate into backend, create and activate python virtual environment 
```
cd backend
python3 -m venv venv
source venv/bin/activate
```
3. Install python dependencies
```
pip install -r requirements.txt
```
4. Create `artheart/.env` file with dev variables and values:
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
5. Start Django development server with the environment variable `DJANGO_ENV`
```
DJANGO_ENV=dev python manage.py runserver
```
6. Navigate into frontend and install dependencies from `package.json`
```
cd frontend
npm install
```
7. Start React project
```
npm start
```
You're ready to develop!
## API-Documentation
Interactive API documentation is automatically generated using [drf-spectacular](https://github.com/tfranzel/drf-spectacular).

- Swagger UI: [http://localhost:8000/api/docs/swagger/](http://localhost:8000/api/docs/swagger/)
- Redoc: [http://localhost:8000/api/docs/redoc/](http://localhost:8000/api/docs/redoc/)
- OpenAPI JSON: [http://localhost:8000/api/schema/](http://localhost:8000/api/schema/)

![swaggerUI](https://github.com/user-attachments/assets/65e65d67-af41-4d46-a658-5d6b9b32dd5c)
