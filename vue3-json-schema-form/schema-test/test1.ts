// eslint-disable-next-line @typescript-eslint/no-var-requires
const Ajv = require("ajv")
// eslint-disable-next-line @typescript-eslint/no-var-requires
const localize = require("ajv-i18n")
const ajv = new Ajv()
const schema = {
  type: "object",
  properties: {
    foo: {
      type: "integer"
    },
    bar: {
      type: "string",
      minLength: 3,
      format: "test"
    },
    arr: {
      type: "array",
      items: {
        type: "number"
      }
    }
  },
  required: ["foo"],
  additionalProperties: false
}
ajv.addFormat("test", (data: string) => {
  return data === "1abc"
})
const data = { foo: 1, bar: "11", arr: [1, 23] }
const valid = ajv.validate(schema, data)
if (!valid) {
  localize.zh(ajv.errors)
  console.log(ajv.errors)
}
