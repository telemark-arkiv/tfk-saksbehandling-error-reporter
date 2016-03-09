# tfk-saksbehandling-error-reporter
Errorreporting for tfk

Move files to GitHub and submits issue

## Docker
Build

```sh
$ docker build -t tfk-saksbehandling-error-reporter .
```

### Usage
```sh
$ docker run --env-file=docker.env --volume=/test/data/jobs:/src/test/data/jobs --rm tfk-saksbehandling-error-reporter
```
