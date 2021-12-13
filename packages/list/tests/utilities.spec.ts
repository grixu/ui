import { ZodError } from "zod"
import { isAllowedComponent, isArrayNotEmpty } from "../src"

describe("isAllowedComponent", () => {
  it("validation passes", () => {
    expect(isAllowedComponent("stack")).toBeTruthy()
  })

  it("checking if route types are okay", () => {
    expect(() => {
      isAllowedComponent("lol")
    }).toThrow("Type mismatch")
  })

  it("checking if item is string", () => {
    try {
      isAllowedComponent(2)
      fail()
    } catch (e) {
      expect(e).toBeInstanceOf(ZodError)
    }
  })
})

describe("isArrayNotEmpty", () => {
  it("return true when data is fine", () => {
    expect(isArrayNotEmpty([1, 2, 3])).toBeTruthy()
  })

  it("throws an error when array is empty", () => {
    expect(() => isArrayNotEmpty([])).toThrow("Input data are mismatched")
  })

  it("throws an error when data is not an array", () => {
    expect(() => isArrayNotEmpty(1)).toThrow("Input data are mismatched")
  })
})
