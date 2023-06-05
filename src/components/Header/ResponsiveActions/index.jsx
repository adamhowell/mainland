import React from "react";
import { IconDisplay, IconPhone, IconTablet } from "../../Icons";
import { Button } from "../../Buttons";
import { useDispatch, useSelector } from "react-redux";
import { setResponsiveView } from "../../../redux/layout-reducer";

const responsiveButtons = [
  { name: "lg", icon: <IconDisplay /> },
  { name: "md", icon: <IconTablet /> },
  { name: "sm", icon: <IconPhone /> },
];

const ResponsiveActions = () => {
  const { responsiveView } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  return (
    <div className="flex align-center h-full">
      {responsiveButtons.map((button, i) => (
        <Button
          key={`rbi-${i}`}
          isUnderline
          active={responsiveView === button.name}
          onClick={() => dispatch(setResponsiveView(button.name))}
          className={`text-lg h-full`}
        >
          {button.icon}
        </Button>
      ))}
    </div>
  );
};

export default ResponsiveActions;
