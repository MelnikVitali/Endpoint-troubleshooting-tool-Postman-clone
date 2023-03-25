FROM qmcgaw/reactdevcontainer:debian
RUN apt-get update && apt-get install -y \
      curl \
      npm \
      nodejs \
      git;
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
RUN cp -f ~/.nvm/nvm.sh ~/.nvm/nvm-tmp.sh; \
    echo "nvm install 18.15.0; nvm alias default 18.15.0" >> ~/.nvm/nvm-tmp.sh; \
    sh ~/.nvm/nvm-tmp.sh; \
    rm ~/.nvm/nvm-tmp.sh;
RUN npm i yarn -g