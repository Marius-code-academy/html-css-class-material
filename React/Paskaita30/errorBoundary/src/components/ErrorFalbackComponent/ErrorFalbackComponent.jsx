export default function errorFalbackComponent({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>Something went wrong:</p>
      <p>{error.message}</p>
    </div>
  )
}
