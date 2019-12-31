# configuration

See documentation [here](doc/00-overview.md)

``` yaml
use-extension:
  "@autorest/modelerfour": "latest"


pipeline-model: v3
fakesdk123: true

pipeline:
    fakesdk:
        input: modelerfour
        scope: fakesdk123

    fakesdk/fakenamer:
        input: fakesdk
        output-artifact: source-file-fakesdk-namer

    fakesdk/emitter:
        input: fakesdk/fakenamer
        scope: scope-fakesdk

scope-fakesdk:
    is-object: false
    output-artifact:
        - source-file-fakesdk
```
