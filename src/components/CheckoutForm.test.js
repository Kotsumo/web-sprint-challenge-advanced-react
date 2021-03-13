import React from "react";
import { screen, render, queryByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);

    const header = screen.queryByText(/Checkout Form/i);

    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const addressInput = screen.getByLabelText(/Address/i);
    const cityInput = screen.getByLabelText(/City/i);
    const stateInput = screen.getByLabelText(/State/i);
    const zipInput= screen.getByLabelText(/Zip/i);

    userEvent.type(firstNameInput, 'Bill')
    userEvent.type(lastNameInput, 'Smith')
    userEvent.type(addressInput, '123 main st.')
    userEvent.type(cityInput, 'San Jose')
    userEvent.type(stateInput, 'CA')
    userEvent.type(zipInput, '95131')

    // find and click submit button
    const button = screen.getByRole("button", {name: /Checkout/i});
    userEvent.click(button);

    const plantText = screen.queryByText(/You have ordered some plants!/i);
    expect(plantText).toBeInTheDocument();
});
