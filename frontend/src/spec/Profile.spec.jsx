import { render, screen } from '@testing-library/react';
import Profile from "../components/Profile/Profile";

describe("<Profile/>", () => {
  it("should display elements", () => {
    render(<Profile/>)
  })
})