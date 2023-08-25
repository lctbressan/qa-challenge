# Use a imagem base do Maven
FROM maven:3.8.4-openjdk-11-slim

# Instale as dependências necessárias
RUN apt-get update -y && \
    apt-get install -y wget unzip

# Instale o Chrome WebDriver
RUN wget -O /tmp/chromedriver.zip https://chromedriver.storage.googleapis.com/LATEST_RELEASE_92 && \
    unzip /tmp/chromedriver.zip -d /usr/local/bin && \
    chmod +x /usr/local/bin/chromedriver

# Instale o Google Chrome
RUN wget -O /tmp/google-chrome.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    apt install -y /tmp/google-chrome.deb

# Copie o código do projeto para o contêiner
WORKDIR /app
COPY pom.xml .
COPY src/ ./src/

# Build do projeto
RUN mvn clean install

# Comando para rodar o Selenium
CMD ["mvn", "test"]
