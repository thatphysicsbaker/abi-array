4. Different ways of cloning an object.

1. using objrct.assign
const data = { name: "Alice", age: 26 }
const copy2 = Object.assign({}, data)

2. Usind spread syntax
const data = { name: "Alice", age: 26 }
const copy1 = { ...data }

3. Using JavaScript Object Notation (JSON)
const data = { name: "Alice", age: 26 }
const copy3 = JSON.parse(JSON.stringify(data))

4. Using Structured clone
const data = { name: "Alice", age: 26 }
const copy4 = structuredClone(data)