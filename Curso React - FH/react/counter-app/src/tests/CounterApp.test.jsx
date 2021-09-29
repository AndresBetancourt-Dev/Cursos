import { describe, test, expect, beforeEach } from "@jest/globals";
import React from "react";
import { shallow } from "enzyme";
import { CounterApp } from "../CounterApp";
import { render } from "@testing-library/react";

describe("Test for the Counter App", () => {
  let value = 0;
  let Component = shallow(<CounterApp value={value} />);

  beforeEach(() => {
    value = 0;
    Component = shallow(<CounterApp value={value} />);
  });

  test("Match Snapshot", () => {
    expect(Component).toMatchSnapshot();
  });

  test("Match Value sent by Props", () => {
    const Component = shallow(<CounterApp value={value} />);

    const renderValue = Component.find("h2").text().trim();

    expect(renderValue).toBe(value.toString());
    expect(renderValue).not.toBe("101");
  });

  test("Add Button Click Test", () => {
    Component.find("button").at(0).simulate("click");
    const renderValue = Component.find("h3").text().trim();

    expect(renderValue).toEqual("1".toString());
  });

  test("Substract Button Click Test", () => {
    Component.find("button").at(2).simulate("click");
    const renderValue = Component.find("h3").text().trim();

    expect(renderValue).toEqual((value - 1).toString());
  });

  test("Reset Button Click Test", () => {
    Component.find("button").at(0).simulate("click");
    Component.find("button").at(0).simulate("click");
    Component.find("button").at(0).simulate("click");
    Component.find("button").at(0).simulate("click");
    Component.find("button").at(0).simulate("click");
    Component.find("button").at(0).simulate("click");
    Component.find("button").at(0).simulate("click");
    Component.find("button").at(0).simulate("click");
    Component.find("button").at(0).simulate("click");
    Component.find("button").at(0).simulate("click");

    let renderValue = Component.find("h3").text().trim();

    expect(renderValue).toBe("10");

    Component.find("button").at(1).simulate("click");

    renderValue = Component.find("h3").text().trim();

    expect(renderValue).toBe(value.toString());
    expect(renderValue).not.toBe("10");
  });
});
