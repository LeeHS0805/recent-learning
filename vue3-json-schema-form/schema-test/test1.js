// eslint-disable-next-line @typescript-eslint/no-var-requires
var Ajv = require("ajv");
// eslint-disable-next-line @typescript-eslint/no-var-requires
var localize = require("ajv-i18n");
var ajv = new Ajv();
var schema = {
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
};
ajv.addFormat("test", function (data) {
    return data === "abc";
});
var data = { foo: 1, bar: "112", arr: [1, 23] };
var valid = ajv.validate(schema, data);
if (!valid) {
    localize.zh(ajv.validate);
}
