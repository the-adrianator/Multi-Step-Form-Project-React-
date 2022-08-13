export default function RightImage(props) {
  const RIGHTIMAGE_DATA = [
    "https://assets.codepen.io/6060109/form-stage-1.png",
    "https://assets.codepen.io/6060109/form-stage-2.png",
    "https://assets.codepen.io/6060109/form-stage-3.png",
    "https://assets.codepen.io/6060109/form-stage-4.png"
  ];
  return <img alt="" src={RIGHTIMAGE_DATA[props.stage]} />;
}
