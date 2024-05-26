import PropTypes from "prop-types";

import style from "./style.module.css";
const { heading } = style;

const DiscriptionSection = ({ children }) => {
  return <h3 className={`${heading} subtitle normal`}>{children}</h3>;
};

DiscriptionSection.propTypes = {
  children: PropTypes.string,
};

export default DiscriptionSection;
