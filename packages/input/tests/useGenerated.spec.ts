import useGeneratedId from "../src/useGeneratedId"
import { isRef, ref } from "vue"

describe("useGeneratedId", () => {
  it("generates uuid when no value given", () => {
    const returnedValue = useGeneratedId()

    expect(returnedValue.value).toBeTruthy()
    expect(typeof returnedValue.value).toBe("string")
    expect(returnedValue.value).toHaveLength(36)
  })

  it("pass given value if non-empty string", () => {
    const givenValue = ref("my-custom-id")

    const returnedValue = useGeneratedId(givenValue)

    expect(returnedValue.value).toBeTruthy()
    expect(returnedValue.value).toMatch(givenValue.value)
  })

  it("returns Ref<string>", () => {
    const returnedValue = useGeneratedId()

    expect(isRef(returnedValue)).toBeTruthy()
  })

  it("generate uuid when any-non string value was given", () => {
    const returnedValue = useGeneratedId(1)

    expect(returnedValue.value).toBeTruthy()
    expect(returnedValue.value).not.toBe(1)
    expect(returnedValue.value).toHaveLength(36)
  })

  it("handles also non-reactive value as input", () => {
    const givenValue = "my-custom-uuid"

    const returnedValue = useGeneratedId(givenValue)

    expect(returnedValue.value).toBeTruthy()
    expect(returnedValue.value).toMatch(givenValue)
    expect(isRef(returnedValue)).toBeTruthy()
  })
})
