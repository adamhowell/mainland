import React from "react";
import { IconDisplay, IconLaptop, IconPhone, IconTablet } from "../../Icons";
import { Button } from "../../Buttons";
import { useDispatch, useSelector } from "react-redux";
import { setResponsiveView } from "../../../redux/layout-reducer";

const responsiveButtons = [
  { name: "sm", icon: <IconPhone /> },
  { name: "md", icon: <IconTablet /> },
  { name: "lg", icon: <IconLaptop /> },
  { name: "xl", icon: <IconDisplay /> },
];

const ResponsiveActions = () => {
  const { responsiveView } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center h-full">
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
