import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import App from "../App";
import { shallow } from "enzyme";

describe("React App Component tests", () => {
  test("Title", () => {
    let text = "React the best";
    const { getByText } = render(
      <App
        info="Need to learn Springboot, ASAP"
        react={{ title: text }}
        java={true}
        redux={{ title: { reduxTitle: "" } }}
      />
    );
    expect(getByText(text)).toBeInTheDocument();
  });

  test("title prop", () => {
    const wrapper = shallow(
      <App
        info="Need to learn Springboot, ASAP"
        react={{ title: "React the best" }}
        java={true}
        redux={{ title: { reduxTitle: "" } }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar el subtitulo enviado por props", () => {
    const subtitle = "This is my new great subtitle.";
    const wrapper = shallow(
      <App
        info="Need to learn Springboot, ASAP"
        react={{}}
        java={true}
        redux={{ title: { reduxTitle: "" } }}
        subtitle={subtitle}
      />
    );

    const subtitleRendered = wrapper.find("h2").text();

    expect(subtitleRendered).toStrictEqual(subtitle);
  });
});
