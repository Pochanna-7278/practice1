FROM python:3.9
WORKDIR /app
COPY app.py .
RUN pip install --no-cache-dir flask
EXPOSE 5000
CMD ["python","app.py"]
#sudo docker build -t myimage .
sudo docker run -p 5000:5000 myimage
