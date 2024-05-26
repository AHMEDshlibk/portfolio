import PropTypes from "prop-types";

import style from "./style.module.css";
const { heading } = style;

const TitleSection = ({ children }) => {
  return <h2 className={`${heading} body-3 medium`}>{children}</h2>;
};

TitleSection.propTypes = {
  children: PropTypes.string,
};

export default TitleSection;
