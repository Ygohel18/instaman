FROM python:alpine
ENV PYTHONUNBUFFERED 1
RUN mkdir /app
WORKDIR /app
COPY * /app/
EXPOSE 5000
RUN pip install -r requirements.txt
ENTRYPOINT ["python", "/app/src/app.py"]