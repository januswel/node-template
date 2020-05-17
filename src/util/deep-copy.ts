type JSONSerializable = number | string | boolean | null | JSONSerializableObject | JSONSerializableArray
type JSONSerializableObject = JSONSerializableObjectStringKey | JSONSerializableObjectNumberKey
type JSONSerializableObjectStringKey = { [key: string]: JSONSerializable }
type JSONSerializableObjectNumberKey = { [key: number]: JSONSerializable }
type JSONSerializableArray = Array<JSONSerializable>

export default function deepCopy(target: JSONSerializable): JSONSerializable {
  return JSON.parse(JSON.stringify(target))
}
