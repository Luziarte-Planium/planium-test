FROM php:7.4.3-apache


EXPOSE 80

# Instal PHP mysql extension
RUN docker-php-ext-install pdo pdo_mysql
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

# Install composer
RUN php -r "readfile('http://getcomposer.org/installer');" | php -- --install-dir=/usr/bin/ --filename=composer
RUN apt update
RUN apt install bash
RUN alias composer='php /usr/bin/composer'
RUN apt install git -y

#Copy files
COPY ./platinum_test_back/composer.json .
COPY ./platinum_test_back/composer.lock .
# Add app
COPY ./platinum_test_back .

# Install composer dependencies
RUN composer install


#Start app
CMD ["php", "-S", "localhost:8000", "-t", "public"]