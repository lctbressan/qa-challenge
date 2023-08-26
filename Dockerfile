# Use a imagem base do Maven
FROM ubuntu:latest

# Instale as dependências necessárias
RUN apt-get update -y && apt-get upgrade -y && \
    apt-get install -y curl wget unzip openjdk-11-jdk gnupg


# Adiciona a chave do repositório do Google Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/google-chrome-archive-keyring.gpg

# Configura o repositório do Google Chrome
RUN echo "deb [arch=amd64 signed-by=/usr/share/keyrings/google-chrome-archive-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list

# Instala o Google Chrome
RUN apt-get update -y && apt-get install -y google-chrome-stable

# Instala o ChromeDriver
RUN CHROMEDRIVER_VERSION=$(curl -sS chromedriver.storage.googleapis.com/LATEST_RELEASE) && \
    wget -q -O /tmp/chromedriver.zip http://chromedriver.storage.googleapis.com/$CHROMEDRIVER_VERSION/chromedriver_linux64.zip && \
    unzip -q /tmp/chromedriver.zip -d /usr/local/bin && \
    rm /tmp/chromedriver.zip && \
    chmod +x /usr/local/bin/chromedriver


# Instala o Maven
RUN apt-get install -y maven

# Instala o Yarn
RUN apt-get install -y npm && npm install -g yarn

# Copie o código do projeto para o contêiner
WORKDIR /app
COPY pom.xml .
COPY package.json .
COPY src/ ./src/
COPY output/ ./output/


# Configura o Chrome para funcionar em modo sem cabeça (headless)
ENV CHROME_BIN=/usr/bin/google-chrome
ENV CHROME_PATH=/usr/lib/chromium-browser/chromium-browser

# Define as variáveis de ambiente do Maven
ENV MAVEN_OPTS=-Xmx512m -XX:MaxPermSize=128m

# Build do projeto
RUN mvn clean install

# Inicia o aplicativo
RUN export NODE_OPTIONS=--openssl-legacy-provider
#RUN  yarn start

# Comando para rodar o Selenium
RUN mvn clean test -Dcucumber.options="--tags @e2e"
 
