import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";
import { create } from "react-test-renderer";

describe("Footer", () => {
  it("renders the correct categories", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Category")).toBeInTheDocument();
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
    expect(getByText("Terms of services")).toBeInTheDocument();
    expect(getByText("About us")).toBeInTheDocument();
  });

  it("renders the correct account links", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Account")).toBeInTheDocument();
    expect(getByText("Live")).toBeInTheDocument();
    expect(getByText("FAQ")).toBeInTheDocument();
    expect(getByText("Premium")).toBeInTheDocument();
    expect(getByText("Privacy policy")).toBeInTheDocument();
  });

  it("renders the correct message links", () => {
    const { getByText } = render(<Footer />);
    expect(getByText("Messages")).toBeInTheDocument();
    expect(getByText("You must watch")).toBeInTheDocument();
    expect(getByText("Recent release")).toBeInTheDocument();
    expect(getByText("Top IMDB")).toBeInTheDocument();
  });

  it("renders the correct trademark text", () => {
    const { asFragment, getByText } = render(<Footer />);
    expect(
      getByText(`MovieApp ® ${new Date().getFullYear()}`)
    ).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
