export default function NameDisplay({ name }) {

  if (!name) {
    throw new Error("Name is required sdfgsdfgsdfg")
  }

  return (
    <div>{name}</div>
  )
}
