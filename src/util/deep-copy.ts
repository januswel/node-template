const deepCopy = <T extends Array<any> | {}>(target: T): T => JSON.parse(JSON.stringify(target))
export default deepCopy
