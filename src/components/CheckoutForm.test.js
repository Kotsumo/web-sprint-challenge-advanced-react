import React from "react";
import { screen, render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.queryByText(/Checkout Form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    //Arrange
    render(<CheckoutForm />);

    const name = "Bill";

    //Act

    // get firstname input
    // userEvent.type(screen.getByRole('textbox'), "Bill")
    // expect(screen.getByRole('textbox')).toHaveValue(/bill/i)

    // const lastName = screen.getByText();
    // userEvent.type(lastName, "");

    const addressInput = screen.getByLabelText(/Age/i);
    userEvent.type(addressInput, "3");

    const cityInput = screen.getByLabelText("City");
    userEvent.type(cityInput, /San Jose/i);

    const stateInput = screen.getByLabelText("State");
    userEvent.type(stateInput, "CA");

    const zipInput = screen.getByLabelText("zip");
    userEvent.type(zipInput, "95131");

    // find and click submit button
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Asset
    const nameText = screen.queryByText(name);
    expect(nameText).toBeInTheDocument();
});
