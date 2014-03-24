# CLI Emulator

I tiny web app to help emulate a CLI in a browser for quick usability testing.

## Why?

When working on developer-facing tools a CLI-based experience is often a useful
part of the workflow. While doing usability testing of such tools I accidentally
discovered that it's a really useful way to expose the mental models people use
to think about your product or service. The blank state and lack of directed focus
(compared to a web app) means people will start trying commands that map to
the way they're thinking rather than trying to adjust their thinking to what
the interface presents. It's not always perfect but it's always an interesting
alternative perspective.

This tool gives you a way to explore that without actually implementing any code
(which is the best kind of code!). It's just two chat rooms styled to look like
a terminal, one for a user to enter their commands into and one for you to paste
what the responses should look like. It allows you to quickly generate command
output ad-hoc and to accommodate any arbitrary variations a user might want
to experiment with.

## Installation

You'll need to clone the repo, create a Heroku app, push the code up to Heroku:

```bash
$ git clone https://github.com/glenngillen/cli-emulator.git
$ cd cli-emulator
$ heroku create
$ git push heroku master
```

## Usage

There are two Socket.io rooms created, one for a user to input commands into and one
for an operator to enter the responses into. As the person running the testing get
yourself into the operator/STDOUT room by visiting `http://hostname/stdout.html`. Once
you're in there and connected have your user connect to `http://hostname`.

You can see an example of this in action at [http://cli-emulator.herokuapp.com/stdout.html](http://cli-emulator.herokuapp.com/stdout.html)
and [http://cli-emulator.herokuapp.com/](http://cli-emulator.herokuapp.com) respectively.

## Contributing

If you think you've found a bug or have a feature you'd like to contribute here create an issue on GitHub to let me know what you'd like to see.

## License

cli-emulator is [MIT licensed](/LICENSE)

[![Analytics](https://ga-beacon.appspot.com/UA-46840117-1/cli-emulator/readme?pixel)](https://github.com/igrigorik/ga-beacon)
