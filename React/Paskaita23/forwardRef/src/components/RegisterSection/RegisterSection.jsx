import { forwardRef } from "react"

const RegisterSection = forwardRef(({props}, ref) => {
  return (
    <section ref={ref}>
      <h1>Leave your email</h1>
      <input type="email" />
    </section>
  )
})

RegisterSection.displayName = "RegisterSection"

export default RegisterSection;