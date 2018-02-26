FROM ruby:2.3

RUN apt-get update -qq

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY Gemfile /usr/src/app/Gemfile
COPY Gemfile.lock /usr/src/app/Gemfile.lock

RUN bundle install

ADD . /usr/src/app/

EXPOSE 3000

CMD ["rails", "s", "-b", "0.0.0.0"]
