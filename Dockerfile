FROM python:alpine
ENV PYTHONUNBUFFERED 1
RUN mkdir /src
WORKDIR /src
COPY . /src/
EXPOSE 5000
RUN pip install -r requirements.txt
ENTRYPOINT ["python", "/src/app.py"]