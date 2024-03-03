import { render } from "@testing-library/react";
import DynamicSection from "../../src/components/DynamicSection";

describe("Dynamic Section test", () => {
  it("Should show the correct components", async () => {
    const basket = "basket2";
    const component = render(<DynamicSection configKey={basket} />);

    expect(component.getByTestId("banana")).toBeVisible();
    expect(component.getByTestId("apple")).toBeVisible();
  });
});
