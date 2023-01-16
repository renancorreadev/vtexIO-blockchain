# Change MiniCart checkout button

> edit in `vtex.messages@1.65.0`

## Portuguese

### Mutation

```gql
  mutation Save($saveArgs: SaveArgsV2!) {
    saveV2(args: $saveArgs)
  }
```

### Query

```gql
  {
    "saveArgs": {
      "to": "pt-BR",
      "messages": [
        {
          "srcLang": "en-DV",
          "srcMessage": "store/minicart.go-to-checkout",
          "context": "vtex.minicart@2.x",
          "targetMessage": "Solicitar Cotação"
        }
      ]
    }
  }
```
