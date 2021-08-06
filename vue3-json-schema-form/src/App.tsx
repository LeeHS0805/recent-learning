import { defineComponent, reactive, ref, Ref } from "vue"
import { createUseStyles } from "vue-jss"
import MonacoEditor from "@/components/MonacoEditor"

const useStyles = createUseStyles({
  editor: {
    minHeight: 400
  }
})

function toJson(data: any) {
  return JSON.stringify(data, null, 2)
}

const schema = {
  type: "string"
}
export default defineComponent({
  setup: function (props) {
    const schemaRef: Ref<any> = ref(schema)
    const handelCodeChange = (code: string) => {
      let schema: any
      try {
        schema = JSON.parse(code)
        // eslint-disable-next-line no-empty
      } catch (err) {}
      schemaRef.value = schema
    }
    const classesRef = useStyles()
    return () => {
      const classes = classesRef.value
      const code = toJson(schemaRef.value)
      return (
        <div>
          <MonacoEditor
            code={code}
            onChange={handelCodeChange}
            title="schema"
            class={classes.editor}
          />
        </div>
      )
    }
  }
})
