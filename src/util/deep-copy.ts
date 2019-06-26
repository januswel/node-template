const deepCopy = (target: Array<any> | Object) => JSON.parse(JSON.stringify(target))
export default deepCopy
