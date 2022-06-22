import React from "react";
import { create } from "react-test-renderer";

import { SandpackProvider } from "../../";

import { SandpackCodeEditor } from ".";

describe("read-only", () => {
  it("should render the read-only flag", () => {
    const { root } = create(
      <SandpackProvider>
        <SandpackCodeEditor readOnly />
      </SandpackProvider>
    );

    const readOnlyFlag = root.findByProps({ "data-testId": "read-only" });

    expect(readOnlyFlag.props.children).toBe("Read-only");
  });

  it("should not render the read-only flag, when showReadOnly is false", () => {
    const { root } = create(
      <SandpackProvider>
        <SandpackCodeEditor showReadOnly={false} readOnly />
      </SandpackProvider>
    );

    try {
      root.findByProps({ "data-testId": "read-only" });
    } catch (err) {
      expect(err.message).toBe(
        'No instances found with props: {"data-testId":"read-only"}'
      );
    }
  });
});
