# configuration

See documentation [here](doc/00-overview.md)

``` yaml
use-extension:
  "@autorest/modelerfour": "latest"


pipeline-model: v3
fakesdk: true

pipeline:
    fakesdk:
        input: modelerfour
        output-artifact: source-file-fakesdk
        scope: fakesdk

    fake/namer:
        input: fakesdk
        output-artifact: source-file-fakesdk-namer

    fakesdk/emitter:
        input: 
            - fakesdk
            - fake/namer
        scope: scope-fakesdk

scope-fakesdk:
    is-object: false
    output-artifact:
        - source-file-fakesdk
```
