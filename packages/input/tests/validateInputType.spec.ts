import validateInputType from "../src/validateInputType"
import { ref } from "vue"

describe("Validate Input Type", () => {
  it("return true when given type is in InputTypesEnum", () => {
    expect(validateInputType(ref("text"))).toBeTruthy()
  })

  it("throws an error if given type mismatch", () => {
    // @ts-ignore
    expect(() => validateInputType(ref("shit"))).toThrowError("Improper field type: shit")
  })
})
