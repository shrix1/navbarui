import React from "react";

const Example = () => {
  const NavElements = (props: any) => {
    return (
      <div>
        <ul className="flex space-x-10">{props.children}</ul>
      </div>
    );
  };

  const NavItems = (props: any) => {
    return (
      <li>
        {props.name} {props.icon}
      </li>
    );
  };

  return (
    <div className="flex justify-around items-center">
      <h1>Title</h1>
      <NavElements>
        <NavItems name="home" icon="☮️" />
        <NavItems name="about" />
        <NavItems name="contact" />
      </NavElements>
    </div>
  );
};

export default Example;
