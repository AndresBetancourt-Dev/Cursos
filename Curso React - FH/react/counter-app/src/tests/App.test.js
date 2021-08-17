import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import React from "react";
import App from "../App";
import { shallow } from "enzyme";

describe("React App Component tests", () => {
  test("title prop", () => {
    const wrapper = shallow(
      <App
        info="Need to learn Springboot, ASAP"
        react={{}}
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
