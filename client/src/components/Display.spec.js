import React from "react";
import { render, getByTestId } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";

describe("<Display/>", () => {
    it("should render the display comp", () => {
        const testState= {
            player: "Winnie",
            balls: 0,
            strikes: 0
        };
        const { getByTestId } = render(<Display atBat={testState} />);
        const player = getByTestId(/player/i);
        
    })
})